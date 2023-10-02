// create-Menu.dto.ts
import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Field description must be added' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'Provide an image URL' })
  imageUrl: string;

  @IsNotEmpty({ message: 'Rating must be added' })
  @IsInt({ message: 'Rating must be of type number' })
  @IsPositive()
  rating: number;
}
