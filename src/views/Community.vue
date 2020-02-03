<template>
  <div class="community">
    <v-app-bar dense flat dark>
      Our Community
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-card
        v-for="community in communities"
        :key="community.title"
        class="deep-purple darken-2"
        dark
        raised
      >
        <div class="d-flex flex-no-wrap">
          <v-icon size="10rem">mdi-discord</v-icon>
          <div>
            <v-card-title class="headline">{{ community.title }}</v-card-title>
            <v-card-subtitle>{{ community.description }}</v-card-subtitle>
            <v-btn text :href="community.link" target="_blank">Link</v-btn>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      communities: [
        {
          title: "Discord",
          icon: "mdi-discord",
          description: "Main community, voice chat, hangout, chatting",
          link: "https://discord.gg/nmAb7vz"
        }
      ]
    };
  }
};
</script>
