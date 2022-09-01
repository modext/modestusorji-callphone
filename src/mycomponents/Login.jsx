import React, {useEffect, useState} from 'react'
import { Box, Button, Checkbox, Paper, TextField, Typography } from '@mui/material'
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Logo } from '../assets'
// import { textTransform } from '@mui/system';
 import { useSelector, useDispatch } from 'react-redux'
 import { decrement, increment,selectCount, incrementByAmount, incrementAsync, } from '../services/authSlice'
// import {useForm} from 'react-hook-form'
 import { register, reset } from '../services/authSlice';

export default function Login() {

  const navigateToDashboard = () => {
    // 👇️ navigate to /contacts
    navigate('/dashboard');
  };
  // const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {user, token, message, isError, isSuccess} = useSelector(
    (state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message]);

  const onSubmit = (e) =>{
    e.preventDefault();
  }
  const userData ={
    username, 
    password,
  }

  dispatch(register(userData))
  

  return (

    <Box>    
      
       
        
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              
              
            }}
        >
          
        
         <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '30%',
            alignItems: 'center',
            marginBottom: '0.82rem',
          }}
        >
          <Logo />
        </Box>   
            <Paper
                sx={{
                  width: {xs:'70%', sm:'60%',lg:'23%'},
                  alignItems: 'center',
                  padding: {xs:'2rem 1.5rem',sm:'2.5rem 2.5rem',md:'3rem 3.5rem', lg:'4.875rem 5.9375rem'},
                  borderRadius: '12px',
                  flexDirection: 'row',
                }}
            >
              <Box
                sx ={{
                  textAlign: 'center',
                }}
              >
                <Typography
                sx={{ 
                  left: '91.69px',
                  top: '0px',
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '1.5rem',
                  lineHeight: '132%',
                  color: '#000000',
                }}
                >
                  Welcome Back!
                </Typography>


                <Typography
                  sx={{ 
                    top: '2.625rem',
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '1rem',
                    lineHeight: '132%',
                    color: '#444444',
                  }}
                >
                  Log into your account
                </Typography>

              </Box>
              
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '0.875rem',
                    color: '#9B9B9B',
                    }}

                    
                >
                  Username
                </Typography>
                <TextField 
                  fullWidth
                  color="primary"
                  label='Ferdnardjohn73'
                  
                    sx={{
                      "& label": {color: "#161616",
                      backgroundColor: '#fafafa'},                      
                      input: {color: "#161616",
                    },  
                    color: "#161616",
                      borderRadius: '0.5rem',
                      fontFamily:  'Rubik',
                    }
                  }
                    onChange={(e) => {
                    setUserName(e.target.value)}}
                  value={username}
                />
                <Typography
                  sx={{
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '0.875rem',
                    color: '#9B9B9B',
                    }}
                >
                  Password
                </Typography>
                <TextField 
                  fullWidth
                  label='**************'
                  inputProps={{ 
                  sx:{
                    "& label": {color: "#161616"},
                    backgroundColor: '#fafafa',
                    
                    borderRadius: '0.5rem',
                    fontFamily:  'Rubik',
                    
                  }
                  
                }}
                onChange={(e) => {
                  setPassword(e.target.value)}}
                value={password}
                />
              </Box>

              <Box>
                <Box
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      display: 'flex',
                      marginLeft: '-12px'
                    }}
                  >
                    <Checkbox 
                      sx={{
                        backgroundColor: '#fafafa',
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '0.75rem',
                        color: '#13113F',
                        lineHeight: '150%',
                      }}           
                    >
                      Remember Me
                    </Typography>
                  </Box>
                  
                
                
                  <Typography
                    sx={{
                      fontFamily: 'Rubik',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '0.75rem',
                      color: '#13113F',
                      lineHeight: '150%',
                    }} 
                  >
                    Forgot Password?
                  </Typography>
                </Box>
              </Box>
              
                <Button 
                  onClick={() => navigate("/dashboard")} fullWidth type="submit" variant='contained'
                  sx={{
                    backgroundColor: '#4834D4',
                    textTransform: 'none'
                    
                  }}
                  >Login</Button>
              
              
            </Paper>
        </Box>
      </Box>
    
  )
}
