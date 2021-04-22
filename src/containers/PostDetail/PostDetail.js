import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import config from "../../config";

import styles from './PostDetail.module.scss'
function PostDetail() {
    const [posts, setPosts] = useState({});
    const { nickname, videoId } = useParams();

    useEffect(() => {
        axios
          .get(`/api/posts/${videoId}`)
          .then(({ data }) => {
            setPosts(data.data);
            // console.log(posts);

          })
          .catch((e) => {
            console.log(e);
          });
      }, [videoId]);
    console.log(posts);
    
    return (
        // posts
        <div className={styles.wrapper}>
            {/* <h1 style={{ fontSize: 32 }}>{nickname} - {videoId}</h1> */}
            {/* <p>des: {posts.description}</p> */}
            <div className={styles.videoContainer}>
				<video
					src={posts.file_url}
					controls
				/>
            </div>
            <div className={styles.videoContentContainer}>
				{/* <Link
					to={`${config.routes.home}@${username}`}
					className={styles.accountItem}
				>
					<img src={avatar} className={styles.avatar} alt={username} />
					<div className={styles.accountBody}>
					<div className={styles.display}>
						<h3 className={styles.username}>{username}</h3>
						<FontAwesomeIcon
						icon={faCheckCircle}
						className={styles.iconTick}
						style={checkTickClass}
						/>
					</div>
					<p className={styles.name}>{name}</p>
					</div>
				</Link> */}
            </div>
        </div>
    )
}

export default PostDetail
