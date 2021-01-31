
import { Blurhash } from "react-blurhash";

const OneRest = ({ restaurant }) => {
  return (
    <div className="wholeRest">
      <div className="restImg">
        <Blurhash hash={restaurant.blurhash} 
        width={400}
        height={170}
        resolutionX={32}
        resolutionY={32}
        punch={1} 
       />
        <p className="status">{restaurant.online ? "Online" : "Offline"}</p>
      </div>
      <h3>{restaurant.name}</h3>
      </div>
  );
};

export default OneRest;
