import React from "react";
import {Post} from "./Post";

export function Posts( {posts, loading}){
   
        if(loading){
            return <h1>Loading...</h1>
        }
        return(
            <>
        <div className="post">
           {/* {console.log(currentPosts? currentPosts : "still loading")} */}
            {posts?.map(post=>(
                
                <Post 
                key = {post.id} 
                title = {post.title} 
                body = {post.body}/>
            ))}


        </div>


        </>
    )
}