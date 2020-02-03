<template>
  <div class="member">
    <v-app-bar dense flat dark>
      Our Member
      <v-spacer></v-spacer>
      <v-btn dark color="primary" @click="dialog = true">
        <v-icon left dark>mdi-plus-circle</v-icon>
        Register your name here !
      </v-btn>
    </v-app-bar>
    <v-container grid-list-xs>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <form id="newMemberform" v-on:submit.prevent="addUser">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name"
                      v-model="newMember.name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="IGN"
                      v-model="newMember.ign"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Picture-URL"
                      v-model="newMember.picture"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="addUser()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in members" :key="person.name">
          <v-card flat class="mr-4">
            <v-responsive class="pt-4 text-center">
              <v-avatar size="76">
                <img :src="person.picture" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    {{ person.name }}
                    <v-list-item-subtitle
                      >IGN: {{ person.ign }}</v-list-item-subtitle
                    >
                  </v-list-item-title>
                </v-list-item>

                <v-list-group value="true">
                  <template v-slot:activator>
                    <v-list-item-title>Games</v-list-item-title>
                  </template>
                  <v-list-item
                    v-for="game in person.games"
                    :key="game.title"
                    link
                  >
                    <v-list-item-avatar>
                      <img :src="game.image" alt />
                    </v-list-item-avatar>
                    <v-list-item-title v-text="game.title" />
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-center">
      <v-bottom-sheet v-model="registered" persistent>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" color="success" @click="registered = !registered"
            >Got it !</v-btn
          >
          <div class="py-3">
            Register completed. Please Wait for member review.
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  data() {
    return {
      registered: false,
      dialog: false,
      newMember: {
        name: "",
        ign: "",
        active: false,
        picture: ""
      },
      members: []
    };
  },
  firestore() {
    return {
      members: db.collection("members").where("active", "==", true)
    };
  },
  methods: {
    addUser() {
      db.collection("members").add(this.newMember);
      this.newMember.name = "";
      this.newMember.ign = "";
      this.newMember.picture = "";
      this.dialog = false;
      this.registered = true;
    }
  },
  mounted() {}
};
</script>
