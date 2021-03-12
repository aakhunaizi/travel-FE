//React Imports
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//Components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import { Modal } from "react-bootstrap";
import UpdateProfile from "../UpdateProfile";

//Actions
import { profile } from "../../store/actions/authActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserProfile = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.authReducer.user.username);
  const checkProfile = useSelector((state) => state.authReducer.profile);
  checkProfile === null && dispatch(profile(username));

  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    checkProfile && (
      <>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <Card
          className="container"
          style={{ width: "50%", marginTop: "2%" }}
          variant="outlined"
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              First Name
            </Typography>
            <Typography variant="h5" component="h2">
              {checkProfile.firstName}
            </Typography>
            <br />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Last Name
            </Typography>
            <Typography variant="h5" component="h2">
              {checkProfile.lastName}
            </Typography>
            <br />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Phone Number
            </Typography>
            <Typography variant="h5" component="h2">
              {checkProfile.phoneNumber}
            </Typography>
            <br />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Email
            </Typography>
            <Typography variant="h5" component="h2">
              {checkProfile.email}
            </Typography>
            <br />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Date of Birth
            </Typography>
            <Typography variant="h5" component="h2">
              {checkProfile.dateOfBirth}
            </Typography>
          </CardContent>
          <CardActions style={{ float: "right" }}>
            <Button variant="outlined" color="primary" onClick={handleShow}>
              Edit
            </Button>
          </CardActions>
        </Card>
        <Modal show={show} onHide={handleClose} style={{ marginTop: "5%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateProfile />
          </Modal.Body>
        </Modal>
      </>
    )
  );
};

export default UserProfile;
