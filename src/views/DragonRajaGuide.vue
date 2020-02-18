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
        <v-col cols="6" md="4" v-for="guide in guides" :key="guide.id">
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
                <v-list-item-subtitle>by BaiLianhua</v-list-item-subtitle>
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
            <v-responsive>
              <v-img :src="guide.bg" height="300"></v-img
            ></v-responsive>
            <v-card-text
              style="white-space: pre-line;"
              v-text="guide.intro"
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="deep-purple accent-4" :to="guide.link"
                >Read</v-btn
              >
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
        title: "Class Overview - Dragon Raja",
        genre: [{ text: "Beginner" }, { text: "Tips" }],
        icon: "img/icons/dragonraja-icon.jfif",
        intro: ``,
        trailer: "",
        bg: "img/classes/classes_bg.jpg",
        link: "dragonraja-class-guide"
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
