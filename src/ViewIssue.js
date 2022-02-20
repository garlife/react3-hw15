import React, { PureComponent, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import onDragEnd from "./OnDragEnd";
import LoadData from "./API/LoadData";
import CreateIssue from "./API/CreateIssue";
import { Table, Button, Modal, Input, Space } from 'antd';

const titleIssue = "title";
const bodyText = "created issue by API";

function View({ columnsFromBackend }) {
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    LoadData(setColumns);
  }, []);

  
  return (
    <>
      <Button
        type="primary"
        ghost
        onClick={() => {
          console.log("load data");
          LoadData(setColumns);
        }}
      >
        Обновить
      </Button>
      <Button
        type="primary"
        ghost
        onClick={() => {
          console.log("create issue");
          CreateIssue(titleIssue, bodyText);
        }}
      >
        Создать issue
      </Button>

      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightgreen"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

export default View;
