import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#1e1e1e",
        color: "#fff",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
