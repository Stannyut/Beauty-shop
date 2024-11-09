export default function ProductCard({ title, price, image }) {
  return (
    <div className="bg-[#f7ede4] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 p-4">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-300"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-md mt-1">${price}</p>
        <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
