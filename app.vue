<template>
  <NuxtLayout>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #121212;
}

.inherit {
  display: inherit;
}
</style>

<script setup>
useHead({
  script: [{
    children: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:3111264,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
  }]
})
</script>