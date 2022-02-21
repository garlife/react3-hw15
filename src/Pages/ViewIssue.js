import { GithubOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { CreateIssue, LoadItem, UpdateIssue } from "../API/Services";

const { TextArea } = Input;

export const setTitleIssue = (titleIssueText) => {
  const bodyText = "created issue by API";
  Modal.success({
    title: "Введите текст обращения",
    content: (
      <TextArea
        onChange={(event) => {
          titleIssueText = event.target.value;
        }}
        rows="4"
      />
    ),
    afterClose: () => {
      CreateIssue(titleIssueText, bodyText);
    },
    okText: "Отправить",
  });
};


function View({ columnsFromBackend }) {
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    LoadItem(setColumns);
  }, []);

  const onDragEnd = (result, columns, setColumns) => {
    //console.log(result, columns)
    if (!result.destination) return;
    const { source, destination } = result;
    // console.log(result, columns, source, destination )
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
    //console.log( result.draggableId, destination.droppableId )
    UpdateIssue(result.draggableId, destination.droppableId);
    console.log(result.draggableId, destination.droppableId);
  };
  

  return (
    <>
      <Button
        type="primary"
        ghost
        onClick={() => {
          console.log("load data");
          LoadItem(setColumns);
        }}
      >
        Обновить
      </Button>
      <Button
        type="primary"
        ghost
        onClick={() => {
          console.log("create issue");
          setTitleIssue();
        }}
        icon={<PlusOutlined />}
      >
        Создать issue
      </Button>

      <Button type="link" href="https://github.com/garlife/react3-hw15/issues" target="_blank" size="large" icon={<GithubOutlined />}>GitHub
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
                <h2>Статус Issues: {column.name}</h2>
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
