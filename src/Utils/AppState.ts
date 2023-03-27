import {useReducer} from 'react';

type StateType = any;
type ActionType = {
  type: string | 'add_token';
  payload: object | string | number | null;
};

const reduce = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'add_token':
      console.log('Action:', action);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

const useAppState = () => useReducer(reduce, []);
export default useAppState;
