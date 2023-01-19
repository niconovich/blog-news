import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { ThemeContext } from '../../contexts/contexts'
import { loadArticle, setSearchValue } from '../../redux/actionCreators/articleActionCreators'
import { IStore } from '../../redux/types'
import { NewsItem } from '../NewsItem/NewsItem'
import { Pagination } from '../Pagination/Pagination'
import './NewsBlog.scss'

export const NewsBlog = () => {
    const { theme } = useContext(ThemeContext);
     const data = useSelector((state: IStore) => state.articles.articles);
     return (
        <>
            <Pagination/>
            <div className={`blog__body blog__body--${theme}`}>
                {/*<div className='blog__main-content'>*/}
                    {data.map( (card, i) =><NavLink to={`/news/${card.id}`}> <NewsItem key={card.id} id={card.id} variant='bg' publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl} newsSite={card.newsSite}/></NavLink>)}
                {/*</div>*/}

            </div>
        </>
    )
}
