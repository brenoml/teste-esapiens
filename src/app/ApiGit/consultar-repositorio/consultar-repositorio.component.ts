import { Component, OnInit } from '@angular/core';
import { ApiGitService }     from '../ApiGit.service';
import { Repositorio }       from '../Repositorio';
import { Perfil }            from '../Perfil';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-consultar-repositorio',
  templateUrl: './consultar-repositorio.component.html',
  styleUrls: ['./consultar-repositorio.component.css']
})
export class ConsultarRepositorioComponent implements OnInit {
  
  constructor(private gitService: ApiGitService, private route: ActivatedRoute) { }


  public repositorios:       Repositorio[];
  public perfil:             Perfil;

  public ordenacaoDesc:      boolean = true;
  public nome:               string;
  public numeroPagina:       number = 1;
  public numeroTotalPaginas: number = 0;

  ngOnInit(): void {
    this.nome = this.route.snapshot.paramMap.get("login")
    if(this.nome != null)
    {      
      this.pesquisarPerfil(this.nome);
      this.atualizarRepositorios(this.nome, 1, this.ordenacaoDesc);   
    }
  }

  pesquisarRepositorios(event: any): void {
    this.nome = event.target.value;
    this.numeroPagina = 1;    
    this.atualizarRepositorios(this.nome, this.numeroPagina, this.ordenacaoDesc);
    this.pesquisarPerfil(this.nome);
  }

  aumentarPagina(){
    this.numeroPagina++;
    this.atualizarRepositorios(this.nome, this.numeroPagina, this.ordenacaoDesc);
  }

  diminuirPagina(){
    this.numeroPagina--;
    this.atualizarRepositorios(this.nome, this.numeroPagina, this.ordenacaoDesc);
  }

  alterarOrdenacao(){
    this.ordenacaoDesc == false ?  this.ordenacaoDesc = true :  this.ordenacaoDesc = false      
    this.atualizarRepositorios(this.nome, this.numeroPagina, this.ordenacaoDesc);   
  }

  atualizarRepositorios(nome, numeroPagina, ordenacaoDesc){
    if(ordenacaoDesc == true){
      this.gitService.PesquisarRepositorios(nome, numeroPagina)
      .subscribe(
        _repositorios => {
          this.repositorios = _repositorios.sort(function(a,b) {return b.stargazers_count - a.stargazers_count });
        },
        error => console.log(error)
      )
    }
    else{
      this.gitService.PesquisarRepositorios(nome, numeroPagina)
      .subscribe(
        _repositorios => {
          this.repositorios = _repositorios.sort(function(a,b) {return a.stargazers_count - b.stargazers_count });
        },
        error => console.log(error)
      )
    }
  }

  pesquisarPerfil(nome){
    this.gitService.PesquisarPerfil(nome)
    .subscribe(
      _perfil => {
        this.perfil = _perfil;
        this.numeroTotalPaginas = this.perfil.public_repos / 30;   
      },
      error => console.log(error)
    )
  }
}