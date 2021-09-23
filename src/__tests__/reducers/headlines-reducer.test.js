import headlinesReducer from '../../reducers/headlinesReducer';
import * as c from '../../actions/ActionTypes';


describe('headlinesReducer', () => {

  let action; // Don't forget to declare action as a variable.

  const loadingState = {
    isLoading: true,
    headlines: [],
    error: null
  };

  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  test('requesting headlines should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_HEADLINES
    };
    expect(headlinesReducer(defaultState, action)).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    }
    );
  });

  test('should successfully return the default state if no action is passed into it', () => {
    expect(headlinesReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    );
  });
  test('should successfully change isloading to false and update headline', () => {
    const headlines = "A headline";
    action = {
      type: c.GET_HEADLINES_SUCCESS,
      headlines
    };
    expect(headlinesReducer(loadingState, action)).toEqual(
      {
        isLoading: false,
        headlines: "A headline", // this tells our test to expect a string here
        error: null
      }
    );
  });




});


