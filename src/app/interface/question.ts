export interface Question{
  category:string,
  correct_answer:string,
  difficulty:string,
  incorrectanswers:[],
  options?:[],
  question:string,
  type:string,
  userAnswer?:string
}
