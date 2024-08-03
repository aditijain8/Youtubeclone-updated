import React,{useEffect, useState} from 'react'
import './Navbar.css'
import logo from'.//youtube-logo-2431.png'
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import { GoogleLogin } from 'react-google-login';
import {login} from "../../actions/auth"
import {gapi} from 'gapi-script';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Auth from "../../Pages/Auth/Auth";

function Navbar({toggleDrawer,setEditCreateChanelBtn}) {

const [AuthBtn,setAuthBtn]=useState(false);

  // const CurrentUser=null;
  // const CurrentUser={
  //   result:{
  //     email: "sweetadu22@gmail.com",
  //     joinedOn:"222207-15T09:57:23.489Z",
  //   },
  // };
  
  const CurrentUser= useSelector((state)=>state?.currentUserReducer)
  console.log(CurrentUser);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:"37247676263-2ae4vk5lf2ivmaoe264jrl45l6dap4rf.apps.googleusercontent.com",
        scope:"email",
      });
    }
    gapi.load("client:auth2", start);
  },
  []);

  const dispatch =useDispatch();
  const onSuccess=(response)=>{
    const Email=response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
    
  }
  const onFailure=(response)=>{
    console.log("Failed",response);
  }
  useEffect(() => {
    const videoCallBtn = document.getElementById('videoCallBtn');

    const checkTimeAndDisable = () => {
      const now = new Date();
      const currentHour = now.getHours();

      // Disable button and set notification if time is outside 6 PM to 12 AM
      if (currentHour <= 17) {
        videoCallBtn.removeAttribute('href');
        videoCallBtn.onclick = (e) => {
          e.preventDefault();
          alert('Video calls are only available from 6 PM to 12 AM');
        };
      } else {
        videoCallBtn.setAttribute('href', '/videocall');
        videoCallBtn.onclick = null; // Remove onclick if time is within range
      }
    };

    checkTimeAndDisable();

    // Optionally, you can set an interval to keep checking the time every minute
    const interval = setInterval(checkTimeAndDisable, 60000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className='Container_Navbar'>
      <div className="Burger_Logo_Navbar">
        <div className="burger" onClick={()=>toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
          
          </div>

<Link to={"/"} className="logo_div_Navbar">
  <img src={logo} alt="" />
  <p className="logo_title_navbar">YouTube</p>
</Link>
</div>
      <SearchBar/>
      <a id="videoCallBtn" className="Video_Btn">
      <RiVideoAddLine size={22} className={'vid_bell_Navbar'}/>
      </a>
      
      <div className="apps_Box">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className={'vid_bell_Navbar'}/>

      <div className="Auth_cont_Navbar">
        {
          CurrentUser ? (
          <>
          <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
            <p className="fstChar_logo_App">
            {
                CurrentUser?.result.name ?(
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):(<>
                {CurrentUser?.result.email.charAt(0).toUpperCase()}
                </>)
            }
            </p>
          </div>
          </>
          ):(
          <>
          <GoogleLogin
         clientId={"37247676263-2ae4vk5lf2ivmaoe264jrl45l6dap4rf.apps.googleusercontent.com"}
         onSuccess={onSuccess}
         onFailure={onFailure}
         render={(renderProps) => (
           <p onClick={renderProps.onClick} className="Auth_Btn">
           {/* <p onClick={logTmp} className="Auth_Btn"> */}
             <BiUserCircle size={22} />
             <b>Sign in</b>
           </p>
          )}
        />
     </>
   )}
 </div>
</div>
{
 AuthBtn &&
 <Auth
 setEditCreateChanelBtn={setEditCreateChanelBtn}
 setAuthBtn={setAuthBtn}
 User={CurrentUser}
 />
}
</>
);
}

export default Navbar;