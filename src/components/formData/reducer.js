import {
  SET_FORM_DATA,
  SET_FORM_ERRORS,
  SET_FORM_EXTRA_PROPS
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };

    case SET_FORM_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload
        }
      };

    case SET_FORM_EXTRA_PROPS:
      return {
        ...state,
        extraProps: {
          ...state.extraProps,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
