import React from 'react'
import Account from './Account'
import BucketCard from './BucketCard'
import BucketList from './BucketList'
import GameCard from './GameCard'
import GameList from './GameList'
import PickCard from './PickCard'
import PickList from './PickList'


const Main = ({ user }) => {
    console.log(user)
    return (
        <div className='border-2 border-black bg-gray-200 mx-auto p-4 m-0 border-t-0 border-b-0 min-h-full'>
            <h1>Main</h1>
            {/* <Account/>
            <BucketCard/>
            <BucketList/>
            <GameCard/>
            <GameList/>
            <PickCard/>
            <PickList/> */}
        </div>
    )
}

export default Main 

