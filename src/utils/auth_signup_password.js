import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'

const createuser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user
    })
    .catch((error) => {
      return error
    });
};

export default createuser
