import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay.component';
import { OverlayConfig } from './overlay.config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OverlayComponent
  ],
  exports: [
    OverlayComponent
  ],
  entryComponents: [
    OverlayComponent
  ]
})
export class OverlayModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: OverlayModule,
      providers: [
        OverlayConfig
      ]
    };
  }
}
