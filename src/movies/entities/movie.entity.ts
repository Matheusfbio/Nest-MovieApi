import { MovieCommomEntity } from 'src/commom/movie-commom.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { MovieInterface } from '../interfaces';
import { IsDate } from 'class-validator';

@Entity()
@Unique(['title'])
export class Movie implements MovieInterface {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'citext', nullable: false })
  title!: string;

  @Column({ type: 'citext', nullable: false })
  director!: string;

  @Column({ type: 'date', nullable: false })
  @IsDate()
  releaseDate!: Date;

  @Column({ type: 'citext', nullable: false })
  genre!: string;
}
