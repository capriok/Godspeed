import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';

var theme = {
  plain: {
    color: "#d3d3d3",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#eaeaea",
      }
    },
    {
      types: ["operator"],
      style: {
        color: "cadetblue",
      }
    },
    {
      types: ["keyword"],
      style: {
        color: "#95cfff",
        fontStyle: "italic",
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#6bade2",
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#ddd",
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: "#9fa0ff",
      }
    },
    {
      types: ["boolean", "number"],
      style: {
        color: "#f04444",
      }
    },
    {
      types: ["property", "function", "variable"],
      style: {
        color: "#6bddb1",
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      }
    },
    {
      types: [
        "string",
        "entity",
        "url",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder"
      ],
      style: {
        color: "#dddddd",
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
      }
    }
  ]
};

const component = {
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    const pre = {
      display: 'block',
      width: '100%',
      padding: '15px 15px 10px 15px',
      borderRadius: 5,
      overflowX: 'scroll',
      backgroundColor: 'rgb(25, 25, 25)',
      fontFamily: 'Courier New',
    }
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        theme={theme}
        language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={pre}>
            {tokens.filter((t) => t[1]).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight >
    );
  },
};
export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>;
};