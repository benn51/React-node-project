import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {actor} from '../dtata/store';

const Send = () => {
const dispatch= useDispatch()
const name= useSelector(state=>state.name)
const age= useSelector(state=>state.age)
const nFunc=()=>{
dispatch(actor.inc({name:'bedlu',age:40}))
}
   
    return (
        <div>
            <div className='name'>{name}</div>
            <div className='age'>{age}</div>
            <button onClick={nFunc}> fetch data</button>

        </div>
    );
};

export default Send;

