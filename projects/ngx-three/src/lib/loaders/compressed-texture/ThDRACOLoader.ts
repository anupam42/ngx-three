import { Injectable } from '@angular/core';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { ThCallbackLoaderService } from '../ThCallbackLoaderBase';

export interface DRACODecoderConfig {
  type: 'js'| 'wasm';
}

@Injectable({
    providedIn: 'root'
  })
  export class DRACOLoaderService extends ThCallbackLoaderService<DRACOLoader> {
    public readonly clazz = DRACOLoader;
    protected decoderPath = '';
    protected decoderConfig?: DRACODecoderConfig;

    public setDecoderPath(path: string) {
      this.decoderPath = path;
    }

    public setDecoderConfig(config: DRACODecoderConfig) {
      this.decoderConfig = config;
    }

    public createLoaderInstance(): DRACOLoader {
        const loader = super.createLoaderInstance();
        loader.setDecoderPath(this.decoderPath);
        if(this.decoderConfig) {
        loader.setDecoderConfig(this.decoderConfig);
        }
        return loader;
    }
  }
