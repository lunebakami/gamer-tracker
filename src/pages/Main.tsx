import { Component } from "solid-js";
import NextGame from "../components/NextGame";
import Sidebar from "../components/Sidebar";

const Main: Component = () => {
  const url =
    "https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png";
  return (
    <>
      <Sidebar />
      <main class="pl-12">
        <div class="flex flex-col py-4">
          <h2 class="text-3xl font-bold">Your current game is:</h2>
          <div class="flex mt-4 gap-4">
            <div class="w-56 h-72 relative overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                class="rounded-lg size-full object-cover"
                src={url}
                alt="product image"
              />
            </div>
            <div>
              <span> Dark Souls </span>
            </div>
          </div>
        </div>
        <div>
          Your next games are:
          <ul class="flex gap-4">
            <li>
              <NextGame url={url} />
            </li>
            <li>
              <NextGame url={url} />
            </li>
            <li>
              <NextGame url={url} />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Main;
