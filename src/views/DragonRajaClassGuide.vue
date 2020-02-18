<template>
  <div class="class-guide">
    <v-app-bar dense flat dark>
      <v-spacer></v-spacer>
      <v-btn dark color="primary" href="dragonraja-guide">
        <v-icon left dark>mdi-chevron-left</v-icon>Go back to guide collection
      </v-btn>
    </v-app-bar>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-spacer />
            <v-toolbar-title centered
              >Dragon Raja Class Overview</v-toolbar-title
            >
            <v-spacer />
          </v-toolbar>
          <v-card-text
            condensed
            style="white-space: pre-line; text-align:center;"
          >
            <v-expansion-panels focusable inset multiple>
              <v-expansion-panel v-for="job in classes" :key="job.name">
                <v-expansion-panel-header color="pink" class="white--text">
                  <v-avatar>
                    <img :src="job.icon" :alt="job.name" />
                  </v-avatar>
                  {{ job.name }}
                  <v-spacer></v-spacer>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card class="pa-2" outlined tile>
                        <v-card-text
                          style="white-spiace: pre-line; text-align:left"
                          >{{ job.description }}</v-card-text
                        >
                      </v-card>
                    </v-col>
                    <v-col cols="6" md="4">
                      <v-card class="pa-2" outlined tile>
                        <v-responsive max-height="300">
                          <img :src="job.pic" :alt="job.pic" height="300" />
                        </v-responsive>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        {
          name: "Blade-Master",
          description: `Front row class, with damage reduction skill. To put it simply this is your typical TANK role. There are 2 form of the class, Meitou form and Tachi form
Meitou form is the TANK form it will boost your defense
Tachi form will increase your attack but lower your defense`,
          video: "",
          icon: "/img/classes/cy_btn.png",
          pic: "/img/classes/blademaster.jpg"
        },
        {
          name: "Soul-Dancer",
          description: `The "Healer/Support" class. Not much to say, having both buff and debuff skill also be able to be a crowd-control role also can heal also the damage is not too bad also the "twin"(spirit) looks interesting.`,
          video: "",
          icon: "/img/classes/zxz_btn.png",
          pic: "/img/classes/souldancer.jpg"
        },
        {
          name: "Assassin",
          description: `Comparable to mage of other game, high burst damage. There're two form Normal form which is mage form and Raid form which is assassin form. 
Normal form attack from long range provide a bit more AOE damage.
Raid form focus on single target damage in melee. `,
          video: "",
          icon: "/img/classes/ss_btn.png",
          pic: "/img/classes/assassin.jpg"
        },
        {
          name: "Gunslinger",
          description: `The longest attack range class. Also have 2 form dual pistol and rifle. The rifle will have a longer range so you can kite mobs with this form, but dual pistol also have its own strength namely camouflage that made you invisible.`,
          video: "",
          icon: "/img/classes/ly_btn.png",
          pic: "/img/classes/gunslinger.jpg"
        }
      ]
    };
  }
};
</script>
