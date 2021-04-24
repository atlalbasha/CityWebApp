new Vue({
  data: {
    cities: null,
    id: null,
    name: null,
    population: null,
  },
  created() {
    this.fetchCities();
  },

  el: "#app",
  methods: {
    addCity() {
      fetch("https://avancera.app/cities/", {
        body: JSON.stringify({ name: this.name, population: this.population }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {});
      this.fetchCities();
    },
    deleteCity(id) {
      if (id) {
        fetch("https://avancera.app/cities/" + id, {
          method: "DELETE",
        }).then((response) => {
          console.log(response);
        });
        this.fetchCities();
      } else {
        alert("Choose a City To Delete!");
      }
    },
    updateCity(id) {
      if (id) {
        fetch("https://avancera.app/cities/" + id, {
          body: JSON.stringify({
            name: this.name,
            population: this.population,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
        })
          .then((response) => response.json())
          .then((result) => {});
        this.fetchCities();
      } else {
        alert("Choose a City to Update!");
      }
    },

    fetchCities() {
      fetch("https://avancera.app/cities/")
        .then((response) => response.json())
        .then((result) => {
          this.cities = result;
        });
    },
  },
});

/* 
  new Vue({
  created(){
    this.getApi()
  },
    data: {
      test: null,
      title: '',
      body: ''
    },
    el: '#app',
    methods: {
      getApi() {
      
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((result) => {
            this.test = result
          })
      }
    }
  })  */
