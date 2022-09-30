import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState, useEffect} from 'react';
import Axios from 'axios';

const LikeButton = () => {
    // define and update like count
    const [likes, setLikes] = useState(999);
    // define and update boolean like state
    const [liked, setLiked] = useState(false);

    // dynamically assign these later
    const likeIdStatic = '123';
    const userIdStatic = 'aaron';

    useEffect( () => {
        const getLikes = async () => {
            const {data} = await Axios.get(`http://localhost:3001/api/v1/like/${likeIdStatic}/count`);
            setLikes(data);
        }
        const getLiked = async () => {
            const {data} = await Axios.get(`http://localhost:3001/api/v1/like/${likeIdStatic}/user/${userIdStatic}`);
            setLiked(data);
        }
        getLikes().catch(console.error);
        getLiked().catch(console.error);
    }, []);

    const addLike = () => {
        //check if like button has already been liked
        //if false, add like
        if (!liked) {
            Axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/like/add',
                data: {
                    likeId: likeIdStatic,
                    userId: userIdStatic
                }
            }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
            setLikes(likes + 1);
            setLiked(true);
        }
        //if true, remove like
        if (liked) {
            Axios({
                method: 'post',
                url: 'http://localhost:3001/api/v1/like/remove',
                data: {
                    likeId: likeIdStatic,
                    userId: userIdStatic
                }
            }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
            setLikes(likes - 1);
            setLiked(false);
        }
    }

    const RenderLikeCount = () => {
        let count = likes;
        if (count < 1000) {
            return count;
        }
        else {
            let newCount = count/1000;
            return (newCount + ' k');
        }
    }

    return(
        <>
        <div className='container-column background-gradient padding relative'>
            <button className='btn4 container-row align' id='1' onClick={addLike}>
                <FavoriteBorderIcon className={` padding-like ${liked ? `liked` : ``}`}></FavoriteBorderIcon>
                <p className='padding-like'>{RenderLikeCount()}</p>
            </button>
        </div>
        </>
    )
}

export default LikeButton;