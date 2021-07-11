// @flow 
import Usuario from '../model/Usuario'
import { useAuth } from './auth';


export default function Autenticar(usuario:Usuario) {
    // let url = api.defaults.baseURL + "/auth/login"
    // let objAuth = { "username": usuario.getLogin(), "password": Md5.init(usuario.getPassword())};    
    const context = useAuth();
    return context.Login(usuario.getLogin(), usuario.getPassword())
    //return api.post(url, objAuth, { headers:{ 'Content-Type' : 'application/json' }});    
};