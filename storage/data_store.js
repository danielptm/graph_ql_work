module.exports = {
  all_data: [
    {
      username: "test@mail.com",
      password: "test_password"
    }
  ],
  getAllData() {
    return this.all_data;
  },
  add(obj) {
    this.all_data.push(obj)
  }
}
