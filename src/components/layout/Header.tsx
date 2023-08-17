import TextAnimated from "../TextAnimated";
import WhatsAppButton from "../WhatsAppButton";


export default function Header(){
    return(
        <header className="py-20 px-10 flex flex-col md:flex-row justify-center items-center bg-bg-hero">
            <div className="flex flex-col gap-5 max-w-[500px]">
                <TextAnimated />
                <h2 className="text-2xl">SAIBA O QUE FAZER PARA <strong>RECUPERAR</strong> TODO O SEU <strong>DINHEIRO PERDIDO!</strong></h2>
                <div className="w-full flex justify-center sm:justify-start">
                    <WhatsAppButton text="Falar com um especialista"/>
                </div>
            </div>
            <div className="p-10">
                <img width={350} height={350} src="./assets/adriano-costa.png"/>
            </div>
        </header>
    )
}