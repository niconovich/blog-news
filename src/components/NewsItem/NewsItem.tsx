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
import {Navigate, NavLink, useParams} from "react-router-dom";


interface ICard extends IArticle {
    variant: 'bg' | 'md' | 'sm' | 'full'
}

export const NewsItem = ({variant, publishedAt, title, summary, imageUrl, id, newsSite}: ICard) => {
    const data = useSelector((state: IStore) => state.articles.articles);
    const dispatch = useDispatch();
    const params = useParams();
    const NewsId:number  =Number(params.id);
    const news = data.find(news=>news.id == NewsId);


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
    const publishedAtDate=publishedAt?publishedAt.slice(0, 10):''
        return ( <>
            {variant === 'full' ? <Breadcrumbs>
                <NavLink style={{marginLeft: '2rem'}} to="/">Home</NavLink>
                {/*<Link style={{marginLeft: '2rem'}} underline="hover" color="inherit" href="\">Home</Link>*/}
            </Breadcrumbs> :<></>}
            <div className={`card--${variant} card--${theme}`}>


                    {/*{(searchValue!==''&&news===undefined) ? <Navigate   to={'/'}/>:<></>   }*/}
                  <div className='card__main'  >
                         <div className='card__image'>

                            <img src={imageUrl} alt={title}/>
                         </div>
                         <div className='card__info'>

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
    // return (
    //
    // )
}
