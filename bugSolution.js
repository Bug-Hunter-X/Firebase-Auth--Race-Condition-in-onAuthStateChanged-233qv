```javascript
// Correct usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    // Now it is safe to initialize the app
    initializeApp(user); 
  } else {
    // No user is signed in.
    // Redirect to login or show the login screen
    window.location.href = '/login';
  }
});

function initializeApp(user) {
  // ... your app initialization logic using the user object ...
}
```