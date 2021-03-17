//Components
import UserProfileBookingInfo from "../UserProfileBookingInfo";
import UserProfilePersonalInfo from "../UserProfilePersonalInfo";
import { useSelector, useDispatch } from "react-redux";
import { profile } from "../../../store/actions/authActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.authReducer.user.username);
  const checkProfile = useSelector((state) => state.authReducer.profile);
  const booking = useSelector((state) => state.authReducer.booking);

  checkProfile === null && dispatch(profile(username));

  return (
    checkProfile && (
      <>
        <UserProfilePersonalInfo
          email={checkProfile.email}
          phoneNumber={checkProfile.phoneNumber}
          firstName={checkProfile.firstName}
          lastName={checkProfile.lastName}
          dateOfBirth={checkProfile.dateOfBirth}
        />
        <UserProfileBookingInfo booking={booking} />
      </>
    )
  );
};

export default UserProfile;
