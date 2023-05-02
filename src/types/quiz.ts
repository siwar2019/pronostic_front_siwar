import { AnyMxRecord } from "dns";

export interface INquestionResponse {
    id:any,
    dateStart:any,
    dateExpiration:any,
    points:any,
    QuizId:string,
    type:any,
    questionDescription:string,
    response:any,
    questionId:string,
    isCorrectAnswer:boolean
  
  }