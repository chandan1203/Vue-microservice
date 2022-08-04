<template>

    <NavComponent />
    <div class="container-fluid">
      <div class="row">
        <MenuComponent />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <router-view></router-view>
        </main>

      </div>
    </div>
</template>

<script>
import MenuComponent from "@/components/MenuComponent.vue"
import NavComponent from "@/components/NavComponent.vue"

  export default{
    name: "AdminProject",
    components : {
        MenuComponent,
        NavComponent
    }
  }
</script>
