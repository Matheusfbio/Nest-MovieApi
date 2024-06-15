import { IsDate, IsString } from 'class-validator';
import { MovieCreatableInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateMovieDto implements MovieCreatableInterface {
  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Title',
  })
  title: string;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Director Name',
  })
  director: string;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'Release Date',
  })
  releaseDate: Date;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Genre',
  })
  genre: string;
}
