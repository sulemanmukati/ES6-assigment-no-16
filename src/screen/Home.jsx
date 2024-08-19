import React, { useEffect, useState } from 'react'
import Tables from '../component/Tables'
import axios from 'axios'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [userData ,setUserData] = useState([])
    const navigte = useNavigate()
    useEffect(()=>{
        axios
        .get('http://localhost:3000/users')
        .then((res)=>setUserData(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(userData)
  return (
    <Box>
      <Button onClick={()=>navigte('/createuser')} variant='contained' sx={{marginTop:3,marginBottom:3,float:"Right"}}>createuser</Button>
       <Tables data={userData}/>
       
        </Box>
  )
}

export default Home