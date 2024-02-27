export default function Edit(props){
    return(
        <div className="modal-container">
            <div className="modal-title">Edit Appointment</div>

            <div className="mt-15">
                <label htmlFor="Title_e">Title</label> <br />
                <input type="text" id="Title_e" className="mt-5" maxLength={150} name="title" />
                <span className="ms-10">0/150</span>
            </div>

            <div className="mt-15">
                <label htmlFor="Description_e">Description</label> <br />
                <textarea id="Description_e" maxLength={300} className="mt-5" name="description" cols={102} rows={10}></textarea> <br />
                <span className="float-right me-10">0/300</span>
            </div>

            <div className="row mt-15">
                <div>
                    <label htmlFor="Address_e">Address</label> <br />
                    <input type="text" id="Address_n" name="address" maxLength={100} />
                </div>
                <div className="ms-10 mt-15">
                    <label htmlFor="LevelOfImportance_e">Importance</label>
                    <select name="levelOfImportance" id="LevelOfImportance_e" defaultValue={2}>
                        <option value={5}>Very High</option>
                        <option value={4}>High</option>
                        <option value={1}>Very Low</option>
                        <option value={0}>Low</option>
                        <option value={3}>Medium</option>
                        <option value={2}>Normal</option>
                    </select>
                </div>
            </div>

            <div className="row mt-15 items-center">
                <div>
                    <label className="Done_e">Date</label>
                    <input type="date" id="Date_e" name="date" />
                </div>
                <div className="ms-10">
                    <label className="Time_e">Time</label>
                    <input type="time" id="Time_e" name="time" />
                </div>
                <div className="ms-10 row items-center">
                    <label className="Done_e">Done</label>
                    <input type="checkbox" id="Done_e" name="done" />
                </div>
                <div className="ms-10 row items-center">
                    <label className="Deleted_e">Cancelled</label>
                    <input type="checkbox" id="Deleted_e" name="deleted" />
                </div>
            </div>
            <div className=" row justify-btw modal-action-container mt-15">
                <div className="btn">Cancel</div>
                <div className="btn">Update</div>
            </div>
        </div>
    )
}