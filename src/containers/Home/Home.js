import { useHistory } from 'react-router-dom'
import { Row, Column } from '@mycv/mycv-grid'

import MainSidebar from '../../components/MainSidebar'
import PostItem from '../../components/PostItem'

function Home() {
    const history = useHistory()

    const handleLogin = () => {
        alert('XU LY LOGIN')
    }

    const posts = [
        {
            id: 1,
            avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/14af51e8ed6fdebd007a36fbfb8d3f0b.jpeg?x-expires=1617976800&x-signature=GKia80uBiWk7f0cFsieyFx%2Fi9jg%3D',
            nickname: 'orelregus',
            username: 'Billiards style66',
            publishedAt: '10 phút',
            postContent: '#xuhuongtiktok #xuhuong mọi người lưu ý nha',
            likeCount: '',
            commentCount: '',
            shareCount: '',
        }
    ]

    return (
        <Row>
            <Column size={0} sizeTablet={4} sizeDesktop={3}>
                <MainSidebar onLogin={handleLogin} />
            </Column>
            <Column size={12} sizeTablet={8} sizeDesktop={9}>
                {posts.map(post => (
                    <PostItem
                        key={post}
                        avatar={post.avatar}
                        nickname={post.nickname}
                        username={post.username}
                        publishedAt={post.publishedAt}
                        postContent={post.postContent}
                        likeCount={post.likeCount}
                        commentCount={post.commentCount}
                        shareCount={post.shareCount}
                        onLike={post.onLike}
                        onComment={post.onComment}
                        onShare={post.onShare}
                        onShowDetail={() => history.push('/@baoboii_002/video/6948366460460764418')}
                    />
                ))}
            </Column>
        </Row>
    )
}

export default Home
