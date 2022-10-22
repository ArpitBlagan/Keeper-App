import React from "react"

function Inp(props){
    return <div onClick={()=>{
        return props.check(props.id);
    }} className="note">
        {props.con}
    </div>;
}
export default Inp;