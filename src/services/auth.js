import auth from '@react-native-firebase/auth';

export const Registering = async (email, password) => {
    try {
        const userCrediential = await auth().createUserWithEmailAndPassword(email, password)
        await userCrediential.user.sendEmailVerification()
        return userCrediential.user
    } catch (error) {


        let errorMessage;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'This Email Is In Use'
                break;

            case 'auth/invalid-email':
                errorMessage = 'Your Email Is Invalid'
                break;

            case 'auth/weak-password':
                errorMessage = 'Password Is To Weak (try atleast 6 character)'
                break;




            default:
                errorMessage = 'unKnown error'
                break;
        }

        throw new Error(errorMessage);
    }
}

export const Loginuser = async (email, password) => {
    try {
        const userCrediential = await auth().signInWithEmailAndPassword(email, password)
        const user = userCrediential.user
        return {
        user,
        emailVerified: user.emailVerified,
        }
    } catch (error) {
        let errorMessage;
        switch (error.code) {
            case 'auth/wrong-password':
                errorMessage = 'Incorrect Password'
                break;

            case 'auth/user-not-found':
                errorMessage = 'Invalid Email'
                break

            default:
                errorMessage = 'Unknown Error'
                break;
        }

        throw new Error(errorMessage)
    }
}


export const sendEmail = async (email) => {
  try {
    await auth().sendPasswordResetEmail(email.trim().toLowerCase());
  } catch (error) {
    let errorMessage = 'Something went wrong. Please try again.';

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email.';
        break;

      case 'auth/invalid-email':
        errorMessage = 'Invalid email format.';
        break;

      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;

      case 'auth/too-many-requests':
        errorMessage = 'Too many attempts. Please try again later.';
        break;
    }

    throw new Error(errorMessage);
  }
};


