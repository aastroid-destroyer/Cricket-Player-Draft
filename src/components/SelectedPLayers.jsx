import React from 'react'
import SelectedCards from './SelectedCards'

const SelectedPLayers = ({ purchasedPlayers,removePlayers }) => {
  console.log(purchasedPlayers)
  return (
    <div className='mx-auto w-11/12'>
      {
        purchasedPlayers.map(player => <SelectedCards removePlayers={removePlayers} player={player}></SelectedCards>)
      }
    </div>
  )
}

export default SelectedPLayers