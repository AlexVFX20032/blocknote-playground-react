
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { sceneBlock } from "../blocks/sceneBlock";
import { actionBlock } from "../blocks/actionBlock";
import { characterBlock } from "../blocks/characterBlock";
import { parentheticalBlock } from "../blocks/parentheticalBlock";
import { dialogueBlock } from "../blocks/dialogueBlock";
import { transitionBlock } from "../blocks/transitionBlock";

// Crear el schema personalizado que incluye los bloques por defecto y los personalizados
const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Incluir los bloques por defecto
    ...defaultBlockSpecs,
    // Agregar nuestros bloques personalizados
    scene: sceneBlock,
    action: actionBlock,
    character: characterBlock,
    parenthetical: parentheticalBlock,
    dialogue: dialogueBlock,
    transition: transitionBlock,
  },
});

const BlockNoteEditor = () => {
  // Crea una nueva instancia del editor con el schema personalizado
  const editor = useCreateBlockNote({
    schema,
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
        editor={editor as any}
        theme="light"
        className="min-h-[500px] screenplay-editor"
      />
    </div>
  );
};

export default BlockNoteEditor;
