import Footer from "@/components/Footer";
import MainArea from "@/components/MainArea";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center">
        <MainArea />
      </main>
      <footer className="flex">
        <Footer />
      </footer>
    </div>
  );
}
