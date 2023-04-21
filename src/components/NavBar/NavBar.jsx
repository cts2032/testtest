import React, { useState } from "react";
import {
  Button,
  Click,
  Nav,
  NavButtons,
  Search,
  UserList,
  UserListForm,
} from "./NavBarSty";

const NavBar = () => {
  const menuItems = [
    {
      text: "공지사항",
    },
    {
      text: "인기 레시피",
    },
    {
      text: "AI추천",
    },
  ];

  const [view, setView] = useState(false);

  return (
    <Nav>
      <Search>
        <input type="text" placeholder="만들고싶은 요리를 검색해보세요." />
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          className="material-icons"
        >
          search
        </button>
      </Search>
      <NavButtons>
        {/* <Button>
          <span class="material-symbols-outlined">person_add</span>
        </Button>
        <Link to="/login">
          <Button>
            <span class="material-symbols-outlined">login</span>
          </Button>
        </Link> */}
        <Button>
          <div>
            <ul
              onClick={() => {
                setView(!view);
              }}
            >
              <span className="material-symbols-outlined">menu</span>
              {view && (
                <>
                  <UserListForm>
                    <Click>
                      {menuItems.map((item, index) => {
                        return (
                          <UserList key={index} onClick={item.onClick}>
                            {item.text}
                          </UserList>
                        );
                      })}
                    </Click>
                  </UserListForm>
                </>
              )}
            </ul>
          </div>
        </Button>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;
