import { MovieCommomEntity } from 'src/commom/movie-commom.entity';
import { Column, Entity } from 'typeorm';
import { MovieInterface } from '../interfaces';
import { IsDate, IsDateString, IsString } from 'class-validator';

@Entity()
export class Movie extends MovieCommomEntity implements MovieInterface {
  @Column()
  @IsString()
  title!: string;

  @Column()
  @IsString()
  director!: string;

  @Column()
  @IsString()
  releaseDate!: string;

  @Column()
  @IsString()
  genre!: string;
}
