export default function CallButton() {
  return (
    <a href="tel:+5571991656882">
      <div className="sm:hidden fixed bottom-10 left-6 rounded-full bg-cyan-600 p-4 shadow-xl">
        <img src="./assets/call-icon.svg" alt="Ícone de um telefone" />
      </div>
    </a>
  )
}
