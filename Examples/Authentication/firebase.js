// Imports
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// App configuration
const app = initializeApp({
  // Your Firebase config goes here
})

// Firebase services
export const auth = getAuth(app)
