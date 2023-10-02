import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('menus') // this maps the Menu entity to the 'menus' table in your DB
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'description', length: 180, nullable: false })
  description: string;

  @Column({ name: 'imageUrl', nullable: false })
  imageUrl: string;

  @Column({name: 'rating', type: 'float', nullable: true})
  rating: number;
}
