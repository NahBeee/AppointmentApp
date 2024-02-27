import { useEffect, useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import New from "./New";
import Appointment from "./Appoitment";
import { testData } from "./Lib";

export default function Home(props){
    const [dataList, setDataList] = useState([]);
    useEffect(()=>{
        setDataList(testData)
    },[])
    return(
        <main>
            <div>
                <h1> Manage Appointments</h1>
                <p>This website will help you to manage your appointments.</p>
                <div className="add-btn row items-center content-center">
                    <div className="btn add">+</div>
                </div>

                <div className="notifications spacer-20"></div>

                <section className="row justify-btw items-center filter">
                    <div className="modal-title">Filter</div>
                    <div className="row items-center filter-items">
                        <button className="me-15">Clear Filters</button>
                        <div>
                            <label htmlFor="All_f">All</label> <br />
                            <input type="checkbox" id="All_f" name="All" />
                        </div>
                        <div>
                            <label htmlFor="Done_f">Done</label> <br />
                            <input type="checkbox" id="Done_f" name="Done" />
                        </div>
                        <div>
                            <label htmlFor="Deleted_f">Cancelled</label> <br />
                            <input type="checkbox" id="Deleted_f" name="Deleted" />
                        </div>
                        <div>
                            <label htmlFor="period">Period</label> <br />
                            <select name="period" id="period" defaultValue={"4"}>
                                <option value="5" disabled>Period</option>
                                <option value="3" >Last Week</option>
                                <option value="2" >This Week</option>
                                <option value="4" >Default</option>
                                <option value="1" >Today</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="SpecifiedDate">Specified Date</label> <br />
                            <input type="date" id="SpecifiedDate" name="SpecifiedDate" />
                        </div>
                        <div>
                            <label htmlFor="SpecifiedTime">Specified Time</label> <br />
                            <input type="date" id="SpecifiedTime" name="SpecifiedTime" />
                        </div>

                        <div>
                            <label htmlFor="LevelOfImportance_f">Level Of Importance</label> <br />
                            <select name="LevelOfImportance" id="LevelOfImportance_f" defaultValue={7}>
                                <option value={7} disabled>Level Of Importance</option>
                                <option value={9}>Reset</option>
                                <option value={8}>Very High</option>
                                <option value={6}>Medium</option>
                                <option value={5}>High</option>
                                <option value={4}>Normal</option>
                                <option value={0}>Very Low</option>
                                <option value={1}>Low</option>
                            </select>
                        </div>
                        </div>
                </section>
                <div className="row underline hdr">
                    <div className="column id">#</div>
                    <div className="column title">Title</div>
                    <div className="column description">Description</div>
                    <div className="column importance">Importance</div>
                    <div className="column date">Date</div>
                    <div className="column time">Time</div>
                    <div className="column addr">Address</div>
                    <div className="column edit">Edit</div>
                    <div className="column delete">Cancel</div>
                </div>
                {
                    dataList.length=== 0 ?
                        <div className="row mt-15 waiting">Loading <div className="loading">.....</div></div> :
                        dataList.map(item => <Appointment item={item} key={item.id} />)

                }
                <section>
                    <section className="modal delete-modal hidden">
                        <Delete />
                    </section>
                </section>
                <section>
                    <section className="modal edit-modal hidden">
                        <Edit />
                    </section>
                </section>
                <section>
                    <section className="modal new-modal hidden">
                        <New />
                    </section>
                </section>
            </div>
        </main>
    )
}