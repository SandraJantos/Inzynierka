import { RESERVATIONS_RECEIVED } from '../actions/reservationAction';

export default function(state = [], action) {
  switch (action.type) {
    case RESERVATIONS_RECEIVED:
      return action.reservations
    default:
      return state;
  }
}
  