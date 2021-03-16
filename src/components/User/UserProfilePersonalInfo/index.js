//React Imports
import { useState } from "react";

//Components
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import { Modal } from "react-bootstrap";
import UpdateProfile from "../UpdateProfile";
import { StyledCard, StyledCardActions, StyledModal } from "./styles";

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

const UserProfilePersonalInfo = ({
  email,
  phoneNumber,
  firstName,
  lastName,
  dateOfBirth,
}) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <StyledCard className="container" variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            First Name
          </Typography>
          <Typography variant="h5" component="h2">
            {firstName}
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
            {lastName}
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
            {phoneNumber}
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
            {email}
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
            {dateOfBirth}
          </Typography>
        </CardContent>
        <StyledCardActions>
          <Button variant="outlined" color="primary" onClick={handleShow}>
            Edit
          </Button>
        </StyledCardActions>
      </StyledCard>
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProfile />
        </Modal.Body>
      </StyledModal>
    </>
  );
};

export default UserProfilePersonalInfo;
