<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" v-link="{ path: '/' }">RedditNovelty</a>
      </div>

      <div
        class="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul class="nav navbar-nav">
          <li class="dropdown" v-link-active>
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Users <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li v-for="user in users">
                <a v-link="{ name: 'user', params: { username: $key }}">
                  {{ user.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div> <!-- /.navbar-collapse -->
    </div> <!-- /.container-fluid -->
  </nav>
</template>

<script>
import users from '../users';

export default {
  data() {
    return {
      users,
    };
  },
}
</script>

<style>
  .navbar {
    border-radius: 0;
  }
</style>
