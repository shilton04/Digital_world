<template>
  <v-app class="body">
    <!-- Hero Section -->
    <v-container class="pt-5 mt-5 text-center py-10 hero">
      <h1 class="display-2 font-weight-bold mb-4">
        Elevate Your Business with Digital Marketing
      </h1>
      <p class="subtitle-1 mb-6">
        Transform your brand with cutting-edge strategies tailored for the
        digital age.
      </p>
      <v-btn color="primary" large>Learn More</v-btn>
    </v-container>

    <!-- Services Section -->
    <v-container class="my-10">
      <v-row justify="center">
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          md="4"
          class="text-center"
        >
          <v-img
            :src="service.image"
            alt="Service Image"
            contain
            class="mb-4"
            height="150"
          ></v-img>
          <h3 class="headline">{{ service.title }}</h3>
          <p class="body-1">{{ service.description }}</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Process Section -->
    <v-container class="my-10 py-10 process">
      <h2 class="text-center font-weight-bold mb-8">Our Process</h2>
      <v-row justify="space-between">
        <v-col
          v-for="(step, index) in processSteps"
          :key="index"
          cols="12"
          md="3"
          class="text-center"
        >
          <v-icon color="primary" class="mb-4" size="48">{{
            step.icon
          }}</v-icon>
          <h4 class="subtitle-1 font-weight-bold">{{ step.title }}</h4>
          <p class="body-2">{{ step.description }}</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action Section -->
    <v-container class="text-center cta py-10">
      <h2 class="font-weight-bold display-1 mb-4">Ready to Transform?</h2>
      <p class="subtitle-1 mb-6">
        Let us help you create a digital marketing strategy that works.
      </p>
      <v-btn color="success" large>Contact Us</v-btn>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          image: "https://via.placeholder.com/150",
          title: "SEO Optimization",
          description: "Improve your search engine rankings.",
        },
        {
          image: "https://via.placeholder.com/150",
          title: "Social Media Management",
          description: "Engage your audience with targeted campaigns.",
        },
        {
          image: "https://via.placeholder.com/150",
          title: "Content Marketing",
          description: "Create valuable content for your audience.",
        },
      ],
      processSteps: [
        {
          icon: "mdi-lightbulb-outline",
          title: "Ideation",
          description: "We brainstorm unique strategies for your brand.",
        },
        {
          icon: "mdi-chart-line",
          title: "Planning",
          description: "We create detailed plans tailored to your needs.",
        },
        {
          icon: "mdi-rocket-launch",
          title: "Execution",
          description: "We execute campaigns to achieve your goals.",
        },
        {
          icon: "mdi-chart-pie",
          title: "Analysis",
          description: "We analyze results and refine strategies.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.body {
  padding-top: 10%;
}
.hero {
  background: linear-gradient(135deg, #a9abee, #1e88e5);
  color: white;
  border-radius: 8px;
  padding-top: 10%;
  margin-top: 100%;
}

.process {
  background: #f5f5f5;
  border-radius: 8px;
}

.cta {
  background: linear-gradient(135deg, #9396f5, #5b5fde);
  color: white;
  border-radius: 8px;
}
</style>
