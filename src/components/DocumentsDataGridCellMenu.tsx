import { Delete, Link, TextFields } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import React from 'react';

export const DocumentsDataGridCellMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>
        <Delete /> Supprimer
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <TextFields />
        Renommer
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link /> Partager
      </MenuItem>
    </Menu>
  );
};
