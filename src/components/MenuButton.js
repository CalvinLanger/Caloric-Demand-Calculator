import React from 'react';

import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

function MenuButton() {
    return (
        <Fab variant="extended" size="medium" color="primary" aria-label="add" sx={{ width: '10rem' }}>
            <NavigationIcon sx={{ mr: 1 }} />
            Menu
        </Fab>
    );
};

export default MenuButton;