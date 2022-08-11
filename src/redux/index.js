/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { useColorScheme } from 'react-native';
import { createStore } from 'redux';
import {COLORMODE,USER,UPDATE_TOKEN} from './type'
// const darkmode = useColorScheme();
// console.log(darkmode);
const initialState = {
  name: '',
  auth_token: '',
  user: "",
  colorMode:  '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TOKEN':
      return { ...state, auth_token: action.auth_token };
    // break;
    case 'USER':
      // alert("here it comes")
      return { ...state, user: action.user };
    case 'COLORMODE':
      // alert("signin modal called")
      return { ...state, colorMode: action.payroll, };
    
    default:
      break;
  }
  return state;
};
export const store = createStore(reducer);