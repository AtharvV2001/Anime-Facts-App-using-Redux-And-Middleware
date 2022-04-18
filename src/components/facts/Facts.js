import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFactsListAction } from '../../Redux/actions/factsListActions'
import FactsCard from './FactsCard'
import './styles.css'

const Facts = () => {
    const { animeName } = useParams()
    const factsObj = useSelector(state => state.factsList.factObj)
    const factList = useSelector(state => state.factsList.factl)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getFactsListAction(animeName))
    }, [animeName, dispatch])

    console.log(typeof (animeName));

    return (
        factsObj && <div>
            <h1>Facts About {animeName}</h1>
            <img src={factsObj.img} alt={factsObj.img} width={240} height={360} />
            <div className='factblc'>
                {factList.map(({ fact_id, fact }) =>
                    <FactsCard key={fact_id} fact={fact} />
                )}
            </div>
        </div>
    )
}

export default Facts