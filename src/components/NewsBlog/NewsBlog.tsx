import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { loadArticle, setSearchValue } from '../../redux/actionCreators/articleActionCreators'
import { IStore } from '../../redux/types'
import { NewsItem } from '../NewsItem/NewsItem'
import { Pagination } from '../Pagination/Pagination'
import './NewsBlog.scss'

export const NewsBlog = () => {
    const { theme } = useContext(ThemeContext);
    // const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.articles.articles);
    // const countTotal = useSelector((state: IStore) => state.articles.countTotal);
    // const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    // const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    //  const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    //  const searchValue = useSelector((state: IStore) => state.articles.searchValue);
     // useEffect (() => {
     //     dispatch(loadArticle({ rowsPerPage, currentPage, searchValue}));
     // }, [currentPage, rowsPerPage,searchValue])

    return (
        <>
            <Pagination/>
            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>
                    {data.map( (card, i) => <NewsItem key={card.id} id={card.id} variant='bg' publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl} newsSite={card.newsSite}/>)}
                </div>

            </div>
        </>
    )
}
