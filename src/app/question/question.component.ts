import { Question } from './../interface/question';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  currentAnswer!:string;
  @Input()
  data!:Question
  

  @Output()
  answer= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  onAnswerClick(value:string){
    this.currentAnswer= value;
    this.answer.emit(value)
  }


}
