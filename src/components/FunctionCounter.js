import React from "react";

function FunctionCounter() {
let count = 0;


function increment() {
  count++;
  const label = document.getElementById("funcCount");
  if (label) label.innerText = count;
}

function decrement() {
  count = Math.max(0, count - 1);
  const label = document.getElementById("funcCount");
  if (label) label.innerText = count;
}

return (
<div className="max-w-sm w-full bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
<h3 className="text-xl font-semibold mb-4 text-slate-700">Functional Component Counter</h3>
<div className="flex items-center justify-between gap-4">
<button
onClick={decrement}
className="px-4 py-2 rounded-lg text-lg font-bold shadow-sm hover:scale-95 active:translate-y-0.5"
>
-
</button>


<div id="funcCount" className="text-3xl font-extrabold w-20 text-center">0</div>


<button
onClick={increment}
className="px-4 py-2 rounded-lg text-lg font-bold shadow-sm hover:scale-105 active:translate-y-0.5"
>
+
</button>
</div>
</div>
);
}
export default FunctionCounter;