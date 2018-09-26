import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { CompaniesComponent } from './companies/companies.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'companies', component: CompaniesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    CompaniesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
