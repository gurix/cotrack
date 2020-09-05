<template>
  <div>
    <h1 class="sr-only">IPFS State</h1>
    <dl class="ipfs-info" compact>
      <dt>IPFS-ID</dt>
      <dd>{{ id }}</dd>
      <dt>Agent version</dt>
      <dd>{{ agentVersion }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'IpfsInfo',
  data: function () {
    return {
      id: '',
      agentVersion: ''
    }
  },
  mounted: function () {
    this.getIpfsNodeInfo()
  },
  methods: {
    async getIpfsNodeInfo () {
      try {
        // Await for ipfs node instance.
        const ipfs = await this.$ipfs
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const { agentVersion, id } = await ipfs.id()
        this.agentVersion = agentVersion
        this.id = id
        console.log(this)
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
 dl.ipfs-info {
   text-align: right;
   margin: none;
   padding: 0.5em;

   dt, dd {
    display: inline;
    margin: 0;
    padding: 0 0.25em 0 0.5em;
   }
   dt {
     font-weight: bold;

     &::after {
       content: ': '
     }
   }
 }
</style>
