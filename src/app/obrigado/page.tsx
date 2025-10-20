import { Check, Heart, Gift, Users, Star, ArrowRight } from 'lucide-react'

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header de Sucesso */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-100 to-emerald-100 py-16 px-4 sm:py-24">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              🎉 <span className="text-green-600">Obrigado</span> pela sua compra!
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sua jornada de transformação começa agora! 
              <span className="font-semibold text-emerald-700"> Você já tem acesso completo ao conteúdo.</span>
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ✅ Pagamento confirmado com sucesso!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Você receberá um e-mail com todos os detalhes de acesso em alguns minutos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-green-700">
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Masterclass liberada</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Bônus incluídos</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Seus próximos passos
            </h2>
            <p className="text-xl text-gray-600">
              Vamos começar sua transformação agora mesmo!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-blue-400">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Verifique seu e-mail
              </h3>
              <p className="text-gray-700">
                Em alguns minutos você receberá um e-mail com todos os links de acesso à masterclass e aos bônus.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-purple-400">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Assista à masterclass
              </h3>
              <p className="text-gray-700">
                Reserve um tempo especial para você e assista com atenção. Tenha papel e caneta em mãos para anotar.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-green-400">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Aplique as técnicas
              </h3>
              <p className="text-gray-700">
                Comece a usar o plano de emergência emocional e as estratégias ensinadas no seu dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Convite para o Grupo VIP */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-purple-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                🌟 Convite Especial: Grupo VIP
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Parabéns! Como você investiu na masterclass, você tem direito a entrar no nosso 
                <span className="font-bold text-purple-700"> Grupo VIP exclusivo</span> onde compartilhamos:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700">
                  <strong>Dicas exclusivas</strong> sobre comportamento alimentar
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Gift className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700">
                  <strong>Conteúdos bônus</strong> e materiais complementares
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700">
                  <strong>Comunidade de apoio</strong> com pessoas na mesma jornada
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700">
                  <strong>Lives exclusivas</strong> com o Dr. Henrique
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center">
                <Users className="w-6 h-6 mr-3" />
                Entrar no Grupo VIP Agora
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
              <p className="mt-4 text-sm text-gray-600">
                ✨ Acesso gratuito para quem comprou a masterclass
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recapitulando o que você ganhou */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Recapitulando: tudo que você ganhou
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Masterclass "De Frente com a Tentação"
                  </h3>
                  <p className="text-gray-700">
                    Estratégias práticas para enfrentar os momentos de descontrole com comida, 
                    sem dietas e sem culpa.
                  </p>
                  <p className="text-sm text-green-600 font-semibold mt-2">
                    Valor: R$ 120,00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bônus: Plano de Emergência Emocional (eBook)
                  </h3>
                  <p className="text-gray-700">
                    Guia completo com exercícios e técnicas para enfrentar a comida nos momentos mais difíceis.
                  </p>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">
                    Valor: R$ 47,00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bônus: 21 Receitas de Doces Sem Culpa
                  </h3>
                  <p className="text-gray-700">
                    Receitas deliciosas e saudáveis para satisfazer sua vontade de doce sem peso na consciência.
                  </p>
                  <p className="text-sm text-pink-600 font-semibold mt-2">
                    Valor: R$ 37,00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bônus: Acesso ao Grupo VIP
                  </h3>
                  <p className="text-gray-700">
                    Comunidade exclusiva com dicas, lives e suporte contínuo na sua jornada.
                  </p>
                  <p className="text-sm text-purple-600 font-semibold mt-2">
                    Valor: R$ 97,00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Valor total: R$ 301,00
              </h3>
              <p className="text-3xl font-bold mb-2">
                Você pagou apenas: R$ 47,00
              </p>
              <p className="text-xl">
                🎉 Economia de R$ 254,00!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem de apoio */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Você tomou a decisão certa! 💪
          </h2>
          <p className="text-xl sm:text-2xl font-light mb-8 leading-relaxed">
            Investir em você mesma é sempre o melhor investimento. 
            Agora é hora de colocar em prática tudo que você vai aprender 
            e transformar sua relação com a comida de uma vez por todas.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              "Lembre-se: você não precisa ser perfeita, você só precisa começar. 
              Cada pequeno passo conta na sua jornada de transformação."
            </p>
            <p className="font-semibold">
              - Dr. Henrique Monteiro
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white text-center">
        <p className="text-sm mb-2">
          © 2024 De Frente com a Tentação. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-400">
          Dúvidas? Entre em contato conosco pelo e-mail: suporte@defrentecomtentacao.com
        </p>
      </footer>
    </div>
  )
}