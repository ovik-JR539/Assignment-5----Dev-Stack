
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardStack from "./CardStack";

function ProductCard() {

  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stores selected technologies
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/data/product.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        setproduct(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const addToStack = (productdetail) => {

    const alreadyAdded = stack.some(
      (item) => item.id === productdetail.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setStack([...stack, productdetail]);

    toast.success("A card is added, in the stack");
  };

  // Remove one technology
  const removeFromStack = (id) => {

    const updatedStack = stack.filter(
      (item) => item.id !== id
    );

    setStack(updatedStack);
  };

  // Remove all technologies
  const removeAll = () => {
    setStack([]);
  };

  if (loading) {
    return <h1 className="text-center mt-20">Loading products...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 mt-40">

      {/* Page Heading */}
      <div className="mb-12">

        <p className="text-4xl md:text-5xl font-bold">
          Explore the{" "}
          <span className="text-[#D91B7E]">
            Technologies
          </span>
        </p>

        <p className="text-gray-500 text-base md:text-xl mt-5">
          Choose your favorite technology from each category and build your ideal tech stack.
        </p>

      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-8 items-start">

        {/* Your Stack - Mobile First, Desktop Right */}
        <div className="order-2 lg:order-2 lg:sticky lg:top-24">

          <CardStack
            stack={stack}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />

        </div>

        {/* Technology Cards - Mobile Below Stack, Desktop Left */}
        <div className="order-1 lg:order-1">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {product.map((productdetail) => {

              const alreadyAdded = stack.some(
                (item) => item.id === productdetail.id
              );

              return (

                <div
                  key={productdetail.id}
                  className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                >

                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between mb-3">

                    <div className="flex items-center gap-3">

                      <img
                        src={productdetail.icon}
                        alt={productdetail.name}
                        className="w-7 h-7 object-contain"
                      />

                      <h2 className="text-base font-bold text-gray-900">
                        {productdetail.name}
                      </h2>

                    </div>

                    <span className="text-[10px] bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {productdetail.badge}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
                    {productdetail.description}
                  </p>

                  {/* Product Information */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-gray-600 mb-4">

                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {productdetail.category}
                    </span>

                    <span className="font-semibold text-gray-800">
                      ⭐ {productdetail.rating}
                    </span>

                    <span className="font-semibold text-gray-800">
                      {productdetail.difficulty}
                    </span>

                  </div>

                  {/* Add to Stack */}
                  <button
                    onClick={() => addToStack(productdetail)}
                    disabled={alreadyAdded}
                    className={`w-full text-white text-xs py-2.5 rounded-lg transition-colors duration-200 mt-auto ${
                      alreadyAdded
                        ? "bg-green-600 cursor-not-allowed"
                        : "bg-[#0B0F1A] hover:bg-purple-700"
                    }`}
                  >
                    {alreadyAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>

              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
