import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Redux/Actions";
import { useEffect } from "react";

const UserType = () => {
  const dispatch = useDispatch();

  var getProfileData = useSelector(
    (state) => state.getProfileReducer?.getProfileData
  );
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (getProfileData?.user_type == 3) {
    return "tutor";
  } else return "student";
};

export default UserType;
