import React, { useEffect } from 'react'

function GamesByGenresId({gameList,selctedGenresName}) {
    useEffect(()=>{
        console.log("GameList",gameList);
        
    },[])
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-5'>{selctedGenresName} Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {gameList.map((item)=>{
            <div className='bg-[#76a8f75e] p-4 rounded-lg h-full pb-10 hover:scale-110 transition-all duration-300 ease-in-out'>
                <img src={item.background_image} alt="" className='w-full h-[80%] rounded-xl object-cover'/>
                <h2 className='text-[20px] text-white'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px]
                 bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
                <h2 className='text-gray-500 dark:text-gray-300'>
                    ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
                </h2>
            </div>
        })}
    </div>
    </div>
  )
}

export default GamesByGenresId
