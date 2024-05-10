import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// ... other imports for icons

const Event = () => {
    const listItem = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh -60px)', boxSizing: 'border-box', flex: '1' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    listItem.map((item) =>
                        <Card sx={{ width: 'calc((100vw - 310px)/7)', borderRight: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', borderRadius: '0px'}}>
                            <CardContent>{item}</CardContent>
                        </Card>
                    )
                }
                {/* Add more cards */}
            </Box>
        </Box>
    );

};

export default Event;