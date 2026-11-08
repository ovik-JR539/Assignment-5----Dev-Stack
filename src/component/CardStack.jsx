
import { toast } from "react-toastify";

function CardStack({stack = [],  removeFromStack = () => {}, removeAll = () => {}})
 {

  // Remove one card
  const handleRemove = (id) => {
    removeFromStack(id);

    toast.success("A card has been remove.");
  };

  // Remove all cards
  const handleRemoveAll = () => {
    removeAll();

    toast.success("All card has been remove from stack");
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">

      {/* Heading */}
      <div className="flex items-center justify-between gap-2 mb-4">

        <h2 className="text-2xl font-bold">
          Your <span className="text-[#D91B7E]">Stack</span>
        </h2>

        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
          {stack.length} Selected
        </span>

      </div>

      <p className="text-gray-500 text-sm mb-5">
        Your selected technologies will appear here.
      </p>

      {/* Empty Stack */}
      {stack.length === 0 ? (

        <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center">

          <p className="text-gray-500 text-sm">
            Your stack is empty. Add some technologies!
          </p>

        </div>

      ) : (

        <>

          {/* Added Cards - Vertical Layout */}
          <div className="flex flex-col gap-4">

            {stack.map((item) => (

              <div
                key={item.id}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200"
              >

                {/* Icon and Name */}
                <div className="flex items-center gap-3 mb-3">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />

                  <h3 className="font-bold text-sm text-gray-900">
                    {item.name}
                  </h3>

                </div>

                {/* Category and Remove */}
                <div className="flex items-center justify-between gap-2">

                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs">
                    {item.category}
                  </span>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className=" bg-gray-200 text-red-500 hover:text-red-700 text-xs font-semibold rounded-[7px] p-2"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Remove All */}
          <button
            onClick={handleRemoveAll}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-semibold mt-5 transition-colors duration-200"
          >
            Remove All
          </button>

        </>

      )}

    </div>
  );
}

export default CardStack;
