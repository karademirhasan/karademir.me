<template>
   <div>
     <div class="Works">
       <div class="Works-list">
         <div class="item" v-for="item in Works" v-bind:key="item.Works" >
           <a target="_blank" v-bind:href="item.link"> {{ item.name }}  </a>
          </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Works',
  data: function () {
    return {
      Works: [
        { name: 'eldori.com ', link: 'http://eldori.com'},
        { name: 'detroitdigital.co', link: 'http://detroitdigital.co'}
      ]
    }
  },
  
}
</script>

<style lang="scss" scoped>
 

  .Works {
    &-list {
      .item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        a {
          color: var(--main-color);
          font-size: 2.4em;
          transition: color 300ms ease;
          &:hover {
            color: white;
            transition: color 300ms ease;
          }
        }
        

      }
    }
    
  }
</style>
