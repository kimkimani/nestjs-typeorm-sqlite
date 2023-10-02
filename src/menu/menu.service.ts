// menu.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = this.menuRepository.create(createMenuDto);
    return await this.menuRepository.save(menu);
  }

  async findAll(): Promise<Menu[]> {
    return await this.menuRepository.find();
  }

  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: { id: id } });
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }
    return (menu);
  }


  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu = await this.findOne(id);
    Object.assign(menu, updateMenuDto);
    return await this.menuRepository.save(menu);
  }

  async remove(id: number) {

    const result = await this.menuRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`A note "${id}" was not found`);
    }
    return { message: 'Menu successfully deleted' };
  }

  
}
