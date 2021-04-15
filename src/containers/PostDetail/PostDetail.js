import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'

function PostDetail() {
    const [posts, setPosts] = useState({});
    const { nickname, videoId } = useParams();

    const [numb, setNumb] = useState(1);
    // const {numb, setNumb} = useState(1);

    useEffect(() =>{
        console.log('Change');
    }, [numb])
    useEffect(() => {
        axios
          .get(`/api/posts/${videoId}`)
          .then(({ data }) => {
            // console.log(data);
            setPosts(data.data);
            // console.log(posts);

          })
          .catch((e) => {
            console.log(e);
          });
      }, [videoId]);
    // console.log(posts);
    
    return (
        // posts
        <div>
            <h1>{numb}</h1>
            <button onClick={() => {setNumb(numb + 1)}}><h1>increse</h1></button>
            <h1 style={{ fontSize: 32 }}>{nickname} - {videoId}</h1>
            <p>des: {posts.description}</p>
            <video
                src={posts.file_url}
                controls
            />
        </div>
    )
}

export default PostDetail
