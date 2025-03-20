import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {};

  create(createTodoDto: CreateTodoDto) {
    return this.prismaService.todos.create({
      data: {
        name: createTodoDto.name,
        description: createTodoDto.description ?? null,
        status: createTodoDto.status ?? 'PENDING',
      },
    });
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
