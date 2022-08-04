<template>
 <main style="margin-left: 301px">

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <img :src="product.image" height="180">
            <div class="card-body">
              <p class="card-text">{{ product.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button class="btn btn-sm btn-outline-secondary" @click="like(product.id)">like</button>
                </div>
                <small class="text-muted">{{ product.likes}} likes</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
   
</template>
<script lang="ts">

import { Product } from '@/interfaces/product';
import {ref, onMounted} from 'vue';

export default{
    name: "MainComponent",
    setup(){
      const products = ref([] as Product[]);
      
      onMounted(async () =>  {
        const response = await fetch('http://localhost:8001/api/products');

        products.value = await response.json();
      });

      const like =async (id: number) => {
        const response = await fetch(`http://localhost:8001/api/products/${id}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });

        products.value = products.value.map(
          (p: Product) => {
            if(p.id === id){
              p.likes++;
            }
            return p;
          }

        )
      }

      return{
        products,
        like
      }
    }
}
</script>
