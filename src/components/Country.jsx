import {useMemo, useState} from 'react';
import countryList from 'react-select-country-list'
import Select from 'react-select';
import './App.css';

export default function Country(props)
{
    const[value, setValue]=useState("");
    const options= useMemo(()=> countryList().getData(),[])
    const {onChangeValue}=props;

    function changeHandler(e)
    {
        setValue(e)
        onChangeValue(value);
    }
    return(<Select options={options} value={value} onChange={changeHandler} placeholder="Country"
     className="select" style={{padding:0, fontSize:"5px"}}/>);

}