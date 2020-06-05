import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { rootRouterConfig } from './app-routes';
import { AppComponent } from './app.component';
import { ConsultarPerfilComponent } from './ApiGit/consultar-perfil/consultar-perfil.component';
import { ApiGitService } from './ApiGit/ApiGit.service';
import { MenuComponent } from './Navegacao/menu/menu.component';
import { FooterComponent } from './Navegacao/footer/footer.component';
import { HomeComponent } from './Navegacao/home/home.component';
import { ConsultarRepositorioComponent } from './ApiGit/consultar-repositorio/consultar-repositorio.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPerfilComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ConsultarRepositorioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ApiGitService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
