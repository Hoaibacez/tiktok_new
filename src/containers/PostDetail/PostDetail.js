import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import PostDetailContent from "../../components/PostDetailContent";
// import Accounts from "../../entites/Account";
import styles from "./PostDetail.module.scss";
function PostDetail() {
  const [posts, setPosts] = useState({});
  const { nickname, videoId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/posts/${videoId}`)
      .then(({ data }) => {
        // const acount = new Accounts(data.data);
        // setPosts(acount);
        setPosts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [videoId]);
  // const post = posts.data
  console.log(posts);
  return [];
  // {posts}
  // {posts.map(post)}
  // <div className={styles.wrapper}>
  //   <div className={styles.videoContainer}>
  //     {/* <video
  //       className={styles.video}
  //       src={posts.data.file_url}
  //       controls
  //       autoPlay
  //       muted
  //     /> */}
  //   </div>
  //   <div className={styles.videoContentContainer}>
  //     <PostDetailContent
  //       //   avatar={posts.data.user.avatar}
  //       username={nickname}
  //       //   name={posts.fullName}
  //       //   tick={posts.data.user.tick}
  //     />
  //   </div>
  // </div>
}

export default PostDetail;
