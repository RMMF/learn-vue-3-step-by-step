export default {

    template: `
        <button class="bg-gray-200 hover:bg-grey-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
            <slot/>
        </button>
        `,

    data() {
        return {
            processing: true
        };
    }

}
