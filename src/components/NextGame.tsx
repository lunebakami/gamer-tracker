import { Component } from "solid-js";

type NextGameProps = {
  url: string;
};

const NextGame: Component<NextGameProps> = ({ url }) => {
  return (
    <div class="w-40 h-28 relative overflow-hidden mt-4 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        class="rounded-lg size-full object-cover"
        src={url}
        alt="product image"
      />
    </div>
  );
};

export default NextGame;
