//React Imports
import { useDispatch, useSelector } from "react-redux";

//Actions
import { profile } from "../../store/actions/authActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const checkProfile = useSelector((state) => state.authReducer.profile);
  const username = useSelector((state) => state.authReducer.user.username);

  checkProfile === null && dispatch(profile(username));

  return (
    checkProfile && (
      <>
        <div>{checkProfile.firstName}</div>
        <div>{checkProfile.lastName}</div>
      </>
    )
  );
};

export default UserProfile;
