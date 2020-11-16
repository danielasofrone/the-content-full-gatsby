import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0;
  @media (min-width: 758px) {
    margin: 0 50px;
  }
  @media (min-width: 992px) {
    margin: 0 150px;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid rgba(244, 243, 242, 0.75);
  margin-top: 70px;
  padding: 20px ;
  @media (min-width: 567px) {
    padding: 20px 50px 10px 50px;
  }
  @media (min-width: 768px) {
    padding: 50px 70px 20px 70px;
  }
`;

export const EntryTitle = styled.div`
  font-family: "Questrial", sans-serif;
  font-size: 1.125rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
  color: rgb(65, 65, 65);
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
  font-size: 1.125rem;
  text-align: left;
  margin: 20px 0;
  @media (min-width: 768px) {
    margin: 50px 0 30px 0;
  }
`;

export const ReadMoreLink = styled.div`
  margin: 20px 0;
  font-size: 1.125rem;
  display: ${({ isHomePage }) => (isHomePage ? "block" : "none")};
 a{
  color: #4089ed;
  display: ${({ isHomePage }) => (isHomePage ? "block" : "none")};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
 }
`;
