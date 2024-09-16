import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {

    state() {
        return {
            name: '',
            spots: 0,
            members: []
        }
    },

    actions: {
        fill() {
            import('@/team.json').then(r => {
                console.log(r.default)
            });
        }
    },
});
