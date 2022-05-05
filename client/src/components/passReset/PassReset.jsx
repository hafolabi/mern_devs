import "./passReset.css";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const param = useParams();
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const res = await axiosInstance.get(
          `/auth/${param.id}/passreset/${param.token}`
        );
        console.log(res.data.message);
        setValidUrl(true);
      } catch (err) {
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);


  const handleSubmit = async (e)=>{
      e.preventDefault();
    try{   
     const res = await axiosInstance.put(`/users/${param.id}`,{ 
       userId: param.id,
       password: newPass })
     res.data && window.location.replace('/login')

    }catch(err){}
  }

  return (
    <Fragment>
      {validUrl ? (
        <div className='sucsessContainer'>
          <img className='sucsessImg' src={PF + "success.jpg"} alt="" />
          <h1 className='sucsessTitle'>Email Verified Successfully</h1>

          <form className="resetloginForm" onSubmit={handleSubmit}>

            <input
              type="password"
              className="resetInput"
              required
              autoFocus={true}
              minLength="5"
              placeholder="Enter your new password..."
              onChange={(e) => setNewPass(e.target.value)}
            />

            <button className="resetButton" type="submit">
              Reset
            </button>
          </form>
        </div>
      ) : (
        <div className='errorContainer'>
        <h2>Please Wait...</h2>
        <h1 style={{marginTop:'20px', fontSize:'20px', color:'gray'}}>Contact Us:</h1> 
        <span style={{ fontSize:'18px', fontWeight:'400', color:'gray'}}>theinsightsdev@gmail.com</span>
        </div>
      )}
    </Fragment>
  );
};

export default EmailVerify;
