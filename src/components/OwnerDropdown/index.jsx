import styles from "./OwnerDropdown.module.css";

import triangle from "../../assets/images/icon/white-triangle.svg";
import userIcon from "../../assets/images/icon/user-icon.svg";
import propertyIcon from "../../assets/images/icon/property-icon.svg";
import billIcon from "../../assets/images/icon/bill-icon.svg";
import logoutIcon from "../../assets/images/icon/logout-icon.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

// const OwnerDropdown = () => {
//   return <div>ghello</div>;
// };

const OwnerDropdown = ({ showDropdown, onHide }) => {
  const { dispatch } = useContext(UserContext);

  const router = useHistory();

  const handleLogout = () => {
    router.push("/");
    dispatch({ type: "LOGOUT" });
    sessionStorage.clear("user");
  };

  return showDropdown ? (
    <>
      <div className={styles.dropdownWrapper}>
        <img
          src={triangle}
          alt="backflip triangle"
          className={styles.triangle}
        />

        <div
          className={styles.dropdownMenuWrapper}
          onClick={() => {
            router.push("/me");
          }}
        >
          <img
            className={styles.menuIcon}
            src={userIcon}
            alt="user icon"
            width="30px"
          />
          <p className={styles.menuText}>Profile</p>
        </div>

        <div
          className={styles.dropdownMenuWrapper}
          onClick={() => {
            router.push("/add-property");
          }}
        >
          <img
            className={styles.menuIcon}
            src={propertyIcon}
            alt="property icon"
            width="30px"
          />
          <p className={styles.menuText}>Add property</p>
        </div>

        <div
          className={styles.dropdownMenuWrapper}
          onClick={() => {
            router.push("/my-history");
          }}
        >
          <img
            className={styles.menuIcon}
            src={billIcon}
            alt="bill icon"
            width="30px"
          />
          <p className={styles.menuText}>History</p>
        </div>

        <p className={styles.divider}></p>
        <div className={styles.dropdownMenuWrapper} onClick={handleLogout}>
          <img
            className={styles.menuIcon}
            src={logoutIcon}
            alt="logout icon"
            width="30px"
          />
          <p className={styles.menuText}>Logout</p>
        </div>
      </div>
      <div className={styles.background} onClick={onHide}></div>
    </>
  ) : null;
};

export default OwnerDropdown;
