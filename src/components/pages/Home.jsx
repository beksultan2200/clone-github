import React from "react";
import Form from "../Form";

const Home = ({gitUser, setGitUser, setGitUserRepos, value, setValue}) => {
  return (
    <div>
      <Form
        gitUser={gitUser}
        setGitUser={setGitUser}
        setGitUserRepos={setGitUserRepos}
        value={value}
        setValue={setValue}
      />
    </div>
  );
};

export default Home;
