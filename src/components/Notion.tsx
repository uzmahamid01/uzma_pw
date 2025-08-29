export function Notion() {
  return (
    <footer className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
         <div className="mb-16">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-12">
            [/my notion space]
          </h2>
        </div>
        
        <a
          href="https://uzma.super.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-[500px] md:h-[400px] border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <iframe
            src="https://uzma.super.site/"
            className="w-full h-full pointer-events-none"
            title="Uzma Notion Demo"
            frameBorder="0"
          ></iframe>
        </a>
      </div>
    </footer>
  );
}
