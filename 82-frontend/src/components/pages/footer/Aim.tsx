import * as React from "react";
import styled from 'styled-components';


const TagComponent = styled.div`
  width:100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top: -20px;
  margin-bottom: -20px;
  background-color: rgb(19, 19, 18);

`;

const Header = styled.h1`
  margin:0;
  padding: 16px 16px;
  color: white;
  font-size: 20px;
  min-height: 10vh;


`;

const StyledText = styled.div`
  color: white;
  text-align: center; 
  font-size: 20px;
  padding-top: 100px;
  margin-left: auto;
    margin-right: auto;
    width: 50%;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 
`;



class Aim extends React.Component {
    render() {
        return (
            <TagComponent>
                <Header><h1>Our Aim</h1></Header>
                  <StyledText>
                  <p>Our object is to improve human learning speed.</p>
                  <p>We use the following process to enable a better learning experience that the user can apply to any example</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                  <p>We work hard to provide any interesting model that targets practice</p>
                </StyledText>
            </TagComponent>

        )
    }
}

export default Aim;