
import { createReactBlockSpec } from "@blocknote/react";

export const sceneBlock = createReactBlockSpec(
  {
    type: "scene",
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
        <div className="font-bold uppercase text-foreground py-2">
          <input
            type="text"
            value={props.block.props.text}
            onChange={(e) =>
              props.editor.updateBlock(props.block, {
                props: { text: e.target.value },
              })
            }
            placeholder="INT./EXT. UBICACIÓN - DÍA/NOCHE"
            className="w-full bg-transparent border-none outline-none font-bold uppercase placeholder-muted-foreground"
          />
        </div>
      );
    },
  }
);
