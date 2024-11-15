import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  console.log("auth", auth);

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <header className="py-2 flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="w-32 sm:w-40 md:w-44 lg:w-52 object-contain"
      />
      {auth?.currentUser && (
        <div className="flex items-center">
          {/* Profile icons & menu */}
          <div className="relative">
            <div className="flex items-center gap-2" onMouseEnter={openMenu}>
              <img
                src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                alt="profile-icon"
                className="relative"
              />
              {showMenu ? (
                <i className="ri-arrow-up-s-fill ri-1x"></i>
              ) : (
                <i className="ri-arrow-down-s-fill ri-1x"></i>
              )}
            </div>

            {showMenu && (
              <div
                className="absolute top-10 right-0"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
              >
                <ul className="menu bg-base-200 rounded-box w-32">
                  <li>
                    <p>Profile</p>
                  </li>
                  <li>
                    <p onClick={logoutHandler}>Log out</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
