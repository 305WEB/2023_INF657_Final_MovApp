import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // CREATE USER

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // UPDATE USER

  const updateUser = (name, email) => {
    return updateProfile(auth.currentUser, {
      name,
      email,
      displayName: name
    }).then(() => {
      console.log(auth.currentUser.displayName, auth.currentUser.email);
      alert("Your Profile has been updated");
    });
  };

  // SIGN IN

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LOG OUT

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, updateUser, user, logOut, signIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   // CREATE USER
//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // UPDATE USER
//   const updateUser = (name, email) => {
//     return updateProfile(auth.currentUser, {
//       name,
//       email,
//       displayName: name
//     }).then(() => {
//       console.log(auth.currentUser.displayName, auth.currentUser.email);
//       alert("Your profile has been updated.");
//     });
//   };

//   // SIGN IN

//   const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // LOG OUT

//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       console.log(currentUser);
//       setUser(currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   // CONTEXT PROVIDER

//   return (
//     <UserContext.AuthContextProvider
//       value={{ createUser, updateUser, user, logOut, signIn }}
//     >
//       {children}
//     </UserContext.AuthContextProvider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(UserContext);
// };
