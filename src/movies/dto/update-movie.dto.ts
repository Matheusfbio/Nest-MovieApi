import { ApiProperty } from '@nestjs/swagger';
import { MovieUpdatableInterface } from '../interfaces';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto implements MovieUpdatableInterface {
  @ApiProperty({
    type: 'string',
    description: 'Title',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    type: 'string',
    description: 'Director',
  })
  @IsString()
  @IsOptional()
  director?: string;

  @ApiProperty({
    type: 'string',
    description: 'Date release',
  })
  @IsString()
  @IsOptional()
  releaseDate?: string;

  @ApiProperty({
    type: 'string',
    description: 'Genre',
  })
  @IsString()
  @IsOptional()
  genre?: string;
}
