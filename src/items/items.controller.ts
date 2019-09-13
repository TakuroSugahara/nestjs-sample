import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findItem(@Param('id') id: string): Item {
    const idNumber = Number(id);
    return this.itemsService.find(idNumber);
  }
}
