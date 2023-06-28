"use client";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="card">{(provided) => <div>{}</div>}</Droppable>
    </DragDropContext>
  );
}

export default Board;
