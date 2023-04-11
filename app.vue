<template>
  <NuxtLayout>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtLoadingBar :duration="1000" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #121212;
  overflow-x: hidden;
}

.inherit {
  display: inherit;
}

* {
  scrollbar-color: rgba(255, 255, 255, 0.33) rgba(0, 0, 0, 0.14);
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.14);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.33);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.24);
}

::-webkit-scrollbar-thumb:active {
  background: rgba(255, 255, 255, 0.14);
}
</style>

<script setup>
useHead({
  script: [{
    children: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3162665,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
  }]
})
</script>