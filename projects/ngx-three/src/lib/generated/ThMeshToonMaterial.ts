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
import {
  Color,
  ColorRepresentation,
  MeshToonMaterial,
  MeshToonMaterialParameters,
  NormalMapTypes,
  Texture,
  Vector2,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshToonMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMeshToonMaterial) },
  ],
})
export class ThMeshToonMaterial<
  T extends MeshToonMaterial = MeshToonMaterial,
  TARGS = /* parameters? */ MeshToonMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshToonMaterial> {
    return MeshToonMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  @Input()
  public set gradientMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.gradientMap = value;
    }
  }

  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  @Input()
  public set lightMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.lightMap = value;
    }
  }

  @Input()
  public set lightMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.lightMapIntensity = value;
    }
  }

  @Input()
  public set aoMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.aoMap = value;
    }
  }

  @Input()
  public set aoMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.aoMapIntensity = value;
    }
  }

  @Input()
  public set emissive(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.emissive = applyValue<Color>(this._objRef.emissive, value);
    }
  }
  @Input()
  public set emissiveIntensity(value: number) {
    if (this._objRef) {
      this._objRef.emissiveIntensity = value;
    }
  }

  @Input()
  public set emissiveMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.emissiveMap = value;
    }
  }

  @Input()
  public set bumpMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.bumpMap = value;
    }
  }

  @Input()
  public set bumpScale(value: number) {
    if (this._objRef) {
      this._objRef.bumpScale = value;
    }
  }

  @Input()
  public set normalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.normalMap = value;
    }
  }

  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this._objRef) {
      this._objRef.normalMapType = value;
    }
  }

  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.normalScale = applyValue<Vector2>(
        this._objRef.normalScale,
        value
      );
    }
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  @Input()
  public set wireframeLinecap(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinecap = value;
    }
  }

  @Input()
  public set wireframeLinejoin(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinejoin = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }
}
