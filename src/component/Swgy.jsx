import "./Swiggy.css"; //default import
import { HeaderComponent } from "./Header"; //named inport
import { Footer } from "./Footer"; //named{}
import Body from "./Body"; // defaullt import

export default function Swiggy() {
  // config Driven UI

  // const RestrauntCard = (props) => {
  //   console.log(props);
  //   return (
  //     <div className="card">
  //       <img
  //         src={
  //           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  //          props.restraunt.info?.cloudinaryImageId
  //         }
  //         alt="img"
  //       />
  //       <h2>{props.restraunt.info?.name}</h2>
  //       <h3>{props.restraunt.info?.cuisines.join(", ")}</h3>
  //       <h4>{props.restraunt.info?.sla?.lastMileTravelString}</h4>
  //     </div>
  //   );
  // };

  // const RestrauntCard = ({restraunt}) => {
  //   return (
  //     <div className="card">
  //       <img
  //         src={
  //           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  //          restraunt.info?.cloudinaryImageId
  //         }
  //         alt="img"
  //       />
  //       <h2>{restraunt.info?.name}</h2>
  //       <h3>{restraunt.info?.cuisines.join(", ")}</h3>
  //       <h4>{restraunt.info?.sla?.lastMileTravelString}</h4>
  //     </div>
  //   );
  // };

  return (
    <div className="main">
      <HeaderComponent />
      <div className="card-items">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

// <></> react fragment
