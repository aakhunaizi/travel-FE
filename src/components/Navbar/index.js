//React Imports
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";

//Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaRegUserCircle } from "react-icons/fa";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//Actions
import { signout, clearProfile } from "../../store/actions/authActions";

//Styling
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
      <AppBar position="sticky" elevation={0} style={{ background: "#673ab7" }}>
        <Toolbar>
          {user === null || user.role === "user" ? (
            <Typography variant="h6" className={classes.title}>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Final Destination ✈️
              </Link>
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.title}>
              Airline Portal
            </Typography>
          )}
          {user ? (
            <>
              <div>
                <FaRegUserCircle
                  style={{ marginRight: "5px" }}
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
                    <Link
                      style={{ color: "black", textDecoration: "none" }}
                      to="/profile"
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                  ) : (
                    user.role === "airline" && (
                      <Link
                        style={{ color: "black", textDecoration: "none" }}
                        to="/flights"
                      >
                        <MenuItem onClick={handleClose}>Flights</MenuItem>
                      </Link>
                    )
                  )}

                  <MenuItem
                    style={{ color: "black", textDecoration: "none" }}
                    onClick={handleSignout}
                  >
                    Sign out
                  </MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/signup"
              >
                <Button color="inherit">Sign up</Button>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/signin"
              >
                <Button color="inherit">Sign in</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
