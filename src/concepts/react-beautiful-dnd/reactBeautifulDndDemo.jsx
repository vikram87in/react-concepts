import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';
import initialData from './initial-data';
const StyledContainer = styled.div`
display: flex
`;

const ReactBeautifulDndDemo = () => {

  const [tasks, setTasks] = useState(initialData.tasks);
  const [columns, setColumns] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  
  const onDragEnd = () => {
    console.log('ondrag..');
  };

  return <DragDropContext onDragEnd={onDragEnd}>
    <StyledContainer>
      {
        columnOrder.map(columnId => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map(taskId => tasks[taskId]);
          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })
      }
    </StyledContainer>
  </DragDropContext>;
};

export default ReactBeautifulDndDemo;