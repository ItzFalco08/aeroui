
  export default function PropsTable({ data = defaultProps }) {
    return (
      <div className=" max-w-2xl overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Prop name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {data.map((prop, index) => (
                <tr
                  key={index}
                  className={`transition-colors  ${
                    index % 2 === 0 ? "bg-white dark:bg-zinc-950" : "bg-zinc-50 dark:bg-zinc-900"
                  }`}
                >
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {prop.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                    {prop.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  // Default props data
  const defaultProps = [
    {
      name: "className",
      type: "string",
      description: "adds class to the component",
    },
  ]
  
  