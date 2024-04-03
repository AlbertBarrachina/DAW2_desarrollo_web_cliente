import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { FotoFormularioComponent } from './foto-formulario/foto-formulario.component';

const routes: Routes = [
  { path: 'fotos', component: FotosComponent },
  { path: 'sobre-nosotros', component:SobreNosotrosComponent },
  { path: '', redirectTo: '/fotos', pathMatch:'full'},
  { path: '**', redirectTo: '/sobre-nosotros', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
