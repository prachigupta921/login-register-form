
import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addEvent } from "../Action/index";

const Home=()=>{
  const [modal ,setModal] =useState(false);
  const [inputData, setInputData]= useState("");
  const [option, setoption]= useState("");
  const [eventDes,seteventDes]=useState("")
  const [subEvent,setsubEvent]=useState("")
  const dispatch=useDispatch();
  const list = useSelector((state)=>state.EventReducer.list)

    const toggleModal=()=>{
      setModal(!modal);
  }
    return(
        <div>
        <button onClick={toggleModal}>AddTask</button>

      {modal && (<div>
        <div>
          <input type="text" placeholder="  Name" value={inputData}
          onChange={(event)=>setInputData(event.target.value)}
          />
          <input type="text" placeholder=" Email" value={eventDes}
          onChange={(event)=>seteventDes(event.target.value)}
          />
         <select value={option} onChange={(event)=>setoption(event.target.value)}>
          <option>Male</option>
          <option>Female</option>
          <option>None</option>
         </select>
          <input type="number" placeholder="Age" value={subEvent}
          onChange={(event)=>setsubEvent(event.target.value)}
          />

<button onClick={()=>dispatch(addEvent(inputData,eventDes,subEvent,option),setInputData(''),setsubEvent(''),
seteventDes(''),setoption(''))} >submit</button>
          {
            list.map((e)=>{
             return(
              <div>
              <h3>List:</h3>
              <table className="table">
                <tr>
                  <td>{e.data}</td>
                  <td>{e.desp}</td>
                  <td>{e.age}</td>
                  <td>{e.opt}</td>
                </tr>
              </table>
                {/* <h3>{e.data}</h3>
                <h3>{e.desp}</h3>
                <h3>{e.age}</h3>
                <h3>{e.opt}</h3> */}
              </div>
             )
            })
          }
          
          {/* <button onClick={()=>dispatch(addEvent(inputData),setInputData(''),setoption(''),
               setDate(),seteventDes(''),seteventOrga(''),setsubEvent(''))}>Submit</button> */}
        </div>
      </div>)}
    </div>
    )
}
export default Home