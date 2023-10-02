// menu.controller.ts
// Import necessary modules and dependencies
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('menu') // Define the base route for this controller
export class MenuController {
  constructor(private readonly menuService: MenuService) {} // Inject the MenuService instance

  @Post() // Handle HTTP POST requests to create a menu
  create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  @Get() // requests to retrieve all menus
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id') // requests to retrieve a  menu by ID
  findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(+id);
  }

  @Put(':id') // PUT requests to update menu by ID
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto): Promise<Menu> {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id') // HTTP DELETE requests to remove a  menu by ID
  remove(@Param('id') id: string) {
    return this.menuService.remove( +id);
  }
}
