import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch} from 'react-redux';
import {setRowPage} from "../../redux/actionCreators/settingsActionCreators";
import './DropDown.scss'



const countNewsPage = [ '3','6','9','12'];

export const  DropDown = (() => {
    const dispatch=useDispatch();
    console.log('DropDown')
    const [rowsPerPage, setRowsPerPage] = useState(countNewsPage[1]);

    useEffect (() => {
        console.log('inputValue',Number(rowsPerPage))
         dispatch(setRowPage(Number(rowsPerPage)));
    },[rowsPerPage])


    return (
            <div className={'DropDown'}>
                <Autocomplete className={'DropDown__body'}
                   defaultValue={countNewsPage[1]}
                   disableClearable={true}
                   inputValue={rowsPerPage}
                   onInputChange={(event, newRowsPerPage) => {
                       setRowsPerPage(newRowsPerPage) ;
                    }}
                    id="controllable-PagesNews"
                    options={countNewsPage}
                    sx={{ width: 60}}
                    renderInput={(params) => <TextField {...params} label="" />}
                />
            </div>
        );
        })