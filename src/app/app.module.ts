import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { SizerComponent } from './sizer/sizer.component';
import { DropdownMenuResultComponent } from './dropdown-menu-result/dropdown-menu-result.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ChildComponent,
    ProfileEditorComponent,
    FormEditorComponent,
    SizerComponent,
    DropdownMenuResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
