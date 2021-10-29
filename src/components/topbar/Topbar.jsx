import "./topbar.css"
import { Search, Person, Chat, Notifications, VpnKeyTwoTone} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">KeyForge</span>
                <VpnKeyTwoTone className="topbarLeftIcon"/>
                
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon" />
                <input placeholder="Search" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Submissions</span>
                    <span className="topbarLink">Projects</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">14</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">8</span>
                    </div>
                </div>
                <img src="/assets/codyhs.png" alt="profile pic" className="topbarImage" />
            </div>

        </div>
    )
}
