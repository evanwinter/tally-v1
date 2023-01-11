<script lang="ts">
	export let onClick = () => {};
	export let classes: string = '';
	export let disabled: boolean = false;
	export let selected: boolean = false;
</script>

<button class="button {classes}" class:selected {disabled} on:click|preventDefault={onClick}>
	<slot />
</button>
