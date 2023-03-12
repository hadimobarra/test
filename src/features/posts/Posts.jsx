import React from "react";
// import {useAppSeletor, useAppdispatch} from '../../app/hooks';
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "./slice";
import { addSendPost } from "./actions";



const Posts = () => {
    
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);


    //let show ;
    function a() {
        let show  = <h2>loading..</h2>
        if (posts) {
            show = (<div>
                {/* {posts.map(i => i)} */}
                {Array.from(posts).map(i => i)}
            </div>)
        }
        return show;
    }
    // const sender = () => {
    //     dispatch(addSendPost)
    // }

    //console.log('posts: ', posts)
    return(

        <div>
            <button onClick={() => dispatch(addSendPost())} >Press me</button>
            {/* <ul>{console.log('inner log',posts)}</ul> */}
            {a()}
            {/* {posts2 ? <div>{posts2.map(i => i)}</div> : <h2>loading..</h2>} */}
        </div>
    )
};

export default Posts;