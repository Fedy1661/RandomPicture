export const SET_URL_IMAGE = 'SET_URL_IMAGE';
export const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST';
export const FETCH_IMAGE_SUCCESS = 'FECTH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';
// ============================================
export const imageRequested = () => {
  return {
    type: FETCH_IMAGE_REQUEST
  }
}
export const imageLoaded = (payload) => {
  return {
    type: FETCH_IMAGE_SUCCESS,
    payload
  }
}
export const imageError = () => {
  return {
    type: FETCH_IMAGE_FAILURE
  }
}
export const setUrlImage = (payload) => (dispatch) => {
  payload()
    .then(URL => dispatch({
      type: SET_URL_IMAGE,
      payload: URL
    }))
    .catch(() => dispatch(imageError));
}