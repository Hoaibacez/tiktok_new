import { useHistory } from "react-router-dom";
import { Row, Column } from "@mycv/mycv-grid";

import avatar from "../../assets/img/phuong_ly.jpeg";
import MainSidebar from "../../components/MainSidebar";
import PostItem from "../../components/PostItem";

function Home() {
  const history = useHistory();

  const handleLogin = () => {
    alert("XU LY LOGIN");
  };

  const posts = [
    {
      id: 1,
      avatar: avatar,
      nickname: "phuonglytran",
      username: "Phương Ly Trần",
      publishedAt: "10 phút",
      postContent: "Baby , leave the door open 😆",
      hasTag: "#phuongly #leavethedooropen",
      likeCount: "",
      commentCount: "",
      shareCount: ""
    }
  ];

  return (
    <Row>
      <Column size={0} sizeTablet={4} sizeDesktop={3}>
        <MainSidebar onLogin={handleLogin} />
      </Column>
      <Column size={12} sizeTablet={8} sizeDesktop={9}>
        {posts.map((post) => (
          <PostItem
            key={post}
            avatar={post.avatar}
            nickname={post.nickname}
            username={post.username}
            publishedAt={post.publishedAt}
            postContent={post.postContent}
            hasTag={post.hasTag}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            shareCount={post.shareCount}
            onLike={post.onLike}
            onComment={post.onComment}
            onShare={post.onShare}
            onShowDetail={() =>
              history.push("/@baoboii_002/video/6948366460460764418")
            }
          />
        ))}
      </Column>
    </Row>
  );
}

export default Home;
