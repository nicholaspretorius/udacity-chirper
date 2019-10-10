import { RECEIVE_TWEETS } from "../actions/tweets";
import { RECEIVE_USERS } from "../actions/users";

export default function loading(state = true, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return false;
    case RECEIVE_USERS:
      return false;
    default:
      return state;
  }
}
