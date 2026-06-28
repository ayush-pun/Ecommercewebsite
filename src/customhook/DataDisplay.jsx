import React from "react";
import useApihook from "./useApihook";
import Card from "./Card";

const DataDisplay = () => {
  const { users, loading } = useApihook();
  console.log("fghjkl;",users)

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Todo List
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;