import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { BufferAttribute } from "three";
import { Mesh } from "three";
import { Matrix4 } from "three";
import { Color } from "three";
import { ThMesh } from "./ThMesh";
import { InstancedMesh } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-instancedMesh",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
  ],
})
export class ThInstancedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [
    geometry: TGeometry,
    material: TMaterial,
    count: number
  ]
> extends ThMesh<TGeometry, TMaterial, TARGS> {
  protected obj!: InstancedMesh<TGeometry, TMaterial>;
  protected getObjectType(): Type<InstancedMesh<TGeometry, TMaterial>> {
    return InstancedMesh;
  }
}
