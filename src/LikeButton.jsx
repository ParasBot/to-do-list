import { use } from "react";
import { useState } from "react";

export default function LikeButton() {
        let [isLike,setIsLike] = useState(false);
        let [count,setCount] = useState(0);
        let toggleLike = () => {
            console.log("We are going toggle");
            setIsLike(!isLike);
            setCount(count=count+1);
        }
        let likeStyle = {color:"red"};
    return(
        <div>
            <h2>Likes: {count}</h2>
            <p onClick={toggleLike}>
                {
                    isLike ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
            
        </div>
    );
}