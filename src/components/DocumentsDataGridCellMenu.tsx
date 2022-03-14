import { Delete, Link, TextFields } from '@mui/icons-material';
import { Button, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React from 'react';

export const DocumentsDataGridCellMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button onClick={handleClick}>Dashboard</Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={anchorEl !== null}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Supprimer
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <TextFields fontSize="small" />
          </ListItemIcon>
          Renommer
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Link fontSize="small" />
          </ListItemIcon>
          Partager
        </MenuItem>
      </Menu>
    </div>
  );
};
