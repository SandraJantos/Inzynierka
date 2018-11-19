import { ANNOUNCE_SUCCESS } from '../actions/successAction';

export default (state = '', action) => {
  switch (action.type) {
    case ANNOUNCE_SUCCESS:
      return action.id;
    default:
      return state;
  }
}
