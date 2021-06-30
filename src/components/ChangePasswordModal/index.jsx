import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ChangePasswordModal.module.css";

const ChangePasswordModal = ({ showModal, onHide }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  return (
    showModal && (
      <>
        <div className={styles.ChangePasswordModal}>
          <form className={styles.ChangePasswordForm}>
            <div className={styles.centerWrapper}>
              <p className={styles.modalTitle}>Change Password</p>
            </div>
            <label className={styles.inputLabel}>Old Password</label>
            <input
              className={styles.inputField}
              type="password"
              value={oldPassword}
              name="username"
              id="username"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label className={styles.inputLabel}>New Password</label>
            <input
              className={styles.inputField}
              type="password"
              value={newPassword}
              name="password"
              id="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label className={styles.inputLabel}>Re-type Password</label>
            <input
              className={styles.inputField}
              type="password"
              value={retypePassword}
              name="retype-password"
              id="retype-password"
              onChange={(e) => setRetypePassword(e.target.value)}
            />

            <Link to="/me">
              <input
                type="submit"
                className={styles.ChangePasswordButton}
                value="Save"
                onClick={(e) => {
                  e.preventDefault();
                  setOldPassword("");
                  setNewPassword("");
                  setRetypePassword("");
                  console.log(oldPassword, newPassword, retypePassword);
                  onHide();
                }}
              />
            </Link>
          </form>
        </div>
        <div className={styles.background} onClick={onHide}></div>
      </>
    )
  );
};

export default ChangePasswordModal;
