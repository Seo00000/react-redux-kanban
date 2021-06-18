import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  DragStart,
  DragUpdate,
  Droppable,
  DroppableStateSnapshot,
  DropResult,
  resetServerContext,
  ResponderProvided,
} from 'react-beautiful-dnd';
// import * as ReactDOM from 'react-dom';

interface Item {
  id: string;
  content: string;
}

const getItems = (count: number): Item[] => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `${k}`,
    content: `item ${k}`,
  }));
};

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (draggableStyle: any, isDragging: any) => ({
  userSelect: 'none',
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  width: 250,
});

interface AppState {
  items: Item[];
}

export default function Test() {
  resetServerContext();
  // useEffect(() => {
  //   resetServerContext();
  // }, []);
  const [items, setItems] = useState(getItems(10));

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) {
      return;
    }

    setItems(reorder(items, result.source.index, result.destination.index));
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {
                    // tslint:disable-next-line:no-shadowed-variable
                    (provided, snapshot) => (
                      <div>
                        <div
                          ref={provided.innerRef}
                          style={getItemStyle(provided.draggableStyle, snapshot.isDragging)}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.content}
                        </div>
                        {/* {provided.placeholder} */}
                      </div>
                    )
                  }
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

// interface todoType {
//   id: string;
//   title: string;
// }

// const todos: todoType[] = [
//   { id: '1', title: '공부' },
//   { id: '2', title: '헬스' },
//   { id: '3', title: '독서' },
//   { id: '4', title: '산책' },
//   { id: '5', title: '요리' },
// ];

// // const onDragEnd = (result) => {
// //   if (!result.destination) return;
// //   // console.log(result);
// //   // const items = [...todos];
// //   // const [reorderedItem] = items.splice(result.source.index, 1);
// //   // items.splice(result.destination.index, 0, reorderedItem);

// //   // setTodos(items);
// // };

// export default function DndTest() {
//   // const { droppableId, list, type } = props;
//   return (
//     <DragDropContext>
//       <Droppable droppableId="todos" type={'TASK'}>
//         {(provided) => (
//           <ul className="todos">
//             {todos.map(({ id, title }) => (
//               <Draggable key={id} draggableId={id} /* index={index}*/>
//                 {(provided) => (
//                   <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
//                     {title}
//                   </li>
//                 )}
//               </Draggable>
//             ))}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
