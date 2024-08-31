import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';


const StyledColumn = styled.div`
  margin: 3px;
  background-color: white;
  border: 3px solid yellow;
  border-radius: 7px;
  padding: 10px 70px;
  width: 500px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.h2`
  color: black;
  margin-bottom: 20px;
`

const StyledTaskList = styled.div`
background: grey;
padding: 30px;
display: flex;
justify-content: start;
flex-direction: column;
align-items: center;
gap: 20px;
width: 100%;
min-height: 70px;
`
const Column = ({ column, tasks }) => {
  return (
    <StyledColumn className='column'>
      <StyledTitle className='title'>{column.title}</StyledTitle>
      <Droppable droppableId={column.id}>
        {
          (provided)=>{
            return <StyledTaskList className='tasklist'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {tasks.map((task, index) => <Task content={task.content} index={index} id={task.id} key={task.id} />)}
            {provided.placeholder}
          </StyledTaskList>
          }
        }
      </Droppable>
    </StyledColumn>
  )
}

export default Column