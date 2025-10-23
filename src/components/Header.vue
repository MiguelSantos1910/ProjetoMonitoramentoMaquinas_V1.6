<template>
  <header class="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
      <!-- Título -->
      <h1 class="text-2xl font-bold mb-2 md:mb-0 text-center md:text-left">
        Sistema de Manutenção Preventiva de Máquinas
      </h1>

      <!-- Navegação -->
      <nav class="flex space-x-4 text-sm md:text-base">
        <a href="/" class="text-white hover:bg-blue-600 px-3 py-2 rounded transition">Início</a>
        <a href="/relatorio" class="text-white hover:bg-blue-600 px-3 py-2 rounded transition">Relatórios</a>
        <a href="/about" class="text-white hover:bg-blue-600 px-3 py-2 rounded transition">Sobre</a>
        <a href="/operacao" class="text-white hover:bg-blue-600 px-3 py-2 rounded transition">Operações</a>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  name: 'Header'
}
</script>