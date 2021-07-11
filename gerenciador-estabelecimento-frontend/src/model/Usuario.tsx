export default class Usuario{
    private id!: number;
    private login!: string;
    private password!: string;
    private email!: string;

    setId(id_usuario:number) {
        this.id = id_usuario;
    }

    setLogin(login:string) {
        this.login = login;
    }
    
    setPassword(password:string) {
        this.password = password;
    }
    
    setEmail(email:string) {
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getLogin() {
        return this.login;
    }
    
    getPassword() {
        return this.password;
    }
    
    getEmail() {
        return this.email;
    }
}