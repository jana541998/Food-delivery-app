
const Restaurantcard=({cloudinaryImageId, name, cuisines, avgRating})=>{
  return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }/>
            <h2>{name}</h2>
            <h3>{cuisines.join(" ")}</h3>
            <h4>{avgRating} stars</h4>
            
        </div>
    );
  }
  export default Restaurantcard;
