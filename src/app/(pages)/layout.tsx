
import "../globals.css";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">

      {children}

    </div>
  );
}
