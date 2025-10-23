<template>
  <div class="max-w-3xl mx-auto mt-10 space-y-10">
    <!-- Cadastro de Máquinas -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 py-10 px-6 rounded-lg shadow-lg text-white">
      <h2 class="text-2xl font-bold mb-6 text-center">Cadastro de Máquinas</h2>

      <form @submit.prevent="cadastrarMaquina" class="space-y-4">
        <!-- Nome Máquina -->
        <div>
          <label class="block text-sm font-medium mb-1">Nome Máquina:</label>
          <input
            v-model="form.nome"
            type="text"
            placeholder="Ex: Extrusora 01"
            class="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Modelo -->
        <div>
          <label class="block text-sm font-medium mb-1">Modelo:</label>
          <input
            v-model="form.modelo"
            type="text"
            placeholder="Ex: M6780"
            class="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Nº Série -->
        <div>
          <label class="block text-sm font-medium mb-1">Nº Série:</label>
          <input
            v-model="form.serie"
            type="text"
            placeholder="Ex: 12345"
            class="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Setor -->
        <div>
          <label class="block text-sm font-medium mb-1">Setor:</label>
          <select
            v-model="form.setor"
            class="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Selecione</option>
            <option>Produção</option>
            <option>Manutenção</option>
            <option>Logística</option>
            <option>Administração</option>
          </select>
        </div>

        <!-- Status -->
        <div>
          <label class="block text-sm font-medium mb-1">Status:</label>
          <select
            v-model="form.status"
            class="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Ativa">Ativa</option>
            <option value="Em manutenção">Em manutenção</option>
            <option value="Inativa">Inativa</option>
          </select>
        </div>

        <!-- Botão Cadastrar -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 py-2 px-4 rounded-lg font-semibold shadow-md transition-all"
        >
          Cadastrar
        </button>
      </form>
    </div>

    <!-- Relatório de Máquinas -->
    <div class="bg-white py-6 px-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center text-blue-700">Relatório de Máquinas</h2>

      <!-- Barra de busca -->
      <div class="mb-4">
        <input
          v-model="store.termoBusca"
          type="text"
          placeholder="Buscar por nome..."
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <!-- Tabela de Máquinas -->
      <div v-if="maquinasFiltradas.length" class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 rounded">
          <thead class="bg-gray-200">
            <tr class="text-black text-center">
              <th class="border px-3 py-2">Nome Máquina</th>
              <th class="border px-3 py-2">Modelo</th>
              <th class="border px-3 py-2">Nº Série</th>
              <th class="border px-3 py-2">Setor</th>
              <th class="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(m, i) in maquinasFiltradas" :key="i" class="text-blue-500 text-center">
              <td class="border px-3 py-2">{{ m.nome }}</td>
              <td class="border px-3 py-2">{{ m.modelo }}</td>
              <td class="border px-3 py-2">{{ m.serie }}</td>
              <td class="border px-3 py-2">{{ m.setor }}</td>
              <td class="border px-3 py-2">
                <span
                  :class="[
                    'px-2 py-1 rounded-full text-white font-semibold',
                    m.status === 'Ativa' ? 'bg-green-500' : '',
                    m.status === 'Em manutenção' ? 'bg-orange-500' : '',
                    m.status === 'Inativa' ? 'bg-gray-500' : ''
                  ]"
                >
                  {{ m.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else class="text-center text-gray-500 mt-4">
        Nenhuma máquina cadastrada
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useMaquinasStore } from '../stores/cadastro_maquina.js'

const store = useMaquinasStore()

const form = reactive({
  nome: '',
  modelo: '',
  serie: '',
  setor: '',
  status: 'Ativa'
})

function resetForm() {
  form.nome = ''
  form.modelo = ''
  form.serie = ''
  form.setor = ''
  form.status = 'Ativa'
}

function cadastrarMaquina() {
  store.cadastrarMaquina({ ...form })
  resetForm()
}

// Computed para filtrar máquinas
const maquinasFiltradas = computed(() => store.maquinasFiltradas)
</script>
