import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AuroraBackground />

      <div className="glass relative z-10 rounded-[2rem] px-10 py-12 text-center">
        <h1 className="fluid-text mb-2 font-syne text-7xl font-bold tracking-tighter">404</h1>
        <p className="mb-8 font-space text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="glass-button group inline-flex items-center gap-2 rounded-full px-6 py-3 font-syne font-semibold"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
