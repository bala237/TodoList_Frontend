import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/home/home.component';




@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http : HttpClient
  ) { }

  fetchAllTodo(){
      return this.http.get<Todo[]>('http://localhost:8080/todoList/getTask')
         
      }

  deleteTodoById(id : any){
    return this.http.delete(`http://localhost:8080/todoList/removeTask/${id}`, {responseType: 'text'});
  }

  fetchTodoById(id: any){
    return this.http.get<Todo>(`http://localhost:8080/todoList/getTaskById/${id}`);
  }
 
  updateTodoById(id :any, todo: any){
    return this.http.put(`http://localhost:8080/todoList/updateTask/${id}`, todo, {responseType: 'text'});
  }

  addTodo(todo: any){
    return this.http.post(`http://localhost:8080/todoList/saveTask`, todo, {responseType: 'text'});
  }

  

      
  }

