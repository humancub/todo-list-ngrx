import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'authentication', pathMatch: 'full' },
     { path: 'authentication', component: AuthenticationComponent },
    { path: 'to-do-list', component: ToDoListComponent },
    //{ // path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}