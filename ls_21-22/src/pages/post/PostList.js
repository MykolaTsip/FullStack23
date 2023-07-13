import { useEffect, useState } from 'react';

import axios from 'axios';

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const allPosts = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        axios.get(allPosts).then(val => {
            console.log(val)
            setPosts(val.data)
        })

    }, [])

    return (
        <div>
            Hello posts

            <div>
                {posts.map((post, i) => (
                    <div key={i}>
                        <div>
                            {post.id}:
                        </div>
                        <div>
                            {post.title}
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        </div>
    )
}