<template>
  <div id="app">
    <header-part />
    <div class="container">
      <section class="table">
        <div class="table__line table__line--menu">
          <p />
          <p class="table__menu-item">
            Платежная система
          </p>
          <p class="table__menu-item">
            К оплате
          </p>
          <p class="table__menu-item">
            Итог
          </p>
          <p
            class="table__menu-item table__menu-item--active"
            @click="SORT_LIST"
          >
            Дата 
            <i
              v-if="!toBig"
              class="fas fa-sort-amount-down"
            />
            <i
              v-if="toBig"
              class="fas fa-sort-amount-down-alt"
            />
          </p>
          <p class="table__menu-item">
            Тип
          </p>
          <p class="table__menu-item">
            Статус 
          </p>
        </div>
        <div
          v-for="(el, i) of getPaginationData"
          :key="i"
        >
          <table-item :el="el" />
        </div>
      </section>
      <pagination />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import HeaderPart from '@/components/layout/header'
import TableItem from './components/table/table-item'
import Pagination from './components/elements/pagination'

export default {
  name: 'App',
  components: {
    HeaderPart,
    TableItem,
    Pagination
  },
  mounted () {
    this.GET_DATA_LIST()
  },
  computed: {
    ...mapState(['toBig']),
    ...mapGetters(['getPaginationData'])
  },
  methods: {
    ...mapMutations(['GET_DATA_LIST', 'SORT_LIST'])
  }
}
</script>

<style lang="sass">
  @import 'style/main'
</style>
