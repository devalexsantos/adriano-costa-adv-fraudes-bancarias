export default function WhatsAppBox() {
  return (
    <a
      href="https://wa.me/5571991656882?text=Ol%C3%A1%2C+acabei+de+ver+o+site+sobre+Fraudes+Banc%C3%A1rias%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex gap-2 fixed bottom-20 right-4 justify-center items-center shadow-xl">
        <div className="flex flex-1 flex-col max-w-[150px] bg-white rounded-xl p-2 text-zinc-800">
          <span className="font-bold text-sm">Olá, tudo bem?</span>
          <span className="text-xs">
            Clique aqui e agende uma consulta com o especialista
          </span>
        </div>
        <img
          src="./assets/avatar-chat.png"
          alt="Foto de uma atendente mulher"
        />
      </div>
    </a>
  )
}
