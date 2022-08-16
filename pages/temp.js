
// import Invoice from "../components/transaksi/Invoice";
import { useState } from "react";
import SuccesModal from "../components/modal/SuccesModal";
import ConfirmationModal from "../components/modal/ConfirmationModal";
import TextOnlyConfirmationModal from "../components/modal/TextOnlyConfirmationModal";
import FileUploadModal from "../components/modal/FileUploadModal";
import InformationModal from "../components/modal/InformationModal";

const temp = () => {
    const [active, setActive] = useState(false)

    return(
        <div>
            <button onClick={() => setActive(!active)}>
                openModal
            </button>
            <InformationModal 
                active={active} 
                setActive={setActive} 
                message={"Format file: pdf / jpg / png "}
                title="Scan/Foto SPPT PBB"
                />    
        </div>
    )
}

export default temp;