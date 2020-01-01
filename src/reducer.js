import {
  SET_URL_IMAGE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCCESS
} from "./actions"

const initialState = {
  url: null,
  loading: false,
  error: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_URL_IMAGE:
      return {
        ...state,
        url: payload
      }
    case FETCH_IMAGE_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      }
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false
      }
    default:
      return state
  }
}
