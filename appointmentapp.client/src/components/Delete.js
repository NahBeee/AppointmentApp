export default function Delete(props){
    return(
        <div className="modal-container">
            <div className="modal-title">Warning!!! Cancelling the appointments.</div>
            <p>Are you sure to cancel the appointments?</p>

            <div className=" row justify-btw modal-action-container mt-15">
                <div className="btn">Cancel</div>
                <div className="btn">Yes</div>
            </div>
        </div>
    )
}