import React from "react";


// Class Component
class ClassCounter extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
}


increment = () => this.setState((s) => ({ count: s.count + 1 }));
decrement = () =>
this.setState((s) => ({ count: Math.max(0, s.count - 1) }));


render() {
return (
<div className="max-w-sm w-full bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg">
<h3 className="text-xl font-semibold mb-4 text-slate-700">Class Component Counter</h3>
<div className="flex items-center justify-between gap-4">
<button
onClick={this.decrement}
aria-label="class-decrement"
className="px-4 py-2 rounded-lg text-lg font-bold shadow-sm hover:scale-95 active:translate-y-0.5"
>
-
</button>


<div className="text-3xl font-extrabold w-20 text-center">{this.state.count}</div>


<button
onClick={this.increment}
aria-label="class-increment"
className="px-4 py-2 rounded-lg text-lg font-bold shadow-sm hover:scale-105 active:translate-y-0.5"
>
+
</button>
</div>
</div>
);
}
}

export default ClassCounter;