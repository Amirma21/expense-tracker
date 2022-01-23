const TranseActionList = ({ transeActions }) => {
 if (transeActions.length === 0) {
     return(
        <div className="text-gray-500 text-center my-40">Your transactions list is empty ...</div>
     )
 }
    return transeActions.map((acttion) => {
        return (
          <div
            key={acttion.id}
            className={`mx-auto my-2 p-2 w-1/5  bg-gray-100 ${
              acttion.type === "income"
                ? "border-r-4 border-green-600"
                : "border-r-4 border-red-500"
            }`}
          >
            {acttion.descript}
          </div>
        );
      })
 

};

export default TranseActionList;
