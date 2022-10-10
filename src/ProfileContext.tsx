import { createContext } from 'react';
import { auth } from './firebase';

const profileContextData = {
  currentUser: auth.currentUser,
  setCurrentUser: () => {},
  cUPicHttpUrl: undefined,
  cUserAdditionalInfo: undefined,
  setCUserAdditionalInfo: () => {},
};
export const ProfileContext = createContext(profileContextData);
