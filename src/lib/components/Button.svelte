<script lang="ts">
	export let onClick = () => {};
	export let classes: string = '';
	export let disabled: boolean = false;
</script>

<button class="button {classes}" {disabled} on:click|preventDefault={onClick}>
	<slot />
</button>
