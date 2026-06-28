const TodoCard = ({ user }) => {
  return (
    <div className="max-w-sm rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          User #{user.userId}
        </span>

        <span className="text-sm font-semibold text-gray-500">
          ID: {user.id}
        </span>
      </div>

      <h2 className="mt-4 text-lg font-bold text-gray-800">
        {user.title}
      </h2>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-gray-600">Status</span>

        {user.completed ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            ✅ Completed
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
            ⏳ Pending
          </span>
        )}
      </div>
    </div>
  );
};

export default TodoCard;