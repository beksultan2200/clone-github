import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import UserRepos from "../pages/UserRepos";
import UserRepoContent from "../pages/UserRepoContent";

const App = () => {
  const [gitUser, setGitUser] = useState("");
  const [value, setValue] = useState("");
  const [gitUserRepos, setGitUserRepos] = useState([]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            gitUser={gitUser}
            setGitUser={setGitUser}
            setGitUserRepos={setGitUserRepos}
            value={value}
            setValue={setValue}
          />
        }
      />
      <Route
        path="/:userName"
        element={
          <UserRepos
            setGitUserRepos={setGitUserRepos}
            gitUserRepos={gitUserRepos}
            gitUser={gitUser}
            setGitUser={setGitUser}
          />
        }
      />
      <Route
        path="/:userName/:reposName"
        element={
          <UserRepoContent gitUserRepos={gitUserRepos} gitUser={gitUser} />
        }
      />
    </Routes>
  );
};

export default App;
