import React, { Component } from 'react'
import ReferralForm from './ReferralForm';
import ReferralTable from './ReferralTable';

export default class MainPage extends Component {
  render() {
    return (
      <main>
        <h1 className="title is-1">
           Grow the web with referrals!
        </h1>

        <ReferralForm />

        <ReferralTable />
      </main>
    )
  }
}