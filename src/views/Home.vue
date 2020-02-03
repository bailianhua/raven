<template>
  <div class="home">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-spacer />
            <v-toolbar-title centered>Welcome to Raven Nest</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text
            condensed
            style="white-space: pre-line; text-align:center;"
            >{{ introduction }}</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined :href="discordLink" target="_blank">Discord</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduction: `Hello honorable guest ,we Raven are gamers gather from various origin and looking for more member.
            Our guild was created so we can enjoy the game together by provide information and cooperation so each member can enjoy the game at their own pace without feeling loss or presured to compete with other people.
          If you interesting in joining please visit our community link's down below`,
      discordLink: "https://discord.gg/nmAb7vz"
    };
  }
};
</script>
