<template>
    <div>
      <label for="nome">Nome</label>
      <input id="nome" v-model="name">
      <br /><br />
      <label for="cpf">Cpf</label>
      <input id="cpf" v-model="cpf">
      <h2 v-for="result in res" :key="result"> {{ result }} </h2>
      <br /><br />
      <label for="idade">Idade</label>
      <input type="number" v-model="idade">
      <br /> <br />
      <label for="cep">Cep</label>
      <input v-model="cep" @change="buscaCep">
      <br ><br />
      <label for="Pais">Pais</label>
      <input v-model="pais">
      <br ><br />
      <label for="estado">Estado</label>
      <select @change="change" v-model="estado">
        <option disabled >Selecione um estado</option>
        <option v-for="estado in estados" :value="estado" :key="estado">{{estado.name}}</option>
      </select>
      <br /><br />
      <label for="cidade">Cidade</label>
      <select  v-model="cidade">
        <option disabled value="">Selecione uma cidade</option>
        <option v-for="cidade in cidades" :key="cidade" :value="estado">{{cidade.name}}</option>
      </select>
      <br/><br/>
      <label for="bairro">Bairro</label>
      <input v-model="bairro">￼
      <br /> <br />
      <label for="rua">Rua</label>
      <input v-model="rua">
      <br /><br />
      <label for="number">Número</label>
      <input v-model="numero">
      <br /><br />
      <label for="number">Telefone</label>
      <input v-model="telefone">
      <button @click="salvar">Salvar</button>
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
      cidade: {},
      numero: '',
      telefone: '',
      cpf: '',
      nome: '',
      pais: '',
      bairro: '',
      rua: '',
      age: ''
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
    },
    salvar () {
      let body = {
        clientName: this.nome,
        cpf: this.cpf,
        telephone: this.telefone,
        country: this.pais,
        state: this.estado,
        city: this.cidade,
        district: this.bairro,
        number: this.numero,
        street: this.rua,
        cep: this.zipCode,
        age: this.idade
      }
      HTTP_SERVICE().post(this, this.urlServer + 'assistent/client/insertClient', (response) => {

      }, (response) => {

      }, body
      )
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
