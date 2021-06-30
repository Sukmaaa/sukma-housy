import styles from "./ProfileContent.module.css";

import nameIcon from "../../assets/images/profile/name-icon.svg";
import mailIcon from "../../assets/images/profile/mail-icon.svg";
import passwordIcon from "../../assets/images/profile/password-icon.svg";
import statusIcon from "../../assets/images/profile/status-icon.svg";
import genderIcon from "../../assets/images/profile/gender-icon.svg";
import phoneIcon from "../../assets/images/profile/phone-icon.svg";
import addressIcon from "../../assets/images/profile/address-icon.svg";

import profilePhoto from "../../assets/images/profile/profile-photo.svg";

import ChangePasswordModal from "../ChangePasswordModal";
import { useState } from "react";

const ProfileContent = ({ state }) => {
  const [changePasswordModalShow, setChangePasswordModalShow] = useState(false);

  console.log(state);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoSection}>
          <h1 className={styles.infoSectionTitle}>Personal Info</h1>

          <InfoWrapper
            icon={nameIcon}
            infoTitle="Fullname"
            infoValue={state.user.fullname}
          />
          <InfoWrapper
            icon={mailIcon}
            infoTitle="Email"
            infoValue={state.user.email}
          />

          <div className={styles.infoWrapper}>
            <div className={styles.iconWrapper}>
              <img src={passwordIcon} alt="name" />
            </div>
            <div className={styles.textWrapper}>
              <p
                className={styles.changePassword}
                onClick={() => {
                  setChangePasswordModalShow(true);
                }}
              >
                Change Password
              </p>
              <p className={styles.infoTitle}>Password</p>
            </div>
          </div>

          <InfoWrapper
            icon={statusIcon}
            infoTitle="Status"
            infoValue={state.user.status === "user" ? "Tenant" : "Owner"}
          />
          <InfoWrapper
            icon={genderIcon}
            infoTitle="Gender"
            infoValue={state.user.gender}
          />
          <InfoWrapper
            icon={phoneIcon}
            infoTitle="Phone number"
            infoValue={state.user.phone}
          />
          <InfoWrapper
            icon={addressIcon}
            infoTitle="Address"
            infoValue={state.user.address}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.profileImage}
            src={profilePhoto}
            alt="profile"
          />

          <label className={styles.changePhotoButton}>
            <input type="file" className={styles.fileInput} />
            <span className={styles.fileInputText}>Change Photo Profile</span>
          </label>
        </div>
      </div>
      <ChangePasswordModal
        showModal={changePasswordModalShow}
        onHide={() => {
          setChangePasswordModalShow(false);
        }}
      />
    </div>
  );
};

const InfoWrapper = ({ icon, infoValue, infoTitle }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt="name" />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.infoValue}>{infoValue}</p>
        <p className={styles.infoTitle}>{infoTitle}</p>
      </div>
    </div>
  );
};

export default ProfileContent;
