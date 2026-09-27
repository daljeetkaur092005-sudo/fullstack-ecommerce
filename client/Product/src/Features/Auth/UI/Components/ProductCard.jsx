
import React from "react";
import { useContext } from "react";
import { MyStore } from "../../State/useContext";

const ProductCard = () => {
  const{ productData}=useContext(MyStore)
  return (
    <div className="min-h-screen bg-[#050611] px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">

   
                 <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[4px] text-cyan-400">
            Products
          </p>

          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="mt-2 text-gray-400">
            Explore and manage your products
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Card 1 */}
           {
          productData?.map((product)=>{
            return (
          <div
            className="
              group overflow-hidden rounded-2xl
              border border-white/10
              bg-[#0b0b18]
              shadow-[0_0_30px_rgba(139,92,246,0.08)]
              transition duration-300
              hover:-translate-y-1
              hover:border-purple-500/40
            "
          >
    
            {/* Image */}
            <div className="h-52 overflow-hidden bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                alt="T-Shirt"
                className="
                  h-full w-full object-cover
                  transition duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h2 className="text-xl font-bold">
                {product.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
           {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">
                  {product.price.currency}{product.price.amount}
                </span>

                <span className="rounded-lg bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                {product.sizes}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-5 grid grid-cols-3 gap-2">

                <button
                  className="
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-400
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    hover:opacity-90
                  "
                >
                  Add
                </button>

                <button
                  className="
                    rounded-xl
                    border border-red-500/30
                    bg-red-500/10
                    py-2.5
                    text-sm
                    font-medium
                    text-red-400
                    transition
                    hover:bg-red-500/20
                  "
                >
                  Delete
                </button>

                <button
                  className="
                    rounded-xl
                    border border-cyan-400/30
                    bg-cyan-400/10
                    py-2.5
                    text-sm
                    font-medium
                    text-cyan-400
                    transition
                    hover:bg-cyan-400/20
                  "
                >
                  Update
                </button>

              </div>
            </div>
          </div>

    













            )
          })
        }
          </div>
      </div>
    </div>
  );
};

export default ProductCard;

