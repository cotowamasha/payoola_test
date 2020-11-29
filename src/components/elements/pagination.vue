<template>
    <div class="pagination">
        <v-btn
            :disabled="pageNumber == 0"
            @click="PREV_PAGE"
            class="btn__pagination"
        >
            <i class="fas fa-arrow-left" />
        </v-btn>
        <v-btn
            v-for="page of pages"
            :key="page"
            :class="['btn__pagination', { 'btn__pagination--active': page == pageNumber }]"
            @click="SET_PAGE_COUNT(page)"
        >
            {{ page + 1 }}
        </v-btn>
        <v-btn
            :disabled="pageNumber == pages[pages.length - 1]"
            @click="NEXT_PAGE"
            class="btn__pagination"
        >
            <i class="fas fa-arrow-right" />
        </v-btn>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Pagination',
    computed: {
        ...mapState(['pageNumber']),
        ...mapGetters(['getPagesCount']),

        pages () {
            let pages = []
            for (let i = 0; i < this.getPagesCount; i++) {
                pages.push(i)
            }
            return pages
        }
    },
    methods: {
        ...mapMutations(['SET_PAGE_COUNT', 'NEXT_PAGE', 'PREV_PAGE'])
    }
}
</script>