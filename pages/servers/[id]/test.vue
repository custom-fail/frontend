<template>
  <div class="mt-[20px]">
    <component v-for="part in parts" :part="part" class="ml-[80px] mr-[80px] mt-[20px] mb-[20px]" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "server",
  // middleware: ["auth"]
});

const parts = [
  {
    type: "title",
    text: "Moderation"
  },
  {
    type: "description",
    text: "Here you can adjust your server's MEE6 bot"
  },
  {
    type: "section",
    sections: [{
      type: "title",
      text: "Permissions"
    },
      {
        type: "warning",
        text: ""
      }
    ]
  },
  {
    type: "section",
    sections: [{
      type: "title",
      text: "Language"
    }, {
      type: "description",
      text: "Change the default language of MEE6 in your server."
    }, {
      type: "line"
    }, {
      type: "select",
      selected: {
        name: "English",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
      },
      options: [{
        name: "English",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
      },{
        name: "English",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
      },{
        name: "English",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
      },],
    }]
  },
  {
    type: "section",
    sections: [{
      type: "title",
      text: "Timezone"
    }, {
      type: "description",
      text: "Change the default timezone of MEE6 in your server."
    }, {
      type: "line"
    }]
  },
  {
    type: "section",
    sections: [{
      type: "title",
      text: "Commands"
    }, {
      type: "description",
      text: "You can change the prefix used to trigger the bot."
    }, {
      type: "line"
    },
      {
        type: "switch"
      }]
  }
]

// const parts = [
//   {
//     type: "title",
//     text: "Settings"
//   },
//   {
//     type: "description",
//     text: "Here you can adjust your server's MEE6 bot"
//   },
//   {
//     type: "section",
//     sections: [{
//       type: "title",
//       text: "Bot Masters"
//     },
//       {
//       type: "warning",
//       text: "Bot masters can access your Dashboard and edit every command and plugin configuration.\nBot masters also bypass command role checks, are automatically considered moderators in the Moderator plugin and can reset anyone's XP in the Levels plugin!"
//     }, {
//       type: "line"
//     },
//     //  {
//     //   type: "image",
//     //   width: "100px",
//     //   height: "100px",
//     //   src: "https://cdn.discordapp.com/attachments/837399926182117417/967713749840584744/unknown.png"
//     // }
//     ]
//   },
//   {
//     type: "section",
//     sections: [{
//       type: "title",
//       text: "Language"
//     }, {
//       type: "description",
//       text: "Change the default language of MEE6 in your server."
//     }, {
//       type: "line"
//     }, {
//       type: "select",
//       selected: {
//         name: "English",
//         icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
//       },
//       options: [{
//         name: "English",
//         icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
//       },{
//         name: "English",
//         icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
//       },{
//         name: "English",
//         icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png"
//       },],
//     }]
//   },
//   {
//     type: "section",
//     sections: [{
//       type: "title",
//       text: "Timezone"
//     }, {
//       type: "description",
//       text: "Change the default timezone of MEE6 in your server."
//     }, {
//       type: "line"
//     }]
//   },
//   {
//     type: "section",
//     sections: [{
//       type: "title",
//       text: "Commands"
//     }, {
//       type: "description",
//       text: "You can change the prefix used to trigger the bot."
//     }, {
//       type: "line"
//     },
//       {
//         type: "switch"
//       }]
//   }
// ]
</script>