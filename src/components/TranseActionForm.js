import { useState } from "react";

const TranseActionForm = ({addToTransActionsList}) => {
  const [formValues, setFormValues] = useState({
    descript: "",
    amount: "",
    type: "expense",
  });
  const changeHandler = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const addtranseActionHandler = (event) => {
    event.preventDefault();
    addToTransActionsList(formValues)
  };

  return (
    <>
      <form className="sm:w-3/5  w-4/5 border mx-auto flex flex-col items-center py-5 px-4 my-3">
        <input
          type="text"
          className="my-2  py-1 px-2"
          placeholder="Descript"
          name="descript"
          onChange={changeHandler}
          value={formValues.descript}
        />
        <input
          type="number"
          className="my-2 py-1 px-2"
          placeholder="Amount"
          name="amount"
          onChange={changeHandler}
          value={formValues.amount}
        />
        <div className="flex items-center justify-around">
          <label>income</label>
          <input
            type="radio"
            value="income"
            name="type"
            onChange={changeHandler}
          />
          <label>expense</label>
          <input
            type="radio"
            value="expense"
            name="type"
            onChange={changeHandler}
          />
        </div>
        <button
          className="bg-cyan-900 px-2 text-white  my-4 rounded"
          type="submit"
          onClick={addtranseActionHandler}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TranseActionForm;
