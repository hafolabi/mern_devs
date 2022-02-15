import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'


const Register =()=>{
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [passError, setPassError] = useState('')
    const [emailError, setEmailError] = useState('')

    const passValidation=(e)=>{

        const confPass = e.target.value
        setconfirmPassword(confPass)
         if(password !== confPass){
            setPassError('password does not match')
        }else{
            setPassError('')
        }

    }

    const emailValidation=(e)=>{   
        setEmail(e.target.value)
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (validEmailRegex.test(email)){
            setEmailError('')
        }else {
            setEmailError('Email is not valid!')
        }
    }


    const regSubmit =(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/api/insert', 
        {   fullName:fullName, 
            regEmail:email, 
            regGender:gender, 
            regPassword:password})
            .then((res)=>{ 
                console.log(res)
                alert('Detail Successfully Captured')
    
                })
                .catch(err=>{
                    console.log(err)
                    alert('Detail Not Successfully Captured')
            })
           
            
            
    }
        return(
            <div>

               <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Register</h2>
                            <ol>
                                <li><Link to='/'>Home</Link></li>
                                <li>Register</li>
                            </ol>
                        </div>

                    </div>
                </section>
                
                <section>
                    <div class="container ">

                        

                        <div class="row justify-content-center apiCall" data-aos="fade-up ">

                         <div class="col-lg-6 info-wrap mt-5 form-group">
                        <form class="contact-form" onSubmit={regSubmit} style={{ textAlign: 'center' }}>
                                <h1 style={{textAlign:'center'}}>Sign Up With Us Today</h1><br />
                    
                         <input type="text" name="fullName" value={fullName} placeholder="Full-Name"  class="form-control textWidth" onChange={(e)=> {setFullName(e.target.value)}} required /><br />

                         <input type="text" name="email" value={email} placeholder="E-mail"  class="form-control textWidth" onChange={(e)=> emailValidation(e)} required/><br />
                                <span style={{fontSize:'12px', color:'red'}}> {emailError} </span>
                        
                        <input type="text" name="gender" value={gender} placeholder="Gender"  class="form-control textWidth" onChange={(e)=> {setGender(e.target.value)}} required/><br />

                        <input type="password" password="password" value={password} placeholder="Password"  class="form-control textWidth" onChange={(e)=> setPassword(e.target.value)} required/><br />
                                <span style={{fontSize:'12px', color:'red'}}> {passError}</span>

                        <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm password"  class="form-control textWidth" onChange={(e)=>passValidation(e)} required/><br />
                               <span style={{fontSize:'12px', color:'red'}}> {passError}</span>

                        <button onClick={regSubmit} type="submit" class="btn btn-outline-success px-lg-5">Register</button>
                        
                        </form>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        )
    }
export default Register