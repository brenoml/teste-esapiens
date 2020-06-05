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
    "Authorization" : "Token bd2072fc300231eac7ab365876f969b6ea678eca"
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