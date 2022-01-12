import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UIShellModule,IconModule, IconService ,ButtonModule} from 'carbon-components-angular';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';
import { ModalModule } from 'carbon-components-angular';
import { PlaceholderModule } from 'carbon-components-angular';
import { CatalogComponent } from './catalog/catalog.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DocsComponent } from './docs/docs.component';
import { SupportComponent } from './support/support.component';
import { Link1Component } from './manage/link1/link1.component';
import { Link2Component } from './manage/link2/link2.component';
import { Link3Component } from './manage/link3/link3.component';
import { HeaderFluidComponent } from './header-fluid/header-fluid.component';
import { ModalComponent } from './modal/modal.component';
import { ModalStoryComponent } from './modal-story/modal-story.component';
import { UnityComponent } from './unity/unity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    SideNavComponent,
    DocsComponent,
    SupportComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    HeaderFluidComponent,
    ModalComponent,
    ModalStoryComponent,
    UnityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    ButtonModule,
    ModalModule,
    PlaceholderModule,

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(protected iconService: IconService) {
    iconService.registerAll([
      Notification16,
      UserAvatar16,
      AppSwitcher16
    ]);
  }
}
