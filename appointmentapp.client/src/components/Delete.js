import { useEffect } from "react"
import { activeId, deleteAppointment, closeModal } from "./Lib"


export default function Delete(props){
    
    const cancelApp = () => {
        deleteAppointment(activeId.id).then(r => {
            console.log("Cancel successfully: ", r)
            props.refreshApp(Math.random() *123 * Math.random())
        })
        .catch(e=> console.log("Could not cancel appointment: ", e))

        closeModal("delete-modal")
    }
    useEffect(()=>{
        console.log("edit component")
    }, [props.stateListener])
    return(
        <div className="modal-container">
            <div className="modal-title">Warning!!! Cancelling the appointments.</div>
            <p>Are you sure to cancel the appointments?</p>

            <div className=" row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={()=> closeModal("delete-modal")}>Cancel</div>
                <div className="btn"onClick={cancelApp}>Yes</div>
            </div>
        </div>
    )
}