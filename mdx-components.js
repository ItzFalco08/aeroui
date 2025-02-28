import React from "react";

// Custom MDX Components
export function useMDXComponents(components) {
  return {
    h1: (props) => <h1 className="font-semibold text-3xl" {...props}/>,
    h2: (props) => <h2 className="title border-b " {...props} />,
    h3: (props) => <h3 className="text-xl font-semibold mt-4" {...props}/>,
    h4: (props) => <h4 className=" text-zinc-400 mt-2" {...props}/>,
    p: (props) => <p className="para !max-w-2xl" {...props} />,
    strong: (props) => <strong className="strong text-white" {...props}/> ,
    ...components,
  };
}
