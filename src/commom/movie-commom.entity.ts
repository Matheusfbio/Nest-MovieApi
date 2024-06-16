import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { MovieCommonEntityInterface } from './interfaces/movie-common-entity.interface';

export abstract class MovieCommomEntity implements MovieCommonEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  director!: string;

  @ApiProperty()
  releaseDate!: string;

  @ApiProperty()
  genre!: string;
}
