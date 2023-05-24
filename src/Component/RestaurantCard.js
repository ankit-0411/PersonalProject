import React from "react";
// import "./App.css";
import { IMG_URl } from "../Utils/Constant";

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    resData.data;

  console.log("all", cuisines);

  let cusine = cuisines.slice(-3);
  console.log("cuisines===>", cusine);

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={IMG_URl + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h6>{avgRating + "⭐️"}</h6>
      <h5>{cusine.join()}</h5>
      <h6>₹{costForTwo / 100} For Two</h6>
    </div>
  );
};

export default RestaurantCard;
