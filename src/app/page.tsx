import AboutSession from '@/components/AboutSession'
import CallButton from '@/components/CallButton'
import QuestionsSession from '@/components/QuestionsSession'
import WhatsAppBox from '@/components/WhatsAppBox'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <main className="m-auto">
      <Header />
      <QuestionsSession />
      <AboutSession />
      <Footer />
      <WhatsAppBox />
      <CallButton />
    </main>
  )
}
