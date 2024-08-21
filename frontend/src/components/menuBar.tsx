import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type ButtonLinkProps = ButtonProps & LinkProps;

const StyledButton = styled(Button)<ButtonLinkProps>({
  color: 'white',
  marginLeft: '20px',
});

function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Fridge Fusion
        </Typography>
        <StyledButton component={Link} to="/">
          Recipes
        </StyledButton>
        <StyledButton component={Link} to="/add_recipe">
          Add Recipe
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
