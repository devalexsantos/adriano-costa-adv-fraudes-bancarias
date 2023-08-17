import IconWhatsapp from './icons/IconWhatsApp'

interface WhatsAppButtonProps {
  text: string
}

export default function WhatsAppButton({ text }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/5571991656882?text=Ol%C3%A1%2C+acabei+de+ver+o+site+sobre+Fraudes+Banc%C3%A1rias%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21"
      target="_blank"
      className="w-full flex justify-center gap-3 items-center max-w-[300px] p-3 bg-[#1EBC2E] rounded uppercase font-bold"
      rel="noreferrer"
    >
      <IconWhatsapp />
      {text}
    </a>
  )
}
