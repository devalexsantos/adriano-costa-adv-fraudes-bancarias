import TextAnimated from '../TextAnimated'
import WhatsAppButton from '../WhatsAppButton'

export default function Header() {
  return (
    <header className="flex flex-col gap-5 py-20 px-10 justify-center items-center bg-bg-hero bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col gap-5 max-w-[500px]">
          <TextAnimated />
          <h2 className="text-2xl">
            SAIBA O QUE FAZER PARA <strong>RECUPERAR</strong> TODO O SEU{' '}
            <strong>DINHEIRO PERDIDO!</strong>
          </h2>
          <div className="w-full flex justify-center sm:justify-start">
            <WhatsAppButton text="Falar com um especialista" />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-10">
          <img
            width={350}
            height={350}
            src="./assets/adriano-costa.png"
            alt="Foto do advogado Adriano Costa"
          />
          <div>
            <h3 className="text-primary text-2xl font-bold leading-none">
              Adriano Costa
            </h3>
            <span>Advogado Especialista</span>
          </div>
        </div>
      </div>
      <a href="#questions">
        <img
          src="./assets/iconArrowDown.svg"
          width={32}
          height={32}
          alt="Ícone de seta para baixo"
        />
      </a>
    </header>
  )
}
