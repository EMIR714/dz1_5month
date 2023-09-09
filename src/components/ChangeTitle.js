import React from "react";
import { useDispatch } from "react-redux";

function ChangeTitle() {

    const dispatch = useDispatch() 
    const changeAboutTitle = () => {
        dispatch({
            type: "CHANGE_ABOUT_TITLE"
        })
    }


    return (
        <div>
            <button onClick={changeAboutTitle}>Change About title</button>
        </div>
    )
}

export default ChangeTitle