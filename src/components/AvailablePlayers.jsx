import React, { use } from 'react'

import Cards from './Cards';

const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasedPlayers }) => {

    const playersData = use(playersPromise);
    
    return (

        <div className="navbar w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                playersData.map((player, index) => (
                    <Cards key={index} player={player} setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></Cards>
                ))
            }

        </div>
    )
}

export default AvailablePlayers