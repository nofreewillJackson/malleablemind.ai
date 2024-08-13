import LandingPage from '../components/clientComponents/LandingPage';

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24"
      style={{ backgroundColor: "#343a40", color: "#4dabf7" }}
    >
      <LandingPage />
    </main>
  );
}
