import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgba(244, 243, 242, 0.75);
  margin-top: 70px;
  padding: 50px;
`;

export const EntryTitle = styled.div`
  font-family: "Questrial", sans-serif;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
  cursor: pointer;
  a {
    color: rgb(65, 65, 65);
    text-decoration: none;
    &:hover {
      color: #000;
    }
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 35px;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const ImageContainer = styled.div`
  background-color: grey;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
  }
`;

export const EntryText = styled.div`
  font-family: "Questrial", sans-serif;
  color: rgb(65, 65, 65);
  font-size: 18px;
  text-align: left;
  margin: 20px 0;
  @media (min-width: 768px) {
    margin: 50px 0 30px 0;
  }
`;