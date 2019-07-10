import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule,
  MatCardModule
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule]
})
export class CustomMaterialModule { }
