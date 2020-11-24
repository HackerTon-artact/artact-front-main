import React from 'react';
import {leftPointer,rightPointer} from '../../assets/img'
import '../../styles/exhibition/imageContent.css';
function imageContent({ImageUrl,Title,Content,PrePage,NextPage}){
    return(
        <div className="imageContent-container">

            <div className="imageContent-mainContent">
                <img class="clickImage" src={leftPointer} onClick={PrePage} />
                <span class="mainImage-form">
                    <img className="mainImage"src={ImageUrl}/>
                </span>
                <img className="clickImage roll" src={leftPointer} onClick={NextPage} />
            </div>
            <h2 class="title">{Title}</h2>
            <h2 class="explanation">explanation</h2>
            <div class="explanation-content">{Content}</div>
        </div>

    );
}

export default imageContent;