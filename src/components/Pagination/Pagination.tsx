import {useSelector, useDispatch} from 'react-redux';
import {useContext, useState, useEffect} from 'react';
import {Button} from '../Button/Button';
import {IconLeftArrow} from '../Icon/IconLeftArrow';
import {IconRightArrow} from '../Icon/IconRightArrow';
import {ThemeContext} from '../../contexts/contexts';
import './Pagination.scss';
import {IStore} from '../../redux/types'
import {setCurrentPage} from '../../redux/actionCreators/settingsActionCreators'
import {DropDownList} from "./DropDown";
import {setCountTotalPages, setSearchValue} from "../../redux/actionCreators/articleActionCreators";

type rowsList = {
    title: string
    value: number | string
}
type countNewsPage = rowsList[]

const sortAll: countNewsPage = [
    {title: 'Date Create', value: 'publishedAt'},
    {title: 'Title', value: 'title'},
    {title: 'Number', value: 'id'},
];

const countNewsPage: countNewsPage = [
    {title: '3 rows', value: 3},
    {title: '6 rows', value: 6},
    {title: '9 rows', value: 9},
    {title: '12 rows', value: 12},
];

const typeSort: countNewsPage = [
    {title: 'Down', value: 'desc'},
    {title: 'Up', value: 'asc'},


];
export const Pagination = () => {
    const {theme} = useContext(ThemeContext);
    const [isPrevDisabled, setIsPrevDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const countTotal = useSelector((state: IStore) => state.articles.countTotal);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const countTotalValue = useSelector((state: IStore) => state.articles.countTotalPages);
    const dispatch = useDispatch()
    const titleListRowsPager = 'Rows News page';
    const titleListSort = 'Sort';
    const titleTypeSort = "Sort type";
    const start = currentPage == 1 ? 1 : currentPage * rowsPerPage - rowsPerPage + 1
    const startEnd = countTotal < start + rowsPerPage - 1 ? countTotal : start + rowsPerPage - 1

    useEffect(() => {
        setIsPrevDisabled(currentPage === 1);
        // const count = Math.ceil(countTotal / rowsPerPage);
        setIsNextDisabled(countTotalValue-1 === currentPage);
        dispatch(setCurrentPage(currentPage))
    }, [currentPage, rowsPerPage, countTotal])
    const handleChangePage = (e: any) => {
        const current = e.target.value > 0 ? e.target.value : 1
        const newValuePage = current >= countTotalValue ? countTotalValue - 1 : current
        dispatch(setCurrentPage(newValuePage));
    }
    //console.log('Pagination currentPage',currentPage,'rowsPerPage ',rowsPerPage,'start',start,'startEnd',startEnd)
    return (

        <div className={`paginations paginations--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>

                    <div className={'pagination__title'}>
                        <DropDownList titleList={titleTypeSort} rowsList={typeSort}/>
                        <DropDownList titleList={titleListSort} rowsList={sortAll}/>
                        <DropDownList titleList={titleListRowsPager} rowsList={countNewsPage}/>
                    </div>
                    <div className='pagination__allbtn'>
                        <div className='pagination__left'>
                            <Button className='pagination__btn'
                                    style={{opacity: isPrevDisabled ? '0.5' : ''}}
                                    disabled={isPrevDisabled}
                                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                                <IconLeftArrow/>
                            </Button>
                        </div>
                        <div className={'pagination__center'}>
                            <span>{countTotal == 0 ? countTotal : `${start}..${startEnd} current page  `}</span>
                            <input style={{marginLeft: '4px', marginRight: '4px'}} type={"text"} size={2}
                                   inputMode={"numeric"} value={currentPage} min={0} max={countTotalValue - 1}
                                   onChange={handleChangePage}/>
                            <span>{`  of ${countTotalValue - 1}`}</span>
                        </div>
                        <div className='pagination__right'>
                            <Button className='pagination__btn'
                                    disabled={isNextDisabled}
                                    style={{opacity: isNextDisabled ? '0.5' : ''}}
                                    onClick={() => dispatch(setCurrentPage(+currentPage + 1))}>
                                <IconRightArrow/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
