
import Header from "@/components/Header";
import BlockNoteEditor from "@/components/BlockNoteEditor";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Try the Editor</h2>
            <p className="text-muted-foreground">
              Start typing, use "/" for commands, and explore all the features below
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <BlockNoteEditor />
          </div>
        </div>
      </main>

      <Features />
      
      <footer className="bg-muted py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using BlockNote, React, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
