import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';


const LoginPage = ({onAuthenticate}) => {
  const[error,setError]= useState(false);
  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");

  const HandleLogin = (e) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      onAuthenticate();
    })
    .catch((error) => {
      setError(true);
      // ..
    });
  
  }
  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <form onSubmit={HandleLogin}style={{background:'#282c34',borderRadius:10,width:'30%',height:'30vh',display:'flex',flexDirection:'column',padding:'2%',position:'absolute',top:'15%',justifyContent:'space-evenly',alignItems:'center'}}>
            <input style={{height:'5vh',width:'70%',border:'solid',borderColor:'#ffffff',borderWidth:'1px',color:'#13f287',background:'#e1e1e1'}} type='text' placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)}/>
            <input style={{height:'5vh',width:'70%',border:'solid',borderColor:'#ffffff',borderWidth:'1px',color:'#13f287',background:'#e1e1e1'}} type='text' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
            <button style={{background:'#13F287',borderRadius:3,fontSize:'0.7rem',color:'#0d0d0d',height:'5vh',border:'none',width:'8vw',marginTop:'1vh'}} type='submit'>LOG IN</button>
            {error && <span>Wrong credentials</span>}
        </form>
    </div>
  )
}

export default LoginPage