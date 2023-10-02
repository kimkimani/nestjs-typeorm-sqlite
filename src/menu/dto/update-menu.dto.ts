// update-menu.dto.ts
import { IsString, IsUrl, IsNotEmpty,IsOptional, IsNumber, IsPositive } from 'class-validator';

export class UpdateMenuDto {
@IsNotEmpty({ message: 'field name must be added' })
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  rating?: number;
}