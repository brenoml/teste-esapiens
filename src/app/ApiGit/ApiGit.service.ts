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
     "Authorization" : "Token 3f6dfc9a3fb6ca619d8e0f0db0796744818503d4"
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