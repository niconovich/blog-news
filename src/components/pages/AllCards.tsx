import { useSelector } from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { PageWrapper } from '../PageWrapper/PageWrapper';
// import { PaginationCenterLinks } from '../PaginationCenterLinks/PaginationCenterLinks';
// import { Tabs } from '../Tabs/Tabs';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Blog } from '../Blog/Blog';
import { IStore } from '../../redux/types';
// import { TABS } from '../../constants';
// import { Favorites } from '../Favorites/Favorites';

// const getResultComponent = (activeTab: string) => {
 //     switch(activeTab) {
 //         case TABS.favorites: {
 //             return Favorites;
 //         }
 //         default: return Blog
 //     }
 // }

export const AllCards = () => {
    const activeTab = useSelector((state: IStore) => state.settings.activeTab);
    // const ResultComponent = getResultComponent(activeTab)
    return (
        <>
            <PageWrapper title={'News'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>}>
                {/*<Tabs/>*/}
                <Blog/>
            </PageWrapper>
        </>
    )
}
