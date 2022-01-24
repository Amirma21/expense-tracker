import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TranseActionForm = ({ addToTransActionsList }) => {
  const [formValues, setFormValues] = useState({
    descript: "",
    amount: "",
    type: "",
  });
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
          className="rounded-xl px-3 py-2 outline-none my-2 w-full"
        />
        <input
          type="number"
          className="my-2 py-1 px-2"
          placeholder="amount"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
          className="rounded-xl px-3 py-2 outline-none my-2 w-full"
        />
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
            <label htmlFor="expenseInput" className="mx-1 cursor-pointer">expense</label>
          </div>
        </div>
        <button
          className="border border-purple-800 px-2 text-purple-800 rounded mt-3 w-5/6 mx-auto"
          type="submit"
          onClick={addtranseActionHandler}
        >
          Add
        </button>
        <ToastContainer  position={"top-center"}/>
      </form>
    </>
  );
};

export default TranseActionForm;
