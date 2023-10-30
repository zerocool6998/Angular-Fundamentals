import { Injectable, NgModule } from '@angular/core';
import { ExtraOptions, ResolveFn, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { SizerComponent } from '../app/sizer/sizer.component';
import { DropdownMenuResultComponent } from './dropdown-menu-result/dropdown-menu-result.component';
import { AppComponent } from './app.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { Title } from '@angular/platform-browser';


// const resolvedChildAtTitle: ResolveFn<string> = () => Promise.resolve("childa");

const routerOptions: ExtraOptions ={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
};


const routes: Routes = [
  {path: 'Sizer' , component: SizerComponent, title: "Sizer"},
  {path:'DropdownMenu', component: DropdownMenuResultComponent, title: "Dropdown Menu", children:[
    {path:'childa' ,component: FormEditorComponent, title: "childa"},
    {path:'childb' ,component: NameEditorComponent, title:"childb"},
  ]},
  {path: 'content' ,component:AppComponent},
  {path:'', redirectTo:'content', pathMatch:'full'}
];

//Custom Title using "TitleStrategy"
@Injectable({providedIn : 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title : Title) {
    super();
  }
  override updateTitle(routerState : RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if(title !== undefined) {
      this.title.setTitle(`MyApp | ${title}`);
    }
  }
      
  }



@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
  providers: [{provide: TitleStrategy , useClass:TemplatePageTitleStrategy}]
})
export class AppRoutingModule { }

// recheck Nesting routes
