import { Md5 } from 'md5-typescript';
import { createContext, useEffect, useState, useContext } from 'react';
import Resposta from '../model/Resposta';
import Usuario from '../model/Usuario';
import api from './api';
import { setTokenCheck } from './api';
import { setTokenOnHeader } from './api';

interface AuthContextData {
  signed: boolean;
  user: Usuario | null;
  Login(username: string, password: string): Promise<Resposta>;
  Logout(): void;
}

const TOKEN_KEY = "@aef-Token";

const USER_KEY = "@aef-User";

const IDUSER_KEY = "@aef-IdUser";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export function Logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(IDUSER_KEY);
}

export function getIdLogged () {
  return localStorage.getItem(IDUSER_KEY);
}

export function getToken () {
  return localStorage.getItem(TOKEN_KEY);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null);

  function Logout() {
    setUser(null);

    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(IDUSER_KEY);
  }
  
  async function Login(username: string, password: string): Promise<Resposta> {
    let resposta: Resposta = new Resposta();
    let url = api.defaults.baseURL + "/auth/login"
    let objAuth = { "username": username, "password": Md5.init(password)};
    const response = await api.post(url, objAuth, { headers:{ 'Content-Type' : 'application/json' }});     
    if(response.data == null){
      resposta.erro = true;
      resposta.statusCode = response.status;
      resposta.message = "Email ou Senha inválido";
    }
    else{
      setUser(response.data.user);
      setTokenOnHeader(response.data.token);
      setTokenCheck(Logout);
      
      localStorage.setItem(TOKEN_KEY, response.data.token);
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
      localStorage.setItem(IDUSER_KEY, response.data.user.id);

      resposta.erro = false;
      resposta.statusCode = response.status;
      resposta.message = "Login efetuado com sucesso!";
    }
    
    return resposta
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem(USER_KEY);
    const storagedToken = localStorage.getItem(TOKEN_KEY);
    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
    if (storagedToken) {
      setTokenOnHeader(storagedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout}}>
      {children}
    </AuthContext.Provider>
  );
};