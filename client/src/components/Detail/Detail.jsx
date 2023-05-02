import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getCountryById, reSetCountryDetails } from "../../redux/Actions/actions";

export default function Detail (props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(reSetCountryDetails())
        dispatch(getCountryById(props.match.params.id))
    })
}