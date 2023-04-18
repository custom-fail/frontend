<template>
  <div class="scroll-smooth text-white all bg-black">
    <div class="first loaded">
      <div class="description">
        <div class="mb-[10px]">
          <span class="text-[80px] leading-none">One-click everything</span>
        </div>
        <span class="text-[25px]">Focus on building your community while our discord bot takes care of the rest. We will ensure your server's safety and activity by providing the necessary tools.</span>
        <div class="apply">
          <div class="p-[10px] text-[20px] mt-[10px] text-black rounded animation-bg w-[190px] text-center cursor-pointer">Apply for access</div>
        </div>
      </div>
      <div class="w-2/5 hide-whitespace"></div>
      <PreviewFirst />
    </div>

    <div class="z-[1] absolute bg-black w-full">
      <Separator />
      <div class="pr-[5%] pl-[5%] my-[50px] h-[90vh] flex place-items-center justify-center">
        <div class="text-[200px] loaded">123321123321</div>
      </div>
      <Separator />
      <div class="action-row-2 loaded">
        <div class="flex place-items-center">
          <span>Ready for using Custom in your server?</span>
        </div>
        <ActionRow />
      </div>
      <Separator />
      <!--    <div class="px-[5%] my-[50px]">-->
      <!--      <div class="why-us loaded">-->
      <!--        <img class="why-us-image" src="/img/previews/ContextMenus.svg" />-->
      <!--        <div class="why-us-item">-->
      <!--          <div>-->
      <!--            <span class="title">Context menus</span><br>-->
      <!--            <span>Compatible with a discord latest features to improve your experience</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="why-us mobile-reverted loaded">-->
      <!--        <div class="why-us-item">-->
      <!--          <div>-->
      <!--            <span class="title">Modals/Forms</span><br>-->
      <!--            <span>We are making everything intuitive. Accessibility is our top priority!</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <img class="why-us-image" src="/img/previews/Modals.svg" />-->
      <!--      </div>-->
      <!--    </div>-->
      <!--    <Separator />-->
      <div class="h-[300px] w-full grid grid-cols-3 text-text text-center">
        <div class="logo-box">
          <span class="white text-[50px] bold text-white mt-[120px] flex justify-center items-center">Custom</span>
        </div>
        <div>
          <a href="https://discord.gg/7HUDwwZjGt">Support Server</a><br>
          <a :href="inviteUrl">Invite bot</a><br>
          <a href="https://github.com/custom-fail/">Github</a>
        </div>
        <div>
          <NuxtLink href="/guidelines">Assets guidelines</NuxtLink><br>
          <NuxtLink href="/tos">Terms of service</NuxtLink><br>
          <NuxtLink href="/privacy">Privacy policy</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Separator from "../components/content/Separator"
import ActionRow from "../components/ActionRow";
import {onMounted} from "vue";
import { onBeforeRouteLeave } from "vue-router";
import PreviewFirst from "~/components/previewFirst.vue";
const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=988840106938990632&permissions=8&scope=bot%20applications.commands`

definePageMeta({
  layout: "main"
})

onMounted(() => {
  const onElementObserved = (entries) => {
    entries.forEach(({target, isIntersecting}) => {
      console.log(target)
      if (isIntersecting) target.classList.add("shown")
    })
  }

  const observer = new IntersectionObserver(
      onElementObserved
  );

  window.mainPageObserver = observer

  document.querySelectorAll(".loaded").forEach(el => observer.observe(el))
})

onBeforeRouteLeave(() => {
  window.mainPageObserver.disconnect()
})
</script>

<style>
.first {
  /*background-image: url("data:image/svg+xml,%3Csvg xlink='http://www.w3.org/1999/xlink' viewBox='0 0 5000 5000' xmlns='http://www.w3.org/2000/svg' style='transform: scale(1)%3B'%3E%3Cdefs%3E%3Cfilter id='goo'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='0.05' result='blur'%3E%3C/feGaussianBlur%3E%3CfeColorMatrix in='blur' type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9' result='good'%3E%3C/feColorMatrix%3E%3CfeComposite in='SourceGraphic' in2='goo' operator='atop'%3E%3C/feComposite%3E%3C/filter%3E%3Cpath d='M260 232C256 241 257 242 267 238C261 249 260 256 261 268C241 272 227 256 233 238L260 232z' id='P0'%3E%3C/path%3E%3Cpath d='M252 236L264 247L262 257L236 253L252 236z' id='P1'%3E%3C/path%3E%3Cpath d='M228 246Q236 220 259 230C262 246 261 256 257 271C247 273 237 270 231 262Q218 256 228 246z' id='P2'%3E%3C/path%3E%3Cpath d='M251 240L260 248L252 260L241 246L251 240z' id='P3'%3E%3C/path%3E%3Cpath d='M233 219C243 214 255 214 265 218C284 231 288 255 276 274L229 278Q198 247 233 219z' id='P4'%3E%3C/path%3E%3Cpath d='M244 259L241 244L260 245L250 261L244 259z' id='P5'%3E%3C/path%3E%3Cpath d='M232 260Q222 239 244 231Q272 229 268 259Q268 274 254 270L232 260z' id='P6'%3E%3C/path%3E%3Cpath d='M241 267L232 257L250 231L268 245L241 267z' id='P7'%3E%3C/path%3E%3C/defs%3E%3Cg id='group' fill='%237B84C7' filter='url(%23goo)' opacity='0.23'%3E%3Cuse x='21' y='-39' href='%23P1'%3E%3C/use%3E%3Cuse x='-170' y='270' href='%23P1'%3E%3C/use%3E%3Cuse x='-92' y='720' href='%23P7'%3E%3C/use%3E%3Cuse x='72' y='1036' href='%23P5'%3E%3C/use%3E%3Cuse x='-24' y='1420' href='%23P0'%3E%3C/use%3E%3Cuse x='-167' y='1817' href='%23P1'%3E%3C/use%3E%3Cuse x='-25' y='2229' href='%23P4'%3E%3C/use%3E%3Cuse x='-204' y='2795' href='%23P2'%3E%3C/use%3E%3Cuse x='-51' y='3105' href='%23P0'%3E%3C/use%3E%3Cuse x='-42' y='3299' href='%23P7'%3E%3C/use%3E%3Cuse x='-250' y='3666' href='%23P5'%3E%3C/use%3E%3Cuse x='-212' y='4338' href='%23P0'%3E%3C/use%3E%3Cuse x='114' y='4566' href='%23P3'%3E%3C/use%3E%3Cuse x='58' y='5079' href='%23P6'%3E%3C/use%3E%3Cuse x='-223' y='5495' href='%23P7'%3E%3C/use%3E%3Cuse x='454' y='-17' href='%23P2'%3E%3C/use%3E%3Cuse x='287' y='233' href='%23P5'%3E%3C/use%3E%3Cuse x='429' y='574' href='%23P0'%3E%3C/use%3E%3Cuse x='318' y='1088' href='%23P7'%3E%3C/use%3E%3Cuse x='387' y='1475' href='%23P2'%3E%3C/use%3E%3Cuse x='480' y='1737' href='%23P5'%3E%3C/use%3E%3Cuse x='379' y='2353' href='%23P4'%3E%3C/use%3E%3Cuse x='172' y='2821' href='%23P2'%3E%3C/use%3E%3Cuse x='500' y='2953' href='%23P2'%3E%3C/use%3E%3Cuse x='344' y='3605' href='%23P5'%3E%3C/use%3E%3Cuse x='292' y='3982' href='%23P0'%3E%3C/use%3E%3Cuse x='314' y='4167' href='%23P0'%3E%3C/use%3E%3Cuse x='208' y='4778' href='%23P6'%3E%3C/use%3E%3Cuse x='286' y='5000' href='%23P6'%3E%3C/use%3E%3Cuse x='255' y='5264' href='%23P2'%3E%3C/use%3E%3Cuse x='640' y='42' href='%23P7'%3E%3C/use%3E%3Cuse x='546' y='283' href='%23P4'%3E%3C/use%3E%3Cuse x='612' y='898' href='%23P6'%3E%3C/use%3E%3Cuse x='629' y='1123' href='%23P2'%3E%3C/use%3E%3Cuse x='819' y='1401' href='%23P3'%3E%3C/use%3E%3Cuse x='690' y='2004' href='%23P7'%3E%3C/use%3E%3Cuse x='847' y='2395' href='%23P0'%3E%3C/use%3E%3Cuse x='869' y='2864' href='%23P0'%3E%3C/use%3E%3Cuse x='604' y='3189' href='%23P0'%3E%3C/use%3E%3Cuse x='694' y='3484' href='%23P2'%3E%3C/use%3E%3Cuse x='782' y='3718' href='%23P3'%3E%3C/use%3E%3Cuse x='886' y='4361' href='%23P2'%3E%3C/use%3E%3Cuse x='687' y='4740' href='%23P7'%3E%3C/use%3E%3Cuse x='780' y='4958' href='%23P2'%3E%3C/use%3E%3Cuse x='639' y='5474' href='%23P3'%3E%3C/use%3E%3Cuse x='1235' y='-239' href='%23P4'%3E%3C/use%3E%3Cuse x='1304' y='261' href='%23P3'%3E%3C/use%3E%3Cuse x='1124' y='791' href='%23P1'%3E%3C/use%3E%3Cuse x='1110' y='1163' href='%23P5'%3E%3C/use%3E%3Cuse x='1255' y='1448' href='%23P6'%3E%3C/use%3E%3Cuse x='996' y='1955' href='%23P3'%3E%3C/use%3E%3Cuse x='1209' y='2416' href='%23P1'%3E%3C/use%3E%3Cuse x='1111' y='2689' href='%23P1'%3E%3C/use%3E%3Cuse x='996' y='2935' href='%23P7'%3E%3C/use%3E%3Cuse x='1204' y='3451' href='%23P0'%3E%3C/use%3E%3Cuse x='1042' y='3833' href='%23P2'%3E%3C/use%3E%3Cuse x='942' y='4104' href='%23P3'%3E%3C/use%3E%3Cuse x='1275' y='4633' href='%23P3'%3E%3C/use%3E%3Cuse x='1306' y='5180' href='%23P0'%3E%3C/use%3E%3Cuse x='1222' y='5401' href='%23P0'%3E%3C/use%3E%3Cuse x='1448' y='-96' href='%23P2'%3E%3C/use%3E%3Cuse x='1519' y='287' href='%23P1'%3E%3C/use%3E%3Cuse x='1669' y='869' href='%23P4'%3E%3C/use%3E%3Cuse x='1513' y='1110' href='%23P3'%3E%3C/use%3E%3Cuse x='1437' y='1701' href='%23P0'%3E%3C/use%3E%3Cuse x='1503' y='1894' href='%23P5'%3E%3C/use%3E%3Cuse x='1352' y='2476' href='%23P0'%3E%3C/use%3E%3Cuse x='1384' y='2652' href='%23P2'%3E%3C/use%3E%3Cuse x='1494' y='2967' href='%23P4'%3E%3C/use%3E%3Cuse x='1484' y='3294' href='%23P1'%3E%3C/use%3E%3Cuse x='1418' y='3904' href='%23P3'%3E%3C/use%3E%3Cuse x='1500' y='4354' href='%23P1'%3E%3C/use%3E%3Cuse x='1387' y='4681' href='%23P0'%3E%3C/use%3E%3Cuse x='1338' y='5064' href='%23P1'%3E%3C/use%3E%3Cuse x='1342' y='5248' href='%23P7'%3E%3C/use%3E%3Cuse x='1986' y='-202' href='%23P0'%3E%3C/use%3E%3Cuse x='1874' y='152' href='%23P0'%3E%3C/use%3E%3Cuse x='1796' y='567' href='%23P3'%3E%3C/use%3E%3Cuse x='1903' y='1199' href='%23P4'%3E%3C/use%3E%3Cuse x='2076' y='1409' href='%23P0'%3E%3C/use%3E%3Cuse x='1718' y='1807' href='%23P2'%3E%3C/use%3E%3Cuse x='1801' y='2305' href='%23P7'%3E%3C/use%3E%3Cuse x='1920' y='2653' href='%23P1'%3E%3C/use%3E%3Cuse x='2027' y='3013' href='%23P2'%3E%3C/use%3E%3Cuse x='1782' y='3329' href='%23P5'%3E%3C/use%3E%3Cuse x='2046' y='3903' href='%23P4'%3E%3C/use%3E%3Cuse x='1737' y='4335' href='%23P2'%3E%3C/use%3E%3Cuse x='1818' y='4497' href='%23P3'%3E%3C/use%3E%3Cuse x='1806' y='5198' href='%23P3'%3E%3C/use%3E%3Cuse x='1891' y='5510' href='%23P3'%3E%3C/use%3E%3Cuse x='2359' y='-196' href='%23P6'%3E%3C/use%3E%3Cuse x='2482' y='266' href='%23P0'%3E%3C/use%3E%3Cuse x='2229' y='807' href='%23P6'%3E%3C/use%3E%3Cuse x='2393' y='1215' href='%23P2'%3E%3C/use%3E%3Cuse x='2123' y='1614' href='%23P3'%3E%3C/use%3E%3Cuse x='2424' y='1945' href='%23P5'%3E%3C/use%3E%3Cuse x='2282' y='2130' href='%23P0'%3E%3C/use%3E%3Cuse x='2150' y='2691' href='%23P2'%3E%3C/use%3E%3Cuse x='2224' y='3260' href='%23P3'%3E%3C/use%3E%3Cuse x='2234' y='3369' href='%23P2'%3E%3C/use%3E%3Cuse x='2132' y='3688' href='%23P1'%3E%3C/use%3E%3Cuse x='2489' y='4173' href='%23P2'%3E%3C/use%3E%3Cuse x='2146' y='4684' href='%23P5'%3E%3C/use%3E%3Cuse x='2316' y='4846' href='%23P0'%3E%3C/use%3E%3Cuse x='2137' y='5302' href='%23P0'%3E%3C/use%3E%3Cuse x='2784' y='-195' href='%23P5'%3E%3C/use%3E%3Cuse x='2781' y='356' href='%23P4'%3E%3C/use%3E%3Cuse x='2640' y='644' href='%23P4'%3E%3C/use%3E%3Cuse x='2666' y='1260' href='%23P6'%3E%3C/use%3E%3Cuse x='2564' y='1394' href='%23P3'%3E%3C/use%3E%3Cuse x='2583' y='1740' href='%23P2'%3E%3C/use%3E%3Cuse x='2874' y='2300' href='%23P1'%3E%3C/use%3E%3Cuse x='2659' y='2572' href='%23P1'%3E%3C/use%3E%3Cuse x='2690' y='3173' href='%23P7'%3E%3C/use%3E%3Cuse x='2723' y='3551' href='%23P3'%3E%3C/use%3E%3Cuse x='2589' y='3908' href='%23P5'%3E%3C/use%3E%3Cuse x='2521' y='4282' href='%23P7'%3E%3C/use%3E%3Cuse x='2506' y='4520' href='%23P6'%3E%3C/use%3E%3Cuse x='2581' y='5138' href='%23P0'%3E%3C/use%3E%3Cuse x='2730' y='5393' href='%23P4'%3E%3C/use%3E%3Cuse x='3163' y='-2' href='%23P0'%3E%3C/use%3E%3Cuse x='3136' y='240' href='%23P2'%3E%3C/use%3E%3Cuse x='3102' y='647' href='%23P1'%3E%3C/use%3E%3Cuse x='3040' y='1093' href='%23P6'%3E%3C/use%3E%3Cuse x='3088' y='1357' href='%23P0'%3E%3C/use%3E%3Cuse x='3130' y='1897' href='%23P3'%3E%3C/use%3E%3Cuse x='2962' y='2443' href='%23P2'%3E%3C/use%3E%3Cuse x='3276' y='2728' href='%23P7'%3E%3C/use%3E%3Cuse x='3201' y='2904' href='%23P1'%3E%3C/use%3E%3Cuse x='2964' y='3467' href='%23P7'%3E%3C/use%3E%3Cuse x='3117' y='3681' href='%23P2'%3E%3C/use%3E%3Cuse x='3074' y='4324' href='%23P5'%3E%3C/use%3E%3Cuse x='2908' y='4524' href='%23P1'%3E%3C/use%3E%3Cuse x='3006' y='4971' href='%23P4'%3E%3C/use%3E%3Cuse x='2894' y='5441' href='%23P4'%3E%3C/use%3E%3Cuse x='3483' y='72' href='%23P7'%3E%3C/use%3E%3Cuse x='3434' y='207' href='%23P0'%3E%3C/use%3E%3Cuse x='3515' y='762' href='%23P4'%3E%3C/use%3E%3Cuse x='3407' y='965' href='%23P4'%3E%3C/use%3E%3Cuse x='3671' y='1399' href='%23P0'%3E%3C/use%3E%3Cuse x='3419' y='1965' href='%23P5'%3E%3C/use%3E%3Cuse x='3509' y='2310' href='%23P7'%3E%3C/use%3E%3Cuse x='3299' y='2580' href='%23P0'%3E%3C/use%3E%3Cuse x='3539' y='3136' href='%23P0'%3E%3C/use%3E%3Cuse x='3439' y='3608' href='%23P1'%3E%3C/use%3E%3Cuse x='3440' y='3881' href='%23P5'%3E%3C/use%3E%3Cuse x='3668' y='4154' href='%23P7'%3E%3C/use%3E%3Cuse x='3619' y='4810' href='%23P4'%3E%3C/use%3E%3Cuse x='3471' y='4851' href='%23P5'%3E%3C/use%3E%3Cuse x='3611' y='5456' href='%23P5'%3E%3C/use%3E%3Cuse x='3939' y='-85' href='%23P5'%3E%3C/use%3E%3Cuse x='3941' y='272' href='%23P6'%3E%3C/use%3E%3Cuse x='3760' y='860' href='%23P2'%3E%3C/use%3E%3Cuse x='4014' y='1262' href='%23P1'%3E%3C/use%3E%3Cuse x='3929' y='1507' href='%23P7'%3E%3C/use%3E%3Cuse x='3742' y='2054' href='%23P7'%3E%3C/use%3E%3Cuse x='3722' y='2160' href='%23P0'%3E%3C/use%3E%3Cuse x='3798' y='2525' href='%23P0'%3E%3C/use%3E%3Cuse x='3803' y='3190' href='%23P4'%3E%3C/use%3E%3Cuse x='3753' y='3482' href='%23P6'%3E%3C/use%3E%3Cuse x='3845' y='3708' href='%23P0'%3E%3C/use%3E%3Cuse x='4024' y='4260' href='%23P5'%3E%3C/use%3E%3Cuse x='4015' y='4529' href='%23P7'%3E%3C/use%3E%3Cuse x='3946' y='5131' href='%23P4'%3E%3C/use%3E%3Cuse x='3978' y='5221' href='%23P1'%3E%3C/use%3E%3Cuse x='4383' y='-245' href='%23P3'%3E%3C/use%3E%3Cuse x='4183' y='296' href='%23P7'%3E%3C/use%3E%3Cuse x='4240' y='902' href='%23P0'%3E%3C/use%3E%3Cuse x='4154' y='983' href='%23P7'%3E%3C/use%3E%3Cuse x='4402' y='1554' href='%23P7'%3E%3C/use%3E%3Cuse x='4462' y='1968' href='%23P3'%3E%3C/use%3E%3Cuse x='4080' y='2201' href='%23P4'%3E%3C/use%3E%3Cuse x='4191' y='2845' href='%23P3'%3E%3C/use%3E%3Cuse x='4314' y='2903' href='%23P7'%3E%3C/use%3E%3Cuse x='4266' y='3359' href='%23P3'%3E%3C/use%3E%3Cuse x='4099' y='3856' href='%23P6'%3E%3C/use%3E%3Cuse x='4237' y='4056' href='%23P7'%3E%3C/use%3E%3Cuse x='4273' y='4527' href='%23P6'%3E%3C/use%3E%3Cuse x='4214' y='5155' href='%23P7'%3E%3C/use%3E%3Cuse x='4104' y='5340' href='%23P0'%3E%3C/use%3E%3Cuse x='4677' y='31' href='%23P3'%3E%3C/use%3E%3Cuse x='4493' y='529' href='%23P5'%3E%3C/use%3E%3Cuse x='4819' y='877' href='%23P0'%3E%3C/use%3E%3Cuse x='4747' y='1252' href='%23P1'%3E%3C/use%3E%3Cuse x='4470' y='1352' href='%23P3'%3E%3C/use%3E%3Cuse x='4706' y='2019' href='%23P3'%3E%3C/use%3E%3Cuse x='4607' y='2225' href='%23P1'%3E%3C/use%3E%3Cuse x='4613' y='2546' href='%23P5'%3E%3C/use%3E%3Cuse x='4800' y='2908' href='%23P4'%3E%3C/use%3E%3Cuse x='4615' y='3521' href='%23P1'%3E%3C/use%3E%3Cuse x='4582' y='3840' href='%23P5'%3E%3C/use%3E%3Cuse x='4554' y='4167' href='%23P0'%3E%3C/use%3E%3Cuse x='4715' y='4496' href='%23P0'%3E%3C/use%3E%3Cuse x='4713' y='4997' href='%23P2'%3E%3C/use%3E%3Cuse x='4526' y='5231' href='%23P2'%3E%3C/use%3E%3Cuse x='5157' y='29' href='%23P4'%3E%3C/use%3E%3Cuse x='5168' y='206' href='%23P1'%3E%3C/use%3E%3Cuse x='4901' y='842' href='%23P3'%3E%3C/use%3E%3Cuse x='4937' y='1134' href='%23P6'%3E%3C/use%3E%3Cuse x='5158' y='1683' href='%23P6'%3E%3C/use%3E%3Cuse x='5040' y='1971' href='%23P1'%3E%3C/use%3E%3Cuse x='4951' y='2248' href='%23P4'%3E%3C/use%3E%3Cuse x='5070' y='2553' href='%23P4'%3E%3C/use%3E%3Cuse x='4921' y='3038' href='%23P0'%3E%3C/use%3E%3Cuse x='5028' y='3279' href='%23P4'%3E%3C/use%3E%3Cuse x='5198' y='3904' href='%23P5'%3E%3C/use%3E%3Cuse x='5075' y='4293' href='%23P2'%3E%3C/use%3E%3Cuse x='5161' y='4747' href='%23P1'%3E%3C/use%3E%3Cuse x='5081' y='4993' href='%23P4'%3E%3C/use%3E%3Cuse x='5147' y='5213' href='%23P6'%3E%3C/use%3E%3C/g%3E%3C/svg%3E");*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 80px - 20px - 20px);
  @apply flex place-items-center justify-center;
}

@media only screen and (max-width: 790px) {
  .image-row > img { @apply my-[10px] }
  .first { @apply px-[5%] }
  .first > img { @apply hidden }
  .why-us {
    @apply flex;
    flex-direction: column;
  }
  .why-us { @apply flex justify-center mb-[100px] }
  .why-us > img { @apply w-full p-[5%] }
  .mobile-reverted { flex-direction: column-reverse }

  .action-row-2 { @apply mx-[10%] my-[50px] text-center }
  .action-row-2 > div > span { @apply mb-[10px] text-center }

  .moderation > img { @apply w-full my-[10px] }

  .logo-box { @apply hidden }
}

@media only screen and  (min-width: 791px) {
  .image-row { @apply grid grid-cols-4 gap-[60px] }
  .first { @apply px-[10%] }
  .first > img { @apply ml-[80px] h-[350px] }

  .why-us > div { @apply place-items-center grid }
  .why-us { @apply flex justify-center mb-[100px] }
  .why-us > img { @apply w-[35%] max-w-[500px] mr-[30px] }
  .mobile-reverted > img { @apply w-[35%] max-w-[500px] ml-[30px] }
  .action-row-2 { @apply flex justify-between mx-[15%] my-[50px] /*loaded*/ }
  .moderation { @apply flex justify-between }
  .moderation > img { @apply w-[35%] ml-[5%] mb-[60px] }
}

.first > img { @apply rounded-full }
.image-row > img { @apply w-full p-[5%] }

.animation-bg {
  background: linear-gradient(90deg, #dc2626 0%, #fb923c 50%, #fcd34d 100%);
  background-size: 400%;
  animation: bg 10s linear infinite;
}

@keyframes bg {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.loaded { @apply opacity-0 }
.shown {
  @apply opacity-100;
  transition: opacity 2s;
}

@media only screen and (max-width: 1300px) {
  .pre { display: none }
  .description > div > span { @apply text-[60px] }
  .description > span { @apply text-[20px] }
}

@media only screen and (max-width: 791px) {
  .description { @apply text-center }
  .apply { @apply flex justify-center }
  .hide-whitespace { display: none }
}

@media only screen and (min-width: 1100px) {
  .description { @apply w-3/5 }
  .description > div > span { @apply text-[80px] }
  .description > span { @apply text-[25px] }
}

/*.why-us > div >*/ .title { @apply text-white text-[20px] }
</style>