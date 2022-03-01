import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";


let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
  //   document.querySelector('.pac-target-input').value = 'CB'
};

function handleScriptLoad(updateQuery, updateQuery2, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "ind" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () => {
    handlePlaceSelect(updateQuery);
    handlePlaceSelect2(updateQuery2);
  });
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

async function handlePlaceSelect2(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function MyMap() {


  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");

  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
      () => handleScriptLoad(setQuery, setQuery2, autoCompleteRef)
    );

  }, []);

  return (
    <div style={{ margin: "5%" }}>
      <TextField
        inputRef={autoCompleteRef}
        ref={autoComplete}
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        autoComplete="off"
        id="outlined-basic"
        label="Enter Place"
        placeholder=""
        variant="outlined"
      />
      <br />
      <br />
      <br />
      <TextField
        inputRef={autoCompleteRef}
        ref={autoComplete}
        onChange={(event) => setQuery2(event.target.value)}
        value={query2}
        autoComplete="off"
        id="outlined-basic"
        label="Enter Place"
        placeholder=""
        variant="outlined"
      />
    </div>
  );
}

export default MyMap;
