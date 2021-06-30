import { useEffect, useContext } from "react";
import BookingContent from "../../components/BookingContent";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../NotFound";

const Booking = () => {
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
        <BookingContent />
      </>
    );
  } else {
    return <NotFound></NotFound>;
  }
};

export default Booking;
