import React, { useEffect } from "react";
import "./app.css"
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {selectUser} from "./features/userSlice"
import {useDispatch, useSelector} from "react-redux"
import Login from "./Login";
import { auth } from "./firebase";
import {login,logout} from "./features/userSlice"


function App() {
  const dispatch =useDispatch();
  const user=useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("User is", authUser);
      if(authUser){
        //the user is logged in
      
      dispatch(
        login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName,
        })
      );
    }else{
      //the user is logged out
      dispatch(logout());
    }
  });
},[dispatch]);
  

  return (
    <div className="app">
    {user?(<>
      <Sidebar />
      <Chat/>
      </>):(<h1><Login/></h1>) }
    </div>
  );
}

export default App;
