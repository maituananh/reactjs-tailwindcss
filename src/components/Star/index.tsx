import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Star({ slot = 5 }: { slot: number }) {
  return (
    <div className="text-xs">
      {Array(slot)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-yellow-400"
          />
        ))}
      <span className="text-gray-400 ml-2">| Đã bán 1.000</span>
    </div>
  );
}

export default Star;
