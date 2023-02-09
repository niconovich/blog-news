import { useSelector } from 'react-redux';
import {Breadcrumbs, Link} from "@mui/material";
import { PageWrapper } from '../PageWrapper/PageWrapper';
import { NewsBlog } from '../NewsBlog/NewsBlog';
import { IStore } from '../../redux/types';
import {NavLink} from "react-router-dom";
import './AllNews.scss';

export const AllNews = () => {
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    const countTotal=useSelector((state: IStore) => state.articles.countTotal)
    return (
        <>
            <PageWrapper title={searchValue==''?'Spaceflight News':`Search: ${searchValue}`}
                breadcrumb={<Breadcrumbs>
                    <NavLink   to="/">Home</NavLink>
                </Breadcrumbs>}>
                {countTotal>0?<NewsBlog/>:<div className={'notSearch'}>{`'${searchValue}' search result missing`}</div>}
            </PageWrapper>
        </>
    )
}
