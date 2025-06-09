
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

const BlockNoteEditor = () => {
  // Creates a new editor instance with some initial content
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to BlockNote! 👋",
      },
      {
        type: "paragraph",
        content: "This is a demo of the BlockNote rich text editor. Try typing, creating blocks, and exploring all the features:",
      },
      {
        type: "bulletListItem",
        content: "Type '/' to see all available blocks",
      },
      {
        type: "bulletListItem", 
        content: "Use drag handles to reorder blocks",
      },
      {
        type: "bulletListItem",
        content: "Select text to see formatting options",
      },
      {
        type: "heading",
        content: "Features",
      },
      {
        type: "paragraph",
        content: "BlockNote supports headings, lists, tables, images, and much more. It's built with TypeScript and provides a great developer experience.",
      },
    ],
  });

  // Renders the editor instance using a React component
  return (
    <div className="w-full max-w-4xl mx-auto">
      <BlockNoteView 
        editor={editor} 
        theme="light"
        className="min-h-[500px]"
      />
    </div>
  );
};

export default BlockNoteEditor;
