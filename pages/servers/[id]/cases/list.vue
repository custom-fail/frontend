<template>
  <div>
<!--    <div v-for="punishment in cases" class="min-w-[150px] bg-selected p-[20px] m-[20px] rounded-xl text-text border-r-[10px] border-black">-->
<!--      <div>-->
<!--&lt;!&ndash;        Member ID: <code>{{ punishment.member_id }}</code><br>&ndash;&gt;-->
<!--&lt;!&ndash;        Moderator ID: <code>{{ punishment.moderator_id }}</code><br>&ndash;&gt;-->
<!--&lt;!&ndash;        <sapan v-if="!!punishment.duration">Duration: <code>{{ punishment.duration }}</code></sapan>&ndash;&gt;-->
<!--&lt;!&ndash;        Reason: <code>{{ punishment.reason }}</code>&ndash;&gt;-->
<!--      </div>-->
<!--&lt;!&ndash;      <span>Case #{{ punishment.index}} {{ (new Date(punishment.created_at)).getHours() }}</span>&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script setup>
// const cases = [{
//   "action": 2,
//   "created_at": "2021-05-27T09:47:02.411+00:00",
//   "guild_id": "981950094804930581",
//   "index": 25,
//   "member_id": "826458081508589578",
//   "moderator_id": "632233340551954445",
//   "reason": "ogarnij się",
//   "removed": false
// }, {
//   "action": 2,
//   "created_at": "2021-05-27T09:47:02.411+00:00",
//   "guild_id": "981950094804930581",
//   "index": 25,
//   "member_id": "826458081508589578",
//   "moderator_id": "632233340551954445",
//   "reason": "ogarnij się",
//   "removed": false
// }, {
//   "action": 4,
//   "created_at": "2021-05-27T09:47:02.411+00:00",
//   "guild_id": "981950094804930581",
//   "index": 30,
//   "member_id": "693855149856260117",
//   "moderator_id": "390165046451372034",
//   "reason": "spam na tickecie",
//   "removed": false
// }]
definePageMeta({
  layout: "return"
})
</script>