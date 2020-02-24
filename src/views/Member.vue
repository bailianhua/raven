<template>
  <div class="party">
    <v-app-bar dense flat dark>
      <v-text-field
        :append-icon-cb="() => {}"
        placeholder="Search member..."
        single-line
        append-icon="mdi-account-search"
        color="white"
        hide-details
        :bind="this.search"
      />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(party, i) in parties" :key="i">
          <v-card class="mx-auto" max-width="300">
            <v-toolbar dark dense>
              <v-toolbar-title class="grey--text">{{
                party.party_name
              }}</v-toolbar-title></v-toolbar
            >
            <v-list dense>
              <v-list-item v-for="(member, i) in party.party_members" :key="i">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  v-text="member.member_name"
                ></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: "raven-12e4e" })
  .firestore();

export default {
  components: {},
  name: "Party",
  data: () => ({
    parties_bak: [
      {
        party_name: "Evil team",
        party_type: "mollit",
        party_members: [
          {
            name: " Kumi",
            ign: "Kumi"
          },
          {
            name: " Kumi",
            ign: "Kumi"
          },
          {
            name: " Kumi",
            ign: "Kumi"
          },
          {
            name: " Kumi",
            ign: "Kumi"
          },
          {
            name: " Kumi",
            ign: "Kumi"
          }
        ]
      },
      {
        party_name: "Equally Evil team",
        party_type: "est",
        party_members: [
          {
            name: "Shana",
            ign: "Shana"
          },
          {
            name: "Shana",
            ign: "Shana"
          },
          {
            name: "Shana",
            ign: "Shana"
          },
          {
            name: "Shana",
            ign: "Shana"
          },
          {
            name: "Shana",
            ign: "Shana"
          }
        ]
      },
      {
        party_name: "MICROLUXE",
        party_type: "aute",
        party_members: [
          {
            name: "Estela",
            ign: "Terry"
          },
          {
            name: "Josie",
            ign: "Howe"
          },
          {
            name: "Teresa",
            ign: "Wynn"
          },
          {
            name: "Freida",
            ign: "Norton"
          },
          {
            name: "Corina",
            ign: "Weeks"
          }
        ]
      },
      {
        party_name: "GROK",
        party_type: "aute",
        party_members: [
          {
            name: "Hines",
            ign: "Hale"
          },
          {
            name: "Stout",
            ign: "Rios"
          },
          {
            name: "Janine",
            ign: "Simon"
          },
          {
            name: "Greer",
            ign: "Tate"
          },
          {
            name: "Osborne",
            ign: "Lloyd"
          }
        ]
      },
      {
        party_name: "MANGELICA",
        party_type: "nulla",
        party_members: [
          {
            name: "Stone",
            ign: "Battle"
          },
          {
            name: "Madelyn",
            ign: "Dixon"
          },
          {
            name: "Chrystal",
            ign: "Price"
          },
          {
            name: "Cardenas",
            ign: "Farrell"
          },
          {
            name: "Carey",
            ign: "Horn"
          }
        ]
      },
      {
        party_name: "GOLOGY",
        party_type: "voluptate",
        party_members: [
          {
            name: "Ginger",
            ign: "Yates"
          },
          {
            name: "Marquez",
            ign: "Mack"
          },
          {
            name: "Mcmahon",
            ign: "Yang"
          },
          {
            name: "Camille",
            ign: "Ball"
          },
          {
            name: "Dorothy",
            ign: "Dennis"
          }
        ]
      }
    ],
    parties: [],
    search: ""
  }),
  methods: {
    partyListData() {
      return {
        props: {
          dense: true
        }
      };
    }
  },
  firestore: {
    parties: db.collection("party")
  }
};
</script>
