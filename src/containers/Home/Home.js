import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Row, Column } from "@mycv/mycv-grid";
import axios from 'axios'
import Post from '../../entites/Post'
// import avatar from "../../assets/img/phuong_ly.jpeg";
import MainSidebar from "../../components/MainSidebar";
import PostItem from "../../components/PostItem";
import Accounts from "../../entites/Account";

function Home() {
  const history = useHistory();
  const [sugestAcount, setsugestAcount] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/users/suggested?page=1')
      .then(({data}) => {
        const accounts = data.data.map(account => new Accounts(account))
        setsugestAcount(accounts)
        console.log(sugestAcount);
      })
      .catch(e => { 
        console.log(e);
      })
    
    axios.get('/api/posts?type=for-you&page=1')
    .then(({data}) => {
      const postsItem = data.data.map(post => new Post(post))
      setPosts(postsItem)
    })
    .catch(e => {
      console.log(e);
    })
  },[])

  const handleLogin = () => {
    alert("XU LY LOGIN");
  };
  
   
  return (
    <Row>
      <Column size={0} sizeTablet={4} sizeDesktop={3}>
        <MainSidebar 
          sugestAcount={sugestAcount}
          onLogin={handleLogin} />
      </Column>
      <Column size={12} sizeTablet={8} sizeDesktop={9}>
        {posts.map((post) => (
          <PostItem
            key={post.id}
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
            isHorizontal={post.is_Horizontal}
            isVertical={post.is_Vertical}
            isSquare={post.is_Square}
          />
        ))}
      </Column>
    </Row>
  );
}

export default Home;
