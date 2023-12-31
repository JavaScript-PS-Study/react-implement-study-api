import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private todos: Repository<Todo>) {}

  create(body: CreateTodoDto) {
    const todo = this.todos.create({ ...body });
    return this.todos.save(todo);
  }

  getAll() {
    return this.todos.findAndCount();
  }

  findOne(id: number) {
    if (!id) return null;
    return this.todos.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, todoDto: UpdateTodoDto) {
    const todo = await this.todos.findOne({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new NotFoundException(`todo id: ${id} not found`);
    }

    return this.todos.save({ ...todo, ...todoDto });
  }

  async delete(id: number) {
    const todo = await this.todos.findOne({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new NotFoundException(`todo id: ${id} not found`);
    }

    return this.todos.remove(todo);
  }

  async deleteAll() {
    const allTodo = await this.todos.find();

    return this.todos.remove(allTodo);
  }
}
