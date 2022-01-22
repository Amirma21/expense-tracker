import { parse } from "postcss";
import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [transeActions, setTranseActions] = useState([]);

  const addToTransActionsList = (formvalues) => {
    setTranseActions([...transeActions, { ...formvalues, id: Date.now() }]);
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transeActions.map((t) => {
      t.type === "income"
        ? (inc = inc + parseFloat(t.amount))
        : (exp = exp + parseFloat(t.amount));
    });

    console.log(inc, exp);

    setIncome(inc);
    setexpense(exp);
  }, [transeActions]);

  console.log(transeActions);
  return (
    //  main div
    <div className="md:w-2/5 sm:w-3/5 mx-auto py-7 w-4/5 rounded-3xl bg-gray-100 px-3" >
      <OverViewComponent
        income={income}
        expense={expense}
        addToTransActionsList={addToTransActionsList}
      />
    </div>

    // End main div
  );
};

export default ExpenseApp;
