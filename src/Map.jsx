import React, { useState } from "react";

const Map = () => {
  const [selectedValues, setSelectedValues] = useState(new Set());
  const [imageUrl, setImageUrl] = useState("map-pin.jpg");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedSelectedValues = new Set(selectedValues);
    if (updatedSelectedValues.has(value)) {
      updatedSelectedValues.delete(value);
    } else {
      updatedSelectedValues.add(value);
    }
    setSelectedValues(updatedSelectedValues);
  };

  const data = [
    {
      url: "maps/map1.jpg",
      stops: new Set(["lohit", "kv", "core5", "brahmaputra", "barak"]),
    },
    {
      url: "maps/map2.jpg",
      stops: new Set(["main", "kapili", "disang", "kv", "core3"]),
    },
    {
      url: "maps/map3.jpg",
      stops: new Set(["main", "kameng", "core3", "kv", "guest"]),
    },
    {
      url: "maps/map4.jpg",
      stops: new Set(["main", "core3", "siang", "kv", "sac"]),
    },
    {
      url: "maps/map5.jpg",
      stops: new Set(["main", "khokha", "osac", "siang", "kv"]),
    },
  ];

  const handleSubmit = () => {
    setImageUrl("loading");
    const isMatched = data.some((obj) =>
      [...obj.stops].every((stop) => selectedValues.has(stop))
    );
    console.log(isMatched);
    if (isMatched) {
      const matchedObject = data.find((obj) =>
        [...obj.stops].every((stop) => selectedValues.has(stop))
      );
      setTimeout(() => {
        setImageUrl(matchedObject ? matchedObject.url : "bicycle.jpg");
      }, 2000);
    } else {
      setTimeout(() => {
        setImageUrl("bicycle.jpg");
      }, 2000);
    }
    setSelectedValues(new Set());
  };
  return (
    <div className="map-container">
      <div className="select-container">
        <select
          name="input1"
          value={selectedValues.input1}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Place 1
          </option>
          <option value="lohit">LOHIT</option>
          <option value="brahmaputra">BRAHMAPUTRA</option>
          <option value="siang">SIANG</option>
          <option value="kameng">KAMENG</option>
          <option value="umium">UMIUM</option>
          <option value="barak">BARAK</option>
          <option value="kapili">KAPILI</option>
          <option value="manas">MANAS</option>
          <option value="dihing">DIHING</option>
          <option value="disang">DISANG</option>
          <option value="gaurang">GAURANG</option>
          <option value="dhansiri">DHANSHIRI</option>
          <option value="subhansiri">SUBHANSIRI</option>
          <option value="sac">NEW SAC</option>
          <option value="osac">OLD SAC</option>
          <option value="hospital">IITG HOSPITAL</option>
          <option value="guest">OLD GUEST HOUSE</option>
          <option value="library">IITG LIBRARY</option>
          <option value="research">RESEARCH BUILDING</option>
          <option value="lecture">LECTURE HALL</option>
          <option value="core5">ACADEMIC COMPLEX</option>
          <option value="core3">CORE 3</option>
          <option value="kv">KV GATE</option>
          <option value="khokha">FACULTY QUARTERS</option>
          <option value="market">MARKET COMPLEX</option>
          <option value="main">IITG MAIN GATE</option>
        </select>
        <select
          name="input2"
          value={selectedValues.input2}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Place 2
          </option>
          <option value="lohit">LOHIT</option>
          <option value="brahmaputra">BRAHMAPUTRA</option>
          <option value="siang">SIANG</option>
          <option value="kameng">KAMENG</option>
          <option value="umium">UMIUM</option>
          <option value="barak">BARAK</option>
          <option value="kapili">KAPILI</option>
          <option value="manas">MANAS</option>
          <option value="dihing">DIHING</option>
          <option value="disang">DISANG</option>
          <option value="gaurang">GAURANG</option>
          <option value="dhansiri">DHANSHIRI</option>
          <option value="subhansiri">SUBHANSIRI</option>
          <option value="hospital">IITG HOSPITAL</option>
          <option value="guest">OLD GUEST HOUSE</option>
          <option value="osac">OLD SAC</option>
          <option value="sac">NEW SAC</option>
          <option value="library">IITG LIBRARY</option>
          <option value="research">RESEARCH BUILDING</option>
          <option value="lecture">LECTURE HALL</option>
          <option value="core5">ACADEMIC COMPLEX</option>
          <option value="core3">CORE 3</option>
          <option value="kv">KV GATE</option>
          <option value="khokha">FACULTY QUARTERS</option>
          <option value="market">MARKET COMPLEX</option>
          <option value="main">IITG MAIN GATE</option>
        </select>
        <select
          name="input3"
          value={selectedValues.input3}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Place 3
          </option>
          <option value="lohit">LOHIT</option>
          <option value="brahmaputra">BRAHMAPUTRA</option>
          <option value="siang">SIANG</option>
          <option value="kameng">KAMENG</option>
          <option value="umium">UMIUM</option>
          <option value="barak">BARAK</option>
          <option value="kapili">KAPILI</option>
          <option value="manas">MANAS</option>
          <option value="dihing">DIHING</option>
          <option value="disang">DISANG</option>
          <option value="gaurang">GAURANG</option>
          <option value="dhansiri">DHANSHIRI</option>
          <option value="subhansiri">SUBHANSIRI</option>
          <option value="hospital">IITG HOSPITAL</option>
          <option value="guest">OLD GUEST HOUSE</option>
          <option value="osac">OLD SAC</option>
          <option value="sac">NEW SAC</option>
          <option value="library">IITG LIBRARY</option>
          <option value="research">RESEARCH BUILDING</option>
          <option value="lecture">LECTURE HALL</option>
          <option value="core5">ACADEMIC COMPLEX</option>
          <option value="core3">CORE 3</option>
          <option value="kv">KV GATE</option>
          <option value="khokha">FACULTY QUARTERS</option>
          <option value="market">MARKET COMPLEX</option>
          <option value="main">IITG MAIN GATE</option>
        </select>
        <select
          name="input4"
          value={selectedValues.input4}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Place 4
          </option>
          <option value="lohit">LOHIT</option>
          <option value="brahmaputra">BRAHMAPUTRA</option>
          <option value="siang">SIANG</option>
          <option value="kameng">KAMENG</option>
          <option value="umium">UMIUM</option>
          <option value="barak">BARAK</option>
          <option value="kapili">KAPILI</option>
          <option value="manas">MANAS</option>
          <option value="dihing">DIHING</option>
          <option value="disang">DISANG</option>
          <option value="gaurang">GAURANG</option>
          <option value="dhansiri">DHANSHIRI</option>
          <option value="subhansiri">SUBHANSIRI</option>
          <option value="hospital">IITG HOSPITAL</option>
          <option value="osac">OLD SAC</option>
          <option value="sac">NEW SAC</option>
          <option value="guest">OLD GUEST HOUSE</option>
          <option value="library">IITG LIBRARY</option>
          <option value="research">RESEARCH BUILDING</option>
          <option value="lecture">LECTURE HALL</option>
          <option value="core5">ACADEMIC COMPLEX</option>
          <option value="core3">CORE 3</option>
          <option value="kv">KV GATE</option>
          <option value="khokha">FACULTY QUARTERS</option>
          <option value="market">MARKET COMPLEX</option>
          <option value="main">IITG MAIN GATE</option>
        </select>
        <select
          name="input5"
          value={selectedValues.input5}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Place 5
          </option>
          <option value="lohit">LOHIT</option>
          <option value="brahmaputra">BRAHMAPUTRA</option>
          <option value="siang">SIANG</option>
          <option value="kameng">KAMENG</option>
          <option value="umium">UMIUM</option>
          <option value="barak">BARAK</option>
          <option value="kapili">KAPILI</option>
          <option value="manas">MANAS</option>
          <option value="dihing">DIHING</option>
          <option value="disang">DISANG</option>
          <option value="gaurang">GAURANG</option>
          <option value="dhansiri">DHANSHIRI</option>
          <option value="subhansiri">SUBHANSIRI</option>
          <option value="hospital">IITG HOSPITAL</option>
          <option value="guest">OLD GUEST HOUSE</option>
          <option value="osac">OLD SAC</option>
          <option value="sac">NEW SAC</option>
          <option value="library">IITG LIBRARY</option>
          <option value="research">RESEARCH BUILDING</option>
          <option value="lecture">LECTURE HALL</option>
          <option value="core5">ACADEMIC COMPLEX</option>
          <option value="core3">CORE 3</option>
          <option value="kv">KV GATE</option>
          <option value="khokha">FACULTY GATE</option>
          <option value="market">MARKET COMPLEX</option>
          <option value="main">IITG MAIN GATE</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="img">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Map;
