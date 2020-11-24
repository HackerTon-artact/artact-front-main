import React,{useEffect,useState,useCallback} from 'react';
import ImageInfor from './imageInfor';
import ImageContent from './imageContent';
import '../../styles/exhibition/imageForm.css'
import Axios from 'axios';
function ImageForm(){
    const [page,setPage] = useState(0)
    const [userInfor,setUserInfor] = useState([{   
    "imageUrl":"",
    "tags" : [],
    "uploadDay": "",
    "madeDay" : "",
    "name" : "",
    "title": "",
    "price": 0,
    "content": ""
    }]);
    useEffect(()=>{
        Axios.get('https://raw.githubusercontent.com/zofqofhtltm8015/fs/master/testImage.json').then((res)=>{
            setUserInfor(res.data);
            console.log(res.data[page]);
        });
    },[]);

    
    const prePage = ()=>{
        if(userInfor[page-1]){
            setPage(page=>page-1);
        }else{
            alert("첫 페이지 입니다.");
        }
    };

    const nextPage = ()=>{
        if(userInfor[page+1]){
            setPage(page=>page+1);
        }else{
            alert("마지막 페이지 입니다.");
        }
    }

    return(
        <div className="imageForm-container">
            <ImageContent ImageUrl={userInfor[page].imageUrl} Title={userInfor[page].title} Content={userInfor[page].content} PrePage={prePage} NextPage={nextPage}  ></ImageContent>
            <ImageInfor Tags={userInfor[page].tags} UploadDay={userInfor[page].uploadDay} MadeDay={userInfor[page].madeDay} Name={userInfor[page].name} Price={userInfor[page].price} ></ImageInfor> 
        </div>
    );
}

export default ImageForm;