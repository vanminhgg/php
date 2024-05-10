import { AppBar, Button, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AppsIcon from '@mui/icons-material/Apps';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { forwardRef, useImperativeHandle, useState } from 'react'

type HeaderProps = {
    setDisplaySideBar: ()=> void
}
export const Header = (props: HeaderProps) => {
    const {
        setDisplaySideBar
    } = props
    return (
        <AppBar position="static" style={{ backgroundColor: '#fff', display: 'flex', height: '60px', boxShadow: 'none', borderBottom: '1px solid #f0f0f0'}}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Stack style={{ flex: 3 }} direction='row'>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=> setDisplaySideBar()}>
                        <MenuIcon color='action' />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ display: "flex", alignItems: 'center' }} color={'Highlight'}>
                        <img src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_9_2x.png" alt="" style={{ width: '40px' }} />
                        <h4>Calendar</h4>
                    </Typography>
                </Stack>
                <Stack style={{ flex: 25 }} direction='row' justifyContent='space-between'>
                    <Stack style={{ width: '323px' }} direction='row' flexDirection='row' justifyContent='space-evenly'>
                        <Grid item>
                            <Button variant="outlined" style={{color: 'black', border: '1px solid #bfbfbf'}} >Today</Button>
                        </Grid>
                        <Grid item >
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <NavigateBeforeIcon color='action' />
                            </IconButton>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <NavigateNextIcon color='action' />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5' color='#5e5e5e' alignSelf='center'>
                                May 10, 2024
                            </Typography>
                        </Grid>
                    </Stack>
                    <Stack style={{ flex: 2 }} direction='row' justifyContent='space-evenly' display={'none'} >
                    </Stack>
                    <Stack style={{ width: "337px" }} direction='row' justifyContent='space-evenly'>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <SearchIcon color='action' />
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <HelpCenterIcon color='action' />
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <SettingsIcon color='action' />
                        </IconButton>
                        <Button variant="outlined" style={{color: 'black', border: '1px solid #bfbfbf'}} >
                            Day
                            <ArrowDropDownIcon color='action' />
                        </Button>
                        <Button variant="outlined" style={{ border: '1px solid #bfbfbf'}} >
                            <CalendarMonthIcon />
                        </Button>
                    </Stack>
                </Stack>
                <Stack style={{ flex: 2 }} >
                    <Stack direction='row' justifyContent='space-evenly'>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <AppsIcon color='action' />
                        </IconButton>
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" style={{ width: '40px', borderRadius: '50%' }} />
                    </Stack>
                </Stack>
                {/* Add other header elements here */}
            </Toolbar>

        </AppBar>
    )
}
