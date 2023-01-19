import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IArticle, IStore} from "../../redux/types";
import {ThemeContext} from '../../contexts/contexts';
import {Breadcrumbs, Link} from "@mui/material";
import {Button} from "../Button/Button";
import './NewsItem.scss';
import {addFavorite, removeFavorite} from "../../redux/actionCreators/articleActionCreators";
import {IconUp} from "../Icon/IconUp";
import {IconDown} from "../Icon/IconDown";
import {IconMark} from "../Icon/IconMark";
import {Navigate, useParams} from "react-router-dom";


interface ICard extends IArticle {
    variant: 'bg' | 'md' | 'sm' | 'full'
}

export const NewsItem = ({variant, publishedAt, title, summary, imageUrl, id, newsSite}: ICard) => {
    const data = useSelector((state: IStore) => state.articles.articles);
    const dispatch = useDispatch();
    const params = useParams();
    const NewsId:number  =Number(params.id);
    const news = data.find(news=>news.id == NewsId);
<<<<<<< HEAD

=======
    console.log('NewsId',news)
>>>>>>> fd9bcac7c7b413cb5fdc801b8d03d37c12deb035
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    // if (variant === 'full') {
    //     console.log('full idSelect',data[NewsId].title)
    //     publishedAt=data[NewsId].publishedAt
    //     title=data[NewsId].title
    //     summary=data[NewsId].summary
    //     imageUrl=data[NewsId].imageUrl
    //     newsSite=data[NewsId].newsSite
    // }

    const {theme} = useContext(ThemeContext);

    if(news!==undefined){
        variant='full'
        publishedAt=news.publishedAt
        title=news.title
        summary = news.summary
        imageUrl = news.imageUrl
        newsSite=news.newsSite
    }
<<<<<<< HEAD
    const publishedAtDate=publishedAt?publishedAt.slice(0, 10):''
        return ( <>
            {variant === 'full' ? <Breadcrumbs>
                <Link underline="hover" color="inherit" href="/">Home</Link>
            </Breadcrumbs> :<></>}
            <div className={`card--${variant} card--${theme}`}>

=======

        return ( <div className={`card--${variant} card--${theme}`}>
                    {variant === 'full' ? <Breadcrumbs>
                     <Link underline="hover" color="inherit" href="/">Home</Link>
                         </Breadcrumbs> :<></>}
>>>>>>> fd9bcac7c7b413cb5fdc801b8d03d37c12deb035

                    {/*{(searchValue!==''&&news===undefined) ? <Navigate   to={'/'}/>:<></>   }*/}
                  <div className='card__main'  >
                         <div className='card__image'>
                            <img src={imageUrl} alt={title}/>
                         </div>
                         <div className='card__info'>
<<<<<<< HEAD

                             <div className='card__date'>
                                 {publishedAtDate}
                            </div>

                             <div className='card__title'>
                                 <h3>{title}</h3>
                             </div>
                             <div className='card__description'>
                                 {summary}
                             </div>
                        </div>
                     </div>

                    <div className='card__footer'>
                      <div className='card__newsSite'>
                             <span>Source news: </span>
                             {newsSite}
                         </div>
                     </div>
                </div>

</>)
=======

                             <div className='card__date'>
                                 {publishedAt}
                            </div>

                             <div className='card__title'>
                                 <h3>{title}</h3>
                             </div>
                             <div className='card__description'>
                                 {summary}
                             </div>
                        </div>
                     </div>

                    <div className='card__footer'>
                      <div className='card__newsSite'>
                             <span>Source news: </span>
                             {newsSite}
                         </div>
                     </div>
                </div>)


>>>>>>> fd9bcac7c7b413cb5fdc801b8d03d37c12deb035
    // return (
    //
    // )
}
