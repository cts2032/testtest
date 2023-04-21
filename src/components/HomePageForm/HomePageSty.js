import styled from "styled-components";

export const Home = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

// export const SliderForm = styled.div`
//   width: auto;
//   height: 400%;
//   top: 20px;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   margin-top: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   border: none;
//   background-repeat: no-repeat;
//   /*  background-size: 100% 245px; */
// `;
export const Boards = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 5px;
  height: 20vh;
  padding: 5%;
  margin-left: 32.8%;
`;
export const Notice = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 38%;
  height: 170%;
  text-align: left;
  padding: 1rem;
`;

export const MainRecipe = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  width: 38%;
  height: 170%;
  text-align: center;
`;

export const Btn = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  transition: all 0.2s;
`;

export const RecipeIs = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  background-color: #333;
  height: 150px;
  color: white;
  margin-top: 10%;
  text-align: center;
`;

export const Brand = styled.img`
  height: 50px;
`;
