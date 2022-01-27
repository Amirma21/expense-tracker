import "../style/modal.css";

const Modal = ({ setIshowModal, transeActions, selectedId }) => {
  let selected = transeActions[selectedId];

  console.log(selected);
  return (
    <section>
      <div className="backdrop" onClick={() => setIshowModal(false)}></div>
      <div className="modal px-3 py-3 flex flex-col">
        <div className="my-2">
          <span className="text-slate-400 font-bold"> title : </span>
          <span className="font-bold">{selected.descript}</span>
        </div>

        <div className="my-2 ">
          <span className="text-slate-400 font-bold"> price : </span>
          <span
            className={`${
              selected.type === "income" ? "text-green-800" : "text-red-800"
            } font-bold`}
          >
            {selected.type === "income" ? "+" : "-"}
            {selected.amount} $
          </span>
        </div>

        <div className="my-2 bg-yellow-100">
          <span className="text-slate-400 font-bold">Time : </span>
          <span className="font-bold">
            {selected.hours}:{selected.minutes}
          </span>
          <span className="font-bold"> ,{selected.day}</span>
        </div>

        <div className="my-2 bg-yellow-100">
          <span className="text-slate-400 font-bold">Date : </span>
          <span>
            <span className="bg-blue-800 text-white rounded mx-1">
              {selected.dayOfMonth}
            </span>
            <span className="font-bold">{selected.month}</span>
          </span>
        </div>

        {selected.additionDescript && (
          <div>
            <span className="text-slate-400 font-bold">
              description : 
            </span>
            <span className="font-bold">{selected.additionDescript}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Modal;
