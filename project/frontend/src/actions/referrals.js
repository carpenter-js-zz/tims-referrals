import { 
  GET_REFERRALS_REQUEST, 
  GET_REFERRALS_SUCCESS, 
  GET_REFERRALS_ERROR,
  SAVE_NEW_REFERRAL,
  SET_EDITING_REFERRAL
} from './types';

// GET REFERRALS
export const getReferralsRequest = () => ({
  type: GET_REFERRALS_REQUEST
});

export const getReferralsSuccess = payload => ({
  type: GET_REFERRALS_SUCCESS,
  payload
});

export const getReferralsError = error => ({
  type: GET_REFERRALS_ERROR,
  error
});

// GET all referralls
export const getReferrals = () => dispatch => {
  dispatch(getReferralsRequest());
    return fetch('/api/referrals/', {
    })
      .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        // console.log(res.json())
        return res.json();
      })
        .then(payload => dispatch(getReferralsSuccess(payload)))
        .catch(err => dispatch(getReferralsError(err)));
}

// POST referrals

// this one is being used for add referral input and edit referral input
export const saveNewReferral = referral => ({
  type: SAVE_NEW_REFERRAL,
  referral
});

export const postReferral = referral => dispatch => {
    return fetch('/api/referrals/', {
      method: 'POST',
      body: JSON.stringify(referral),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
      })
        .then(() => dispatch(getReferrals()))
        .catch(err => console.log(err));
}

// PUT referral
export const setEditingReferral = referralId => ({
  type: SET_EDITING_REFERRAL,
  referralId
})

export const putReferral = (referral, id) => dispatch => {
  return fetch(`/api/referrals/${id}/`, {
    method: 'PUT',
    body: JSON.stringify(referral),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
      .then(() => dispatch(getReferrals()))
      .catch(err => console.log(err));
}

// DELETE referral
export const deleteReferral = (id) => dispatch => {
  return fetch(`/api/referrals/${id}/`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
    })
      .then(() => dispatch(getReferrals()))
      .catch(err => console.log(err));
}
