import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isLoading: true
      }); // Object.assign(target, source, source, source... ) objectg assign copies the value of the sources to the target. 
    case c.GET_HEADLINES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        headlines: action.headlines
      }); 
    case c.GET_HEADLINES_FAILURE:
      return Object.assign({}, state, {
        isLoading: true,
        error: action.error
      }); 
    default: 
      return state; 
    }
};