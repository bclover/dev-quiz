import _ from 'lodash';
import { FETCH_QUESTIONS} from '../actions';

const questions = (state = [], action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.payload.data;
    default:
      return state;
  }
};
export default questions;