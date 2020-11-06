<template>
  <div class="home">
   <vheader />
   <vitem />
  <router-view/>
   <vfooter />


  </div>
</template>

<script>
// @ is an alias to /src
import vheader from '@/components/vheader.vue'
import vitem from '@/components/vitem.vue'
import vfooter from '@/components/vfooter.vue'

export default {
  data(){
    return {
      
    }
  },

  components: {
    vheader,
    vitem,
    vfooter
  }
}
</script>
