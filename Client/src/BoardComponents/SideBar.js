import React from 'react'
import "./SideBar.css"
import Thread from './Thread'
import * as BsIcons from 'react-icons/bs';
function SideBar() {
    return (
        <div className='sideBar'>
            <div className='filter'>
                <BsIcons.BsFilterLeft className="icon"/>
                <h3>Filter</h3>
            </div>
            <div className="sideBar_thread">
                <Thread text="General" collection="general"/>
                <Thread text='Surfing' collection="surfing"/>
                <Thread text="SkateBoarding" collection="skateboarding"/>
                <Thread text="Rock Climbing" collection="rock climbing"/>
                <Thread text ='Hiking' collection="hiking"/>

            </div>

        </div>
    )
}

export default SideBar
