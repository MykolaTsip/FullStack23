import {useState} from 'react';

import axios from 'axios';

export const PostsOfUser = () => {
    const [filteredPost, setPost] = useState({
        userId: '',
        id: ''
    });

    const [posts, setPosts] = useState([])

    const setUid = ({target: {value}}) => {
        setPost({...filteredPost, userId: value })
    }

    const setUtitle = ({target: {value}}) => {
        setPost({...filteredPost, id: value })
    }

    const getFilteredPosts = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts?'


        if (filteredPost.userId) {
            url = `${url}userId=${filteredPost.userId}`
            
            if (filteredPost.id) {
                url = `${url}&id=${filteredPost.id}`
            }
        }

        if (filteredPost.id && !filteredPost.userId) {
            url = `${url}id=${filteredPost.id}`
        }

        axios.get(url).then(({data}) => setPosts(data))

        // const params = new URLSearchParams(filteredPost);
        // axios.get(url+params).then(({data}) => setPosts(data))
    }


    return (
        <div>
            PostsOfUser:
            <div>
                <input placeholder='user id' type='number' value={filteredPost.userId} onChange={setUid} />
                <input placeholder='id of post' type='number' value={filteredPost.id} onChange={setUtitle} />
            </div>
            <button onClick={getFilteredPosts}>Find posts</button>
            <div>
                { posts[0] && 'Filtered posts:' }
                <div>
                    {posts.map((post, i) => (<div key={i}>
                        {post.id} - {post.title}
                    </div>))}
                </div>
            </div>
        </div>
    )
}