import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
    <Form onSubmit={handleSubmit}>
        <TextField 
            id='email'
            label='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField 
            id='password'
            label='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <Button 
            type='submit' 
            variant='contained' 
            color='primary'
        >Sign in</Button>
    </Form>
  )
}

export default SigninPage