import React,{useCallback, useState} from 'react';
function UpLoadImage(){

    const changeImage = useCallback((e) =>{

    },[]);
    const [image,setImage] = useState('');

    const uploadImage = useCallback((e)=>{
    
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            console.log(reader.result);
            setImage(reader.result);
        }
        reader.readAsDataURL(file);        
    },[]);
    return(

        <div>
            <img src={image} alt="에러" onChange={changeImage} />
            <input type="file" onChange={uploadImage} />
        </div>
    );
}

export default UpLoadImage;