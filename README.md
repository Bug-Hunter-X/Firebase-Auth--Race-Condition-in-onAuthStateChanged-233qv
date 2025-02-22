# Firebase Authentication Race Condition

This repository demonstrates a common error in Firebase Authentication: a race condition caused by improper use of `onAuthStateChanged`.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides the correct implementation.

The issue stems from attempting to initialize the application within the `onAuthStateChanged` callback.  This can lead to race conditions, where the app attempts to access data before the authentication process is complete.