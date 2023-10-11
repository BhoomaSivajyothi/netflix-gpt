import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'

const loginUser = ( email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    return userCredential.user;
    })
    .catch((error) => {
      return error
    });
};

export default loginUser
