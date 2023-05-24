import RestaurantCard from "./RestaurantCard";
// import "./App.css";
import { resObj } from "../Utils/Constant";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resObj);
  return (
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
          {" "}
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
