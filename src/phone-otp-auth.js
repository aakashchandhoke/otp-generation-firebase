import React, { Component } from 'react';
import firebaseConfig  from './firebase-config';
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import { withRouter } from 'react-router-dom';

class PhoneOTPAuth extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: '/success-otp', //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: '/success-otp',
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            this.props.history.push('/success-otp'); // use callback for using react-router
            }
        }
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}

export default withRouter(PhoneOTPAuth);
