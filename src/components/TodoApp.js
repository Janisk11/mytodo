import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoApp = () => {
    var [userEnter, setuserEnter] = useState("");
    var [todolist, settodolist] = useState([]);
    var saveEnteredValue = (e) =>{
        setuserEnter(e.target.value);
    }
    var saveTodo = () => {
        let uservalue = userEnter;
        uservalue.trim();
        if (uservalue !== '') {
            settodolist(todolist => [...todolist, uservalue]);
            setuserEnter('');
        }
    }
    var clearList = () => {
        settodolist([]);
    }

  return (
    <div className='todo-container'>
        <Box component='div' sx={{ width : '40%', m: 'auto', p: 10, border: '3px solid violet' }}>
            <Typography variant='h5' sx={{color: 'blue', pb: 2}}>To-Do List Application</Typography>
            <div id="todo-text">
                <TextField value={userEnter} label="Enter Todo" variant="standard" onChange={saveEnteredValue} />
                <Button variant='contained' color='secondary' onClick={saveTodo}>Submit</Button>
            </div>
          
            {todolist.length > 0 ? 
                <div id="todo-list">
                   <List>
                        {todolist.map((data, i) => (
                            <ListItem key={i} sx={{ display: 'list-item',listStyleType: 'decimal', textTransform: 'capitalize'}}>
                                {data}
                            </ListItem>
                        ))}
                   </List>
                    <Button variant='contained' color='error' onClick={clearList}>Clear List</Button>
                </div>
                : <Typography variant='p'>Create your daily To-Do list!!</Typography>
            }
        </Box>
    </div>
  )
}

export default TodoApp