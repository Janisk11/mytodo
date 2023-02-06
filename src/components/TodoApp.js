import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoApp = () => {
    var [userEnter, setuserEnter] = useState("");
    var [todolist, settodolist] = useState([]);
    var saveEnteredValue = (value) =>{
        setuserEnter(value);
    }
    var saveTodo = () => {
        settodolist(todolist => [...todolist, userEnter]);
        setuserEnter('');
    }
    var clearList = () => {
        settodolist([]);
    }

  return (
    <div className='todo-container'>
        <Box component='div' sx={{ width : '40%', m: 'auto', p: 10, border: '3px solid violet' }}>
            <Typography variant='h5' sx={{color: 'blue', pb: 2}}>ToDo Application</Typography>
            <div id="todo-text">
                <TextField value={userEnter} label="Enter Todo" variant="standard" onChange={(e) =>saveEnteredValue(e.target.value)} />
                <Button variant='contained' color='secondary' onClick={saveTodo}>Submit</Button>
            </div>
          
            {todolist.length > 0 ? 
                <div id="todo-list">
                   <List>
                        {todolist.map((data) => (
                            <ListItem sx={{ display: 'list-item',listStyleType: 'decimal', textTransform: 'capitalize'}}>
                                {data}
                            </ListItem>
                        ))}
                   </List>
                    <Button variant='contained' color='error' onClick={clearList}>Clear List</Button>
                </div>
                : <Typography variant='p'>Enter your todos and list them.</Typography>
            }
            
        </Box>
    </div>
  )
}

export default TodoApp