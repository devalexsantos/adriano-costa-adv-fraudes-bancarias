import WhatsAppButton from './WhatsAppButton'

export default function QuestionsSession() {
  return (
    <div
      id="questions"
      className="flex flex-col gap-5 max-w-5xl m-auto py-10 px-10 items-center"
    >
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="flex-1">
          <ul className="flex flex-col gap-5 justify-center text-xl">
            <li className="flex items-center gap-3">
              <img src="./assets/check.svg" alt="Ícone de check" />
              Não reconhece compra na fatura do seu cartão?
            </li>
            <li className="flex items-center gap-3">
              <img src="./assets/check.svg" alt="Ícone de check" />O banco se
              recusa a te isentar da dívida?
            </li>
            <li className="flex items-center gap-3">
              <img src="./assets/check.svg" alt="Ícone de check" />
              Empréstimos não solicitados ou juros abusivos?
            </li>
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-5 mt-10 sm:mt-0">
          <p>
            Lutamos por seus direitos e uma possível indenização por danos
            morais.
          </p>
          <p>
            É dever das instituições financeiras, mesmo com várias medidas de
            segurança, o uso do cartão de crédito é tido como uma atividade de
            risco, conforme o artigo 927 do Código Civil.
          </p>
          <p>
            Uma vez que o problema do cartão não tenha sido causado pelo
            titular, cabe à operadora do mesmo reparar os danos.
          </p>
        </div>
      </div>
      <div className="p-3 bg-[#320606] rounded-xl">
        <p className="text-primary">
          O cliente tem o{' '}
          <strong className="text-white">
            artigo 42 do Código de Defesa do Consumidor
          </strong>{' '}
          a seu favor, assegurando que as empresas de cartão têm a obrigação de
          cancelar as compras que o cliente afirma não ter realizado.
        </p>
      </div>
      <WhatsAppButton text="Fale com um Especialista" />
    </div>
  )
}
