import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent, DialogDataInfo } from './people/people.component';
import { CompaniesComponent } from './companies/companies.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'companies', component: CompaniesComponent }
];

@NgModule({
  declarations: [
    DialogDataInfo,
    AppComponent,
    PeopleComponent,
    CompaniesComponent,
    FilterPipe
  ],
  entryComponents: [DialogDataInfo],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ChartsModule,
    FormsModule,
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
