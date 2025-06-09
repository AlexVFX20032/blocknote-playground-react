
import { Type, Image, Table, List, Code, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Type,
      title: "Rich Text Formatting",
      description: "Bold, italic, underline, strikethrough, and more text formatting options"
    },
    {
      icon: List,
      title: "Lists & Structure",
      description: "Bullet lists, numbered lists, and todo lists with drag-and-drop reordering"
    },
    {
      icon: Table,
      title: "Tables",
      description: "Create and edit tables with an intuitive interface"
    },
    {
      icon: Image,
      title: "Media Support",
      description: "Embed images, videos, and other media directly in your content"
    },
    {
      icon: Code,
      title: "Code Blocks",
      description: "Syntax-highlighted code blocks with language selection"
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Themes, custom blocks, and extensive customization options"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for a modern rich text editing experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
