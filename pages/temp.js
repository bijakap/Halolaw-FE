
// import Invoice from "../components/transaksi/Invoice";
import { useState } from "react";
import SuccesModal from "../components/modal/SuccesModal";
import ConfirmationModal from "../components/modal/ConfirmationModal";
import TextOnlyConfirmationModal from "../components/modal/TextOnlyConfirmationModal";
import FileUploadModal from "../components/modal/FileUploadModal";
import InformationModal from "../components/modal/InformationModal";
import TextAreaModal from "../components/modal/TextAreaModal";
import DetailConsulModal from "../components/modal/DetailConsulModal";
import TambahUserModal from "../components/modal/TambahUserModal";
import TambahLayanaModal from "../components/modal/TambahLayananModal";
import EditUserModal from "../components/modal/EditUserModal";
import TransactionModal from "../components/modal/TransactionModal";

const temp = () => {
    const [active, setActive] = useState(false)

    return(
        <div>
            <button onClick={() => setActive(!active)}>
                openModal {active ? "True" : "False"}
            </button>
            <TransactionModal 
                active={active} 
                setActive={() => setActive(!active)}
                done={true}
                // message={"Format file: pdf / jpg / png "}
                // title="Scan/Foto SPPT PBB"
                />    
        </div>
    )
}

export default temp;