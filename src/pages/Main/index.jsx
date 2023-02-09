import React, { useEffect } from 'react'

//Hooks
import { useSongs } from '../../hooks/useSongs'
import MusicCard from '../../components/MusicCard'

//Services
import { songsService } from '../../services/songs.service'

//Styles 
import './Main.scss'

const Main = () => {
  const { songs, saveSongs } = useSongs()

  useEffect(() => {
    const fetch = async () => {
      const songs = await songsService.getRecomendation()

      saveSongs(songs.tracks)
    }

    fetch()
  }, [])

  console.log(songs)

  return (
    <div className='main_page'>
      {
        songs?.length && songs.map((item, idx) => (
          <MusicCard key={idx} {...item} />
        ))
      }
    </div>
  )
}

export default Main