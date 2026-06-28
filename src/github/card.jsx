import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 hover:shadow-lg transition">
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full border"
      />

      {/* Info */}
      <div className="flex-1">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-800 text-lg">{user.login}</h2>

          {user.site_admin && (
            <span className="text-xs bg-red-100 text-red-500 px-2 py-1 rounded">
              Admin
            </span>
          )}
        </div>

        {/* Meta */}
        <p className="text-sm text-gray-500">
          ID: {user.id} • Type: {user.type}
        </p>

        {/* Actions */}
        <div className="mt-2 flex gap-3">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            Profile
          </a>

          <a
            href={user.repos_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-green-500 hover:underline"
          >
            Repos API
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;