import React,{useContext} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import Button from 'react-bootstrap/Button';
import { ColorModeContext, tokens } from '../theme/theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import SearchIcon  from '@mui/icons-material/Search';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom';



const Topbar = () => {

    const { logout } = useLogout()

    const { user } = useAuthContext();
  
    const navigate = useNavigate();

    // Logout Functionality
   const handleLogOut = () =>{
     logout()
     navigate('/')
   }

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2} >
            {/*Search bar*/}
            <Box 
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Icons */}
            
            <Box></Box>

            <Box  display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' 
                        ? 
                        <LightModeOutlinedIcon />
                        :
                        <DarkModeOutlinedIcon />
                    }
                </IconButton>              
                    <IconButton>
                        <PersonOutlinedIcon /> 
                    </IconButton>
                    <Button onClick={handleLogOut}>
                        LogOut
                    </Button>
            </Box>
        </Box>
    )
}

export default Topbar
