// @flow
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useStyles from './HeaderStyle';
import { useState } from 'react';
import Link from '@material-ui/core/Link';
import logo from "../../static/logo/logo.png"
import { Link as RouterLink } from 'react-router-dom';
import { history } from '../../routes/routesNavegation';
import { useAuth } from '../../services/auth';

export default function Header(){
    const classes = useStyles();
    const { signed, Logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogOut = () => {
      setAnchorEl(null);
      Logout();
      history.push('/')
    };

    const handleLogIn = () => {
      setAnchorEl(null);
      history.push('/login')
    };

    const handleImgClick = () => {
      history.push('/home')
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} className={classes.logo} alt="logo" onClick={handleImgClick}/>
            {!signed && (
              <Typography variant="h6" className={classes.titleLogedOut}>
                Estabelecimentos S.A
              </Typography>
            )}
            {signed && (
              <Typography variant="h6" className={classes.title} onClick={handleImgClick}>
                Estabelecimentos S.A
              </Typography>
            )}
            {signed && (
              <Typography className={classes.menu}>
                  <Link component={RouterLink} to="/home" className={classes.menuItem}>
                    Inicio
                  </Link>
              </Typography>
            )}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
            {signed && (
              <div>
                <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                <MenuItem onClick={handleLogOut}>Sair</MenuItem>
              </div>
            )}
            {!signed && (
              <div>
                <MenuItem onClick={handleLogIn}>Login</MenuItem>
              </div>
            )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  // };
};
