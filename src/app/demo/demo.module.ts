import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './demo.component';
import { SpinnerModule } from '../components';
import { OverlayModule } from '../components';
import { SelectModule } from '../components';
import { TreeViewModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    SpinnerModule.forRoot(),
    OverlayModule.forRoot(),
    SelectModule.forRoot(),
    TreeViewModule.forRoot()
  ],
  exports: [
    DemoComponent
  ],
  declarations: [
    DemoComponent
  ]
})
export class DemoModule { }
