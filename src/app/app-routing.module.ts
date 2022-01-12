import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './catalog/catalog.component';
import { DocsComponent } from './docs/docs.component';
import { Link1Component } from './manage/link1/link1.component';
import { Link2Component } from './manage/link2/link2.component';
import { Link3Component } from './manage/link3/link3.component';
import { ModalComponent } from './modal/modal.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SupportComponent } from './support/support.component';
import { UnityComponent } from './unity/unity.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'side-nav',component:SideNavComponent},
  {path:'catalog',component:CatalogComponent},
  {path:'docs',component:DocsComponent},
  {path:'support',component:SupportComponent},
  {path:'link1',component:Link1Component},
  {path:'link2',component:Link2Component},
  {path:'link3',component:Link3Component},
  {path:'unity',component:UnityComponent},
  {path:'modal',component:ModalComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
