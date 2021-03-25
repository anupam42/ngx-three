/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { AmbientLightProbe, Color } from 'three';
import { ThLightProbe } from './ThLightProbe';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLightProbe',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe<
  T extends AmbientLightProbe = AmbientLightProbe,
  TARGS extends any[] = [color?: Color | string | number, intensity?: number]
> extends ThLightProbe<T, TARGS> {
  protected getType(): Type<AmbientLightProbe> {
    return AmbientLightProbe;
  }
}
