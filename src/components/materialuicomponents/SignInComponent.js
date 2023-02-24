import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignInComponent(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErroS, sentEmailError] = useState("");
    const [passwordErrorS, sentPasswordError] = useState("");
    // Add states
    // Add handlers
    // Add validation
    // For Email:  not empty
    // For Password: not empty and greather than 8

    const navigate = useNavigate();
    const homePage =() =>{
        navigate("/home");
    }
    useEffect(() => {
        if (emailErroS || passwordErrorS) {
          alert(JSON.stringify({ emailError: emailErroS, passwordError: passwordErrorS }));
        }
      }, [emailErroS, passwordErrorS]);

    const handleEmailInputChange = function(e){
        console.log("Hi from handleinputchange");
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = function(e){
        console.log("hi from handlePasswordInputChange");
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleRememberMeInputChange = function(e){
        console.log("hi from handleRememberMeInputChange");
        setRememberMe(!rememberMe);
    }
    const  handleSubmit = function(e){
        let emailError = "";
        let passwordError = "";
        if(!email){
            emailError = "Email cant be empy";
        }
        else if(!password){
            passwordError = "Password cant be empy";
        }else if(password.length < 8){
            passwordError = "password should be at least 8 characteres";
        }
        else if(emailError || passwordError){
            sentEmailError(emailError);
            sentPasswordError(passwordError);
            console.log("emailErrorS", emailErroS);
            console.log("passwordErrorS", passwordErrorS);
            alert(JSON.stringify({emailError: emailError, passwordError: passwordError}));
            e.preventDefault();
        }else if(email === "miguel.ramirez@jala.university" && password === "123456789"){
            // alert(JSON.stringify({email : email, password : password, rememberMe: rememberMe}));
            homePage();
        }
    }   

    return (
        <div>
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange} 
                />
                <br></br>
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange} 
                />
                <br></br>
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignInComponent;