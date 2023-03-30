import {useReducer} from 'react';

type FetchReducerActionsType =
  | {type: 'FETCH_START'}
  | {type: 'FETCH_SUCCESS'; payload?: object | string | undefined}
  | {type: 'FETCH_ERROR'; payload: object | string | undefined};

interface StateType {
  loading: boolean;
  data: any | undefined;
  error: boolean | object | undefined;
}

const InitialState: StateType = {
  loading: false,
  data: {},
  error: false,
};

const reducer = (state: StateType, action: FetchReducerActionsType) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        loading: true,
        error: false,
        data: {},
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: {status: true, error: action.payload},
        data: {},
      };
    default:
      return state;
  }
};

const useFetchState = () => useReducer(reducer, InitialState);

export default useFetchState;
