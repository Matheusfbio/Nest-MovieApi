import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  public create(createUser: CreateUserDto): User {
    try {
      return this.userRepository.create(createUser);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  public findAll() {
    return this.userRepository.findAll();
  }

  public findOne(id: string): User {
    return this.userRepository.findOne(id);
  }

  public update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  public remove(id: string) {
    return this.userRepository.remove(id);
  }
}
