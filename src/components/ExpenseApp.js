import { parse } from "postcss";
import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TranseActionList from "./TranseActionList";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [transeActions, setTranseActions] = useState([]);

  const addToTransActionsList = (formvalues) => {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setTranseActions([
      ...transeActions,
      {
        ...formvalues,
        id: transeActions.length,
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day : days[date.getDay()] ,
        dayOfMonth: date.getDate(),
        month : months[date.getMonth()],
      },
    ]);
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transeActions.map((t) => {
      t.type === "income"
        ? (inc = inc + parseFloat(t.amount))
        : (exp = exp + parseFloat(t.amount));
    });
    setIncome(inc);
    setexpense(exp);
  }, [transeActions]);

  return (
    //  main div
    <>
      <div className="md:w-2/5 sm:w-3/5 mx-auto py-7 w-4/5 rounded-3xl bg-gray-100 px-3">
        <OverViewComponent
          income={income}
          expense={expense}
          addToTransActionsList={addToTransActionsList}
        />
      </div>

      <TranseActionList transeActions={transeActions} />
    </>

    // End main div
  );
};

export default ExpenseApp;
