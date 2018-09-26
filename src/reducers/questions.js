const questions = (state = [], action) => {
  switch (action.type) {
    case 'ACTION_ONE':
      return action.type;
    default:
      return state
  }
};
export default questions;