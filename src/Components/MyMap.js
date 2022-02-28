import '../App.css'
import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Button, Input } from "@mui/material";
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

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "ind" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function MyMap() {
  const [query, setQuery] = useState("");

  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCneXQewu90VNJTWxGkX8zJFKM_9iYud3E&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
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
      </div>
  );
}

export default MyMap;
