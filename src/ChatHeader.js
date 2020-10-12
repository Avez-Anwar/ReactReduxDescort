import React from 'react'
import NotificationsIcon from "@material-ui/icons/Notifications"
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded"
import SearchRoundedIcon from "@material-ui/icons/SearchRounded"
import SendRoundedIcon from "@material-ui/icons/SendRounded"
import HelpRoundedIcon from "@material-ui/icons/HelpRounded"

function ChatHeader() {
    return (
        <div>
            <h2>This is a char header</h2>
        <div className="chatHeader__left">
          <h3>
            <span className="chatHeader__hash">#</span>
            Test Channel Name
          </h3>
        </div>

        <div className="chatHeader__right">
            NotificationsIcon/>
            <PeopleAltRoundedIcon/>

          <div className="chatHeader__search">
           <input placeholder="search"/>
            <SearchRoundedIcon/>
          </div>
            <SendRoundedIcon/>
            <HelpRoundedIcon/>
        </div>
        </div>
    )
}

export default ChatHeader
