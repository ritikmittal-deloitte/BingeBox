import React, { useContext, useState } from "react";
import { ReactComponent as NotifiactionLogo } from "../../assets/icons/Vector.svg";
import "./header.scss";
import { NavLink,useNavigate } from "react-router-dom";
import { ReactComponent as SearchLogo } from "../../assets/icons/search.svg";
import { ReactComponent as SettingsLogo } from "../../assets/icons/settings.svg";
import { ReactComponent as Logo1 } from "../../assets/images/avatar1.svg";
import { ReactComponent as Logo2 } from "../../assets/images/avatar2.svg";
import profilePhoto from "../../assets/images/profile-photo.svg";
import Logo from "../Logo/Logo";
import { ReactComponent as MainLogo } from "./../../assets/images/bingeboxlogo.svg";
import CategoryType from "../CategoryType/CategoryType";
import { useSelector ,useDispatch} from "react-redux";
import { dummyData } from "../../mockData/accountsMockData";
import { AccountAction } from "../../redux/AccountSlice";
import { UserContext } from "../../context/Context/UserContext/UserState";

const Header = () => {
  const [selected, setSelected] = useState("1");
  const [profile, setProfile] = useState(false);
  const dispatch=useDispatch()
  const selectedAccount=useSelector((state)=>state.account.currentAccount)
    console.log("in header",selectedAccount)
  const {searchText,setSearchText} = useContext(UserContext)
  const [helperSearchText,setHelperSearchText] = useState('')
  const navigate = useNavigate()
  const genres = [
    "Horror",
    "Romantic",
    "Comedy",
    "Action",
    "Thrillers",
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
  const check = (value) => {
    console.log("Value:", value);
  };
  const handleChangingAccount=(account)=>{
    dispatch(AccountAction.selectCurrentAccount(account))

  }

  const searchTextFunction = (e) => {
    setHelperSearchText(e.target.value)
  }
  const profileNavigate = (e) => {
    navigate('/profile')
  }
  const searchPageOpen = () => {
    setSearchText(helperSearchText)
    navigate(`/searchresults/${helperSearchText}`,{state:searchText})
  }

  return (
    <div className="d-flex justify-content-between w-100 align-items-end header-container">
      {/* <Logo className="w-30" /> */}
      <MainLogo />
      <div className="w-30">
        <div className="d-flex justify-content-between">
          <NavLink
            //    to="/movies"
            className={selected === "1" ? "header-link-active-style" : ""}
            onClick={() => {
              setSelected("1");
            }}
          >
            Movies
          </NavLink>
          <NavLink
            //  to="/series"
            className={selected === "2" ? "header-link-active-style" : ""}
            onClick={() => {
              setSelected("2");
            }}
          >
            Series
          </NavLink>
          <NavLink
            //to="/tv-shows"
            className={selected === "3" ? "header-link-active-style" : ""}
            onClick={() => {
              setSelected("3");
            }}
          >
            TV Shows
          </NavLink>

          <NavLink
            //to="/anime"
            className={selected === "4" ? "header-link-active-style" : ""}
            onClick={() => {
              setSelected("4");
            }}
          >
            Anime
          </NavLink>
          <NavLink
            //to="/anime"
            className={selected === "5" ? "header-link-active-style" : ""}
            onClick={() => {
              setSelected("5");
            }}
          >
            Categories
          </NavLink>
        </div>
        {selected === "5" && (
          <div className="category-box w-30">
            <div className="genres-box-1">
              <span style={{ color: "white" }}>Genres</span>
              <div className="genres-box">
                {genres.map((item) => {
                  console.log("Item:", item);
                  return <CategoryType text={item} />;
                })}
              </div>
            </div>
            <div className="languages-box-1">
              <span style={{ color: "white" }}>Languages</span>
              <div className="genres-box">
                {languages.map((item) => {
                  console.log("Item:", item);
                  return <CategoryType text={item} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex  align-items-end w-40">
        <div className=" search-box">
          &nbsp; <SearchLogo width="1.3rem" height="1.3rem" onClick={(e)=>{searchPageOpen()}}/>
          <input
            type="text"
            placeholder="search here"
            style={{ color: "white" , borderColor:"transparent" }}
            onChange={(e)=>{searchTextFunction(e)}}
          />
        </div>
        <div>
          <div className=" last-container">
            <NotifiactionLogo
              width="1.1rem"
              height="1.3rem"
              className="noti-icon"
            />
            <img
              src={selectedAccount.img}
              className="profile-style"
              onClick={() => {
                setProfile(!profile);
              }}
            />
          </div>

          {profile && 
            ( 
              <div className="profile-box">
              <div className=""></div>
              <div className="selected-1">&nbsp;&nbsp;&nbsp; Manisha Singh</div>
              {
               dummyData.accounts.length>1&&( 
               <div className="avatar-box">
              <div className="line-2"></div>
              <div className="avatar-box">
              &nbsp;&nbsp;&nbsp;
              {
                dummyData.accounts.filter((account)=>account.name!==selectedAccount.name).map((account)=>(
                  <div>
              <img src={account.img} onClick={()=>handleChangingAccount(account)}/>
                  <div className="avatar-text">{account.name}</div>
                </div>
                ))
              }
                
              </div>
              </div>
               )
              }
              </div>)}
              <div className="Box-1 mt-3" >
              <div className="line-2"></div>
              <div className="Box-1"  onClick={(e)=>{profileNavigate(e)}}>
             <SettingsLogo style={{marginLeft:"6%"}}/>&nbsp;&nbsp; Profile
              </div>
              <div className="line-2"></div>
              <div className="Box-1" >
             <SettingsLogo style={{marginLeft:"6%"}}/>&nbsp;&nbsp; Help
              </div>
              <div className="sign-out-button">
                  Sign out
              </div>
            </div>
           
          
        </div>
      </div>
    </div>
  );
};

export default Header;