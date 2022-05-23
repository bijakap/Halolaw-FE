import { useState } from "react";
import ForgotPassword03 from "../../components/admin/lupaPassword/ForgotPassword03";
import ForgotPassword04 from "../../components/admin/lupaPassword/ForgotPassword04";

function ResetPassword(){
    const [PasswordSubmited, setPasswordSubmited] = useState(false)

    return (
        <div>
            { PasswordSubmited  === false ? 
            <ForgotPassword03 setPasswordSubmited={setPasswordSubmited}/> : <ForgotPassword04/> 
            }
        </div>
    )
}

export default ResetPassword;