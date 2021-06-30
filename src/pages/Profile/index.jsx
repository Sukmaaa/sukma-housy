import { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProfileContent from "../../components/ProfileContent";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../../pages/NotFound";

const Profile = () => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const userSession = JSON.parse(sessionStorage.getItem("user"));

    if (userSession) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: userSession,
        },
      });
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  }, [dispatch]);

  if (state.isLogin) {
    return (
      <>
        <Navbar />
        <ProfileContent state={state} />
      </>
    );
  } else {
    return <NotFound></NotFound>;
  }
};

export default Profile;
