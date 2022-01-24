import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const TranseActionList = ({ transeActions }) => {
  const [chengeItem, setChangeItem] = useState("");
  const [filteredTnx, setFiltereddTnx] = useState(transeActions);

  useEffect(() => {
    setFiltereddTnx(transeActions);
  }, [transeActions]);

  const chngSearchInputValue = (event) => {
    setChangeItem(event.target.value);
    filterTranseActions(event.target.value);
  };

  const filterTranseActions = (searchedWord) => {
    if (!searchedWord || searchedWord === "") {
      setFiltereddTnx(transeActions);
      return;
    }
    const filteredList = transeActions.filter((action) =>
      action.descript.toLowerCase().includes(searchedWord.toLowerCase())
    );
    setFiltereddTnx(filteredList);
  };

  if (transeActions.length === 0) {
    return(
       <div className="text-gray-500 text-center my-40">Your transactions list is empty ...</div>
    )
}

  return (
    <>
      <div className="flex justify-center my-2">
        <input
          value={chengeItem}
          type="text"
          onChange={chngSearchInputValue}
          placeholder="search..."
          className="px-3 py-2 rounded bg-white border border-gray-500"
        />
      </div>

      {filteredTnx.map((action) => {
        return (
          <div
            key={action.id}
            className={`mx-auto my-2 p-2 w-1/5  bg-gray-100 ${
              action.type === "income"
                ? "border-r-4 border-green-600"
                : "border-r-4 border-red-500"
            }`}
          >
            {action.descript}
          </div>
        );
      })}
    </>
  );
};

export default TranseActionList;
