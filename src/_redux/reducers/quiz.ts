import {INewQuiz} from "../../types/groupes";
import {INquestionResponse} from "../../types/quiz"
import { createSlice } from "@reduxjs/toolkit";
import { createQuizByAdmin,getAllQuiz,createQuestionResponse } from "../actions/quiz";

export interface usersState {
    NewQuiz:Array <INewQuiz> ;
    NewQuestionResponse:Array <INquestionResponse>
}
const initialState: usersState = {
    NewQuiz:[],
    NewQuestionResponse: [],
}
export const quizSlice = createSlice({
    name: "quizSlice" ,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createQuizByAdmin.fulfilled, (state,{payload}:any) =>{
            state.NewQuiz=payload ;
            console.log("NewQuiz",payload
            ) 

        });
        builder.addCase(getAllQuiz.fulfilled,(state,{payload}) => {
            state.NewQuiz= payload.filter((Quiz: any)=>Quiz.id !==0) ;
        });
        builder.addCase(createQuestionResponse.fulfilled,(state,{payload}:any)=> {
              
        state.NewQuestionResponse=payload ;
        })
    },

})
export default quizSlice.reducer;
