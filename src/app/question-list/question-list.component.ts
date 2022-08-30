import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../interface/question';
import { QuesResponse } from '../interface/response';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  list: Question[] = [];
  currentIndex: number = 0;
  currentObject!: Question;
  totalLength: number = 0;
  canSubmit:boolean=false;
  selectOptionError:boolean=false;
  loading:boolean= false;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.loading = true;
    this.questionService.getQuestions().subscribe((data: QuesResponse) => {
      console.log(data);
      this.list = data.results;
      this.list.map((element: any) => {
        const options = this.getShuffledOptions([...element.incorrect_answers, element.correct_answer])
        return element['options'] = options;

      });
      console.log(this.list);
      this.totalLength = this.list.length
      this.currentObject = this.list[this.currentIndex];
      this.loading= false;
    })
  }

  getShuffledOptions(options: any[]) {

    return options.sort(() => Math.random() - 0.5);

  }

  onAnswered(value:string){
    if(this.selectOptionError){
      this.selectOptionError = false;
    }
    this.list[this.currentIndex]['userAnswer']=value;
    if(this.currentIndex===this.totalLength-1){
      this.canSubmit=true;
    }
    console.log(this.currentObject,'currentobj')
  }


  next(){
    if(this.currentObject.userAnswer){
    this.currentIndex++;
    this.currentObject=this.list[this.currentIndex];
    this.selectOptionError = false;
    } else{
      this.selectOptionError = true;
    }

  }


}
