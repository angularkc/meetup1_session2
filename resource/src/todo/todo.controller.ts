import {Body, Controller, Get, Post} from '@nestjs/common';
import {TodoModel} from './todo.model';


@Controller('/todo')
export class TodoController {
  inMemoryDb: TodoModel[];
  constructor() {
    this.inMemoryDb = [{
      title: 'hello all',
      complete: false
    }, {
      title: 'Give a talk',
      complete: false
    }];
  }

  @Get()
  getTodos() {
    return this.inMemoryDb
  }

  @Post()
  createTodo(@Body() todo: TodoModel) {
    console.log(todo);
    this.inMemoryDb.push(new TodoModel(todo.title, todo.complete));
    return this.inMemoryDb
  }
}