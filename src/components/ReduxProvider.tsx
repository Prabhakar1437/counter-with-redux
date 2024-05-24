"use client";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

export default ReduxProvider;
