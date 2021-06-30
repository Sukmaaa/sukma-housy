import { useContext } from "react";
import BookingCard from "../BookingCard";
import styles from "./HistoryContent.module.css";
import { UserContext } from "../../contexts/UserContext";

const HistoryContent = ({ username }) => {
  const { state } = useContext(UserContext);
  const historyLocalStorage = JSON.parse(localStorage.getItem("history"));
  
  const history = historyLocalStorage.filter((item) => {
    return item.user.username === state.user.username;
  });

  if (state.user.status === "Tenant") {
    return (
      <div className={styles.container}>
        <div className={styles.historyWrapper}>
          {history.map((item, index) => {
            return <BookingCard invoice orderDetail={item} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.historyWrapper}>
          {historyLocalStorage.map((item, index) => {
            return <BookingCard invoice orderDetail={item} />;
          })}
        </div>
      </div>
    );
  }
};

export default HistoryContent;
