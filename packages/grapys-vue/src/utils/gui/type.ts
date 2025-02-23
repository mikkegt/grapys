import type { DefaultParamsType } from "graphai";

export type StaticNodeType = "text" | "data" | "number" | "boolean";

export type ApplicationData = {
  // Application dependent data
  // agent?: string; // actual agent id
  guiAgentId?: string; // key of utils/gui/utils/data.
  value?: unknown; // ResultData<DefaultResultData>;
  staticNodeType?: StaticNodeType;
  params?: DefaultParamsType;
  isResult?: boolean;
};

export type Position = { x: number; y: number };
export type NodePosition = Position & {
  width: number;
  height: number;
} ;
export type NodePositionData = Position & {
  width?: number;
  height?: number;
  outputCenters?: number[];
  inputCenters?: number[];
};
export type UpdateNodePositionData =
  | NodePosition
  | { width: number; height: number; outputCenters: number[]; inputCenters: number[] };

export type GUINodeDataType = "computed" | "static";
export type GUINodeData<T = ApplicationData> = {
  type: GUINodeDataType;
  nodeId: string;
  position: NodePositionData;
  data: T;
};

export type UpdateStaticValue = {
  staticNodeType: StaticNodeType;
  value: string | number | boolean;
};

export type GUINodeDataRecord = Record<string, GUINodeData>;

export type EdgeEndPointData = {
  nodeId: string;
  index: number;
};

export type GUIEdgeDataType = "edge"; // TODO
export type GUIEdgeData = {
  type: GUIEdgeDataType;
  source: EdgeEndPointData;
  target: EdgeEndPointData;
};

export type EdgeFormToData = {
  data: GUINodeData;
} & EdgeEndPointData;

export type EdgeData = {
  type: GUIEdgeDataType;
  source: EdgeFormToData;
  target: EdgeFormToData;
};

export type NewEdgeEventDirection = "outbound" | "inbound";

// x, y is clientX, clientY of mouse pointer
export type NewEdgeStartEventData = Position & {
  direction: NewEdgeEventDirection;
  index: number;
  nodeId: string;
};

export type NewEdgeEventData = Position;

export type GUINearestData = {
  nodeId: string;
  index: number;
  direction: NewEdgeEventDirection;
};

type NewEdgeMouseData = {
  data: {
    position: NodePositionData;
  };
  index?: number; // index and width, outputCenters, inputCenters never exists. for data type compatibility.
};
type NewEdgeNodeData = {
  nodeId: string;
  index: number;
  data: GUINodeData;
};

export type EdgeData2 = NewEdgeMouseData | NewEdgeNodeData;

export type NewEdgeData1 = {
  direction: "outbound";
  source: NewEdgeNodeData;
  target: NewEdgeMouseData;
};

export type NewEdgeData2 = {
  direction: "inbound";
  source: NewEdgeMouseData;
  target: NewEdgeNodeData;
};

export type NewEdgeData = NewEdgeData1 | NewEdgeData2;

export type ClosestNodeData = { node: GUINodeData; distance: number };
export type NearestData = {
  nodeId: string;
  index: number;
  direction: string;
};

export type InputOutputType = "text" | "array";
export type InputOutputData = { name: string; type?: InputOutputType };

export type ParamType = "string" | "text" | "data" | "boolean" | "float" | "int";

export type ParamData = {
  name: string;
  type: ParamType;
  defaultValue?: number;
  max?: number;
  min?: number;
};
export type AgentProfile = {
  inputs: InputOutputData[];
  outputs: InputOutputData[];
  params?: ParamData[];
  agent?: string;
  inputSchema?: unknown;
};

export type LoopDataType = "while" | "count" | "none";
export type GUILoopData = {
  loopType: LoopDataType;
  while?: string;
  count?: number;
};
export type HistoryPayload = {
  loop: GUILoopData;
  nodes: GUINodeData[];
  edges: GUIEdgeData[];
};
export type HistoryData = { name: string; data: HistoryPayload };
