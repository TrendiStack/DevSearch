import React, { useState, useEffect } from "react";
import DevInfo from "../devInfo/DevInfo";
import { ReactComponent as SearchIcon } from "../../images/icon-search.svg";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [blog, setBlog] = useState("");
  const [joined, setJoined] = useState("");
  const [twitter, setTwitter] = useState("");
  const [work, setWork] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/uzistacks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    bio,
    followers,
    following,
    public_repos,
    avatar_url,
    location,
    blog,
    created_at,
    twitter_username,
    company,
  }) => {
    setName(name);
    setLogin(login);
    setBio(bio);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setBlog(blog);
    setJoined(created_at);
    setTwitter(twitter_username);
    setWork(company);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <>
      <div className="searchContainer" data-theme={props.dataTheme}>
        <div>
          <form onSubmit={handleSubmit} className="searchForm">
            <div className="searchIconContainer">
              <SearchIcon className="searchIcon" />
              <input
                type="text"
                name="github user"
                className="input"
                placeholder={`Search Users...`}
                onChange={handleSearch}
              ></input>
            </div>
            <button type="submit" className="button">
              <p>Search</p>
            </button>
          </form>
        </div>
      </div>
      <p className="searchError">{error}</p>

      <DevInfo
        user={name}
        login={login}
        bio={bio}
        followers={followers}
        following={following}
        repos={repos}
        avatar={avatar}
        location={location}
        blog={blog}
        joined={joined}
        twitter={twitter}
        work={work}
        theme={props.dataTheme}
        userLink={`https://github.com/${userInput}`}
      />
    </>
  );
};

export default SearchBar;
