import { Button, Card, FormControl, FormHelperText, Input, InputLabel, Paper, TextField } from '@mui/material';
import React from 'react'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const MyField = styled(TextField)(({theme}) => ({
  // width: '100%',
  margin: theme.spacing(2),
  // padding: theme.spacing(2)
}))

const Login = () => {
  return (
        <Box sx={{
          width: '30%',
          // height: '100vh',
          margin: 'auto',
          marginTop: '150px'
          // padding: '20px',
          // display: 'flex', 
          // alignItems: 'center'
          // marginTop: 'auto'
        }}>
          <Paper>
            <FormControl color='error'>
              <MyField
                label='smth'
                value={'hello'}
              > 
              </MyField>
            </FormControl>
          </Paper>
        </Box>
  )
}

export default Login;