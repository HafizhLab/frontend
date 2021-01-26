<template>
  <div class="m-0 p-0">
    <div class="profile pb-4 m-0">
      <div class="row text-center title pt-3">
        <p class="w-100">Profile</p>
      </div>
      <div class="row profile-image w-100 mb-3">
        <img src="~/assets/img/dummy-user.png" />
      </div>
      <div class="row profile-info mb-3">
        <p class="name">Lulu Ilmaknun</p>
        <p class="email">lulu@mail.com</p>
      </div>
    </div>
    <div class="profile-menu m-5">
      <div class="col-md-3 menu-box m-auto">
        <ul>
          <li><nuxt-link to="/profile/settings">Settings</nuxt-link></li>
          <li><nuxt-link to="/profile/terms">Terms & Condition</nuxt-link></li>
          <li><nuxt-link to="/profile/about-us">About Us</nuxt-link></li>
          <li class="logout"><nuxt-link to="/logout">Logout</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.profile {
  background: #49c0db;
  border-radius: 0px 0px 30px 30px;
}

.profile .title {
  color: white;
  font-size: 15pt;
  font-weight: 900;
  border: 0;
}

.profile-image {
  margin: 0;
}

.profile-image img {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 10rem;
  margin: auto;
}

.profile-info p.name,
.profile-info p.email {
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 900;
  margin-bottom: 5px;
}

.profile-info p.name {
  font-size: 13pt;
}

.profile-info p.email {
  font-size: 11pt;
}

.menu-box {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1.5rem;
}

.profile-menu ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.profile-menu ul li,
.profile-menu ul li a {
  padding: 0.5rem;
  color: #49c0db;
  font-weight: bold;
}

.profile-menu ul li.logout,
.profile-menu ul li.logout a {
  color: #848484;
}
</style>
