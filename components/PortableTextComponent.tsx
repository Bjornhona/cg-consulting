import { PortableText, PortableTextBlock, PortableTextComponents } from "next-sanity"

const portableTextComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-left w-fit mx-auto">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-left w-fit mx-auto">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  block: {
    normal: ({ children }) => <p className="mb-2">{children}</p>
  }
};

const PortableTextComponent = ({text}: {text: PortableTextBlock[]}) => {
  return <PortableText value={text} components={portableTextComponents} />
}

export default PortableTextComponent;
