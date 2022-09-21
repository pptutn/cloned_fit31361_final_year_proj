import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

export const AuthContext = React.createContext('');

export const AuthProvider = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    // state that holds the value for the user in the 
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setCurrentUser(user);
            } else {
                setLoggedIn(false);
                setCurrentUser(null);
            }
        });

        return subscriber();
        // console.log(currentUser);
    }, [currentUser]);

    return {
        currentUser, 
        isLoggedIn
    };
};