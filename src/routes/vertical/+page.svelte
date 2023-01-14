<script>
	import { onMount, onDestroy } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';

	let player;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			player = videojs('vertical1', {
				autoplay: 'muted',
				controls: true,
				responsive: true,
				fluid: true
			});
		}
	});
	onDestroy( () => {
		//player.dispose()
		if (typeof window !== 'undefined') {
			videojs.getPlayer('vertical1').dispose()
		}
	})
</script>

<div class="section">
	<div class="container">
		<h1 class="is-size-1">Vertical View</h1>

		<video-js id="vertical1">
			<!--<source src="//vjs.zencdn.net/v/oceans.mp4"  type="video/mp4">-->
			<source src="vertical.MOV" type="video/mp4" />
		</video-js>

	</div>
</div>
