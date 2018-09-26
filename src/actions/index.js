import axios from 'axios';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

const ROOT_URL = 'http://localhost:3000/api';
// const ROOT_URL = 'https://dev-quiz-api-7wkpq9.turbo360-vertex.com/api';

export default function fetchQuestions() {
  const request = axios.get(`${ROOT_URL}/questions`);
  return {
    type: FETCH_QUESTIONS,
    payload: request,
  };
}