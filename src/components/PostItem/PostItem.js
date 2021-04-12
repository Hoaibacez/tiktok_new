import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import config from "../../config";

import video01 from "../../assets/videos/phuongly.mp4";
import styles from "./PostItem.module.scss";

const defaultFn = () => {};

function PostItem({
  avatar = "",
  nickname = "",
  username = "",
  publishedAt = "",
  postContent = "",
  hasTag = "",
  likeCount = 0,
  commentCount = 0,
  shareCount = 0,
  onLike = defaultFn,
  onComment = defaultFn,
  onShare = defaultFn,
  onShowDetail = defaultFn
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to={`${config.routes.home}@${username}`}>
          <img src={avatar} className={styles.avatar} alt={nickname} />
        </Link>

        <div className={styles.info}>
          <Link to={`${config.routes.home}@${username}`}>
            <div className={styles.headingBox}>
              <h3 className={styles.nickname}>{nickname}</h3>
              <p className={styles.username}>{username}</p>
              <span> · </span>
              <p className={styles.time}>{publishedAt}</p>
            </div>
          </Link>

          <div className={styles.postContent}>
            {postContent}
            <Link
              to={`${config.routes.home}@${username}`}
              className={styles.hasTag}
            >
              {hasTag}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <video
          src={video01}
          className={styles.video}
          onClick={onShowDetail}
          controls
        />

        <div className={styles.actionBox}>
          <button className={styles.actionBtn} onClick={onLike}>
            <FontAwesomeIcon icon={faHeart} className={styles.actionIcon} />
          </button>
          <span className={styles.reactionCount}>{likeCount}</span>

          <button className={styles.actionBtn} onClick={onComment}>
            <FontAwesomeIcon icon={faComment} className={styles.actionIcon} />
          </button>
          <span className={styles.reactionCount}>{commentCount}</span>

          <button className={styles.actionBtn} onClick={onShare}>
            <FontAwesomeIcon icon={faShare} className={styles.actionIcon} />
          </button>
          <span className={styles.reactionCount}>{shareCount}</span>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
