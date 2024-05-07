import RestrauntCard from "./RestCard";
import { RestrauList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState(""); //return array /  variable to be sync  so used state
  const [filterRestauraunts, setFilterRestauraunts] = useState([]);
  const [allRestauraunts, setAllRestauraunts] = useState([]);

  function filterData(searchText, restauraunts) {
    const filteredData = restauraunts.filter((restaurant) => {
      return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    return filteredData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);
  // empty dependency array => calls once after render
  // dep array [searchText] => once after initioal render + everytime after render (my searchText changes)

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestauraunts(json?.info?.cards[2]?.data?.data?.cards);
    setFilterRestauraunts(json?.info?.cards[2]?.data?.data?.cards);
  }

  // not render component 
  if(!allRestauraunts) return null;
  if(filterRestauraunts?.length === 0) return <h1>No resto match the filter</h1>

  return allRestauraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); //whatever you write in input field
          }}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, allRestauraunts);
            setAllRestauraunts(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>

      <div className="food-items">
        {filterRestauraunts.map((restraunt) => {
          return (
            <RestrauntCard
              {...restraunt.info}
              lastMileTravelString={restraunt.info.sla?.lastMileTravelString} //check path in data(Restolist)
              key={restraunt.info.id}
            />
          ); //don't use index as key
        })}
      </div>
    </>
  );
};

export default Body;
