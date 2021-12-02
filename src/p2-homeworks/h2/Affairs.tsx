import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2';
import classes from "./Affairs.module.css";



type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: any
    deleteAffairCallback: any
    filter:any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            text={a.name}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}


            <button className={props.filter==='all'?classes.someClass:''} onClick={setAll}>All</button>
            <button className={props.filter==='high'?classes.someClass:''} onClick={setHigh}>High</button>
            <button className={props.filter==='middle'?classes.someClass:''} onClick={setMiddle}>Middle</button>
            <button className={props.filter==='low'?classes.someClass:''} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
