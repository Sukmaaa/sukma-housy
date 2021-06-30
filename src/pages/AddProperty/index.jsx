import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import AddPropertyContent from "../../components/AddPropertyContent";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../contexts/UserContext";

const AddProperty = () => {
  const { dispatch, state } = useContext(UserContext);

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

  if (state.user.status === "owner") {
    return (
      <>
        <Navbar />
        <AddPropertyContent />
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default AddProperty;
