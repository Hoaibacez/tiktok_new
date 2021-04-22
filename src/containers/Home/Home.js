import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Column } from "@mycv/mycv-grid";
import axios from "axios";
import { Waypoint } from 'react-waypoint';

import Post from "../../entites/Post";
// import avatar from "../../assets/img/phuong_ly.jpeg";
// import MainSidebar from "../../components/MainSidebar";
import PostItem from "../../components/PostItem";
// import Accounts from "../../entites/Account";
import Sidebar from "../Sidebar";

function Home() {
  const history = useHistory();
  // const [sugestAcount, setSugestAcount] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isScrollDown, setIsScrollDown] = useState(null);
  let oldScrollY = 0

  useEffect(() => {
    axios
		.get("/api/posts?type=for-you&page=1")
		.then(({ data }) => {
			// console.log(data);

			const postsItem = data.data.map((post) => new Post(post))
			// console.log(postsItem);
			setPosts(postsItem);
		})
		.catch((e) => {
			console.log(e)
		})
	window.onscroll = function() {
		if (window.scrollY > oldScrollY) {
			setIsScrollDown(true)
		} else if (window.scrollY < oldScrollY) {
			setIsScrollDown(false)
		}
		oldScrollY = window.scrollY
	}
  }, [])

  const wayPointProps = {}
  if (isScrollDown) {
	wayPointProps.bottomOffset = 520
  }	else wayPointProps.topOffset = 640
  return (
    <Row>
      <Column size={0} sizeTablet={4} sizeDesktop={3}>
        <Sidebar />
      </Column>
      <Column size={12} sizeTablet={8} sizeDesktop={9}>
        {posts.map((post) => (
            <Waypoint
				key={post.data.id}
				{...wayPointProps}
				onEnter={(e) => {
					console.log(e.event);
					console.log(post.data.description);
				}}
			>
				<div>
					<PostItem
						// key={post.data.id}
						avatar={post.data.user.avatar}
						nickname={post.data.user.nickname}
						username={post.data.username}
						publishedAt={post.data.published_at}
						postContent={post.data.description}
						video={post.data.file_url}
						tik={post.data.tik}
						likeCount={post.data.likes_count}
						commentCount={post.data.comments_count}
						shareCount={post.data.shares_count}
						onLike={post.data.onLike}
						onComment={post.data.onComment}
						onShare={post.data.onShare}
						onShowDetail={() =>
						history.push(`${post.data.user.nickname}/video/${post.data.uuid}`)
						}
						isHorizontal={post.data.is_Horizontal}
						isVertical={post.data.is_Vertical}
						isSquare={post.data.is_Square}
					/>
				</div>
          	</Waypoint>
        ))}
      </Column>
    </Row>
  );
}

export default Home;
