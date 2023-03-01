<script>
	import { onMount, onDestroy } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import { base } from '$app/paths'

	let player;

	onMount(async () => {
		if (typeof window !== 'undefined') {
			player = videojs('vertical1', {
				autoplay: 'muted',
				controls: true,
				responsive: true,
				fluid: false,
				height: "600",
				width: 300,
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

<style>
	.video-js {
    	position: relative;
		margin: auto;
}
	.video-container {
	}
</style>

<div class="section">
	<div class="container video-container">
		<h1 class="is-size-1">Vertical View</h1>

		<video-js id="vertical1" class="vertical-video video-js" >
			<!--<source src="//vjs.zencdn.net/v/oceans.mp4"  type="video/mp4">-->
			<source src={base + "/vertical.MOV"} type="video/mp4" />
		</video-js>

	</div>
</div>
