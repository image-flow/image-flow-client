import ReactFlow, {
  Background,
  BackgroundVariant,
  removeElements,
  addEdge,
  Edge,
  Elements,
  Connection,
  MiniMap,
  Controls,
  Node,
} from "react-flow-renderer";
import React, { useState } from "react";

import Navbar from "@components/Navbar/Navbar";

import GrayscaleNode from "@components/CustomNodes/GrayscaleNode/GrayscaleNode";
import ImageInputNode from "@components/CustomNodes/ImageInputNode/ImageInputNode";
import SaturationNode from "@components/CustomNodes/SaturationNode/SaturationNode";
import FilmGrainNode from "@components/CustomNodes/FilmGrainNode/FilmGrainNode";

const initialElements: Elements<any> = [
  {
    id: "1",
    type: "imageInput",
    position: { x: 0, y: 0 },
    data: {},
  },
  {
    id: "2",
    type: "grayscale",
    position: { x: 200, y: 50 },
    data: { percent: 57 },
  },
  {
    id: "3",
    type: "saturation",
    position: { x: 400, y: 25 },
    data: { percent: 45 },
  },
  {
    id: "4",
    type: "filmGrain",
    position: { x: 650, y: 25 },
    data: { percent: 15 },
  },
];

const nodeTypes = {
  grayscale: GrayscaleNode,
  saturation: SaturationNode,
  imageInput: ImageInputNode,
  filmGrain: FilmGrainNode,
};

const Editor = () => {
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params: Edge<any> | Connection) =>
    setElements((els: Elements<any>) =>
      addEdge({ ...params, animated: true }, els)
    );

  const onElementsRemove = (elementsToRemove: Elements<any>) =>
    setElements((els: Elements<any>) => removeElements(elementsToRemove, els));

  const logElements = () => {
    console.log(elements);
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <Navbar />
      <div style={{ height: 650 }}>
        <ReactFlow
          elements={elements}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          deleteKeyCode={46}
        >
          <MiniMap
            nodeStrokeColor={(n: any) => {
              if (n.style?.background) return n.style.background;
              return "#444";
            }}
            nodeColor={(n: any) => {
              if (n.style?.background) return n.style.background;

              return "#eee";
            }}
            nodeBorderRadius={5}
          />
          <Background
            variant={BackgroundVariant.Dots}
            gap={15}
            size={0.66}
            color="#aaa"
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Editor;
