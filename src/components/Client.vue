<template>
    <div>
        <h2 v-for="result in res" v-bind:key="result"> {{ result }} </h2>
        <input v-model="cep" @change="buscaCep">
        <select v-model="estado">
          <option disabled value="">Selecione um estado</option>
          <option v-for="uf in estados" v-bind:key="uf">{{uf.name}}</option>
        </select> 
    </div>
</template>

<script>
import { HTTP_SERVICE } from '../util/requisitions'
export default{
  data () {
    return {
      res: [],
      urlServer: 'http://localhost:8080/',
      urlCep: 'http://viacep.com.br/ws/',
      cep: '',
      estados: [],
      estado: {}
    }
  },
  methods: {
    buscaCep () {
      if (this.cep.length < 8) {
        return  
      }
      HTTP_SERVICE().get(this, this.urlCep + this.cep + '/json', (response) => {
        console.log(response)
      })
    }
  },
  created () {
    HTTP_SERVICE().get(this, this.urlServer + 'assistent/state/findAll', (response) => {
      this.estados = response
    })
  }
}
</script>

<style>
</style>
