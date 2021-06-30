import styles from "./BookingCard.module.css";

import brandIcon from "../../assets/images/icon/brand-icon.svg";

import ellipseStart from "../../assets/images/icon/ellipse-start.svg";
import verticalLine from "../../assets/images/icon/line-icon.svg";
import ellipseEnd from "../../assets/images/icon/ellipse-end.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const BookingCard = ({
  button,
  orderDetail,
  invoice,
  marginBottom,
}) => {
  const { status, price, orderDuration, orderTime, checkinDate, checkoutDate } =
    orderDetail;
  const { fullname, gender, phone } = orderDetail.user;
  const { name: houseName, address, amenities } = orderDetail.house;

  const getDayString = (time) => {
    const dayNumber = new Date(time).getDay();
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return day[dayNumber];
  };

  const getMonthString = (time) => {
    const monthNumber = new Date(time).getMonth();

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Desember",
    ];

    return month[monthNumber];
  };

  const getFullYear = (time) => {
    return new Date(time).getFullYear();
  };
  const getDate = (time) => {
    return new Date(time).getDate();
  };

  //   <BookingCard
  //   button
  //   key={index}
  //   orderDay={convertDayToString(
  //     new Date(booking.orderTime).getDay()
  //   )}
  //   orderDate={new Date(booking.orderTime).getDate()}
  //   orderMonth={convertMonthToString(
  //     new Date(booking.orderTime).getMonth()
  //   )}
  //   orderYear={new Date(booking.orderTime).getFullYear()}
  //   houseName={booking.house.name}
  //   checkinDate={new Date(booking.checkinDate).getDate()}
  //   checkinMonth={convertMonthToString(
  //     new Date(booking.checkinDate).getMonth()
  //   )}
  //   checkinYear={new Date(booking.checkinDate).getFullYear()}
  //   checkoutDate={new Date(booking.checkoutDate).getDate()}
  //   checkoutMonth={convertMonthToString(
  //     new Date(booking.checkoutDate).getMonth()
  //   )}
  //   checkoutYear={new Date(booking.checkoutDate).getFullYear()}
  //   orderDetail={booking}
  // />

  // const {state, dispatch} = useContext(UserContext)
  const handlePay = () => {
    if (!localStorage.getItem("order")) {
      localStorage.setItem("order", JSON.stringify([]));
    }

    orderDetail.status = "Waiting Approve";
    const orderLocalStorage = JSON.parse(localStorage.getItem("order"));
    orderLocalStorage.push(orderDetail);
    localStorage.setItem("order", JSON.stringify(orderLocalStorage));

    const userSessionStorage = JSON.parse(sessionStorage.getItem("user"));

    const newBooking = userSessionStorage.booking.filter((item) => {
      if (item.idOrder === orderDetail.idOrder) {
        item.status = "Waiting Approve";

        return true;
      }

      return true;
    });

    // const newBooking = userSessionStorage.booking.filter((item) => {
    //   console.log(item.idOrder, orderDetail.idOrder);
    //   if (item.idOrder === orderDetail.idOrder) {
    //     return false;
    //   }
    //   return true;
    // });
    // console.log(newBooking);
    userSessionStorage.booking = newBooking;
    sessionStorage.setItem("user", JSON.stringify(userSessionStorage));
    window.location.reload();
  };

  return (
    <div
      className={styles.bookingCardWrapper}
      style={{
        minHeight: button ? "482px" : "410px",
        marginBottom: !marginBottom && "0px",
      }}
    >
      <div
        className={styles.bookingCard}
        style={{ marginBottom: button ? "22px" : 0 }}
      >
        <div className={styles.bookingCardHeader}>
          <img src={brandIcon} alt="" />
          <div className={styles.headerTitle}>
            {invoice ? (
              <h2 className={styles.bookingTitle}>Invoice</h2>
            ) : (
              <h2 className={styles.bookingTitle}>Booking</h2>
            )}
            <p className={styles.bookingDate}>
              <span>{getDayString(orderTime)}</span>
              {`, ${getDate(orderTime)} ${getMonthString(
                orderTime
              )} ${getFullYear(orderTime)}`}
            </p>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.cardContentName}>
            <h2>{`House ${houseName}`}</h2>
            <p className={styles.houseAddress}>{address}</p>
            <div className={styles.bookingStatus}>
              {status === "Approved" ? (
                <div className={styles.approveStatus}>Approve</div>
              ) : status === "Cancel" ? (
                <div className={styles.cancelStatus}>Cancel</div>
              ) : status === "Waiting Approve" ? (
                <div className={styles.waitingStatus}>Waiting Approve</div>
              ) : (
                <div className={styles.waitingPaymentStatus}>
                  Waiting Payment
                </div>
              )}
            </div>
          </div>

          <div className={styles.cardContentDate}>
            <div className={styles.iconWrapper}>
              <img src={ellipseStart} alt="ellipse start" />
              <img src={verticalLine} alt="vertical line" />
              <img src={ellipseEnd} alt="ellipse end" />
            </div>

            <div className={styles.dateWrapper}>
              <div className={styles.checkinWrapper}>
                <h3>Check-in</h3>
                <p>{`${getDate(checkinDate)} ${getMonthString(
                  checkoutDate
                )} ${getFullYear(checkoutDate)}`}</p>
              </div>

              <div className={styles.checkoutWrapper}>
                <h3>Check-out</h3>
                <p>{`${getDate(checkoutDate)} ${getMonthString(
                  checkoutDate
                )} ${getFullYear(checkoutDate)}`}</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContentVariant}>
            <div className={styles.amenities}>
              <h3>Amenities</h3>
              <div>
                <p>{amenities[0].value && "Furnished"}</p>
                <p>{amenities[1].value && "Pet Allowed"}</p>
                <p>{amenities[2].value && "Shared Accomodation"}</p>
              </div>
            </div>

            <div className={styles.duration}>
              <h3>Type of Rent</h3>
              <p>{orderDuration}</p>
            </div>
          </div>

          <div className={styles.cardContentProof}>
            <div className={styles.imageWrapper}>
              <img src="" alt="" />
              {status === "Approved" ? "barcode" : "input file"}
            </div>
            {status === "Waiting Payment" ? (
              <p>Upload payment proof</p>
            ) : status === "Cancel" ? null : null}
          </div>
        </div>

        <div className={styles.cardTable}>
          <div className={styles.cardTableLeft}>
            <div className={styles.tableCol}>
              <p className={styles.tableHeader}>No</p>
              <p className={styles.tableContent}>1</p>
            </div>

            <div className={styles.tableColLong}>
              <p className={styles.tableHeader}>Fullname</p>
              <p className={styles.tableContent}>{fullname}</p>
            </div>

            <div className={styles.tableCol}>
              <p className={styles.tableHeader}>Gender</p>
              <p className={styles.tableContent}>{gender}</p>
            </div>

            <div className={styles.tableColLong}>
              <p className={styles.tableHeader}>Phone</p>
              <p className={styles.tableContent}>{phone}</p>
            </div>
          </div>

          <div className={styles.cardTableRight}>
            <div className={styles.totalTitle}>
              <p className={styles.tableHeader}>&nbsp;</p>
              <p className={styles.totalText}>Long time rent</p>
              <p className={styles.totalText}>Total</p>
            </div>
            <div className={styles.totalDivider}>
              <p className={styles.tableHeader}>&nbsp;</p>
              <p className={styles.totalText}>:</p>
              <p className={styles.totalText}>:</p>
            </div>
            <div className={styles.totalValue}>
              <p className={styles.tableHeader}>&nbsp;</p>
              <p className={styles.totalText}>{`1 ${orderDuration}`}</p>
              <p
                className={styles.totalPrice}
                style={{
                  color:
                    status === "Approved"
                      ? "rgb(10, 207, 131)"
                      : "rgb(255, 7, 66)",
                }}
              >
                {price}
              </p>
            </div>
          </div>
        </div>
        <hr className={styles.hrOne} />
        <hr className={styles.hrTwo} />
      </div>
      {button && status === "Waiting Payment" && (
        <div className={styles.buttonWrapper}>
          <button className={styles.buttonPay} onClick={handlePay}>
            Pay
          </button>
        </div>
      )}
    </div>
  );
};

BookingCard.defaultProps = {
  marginBottom: true,
  orderDetail: {
    idOrder: 0,
    status: "Waiting Payment",
    orderDuration: "Year",
    price: 0,
    checkinDate: new Date(),
    checkoutDate: new Date(),
    house: {
      id: 18,
      name: "Sea",
      image: null,
      spec: {
        bedroom: 2,
        bathroom: 7,
        sqft: "2,400",
      },
      address: "Jakarta Barat, Tambora",
      amenities: [
        {
          title: "Furnished",
          value: false,
        },
        {
          title: "Pet Allowed",
          value: true,
        },
        {
          title: "Shared Accomodation",
          value: false,
        },
      ],
      price: {
        day: {
          title: "Day",
          value: "17.000",
        },
        month: {
          title: "Month",
          value: "500.000",
        },
        year: {
          title: "Year",
          value: "6.000.000",
        },
      },
    },
    orderTime: new Date(),
    user: {
      id: 0,
      username: "username",
      fullname: "fullname",
      gender: "gender",
      phone: "081234567890",
    },
  },
};

export default BookingCard;
