import { Component, Input } from '@angular/core';
import { OverlayConfig } from './overlay.config';

@Component({
  selector: 'ui-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  /** If true, this overlay appears in the center of the screen */
  @Input() fullscreen: boolean;

  /** Set default property values */
  public constructor(config: OverlayConfig) {
    Object.assign(this, config);
  }
}
