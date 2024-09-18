<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

let team = useTeamStore()

team.fill()

let showModal = ref(false)
</script>

<template>
  <TeamHeader @open="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>Terms of Service</template>

      <template #body-one>
        With less than a month to go before the European Union enacts new consumer privacy laws for
        its citizens, companies around the world are updating their terms of service agreements to
        comply.
      </template>

      <template #body-two>
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
        25 and is meant to ensure a common set of data rights in the European Union. It requires
        organizations to notify users as soon as possible of high-risk data breaches that could
        personally affect them.
      </template>
    </Modal>
  </Teleport>
</template>
