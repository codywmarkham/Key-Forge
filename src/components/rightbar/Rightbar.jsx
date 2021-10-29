import "./rightbar.css"
import {Schedule} from "@material-ui/icons"

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg"
                             src="/assets/image0.jpg" alt="" 
                             />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Autumn Markham</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg"
                             src="/assets/image0.jpg" alt="" 
                             />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Autumn Markham</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg"
                             src="/assets/image0.jpg" alt="" 
                             />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Autumn Markham</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg"
                             src="/assets/image0.jpg" alt="" 
                             />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Autumn Markham</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img 
                            className="rightbarProfileImg"
                             src="/assets/image0.jpg" alt="" 
                             />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Autumn Markham</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
