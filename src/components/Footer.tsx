const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 pb-8 pt-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass flex flex-col items-center justify-between gap-4 rounded-3xl px-6 py-5 md:flex-row">
          <span className="font-space text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </span>

          <div className="flex items-center gap-4">
            <span className="font-space text-sm text-muted-foreground">
              Hope you thought this was cool!
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-fluid-cyan"
                style={{ animationDelay: '0.2s' }}
              />
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-accent"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
