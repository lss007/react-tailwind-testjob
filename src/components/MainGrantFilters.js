import GrantFilterItem from "./GrantFilterItem";
import DownloadIcon from "../assets/images/downloadicon.svg";

const options = [
  {
    id: 1,
    name: "Open",
  },
  {
    id: 2,
    name: "Closed",
  },
];

const options1 = [
  {
    id: 1,
    name: "Revise amd Resubmit",
  },
  {
    id: 2,
    name: "dummy1",
  },
];
const options2 = [
  {
    id: 1,
    name: "No Payment Due",
  },
  {
    id: 2,
    name: "dummy2",
  },
];
const options3 = [
  {
    id: 1,
    name: "Grantee",
  },
  {
    id: 2,
    name: "dummy3",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainGrantFilters() {
  return (
    <div className="container mx-auto">
      <div className="md:flex space-y-3 space-x-0 md:space-x-2 md:space-y-0">
        <div className="md:flex-1">
          <div className="px-4 sm:px-0">
            <GrantFilterItem labelData="Grant Status" data={options} />
          </div>
        </div>
        <div className="md:flex-1">
          <div className="px-4 sm:px-0">
            <GrantFilterItem labelData="Review Status" data={options1} />
          </div>
        </div>
        <div className="md:flex-1">
          <div className="px-4 sm:px-0">
            <GrantFilterItem labelData="Payment Status" data={options2} />
          </div>
        </div>
        <div className="md:flex-1">
          <div className="px-4 sm:px-0">
            <GrantFilterItem labelData="Ball in Court" data={options3} />
          </div>
        </div>
        <div className="md:flex-none">
          <div className="h-full">
            <button className="btn btnSpace btnDark h-full rounded-lg downloadBtn">
              <img src={DownloadIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
