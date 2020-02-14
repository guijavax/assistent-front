<template>
    <div>
        <h2 v-for="result in res" v-bind:key="result"> {{ result }} </h2>
        <input v-model="cep" @change="buscaCep">
        <select @change="change" v-model="estado">
          <option disabled >Selecione um estado</option>
          <option v-for="estado in estados" :value="estado" :key="estado">{{estado.name}}</option>
        </select>
        <select  v-model="cidade">
          <option disabled value="">Selecione uma cidade</option>
          <option v-for="cidade in cidades" :key="cidade" :value="estado">{{cidade.name}}</option>
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
      estado: {},
      cidades: [],
      cidade: {}
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
    },
    change () {
      HTTP_SERVICE().get(this, this.urlServer + 'assistent/city/findByState/' + this.estado.id, (response) => {
        this.cidades = response
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
