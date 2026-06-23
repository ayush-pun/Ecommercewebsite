const Card = ({ title, body }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
        <h2 className="text-center text-lg font-bold text-white capitalize">
          {title}
        </h2>
      </div>

      <div className="p-5">
        <p className="line-clamp-4 text-center text-gray-600">
          {body}
        </p>

        <div className="mt-5 flex justify-center">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;