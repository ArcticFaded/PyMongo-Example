import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LabelNavComponent } from './label-nav/label-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UiScrollModule } from 'ngx-ui-scroll';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { OptionCardsComponent } from './option-cards/option-cards.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent },
  // { path: 'home'},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'second-page', component: SecondPageComponent },
  // { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LabelNavComponent,
    MyDashboardComponent,
    OptionCardsComponent
  ],
  imports: [
    BrowserModule,
    UiScrollModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
