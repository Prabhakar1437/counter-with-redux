"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { SetCountValue } from "@/redux/counterSlice";
export default function Home() {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen justify-center items-center flex-col gap-10">
      <h1 className="text-6xl font-bold text-center">Count : {count}</h1>

      <div className="flex gap-5">
        <button
          className="bg-green-950 text-white px-5 py-2"
          onClick={() => {
            dispatch(SetCountValue(count + 1));
          }}
        >
          Increment
        </button>
        <button
          className="bg-green-950 text-white px-5 py-2"
          onClick={() => {
            dispatch(SetCountValue(count - 1));
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
