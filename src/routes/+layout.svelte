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
			<li><a href="/">Main</a></li>
			<li><a href="/foo">Link</a></li>
		</ul>
	</nav>
</div>

<div class="container">
	<slot />
</div>
