import styles from "./HouseContent.module.css";

import bathroomIcon from "../../assets/images/icon/bathroom-icon.svg";
import bedroomIcon from "../../assets/images/icon/bedroom-icon.svg";

import houseTwo from "../../assets/images/houses/house-2.svg";
import houseThree from "../../assets/images/houses/house-3.svg";
import houseFour from "../../assets/images/houses/house-4.svg";
import OrderModal from "../OrderModal";
import { useState } from "react";
import { useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import { UserContext } from "../../contexts/UserContext";

const HouseContent = ({ house }) => {
  const [orderModalShow, setOrderModalShow] = useState(false);
  const { filterState } = useContext(FilterContext);
  const { state } = useContext(UserContext);

  console.log(state.user.name);
  // const handleBook = () => {
  //   if(!state.user){
  //     set
  //   }
  //   setOrderModalShow(true);
  // };

  let price = "";

  if (filterState.filter.duration === "Day") {
    price = house.price.day.value;
  } else if (filterState.filter.duration === "Month") {
    price = house.price.month.value;
  } else {
    price = house.price.year.value;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.firstImageWrapper}>
          <img className={styles.firstImage} src={house.image} alt="first" />
        </div>

        <div className={styles.secondImageWrapper}>
          <img className={styles.secondImage} src={houseTwo} alt="first" />
        </div>

        <div className={styles.thirdImageWrapper}>
          <img className={styles.thirdImage} src={houseThree} alt="first" />
        </div>

        <div className={styles.fourthImageWrapper}>
          <img className={styles.fourthImage} src={houseFour} alt="first" />
        </div>

        <div className={styles.secondImage}></div>
        <div className={styles.thirdImage}></div>
        <div className={styles.fourthImage}></div>
      </div>
      <div className={styles.houseContentWrapper}>
        <h1 className={styles.name}>{`House ${house.name}`}</h1>
        <div className={styles.subtitle}>
          <div className={styles.subtitleLeft}>
            <h3
              className={styles.price}
            >{`Rp. ${price} / ${filterState.filter.duration}`}</h3>

            <p className={styles.address}>
              {house.address}
              {/* Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
              Tangerang Selatan */}
            </p>
          </div>
          <div className={styles.subtitleRight}>
            <div className={styles.spec}>
              <p className={styles.specTitle}>Bedrooms</p>
              <div className={styles.specWrapper}>
                <p className={styles.specText}>{house.spec.bedroom}</p>
                <img
                  className={styles.specIcon}
                  src={bedroomIcon}
                  alt="bedroom icon"
                />
              </div>
            </div>

            <div className={styles.spec}>
              <p className={styles.specTitle}>Bathrooms</p>
              <div className={styles.specWrapper}>
                <p className={styles.specText}>{house.spec.bathroom}</p>

                <img
                  className={styles.specIcon}
                  src={bathroomIcon}
                  alt="bathroom icon"
                />
              </div>
            </div>

            <div className={styles.spec}>
              <p className={styles.specTitle}>Area</p>
              <p>{`${house.spec.sqft}  ft`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <h3 className={styles.descTitle}>Description</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fuga consequatur atque vero pariatur placeat, deleniti excepturi quasi
          impedit perspiciatis velit iure quos dolor numquam voluptatibus qui
          dicta. Laboriosam, soluta! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Non asperiores amet autem impedit, vero iure rem
          corrupti neque aliquam quaerat recusandae necessitatibus. Quo,
          laboriosam cumque quos deleniti dolor odio optio. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Ullam aperiam aspernatur, unde
          necessitatibus laboriosam neque ea voluptates asperiores officia odio.
          Consequatur quia exercitationem accusamus asperiores deleniti hic
          officiis temporibus? Porro.
        </p>
      </div>

      <div className={styles.book}>
        {state.user.name === "" ? (
          <button className={styles.bookguest}>Book Now</button>
        ) : (
          <button
            className={styles.booknow}
            onClick={() => {
              setOrderModalShow(true);
            }}
          >
            Book Now
          </button>
        )}
      </div>
      <OrderModal
        house={house}
        showModal={orderModalShow}
        onHide={() => {
          setOrderModalShow(false);
        }}
        duration={filterState.filter.duration}
        price={price}
      />
    </div>
  );
};

export default HouseContent;
