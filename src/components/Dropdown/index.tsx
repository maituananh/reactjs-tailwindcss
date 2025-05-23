import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

function DropdownList() {
  const options = [
    {
      value: "1",
      label: (
        <div className="flex items-center justify-between">
          <span>Độ liên quan</span>
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div className="flex items-center justify-between">
          <span>Độ liên quan</span>
        </div>
      ),
    },
    {
      value: "3",
      label: (
        <div className="flex items-center justify-between">
          <span>Độ liên quan</span>
        </div>
      ),
    },
  ];

  return <Select options={options} className="w-40" />;
}

export default DropdownList;
