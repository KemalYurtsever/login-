const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },

    showSuccess() {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have logged in successfully.",
        confirmButtonColor: "#3085d6",
      });
    },

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@([^\s@]{3,})\.[^\s@]+$/;
      if (this.email && !emailRegex.test(this.email)) {
        this.errorMessage = "Enter a valid E-mail";
      } else {
        this.errorMessage = "";
      }
    },
    login() {
      if (!this.email || !this.password) {
        this.errorMessage = "E-mail and password is required";
        return;
      }

      const emailRegex = /^[^\s@]+@([^\s@]{3,})\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = "Enter a valid E-mail";
        return;
      }
      const audio = new Audio("./assests/altımasıçtım.mp4 ");
      audio.play();

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Hayır altıma sıçtım!.",
        confirmButtonColor: "#3085d6",
      });
    },
  },
});

app.mount("#app");
