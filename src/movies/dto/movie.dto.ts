import { ApiProperty } from '@nestjs/swagger';
import { MovieInterface } from '../interfaces';
import { IsString } from 'class-validator';
import { MovieCommomEntity } from 'src/commom/movie-commom.entity';

export class MovieDto extends MovieCommomEntity implements MovieInterface {
  @ApiProperty({
    title: 'Title',
    description: 'Title name',
  })
  @IsString()
  title!: string;

  @ApiProperty({
    title: 'Director',
    description: 'Director name',
  })
  @IsString()
  director!: string;

  @ApiProperty({
    title: 'Realease date',
    description: 'Date pf release',
  })
  @IsString()
  releaseDate!: Date;

  @ApiProperty({
    title: 'Genre',
    description: 'Gen name',
  })
  @IsString()
  genre!: string;
}
