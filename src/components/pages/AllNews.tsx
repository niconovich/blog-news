import { useSelector } from 'react-redux';
import {Breadcrumbs, Link} from "@mui/material";
import { PageWrapper } from '../PageWrapper/PageWrapper';
import { NewsBlog } from '../NewsBlog/NewsBlog';
import { IStore } from '../../redux/types';
import {NavLink} from "react-router-dom";


export const AllNews = () => {
    const searchValue = useSelector((state: IStore) => state.articles.searchValue);
    return (
        <>
            <PageWrapper title={searchValue==''?'Spaceflight News':`Search: ${searchValue}`}
                breadcrumb={<Breadcrumbs>
                    <NavLink   to="/">Home</NavLink>
                </Breadcrumbs>}>
                <NewsBlog/>
            </PageWrapper>
        </>
    )
}
