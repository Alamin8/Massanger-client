import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCII9fPMM4wto3zDiDnhYq8bzSD7NiVVzo",
    authDomain: "messengerclone-auth.firebaseapp.com",
    projectId: "messengerclone-auth",
    storageBucket: "messengerclone-auth.appspot.com",
    messagingSenderId: "662560014473",
    appId: "1:662560014473:web:5ab49d399699e3a2e34658"
})

const db = firebaseApp.firestore()

export default db