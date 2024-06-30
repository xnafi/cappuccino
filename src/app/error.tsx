/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function error() {
  return (
    <div className="bg-black text-white">
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-6xl">Something Went Wrong</h1>
          <p className="text-sm md:text-base text-yellow-300 p-2 mb-4">
            The stuff you were looking for doesn't exist
          </p>
          <a
            href="/"
            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
          >
            Retry
          </a>
        </div>
      </div>
    </div>
  );
}
