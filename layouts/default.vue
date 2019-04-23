<template>
  <el-container class="layout-default">
    <el-header height='197px'>
      <My-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer height='100%'>
      <My-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from '@/components/public/header/index.vue';
import MyFooter from '@/components/public/footer/index.vue';
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
