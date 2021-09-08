import * as React from "react";
import styled from 'styled-components';
import { useHistory } from "react-router-dom";


const TagComponent = styled.div`
  width:100%;
  padding: 80px 16px;
  margin: 0px auto;
  box-sizing: border-box;
  color: white;
  text-align: center;
  margin-top:-18px;
  
  
`;

const Header = styled.h1`
  margin:0;
  padding: 16px 16px;
  color: white;
  font-size: 40px;
  min-height: 10vh;
  


`;

const TilesContainer = styled.div`
  width: 50%;
  text-align: center;
  text-align-last: center;
  padding: 5px;
  display: inline-block;
  text-align: center;
`;

const Tiles1 = styled.div`



  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;
  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;

  &:hover {
    background-color: rgba(255, 255, 255, .15);  
      border-radius: 10px;
      box-shadow: 0px 50px 50px red;
      cursor: pointer;
      
      
  }
  
`;
const Tiles2 = styled.div`

  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;

  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;

  &:hover {
    background-color: rgba(255, 255, 255, .15);  
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 50px 50px red;
  }
  
`;

const Tiles3 = styled.div`
  

  padding: 100px 100px;
  color: white;
  font-size: 20px;
  min-height: 10vh;
  border-radius: 10px;

  background-color: black;
  box-shadow: 0px 0px 50px #FF6600;
  
  &:hover {
    background-color: rgba(255, 255, 255, .15);  
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 50px 50px red;
  }
`;


const Body = styled.div`
  
  margin:0;
  padding: 1px 1px;
  color: white;
  font-size: 20px;
  min-height: 70vh;
  border-radius: 30px;
  position: relative;
  
 
`;

const StyledText = styled.div`
  color: white;
  text-align: center; 
  font-size: 20px;
  padding-top: 100px;
  padding-bottom:100px;
  text-align: justify;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 
`;

class Outline extends React.Component {
    render() {
        return (
            <TagComponent>
        
                <Body>
                <TilesContainer>
                <Tiles1 onClick={event => window.location.href = '/topic1'}>
                  <h3>TOPIC 1</h3>
                </Tiles1>
                <StyledText>
                  <p>Topic 1: lets test your knowledge on this subject...</p>
                </StyledText>
                <Tiles2 onClick={event => window.location.href = '/topic2'}>
                  <h3>TOPIC 2</h3>
                </Tiles2>
                <StyledText>
                <p>Topic 2s: lets test your knowledge on this subject...</p>
                </StyledText>
                <Tiles3 onClick={event => window.location.href = '/topic3'}>
                  <h3>TOPIC 3</h3>
                </Tiles3>
                <StyledText>
                <p>Topic 3: lets test your knowledge on this subject...</p>
                </StyledText>
                </TilesContainer>
                </Body>
            </TagComponent>

        )
    }
}

export default Outline;

