import React from 'react'
import Header from '../Components/Header'
import Mid from '../Components/fundmanagerb-components/Mid'

import Bottom from '../Components/fundmanagerb-components/Bottom'

import '../CSS/fundmanagerb.css'
function fundmanager() {
    return (
        <div>
            <div id="Header"><Header signup={false} signin={false} home={true} contact={false} about={false} signout={false} search={false}/></div>
            <div id="Mid"><Mid/></div>
            
            <div id="Bottom"><Bottom/></div>
            
        </div>
    )
}
export default fundmanager