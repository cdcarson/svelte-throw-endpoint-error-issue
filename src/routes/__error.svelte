<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({ error }) => {
    console.log('in __error.svelte load:', error.message);
   
		return {
			props: {
				errorMessage: error.message
			}
		};
	};
</script>

<script lang="ts">
	export let errorMessage: string;
</script>

<p>{errorMessage}</p>
