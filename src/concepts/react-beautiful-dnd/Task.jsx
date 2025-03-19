import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const StyledTaskDiv = styled.div`
background-color: pink;
border: 2px solid black;
padding: 15px 20px;
width: 70%;
border-radius: 7px;
color: black;
font-weight: 700
`;

const Task = ({ content, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {
        (provided) => {
          return <StyledTaskDiv {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            {content}
          </StyledTaskDiv>;
        }
      }
    </Draggable>
  );
};

export default Task;