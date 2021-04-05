import React from 'react'
import './Sidebarrow.css'

function Sidebarrow({selected, Icon,title}) {
    return (
        <div className={`Sidebar_row ${selected && "Selected"}`}>
            <Icon className="sidebar_icon"/>
            <h2 className="sidebar_title">{title}</h2>
        </div>
    )
}

export default Sidebarrow
