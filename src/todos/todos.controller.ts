import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todo')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todoService.create(body);
  }

  @Get('/all')
  findTodos() {
    return this.todoService.getAll();
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todoService.update(parseInt(id), body);
  }

  @Delete('/all')
  @HttpCode(204)
  async deleteAll() {
    return this.todoService.deleteAll();
  }

  @Delete('/:id')
  @HttpCode(204)
  async findTodoById(@Param('id') id: string) {
    await this.todoService.delete(parseInt(id));
  }
}
