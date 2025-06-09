
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
    schema: {
      blockSpecs: {
        scene: sceneBlock,
        action: actionBlock,
        character: characterBlock,
        parenthetical: parentheticalBlock,
        dialogue: dialogueBlock,
        transition: transitionBlock,
      },
    },
    initialContent: [
      {
        type: "scene",
        props: { text: "INT. OFICINA - DÍA" },
      },
      {
        type: "action",
        props: { text: "JUAN, un hombre de 30 años, está sentado frente a su escritorio. Mira fijamente la pantalla de su computadora." },
      },
      {
        type: "character",
        props: { text: "JUAN" },
      },
      {
        type: "parenthetical",
        props: { text: "suspirando" },
      },
      {
        type: "dialogue",
        props: { text: "No puedo creer que haya llegado a esto." },
      },
      {
        type: "action",
        props: { text: "Se recuesta en su silla y cierra los ojos por un momento." },
      },
      {
        type: "transition",
        props: { text: "CORTE A:" },
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
