import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { Menu } from './menu/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Menu],
    }),
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}

