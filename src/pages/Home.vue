<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>Reddit Novelty Account Viewer</h1>
      <p>Reddit has many amazing novelty accounts who post all sorts of amazing content on a regular basis. This site helps you view it in all in one place with ease.</p>

      <h3>Supported accounts<h3>
      <ul>
        <li v-for="user in users">
          <a v-link="{ name: 'user', params: { username: $key }}">
            {{ user.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
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
