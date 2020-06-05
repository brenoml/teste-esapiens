import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Perfil }      from './Perfil';
import { Observable }  from 'rxjs';
import { Repositorio } from './Repositorio';


@Injectable()
export class ApiGitService {     

  constructor(private http: HttpClient) {}     

  protected UrlService: string = "https://api.github.com/";    

  headers = {
    "Authorization" : "Token 5330d8680c4feda05583e4dec983529a77e34509"
  };   

  PesquisarPerfil(nome: string) : Observable<Perfil>{
    return this.http.get<Perfil>(this.UrlService + "users/" + nome,
    {headers : this.headers})
  }    

  PesquisarRepositorios(nome: string, pagina: number ) : Observable<Repositorio[]>{
    return this.http.get<Repositorio[]>(this.UrlService + "users/" + nome + "/repos" + "?page=" + pagina,
    {headers : this.headers})
  }    
} 