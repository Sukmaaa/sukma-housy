import styles from "./AmenityCard.module.css";

const AmenityCard = ({ amenity }) => {
  return (
    <div className={styles.amenityCard}>
      <p className={styles.houseAmenity}>{amenity}</p>
    </div>
  );
};

export default AmenityCard;
