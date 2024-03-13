import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signinUser } from "../services/user";

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignin = async() => {
        if (email.length == 0){
            toast.warn("Enter email")
        } else if (password.length == 0){
            toast.warn("Enter password")
        } else {
            const result = await signinUser(email, password)
            if(result['status'] == 'success' ){
                const token = result['data']['token']
                sessionStorage['token'] = token

                toast.success("Welcome to the Apple Store")
                navigate('/home')
            }
            else{
                toast.error(result['error'])
            }
        }
        
    }

    return (
        <>
            <h1 className="title">Signin</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="abc@gmail.com"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="xxxxxxxxxxx"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <button onClick={onSignin} className="btn btn-primary mb-2">Signin</button>
                            <div>
                                Don't have an account? <Link to='/signup'>Signup here</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </>
    );
}

export default Signin;