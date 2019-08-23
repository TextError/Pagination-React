import { ERRORS } from '../actions/types';

const INITIAL_STATE = {
  errors: {}
};

const setErrors = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ERRORS.ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case ERRORS.CLEAR_ERROR:
      return {
        ...state,
        errors: {}
      }
    default:
      return state;
  }
};

export default setErrors;