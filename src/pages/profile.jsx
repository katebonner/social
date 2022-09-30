import React from 'react';
import Nav from '../components/nav';
import Post from '../components/post';
import { Users } from '../dummyData';
import { Posts } from '../dummyData';
import InstagramIcon from '@mui/icons-material/Instagram';

const Profile = () => {

    const profile = Users[3];
    const profilePosts = Posts.filter((post) => post.userId === profile.id);
    // const profileFriends = Users.filter((user) => user.id !== 4);

    const RenderFriends = () => {
    //     return (
    //         <>
    //             <modal></modal>
    //         </>
    //     )
    }

    return(
        <>
        <Nav></Nav>
        <div className='container-column background-gradient padding relative'>
            <img className='profile-page-img' src={profile.profilePhoto} alt='profile'></img>
            <h1 className='white'>{profile.username}</h1>
            <div className='container-column'>
                {RenderFriends()}
                <h2 className='white'>{profile.bio}</h2>
                    <div className='container-row align white' >
                        <a href={profile.insta} target='_blank' rel='noreferrer'><InstagramIcon className='white' ></InstagramIcon></a>
                        <h4 className='space'>|</h4>
                        <button className='btn3' onClick={RenderFriends}>{profile.friends.length} friends</button>
                        <h4 className='space'>|</h4>
                        <h4>{profilePosts.length} posts</h4>
                    </div>
                <div className='container-row'>
                    {profilePosts.map((post) => (
                        <Post key={post.id} post={post}></Post>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;