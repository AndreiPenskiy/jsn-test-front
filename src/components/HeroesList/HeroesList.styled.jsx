import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 350px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #558FE3;
`

export const HeroImage = styled.img`
  height: 300px;
  width: 220px;
  overflow: hidden;
`
export const ListItem = styled.li`
list-style: none;
  min-width: 185px;
  max-width: 220px;
  height: 330px;
  background-color: #c42f37;
  border-radius: 3px;
  transition: transform 300ms linear;
  box-shadow: 1px 3px 10px -4px #050505;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 17px 0px #313232;
    border-radius: 3px;
    transform: scale(1.01);
  }
`

export const HeroNickname = styled.p`
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 46px;
  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
  margin-bottom: 80px;
`
export const Section = styled.section`
padding: 0 40px;
`
