import RestaurantCard from "./RestaurantCard";
// import "./App.css";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json==>", json);
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search_input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search_button"
            onClick={() => {
              //filtered the resutaurant data and show on UI
              console.log("search", searchText);
              // eslint-disable-next-line array-callback-return
              const filteredData = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredData);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestauList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setFilterRestaurant(filteredRestauList);
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
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
