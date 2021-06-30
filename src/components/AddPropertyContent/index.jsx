import styles from "./AddPropertyContent.module.css";

const AddPropertyContent = () => {
  const handleSave = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form className={styles.formProperty}>
      <h1 className={styles.title}>Add Property</h1>
        <label htmlFor="name" className={styles.inputLabel}>
          Property Name
        </label>
        <input type="text" className={styles.inputText} />

        <label htmlFor="city" className={styles.inputLabel}>
          City
        </label>
        <input type="text" className={styles.inputText} />

        <label htmlFor="address" className={styles.inputLabel}>
          Address
        </label>
        <textarea className={styles.inputTextarea}></textarea>

        <label htmlFor="amenities" className={styles.inputLabel}>
          Amenities
        </label>
        <div className={styles.amenitiesWrapper}>
          <div>
            <input type="checkbox" id="Furnished" value="Furnished" />
            <label htmlFor="Furnished">Furnished</label>
          </div>
          <div>
            <input type="checkbox" id="PetAllowed" value="PetAllowed" />
            <label htmlFor="PetAllowed">Pet Allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="SharedAccomodation"
              value="SharedAccomodation"
            />
            <label htmlFor="SharedAccomodation">Shared Accomodation</label>
          </div>
        </div>

        <label htmlFor="bedroom" className={styles.inputLabel}>
          Bedroom
        </label>
        <select name="bedroom" id="bedroom">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <label htmlFor="bathroom" className={styles.inputLabel}>
          Bathroom
        </label>
        <select name="bathroom" id="bathroom">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPropertyContent;
