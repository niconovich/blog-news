import {useContext, useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch} from 'react-redux';
import {setRowPage, setSortSpis} from "../../redux/actionCreators/settingsActionCreators";
import './DropDown.scss'
import {ThemeContext} from "../../contexts/contexts";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select/Select";


type rowsList= {
    title: string
    value: number | string
}

type DropDownList={
    titleList?:string
    rowsList:rowsList[]
}


export const  DropDownList = ((DropDownList:DropDownList) => {
    const {titleList, rowsList}=DropDownList
    const dispatch=useDispatch();
    const {theme} = useContext(ThemeContext)
    console.log('rowsList',rowsList)
    const [rowsPerPage, setRowsPerPage] = useState(rowsList[0].value);


    useEffect (() => {
        console.log('inputValue',rowsPerPage)
        if (titleList==='Sort') {
            dispatch(setSortSpis(String(rowsPerPage)));
        } else {
            dispatch(setRowPage(Number(rowsPerPage)));
        }


    },[rowsPerPage])

    const handleChange = (event: SelectChangeEvent) => {
        // @ts-ignore
        setRowsPerPage(event.target.value);
    };



    return (

            <div className={`DropDown DropDown--${theme}`}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="rwinput">{titleList}</InputLabel>
                    <Select
                        labelId="rowList"
                        id="rowList"
                        defaultValue={String(rowsPerPage)}
                        onChange={handleChange} >
                        { rowsList.map((row)=><MenuItem value={row.value}>{row.title}</MenuItem>)}

                    </Select>
                </FormControl>

            </div>
          )
        })