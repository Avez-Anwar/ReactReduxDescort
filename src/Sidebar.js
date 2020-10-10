import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">The drop down
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
      </div>
    </div>
  );
}

export default Sidebar;
