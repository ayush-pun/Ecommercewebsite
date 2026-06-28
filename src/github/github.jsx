import React from 'react';
import { useGithubUsers } from '../../hooks/useGithubUser';
import UserCard from './Card';

const GithubUsers = () => {
  const { users, loading, page, search, setPage, setSearch } = useGithubUsers();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Github Users Explorer
        </h1>

        {/* Search */}
        <div className="mb-6 flex justify-center">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search users..."
            className="w-full max-w-md px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Page Info */}
        <p className="text-center text-gray-600 mb-4">Page: {page}</p>

        {/* Loading */}
        {loading && (
          <p className="text-center text-blue-500 font-medium">Loading...</p>
        )}

        {/* No Data */}
        {!loading && users.length === 0 && (
          <p className="text-center text-red-500">No users found</p>
        )}

        {/* Users Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400"
          >
            Prev
          </button>

          <button
            disabled={users.length === 0}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;