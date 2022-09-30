import React from 'react';
import {Users} from '../dummyData';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';

const Post = ({post}) => {
    const user = Users.filter(user => user.id === post.userId);
    const [likes, setLikes] = useState(post.likes.length);
    const [liked, setLiked] = useState(false);

    const Likehandeler = () => {
        if (!liked){
            setLikes(likes+1);
            setLiked(true);
        }
        if (liked) {
            setLikes(likes-1);
            setLiked(false);
        }
    }

    return(
        <>
            <div className='post'>
                <div className='profile-header container-row'>
                    <img className='profile-img' src={user[0].profilePhoto} alt='profile'></img>
                    <h1 className='post-user'>{user[0].username}</h1>
                </div>
                <img className='post-img' src={post.postImage} alt='post'></img>
                <div className='profile-header container-row'>
                <button className='btn3 align' onClick={Likehandeler}>
                    <FavoriteIcon className={`${liked ? `liked` : ``}`}></FavoriteIcon>
                    {likes}
                </button>
                <h2 className='post-caption'>{post.caption}</h2>
                </div>
            </div>
        </>
    )
}

export default Post;