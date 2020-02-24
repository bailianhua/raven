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
        v-model="search"
      />
      <v-spacer></v-spacer>
      <v-btn color="white" outlined @click="submitData()">Save</v-btn>
    </v-app-bar>
    <v-container fluid>
      <v-alert
        v-model="save"
        border="left"
        close-text="Close Alert"
        color="deep-green accent-4"
        dark
        dismissible
      >
        Saved !!
      </v-alert>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="party_name"
                label="Party Name"
                outlined
                shaped
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="5">
              <v-text-field
                v-model="party_type"
                label="Party Type"
                outlined
                shaped
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="1">
              <v-btn class="mr-4" @click="newParty">Add Party</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-row dense>
        <v-col v-for="(party, i) in filterMembers" :key="i">
          <v-card class="mx-auto" max-width="400">
            <v-toolbar dark dense>
              <v-toolbar-title class="grey--text">{{
                party.party_name
              }}</v-toolbar-title></v-toolbar
            >
            <v-list dense>
              <draggable
                :list="party.party_members"
                group="member"
                :component-data="partyListData()"
              >
                <v-list-item
                  v-for="(member, i) in party.party_members"
                  :key="i"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    v-text="member.member_name"
                  ></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon color="red">mdi-close</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </draggable>
            </v-list>
            <v-card-actions>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-btn
                    color="grey"
                    @click="
                      dialog = true;
                      party_id_add_member = party.id;
                    "
                    outlined
                    >Add Member</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">New Member</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Member Name"
                    v-model="member_name"
                    outlined
                    shaped
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Member IGN"
                    v-model="member_ign"
                    outlined
                    shaped
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="newMember()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({ projectId: "raven-12e4e" })
  .firestore();

export default {
  components: {
    draggable
  },
  name: "Party",
  data: () => ({
    parties: [],
    search: "",
    save: false,
    party_name: "",
    party_type: "",
    member_name: "",
    member_ign: "",
    dialog: false,
    party_id_add_member: ""
  }),
  methods: {
    partyListData() {
      return {
        props: {
          dense: true
        }
      };
    },
    newParty() {
      db.collection("party").add({
        party_name: this.party_name,
        party_type: this.party_type,
        party_members: []
      });
      this.save = true;
    },
    newMember() {
      db.collection("party")
        .doc(this.party_id_add_member)
        .update({
          party_members: firebase.firestore.FieldValue.arrayUnion({
            member_name: this.member_name,
            member_ign: this.member_ign
          })
        });
      this.dialog = false;
    },
    submitData() {
      this.filterMembers.forEach(party => {
        db.collection("party")
          .doc(party.id)
          .set(party);
        this.save = true;
      });
    }
  },
  firestore: {
    parties: db.collection("party")
  },
  computed: {
    filterMembers: function() {
      let filtered = this.parties;
      let search = this.search.toLowerCase();
      if (search) {
        filtered = filtered.filter(r => {
          let members = r.party_members.filter(i => {
            return i.member_name.toLowerCase().indexOf(search) > -1;
          });
          return members.length > 0;
        });
      }
      return filtered;
    }
  }
};
</script>
