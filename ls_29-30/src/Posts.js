import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';

import {getPosts} from './store/slices/post.slice';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);


    useEffect(() => {
        if(!posts.length) {
            dispatch(getPosts());
        }

        console.log(process.env.NODE_ENV)
    });

    return (<>
        {posts.map((post, i) => <div key={i}> {post.id}: {post.title} </div>)}
    </>)
}