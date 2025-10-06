import React from 'react'

const SelectedCards = ({ player,removePlayers }) => {
    const handleRemove =(  )=>{
        removePlayers(player)
    }
    return (
        <div className='flex justify-between mt-10 items-center border-1 border-gray-300 p-5 rounded-2xl'>
            <div className='flex items-center '>
                <img className='rounded-xl w-[50px] h-[50px]' src="https://i.ibb.co.com/s7w4xqG/241009-sean-diddy-combs-al-1415-3f180d.webp" alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>{player.player_name}</h1>
                    <p>{player.batting_style}</p>
                </div>
            </div>
            <div onClick={()=>handleRemove()}>
                <img className='' src="https://i.ibb.co.com/5fzJb3f/Vector.png" alt="" />
            </div>
        </div>
    )
}

export default SelectedCards