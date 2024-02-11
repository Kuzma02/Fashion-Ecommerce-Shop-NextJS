import React from "react";
import Image from "next/image";

const CategoryPreview = () => {
  return (
    <>
    <h2 className="text-center text-5xl py-10">Featured Categories</h2>
    <div className="grid h-[600px] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="relative flex">
        <Image
          fill
          src="/static/banner1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
          <h2 className="text-lg font-medium text-white text-opacity-75">
            Self-Improvement
          </h2>
          <p className="mt-1 text-2xl font-medium text-white">
            Journals and note-taking
          </p>
          <a
            href="#"
            className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop now
          </a>
        </div>
      </div>
      <div className="relative flex">
        <Image
          fill
          src="/static/banner2.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
          <h2 className="text-lg font-medium text-white text-opacity-75">
            Desk and Office
          </h2>
          <p className="mt-1 text-2xl font-medium text-white">
            Work from home accessories
          </p>
          <a
            href="#"
            className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            Shop now
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoryPreview;
