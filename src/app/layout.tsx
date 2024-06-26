import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "Redux with Next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
