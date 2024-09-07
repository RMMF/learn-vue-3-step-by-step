<script setup>

    import { useStorage } from '@/composables/useStorage.js'

    let food = useStorage('food', 'Burgers');
    let age = useStorage('age', '28');

</script>

<template>
  <main>
    <p>
        What is your favourite food? <input type="text" v-model="food" />
    </p>

      <p>
          How old are you? <input type="text" v-model="age" />
      </p>
  </main>
</template>
