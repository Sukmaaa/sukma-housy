import { useEffect, useContext } from "react";
import HistoryContent from "../../components/HistoryContent";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../NotFound";

const History = () => {
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
        <HistoryContent />
      </>
    );
  } else {
    return <NotFound></NotFound>;
  }
};

export default History;
