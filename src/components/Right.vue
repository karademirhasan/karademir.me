<template>
   <div>
     <div class="Right">
       <div class="Message">
         <h2>{{ hello }}</h2>
         <p>
           I'm  <strong>{{ name }}</strong> a <strong>{{ year - birthyear }}</strong> year old living in a big, crowded and noisy,but damn beautiful city called <strong>{{ city }}</strong>. I am a <strong>{{ job }}</strong>  I love crafting UI in the browser using HTML, CSS and JS. I'm currently working as a <strong>freelancer</strong>.
         </p>
       </div>
       <div class="Links">
         <div class="mail">
           <a v-bind:href="'mailto:' + links.mail" target="_blank">{{ links.mail }}</a>
         </div>
         <div class="socials">
           <a v-bind:href="links.twitter" target="_blank">twitter</a>
           <a v-bind:href="links.linkedin" target="_blank">linkedin</a>
           <a v-bind:href="links.codepen" target="_blank">codepen</a>
           <a v-bind:href="links.github" target="_blank">github</a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Right',
  data: function () {
    return {
      hello: 'hello,',
      name: 'hasan karademir,',
      city: 'istanbul',
      birthyear: 1993,
      year: new Date().getFullYear(),
      job: 'jr. front-end developer',
      links: {
        mail:  "hasan@karademir.me",
        codepen: "https://codepen.io/karademir",
        github: "https://github.com/karademirhasan",
        linkedin: "https://www.linkedin.com/in/hasan-karademir-a82087168/",
        twitter: "https://twitter.com/yobenhasan"
      }
    }
  },
  
}
</script>

<style lang="scss" scoped>
  .Right {
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(135deg,  var(--bg-1) 0%, #080808 70% );
  }

  .Message {
    padding: 0 60px;
    margin-bottom: 20px;
    &:hover p {
      color: var(--main-color-hover);
      transition: color 200ms ease-in-out;
      strong, a {
        color: var(--main-color-hover);
        transition: color 200ms ease-in-out;
      }
    }

    h2 {
      font-size: 4em;
      color: var(--main-color);
    }

    p {
      font-size: 1.6em;
      line-height: 1.4em;
      color: var(--main-color);
      transition: color 400ms ease-in-out;
      cursor: default;
      &:hover {
        strong {
          
        }
      }
      strong {
        color: var(--main-color);
        transition: color 400ms ease-in-out;
      }
    }
  }

  .Links {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    width: calc( 100% - 120px );
    justify-content: space-between;
    
    .mail {

    }

    .socials {
      display: flex;
      a {
        margin-left: 10px;
        color: var(--main-color);
      }
    }

    a {
      font-size: 1.2em;
      color: var(--main-color);
      font-weight: bold;
      padding: 0 4px;
      transition: color 200ms ease-in-out;
      &:hover {
        color: white;
        transition: color 200ms ease-in-out;
      }
    }

  }
</style>
