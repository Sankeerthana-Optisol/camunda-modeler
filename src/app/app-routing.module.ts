import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramComponent } from './diagram/diagram.component';
import { XMLviewerComponent } from './xmlviewer/xmlviewer.component';

const routes: Routes = [
  { path: '', component: DiagramComponent },
  { path: 'xmlViewer', component: XMLviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
