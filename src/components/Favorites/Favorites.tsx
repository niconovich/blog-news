import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { loadArticle } from '../../redux/actionCreators/articleActionCreators'
import { IArticle, IStore } from '../../redux/types';
import { NewsItem } from '../NewsItem/NewsItem';
import { Pagination } from '../Pagination/Pagination';

export const Favorites = () => {
    const [data, setData] = useState([] as IArticle[]);
    const { theme } = useContext(ThemeContext);
    const articles = useSelector((state: IStore) => state.articles.articles);
    const favorites = useSelector((state: IStore) => state.articles.favorites)

    useEffect (() => {
        const resultData = [] as IArticle[];
        articles.forEach((article) => {
            if (favorites.includes(article.id)) {
                resultData.push(article);
            }
        });
        setData(resultData);
    }, [favorites])


    return (
        <>
            <div className={`blog__body blog__body--${theme}`}>
                <div className='blog__main-content'>
                    {data.map( (card, i) => <NewsItem key={card.id} id={card.id} variant='sm' publishedAt={card.publishedAt} title={card.title} summary={card.summary} imageUrl={card.imageUrl}/>)}

                </div>
            </div>
            {/* <Pagination /> */}
        </>
    )
}
