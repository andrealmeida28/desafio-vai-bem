// @flow 
import Estabelecimento from '../model/Estabelecimento';
import api from './api';

// export function GetMeusCursos(idLogged:any) {
//     let url = api.defaults.baseURL + "/curso-usuario/user/" + idLogged;
//     console.log(url)
//     return api.get(url, { headers:{ 'Content-Type' : 'application/json' }});    
// };

export function GetAllEstabelecimentos() {
    let url = api.defaults.baseURL + "/estabelecimento"
    return api.get(url, { headers:{ 'Content-Type' : 'application/json' }});    
};

export function GetEstabelecimentoByLocalization(localizacao: string) {
    let url = api.defaults.baseURL + "/estabelecimento/localizacao?localizacao=" + localizacao
    return api.get(url, { headers:{ 'Content-Type' : 'application/json' }});    
};

export function GetEstabelecimentoById(id: number) {
    let url = api.defaults.baseURL + "/estabelecimento/" + id
    return api.get(url, { headers:{ 'Content-Type' : 'application/json' }});    
};

export function CreateEstabelecimento(estabelecimento: Estabelecimento) {
    let url = api.defaults.baseURL + "/estabelecimento"
    return api.post(url, estabelecimento, { headers:{ 'Content-Type' : 'application/json' }});    
};

export function EditEstabelecimento(id: number, estabelecimento: Estabelecimento) {
    let url = api.defaults.baseURL + "/estabelecimento/" + id
    return api.patch(url, estabelecimento, { headers:{ 'Content-Type' : 'application/json' }});    
};

export function DeleteEstabelecimento(id: number) {
    let url = api.defaults.baseURL + "/estabelecimento/" + id
    return api.delete(url, { headers:{ 'Content-Type' : 'application/json' }});    
};