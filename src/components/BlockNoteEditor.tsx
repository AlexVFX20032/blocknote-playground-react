
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { sceneBlock } from "../blocks/sceneBlock";
import { actionBlock } from "../blocks/actionBlock";
import { characterBlock } from "../blocks/characterBlock";
import { parentheticalBlock } from "../blocks/parentheticalBlock";
import { dialogueBlock } from "../blocks/dialogueBlock";
import { transitionBlock } from "../blocks/transitionBlock";

const BlockNoteEditor = () => {
  // Crea una nueva instancia del editor con los bloques personalizados
  const editor = useCreateBlockNote({
    blockSpecs: {
      // Incluye los bloques por defecto
      scene: sceneBlock,
      action: actionBlock,
      character: characterBlock,
      parenthetical: parentheticalBlock,
      dialogue: dialogueBlock,
      transition: transitionBlock,
    },
    initialContent: [
      {
        type: "paragraph",
        content: "Editor de Guiones - Usa / para agregar bloques personalizados",
      },
    ],
  });

  // Renderiza la instancia del editor usando un componente React
  return (
    <div className="w-full max-w-4xl mx-auto">
      <BlockNoteView 
        editor={editor} 
        theme="light"
        className="min-h-[500px] screenplay-editor"
      />
    </div>
  );
};

export default BlockNoteEditor;
