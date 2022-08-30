import { Question } from './../interface/question';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuesResponse } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestions(){
    return this.http.get<QuesResponse>(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`)
  }
}
