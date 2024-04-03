import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';



@NgModule({
  declarations: [
    WelcomeMsgComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EmailDirective
  ]
})
export class SharedModule { }
