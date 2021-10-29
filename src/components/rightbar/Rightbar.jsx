import "./rightbar.css"
import {Schedule} from "@material-ui/icons"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return(
            <>
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
            </>
        )
    }


    const ProfileRightbar = () =>{
        return (
            <>
            <h4 className="rightbarTitle">Artist Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Houston</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Texas</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Focus:</span>
                    <span className="rightbarInfoValue">Writer</span>
                </div>
            </div>
            <h4 className="rightbarTitle">Artist's Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/2.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/1.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/4.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/3.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/5.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/6.PNG" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mucho Dia</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>
            </div>
        </div>
    )
}
