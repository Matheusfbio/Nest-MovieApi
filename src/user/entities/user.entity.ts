import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { UserInterface } from '../interfaces';
import { CommonEntity } from 'src/commom/commom.entity';

@Entity()
@Unique(['username'])
@Unique(['email'])
export class User extends CommonEntity implements UserInterface {
  @Column({ type: 'citext', nullable: false })
  username!: string;

  @Column({ type: 'text', nullable: false })
  password!: string;

  @Column({ type: 'text', nullable: false, default: null })
  salt!: string;

  @Column({ type: 'citext', nullable: true })
  firstName!: string;

  @Column({ type: 'citext', nullable: true })
  lastName!: string;

  @Column({ type: 'citext' })
  email!: string;

  @Column({ default: true, nullable: false })
  active!: boolean;

  // @OneToMany(() => UseRole, (useRole) => userRole.user)
  // userRoles?: UserRole[];
}
