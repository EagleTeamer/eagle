<template>
  <div class="cm-icon-loading" v-if="type === 'icon'">
    <i class="iconfont icon-loading"></i>
  </div>
  <div class="cm-svg-loading" v-else>
    <div class="loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: {
      type: {
        type: String,
        required: true
      }
    }
  };
</script>
