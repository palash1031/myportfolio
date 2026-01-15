const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              
              <span className="text-muted-foreground text-sm font-space">
                © {currentYear} All rights reserved
              </span>
            </div>
  
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground font-space">
                Hope you thought this was cool! 
              </span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 rounded-full bg-fluid-peach animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  