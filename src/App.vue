<template>
  <v-app>
		<Card/>
  </v-app>
</template>

<script>
import Card from './components/Card';

export default {
  name: 'App',

  components: {
		Card
  },

  data: () => ({
    //
  }),
};
</script>
