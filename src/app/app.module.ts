import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Add Material Component Module
import { MaterialModule } from './material/material.module';

// Add and Register Material related Component
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { IconsComponent } from './icons/icons.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ListComponent } from './list/list.component';
import { GridListComponent} from './grid-list/grid-list.component';
import { ExpansionPanelComponent} from './expansion-panel/expansion-panel.component';
import { CardsComponent} from './cards/cards.component';
import { TabsComponent}  from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    IconsComponent,
    BadgeComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    MenuComponent,
    SidenavComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
