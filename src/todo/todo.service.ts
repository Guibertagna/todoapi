import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  create(createTodoDto: CreateTodoDto) {
    return this.prismaService.todos.create({
      data: {
        name: createTodoDto.name,
        description: createTodoDto.description ?? null,
        status: createTodoDto.status ?? "PENDING",
      },
    });
  }

  findAll() {
    return this.prismaService.todos.findMany();
  }

  findOne(id: number) {
    return this.prismaService.todos.findUnique({
      where: { id },
    });
  }

  update(id: number, UpdateTodoDto: UpdateTodoDto) {
    return this.prismaService.todos.update({
      where: { id },
      data: UpdateTodoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.todos.delete({
      where: { id },
    });
  }
}
