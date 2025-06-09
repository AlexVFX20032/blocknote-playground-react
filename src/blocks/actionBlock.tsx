
import { createReactBlockSpec } from "@blocknote/react";

export const actionBlock = createReactBlockSpec(
  {
    type: "action",
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
        <div className="py-1">
          <textarea
            value={props.block.props.text}
            onChange={(e) =>
              props.editor.updateBlock(props.block, {
                props: { text: e.target.value },
              })
            }
            placeholder="Descripción de la acción..."
            className="w-full bg-transparent border-none outline-none resize-none placeholder-muted-foreground"
            rows={Math.max(1, props.block.props.text.split('\n').length)}
          />
        </div>
      );
    },
  }
);
