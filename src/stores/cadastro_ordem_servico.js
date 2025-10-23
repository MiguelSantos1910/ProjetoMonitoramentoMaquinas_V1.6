import { defineStore } from 'pinia';

export const useCadastroManutencao = defineStore('manutencao', {
  state: () => ({
    manutencao: [], // Lista de manutenção
    termoBusca: "" // Barra de pesquisa vazia
  }),
  getters: {
    manutencaoFiltradas: (state) => {
      if (!state.termoBusca) {
        return state.manutencao;
      }
      return state.manutencao.filter(man =>
        man.nome.toLowerCase().includes(state.termoBusca.toLowerCase())
      );
    },
    atributosCalendario: (state) => {
      return state.manutencao.map(m => ({
        key: m.dataManutencao,
        highlight: {
          color: m.status === "Em manutenção" ? 'orange' : 'green',
          fillmode: 'solid',
        },
        dates: new Date(m.dataManutencao)
      }));
    }
  },
  actions: {
    cadastrarManutencao(manutencao) {
      this.manutencao.push(manutencao);
    },
    setTermoBusca(termo) {
      this.termoBusca = termo;
    },
    deletarManutencao(index_manutencao) {
      this.manutencao.splice(index_manutencao, 1);
    }
  }
});
