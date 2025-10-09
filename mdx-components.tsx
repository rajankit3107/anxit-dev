import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mt-8 mb-4 text-4xl font-bold" {...props} />,
    p: (props) => (
      <p className="mb-4 leading-relaxed text-gray-700" {...props} />
    ),
    ...components,
  };
}
