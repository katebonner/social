import React from 'react';
import {useState} from 'react';
import {Posts} from '../dummyData';
import Post from '../components/post'
import SearchIcon from '@mui/icons-material/Search';
import {Users} from '../dummyData';

const Feed = () => {

    const [searchButtonState, setSearchButtonState] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [dynamicPosts, setDynamicPosts] = useState(Posts);

    const filterFeed = () => {
        const targetUser = Users.filter(user => user.username === searchQuery);
        if (targetUser.length > 0) {
            const filteredPosts = Posts.filter(post => post.userId === targetUser[0].id);
            setDynamicPosts(filteredPosts);
        }
        else {
            setDynamicPosts([]);
        }
    
    }

    const collectSearchQuery = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
        if (e.target.value.length > 0) {
            setSearchButtonState(false);
        }
        else {
            setSearchButtonState(true);
        }
    };
        
    return(
        <>
        <div class='search'>
            <SearchIcon className='SearchIcon'></SearchIcon>
            <input onChange={collectSearchQuery} class='search-input' placeholder='Search by username'></input>
            <button disabled={searchButtonState} class='search-button fade-in' onClick={filterFeed}>search</button>
        </div>
        <div className='container-row'>
        {dynamicPosts.map((post) => (
            <Post key={post.id} post={post}></Post>
        ))}
        </div>
        </>
    )
}

export default Feed;