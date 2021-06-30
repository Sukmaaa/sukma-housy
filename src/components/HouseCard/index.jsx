import { Link } from "react-router-dom";
import AmenityCard from "../AmenityCard";
import styles from "./HouseCard.module.css";

const HouseCard = ({
  id,
  houseImage,
  price,
  houseSpec,
  houseAddress,
  amenities,
}) => {
  return (
    <Link to={`/house-detail/${id}`} className={styles.link}>
      <div className={styles.houseCard}>
        <img
          className={styles.houseImg}
          src={houseImage}
          alt="house"
          width="250px"
        />
        <p className={styles.housePrice}>{price}</p>
        <p className={styles.houseSpec}>{houseSpec}</p>
        <p className={styles.houseAddress}>{houseAddress}</p>
        <div className={styles.amenities}>
          {amenities.map((amenity, index) => {
            return (
              amenity.value && (
                <AmenityCard key={index} amenity={amenity.title} />
              )
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;
