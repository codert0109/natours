import { createContext, useContext, useReducer } from 'react';

const EMPTY_USER_OBJECT = {
  userInfo: {
    _id: '',
    name: '',
    email: '',
    photo: '',
    role: '',
  },
};

const INITIAL_USER_STATE = JSON.parse(localStorage.getItem('userInfo')) || EMPTY_USER_OBJECT;

const USER_REDUCER_ACTION_TYPES = {
  SET_USER_INFO: 'SET_USER_INFO',
};

const UserContext = createContext(INITIAL_USER_STATE);

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REDUCER_ACTION_TYPES.SET_USER_INFO:
      return { ...state, ...payload };

    default:
      throw new Error(`Undefined reducer action type: ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ userInfo }, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);

  const setUserInfo = data => {
    localStorage.setItem('userInfo', JSON.stringify({ userInfo: data }));

    dispatch({
      type: USER_REDUCER_ACTION_TYPES.SET_USER_INFO,
      payload: {
        userInfo: data,
      },
    });
  };

  const removeUser = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('jwt');

    dispatch({
      type: USER_REDUCER_ACTION_TYPES.SET_USER_INFO,
      payload: EMPTY_USER_OBJECT,
    });
  };

  const isUserLoggedIn = localStorage.getItem('jwt') ? true : false;

  // Need to clear all of the items in local storage
  // If no token but user info is present
  if (!isUserLoggedIn && userInfo.id) removeUser();

  const value = { userInfo, isUserLoggedIn, setUserInfo, removeUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const User = () => useContext(UserContext);

export default User;
