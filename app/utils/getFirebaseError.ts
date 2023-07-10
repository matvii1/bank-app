export function getFirebaseError(code: string) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Email is invalid'

    case 'auth/weak-password':
      return 'Password should be at least 6 characters'

    case 'auth/user-not-found':
      return 'User not found'

    case 'auth/wrong-password':
      return 'Email or password is incorrect'

    case 'auth/email-already-in-use':
      return 'Email already in use'

    default:
      return 'Something went wrong'
  }
}
