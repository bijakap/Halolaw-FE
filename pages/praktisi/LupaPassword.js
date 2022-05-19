import { useState } from "react";
import ForgotPassword01 from "../../components/praktisi/lupaPassword/ForgotPassword01";
import ForgotPassword02 from "../../components/praktisi/lupaPassword/ForgotPassword02";

function LupaPassword(){
    const [email, setEmail] = useState('')
    const [emailSubmited, setEmailSubmited] = useState('false')
    return(
        <div>
            {emailSubmited !== true ? 
            <ForgotPassword01 email={email} setEmail={setEmail} setEmailSubmited={setEmailSubmited}/>
            :
            <ForgotPassword02 email={email}/>
            }
        </div>
    )
}

export default LupaPassword;