import React,{useState,useEffect} from 'react';
import Axios from 'axios';
function Index(){
    const [test,setTest] = useState('')
    useEffect(()=>{
        Axios.get("http://172.30.1.44:8080/work/art").then((res)=>{
            console.log(res.data);

            setTest(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <div>
            <div>신규 그림</div>
            {test}
        </div>
    );
}

export default Index;