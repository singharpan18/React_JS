import {CDN_URL} from "../utils/constants";

//internal css -> this is like js object
const styleCard = {
    backgroundColor: "pink",
  }    

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.data;
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/ 100}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;