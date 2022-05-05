import './emailVerify.css'
import {useState, useEffect, Fragment } from 'react'
import {Link, useParams} from 'react-router-dom'
import { axiosInstance } from "../../config";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const param = useParams()

    useEffect(()=>{
        const verifyEmailUrl = async ()=>{
            try{
                await axiosInstance.put(`/auth/${param.id}/verify/${param.token}`)
                setValidUrl(true)
            }catch(err){
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    },[param])
  return (
    <Fragment>
        {validUrl ?  (
            <div className='successContainer'>
                <img className='sucsessImg' src={PF + 'success.jpg'} alt=''/>
                <h1 className='sucsessTitle'>Email Verified Successfully</h1>
                <Link to="/login">
                    <button className='verifiedLogin'>Login</button>
                </Link>
            </div>
        ):(
            <div className='errorContainer'>
            <h2 >Please Wait...</h2>
            <h1 style={{marginTop:'20px', fontSize:'20px', color:'gray'}}>Contact Us:</h1> 
            <span style={{ fontSize:'18px', fontWeight:'400', color:'gray'}}>theinsightsdev@gmail.com</span>
            </div>
        )}
    </Fragment>
  )
}

export default EmailVerify