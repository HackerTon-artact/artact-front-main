import React,{useState} from 'react';
function index(){
    const [image,setImage] = useState('');

    return(
        <div>
            <input type="img" onChange={uploadImage} />
            <button></button>
        </div>
    );
}

export default index;