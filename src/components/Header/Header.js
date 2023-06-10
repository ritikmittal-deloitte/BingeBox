import React, { useContext, useRef, useState, useEffect } from "react";
import { ReactComponent as NotifiactionLogo } from "../../assets/icons/Vector.svg";
import "./header.scss";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as SearchLogo } from "../../assets/icons/search.svg";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as MainLogo } from "./../../assets/images/bingeboxlogo.svg";
import CategoryType from "../CategoryType/CategoryType";
import { UserContext } from "../../context/Context/UserContext/UserState";
import { ReactComponent as ProfileLogo } from "../../assets/icons/Vector2.svg";
import { AccountAction } from "../../redux/AccountSlice";

const Header = () => {
  const [profile, setProfile] = useState(false);
  const { searchText, setSearchText, categories, setCategories } =
    useContext(UserContext);
  const [helperSearchText, setHelperSearchText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedAccount = useSelector((state) => state.account.currentAccount);
  const signUpUserDetails = useSelector((state) => state.account.userDetails);
  console.log("in header", selectedAccount, "signup", signUpUserDetails);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let url = location.pathname;
  const [open2, setOpen2] = useState(false);

  const handleChangingAccount = (account) => {
    dispatch(AccountAction.selectCurrentAccount(account));
  };

  const ref = useRef(null);
  const ref2 = useRef(null);
  const genres = [
    "All",
    "Horror",
    "Comedy",
    "Action",
    "Horror",
    "Drama",
    "Romance",
    "Fantasy",
    "Documentaries",
    "Kids and Family",
  ];
  const languages = [
    "Hindi",
    "English",
    "Punjabi",
    "Telugu",
    "Tamil",
    "Malayalam",
    "Kannada",
    "Marathi",
    "Bengali",
  ];

  const handleClickOutside = (event) => {
    if (!ref?.current?.contains(event.target)) {
      setOpen(false);
    }
    if (!ref2?.current?.contains(event.target)) {
      setOpen2(false);
      setProfile(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const searchTextFunction = (e) => {
    setHelperSearchText(e.target.value);
  };
  const profileNavigate = (e) => {
    setProfile(false);
    navigate("/profile");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchPageOpen();
    }
  };
  const SignOut = () => {
    navigate("/");
  };

  const searchPageOpen = () => {
    if (helperSearchText.trim() === "") {
      return;
    }
    setSearchText(helperSearchText);
    navigate(`/searchresults/${helperSearchText}`, { state: searchText });
  };
  const handleClick = () => {
    if (url.slice(1, 5) === "sear") {
      navigate("home");
    }
    setHelperSearchText("");
  };

  return (
    <div className="d-flex justify-content-between w-100 align-items-end header-container">
      <MainLogo />
      <div className="w-30 container-11">
        <div className="navlink-container">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "header-link-active-style" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "header-link-active-style" : ""
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? "header-link-active-style" : ""
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/tv-shows"
            className={({ isActive }) =>
              isActive ? "header-link-active-style" : ""
            }
          >
            TV Shows
          </NavLink>

          <NavLink
            to="/anime"
            className={({ isActive }) =>
              isActive ? "header-link-active-style" : ""
            }
          >
            Anime
          </NavLink>
          <NavLink
            onClick={() => {
              setOpen(true);
              document.addEventListener("mousedown", handleClickOutside);
            }}
          >
            {categories}
          </NavLink>
        </div>
        {open && (
          <div className="category-box w-30" ref={ref}>
            <div className="genres-box-1">
              <span style={{ color: "white" }}>Genres</span>
              <div className="genres-box">
                {genres.map((item) => {
                  return (
                    <CategoryType
                      text={item}
                      type={"genre"}
                      setCategories={setCategories}
                    />
                  );
                })}
              </div>
            </div>
            <div className="languages-box-1">
              <span style={{ color: "white" }}>Languages</span>
              <div className="genres-box">
                {languages.map((item) => {
                  return <CategoryType text={item} type={"language"} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex  align-items-end w-40">
        <div className=" search-box">
          &nbsp;{" "}
          <SearchLogo
            width="1.3rem"
            height="1.3rem"
            onClick={(e) => {
              searchPageOpen();
            }}
          />
          <input
            type="text"
            autoclear
            placeholder="search here"
            style={{ color: "white", borderColor: "transparent" }}
            onChange={(e) => {
              searchTextFunction(e);
            }}
            onKeyDown={handleKeyDown}
            value={helperSearchText}
          />
          {helperSearchText !== "" ? (
            <div onClick={handleClick} className="clear-button">
              Clear
            </div>
          ) : (
            <div style={{ width: "2.5rem" }}></div>
          )}
        </div>
        <div>
          <div className=" last-container">
            <NotifiactionLogo
              width="1.1rem"
              height="1.3rem"
              className="notificationIcon"
            />
            <img
              src={selectedAccount.img}
              className="profile-style"
              onClick={() => {
                setProfile(true);
                setOpen2(true);
                document.addEventListener("mousedown", handleClickOutside);
              }}
            />
          </div>

          {profile && open2 && (
            <div className="profile-box" ref={ref2}>
              <div className=""></div>
              <div className="selected-1">
                &nbsp;&nbsp;&nbsp; {selectedAccount.name}
              </div>
              <div className="line-2"></div>
              {signUpUserDetails?.accounts?.length > 1 && (
                <div className="avatar-box">
                  {/* <div className="line-2"></div> */}
                  <div className="avatar-box">
                    &nbsp;&nbsp;&nbsp;
                    {signUpUserDetails?.accounts
                      ?.filter(
                        (account) => account.name !== selectedAccount.name
                      )
                      .map((account) => (
                        <div>
                          <img
                            src={account.img}
                            onClick={() => handleChangingAccount(account)}
                            className="profile-conatiner-pic"
                          />
                          <div className="avatar-text">{account.name}</div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="line-2"></div>
              <div
                className="Box-1"
                onClick={(e) => {
                  profileNavigate(e);
                }}
              >
                <ProfileLogo style={{ marginLeft: "6%" }} /> &nbsp;&nbsp;
                Profile
              </div>
              <div className="line-2"></div>

              <div className="sign-out-button" onClick={SignOut}>
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
