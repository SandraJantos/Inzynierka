import { RESERVATIONS_CONFIRMED } from '../actions/reservationAction';

export default function(state = {}, action) {
  switch (action.type) {
    case RESERVATIONS_CONFIRMED:
      return action.reservationConfirmed
    default:
      return state;
  }
}
  