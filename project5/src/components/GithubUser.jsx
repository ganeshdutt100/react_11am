import React, { useState, useEffect } from "react";

const GithubUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const delayDebounce = setTimeout(() => {
      fetch(`https://api.github.com/users/${searchQuery}`)
        .then((res) => res.json())
        .then((data) => setUserProfile(data))
        .catch((error) => console.error("Error fetching user profile:", error));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-[300px] mx-auto p-4 rounded-lg shadow-md">
        <input
          className="border border-gray-300 rounded-md p-2  mb-4"
          type="text"
          placeholder="Enter GitHub username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {userProfile && userProfile.login && (
          <div>
            <img
              src={userProfile.avatar_url}
              className="w-[100px] h-[100px] rounded-full mb-4"
            ></img>
            <h2>{userProfile.name}</h2>
            <p>{userProfile.bio}</p>
            <p> Public Repositories : {userProfile.public_repos}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubUser;
