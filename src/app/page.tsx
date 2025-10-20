import { Check, Heart, BookOpen, Users, Gift, Star, HelpCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      {/* Header com CTA Principal */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-purple-100 py-16 px-4 sm:py-24">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              De Frente com a <span className="text-rose-600">Tentação</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra estratégias reais para enfrentar os momentos de descontrole com comida – 
              <span className="font-semibold text-purple-700"> sem dietas, sem culpa.</span>
            </p>
          </div>
          
          <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            🎥 Quero assistir à masterclass agora
          </button>
          
          <p className="mt-4 text-sm text-gray-600">
            ✨ Acesso imediato
          </p>
        </div>
      </section>

      {/* Seção "Você se identifica?" */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Você se identifica?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Você sente que perde o controle quando está ansiosa ou cansada?
                </p>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Come doces mesmo sem fome?
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Se culpa depois de comer, mas repete o padrão no dia seguinte?
                </p>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-6 h-6 text-rose-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Sente que a comida virou seu refúgio emocional?
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-rose-100 px-8 py-4 rounded-full">
              <span className="text-2xl mr-3">➡️</span>
              <span className="text-xl font-semibold text-gray-800">
                Então essa masterclass é pra você.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600">
              Estratégias práticas e transformadoras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Por que você sente vontade de comer mesmo sem fome
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Quais são as tentações alimentares mais comuns (como o chocolatinho da noite e os beliscos do dia)
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Técnicas emocionais práticas para dias difíceis
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Como usar o plano de emergência emocional 24h
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg md:col-span-2">
              <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-lg">
                Como lidar com a culpa, a autossabotagem e se acolher sem restrição
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem ensina */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Quem ensina
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/87d488c0-9ab9-4416-9342-5dd856f675ac.jpg" 
                  alt="Dr. Henrique Monteiro" 
                  className="w-32 h-32 rounded-lg object-cover shadow-lg border-2 border-gray-200"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Dr. Henrique Monteiro
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nutricionista especialista em comportamento alimentar, com foco em compulsão, 
                  autossabotagem e transtornos alimentares. Já ajudou centenas de pessoas a criarem 
                  uma relação mais leve com a comida e consigo mesmas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus especial */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-100 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Bônus especial
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-yellow-300">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-12 h-12 text-orange-600" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
                    <span className="text-lg font-semibold text-purple-600">Ebook Complementar</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Plano de emergência emocional para enfrentar a comida nos momentos mais difíceis
                  </h3>
                  <p className="text-lg text-gray-700">
                    Com exercícios, técnicas e espaço para reflexão.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-green-300">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-12 h-12 text-green-600" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <Heart className="w-6 h-6 text-green-600 mr-2" />
                    <span className="text-lg font-semibold text-green-600">Bônus Extra</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Guia com 21 Receitas de Doces para Comer Sem Culpa
                  </h3>
                  <p className="text-lg text-gray-700">
                    Receitas deliciosas e saudáveis para satisfazer sua vontade de doce sem peso na consciência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              O que dizem sobre a masterclass
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-rose-400">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente entendi por que eu sempre recorria ao chocolate quando estava estressada. 
                As técnicas do Dr. Henrique me ajudaram a quebrar esse ciclo sem me privar de nada."
              </p>
              <p className="text-sm font-semibold text-gray-600">
                - Marina, 34 anos
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-400">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Eu achava que era falta de força de vontade, mas descobri que era muito mais profundo. 
                Agora tenho ferramentas reais para lidar com a ansiedade sem descontar na comida."
              </p>
              <p className="text-sm font-semibold text-gray-600">
                - Carla, 28 anos
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "O plano de emergência emocional salvou minha vida! Agora quando sinto vontade de 
                'atacar' a geladeira, sei exatamente o que fazer. Mudou completamente minha relação com a comida."
              </p>
              <p className="text-sm font-semibold text-gray-600">
                - Juliana, 41 anos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              ❓ Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Essa masterclass é uma dieta ou um plano alimentar?
                  </h3>
                  <p className="text-gray-700">
                    🟡 Não. Aqui não tem dieta, cardápio ou restrição. O foco da masterclass é emocional: você vai aprender por que recorre à comida nos momentos difíceis e como sair de cada situação dessa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Eu sou ansiosa e acabo comendo por impulso. Essa aula pode me ajudar?
                  </h3>
                  <p className="text-gray-700">
                    ✅ Sim! Esse é justamente um dos temas centrais. A masterclass traz estratégias emocionais práticas para lidar com os impulsos, a ansiedade e a compulsão sem culpa e sem autossabotagem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Preciso assistir na hora da compra?
                  </h3>
                  <p className="text-gray-700">
                    🕒 Não. Após a compra, você recebe o acesso imediato à aula e pode assistir quando quiser, no seu tempo, quantas vezes precisar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    O conteúdo é indicado para quem tem compulsão alimentar?
                  </h3>
                  <p className="text-gray-700">
                    💬 Sim, desde que não substitua acompanhamento terapêutico profissional. A masterclass é ideal para quem vive episódios de descontrole ou compulsão leve a moderada, e quer aprender a lidar melhor com seus gatilhos emocionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-rose-600 font-bold">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    O que vem no bônus do eBook?
                  </h3>
                  <p className="text-gray-700">
                    📘 O eBook complementar traz um plano de emergência emocional passo a passo, técnicas explicadas em detalhes, espaço para autorreflexão e atividades para te ajudar nos dias difíceis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    É seguro comprar por aqui?
                  </h3>
                  <p className="text-gray-700">
                    🔒 Sim! A compra é feita por uma plataforma 100% segura e confiável. Após o pagamento, você receberá tudo por e-mail.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 font-bold">7</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Esse valor é único ou é uma assinatura?
                  </h3>
                  <p className="text-gray-700">
                    💸 O valor é único, sem mensalidade ou cobranças futuras. Você paga uma vez e o conteúdo é seu.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-600 font-bold">8</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Tenho vergonha de admitir que perco o controle com comida. Posso fazer essa aula sozinha?
                  </h3>
                  <p className="text-gray-700">
                    🤍 Sim, e esse é um espaço sem julgamento. A masterclass foi feita justamente para acolher quem vive esse tipo de sofrimento silencioso. É um passo de cuidado com você mesma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Você não precisa de mais uma dieta.
          </h2>
          <p className="text-2xl sm:text-3xl font-light mb-8">
            Você precisa de ferramentas reais.
          </p>
          
          <div className="mb-8">
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                🔥 PROMOÇÃO LIMITADA
              </span>
              <div className="text-gray-300 line-through text-lg mb-1">
                De R$ 120,00
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                Por apenas R$ 47,00
              </div>
            </div>
            <button className="bg-white text-rose-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              🎥 Clique aqui para assistir agora
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-rose-100">
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Sem mensalidade</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-8 px-4 bg-gray-800 text-white text-center">
        <p className="text-sm">
          © 2024 De Frente com a Tentação. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}