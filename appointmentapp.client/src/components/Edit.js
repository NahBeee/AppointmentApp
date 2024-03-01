import { useEffect, useState } from "react"
import { closeModal, entry, updateAppointment} from "./Lib";

export default function Edit(props){

    const [done_, setDone_]= useState(false);
    const [deleted_, setDeleted]= useState(false);
    const [importance, setImportance]= useState(0);
    const [data,setData] =useState({});

    const editAppointment = (e)=> {
        const name_= e.target.name;
        let v_ = e.target.value;

        if(name_ === "done"){
            v_= e.target.checked
            setDone_(v_)
        }
        if(name_ === "Cancelled"){
            v_= e.target.checked
            setDeleted(v_)
        }

        if (name_ === "date"){
            v_= new Date(v_);
        }
        if (name_ === "levelOfImportance"){
            v_= Number(v_);
            setImportance(v_)
        }
        entry[name_] = v_;
    }

    const updateApp =() =>{
        console.log("Entry before update: ", entry)
        updateAppointment(entry).then(r => {
            console.log("Update successfully: ", r)
            props.refreshApp(Math.random() *123 * Math.random())
        })
        .catch(e=> console.log("Could not update appointment: ", e))
        closeModal("edit-modal")
    } 

    const defaultDate= typeof(entry.date) === "string" ? entry.date.split("T")[0] : ""
    useEffect(()=>{
        console.log("edit component")
        setDone_(entry.done)
        setDeleted(entry.deleted)
        setImportance(entry.levelOfImportance)
        setData(entry)
    }, [props.stateListener])
    return(
        <div className="modal-container">
            <div className="modal-title">Edit Appointment</div>

            <div className="mt-15">
                <label htmlFor="Title_e">Title</label> <br />
                <input type="text" id="Title_e" className="mt-5" maxLength={150} name="title" defaultValue={data.title} onChange={editAppointment}/>
                <span className="ms-10">0/150</span>
            </div>

            <div className="mt-15">
                <label htmlFor="Description_e">Description</label> <br />
                <textarea id="Description_e" maxLength={300} className="mt-5" name="description" cols={102} rows={10} defaultValue={data.description} onChange={editAppointment}></textarea> <br />
                <span className="float-right me-10">0/300</span>
            </div>

            <div className="row mt-15">
                <div>
                    <label htmlFor="Address_e">Address</label> <br />
                    <input type="text" id="Address_n" name="address" maxLength={100} defaultValue={data.address} onChange={editAppointment}/>
                </div>
                <div className="ms-10 mt-15">
                    <label htmlFor="LevelOfImportance_e">Importance</label>
                    <select name="levelOfImportance" id="LevelOfImportance_e" value={importance} onChange={editAppointment}>
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
                    <input type="date" id="Date_e" name="date" onChange={editAppointment} defaultValue={defaultDate}/>
                </div>
                <div className="ms-10">
                    <label className="Time_e">Time</label>
                    <input type="time" id="Time_e" name="time" onChange={editAppointment} defaultValue={data.time}/>
                </div>
                <div className="ms-10 row items-center">
                    <label className="Done_e">Done</label>
                    <input type="checkbox" id="Done_e" name="done" checked ={done_} onChange={editAppointment}/>
                </div>
                <div className="ms-10 row items-center">
                    <label className="Deleted_e">Cancelled</label>
                    <input type="checkbox" id="Deleted_e" name="Cancelled" checked ={deleted_} onChange={editAppointment}/>
                </div>
            </div>
            <div className=" row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={()=> closeModal("edit-modal")}>Cancel</div>
                <div className="btn"onClick={updateApp}>Update</div>
            </div>
        </div>
    )
}