<template>
        <div class="pt-3 pb-2 mb-3 border-bottom" style="margin-left:301px">
            <div class="btn-toolbar mb-2 mb-md-0">
                <router-link to="/admin/products/create" class="btn btn-sm btn-outline-secondary">Add</router-link>
            </div>
        </div>

         <div class="table-responsive" style="margin-left:301px">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Likes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id"> 
                        <td>{{ product.id }}</td>
                        <td><img :src="product.image" height="50"/></td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.likes }}</td>
                        <td>
                            <div class="btn-group mr-2">
                                <router-link :to="`/admin/products/${product.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                                <a href="#" class="btn btn-sm btn-outline-secondary" @click="del(product.id)">Delete</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>   
</template>
<script lang="ts"> 

    import {ref, onMounted} from 'vue'
    import {Product} from '@/interfaces/product';
    export default{
        name: "ProductComponent",
        setup(){
            const products = ref([]);

            onMounted(async () => {
                const response = await fetch('http://localhost:8000/api/products');

                products.value =await response.json();
            });

            const del = async (id: number) => {
                if(confirm('Are you sure you want delete this product?')){
                    await fetch(`http://localhost:8000/api/products/${id}`, {
                        method: 'DELETE'
                    });

                products.value = products.value.filter((p: Product) => p.id != id)
                }
            }

            return{
                products,
                del
            }
        }
    }

</script>
