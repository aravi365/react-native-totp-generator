
import {
    SET_USER,SET_NOTIFICATION_SOUND
 } from './constants';

 
 export function setUser(user, accessToken){
 	console.log("Inside action", user, accessToken)
   return{
    type:SET_USER,
    user,
    accessToken
  }
 }


