import { useState } from "react/cjs/react.development";
import TranseActionForm from "./TranseActionForm";

const OverViewComponent = ({ income, expense, addToTransActionsList }) => {
  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <>
      <div className="flex sm:justify-around justify-between mb-3">
        <p>Balance : <span className="font-bold">{income - expense} $</span></p>
        <button
          onClick={() => setIsShowForm((prevState) => !prevState)}
          className={`border border-purple-800 px-2 text-purple-800 rounded ${isShowForm && "border-red-600 text-red-600"}`}
        >
          {isShowForm ? "Cancle" : "Add"}
        </button>
      </div>

      {isShowForm && (
        <TranseActionForm addToTransActionsList={addToTransActionsList} />
      )}

      {/* income and expense boxes */}
      <div className="flex  justify-around  w-4/5 mx-auto ">
        <div className="flex flex-col items-center bg-white border-2 p-4 mx-2">
          <p>income</p> <span className="text-green-600 font-bold"> $ {income} </span>
        </div>
        <div className="flex flex-col items-center bg-white border-2 p-4 mx-2">
          <p>expense</p> <span className="text-rose-600 font-bold"> $ {expense}</span>
        </div>
      </div>
      {/* end income and expense boxes  */}
    </>
  );
};

export default OverViewComponent;
