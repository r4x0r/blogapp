import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { bloglist: [], post: null };

export default function(state = INITIAL_STATE, action)
{
  switch(action.type)
  {
    case FETCH_POSTS:
      return { ...state, bloglist: action.payload.data };
      
    default:
      return state;
  }
}
