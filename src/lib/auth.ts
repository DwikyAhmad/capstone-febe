import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  User
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "./firebase";

export interface AuthError {
  code: string;
  message: string;
}

export const registerUser = async (
  email: string, 
  password: string, 
  displayName: string
): Promise<User> => {
  try {
    console.log("Attempting to register user with email:", email);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update user profile with display name
    await updateProfile(user, {
      displayName: displayName
    });
    
    console.log("User registered successfully:", user.uid);
    return user;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.error("Registration error:", firebaseError);
    console.error("Error code:", firebaseError.code);
    console.error("Error message:", firebaseError.message);
    
    throw {
      code: firebaseError.code,
      message: getErrorMessage(firebaseError.code)
    } as AuthError;
  }
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    console.log("Attempting to login user with email:", email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.error("Login error:", firebaseError);
    console.error("Error code:", firebaseError.code);
    console.error("Error message:", firebaseError.message);
    
    throw {
      code: firebaseError.code,
      message: getErrorMessage(firebaseError.code)
    } as AuthError;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.error("Logout error:", firebaseError);
    throw {
      code: firebaseError.code,
      message: "Failed to sign out"
    } as AuthError;
  }
};

const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already registered. Please use a different email or try logging in.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please check your credentials.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled. Please contact support.';
    case 'auth/api-key-not-valid':
      return 'Invalid API key. Please contact support.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection and try again.';
    default:
      return `Authentication error (${errorCode}). Please try again or contact support.`;
  }
}; 