import {useContext, useState} from 'react';
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
import {IconMore} from "../Icon/IconMore";
import {NavLink} from "react-router-dom";

interface ICard extends IArticle {
    variant: 'bg' | 'md' | 'sm' | 'full'
}

export const NewsItem = ({variant, publishedAt, title, summary, imageUrl, id, newsSite}: ICard) => {
    const dispatch = useDispatch();
    const data = useSelector((state: IStore) => state.articles.articles);
    if (variant === 'full') {
        console.log(id,data[id].title)
        publishedAt=data[id].publishedAt
        title=data[id].title
        summary=data[id].summary
        imageUrl=data[id].imageUrl
        newsSite=data[id].newsSite
    }

    const favorites = useSelector((state: IStore) => state.articles.favorites)
    const [count, setCount] = useState(0)
    const handleLike = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const handleDislike = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2
    const isInclude = favorites.includes(id);
    const {theme} = useContext(ThemeContext);

    const handleToggleFavorite = () => {
        dispatch(isInclude ? removeFavorite(id) : addFavorite(id))
    }

    return (
        <div className={`card--${variant} card--${theme}`}>
            {variant === 'full' ? <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">Home</Link>
        </Breadcrumbs>:<></>}
            <NavLink to={`${id}`}>
            <div className='card__main'>
                <div className='card__image'>
                    <img src={imageUrl} alt={title}/>
                </div>
                <div className='card__info'>

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
            </NavLink>
            <div className='card__footer'>
                <div className='card__newsSite'>
                    <span>Source news: </span>
                    {newsSite}
                </div>
                {variant === 'full' ? <div>
                    <div className='card__like'>
                        <Button className='btn-card btn-like' onClick={handleLike} icon={<IconUp/>}>{count}</Button>
                        <Button className='btn-card btn-dislike' onClick={handleDislike}
                                icon={<IconDown/>}>{count2}</Button>
                    </div>
                    <div className='card__edit'>
                        <Button className='btn-card btn-mark' icon={<IconMark color={isInclude ? 'red' : 'black'}/>}
                                onClick={handleToggleFavorite}/>
                        </div>
                </div> : <></>}
            </div>
        </div>
    )
}
