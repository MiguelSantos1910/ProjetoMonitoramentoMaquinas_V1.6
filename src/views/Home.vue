<template>
  <div class="bg-gray-50 min-h-screen">
    <Header />

    <!-- Introdução -->
    <section class="p-6 max-w-4xl mx-auto">
      <p class="text-gray-800 text-justify leading-relaxed">
        A manutenção é fundamental para prolongar a vida útil de equipamentos, garantir a segurança de trabalhadores e usuários, otimizar a eficiência produtiva, reduzir custos operacionais e evitar paradas não programadas. Ao prevenir falhas, restaurar o bom funcionamento e manter um histórico das intervenções, as empresas asseguram a qualidade dos produtos e serviços e contribuem para o crescimento sustentável do negócio.
      </p>
    </section>

    <!-- Benefícios da manutenção -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 py-10">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-white text-2xl font-bold mb-8">Benefícios da Manutenção</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">💰</div>
            <h3 class="font-bold mb-2">Redução de Custos</h3>
            <p class="text-sm">Evita falhas inesperadas e reduz a necessidade de substituições frequentes.</p>
          </div>
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">🦺</div>
            <h3 class="font-bold mb-2">Segurança</h3>
            <p class="text-sm">Equipamentos bem mantidos protegem usuários e trabalhadores.</p>
          </div>
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">⚙️</div>
            <h3 class="font-bold mb-2">Eficiência e Produtividade</h3>
            <p class="text-sm">Menos falhas = mais produção e menos tempo parado.</p>
          </div>
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">🔧</div>
            <h3 class="font-bold mb-2">Vida Útil Prolongada</h3>
            <p class="text-sm">A manutenção conserva os ativos por mais tempo.</p>
          </div>
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">🏅</div>
            <h3 class="font-bold mb-2">Qualidade</h3>
            <p class="text-sm">Processos consistentes mantêm o padrão de entrega.</p>
          </div>
          <div class="bg-white/10 rounded-xl p-5 text-white shadow hover:scale-105 transition">
            <div class="text-3xl mb-2">🌱</div>
            <h3 class="font-bold mb-2">Sustentabilidade</h3>
            <p class="text-sm">Menos descartes, menos gastos, mais responsabilidade ambiental.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de manutenção -->
    <section class="bg-white py-10 px-6 max-w-5xl mx-auto">
      <h2 class="text-blue-800 font-bold text-2xl mb-6">Tipos de Manutenção</h2>
      <div class="flex space-x-4 border-b border-blue-300 mb-4">
        <button
          @click="activeTab = 'preventiva'"
          :class="tabClass('preventiva')"
        >
          Preventiva
        </button>
        <button
          @click="activeTab = 'preditiva'"
          :class="tabClass('preditiva')"
        >
          Preditiva
        </button>
        <button
          @click="activeTab = 'corretiva'"
          :class="tabClass('corretiva')"
        >
          Corretiva
        </button>
      </div>

      <div class="text-gray-700 text-justify">
        <div v-if="activeTab === 'preventiva'">
          A manutenção preventiva é realizada em intervalos programados com o objetivo de evitar falhas futuras. Ela envolve inspeções, ajustes e substituições programadas.
        </div>
        <div v-else-if="activeTab === 'preditiva'">
          A manutenção preditiva utiliza dados e sensores para prever falhas antes que elas aconteçam. É baseada em monitoramento contínuo e tecnologia.
        </div>
        <div v-else>
          A manutenção corretiva é feita após a ocorrência de uma falha. Embora necessária, é a mais cara e impactante para a operação.
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="bg-blue-50 py-10">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-blue-800 text-xl font-bold mb-4">O que dizem nossos clientes</h2>
        <blockquote class="italic text-gray-700 border-l-4 border-blue-600 pl-4">
          "Após implementar o plano de manutenção preventiva, nossa fábrica teve 40% menos paradas não programadas. O impacto foi imediato!"
          <footer class="mt-2 text-sm text-blue-700 font-semibold">— Gerente de Produção, Indústria XYZ</footer>
        </blockquote>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Footer },
  data() {
    return {
      activeTab: 'preventiva'
    }
  },
  methods: {
    tabClass(tab) {
      return {
        'pb-2 font-semibold border-b-2 transition': true,
        'text-blue-700 border-blue-700': this.activeTab === tab,
        'text-gray-600 hover:text-blue-600 border-transparent': this.activeTab !== tab
      }
    }
  }
}
</script>
