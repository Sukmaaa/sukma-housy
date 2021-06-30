import styles from "./Content.module.css";
import HouseCard from "../HouseCard";

const Content = ({ houses, housesDuration }) => {
  let priceDuration = "";

  if (houses.length > 0) {
    return (
      <div className={styles.content}>
        {houses.map((house, index) => {
          switch (housesDuration) {
            case "Day":
              priceDuration = house.price.day.value;
              break;
            case "Month":
              priceDuration = house.price.month.value;
              break;
            default:
              priceDuration = house.price.year.value;
          }

          return (
            <HouseCard
              key={index}
              id={house.id}
              houseImage={house.image}
              price={`Rp. ${priceDuration} / ${housesDuration}`}
              houseSpec={`${house.spec.bedroom} Beds, ${house.spec.bathroom} Baths, ${house.spec.sqft}sqft`}
              houseAddress={house.address}
              amenities={house.amenities}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.content}>
        <div>empty</div>
      </div>
    );
  }
};

export default Content;
