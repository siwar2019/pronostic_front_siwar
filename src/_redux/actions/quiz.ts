import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewQuiz } from "../../types/groupes";
import { clientApi } from "../../_clientApi";

import Swal from "sweetalert2";
import { INquestionResponse } from "../../types/quiz";
//create quiz
export const createQuizByAdmin = createAsyncThunk(
"quiz/createQuizByAdmin",
async (value: any, { rejectWithValue }) => {
    try {
      const res = await clientApi.post("create-quiz", value);

      return res.data
      ;
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
export const createQuestionResponse=createAsyncThunk(
  "quiz/createQuestionResponse",
async(value:INquestionResponse, {rejectWithValue}) => {
  try {
    const res= await clientApi.post("create-question-quiz",value)
  }catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
    return rejectWithValue(error);
  }
}  
);
//get quiz liste
export const getAllQuiz = createAsyncThunk(
  "quiz/getAllQuiz",
  async (_, { rejectWithValue }) => {
    try {
      const response = await clientApi.get("/get-list-quiz");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
