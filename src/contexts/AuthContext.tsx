import { useState, useEffect } from "react";
import { createContext, ReactNode } from 'react'
import { auth, firebase } from '../services/firebase'

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProviderProps = {
  children: ReactNode,
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const {
          displayName,
          photoURL,
          uid,
        } = user
  
        if ( !displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const result = await auth.signInWithPopup(provider)
    
    if (result.user) {
      const {
        displayName,
        photoURL,
        uid,
      } = result.user

      if ( !displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }
      
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  async function signOut() {
    await auth.signOut()
  }

  return (
      <AuthContext.Provider
        value={{
          user,
          signInWithGoogle,
          signOut
        }}
      >
        { children }
      </AuthContext.Provider>
  )
}