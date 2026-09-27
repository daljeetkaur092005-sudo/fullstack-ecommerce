import React, { useContext } from "react";
import axios from "axios";
import { MyStore } from "../../State/useContext";
import { useForm } from "react-hook-form";

const ProductPage = () => {
  const { productData, setProductData } = useContext(MyStore);

  console.log(productData);

  const {
    register,
    handleSubmit,
  } = useForm();

  // ================= DELETE PRODUCT =================
  const deleteProduct = async (id) => {
    const res = await axios.get(`http://localhost:5173${id}`);

    return res.data;
  };

  // ================= CREATE PRODUCT =================
  const createProduct = async (data) => {
    console.log("FORM DATA:", data);

    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);

      formData.append("price.amount", data.price.amount);
      formData.append("price.currency", data.price.currency);

      formData.append("sizes", data.sizes);

      formData.append("images", data.images[0]);

      const res = await axios.post("/api/products", formData);

      console.log("res", res.data);

      setProductData(res.data);
    } catch (error) {
      console.log("ERROR:", error.response?.data);
    }
  };

  return (
    // ================= MAIN PAGE =================
    <div className="min-h-screen bg-[#050611] px-5 py-10 text-white">

      {/* ================= CONTAINER ================= */}
      <div className="mx-auto max-w-4xl">

        {/* ================= HEADING ================= */}
        <div className="mb-8">

          <p className="mb-2 text-sm uppercase tracking-[4px] text-cyan-400">
            Admin Panel
          </p>

          <h1 className="text-4xl font-bold">
            Create Product
          </h1>

          <p className="mt-2 text-gray-400">
            Add a new product to your store.
          </p>

        </div>
        {/* ===== HEADING END ===== */}


        {/* ================= FORM CARD ================= */}
        <div className="rounded-3xl border border-purple-500/20 bg-[#0b0b18] p-6 shadow-[0_0_60px_rgba(139,92,246,0.12)] md:p-10">

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit(createProduct)}
            className="space-y-6"
          >

            {/* ================= TITLE ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Product Title
              </label>

              <input
                {...register("title", {
                  required: "title is required",
                })}
                type="text"
                placeholder="Enter product title"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-white
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />

            </div>
            {/* ===== TITLE END ===== */}


            {/* ================= DESCRIPTION ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                rows="4"
                placeholder="Enter product description"
                className="
                  w-full resize-none
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-white
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />

            </div>
            {/* ===== DESCRIPTION END ===== */}


            {/* ================= PRICE ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Price
              </label>

              <input
                {...register("price.amount", {
                  required: "price is required",
                })}
                type="number"
                placeholder="Enter price"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-white
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />

            </div>
            {/* ===== PRICE END ===== */}


            {/* ================= CURRENCY ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Currency
              </label>

              <input
                {...register("price.currency", {
                  required: "currency is required",
                })}
                type="text"
                placeholder="INR"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-white
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />

            </div>
            {/* ===== CURRENCY END ===== */}


            {/* ================= SIZES ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Sizes
              </label>

              <input
                {...register("sizes", {
                  required: "sizes is required",
                })}
                type="text"
                placeholder="S, M, L, XL"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-white
                  placeholder-gray-600
                  outline-none
                  transition
                  focus:border-cyan-400
                  focus:ring-2
                  focus:ring-cyan-400/20
                "
              />

            </div>
            {/* ===== SIZES END ===== */}


            {/* ================= IMAGE ================= */}
            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Product Image
              </label>

              <div
                className="
                  rounded-xl
                  border border-dashed
                  border-purple-500/40
                  bg-white/[0.02]
                  p-8
                  text-center
                  transition
                  hover:border-cyan-400/50
                "
              >

                <p className="text-gray-400">
                  Upload your product image
                </p>

                <input
                  {...register("images", {
                    required: "images is required",
                  })}
                  type="file"
                  className="
                    mt-4
                    block
                    w-full
                    text-sm
                    text-gray-400
                  "
                />

              </div>

            </div>
            {/* ===== IMAGE END ===== */}


            {/* ================= SUBMIT BUTTON ================= */}
            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                via-violet-500
                to-cyan-400
                py-3.5
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(34,211,238,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
              "
            >
              Create Product →
            </button>
            {/* ===== SUBMIT BUTTON END ===== */}

          </form>
          {/* ===== FORM END ===== */}

        </div>
        {/* ===== FORM CARD END ===== */}

      </div>
      {/* ===== CONTAINER END ===== */}

    </div>
    // ===== MAIN PAGE END =====
  );
};

export default ProductPage;

