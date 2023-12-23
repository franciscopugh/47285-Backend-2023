import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User, UserDocument } from './schema/users.schema'
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto)
  }

  findAll() {
    return this.userModel.find()
  }

  findOne(id: string) {
    return this.userModel.findById(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id)
  }
}
