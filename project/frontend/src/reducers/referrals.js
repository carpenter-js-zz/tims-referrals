import { 
  GET_REFERRALS_REQUEST, 
  GET_REFERRALS_SUCCESS, 
  GET_REFERRALS_ERROR,
  SAVE_NEW_REFERRAL,
  SET_EDITING_REFERRAL
 } from '../actions/types.js';

const initialState = {
  loading: false,
  error: null,
  referrals: [],
  newReferral: null,
  editingId: null
}

export default function referrals(state=initialState, action) {
  switch(action.type) {
    case GET_REFERRALS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_REFERRALS_SUCCESS:
      return {
        ...state,
        loading: false,
        referrals: action.payload
      }
    case GET_REFERRALS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case SAVE_NEW_REFERRAL:
      return {
        ...state,
        newReferral: action.referral
      }
    
    case SET_EDITING_REFERRAL:
      return {
        ...state,
        editingId: action.referralId
      }

    default:
      return state;
  }
}