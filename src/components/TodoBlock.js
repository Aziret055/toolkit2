import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delBtn, editt } from './redux/redecerToolkitSlice';

const TodoBlock = ({el , idx}) => {
    const [chax ,setChax] = useState(false)
    const dispatch = useDispatch()
    const [edit , setEdit] = useState(false)
    const [value2 , setValue2] = useState("")
    function handleChange(id , value2) {
       const obj = {
        id ,
        value2
       }
       setEdit(!edit)
    dispatch(editt(obj))

    console.log("obj" ,obj);
    }
    return (
        <div>
            <tbody>

<tr class="bg-orange-400 border-b dark:bg-gray-800">
    <th style={{
        background : chax ? "green" : "orange"
    }} class="px-6 py-4 w-[600px] font-medium text-gray-900 whitespace-nowrap flex items-center justify-between dark:text-white ">
        {edit ?
         <input 
         onChange={(e) => {
            setValue2(e.target.value)
         }}
        defaultValue={el.title}
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" /> : el.title}
<div className="">
<input onClick={() => setChax(!chax)}  className='mx-4' type="checkbox"/>



<button onClick={() =>handleChange(el.id , value2)
} type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{edit ? "Save" : "Edit"}</button>

<button onClick={() => dispatch(delBtn(idx))}  type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
</div>
    </th>
</tr>
</tbody>
        </div>
    );
};

export default TodoBlock;