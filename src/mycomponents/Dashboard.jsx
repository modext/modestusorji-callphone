import React, {useEffect, useState} from 'react'
import { Box, Button, Checkbox, Paper, TextField, Typography, Visibility } from '@mui/material'
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Logo } from '../assets'
// import { textTransform } from '@mui/system';
 import { useSelector, useDispatch } from 'react-redux'
 import { decrement, increment,selectCount, incrementByAmount, incrementAsync, } from '../services/authSlice'
// import {useForm} from 'react-hook-form'
 import { register, reset } from '../services/authSlice';

export default function Login() {
const username1 = 'John'
const navigate = useNavigate()

  return (

       
      
       <Box
       sx={{
        marginTop: '2rem',
        maxHeight: '100%',
      
       }}
       >
        
       <Logo />
        
        <Box
            sx={{
              position: 'absolute',
            bottom: '200px',
            top: '20rem',
            right: '5rem',
            marginBottom: '3.812rem',
              
              
            }}
        >
          
        
         
          
            <Paper
              sx={{
              
                position: 'flex',
                width: {xs:'70%', sm:'60%',lg:'70%'},
                alignItems: 'flex-start',
                padding: {xs:'2rem 1.5rem',sm:'2.5rem 2.5rem',md:'3rem 3.5rem', lg:'2.875rem 3.375rem'},
                borderRadius: '12px',
                flexDirection: 'row',
              }}
            >
              <Box
                
              >
                <Typography
                sx={{ 
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '1.5rem',
                  
                  color: '#000000',
                  marginBottom: '1rem',
                }}
                >
                  Hi {username1}!
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
                    marginBottom: '1rem',
                  }}
                >
                  Thank you for using our service.
                </Typography>

              </Box>
              
              

              <Box>
                                 
              </Box>
              <Button variant="text"
                onClick={() => navigate("/")}
                sx={{ 
                  top: '.625rem',
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '1rem',
                  lineHeight: '132%',
                  color: '#4834D4',
                  textTransform: 'none'
                }}
                >
                  Logout</Button>
              
              
            </Paper>
        </Box>
      </Box>
    
  )
}
