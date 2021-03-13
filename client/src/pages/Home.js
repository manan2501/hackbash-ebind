import { Button, Card } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Search";
import { useStyles } from "react-styles-hook";
import { Select } from "antd";
import SymptomTag from "../components/SymptomTag";

const data = [
  "BP",
  "Sugar",
  "Healthy hu mai",
  "Cancer",
  "Aids",
  "TB",
  "Ebolo",
  "Storke",
  "Heart Attack",
  "Lung Cancer",
  "Alzheimer",
  "Als",
  "Death",
];

const Home = () => {
  const [selectedSymptoms, setSelectedSymptom] = useState([]);
  const [value, setValue] = useState(undefined);
  const onChange = (value) => {
    if (value && selectedSymptoms.indexOf(value) === -1) {
      setValue(value);
      setSelectedSymptom([...selectedSymptoms, value]);
    }
  };

  const removeSymptom = (e, tag) => {
    e.preventDefault();
    setSelectedSymptom(selectedSymptoms.filter((item) => tag !== item));
  };

  const styles = useStyles({
    search: {
      width: 600,
    },
    tagContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "5em",
    },
  });

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.tagContainer}>
        <Card hoverable>
          <div style={styles.search}>
            <SearchBar onChange={onChange} value={value} data={data} />
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              width: 600,
            }}
          >
            {selectedSymptoms.map((item) => (
              <div style={{ margin: 5 }}>
                <SymptomTag symptom={item} removeTag={removeSymptom} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
