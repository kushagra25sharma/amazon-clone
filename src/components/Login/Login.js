import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(error => alert(error.message));
    }

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            //console.log(auth);
            if(auth){
                history.push("/");
            }
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to AMAZON CLONE Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton" onClick={signUp}>Create your Amazon account</button>
            </div>
        </div>
    );
}

export default Login;