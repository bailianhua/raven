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
      <v-row>
        <v-col v-for="guide in guides" :key="guide.id">
          <v-card class="mx-auto">
            <v-list-item>
              <v-list-item-avatar color="grey">
                <v-img :src="guide.icon"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="headline"
                  v-text="guide.title"
                ></v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                <div>
                  <v-chip
                    small
                    v-for="genre in guide.genre"
                    :key="genre.text"
                    >{{ genre.text }}</v-chip
                  >
                </div>
              </v-list-item-content>
            </v-list-item>

            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
              height="194"
            ></v-img>
            <v-card-text
              style="white-space: pre-line;"
              v-text="guide.intro"
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="deep-purple accent-4">Read</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    guides: [
      {
        id: 1,
        title: "Beginner Need To Know - Dragon Raja",
        genre: [{ text: "Beginer" }, { text: "tips" }],
        icon: "img/icons/dragonraja-icon.jfif",
        intro: ``,
        trailer: ""
      },
      {
        id: 2,
        title: "Class Overview - Dragon Raja",
        genre: [{ text: "Beginer" }, { text: "tips" }],
        icon: "img/icons/dragonraja-icon.jfif",
        intro: ``,
        trailer: ""
      },
      {
        id: 3,
        title: "Beginner Need To Know - Dragon Raja",
        genre: [{ text: "Beginer" }, { text: "tips" }],
        icon: "img/icons/dragonraja-icon.jfif",
        intro: ``,
        trailer: ""
      }
    ]
  }),
  computed: {
    items() {
      return [
        {
          text: "Guides",
          disabled: true,
          href: "games"
        },
        {
          text: "Dragon Raja",
          disabled: true,
          href: "dragonraja"
        }
      ];
    }
  }
};
</script>
