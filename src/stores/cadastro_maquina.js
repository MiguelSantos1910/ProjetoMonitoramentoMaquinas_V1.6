import { defineStore } from 'pinia';

export const useMaquinasStore = defineStore('maquinas', {
  state: () => ({
    maquinas: [], // Lista de máquinas
    termoBusca: "" // Barra de pesquisa vazia
  }),
  getters: {
    maquinasFiltradas: (state) => {
      if (!state.termoBusca) {
        return state.maquinas;
      }
      return state.maquinas.filter(m => 
        m.nome.toLowerCase().includes(state.termoBusca.toLowerCase())
      );
    }
  },
  actions: {
    cadastrarMaquina(maquina) {
      this.maquinas.push(maquina);
    },
    setTermoBusca(termo) {
      this.termoBusca = termo;
    },
    deletarMaquina(index) {
      this.maquinas.splice(index, 1);
    }
  }
});
