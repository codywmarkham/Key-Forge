import "./rightbar.css"
import {Schedule} from "@material-ui/icons"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="eventContainer">
                    <Schedule className="eventIcon"/>
                    <span className="eventText">
                        <b>Final Project</b> and <b>2 Other Events</b> Today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
