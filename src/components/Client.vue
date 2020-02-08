<template>
    <div>
        <h2></h2>
    </div>
</template>

<script>
import { HTTP_SERVICE } from '../util/requisitions'
export default{
  created () {
    HTTP_SERVICE().get(this, 'assistent/client/findAll', (response) => {
      console.log(response.body)
    })
  }
}
</script>

<style>
</style>
