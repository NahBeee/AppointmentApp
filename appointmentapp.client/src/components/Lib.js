export const testData = [
    { ID: 1, Title: "Title one", Description: "Description one", LevelOfImportance: 3, Date: "14-04-2023", Time: "17:32", Address: "Be 8500" },
   { ID: 2, Title: "Title two", Description: "Description two", LevelOfImportance: 4, Date: "13-04-2023", Time: "13:32", Address: "Be 9000" },
   { ID: 3, Title: "Title three", Description: "Description three", LevelOfImportance: 5, Date: "12-04-2023", Time: "10:32", Address: "Be 2000" },
   { ID: 4, Title: "Title four", Description: "Description four", LevelOfImportance: 0, Date: "10-04-2023", Time: "19:09", Address: "Be 1000" },
]

const url="api/appointment"

export const entry = {
    title: "Test title",
    description: "Test description",
    address: "Test address",
    date: new Date(),
    time: "12:30",
    done: false,
    deleted: false,
    levelOfImportance: 2,
}

export const filter = {
    LevelOfImportance: null,
    All: false,
    Deleted: false,
    Done: false,
    StartDate: null,
    EndDate: null,
    SpecifiedDate: null,
    SpecifiedTime: null
};

export async function getDefault(){
    const res = await fetch(url)

    if(!res.ok && !res.status !== 200){
        console.log("It is getting stucked at default data: ", res)
        notifyUser("Something got wrong, please refresh the page!!")
        return []
    }
    
    const result= await res.json()
    return result
}

export function notifyUser(msg){
    const notificationEl= document.querySelector(".notifications");
    notificationEl.innerHTML = msg ? msg : ""
    if(msg){
        setTimeout(()=> {
            notificationEl.innerHTML =""
        },12000);
    }
}

export async function postAppointment(newApp){
    const res = await fetch(url, {
        method:"POST",
        body: JSON.stringify(newApp),
        headers:{
            "content-type":"application/json"
        }
    })

    if(!res.ok){
        console.log("It is getting stucked at default data: ", res)
        notifyUser("Something got wrong, please refresh the page!!")
        return {msg: res}
    }
    
    return await res.json()
}

export function openModal(modal){
    const modal_ = document.querySelector("."+modal)
    if(modal_){
        modal_.classList.remove("hidden")
    }
}

export function closeModal(modal){
    const modal_ = document.querySelector("."+modal)
    if(modal_){
        modal_.classList.add("hidden")
    }
}

export function formatDateToStr(d){
    const nd= d? new Date(d) : new Date();
    const month_ = nd.getMonth() +1;
    const monthStr= month_ > 9 ? month_ : 0 + ""+ month_;
    const day_ = nd.getDate() >9 ? nd.getDate() : 0 + "" + nd.getDate();
    return nd.getFullYear() + "-" + monthStr + "-" + day_; 
}

export function formatTimeToStr(d){
    const nd = d? new Date(d) : new Date();
    const hr_ = nd.getHours() < 9 ? 0 + "" + nd.getHours() : nd.getHours();
    const min_ = nd.getMinutes() < 9 ? 0 + "" +nd.getMinutes(): nd.getMinutes();
    return hr_ + ":" + min_;
}