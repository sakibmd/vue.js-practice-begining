<template>
  <div>
      <!-- <p>A Wonderful Quote</p> -->
      <div class="title">
          <slot name="title"></slot>
          <span style="color: grey"><slot name="subTitle">Sub Title</slot></span>
      </div>
      <div>
          <slot name="content"></slot>
      </div>
       <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h1{
        color: darkolivegreen;
    }
    .title{
        font-style: italic;
    }
</style>
