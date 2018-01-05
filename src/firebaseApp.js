import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD_vEK4TSRfN1OqSt6KlcykSOeUt3A-r4Y",
  authDomain: "turnout-de742.firebaseapp.com",
  databaseURL: "https://turnout-de742.firebaseio.com",
  projectId: "turnout-de742",
  storageBucket: "turnout-de742.appspot.com",
  messagingSenderId: "16306609758"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')