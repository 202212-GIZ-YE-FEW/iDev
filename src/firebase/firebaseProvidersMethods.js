import { signInWithPopup, signOut } from "firebase/auth"; //popUp Google SignIn window

import { auth, facebookProvider, googleProvider } from "@/firebase/config";
//SignIn with Google account
export const signInWithGoogleAccount = async () => {
    await signInWithPopup(auth, googleProvider);
    window.alert("welcome " + auth.currentUser.email); //show wich email did singIn
    //1-should move him to HomePage
    //2-change LogIn in navbar to Logout
    //3-add circle contain First litter of his Email or his  Image
    //auth?.currentUser?.photoURL return U Google user Image
    //or add his image if Sign in by Email
};
//SignIn with FaceBook account
export const signInWithFbAccount = async () => {
    await signInWithPopup(auth, facebookProvider);
    // window.alert("welcome "+auth.currentUser.email);//show wich email did singIn
    //1-should move him to HomePage
    //2-change LogIn in navbar to Logout
    //3-add circle contain First litter of his Email or his  Image
    //auth?.currentUser?.photoURL return U Google user Image
    //or add his image if Sign in by Email
};

//LogOut Method for any account Form Firebase Provider
export const Logout = async () => {
    await signOut(auth);
    // console.log(auth?.currentUser?.email)
    //this log give U the Email of Current user if Not will return undefined
};
