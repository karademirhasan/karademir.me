<template>
   <div>
     <div class="Education">
       <div class="Education-list">
         <div class="item" v-for="item in Educations" v-bind:key="item.Educations" v-bind:class="{ 'current-item': item.isAvaible }">
          <span> {{ item.name }} </span>  <span class="departmant"> / {{ item.departmant }}  </span>
          </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Education',
  data: function () {
    return {
      Educations: [
        {name: 'Anadolu University ', departmant: 'Management Information System', isAvaible: true},
        {name: 'Istanbul Aydin University', departmant: 'Computer Programming', isAvaible: false},
        {name: 'Erkan Avci Technical High School', departmant: 'Web Design and Programming', isAvaible: false}
      ]
    }
  },
  
}
</script>

<style lang="scss" scoped>
  h1 {
    color: white;
    font-size: 5em;
  }

  .Education {
    &-list {
      .item {
        font-size: 2em;
        color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        &.current-item {
          color: #74a271;
        }
        span {
          padding: 10px;
        }
        .departmant {
         
          font-size: 1.4rem;
        }
      }
    }
    
  }
</style>
