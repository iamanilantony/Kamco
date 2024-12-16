import Footer from "@/components/new_ui/footer";
import Navbar from "@/components/new_ui/nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
