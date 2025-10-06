import React from 'react'

import navImg from "../assets/logo.png"
import dollarImg from "../assets/Currency.png"

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="flex-1">
                <img className="w-[60px] h-[60px]" src={navImg} alt="" />
            </div>
            <div className="flex items-center">
                <span className="mr-1">{availableBalance}</span>
                <span className="mr-1">coin </span>
                <img src={dollarImg} alt="" />

            </div>
        </div>
    )
}

export default Navbar