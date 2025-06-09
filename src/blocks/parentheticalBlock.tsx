
import { createReactBlockSpec } from "@blocknote/react";

export const parentheticalBlock = createReactBlockSpec(
  {
    type: "parenthetical",
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
        <div className="text-center py-1">
          <span className="text-muted-foreground">(</span>
          <input
            type="text"
            value={props.block.props.text}
            onChange={(e) =>
              props.editor.updateBlock(props.block, {
                props: { text: e.target.value },
              })
            }
            placeholder="indicación actoral"
            className="bg-transparent border-none outline-none text-center placeholder-muted-foreground mx-1"
          />
          <span className="text-muted-foreground">)</span>
        </div>
      );
    },
  }
);
