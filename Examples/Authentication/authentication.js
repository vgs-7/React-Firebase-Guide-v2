import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

async function handleRegisterWithEmail(email, password, name) {
    try {
        console.log('[FIREBASE] Registering with Email:', email)
        const result = await createUserWithEmailAndPassword(auth, email.toLowerCase(), password)
        const user = result.user

        return {
            success: true,
            user: user,
        }
    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('[FIREBASE] Register error:', errorCode, errorMessage)

        if (errorCode === 'auth/email-already-in-use') {
            const result = await signInWithEmailAndPassword(auth, email.toLowerCase(), password)
            return result
        }

        errorCode === 'auth/weak-password' && (errorMessage = 'Password is too weak')
        errorCode === 'auth/invalid-email' && (errorMessage = 'Invalid email')

        return {
            success: false,
            errorCode: errorCode,
            errorMessage: errorMessage
        }
    }
}

async function handleSignInWithEmail(email, password) {
    try {
        console.log('[FIREBASE] Signing in with Email:', email)
        const result = await signInWithEmailAndPassword(auth, email.toLowerCase(), password)
        const user = result.user
        return {
            success: true,
            user: user,
        }
    } catch (error) {
        const errorCode = error.code
        var errorMessage = error.message
        console.log('[FIREBASE] Sign in error:', errorCode, errorMessage)

        errorCode === 'auth/invalid-credential' && (errorMessage = 'Your email or password is incorrect')
        errorCode === 'auth/too-many-requests' && (errorMessage = 'Too many attempts. Please try again later.')

        return {
            success: false,
            errorCode: errorCode,
            errorMessage: errorMessage,
        }
    }
}

async function handleSignOut() {
    await signOut(auth).then(() => {
        console.log('[FIREBASE] Auth signed out')
    }).catch((error) => {
        console.log('[FIREBASE] Sign out error:', error)
    })
}

export {
    handleRegisterWithEmail,
    handleSignInWithEmail,
    handleSignOut,
}
