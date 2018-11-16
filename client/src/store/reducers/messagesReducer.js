import { MESSAGES_RECEIVED } from '../actions/chatAction';
import { ADD_MESSAGE } from '../actions/chatAction';

export default function(state = [], action) {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return action.messages
    default:
      return state;
  }
}
     