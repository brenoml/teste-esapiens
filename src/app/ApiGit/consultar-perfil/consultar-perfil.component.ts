import { Component }         from '@angular/core';
import { ApiGitService }     from '../ApiGit.service';
import { Perfil }            from '../perfil';

@Component({
  selector: 'app-consultar-perfil',
  templateUrl: './consultar-perfil.component.html',
  styleUrls: ['./consultar-perfil.component.css']
})
export class ConsultarPerfilComponent{

  constructor(private gitService: ApiGitService) { }
  
  public perfil: Perfil = <Perfil>{    
    login:         "",
    avatar_url:    "",
    html_url:      "",
    followers_url: "",
    following_url: "",
    email:         "",
    bio:           "",
    public_repos:  0,     
    public_gists:  0,
    followers:     0,
    following:     0,
    created_at:    null,  
    updated_at:    null
  }; 

  public nome: string;

  pesquisar(event: any): void {    
    this.nome = event.target.value;
    this.gitService.PesquisarPerfil(this.nome)
    .subscribe(
      _perfil => {
        this.perfil = _perfil;
      },
      error => console.log(error)
    )
    
    if(this.perfil.login != event.target.value){
      this.perfil.login = "";
    }
  }
}
