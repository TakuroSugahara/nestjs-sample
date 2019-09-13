import { Injectable } from '@nestjs/common';
import { Item } from './item';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: 1,
      name: 'リンゴ',
    },
    {
      id: 2,
      name: 'ぶどう',
    },
    {
      id: 3,
      name: 'オレンジ',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  find(id: number): Item {
    return this.items.find(item => item.id === id);
  }
}
