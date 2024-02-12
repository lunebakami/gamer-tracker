import type { Component } from "solid-js";

const Sidebar: Component = () => {
  return (
    <aside class="w-1/4 flex justify-end border-r">
      <ul class="p-4 font-bold">
        <li class="p-2">Me</li>
        <li class="p-2">Waitlist</li>
        <li class="p-2">On Pause</li>
        <li class="p-2">Finished</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
