/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-perspectiveCamera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera<
  T extends PerspectiveCamera = PerspectiveCamera,
  TARGS = [fov?: number, aspect?: number, near?: number, far?: number]
> extends ThCamera<T, TARGS> {
  public getType(): Type<PerspectiveCamera> {
    return PerspectiveCamera;
  }

  @Input()
  public set type(value: 'PerspectiveCamera') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set zoom(value: number) {
    if (this._objRef) {
      this._objRef.zoom = value;
    }
  }

  @Input()
  public set fov(value: number) {
    if (this._objRef) {
      this._objRef.fov = value;
    }
  }

  @Input()
  public set aspect(value: number) {
    if (this._objRef) {
      this._objRef.aspect = value;
    }
  }

  @Input()
  public set near(value: number) {
    if (this._objRef) {
      this._objRef.near = value;
    }
  }

  @Input()
  public set far(value: number) {
    if (this._objRef) {
      this._objRef.far = value;
    }
  }

  @Input()
  public set focus(value: number) {
    if (this._objRef) {
      this._objRef.focus = value;
    }
  }

  @Input()
  public set view(
    value: null | {
      enabled: boolean;
      fullWidth: number;
      fullHeight: number;
      offsetX: number;
      offsetY: number;
      width: number;
      height: number;
    }
  ) {
    if (this._objRef) {
      this._objRef.view = value;
    }
  }

  @Input()
  public set filmGauge(value: number) {
    if (this._objRef) {
      this._objRef.filmGauge = value;
    }
  }

  @Input()
  public set filmOffset(value: number) {
    if (this._objRef) {
      this._objRef.filmOffset = value;
    }
  }
}
