import "./post.css"
import {MoreVert} from "@material-ui/icons"
export default function Post() {
    return (
        <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                    <div className="postTopLeft">
                          <img className="postProfileImg" src="/assets/codyhs.png" alt="" />
                          <span className="postUsername">Cody Markham</span>
                          <span className="postDate">7 mins ago</span>
                    </div>
                    <div className="postTopRight">
                            <MoreVert/>
                    </div>
              </div>
              <div className="postCenter">
                  <span className="postText">Check out my Notetaker app!</span>
                  <img className="postImg" src="/assets/notetaker.png" alt="" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className="likeIcon" src="/assets/like.png" alt="" />
                      <span className="postLikeCounter"> 27 Likes</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 Comments</span>
                  </div>
              </div>
          </div>
        </div>
    )
}
