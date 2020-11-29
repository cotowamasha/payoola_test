<template>
    <button
        @click="$emit('click')"
        class="btn"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>