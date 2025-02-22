```javascript
// Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  // This will run every time the auth state changes, even on initial load.
  // It's a common mistake to put app initialization here,
  // leading to race conditions and unexpected behavior.
  if (user) {
    // User is signed in.
    initializeApp(user); // Incorrect: Initialization depends on auth state.
  } else {
    // No user is signed in.
    // ...
  }
});

function initializeApp(user) {
  // ... some logic that should run only after successful auth ...
}
```