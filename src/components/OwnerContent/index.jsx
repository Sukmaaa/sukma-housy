import { useState } from "react";
import ActionModal from "../ActionModal";
import searchIcon from "../../assets/images/icon/search-icon.svg";
import styles from "./OwnerContent.module.css";

const OwnerContent = () => {
  const [actionModalShow, setActionModalShow] = useState(false);
  const orderLocalStorage = JSON.parse(localStorage.getItem("order"));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Income Transaction</h1>
      <table className={styles.incomeTable}>
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Type of Rent</th>
            <th>Bukti Transfer</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orderLocalStorage.length > 0 ? (
            orderLocalStorage.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{order.user.username}</td>
                  <td>{order.orderDuration}</td>
                  <td>bukti.png</td>
                  {order.status === "Waiting Approve" && (
                    <td className={styles.pending}>Pending</td>
                  )}
                  <td
                    onClick={() => {
                      setActionModalShow(true);
                    }}
                  >
                    <img className={styles.searchIcon} src={searchIcon} alt="" />
                  </td>
                  <ActionModal
                    showModal={actionModalShow}
                    orderDetail={order}
                    onHide={() => {
                      setActionModalShow(false);
                    }}
                    orderIndex={index}
                  />
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                Belum ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OwnerContent;
