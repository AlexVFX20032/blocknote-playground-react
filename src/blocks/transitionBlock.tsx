
import { createReactBlockSpec } from "@blocknote/react";

export const transitionBlock = createReactBlockSpec(
  {
    type: "transition",
    propSchema: {
      text: {
        default: "",
      },
    },
    content: "none",
  },
  {
    render: (props) => {
      return (
        <div className="text-right py-2">
          <input
            type="text"
            value={props.block.props.text}
            onChange={(e) =>
              props.editor.updateBlock(props.block, {
                props: { text: e.target.value.toUpperCase() },
              })
            }
            placeholder="CORTE A:"
            className="bg-transparent border-none outline-none text-right uppercase placeholder-muted-foreground"
          />
        </div>
      );
    },
  }
);
