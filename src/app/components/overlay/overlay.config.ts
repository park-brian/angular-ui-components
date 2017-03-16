import { Injectable } from '@angular/core';

@Injectable()
export class OverlayConfig {
  /** If true, this overlay appears in the center of the screen */
  public fullscreen: boolean = false;
}