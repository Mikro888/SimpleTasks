import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: any // need to fix any
    text:string
}

function Affair(props: AffairPropsType) {
    // const deleteCallback = () => {props.deleteAffairCallback()}
    // need to fix

    return (
        <div>
            {props.text}

            <button onClick={()=>props.deleteAffairCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
