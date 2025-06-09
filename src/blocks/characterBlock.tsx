
import { createReactBlockSpec } from "@blocknote/react";

export const characterBlock = createReactBlockSpec(
  {
    type: "character",
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
        <div className="text-center py-2">
          <input
            type="text"
            value={props.block.props.text}
            onChange={(e) =>
              props.editor.updateBlock(props.block, {
                props: { text: e.target.value.toUpperCase() },
              })
            }
            placeholder="NOMBRE DEL PERSONAJE"
            className="bg-transparent border-none outline-none text-center uppercase placeholder-muted-foreground"
          />
        </div>
      );
    },
  }
);
