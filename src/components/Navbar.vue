<template>
  <nav class="navbar navbar-default">
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
              <li>
                <a v-link="{ path: '/u/shitty_watercolour' }">
                  Shitty_Watercolour
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
</script>

<style>
  .navbar {
    border-radius: 0;
  }
</style>
