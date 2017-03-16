import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './demo.component';
import { SpinnerModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SpinnerModule.forRoot()
  ],
  exports: [
    DemoComponent
  ],
  declarations: [
    DemoComponent
  ]
})
export class DemoModule { }
