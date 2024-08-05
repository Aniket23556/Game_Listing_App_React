import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'

function Home() {

  const [allGameList, setAllGameList]=useState();

  useEffect(()=>{
    getAllGamesList();
  },[])

  const getAllGamesList=() =>{
      GlobalApi.getAllGames.then((resp)=>{
      console.log(resp.data.results);
      setAllGameList(resp.date.results)
    })
  }

  return (
    <div className='grid grid-cols-4 px-8 py-2'>
      <div className='h-screen hidden md:block '>
        <GenreList/>
      </div>
      <div className='col-span-4 md:col-span-3'>Game List</div>
    </div>
  )
}

export default Home
