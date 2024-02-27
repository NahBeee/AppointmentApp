export default function New (props){
    return(
        <div className="modal-container">
            <div className="modal-title">New Appointment</div>

            <div className="mt-15">
                <label htmlFor="Title_n">Title</label> <br />
                <input type="text" id="Title_n" className="mt-5" maxLength={150} name="title" />
                <span className="ms-10">0/150</span>
            </div>

            <div className="mt-15">
                <label htmlFor="Description_n">Description</label> <br />
                <textarea id="Description_n" maxLength={300} className="mt-5" name="description" cols={102} rows={10}></textarea> <br />
                <span className="float-right me-10">0/300</span>
            </div>

            <div className="row mt-15">
                <div>
                    <label htmlFor="Address_n">Address</label> <br />
                    <input type="text" id="Address_n" name="address" maxLength={100} />
                </div>
                <div className="ms-10 mt-15">
                    <label htmlFor="LevelOfImportance_n">Importance</label>
                    <select name="levelOfImportance" id="LevelOfImportance_n" defaultValue={2}>
                        <option value={5}>Very High</option>
                        <option value={4}>High</option>
                        <option value={1}>Very Low</option>
                        <option value={0}>Low</option>
                        <option value={3}>Medium</option>
                        <option value={2}>Normal</option>
                    </select>
                </div>
            </div>

            <div className="row mt-15">
                <div>
                    <label className="Date_n">Date</label>
                    <input type="date" id="Date_n" name="date" />
                </div>
                <div className="ms-10">
                    <label className="Time_n">Time</label>
                    <input type="time" id="Time_n" name="time" />
                </div>
            </div>
            <div className=" row justify-btw modal-action-container mt-15">
                <div className="btn">Cancel</div>
                <div className="btn">Add</div>
            </div>
        </div>
    )
}