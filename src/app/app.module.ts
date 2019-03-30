import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MydialogComponent } from './mydialog/mydialog.component';
import { 
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatTabsModule,
} from '@angular/material';
import { CourseServiceService } from 'src/services/course-service.service';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent
  ],
  imports: [
    // NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [CourseServiceService],
  entryComponents:[MydialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
