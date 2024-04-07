import { shimmer_card_unit } from "../constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
//new Array(shimmer_card_unit).fill(0) creates an array of length shimmer_card_unit filled with zeros. 
//This is a common pattern in JavaScript to create an array of a specific length.
