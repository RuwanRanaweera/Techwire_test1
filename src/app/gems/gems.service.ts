import { Injectable } from '@angular/core';
import { Gem } from './gem.model';

@Injectable({
  providedIn: 'root'
})
export class GemsService {
private _gems: Gem[] = [
    new Gem (
      'g1',
      'Transparent',
      'dfdjfshf jdfisjf jdnbsjifmd fsikjdfnsf',
      'https://cdn.britannica.com/78/170778-131-D35E060F/Reflections-diamond.jpg',
      59.99
      ),
      new Gem (
        'g2',
        'Ruby',
        'dfdjfshf jdfisjf jdnbsjifmd fsikjdfnsf',
        'https://5.imimg.com/data5/AV/CM/MY-1055025/rubellite-stone-500x500.jpg',
        79.99
        ),
        new Gem (
          'g3',
          'transparent',
          'dfdjfshf jdfisjf jdnbsjifmd fsikjdfnsf',
          'https://png.pngtree.com/element_our/20190602/ourmid/pngtree-creative-purple-gems-illustration-image_1405385.jpg',
          109.99
          ),
          new Gem (
            'g4',
            'transparent',
            'dfdjfshf jdfisjf jdnbsjifmd fsikjdfnsf',
            'https://p1.hiclipart.com/preview/998/1011/742/60-diamonds-gems-clear-jeweled-gemstone.jpg',
            149.99
            ),
            new Gem (
              'g5',
              'transparent',
              'dfdjfshf jdfisjf jdnbsjifmd fsikjdfnsf',
              'https://storage.googleapis.com/checkfront-rogue.appspot.com/accounts/cf-94884/images/2020/large-LK94000547-O-2-1587884895699.JPG?alt=media&generation=1587884900641823',
              179.99
              )

];

get gems() {
  return [...this._gems];
}
  constructor() { }

  getGem(id: string){
    return {...this._gems.find(g => g.id === id)};
  }
}
