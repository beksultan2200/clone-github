import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Card from "../Card";
import Header from "../Header";
import { act } from "react-dom/test-utils";

const UserRepos = ({ setGitUserRepos, gitUser, gitUserRepos, setGitUser }) => {
  const { userName } = useParams();
  const [active, setActive] = useState(false)
  useEffect(() => {
    setTimeout(()=> {setActive(true)}, 2000)
    axios(`https://api.github.com/users/${userName}/repos?page=1`).then(({ data }) => {
      setGitUserRepos(data);
    });
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => {
      setGitUser(data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <Header gitUserRepos={gitUserRepos} gitUser={gitUser} />
        {active && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <img
                style={{ width: "80%", borderRadius: "50%" }}
                src={gitUser.avatar_url}
                alt=""
              />
              <h2>{userName}</h2>
            </div>
            <div style={{ width: "100%" }}>
              <Card gitUserRepos={gitUserRepos} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserRepos;
