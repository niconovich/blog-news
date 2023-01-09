import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { loadArticle, setSearchValue } from '../../redux/actionCreators/articleActionCreators'
import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import { Pagination } from '../Pagination/Pagination'
import './Blog.scss'

export const Blog = () => {
    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.articles.articles);
    const dataCount = useSelector((state: IStore) => state.articles.countTotal);
    // const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    // const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    // const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    // const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    // useEffect (() => {
    //     dispatch(loadArticle({ rowsPerPage, currentPage, searchValue}));
    // }, [currentPage, rowsPerPage, searchValue])
    //
    // const handleChange = (e: any) => {
    //     dispatch(setSearchValue(e.target.value))
    // }
    // console.log(rowsPerPage, currentPage, searchValue);
    // console.dir(data);
    return (
        <>

            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>
                    {data.map( (card, i) => card === data[0] ? <Card key={card.id} variant='bg' id={card.id} publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl}/> : <Card key={card.id} variant='md' id={card.id} publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl}/>)}
                </div>
                <div className='blog__feat-content'>
                    {data.map( (card, i) => <Card key={card.id} id={card.id} variant='sm' publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl}/>)}
                </div>
            </div>
            <Pagination dataCount={dataCount}/>
        </>
    )
}
