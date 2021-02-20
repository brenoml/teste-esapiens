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
     "Authorization" : "Token 08d12c8ca21f14935989e29850d80d10bd8e948e"
  };   

  PesquisarPerfil(nome: string) : Observable<Perfil>{

// this.http.post("https://github.com/login/oauth/08d12c8ca21f14935989e29850d80d10bd8e948e", null);

    return this.http.get<Perfil>(this.UrlService + "users/" + nome,
    {headers : this.headers})
  }    

  PesquisarRepositorios(nome: string, pagina: number ) : Observable<Repositorio[]>{
    return this.http.get<Repositorio[]>(this.UrlService + "users/" + nome + "/repos" + "?page=" + pagina,
    {headers : this.headers})
  }    
} 