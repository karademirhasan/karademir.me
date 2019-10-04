<template>
  <div>
    <div class="Left">
      <div class="content">
        <transition name="page"  mode="out-in" >
          <router-view class="view"></router-view>
        </transition>
      </div>
      <div class="menu">
        <router-link v-for="item in menu" v-bind:key="item.menuName" v-bind:to="item.menuLink">{{ item.menuName }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
  data: function() {
    return {
      menu: [
        { menuName: 'experience', menuLink: 'experience' },
        { menuName: 'works', menuLink: 'works' },
        { menuName: 'education', menuLink: 'education'}
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>



  .page-enter-active, .page-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .page-enter {
    opacity: 1;
    transform: scale(.9);
  }

  .page-leave-to {
    opacity: 0;
    transform: scale(.8);
  }

   
  .Left {
    width: 50vw;
    height: 100vh;
    background: linear-gradient(45deg, #080808 0%, var(--bg-1) 100%);

    

    .menu {
      position: absolute;
      bottom: 30px;
      display: flex;
      width: 50%;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      
      a {
        color: white;
        margin: 0 10px;
        font-size: 2.6em;
        transition: all 200ms ease-in-out;
        transform: skewX(-10deg);
        border-bottom: 3px solid transparent;
        padding-bottom: 5px;
       
        &:hover {
          border-color: rgba(white, .8);
          transition: all 200ms ease-in-out;
        }

        &.router-link-active {
          border-bottom: 3px solid rgba(white, .8);
        }
      }

     

     


    }

    .content {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      
    }
    
    

  }
</style>
