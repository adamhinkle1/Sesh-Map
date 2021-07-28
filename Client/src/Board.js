import React from 'react'
import './Board.css'
import SideBar from './BoardComponents/SideBar'
import Feed from './BoardComponents/Feed'
function Board() {
    return (

        <div className = "board_body">
            <SideBar />
            <Feed />
        </div>
    )
}

export default Board
