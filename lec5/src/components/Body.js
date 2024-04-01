import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listRestaurants, setlistRestaurants] = useState(restaurantList);

    //Local State Variable - Super powerful variable 
    /*const [listRestaurants, setlistRestaurants] = useState([
        {
            type: "restaurant",
            data: {
              id: "74453",
              name: "Domino's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "4.1",
            },
        },
        {
            type: "restaurant",
            data: {
              id: "714453",
              name: "KFC's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "3.0",
            },
        },
        {
            type: "restaurant",
            data: {
              id: "71453",
              name: "Hut's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "4.2",
            },
        }  
    ]);*/ //in normal js variable let listRestaurants = [];
   
    //Normal JS Variables 
    /*let listRestaurants = [
        {
            type: "restaurant",
            data: {
              id: "74453",
              name: "Domino's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "4.1",
            },
        },
        {
            type: "restaurant",
            data: {
              id: "714453",
              name: "KFC's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "3.0",
            },
        },
        {
            type: "restaurant",
            data: {
              id: "71453",
              name: "Hut's Pizza",
              cloudinaryImageId: "bz9zkh2aqywjhpankb07",
              cuisines: ["Pizzas", "Burgers"],
              costForTwo: 40000,
              deliveryTime: 45,
              avgRating: "4.2",
            },
        }        
    ];*/

    return(
      <div className="body">
        <div className="filter">
            <button className="filter-btn"
             onClick={() => {
                console.log("Button Clicked");
                //filter logic
                /*listRestaurants = listRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                console.log(listRestaurants);*/
                const filteredList = listRestaurants.filter(
                    (res) => res.data.avgRating > 4
                );
                setlistRestaurants(filteredList)
             }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
          {
            listRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id}resData={restaurant}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body;