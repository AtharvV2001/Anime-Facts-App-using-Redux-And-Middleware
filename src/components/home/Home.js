import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeListAction } from '../../Redux/actions/animesListActions'
import AnimeCard from './AnimeCard'
import './styles.css'

const Home = () => {
    const animeList = useSelector(state=>state.animeList.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnimeListAction())
    }, [dispatch])

    return (
        <div>
            <h1>Select a Anime to Know Hidden Facts About It !!!!</h1>
            <div className='cardsBlock'>
                {animeList.map(({ anime_id, anime_name, anime_img }) =>
                    <AnimeCard key={anime_id} name={anime_name} imgUrl={anime_img} />
                )}
            </div>
        </div>
    )
}

export default Home