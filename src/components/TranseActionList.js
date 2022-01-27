import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Modal from "./Modal";

const TranseActionList = ({ transeActions }) => {
  const [chengeItem, setChangeItem] = useState("");
  const [filteredTnx, setFiltereddTnx] = useState(transeActions);
  const [ishowModal, setIshowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    setFiltereddTnx(transeActions);
  }, [transeActions]);

  const chngSearchInputValue = (event) => {
    setChangeItem(event.target.value);
    filterTranseActions(event.target.value);
  };

  const filterTranseActions = (searchedWord) => {
    if ( searchedWord === "") {
      setFiltereddTnx(transeActions);
      return;
    }
    const filteredList = transeActions.filter((action) =>
      action.descript.toLowerCase().includes(searchedWord.toLowerCase())
    );
    setFiltereddTnx(filteredList);
  };

  const detailBtnHandler = (actionId) => {
    setSelectedId(actionId);
    setIshowModal(true);
  };

  if (transeActions.length === 0) {
    return (
      <div className="text-gray-500 text-center my-32">
        Your transactions list is empty ...
      </div>
    );
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
            className={`flex justify-between items-center mx-auto my-2 p-2 w-2/5  sm:w-1/5 bg-gray-100 ${
              action.type === "income"
                ? "border-r-4 border-green-600"
                : "border-r-4 border-red-500"
            }`}
          >
            <span> {action.descript}</span>
            <button
              onClick={() => detailBtnHandler(action.id)}
              className="border text-purple-800 border-purple-800 rounded text-sm px-2 py-1"
            >
              detail
            </button>
          </div>
        );
      })}

      {ishowModal && (
        <Modal transeActions={transeActions} selectedId ={selectedId} setIshowModal={setIshowModal} />
      )}
    </>
  );
};

export default TranseActionList;
