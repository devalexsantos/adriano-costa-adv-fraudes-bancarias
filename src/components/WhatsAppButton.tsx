import IconWhatsapp from "./icons/IconWhatsApp"

interface WhatsAppButtonProps {
    text: string
}

export default function WhatsAppButton({text}: WhatsAppButtonProps){
    return(
        <button className="w-full flex justify-center gap-3 items-center max-w-[300px] p-3 bg-[#1EBC2E] rounded uppercase font-bold">
            <IconWhatsapp/>
            {text}
        </button>
    )
}