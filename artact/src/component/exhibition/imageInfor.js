import React,{useCallback} from 'react';
import '../../styles/exhibition/imageInfor.css';

function ImageInfor({Tags,UploadDay,MadeDay,Name,Price}){
    const  numberWithCommas = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return(
        <div class="imageInfor-container">
            <div class="madeDay">작품 만든 날짜 {MadeDay}</div>
            <div class="uploadDay">작품 업로드 날짜 {UploadDay}</div>
            <div class="imageName">별이 빛나는 밤({MadeDay})</div>
            <div class="writer">{Name}</div>
            <div class="price">₩ {Price}</div>
            <div class="tags-container">
                {Tags.map((Tag)=> <div style={{marginRight:"1rem"}}>#{Tag}</div>)}
            </div>
            <div class="buy-button">구매하기</div>
        </div>
    );
    

}

export default ImageInfor;