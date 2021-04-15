import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Column } from "@mycv/mycv-grid";
import axios from "axios";
import Post from "../../entites/Post";
// import avatar from "../../assets/img/phuong_ly.jpeg";
import MainSidebar from "../../components/MainSidebar";
import PostItem from "../../components/PostItem";
import Accounts from "../../entites/Account";

function Home() {
  const history = useHistory();
  const [sugestAcount, setSugestAcount] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/suggested?page=1")
      .then(({ data }) => {
        const accounts = data.data.map((account) => new Accounts(account));
        setSugestAcount(accounts);
        // console.log(sugestAcount);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/api/posts?type=for-you&page=1")
      .then(({ data }) => {
        // console.log(data);

        const postsItem = data.data.map((post) => new Post(post));
        // console.log(postsItem);
        setPosts(postsItem);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleLogin = () => {
    alert("XU LY LOGIN");
  };
  return (
    <Row>
      <Column size={0} sizeTablet={4} sizeDesktop={3}>
        <MainSidebar sugestAcount={sugestAcount} onLogin={handleLogin} />
      </Column>
      <Column size={12} sizeTablet={8} sizeDesktop={9}>
        {posts.map((post) => (
          <PostItem
            key={post.data.id}
            avatar={post.data.user.avatar}
            nickname={post.data.user.nickname}
            username={post.data.username}
            publishedAt={post.data.published_at}
            postContent={post.data.description}
            video={post.data.file_url}
            // hasTag={post.data.hasTag}
            likeCount={post.data.likes_count}
            commentCount={post.data.comments_count}
            shareCount={post.data.shares_count}
            onLike={post.data.onLike}
            onComment={post.data.onComment}
            onShare={post.data.onShare}
            onShowDetail={() =>
              history.push("/@baoboii_002/video/6948366460460764418")
            }
            isHorizontal={post.data.is_Horizontal}
            isVertical={post.data.is_Vertical}
            isSquare={post.data.is_Square}
          />
        ))}
      </Column>
    </Row>
  );
}

export default Home;
