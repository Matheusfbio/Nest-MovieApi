import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { MovieCommonEntityInterface } from './interfaces/movie-common-entity.interface';

export abstract class MovieCommomEntity implements MovieCommonEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @CreateDateColumn()
  @ApiProperty()
  title!: string;

  @CreateDateColumn()
  @ApiProperty()
  director!: string;

  @CreateDateColumn()
  @ApiProperty()
  releaseDate!: Date;

  @CreateDateColumn()
  @ApiProperty()
  genre!: string;
}
