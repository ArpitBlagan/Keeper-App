import React,{useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inp from "./Inp";

function App(){
    const [ele,Setele]=useState("");
    const [arr,Setarr]=useState([]);
    function cha(event){
        Setele(event.target.value);
    }
    function add(){
        Setarr((prevValue)=>{
            return [
                ...prevValue,ele
            ];
        });Setele("");
    }function del(id){
        Setarr((prevValue)=>{
            return prevValue.filter((item,index)=>{
                return index!==id;
            });
        });
    }
    return <div>
        <Header/><div className="inp" >
        <div>
        <input className="inp" onChange={cha} type="text" placeholder="Notes" value={ele}/>
        <button onClick={add}>Add</button></div>
        {arr.map((x,index)=>{
            return <Inp key={index} id={index} con={x}  check={del} />;
        })}
        </div>
        <Footer/>
    </div>
}
export default App;