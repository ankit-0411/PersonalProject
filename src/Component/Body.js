import RestaurantCard from "./RestaurantCard";
// import "./App.css";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json==>", json);
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestauList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filteredRestauList);
          }}
        >
          Top Rated Reataurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
          resData={resObj[8]}
          
        />
        <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} />
        
        <RestaurantCard resData={resObj[4]} />
        <RestaurantCard resData={resObj[5]} />
        <RestaurantCard resData={resObj[7]} /> */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
