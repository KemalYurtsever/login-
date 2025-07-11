const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle("dark", this.darkMode);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@([^\s@]{3,})\.[^\s@]+$/;
      this.errorMessage =
        this.email && !emailRegex.test(this.email)
          ? "Enter a valid E-mail"
          : "";
    },
    signup() {
      if (!this.name || !this.surname || !this.email || !this.password) {
        this.errorMessage = "All fields are required";
        return;
      }

      const emailRegex = /^[^\s@]+@([^\s@]{3,})\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errorMessage = "Enter a valid E-mail";
        return;
      }

      if (this.password.length < 6) {
        this.errorMessage = "Password must be at least 6 characters";
        return;
      }

      this.errorMessage = "";

      Swal.fire({
        icon: "success",
        title: `Welcome, ${this.name}!`,
        text: "Your account has been created successfully.",
        confirmButtonColor: "#3085d6",
      });
    },
  },
}).mount("#app");
