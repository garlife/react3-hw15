import React from "react";
import View from "./ViewIssue";

const columnsFromBackend = {
  open: {
    name: "Open",
    items: [],
  },
  close: {
    name: "Close",
    items: [],
  },
};

export default function GitHub() {
  return (
    <>
      <View columnsFromBackend={columnsFromBackend} />
    </>
  );
}
