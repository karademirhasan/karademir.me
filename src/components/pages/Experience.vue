<template>
   <div>
     <div class="Experience">
       <div class="Experience-list">
         <div class="item" v-for="item in experiences" v-bind:key="item.experiences" v-bind:class="{ 'current-item': item.isAvaible }">
           {{ item.name }} / <span> {{ item.dateRange }}  </span>
          </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Experience',
  data: function () {
    return {
      experiences: [
        {name: 'Freelance', dateRange: 'now', isAvaible: true},
        {name: 'Detroit Digital', dateRange: 'six months', isAvaible: false},
        {name: 'Gavia Works', dateRange: 'one year', isAvaible: false}
      ]
    }
  },
  
}
</script>

<style lang="scss" scoped>

  .Experience {
    &-list {
      .item {
        font-size: 2.4em;
        color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        &.current-item {
          color: #74a271;
        }
        span {
          font-size: 2rem;
        }
      }
    }
    
  }
</style>
