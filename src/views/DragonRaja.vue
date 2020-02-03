<template>
  <div>
    <v-app-bar dense flat dark>
      <v-breadcrumbs :items="items" dark>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container grid-list-xs>
      <v-card class="mr-auto">
        <v-list-item>
          <v-list-item-avatar color="grey">
            <v-img :src="game.icon"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="headline"
              v-text="game.title"
            ></v-list-item-title>
            <div>
              <v-chip small v-for="genre in game.genre" :key="genre.text">{{
                genre.text
              }}</v-chip>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-img :src="game.bg" height="300" class="ma-4"></v-img>
        <v-card-text v-text="game.intro" class="body-1"></v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="primary accent-4"
            :href="game.trailer"
            target="_blank"
          >
            <v-icon left>mdi-video</v-icon>Trailer
          </v-btn>
          <v-btn
            text
            color="primary accent-4"
            :href="game.site"
            target="_blank"
          >
            <v-icon left>mdi-web</v-icon>Website
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    game: {
      title: "Dragon Raja",
      genre: [{ text: "MMORPG" }, { text: "action" }],
      icon: "img/icons/dragonraja-icon.jfif",
      intro: `Based on the established and industry-leading game engine UE4,Dragon Raja is an incredible Fantasy MMORPG with absolutely stunning graphics.
      
      There’s a grand open world in the game waiting for you to explore freely.With deep character customization, unique personality features, plus an innovative career system,it's time to start your second life in Dragon Raja!`,
      trailer: "https://www.youtube.com/watch?v=ircFlN6qsvE",
      bg: "img/dragonraja-bg.jpg",
      site: "https://www.facebook.com/DragonRajaEN/"
    }
  }),
  computed: {
    items() {
      return [
        {
          text: "Games",
          disabled: true,
          href: "games"
        },
        {
          text: this.game.title,
          disabled: true,
          href: "dragonraja"
        }
      ];
    }
  }
};
</script>
