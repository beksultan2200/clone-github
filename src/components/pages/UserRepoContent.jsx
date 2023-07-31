import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../Header";
import { useNavigate, useParams } from "react-router";

const UserRepoContent = ({ gitUser, gitUserRepos }) => {
  const [userMd, setUserMd] = useState("");
  const { reposName } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const notFound = () => {
    navigate(-1)
  }

  useEffect(() => {
    axios(
      `https://raw.githubusercontent.com/${gitUser.login}/${reposName}/master/README.md`
    )
      .then((data) => {
        setUserMd(data);
      })
      .catch(() => {
        setError(true);
        alert("Markdown File not found");
        notFound()
      });
  }, []);
  return (
    <>
      <div className="container">
        <Header gitUser={gitUser} gitUserRepos={gitUserRepos} />
        <div>
          <ReactMarkdown>{userMd.data}</ReactMarkdown>
        </div>
        {error && <div>Markdown File not found</div>}
      </div>
    </>
  );
};

export default UserRepoContent;
