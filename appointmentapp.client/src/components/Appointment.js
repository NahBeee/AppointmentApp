import { activeId, entry, openModal } from "./Lib";

export default function Appointments (props){
    const handlingCancel = (id) =>{
        activeId.id =id;
        props.stateListener(Math.random() * 788 * Math.random())
        openModal("delete-modal");

    }
    const handlingEdit = (row)=>{
        Object.assign(entry, row);
        props.stateListener(Math.random() * 488 * Math.random())
        openModal("edit-modal");
    }
    const levelOfImportance = ["Very Low", "Low", "Normal", "Medium", "High", "Very High"];
    return(
        <div className={`row py-5 underline ${props.item.deleted ? ' bg-red' : props.item.done ? ' bc-green': ''}`} key={props.item.id}>
            <div className="column id">{props.item.id}</div>
            <div className="column title">{props.item.title}</div>
            <div className="column description">{props.item.description}</div>
            <div className={`column importance ${props.item.levelOfImportance === 0 ? ' bc-green':
            props.item.LevelOfImportance === 4 ? ' bc-gold': props.item.levelOfImportance === 5 ? ' bc-red' : ''}`}>
                {levelOfImportance[props.item.levelOfImportance]}</div>
            <div className="column date">{props.item.date.split("T")[0]}</div>
            <div className="column time">{props.item.time}</div>
            <div className="column addr">{props.item.address}</div>
            <div className="column edit">
                <div className="btn edit" onClick={()=> handlingEdit(props.item)}>Edit</div>
            </div>
            <div className={`column delete ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div className={`btn delete ${props.item.deleted ? ' not-event' : ''}`} onClick={()=> handlingCancel(props.item.id)}>Cancel</div>
            </div>
        </div>
    )
}