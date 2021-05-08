import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { MaterialsModule } from './materials.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AuthModule { }
