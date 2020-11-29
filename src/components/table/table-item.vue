<template>
    <div class="table__line table__line--content">
        <div class="line--red" />
          <p>
            {{ el.pay_id }} <i class="fas fa-arrow-right"></i> {{ el.pay_system }}
          </p>
          <p>
            {{ el.price.toLocaleString() }} &#8381;
          </p>
          <p>
            {{ el.total.toLocaleString() }} &#8381;
          </p>
          <p>
            {{ el.date }}
          </p>
          <p>
            {{ el.type }}
          </p>
          <p>
            {{ el.status }}
          </p>
    </div>
</template>

<script>
export default {
    name: 'TableItem',
    props: {
        el: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>