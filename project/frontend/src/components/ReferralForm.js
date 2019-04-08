import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveNewReferral, postReferral } from '../actions/referrals';

class ReferralForm extends Component {

  // referral = this.props.newReferral;
  // This isn't working, try something eslse
  // because your not sending an opbject you fool!
  onSubmit(e) {
    e.preventDefault();
    const referralObj = {title: this.props.newReferral};
    this.props.dispatch(postReferral(referralObj));
    e.target.referral.value = '';
  }

  render() {
    return (
      <form 
        className="addReferralForm"
        onSubmit={e => this.onSubmit(e)}
      >
        <div className="field">
          <label className="label" htmlFor="referral">Add a link:</label>
          <div className="control">
            <input 
              className="addReferralInput"
              type="text"
              name="referral"
              onChange={e => this.props.dispatch(saveNewReferral(e.target.value))}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button 
              className="button is-link"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    newReferral: state.referrals.newReferral
  }
}

export default connect(mapStateToProps)(ReferralForm);
