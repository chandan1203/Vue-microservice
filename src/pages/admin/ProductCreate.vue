<template>
    <form @submit.prevent="submit">
        <div class="form-group">
            <label for="">Title</label>
            <input v-model="title" type="from-control" name="title">
        </div>
        <div class="form-group">
            <label for="">Image</label>
            <input v-model="image" type="from-control" name="image">
        </div>
        <button class="btn btn-outline-secondary">Save</button>
    </form>
</template>

<script>

import {ref} from 'vue';
import { useRouter } from 'vue-router';

export default{
    name: "ProductCreate",

    setup(){
        const title = ref('');
        const image = ref('');

        const router = useRouter();

        const submit = async () => {
            await fetch('http://localhost:8000/api/product',{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    title: title.value,
                    image: image.value
                })
            });

            await router.push('/admin/products');

        }

        return{
            title,
            image,
            submit
        }
    }
}
</script>
