import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";

const AngularModules = [FormsModule, ReactiveFormsModule]

const AngularMaterialModules = [ 
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule
]

@NgModule({
    imports: [
        ...AngularModules,
        ...AngularMaterialModules
    ],
    exports: [
        ...AngularModules,
        ...AngularMaterialModules
    ]
})

export class SharedModule {}