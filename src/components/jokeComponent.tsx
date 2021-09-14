



import axios from "axios";
import React, { useEffect, useState } from "react";


export const JokeComponent = (props:{mainTitle:string}) => {

    const [ likes, setLikes] = useState();

    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/random')
        .then(response => {
            console.log('data payload:', response.data);
        })
    })

    return(
        <div>
            <p className='mainTitle'>{props.mainTitle}</p>
        </div>
    )
}