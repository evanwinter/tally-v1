<script>
	import { page } from '$app/stores';
	import Match from './Match.svelte';
</script>

<Match session={$page.data.session} />
