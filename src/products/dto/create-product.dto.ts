import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber() // ✅ Corrección
  @Min(0)
  @Type(() => Number) // ✅ Convierte automáticamente `price` a número
  public price: number;
}
