import * as React from "react";
import styled from 'styled-components';

const TagComponent = styled.div`
  width:50%;
  padding: 150px 16px;
  margin: 10px auto;
  color: white;
  text-align: center;

`;

const NotFound = () =>

    <TagComponent>
        <h1>404 Not Found!</h1>
    </TagComponent>

export default NotFound;