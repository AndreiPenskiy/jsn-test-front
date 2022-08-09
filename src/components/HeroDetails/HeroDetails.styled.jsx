import styled from "styled-components";

export const Container = styled.div`
padding: 20px 15px;
  margin-bottom: 50px;
  -webkit-box-shadow: 13px 10px 32px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 13px 10px 32px -3px rgba(0,0,0,0.75);
box-shadow: 13px 10px 32px -3px rgba(0,0,0,0.75);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`
export const Image = styled.img`
border-radius: 4px;
  margin-right: 30px;
  max-height: 593px;
  width: 300px;
  position: relative;
`
export const ButtonBack = styled.button`
  margin-bottom: 40px;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:focus {
  color: #171e29;
}
&:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
&:active {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
@media (min-width: 768px) {
    min-width: 170px;
}
`

export const TextDescription = styled.div`
padding: 10px;
margin-bottom: 20px;
`

export const NicknameTitle = styled.h2`
font-size: 30px;
padding-bottom: 20px;
`

export const RealNameTitle = styled.h3`
font-size: 18px;
padding-bottom: 10px;
`

export const Text = styled.p`
margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
flex-direction: column;
`

export const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`

export const SecondaryButton = styled.button`
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 44px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:focus {
  color: #171e29;
}
&:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
&:active {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}
&:not(:last-child) {
  margin-right: 15px;
}
@media (min-width: 768px) {
    min-width: 120px;
}
`