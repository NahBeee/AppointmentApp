export default function Appointments (props){
    const levelOfImportance = ["Very Low", "Low", "Normal", "Medium", "High", "Very High"];
    return(
        <div className={`row underline ${props.item.deleted ? ' bg-red' : props.item.done ? ' bc-green': ''}`}>
            <div className="column id">{props.item.ID}</div>
            <div className="column title">{props.item.Title}</div>
            <div className="column description">{props.item.Description}</div>
            <div className={`column importance ${props.item.LevelOfImportance === 0 ? ' bc-green':
            props.item.LevelOfImportance === 4 ? ' bc-gold': props.item.LevelOfImportance === 5 ? ' bc-red' : ''}`}>
                {levelOfImportance[props.item.LevelOfImportance]}</div>
            <div className="column date">{props.item.Date}</div>
            <div className="column time">{props.item.Time}</div>
            <div className="column addr">{props.item.Address}</div>
            <div className="column edit">
                <div className="btn edit">Edit</div>
            </div>
            <div className={`column delete ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div className={`btn delete ${props.item.deleted ? ' not-event' : ''}`}>Cancel</div>
            </div>
        </div>
    )
}