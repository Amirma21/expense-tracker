import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TranseActionForm = ({ addToTransActionsList }) => {
  const [formValues, setFormValues] = useState({
    descript: "",
    amount: "",
    type: "",
    additionDescript : "",
  });
  const [isShowDescriptInp, setIsShowDescriptInp] = useState(false);

  const changeHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const addtranseActionHandler = (event) => {
    event.preventDefault();
    if (formValues.descript === "") toast.error("enter your descipt ...");
    else if (formValues.amount === "") toast.error("enter your amount...");
    else if (formValues.type === "") toast.error("select your type .... ");
    else addToTransActionsList(formValues);
    setFormValues({ descript: "", amount: "", type: "" });
  };

  return (
    <>
      <form className=" md:w-3/5 w-4/5  mx-auto flex flex-col items-center py-5 px-4 my-3">
        <input
          type="text"
          className="my-2  py-1 px-2"
          placeholder="descript"
          name="descript"
          onChange={changeHandler}
          value={formValues.descript}
          className="rounded-xl px-3 py-2 outline-none my-2 w-full shadow"
        />
        <input
          type="number"
          className="my-2 py-1 px-2"
          placeholder="amount"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
          className="rounded-xl px-3 py-2 outline-none my-2 w-full shadow"
        />

        <div className="addition-descrpt mb-4">
          <input
            type="checkbox"
            id="addDescrptInput"
            className="mx-1"
            onClick={() => setIsShowDescriptInp((prevState) => !prevState)}
          />
          <label
            htmlFor="addDescrptInput"
            className="text-gray-400 text-xs sm:text-base mx-auto"
          >
            add desciption for transeAction
          </label>
          <div>
            {isShowDescriptInp && (
              <textarea
                type="text"
                name="additionDescript"
                onChange={changeHandler}
                className="rounded-xl px-3 py-2 outline-none my-2 w-full shadow"
                placeholder="Additional explanation"
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="mx-3 flex items-center">
            <input
              id="incomeInput"
              type="radio"
              value="income"
              name="type"
              onChange={changeHandler}
              checked={formValues.type === "income"}
            />
            <label htmlFor="incomeInput" className="mx-1 cursor-pointer">
              income
            </label>
          </div>
          <div className="mx-3 flex items-center">
            <input
              id="expenseInput"
              type="radio"
              value="expense"
              name="type"
              onChange={changeHandler}
              checked={formValues.type === "expense"}
            />
            <label htmlFor="expenseInput" className="mx-1 cursor-pointer">
              expense
            </label>
          </div>
        </div>

        <button
          className="border border-purple-800 px-2 bg-purple-800 text-white rounded mt-3 w-5/6 mx-auto hover:bg-gray hover:text-purple-800"
          type="submit"
          onClick={addtranseActionHandler}
        >
          Add
        </button>
        <ToastContainer position={"top-center"} />
      </form>
    </>
  );
};

export default TranseActionForm;
