//React Imports
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";

//Components
import {
  LogoLink,
  StyledAppBar,
  StyledFaRegUserCircle,
  MenuLink,
  MenuLinkWhite,
  StyledMenuItem,
} from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useLocation } from "react-router-dom";
//Actions
import { signout } from "../../store/actions/authActions";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  let location = useLocation();
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignout = () => {
    dispatch(signout());
    history.replace("/");
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={
          location.pathname === "/" ? "bg-transparent" : "navbar-light shadow "
        }
      >
        <Toolbar>
          {user === null || user.role === "user" ? (
            <Typography variant="h6" className={classes.title}>
              <LogoLink to="/">Travel Go ✈️</LogoLink>
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.title}>
              Airline Portal
            </Typography>
          )}
          {user ? (
            <>
              <div>
                <StyledFaRegUserCircle
                  color="#fff"
                  size="1.5em"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
                <label>{user.username}</label>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {user.role === "user" ? (
                    <MenuLink to="/profile">
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </MenuLink>
                  ) : (
                    user.role === "airline" && (
                      <MenuLink to="/flights">
                        <MenuItem onClick={handleClose}>Flights</MenuItem>
                      </MenuLink>
                    )
                  )}

                  <StyledMenuItem onClick={handleSignout}>
                    Sign out
                  </StyledMenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <MenuLinkWhite to="/signup">
                <Button color="inherit">Sign up</Button>
              </MenuLinkWhite>

              <MenuLinkWhite to="/signin">
                <Button color="inherit">Sign in</Button>
              </MenuLinkWhite>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
