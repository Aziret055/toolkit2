import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTask, delBtn } from './redux/redecerToolkitSlice';
import TodoBlock from './TodoBlock';

const Todo = () => {
    const [value , setValue] = useState("")
    const dispatch = useDispatch()
    const {todo} = useSelector((s) => s.toolkit)
    return (

        <div className='todo'>
            <div className="todo_blo">
                <input onChange={(e) =>{
                    setValue(e.target.value.trimStart())
                } } type="text" placeholder={"Дабавить"} value={value} className='block w-[400px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'  />
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() =>{
                     value ===  ""? alert("Заполните пустое поле !!!"): 
                     dispatch(AddTodo(value))
                     setValue("")
                }}>add</button>
            </div>
            <div className="todolist">
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {
    todo.map((el ,idx) => <TodoBlock el={el} idx={idx}/>)
}
    </table>
</div>

            </div>
        </div>
    );
};

export default Todo;