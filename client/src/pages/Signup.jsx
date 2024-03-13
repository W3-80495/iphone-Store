import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupUser } from "../services/user";

function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const onSignup = async() => {
        if (firstName.length == 0){
            toast.warn("Enter first name")
        } else if (lastName.length == 0){
            toast.warn("Enter last name")
        } else if (email.length == 0){
            toast.warn("Enter email")
        } else if (password.length == 0){
            toast.warn("Enter password")
        } else if (confirmPassword.length == 0){
            toast.warn("Enter confirm password")
        } else if (password != confirmPassword){
            toast.warn("Password does not matched")
        } else {
            const result = await signupUser(firstName, lastName, email, password)
            if(result['status'] == 'success' ){
                toast.success("Successfully registered the user")
                navigate('/')
            }
            else{
                toast.error(result['error'])
            }
        }
        
    }

    return (
        <>
            <h1 className="title">Signup</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">First Name</label>
                            <input onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="First name"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Last Name</label>
                            <input onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Last name"
                                className="form-control"
                            />
                        </div>
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
                            <label htmlFor="">Confirm Password</label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} 
                                type="password"
                                placeholder="xxxxxxxxxxx" 
                                className="form-control" />
                        </div>
                        <div className="mb-3">
                            <div>
                                Already have an account? <Link to='/'>Signin here</Link>
                            </div>
                            <button onClick={onSignup} className="btn btn-primary mt-2">Signup</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </>
    );
}

export default Signup;