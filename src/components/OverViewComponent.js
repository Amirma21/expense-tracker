import { useState } from "react/cjs/react.development";
import TranseActionForm from "./TranseActionForm";

const OverViewComponent = ({ income, expense, addToTransActionsList }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <>
      <div className="flex sm:justify-around justify-between">
        <p>Balance : $ {income - expense}</p>
        <button
          onClick={() => setIsShowForm((prevState) => !prevState)}
          className="bg-cyan-900 px-2 text-white  rounded"
        >
          {isShowForm ? "Cancle" : "Add"}
        </button>
      </div>
      {isShowForm && (
        <TranseActionForm addToTransActionsList={addToTransActionsList} />
      )}
      {/* income and expense boxes */}
      <div className="flex sm:justify-around justify-between  w-3/5 mx-auto my-10">
        <div className="flex flex-col items-center bg-white border-2 p-4">
          <p>income</p> <span> {income} </span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 p-4">
          <p>expense</p> <span>{expense}</span>
        </div>
      </div>
      {/* end income and expense boxes  */}
    </>
  );
};

export default OverViewComponent;
