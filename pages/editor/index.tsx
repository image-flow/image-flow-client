import ReactFlow, {
  Background,
  BackgroundVariant,
  removeElements,
  addEdge,
  Edge,
  Elements,
  Connection,
} from "react-flow-renderer";
import React, { useState } from "react";

import Navbar from "@components/Navbar/Navbar";
import GrayscaleNode from "@components/CustomNodes/Grayscale/GrayscaleNode";
import ImageInputNode from "@components/CustomNodes/ImageInputNode/ImageInputNode";

const initialElements: Elements<any> = [
  {
    id: "1",
    type: "imageInput",
    position: { x: 250, y: 25 },
    data: { label: "input Node" },
  },
  {
    id: "2",
    type: "grayscale",
    position: { x: 100, y: 100 },
    data: { label: "Output Node" },
  },
];

const nodeTypes = {
  grayscale: GrayscaleNode,
  imageInput: ImageInputNode,
};

const Editor = () => {
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params: Edge<any> | Connection) =>
    setElements((els: Elements<any>) => addEdge(params, els));

  const onElementsRemove = (elementsToRemove: Elements<any>) =>
    setElements((els: Elements<any>) => removeElements(elementsToRemove, els));

  return (
    <div>
      <Navbar />
      <div style={{ height: 750 }}>
        <ReactFlow
          elements={elements}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          deleteKeyCode={46}
        >
          <Background variant={BackgroundVariant.Dots} gap={15} size={0.5} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Editor;
