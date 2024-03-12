import BG from './img/BG.png'
import { Avatar, Box, Grid, Typography,Container, TextField, FormControlLabel, Checkbox, Button, Stack } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { ThemeProvider,createTheme } from '@mui/material/styles'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/base';


const Theme = createTheme({
    palette:{
        mode:'dark'
    }
})

const BoxStyle = {
    position:'absolute',
    top:'20%',
    left:'15%',
    width:'70%',
    height:'73%',
    boxshadow:24,
    bgcolor:'background.paper',
    border: '3px solid rgba(0, 0, 0, 0.5)'
}

const center = {
    position: 'relative',
    top:'23px',
    left:'40%',
}

const center_A = {
    color:'black',
    marginLeft:'39px',
    marginTop:'10px',
    bgcolor:'white'
}

const Main = {
    backgroundColor:'#3b33d5',
    height:'463px', 
    width:'470px' , 
    marginTop:'-10px',
    marginLeft:'-15px'
 } 

const text = {
 marginTop:'40px',
 marginLeft:'54px',
 width:'367px'
}

const pass = {
marginTop:'27px',
marginLeft:'61px',
width:'367px' 
}

const Rem = {
    marginLeft:'52px',
    marginTop:'10px',
    color:'white'
}

const btn = {
   marginTop:'10px',
   width:'310px',
   marginLeft:'90px',
   borderRadius:'14px',
   color:'white',
   backgroundColor:'#FF9A01'
}

const Red = {
    marginTop:'21px',
    marginLeft:'65px',
    color:'white',
}



function Login()
{

    const [rember,setRember] = useState(false)
    const navigate = useNavigate()

    return(
        <>
        <div style={{
        //  backgroundColor:'rgba(255, 248, 231,1)',
         backgroundColor:'white',
         backgroundSize:'cover',
         height:'100vh',
         color:'white',
        }}></div>

         <Box sx={BoxStyle}>
         <Grid container>
           <Grid item xs={12} sm={12} lg={6} >
            <Box style={{
                backgroundImage:`url(${BG})`,
                backgroundSize:'cover',
                color:'white',
                marginTop:'10px',
                marginLeft:'29px',
                marginRight:'15px',
                height:'400px'
               
            }}>
            </Box>
           </Grid>
           
           
           <Grid item xs={12} sm={12} lg={6} >

            <ThemeProvider theme={Theme}>
            <Container>
                <Box sx={Main}>
                    <Box sx={center}>
                       <Avatar sx={center_A}>
                       <LockOpenIcon/>
                       </Avatar>
                       <Typography component='h1' variant='h4'>
                        Sign In
                       </Typography>
                    </Box>


                  <Grid container spacing={1}>
                     <Grid item xs={12} >
                       <TextField 
                        required
                        id="email"
                        label="email"
                        name="email"
                        sx={text}
                       >
                       </TextField>
                     </Grid>

                   <Grid>
                    <TextField
                     required
                     name="password"
                     label="password"
                     type="password"
                     id="password"
                     sx={pass}
                    >

                    </TextField>
                   </Grid>

                   <Grid>
                    <FormControlLabel
                    onClick={() => setRember(!rember)}
                    control={<Checkbox checked={rember}/>}
                    label="Remember Me"
                    sx={Rem}
                    />
                   </Grid>

                   
                   <Grid>
                    <Button type='submit' variant="contained" size="large" sx={btn}>Sign in</Button>
                   </Grid>
                
                       
                  <Grid sx={Red}>
                   <Stack direction="row" spacing={2}>
                    <Typography variant='body1' component="span">
                      Not registered yet?{' '}
                     
                      <span  
                       style={{ color:'#beb4fb',cursor:'pointer' }}
                       onClick={() => {
                           navigate('/ragister')
                        }}>
                       Create an Account
                      </span>

                    </Typography>
                   </Stack>
                  </Grid>     

                  </Grid>

                </Box>
              </Container>
            </ThemeProvider>

             
           </Grid>
         </Grid>
         </Box>

        
        

        </>
    )
}

export default Login