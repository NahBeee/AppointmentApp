import Delete from "./Delete";
import Edit from "./Edit";
import New from "./New";

export default function Home(props){
    return(
        <main>
            <div>
                <h1> Manage Appointments</h1>
                <p>This website will help you to manage your appointments.</p>
                <div className="add-btn row items-center content-center">
                    <div className="btn add">+</div>
                </div>

                <div className="notifications spacer-20">This is test text</div>
                Home Component
                <Delete />
                <Edit />
                <New />
            </div>
        </main>
    )
}