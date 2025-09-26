import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center text-gray-600 text-sm">
          <img src="/images/logo.png" alt="Hogar Luz de Vida" className="h-8 w-auto opacity-80" />
          <div>© {new Date().getFullYear()} Hogar Luz de Vida — Manizales, Colombia.</div>
        </div>
      </Container>
    </footer>
  );
}
