<script lang="ts">
	import '@picocss/pico';
	import './theme.scss';
</script>

<div class="container-fluid">
	<nav>
		<ul>
			<li><strong>KitAuthPico</strong></li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/auth">Requires Auth</a></li>
		</ul>
	</nav>
</div>

<div class="container">
	<slot />
</div>
