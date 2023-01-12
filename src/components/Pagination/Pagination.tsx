import { useSelector,useDispatch} from 'react-redux';
import { useContext,useState,useEffect} from 'react';
import { Button } from '../Button/Button';
import { IconLeftArrow } from '../Icon/IconLeftArrow';
import { IconRightArrow } from '../Icon/IconRightArrow';
import { ThemeContext } from '../../contexts/contexts';
import './Pagination.scss';
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'
import {DropDownList} from "./DropDown";

type rowsList= {
    title: string
    value: number | string
}
type countNewsPage= rowsList[]

const sortAll:countNewsPage = [
    {title:'↓ Date Create',value:'publishedAt:desc'},
    {title:'↑ Date Create',value:'publishedAt:asc'},
    {title:'↓ Title',value:'title:desc'},
    {title:'↑ Title',value:'title:asc'},
    {title:'↓ Number',value:'id:desc'},
    {title:'↑ Number',value:'id:asc'},
];

const countNewsPage:countNewsPage = [
    {title:'3 rows',value:3},
    {title:'6 rows',value:6},
    {title:'9 rows',value:9},
    {title:'12 rows',value:12},
];

export const Pagination = () => {
    const {theme} = useContext(ThemeContext);
    const [isPrevDisabled, setIsPrevDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const countTotal = useSelector((state: IStore) => state.articles.countTotal);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const dispatch = useDispatch()
    const titleListRowsPager='Rows News page'
    const titleListSort='Sort'
    const start=currentPage==1?1:currentPage*rowsPerPage-rowsPerPage+1
    const startEnd=countTotal<start+rowsPerPage-1?countTotal:start+rowsPerPage-1
    console.log('countNewsPage',countNewsPage)
     useEffect(() => {
         setIsPrevDisabled(currentPage === 1);
         const count = Math.ceil(countTotal / rowsPerPage);
         setIsNextDisabled(count === currentPage);
     }, [currentPage, rowsPerPage, countTotal])
    console.log('Pagination currentPage',currentPage,'rowsPerPage ',rowsPerPage,'start',start,'startEnd',startEnd)
    return (

        <div className={`paginations paginations--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>

                    <div className={'pagination__title'}>
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
                            {countTotal==0?countTotal:`${start}..${startEnd} of ${countTotal}`}
                        </div>
                    <div className='pagination__right'>
                        <Button className='pagination__btn'
                        disabled={isNextDisabled}
                        style={{opacity: isNextDisabled ? '0.5' : ''}}
                        onClick={() => dispatch(setCurrentPage(currentPage + 1))}>

                            <IconRightArrow/>
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
