import { Routes } from '@angular/router';
import { HomeComponent } from './Navegacao/home/home.component';
import { ConsultarPerfilComponent } from './ApiGit/consultar-perfil/consultar-perfil.component';
import { ConsultarRepositorioComponent } from './ApiGit/consultar-repositorio/consultar-repositorio.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'consultarPerfil', component: ConsultarPerfilComponent},
    // { path: 'consultarRepositorio', component: ConsultarRepositorioComponent}
    { path: 'consultarRepositorio', component: ConsultarRepositorioComponent},
    { path: 'consultarRepositorio/:login', component: ConsultarRepositorioComponent, pathMatch: 'full'}
];