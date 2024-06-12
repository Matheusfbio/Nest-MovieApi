import { IsNotEmpty, IsString, isNotEmpty } from 'class-validator';
import { UserCreatableInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsStrongPassword } from 'src/commom/decorators/is-strong-password/is-strong-password';

export class CreateUserDto implements UserCreatableInterface {
  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Username',
  })
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({
    type: 'string',
    description: 'Password',
  })
  password!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'FirstName',
  })
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'LastName',
  })
  lastName!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    description: 'Email',
  })
  email!: string;
}
