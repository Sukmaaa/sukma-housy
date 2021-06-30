import styles from "./Sidebar.module.css";

import DateInput from "../../components/DateInput";
import { useContext, useEffect, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
// import { useContext } from "react";
// import { UserContext } from "../../Contexts/UserContext";

const Sidebar = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);

  const [duration, setDuration] = useState("Day");
  const [bedroom, setBedroom] = useState("1");
  const [bathroom, setBathroom] = useState("1");
  const [budget, setBudget] = useState("");
  const [amenities, setAmenities] = useState([
    {
      title: "Furnished",
      value: false,
    },
    {
      title: "Pet Allowed",
      value: false,
    },
    {
      title: "Shared Accomodation",
      value: false,
    },
  ]);

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleAmenities = (e) => {
    const newAmenities = [...amenities];

    newAmenities.forEach((amenity) => {
      if (amenity.title === e.target.value) {
        amenity.value = !amenity.value;
      }
    });

    setAmenities(newAmenities);
  };

  // console.log(filterState.filter);

  const handleBedroom = (e) => {
    setBedroom(e.target.value);
  };

  const handleBathroom = (e) => {
    setBathroom(e.target.value);
  };

  const handleBudget = (e) => {
    setBudget(e.target.value);
  };

  // console.log(filterState);

  const handleFilter = () => {
    filterDispatch({
      type: "FILTERIN",
      payload: {
        filter: {
          duration,
          bedroom,
          bathroom,
          furnished: amenities[0].value,
          petAllowed: amenities[1].value,
          sharedAccomodation: amenities[2].value,
          budget,
        },
        isFilter: true,
      },
    });
  };

  // const handleFilterOut = () => {
  //   setDuration("Day");
  //   setBedroom("1");
  //   setBathroom("1");
  //   setBudget("");
  //   setAmenities([
  //     {
  //       title: "Furnished",
  //       value: false,
  //     },
  //     {
  //       title: "Pet Allowed",
  //       value: false,
  //     },
  //     {
  //       title: "Shared Accomodation",
  //       value: false,
  //     },
  //   ]);
  //   filterDispatch({
  //     type: "FILTEROUT",
  //   });
  // };

  useEffect(() => {
    if (filterState.isFilter) {
      // console.log("cocok");
      setDuration(filterState.filter.duration);
      setBedroom(filterState.filter.bedroom);
      setBathroom(filterState.filter.bathroom);
      setBudget(filterState.filter.budget);
      setAmenities([
        {
          title: "Furnished",
          value: filterState.filter.furnished,
        },
        {
          title: "Pet Allowed",
          value: filterState.filter.petAllowed,
        },
        {
          title: "Shared Accomodation",
          value: filterState.filter.sharedAccomodation,
        },
      ]);
    }
  }, [filterState]);

  // console.log(filterState);

  return (
    <div className={styles.sidebar}>
      <div className={styles.duration}>
        <p className={styles.durationTitle}>Type of Rent</p>
        <div className={styles.durationOptions} onChange={handleDuration}>
          <Duration id="day" value="Day" duration={duration} />
          <Duration id="month" value="Month" duration={duration} />
          <Duration id="year" value="Year" duration={duration} />
        </div>
      </div>
      <div className={styles.date}>
        <p className={styles.dateTitle}>Date</p>
        <DateInput />
      </div>
      <div className={styles.room}>
        <p className={styles.roomTitle}>Property room</p>
        <p className={styles.roomSubTitle}>Bedroom</p>
        <div className={styles.roomOptions} onChange={handleBedroom}>
          <Room id="bedroom1" value="1" room={bedroom} />
          <Room id="bedroom2" value="2" room={bedroom} />
          <Room id="bedroom3" value="3" room={bedroom} />
          <Room id="bedroom4" value="4" room={bedroom} />
          <Room id="bedroom5plus" value="5+" room={bedroom} />
        </div>

        <p className={styles.roomSubTitle}>Bathroom</p>
        <div className={styles.roomOptions} onChange={handleBathroom}>
          <Room id="bathroom1" value="1" room={bathroom} />
          <Room id="bathroom2" value="2" room={bathroom} />
          <Room id="bathroom3" value="3" room={bathroom} />
          <Room id="bathroom4" value="4" room={bathroom} />
          <Room id="bathroom5plus" value="5+" room={bathroom} />
        </div>
      </div>

      <div className={styles.amenities}>
        <p className={styles.amenitiesTitle}>Amenities</p>
        <div className={styles.amenitiesOptions} onChange={handleAmenities}>
          {amenities.map((amenity, index) => {
            return (
              <AmenitiesOption
                key={index}
                value={amenity.title}
                children={amenity.title}
                isChecked={amenity.value}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.budget}>
        <p className={styles.budgetTitle}>Budget</p>
        <form className={styles.budgetForm} action="">
          <span className={styles.budgetSpan}>Less than IDR.</span>
          <input
            type="number"
            min="0"
            step="any"
            value={budget}
            onChange={handleBudget}
          />
        </form>
      </div>

      <div className={styles.apply}>
        {/* <button className={styles.filterButton} onClick={handleFilterOut}>
          Clear Filter
        </button> */}
        <button className={styles.applyButton} onClick={handleFilter}>
          APPLY
        </button>
      </div>
    </div>
  );
};

const Duration = ({ id, value, duration }) => {
  return (
    <div
      className={styles.durationOption}
      style={
        duration === value ? { backgroundColor: "#5a57ab", color: "white" } : {}
      }
    >
      <input
        className={styles.durationRadio}
        type="radio"
        id={id}
        name="duration"
        value={value}
      />
      <label className={styles.durationLabel} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

const Room = ({ id, value, room }) => {
  return (
    <div
      className={styles.roomOption}
      style={
        room === value ? { backgroundColor: "#5a57ab", color: "white" } : {}
      }
    >
      <input
        className={styles.roomRadio}
        type="radio"
        id={id}
        name="room"
        value={value}
      />
      <label className={styles.roomLabel} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

const AmenitiesOption = ({ value, children, isChecked }) => {
  return (
    <div className={styles.amenitiesOption}>
      <label className={styles.amenitiesLabel} htmlFor={value}>
        {children}
      </label>
      <input
        className={styles.amenitiesCheckBox}
        type="checkbox"
        value={value}
        id={value}
        checked={isChecked}
        onChange={() => {}}
      />
    </div>
  );
};

export default Sidebar;
