<template>
  <div class="w-full flex justify-center align-middle h-[calc(100vh-80px)] place-items-center text-white">
    <div class="w-[70%] bg-containers border-lines max-w-[750px] border-[1px] rounded-xl p-[20px] h-4/5 max-h-[530px] flex justify-center">
      <div class="w-[90%] inline-block h-full">
        <div class=" h-[10px] w-full rounded border-[1px] border-lines mb-[20px]">
          <div :style="`width: ${100 / 3 * step}%`" class="h-full bg-primary rounded"></div>
        </div>
        <div v-if="step === 1" class="box-grid h-[calc(100%-20px)]">
          <div>
            <div class="flex justify-between place-items-center h-[60px] mb-[20px]">
              <span>Select server: </span><GuildsSelector :guilds="guilds" v-model="guildID" class="w-[260px]" />
            </div>
            <MessageBox v-if="guildPassing === null" type="info" class="flex">
              <img class="h-[20px] mt-[2px] pr-[20px]" src="/img/icons8-dots-loading.png"> Checking dose selected guild match requirements
            </MessageBox>
            <MessageBox v-if="guildPassing === true" type="success">
              Congratulations, You can use custom on {{ guilds.find((guild) => guild.id === guildID)?.name }} 🥳🥳🥳
            </MessageBox>
            <MessageBox v-if="guildPassing === false" type="warning"></MessageBox>
          </div>
          <div class="w-full text-right">
            <button :disabled="!guildPassing" :class="[
            `h-[50px] w-[230px] bg-green-700 rounded inline-block bg-secondary`,
            guildPassing ? `cursor-pointer` : `cursor-not-allowed opacity-50`
            ]" @click="step = 2">
              Next
            </button>
          </div>
        </div>
        <div v-if="step === 2" class="box-grid h-[calc(100%-20px)]">
          <div>
            <span class="text-[20px] mb-[20px]">Follow the rules</span><br>
            <CheckBox v-model="tosAccepted" required="true" />
            Selected server complies with our <NuxtLink class="cursor-pointer text-link">Terms of service</NuxtLink><br>
            <CheckBox v-model="ppAccepted" required="true" />
            I understand and agree with <NuxtLink class="cursor-pointer text-link">Privacy Policy</NuxtLink><br>
            <div class="mt-[20px]">
              Servers and users breaking
              <NuxtLink class="cursor-pointer text-link">Terms of Service</NuxtLink>
                can lose access to the bot
            </div>
          </div>
          <div class="w-full text-right">
            <button type="submit" @click="step = 3" :disabled="!(tosAccepted && ppAccepted)" :class="[
              `h-[50px] w-[230px] rounded inline-block bg-secondary`,
              tosAccepted && ppAccepted ? `cursor-pointer` : `cursor-not-allowed opacity-50`
          ]">Continue</button>
          </div>

        </div>
<!--        <div>-->
<!--          <button @click="step++" class="m-[5px]">Next</button>-->
<!--          <button @click="step=0">Reset</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import GuildsSelector from "../../components/forms/GuildSelector";
import MessageBox from "../../components/content/MessageBox";
import CheckBox from "../../components/forms/CheckBox";
const guilds = [
  {
    name: "PYRAX - Ziemniaczany Serwer Discord",
    id: "404004695703814149",
    icon_url: "https://cdn.discordapp.com/icons/404004695703814149/a_bcd06977a24274826f4ce134aef8a614.jpg"
  }, {
    name: "Test Server",
    id: "4040046957038141492",
    icon_url: "https://cdn.discordapp.com/icons/898986393177567242/2c79cf25dbdd75dedb487063b6f08eca.webp?size=160"
  }
]

let step = ref(1)
let guildID = ref(guilds[0].id)
let guildPassing = ref(null)

let tosAccepted = ref(false)
let ppAccepted = ref(false)

const check = () => {
  guildPassing.value = null
  setTimeout(() => guildPassing.value = Math.random() >= 0.5, 1000)
}

check()
watch(guildID, check)


</script>

<style>
.box-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100px;
}

.text-right {
  text-align: right;
}
</style>