import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    //getting id from params
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://5a0da93b-3e96-4bf2-8e12-d07460c8bb36.mock.pstmn.io/listMenu",
            //"https://5a0da93b-3e96-4bf2-8e12-d07460c8bb36.mock.pstmn.io/listMenu+{resId}"
            );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo == null) return <Shimmer />;

    const {name} = resInfo?.cards[0]?.card?.card?.info;   

    return (
        <div className="menuList">
            <h1>{name}</h1>
            <h2>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} . {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
            <ul>
                <li>Burgers</li>
                <li>Green Tom</li>
                <li>Panner</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;