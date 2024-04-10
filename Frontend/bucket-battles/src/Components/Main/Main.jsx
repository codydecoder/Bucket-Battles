import React from 'react'
import Account from './Account'
import BucketCard from './BucketCard'
import BucketList from './BucketList'
import GameCard from './GameCard'
import GameList from './GameList'
import PickCard from './PickCard'
import PickList from './PickList'


const Main = ({ user }) => {
    return (
        <div className='main-container'>
            <h1>Main</h1>
            <Account/>
            <BucketCard/>
            <BucketList/>
            <GameCard/>
            <GameList/>
            <PickCard/>
            <PickList/>
        </div>
    )
}

export default Main 

