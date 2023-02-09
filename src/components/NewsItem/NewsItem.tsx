import React, {useContext, useState, useEffect} from 'react';
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
import preloader from '../../assets/Double Ring-5.9s-204px.svg'
import {useImageLoader} from "../ImagePreload/useImageLoader";

interface ICard extends IArticle {
    variant: 'bg' | 'md' | 'sm' | 'full' | 'not'
}


export const NewsItem = ({variant, publishedAt, title, summary, imageUrl, id, newsSite}: ICard) => {
    const data = useSelector((state: IStore) => state.articles.articles);
    const dispatch = useDispatch();
    const params = useParams();
    const NewsId: number = Number(params.id);
    const news = data.find(news => news.id == NewsId);
    const urlImg = useImageLoader(preloader, imageUrl ? imageUrl : '')
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);


    const {theme} = useContext(ThemeContext);

    if (news !== undefined) {
        variant = 'full'
        publishedAt = news.publishedAt
        title = news.title
        summary = news.summary
        imageUrl = news.imageUrl
        newsSite = news.newsSite
    }
    const publishedAtDate = publishedAt ? publishedAt.slice(0, 10) : ''
    return (<>
                   {variant === 'full' ? <Breadcrumbs>
                        <NavLink style={{marginLeft: '2rem'}} to="/">Home</NavLink>
                    </Breadcrumbs> : <></>}
                    <div className={`card--${variant} card--${theme}`}>
                        <div className='card__main'>
                            <div className='card__image'>
                                {variant === 'full' ? <img src={imageUrl} alt={title}/> :
                                    <img src={urlImg} alt={title}/>}
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
             </>
    )
}
