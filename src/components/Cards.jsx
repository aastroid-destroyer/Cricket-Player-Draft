import React, { useState } from 'react'
import groupImg from "../assets/Group.png"
import flagImg from "../assets/flag.png"
import { toast } from 'react-toastify'


const Cards = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const handleClick = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""));

        if (playerPrice > availableBalance) {
            toast("Not Enough Coin")
            return
        }
        setAvailableBalance(
            availableBalance - playerPrice
        )
        setIsSelected(true)

        setPurchasedPlayers([...purchasedPlayers, playerData])
    }
    const [isSelected, setIsSelected] = useState(false)
    return (
        <div className="card bg-base-100 shadow-sm p-4">
            <figure>
                <img src="https://i.ibb.co.com/s7w4xqG/241009-sean-diddy-combs-al-1415-3f180d.webp" alt="Shoes" />
            </figure>

            <div className="card-body">
                <div className='flex items-center gap-2'>
                    <img src={groupImg} alt="icon" className='w-6 h-6' />
                    <h2 className="card-title">{player.player_name}</h2>
                </div>

                <div className='flex justify-between items-center border-b border-gray-300 pb-2'>
                    <div className='flex items-center'>
                        <img className='w-6 h-4' src={flagImg} alt="flag" />
                        <p className='ml-2 text-gray-400'>{player.player_country}</p>
                    </div>

                    <button className='btn btn-sm'>{player.playing_role}</button>
                </div>

                <div className='flex justify-between mt-2'>
                    <h1 className='font-bold'>Rating</h1>
                    <span className='font-bold'>{player.rating}</span>
                </div>

                <div className='flex justify-between mt-2'>
                    <h1 className='font-bold'>{player.batting_style}</h1>
                    <h1>{player.bowling_style}</h1>
                </div>

                <div className="card-actions flex justify-between items-center mt-4">
                    <h1 className='font-bold'>Price: ${player.price}</h1>
                    <button disabled={isSelected} onClick={() => { handleClick(player) }} className="btn">{isSelected == true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    )
}

export default Cards