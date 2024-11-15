<template>
  <div id="app">
    <v-app>
      <!-- Header -->
      <v-card class="overflow-hidden">
        <!-- App Bar -->
        <v-app-bar
          absolute
          color="#89a4c9"
          dark
          shrink-on-scroll
          prominent
          elevation="6"
          scroll-threshold="500"
          scroll-target="#scrolling-techniques-5"
          fade-img-on-scroll
        >
          <v-app-bar-title>DigitalMarketingCo</v-app-bar-title>
          <v-spacer></v-spacer>
          <!-- Dropdown Sliding from Top -->
          <v-menu
            offset-y
            open-on-hover
            transition="slide-y-transition"
            close-on-content-click
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="d-none d-md-flex" v-bind="attrs" v-on="on"
                >Services</v-btn
              >
            </template>
            <v-card>
              <v-card-title class="text-h6">Our Services</v-card-title>
              <v-divider></v-divider>
              <v-list>
                <v-list-item v-for="(service, index) in services" :key="index">
                  <v-list-item-content>
                    <v-list-item-title>{{ service.title }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ service.subtitle }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
          <v-btn text class="d-none d-md-flex">About</v-btn>

          <v-btn text class="d-none d-md-flex">Portfolio</v-btn>
          <v-btn text class="d-none d-md-flex">Contact</v-btn>
          <!-- Menu Button for Mobile -->
          <v-btn icon class="d-md-none" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-app-bar>

        <!-- Navigation Drawer -->
        <v-navigation-drawer v-model="drawer" app temporary right>
          <v-list dense>
            <v-list-item link>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Services</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <!-- Scrollable Content -->
        <v-sheet
          id="scrolling-techniques-5"
          class="overflow-y-auto"
          style="max-height: 100vh"
        >
          <router-view />
          <!-- Footer -->
          <v-footer color="#212121" padless>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="text-center white--text py-4">
                  <div>
                    <strong>Futuristic Digital Solutions</strong> | All Rights
                    Reserved © 2024
                  </div>
                  <div class="mt-2">
                    <v-btn
                      icon
                      href="https://facebook.com"
                      target="_blank"
                      class="white--text"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      href="https://twitter.com"
                      target="_blank"
                      class="white--text"
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      href="https://instagram.com"
                      target="_blank"
                      class="white--text"
                    >
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      href="https://linkedin.com"
                      target="_blank"
                      class="white--text"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-footer>
        </v-sheet>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    services: [
      { title: "SEO Optimization", subtitle: "Improve search rankings" },
      { title: "Content Marketing", subtitle: "Engage your audience" },
      { title: "Social Media Management", subtitle: "Grow your presence" },
      { title: "Web Development", subtitle: "Modern, responsive websites" },
      { title: "PPC Advertising", subtitle: "Boost traffic with ads" },
    ],
  }),
};
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
}
.v-list-item-content {
  padding-left: 8px;
}
/* Add responsive adjustments for smaller screen sizes */
@media (max-width: 600px) {
  .v-app-bar-title {
    font-size: 1.2rem;
  }
}
</style>
