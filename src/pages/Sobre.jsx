export default function Sobre() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Sobre o Conecta+</h1>
        <p className="mt-1 text-sm text-slate-500">
          Protótipo acadêmico — Engenharia de Software, 2º período.
        </p>
      </div>

      <Secao titulo="O que é o Conecta+">
        <p>
          O Conecta+ é uma plataforma pensada para jovens de áreas urbanas
          periféricas que reúne, em um só lugar, cursos profissionalizantes,
          oportunidades de emprego, estágio e Jovem Aprendiz, e informações
          de mobilidade urbana para chegar até elas. A ideia é reduzir a
          distância entre o jovem e o mercado de trabalho, facilitando o
          acesso a informações que hoje costumam estar espalhadas em lugares
          diferentes.
        </p>
      </Secao>

      <Secao titulo="O problema que motivou o projeto">
        <p>
          Em muitas áreas periféricas, o acesso à educação profissionalizante
          e a oportunidades de trabalho decente já é mais difícil por si só.
          Quando isso se soma a uma mobilidade urbana complicada — trajetos
          longos, poucas opções de transporte, custo e tempo de deslocamento
          altos — o jovem acaba tendo menos chances reais de conseguir e
          manter um emprego, mesmo quando tem vontade e potencial. Essa
          combinação de barreiras tende a aprofundar desigualdades que já
          existem entre diferentes regiões de uma mesma cidade.
        </p>
      </Secao>

      <Secao titulo="Relação com o ODS 8 — Trabalho Decente e Crescimento Econômico">
        <p>
          O Conecta+ se conecta diretamente ao Objetivo de Desenvolvimento
          Sustentável 8 da Agenda 2030 da ONU, em especial às metas 8.5
          (emprego pleno e produtivo, e trabalho decente para todos) e 8.6
          (redução da proporção de jovens sem emprego, educação ou
          formação). O objetivo central do app é aproximar o jovem do
          trabalho decente. Os cursos recomendados e as informações de
          mobilidade não são o fim do aplicativo: eles existem como meios de
          apoio para que esse objetivo central — conseguir e se manter no
          mercado de trabalho — se torne mais alcançável.
        </p>
      </Secao>

      <Secao titulo="Como a ideia foi concebida">
        <p>
          O conceito do Conecta+ nasceu da aplicação da metodologia de Design
          Thinking em suas cinco etapas: empatia, ao pensar nas dificuldades
          reais de jovens de áreas periféricas para entrar no mercado de
          trabalho; definição, ao identificar que educação, oportunidades e
          mobilidade são barreiras conectadas entre si; ideação, ao imaginar
          uma plataforma única que reunisse essas três frentes; prototipagem,
          com a construção deste protótipo navegável; e teste, com a
          validação do fluxo de telas junto a colegas e professores. Este é
          um projeto acadêmico do curso de Engenharia de Software, produzido
          no 2º período.
        </p>
      </Secao>

      <Secao titulo="Sobre o projeto">
        <p>
          Este protótipo foi desenvolvido como trabalho acadêmico da
          Universidade Veiga de Almeida (UVA). Todas as vagas, empresas,
          cursos, instituições e rotas de transporte exibidas são fictícios,
          criados apenas para demonstrar o fluxo de navegação da proposta.
          Não há backend, banco de dados, autenticação real ou integrações
          externas: tudo funciona com dados mockados, e nada é salvo de
          forma permanente. Neste momento, o Conecta+ não possui
          funcionamento real.
        </p>
      </Secao>
    </div>
  )
}

function Secao({ titulo, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="font-semibold text-emerald-700">{titulo}</h2>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  )
}
