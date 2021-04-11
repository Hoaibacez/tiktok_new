import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

import video01 from '../../assets/videos/video_01.mp4'
import styles from './PostItem.module.scss'

const defaultFn = () => {}

function PostItem({
    avatar = '',
    nickname = '',
    username = '',
    publishedAt = '',
    postContent = '',
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
                <img src={avatar} className={styles.avatar} alt={nickname} />

                <div className={styles.info}>
                    <div className={styles.headingBox}>
                        <h3 className={styles.nickname}>{nickname}</h3>
                        <p className={styles.username}>{username}</p>
                        <span> · </span>
                        <p className={styles.time}>{publishedAt}</p>
                    </div>
                    <div className={styles.postContent}>
                        {postContent}
                    </div>
                </div>
            </div>
            
            <div className={styles.content}>
                <video src={video01} className={styles.video} onClick={onShowDetail} />

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
    )
}

export default PostItem
