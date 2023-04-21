import React from "react";
import { Boards, Btn, Button, Home, MainRecipe, Notice } from "./HomePageSty";

import recipeImage from "../Image/pizza.jpg";

const HomeForm = () => {
  return (
    <Home style={{ display: "block" }}>
      <Boards>
        <Notice>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            공지사항
          </div>
          <p>1.aaaa</p>
          <p>2.aaaa</p>
          <p>3.aaaa</p>
          <p>4.aaaa</p>
          <p>5.aaaa</p>
        </Notice>
        <MainRecipe>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              인기 레시피
            </div>
            <Btn>
              <Button>주간</Button>
              <Button>월간</Button>
            </Btn>
          </div>
          <img
            style={{
              position: "relative",
              width: "100%",
              height: "80%",
              bottom: "0",
              objectFit: "contain",
            }}
            src={recipeImage}
            alt="recipeImage"
          />
          <p></p>
        </MainRecipe>
      </Boards>
    </Home>
  );
};

export default HomeForm;
