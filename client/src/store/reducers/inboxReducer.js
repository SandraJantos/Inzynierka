import isEmpty from '../../validation/isEmpty';

import { POSTS_RECEIVED } from '../actions/postAction';

export default function(state = [], action) {
  switch (action.type) {
    case POSTS_RECEIVED:
      return action.posts
    default:
      return state;
  }
}
     