import { Outlet } from "react-router-dom";
import SmoothScroll from "../components/providers/SmoothScroll";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cursor from "../components/ui/Cursor";
import ScrollProgress from "../components/ui/ScrollProgress";
import FloatingActions from "../components/ui/FloatingActions";
import Watermark from "../components/ui/Watermark";

// Persistent shell shared by every route.
export default function RootLayout() {
  return (
    <SmoothScroll>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Watermark />
    </SmoothScroll>
  );
}
