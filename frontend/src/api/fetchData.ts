import { createAsyncThunk } from "@reduxjs/toolkit";
const baseURL = "http://localhost:4000";

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${baseURL}/${endpoint}`);
  const data = await response.json();
  return data;
};

export const getEasyQuestions = createAsyncThunk(
  "questions/fetchEasyQuestions",
  async () => {
    const data = await fetchData("easyQuestions");
    return data;
  }
);

export const getMediumQuestions = createAsyncThunk(
  "questions/fetchMediumQuestions",
  async () => {
    const data = await fetchData("mediumQuestions");
    return data;
  }
);

export const getQuiteDifficultQuestions = createAsyncThunk(
  "questions/fetchQuiteDifficultQuestions",
  async () => {
    const data = await fetchData("quiteDifficultQuestions");
    return data;
  }
);

export const getDifficultQuestions = createAsyncThunk(
  "questions/fetchDifficultQuestions",
  async () => {
    const data = await fetchData("difficultQuestions");
    return data;
  }
);
