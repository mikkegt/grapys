import { graphChat as graphChatOpenAI } from "../graph/chat";
import { graphChat as graphChatTinySwallow } from "../graph/chat_tinyswallow";
import { graphChat as graphChatAlone } from "../graph/chat_alone";
import { graphData as graphDataReducerPush } from "../graph/reducer_push";
import { graphData as graphDataReducerPop } from "../graph/reducer_pop";
import { graphData as graphDataTools } from "../graph/tools1";

export const graphs = [
  { name: "Chat(WebLLM)", graph: graphChatTinySwallow },
  { name: "Chat(Alone)", graph: graphChatAlone },
  { name: "Chat(OpenAI)", graph: graphChatOpenAI },
  { name: "Reducer(push)", graph: graphDataReducerPush },
  { name: "Reducer(pop)", graph: graphDataReducerPop },
  { name: "Tools", graph: graphDataTools },
];

export const graphConfigs = {
  openAIAgent: {
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
    forWeb: true,
  },
  anthropicAgent: {
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    forWeb: true,
  },
  geminiAgent: {
    apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
    forWeb: true,
  },
};
