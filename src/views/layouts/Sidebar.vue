<template>
  <v-navigation-drawer app v-model="drawer" expand-on-hover permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <img src="img/icons/ravenLogo.png" alt="logo" />
      </v-list-item-avatar>
      <v-list-item-title class="text-uppercase title pl-4">
        Raven
        <v-list-item-subtitle>Let's Do It</v-list-item-subtitle>
      </v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-subheader class="mt-4 grey--text text--darken-1 text-uppercase">
      <v-icon left>mdi-file-document-box-check</v-icon>
      <v-list-item-content>Game Guides</v-list-item-content>
    </v-subheader>
    <v-list>
      <v-list-item
        v-for="guide in guides"
        :key="guide.title"
        :to="guide.link"
        class="px-2"
      >
        <v-list-item-avatar>
          <img :src="guide.pic" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="guide.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-subheader class="mt-4 grey--text text--darken-1 text-uppercase">
      <v-icon left>mdi-gamepad-variant</v-icon>
      <v-list-item-content>Games We Play</v-list-item-content>
    </v-subheader>
    <v-list>
      <v-list-item
        v-for="game in games"
        :key="game.title"
        :to="game.link"
        class="px-2"
      >
        <v-list-item-avatar>
          <img :src="game.pic" alt />
        </v-list-item-avatar>
        <v-list-item-title v-text="game.title" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home-outline", link: "/" },
        { title: "Member", icon: "mdi-account-group", link: "member" },
        { title: "Community", icon: "mdi-face-agent", link: "community" }
      ],
      games: [
        {
          title: "Dragon Raja",
          pic: "img/icons/dragonraja-icon.jfif",
          link: "dragonraja"
        }
      ],
      guides: [
        {
          title: "Dragon Raja Guide",
          pic: "img/icons/dragonraja-guide-icon.jpg",
          link: "dragonraja-guide"
        }
      ],
      right: null
    };
  }
};
</script>
