import { Button, Checkbox, FormControlLabel, FormGroup, List, ListItem, Stack, TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { cp } from 'fs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export const SideBar = forwardRef((_,ref) => {
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'))
    const [isMyCalendarDisplay, setIsMyCalendarDisplay] = useState(true)
    const [isOtherCalendarDislay, setIsOtherCalendarDisplay] = useState(true)
    const [isDisplay, setIsDisplay] = useState(true)
    useImperativeHandle(ref, () => ({
        setDisplay (){
            setIsDisplay(!isDisplay)
        }
    }))
    const dateRef = useRef() as any;

    const handleDisplayMyCalendar = () => {
        setIsMyCalendarDisplay(!isMyCalendarDisplay)
    }
    const handleDisplayOtherCalendar = () => {
        setIsOtherCalendarDisplay(!isOtherCalendarDislay)
    }

    return (
        <Stack style={{ width: '300px', height: 'calc(100vh - 60px)', overflow: 'hidden', borderRight: '1px solid #f0f0f0', display: isDisplay? 'flex': 'none' }} flexDirection='column'>
            <Stack height='84px' margin={'auto'} justifySelf={'center'}>
                <Button size={'large'} style={{ border: '1px solid grey', borderRadius: '20px', margin: 'auto' }} >
                    <AddBoxIcon color='success' />
                    Create
                </Button>
            </Stack>
            <Stack flexGrow='1' >
                <Stack height='336px' >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                    </LocalizationProvider>
                </Stack>
                <Stack style={{ height: '40px', padding: '4px' }}>
                    <input type='text' style={{ height: "35px", paddingLeft: '20px', margin: 'auto', width: '80%', border: 'none', backgroundColor: "#e3e3e3", borderRadius: '5px' }} placeholder='Search' />
                </Stack>
                <Stack height='250px'>
                    <Button style={{ color: 'GrayText', textAlign: 'left' }} onClick={() => handleDisplayMyCalendar()} >
                        My calendar
                        {isMyCalendarDisplay? <ExpandLessIcon />: <ExpandMoreIcon/>}
                    </Button>
                    <FormGroup style={{ paddingLeft: '30px', display: isMyCalendarDisplay ? 'flex' : 'none' }}>
                        <FormControlLabel control={<Checkbox defaultChecked color={'error'} />} label="Minh Nguyen" />
                        <FormControlLabel  control={<Checkbox />} label="Task" />
                    </FormGroup>
                    <Button style={{ color: 'GrayText', textAlign: 'left' }} onClick={() => handleDisplayOtherCalendar()} >
                        Other calendar
                        {isOtherCalendarDislay? <ExpandLessIcon />: <ExpandMoreIcon/>}
                    </Button>
                    <FormGroup style={{ paddingLeft: '30px', display: isOtherCalendarDislay ? 'flex' : 'none' }}>
                        <FormControlLabel control={<Checkbox defaultChecked color={'success'} /> } label="Holiday" />
                    </FormGroup>
                </Stack>
                <Stack flexGrow='1'></Stack>
            </Stack>
        </Stack>
    )
})
