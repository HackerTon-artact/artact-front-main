import React from 'react';
import '../../styles/sign/login.css';
function login(){
    return(
        <div class ="ground">
            <div class= "back">
            <div class ="front">
                <span class = "title">Artact</span><br></br>
                <ul>
                <li><input type= "text" name = "id" placeholder="ID" id="login_id"/></li>
                <li><input type="password" name = "pw" placeholder="Password" id="login_pass"/></li>
                </ul>
                <li><button type="submit">로그인</button></li>
                
            </div>
            </div>
        </div>
        
    );
}

export default login;