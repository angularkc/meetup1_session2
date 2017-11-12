import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo.controller';



@Module({
  modules: [],
  controllers: [TodoController]
})
export class AppModule {

}
