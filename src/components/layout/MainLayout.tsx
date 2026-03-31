import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  isLocatarioArea?: boolean;
}

export default function MainLayout({ isLocatarioArea }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLocatarioArea={isLocatarioArea} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
