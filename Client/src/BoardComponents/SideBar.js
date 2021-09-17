import React, {useState} from 'react'
import "./SideBar.css"
import Thread from './Thread'
import * as BsIcons from 'react-icons/bs';
import useWindowDimensions from './useWindowDimensions'
function SideBar() {
    const [collapse, setCollapse] = useState(false)
    
    const {height, width} = useWindowDimensions()
    const filter = () => {
        if (width <= 650) {
            setCollapse(!collapse)
        }
        else {
            setCollapse(false)
        }
    }
    return (
        <div className={collapse ? 'sideBar' : 'sideBar_collapse'} onClick={filter}>
            <div className={collapse ? 'filter' : "filter_collapse"}>
                <BsIcons.BsFilterLeft className={collapse? "icon" : "icon_collapse"} onClick={filter}/>
                <h3>Filter</h3>
            </div>
            <div className={collapse ? "sideBar_thread" : "sideBar_thread_collapse"} >
                <Thread className="sideBar_tread_container" text="General" collection="general"/>
                <Thread className="sideBar_tread_container" text='Surfing' collection="surfing"/>
                <Thread className="sideBar_tread_container" text="SkateBoarding" collection="skateboarding"/>
                <Thread className="sideBar_tread_container" text="Rock Climbing" collection="rock climbing"/>
                <Thread className="sideBar_tread_container" text ='Hiking' collection="hiking"/>
            </div>

        </div>
    )
}

export default SideBar
