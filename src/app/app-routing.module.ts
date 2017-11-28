import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: 'pages', pathMatch: 'full'},
    {path: '**', redirectTo: 'pages/dashboard'},
  ], { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
