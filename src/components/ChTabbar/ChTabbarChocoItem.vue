<template>
  <ChTabbarItem is-active>
    <picture>
      <source type="image/webp" srcset="@/assets/images/icons/choco-icon.webp" />
      <img
        src="@/assets/images/icons/choco-icon.png"
        width="36"
        height="36"
        alt="Вернуться на главную страницу Choco"
      />
    </picture>
  </ChTabbarItem>
</template>

<script setup lang="ts">
import ChTabbarItem from './ChTabbarItem.vue'
</script>
