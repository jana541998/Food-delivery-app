
import Restaurantcard from "./Restaurantcard";
import{useState, useEffect} from "react";


const Body =()=>{
    const [reset,setReset] = useState();
    const [resti,setRest] = useState();
    const [searchTxt,setSearchTxt] = useState("");

    function filterData(searchTxt) {
        const filtered = reset.filter((item) =>
            item?.info?.name?.includes(searchTxt)
        );
        return filtered;
    }
    
     const fetchData =async()=>{
         const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.380187436907613&lng=74.73583281040192&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const jsonData = await response.json();
         const resultData=jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
         setReset(resultData);
         setRest(resultData);
     }

    useEffect(()=>{
        
        fetchData();
    },[]);
    return(
        <>
        <div className="search">
            <input type ="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value);}}/>
            <button
                className="search-btn"
                onClick={() => {
                   
                    const data = filterData(searchTxt);
                    setRest(data);
                }}
            >
                Search
            </button>

        </div>
        <div className="heading">
            <h2>Restaurants with online food delivery </h2>
        </div>
        <div className="restlist">
            {
                resti && resti.map((item)=>{
                    return <Restaurantcard {...item.info} key={item.info.id} />
                })
            }               
        </div>
        </>

    );
}

export default Body;
