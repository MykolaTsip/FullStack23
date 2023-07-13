import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';

import {getPosts} from '../store/slices/post.slice';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts);


    useEffect(() => {
        if(!posts.length) {
            dispatch(getPosts() as any);
        }
    });

    return (<>
        {posts.map((post: any, i: number) => <div key={i}> {post.id}: {post.title} </div>)}
    </>)
}