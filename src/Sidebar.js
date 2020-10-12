import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlindeIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic" 
import HeadsetIcon from "@material-ui/icons/Headset" 
import SettingIcon from "@material-ui/icons/Settings" 
import AppleImage from "./images/appleImage.png"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
      <h3>The drop down</h3>
      <ExpandMoreIcon /> 
      </div>

      <div className="sidebar__channels">
       <div className="sidebar__channelsHeader">
        <div className="sidebar__header">
         <ExpandMoreIcon/>
         <h4>Text Channel</h4>
      </div>

      <AddIcon className="sidebar__addChannel" />
      </div>

      
       <div className="sidebar__channelsList">
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
            <SidebarChannel/>
       </div>
      </div>

      <div className="sidebar__voice">

      <SignalCellularAltIcon
      className="sidebar__voiceIcon"
      fontSize="large"/>

      <div className="sidebar__voiceInfo">
      <h3>Voice Connected</h3>
      <p>Stream</p>
      </div>

      <div className="sidebar__voiceIcons">
      <InfoOutlindeIcon/>
      <CallIcon/>
      </div>

      </div>

      <div className="side__profile">
      <Avatar src={AppleImage}/>
      
      <div className="sidebar__profileInfo">
      <h3>@johnDoe</h3>
      <p>#thisIsMyId</p>
      </div>

      <div className="sidebar__profileIcons">
      <MicIcon/>
      <HeadsetIcon/>
      <SettingIcon/>
      </div>
      
      </div>

    </div>
  );
}

export default Sidebar;
