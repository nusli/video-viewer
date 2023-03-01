<script>
	import { onMount, onDestroy } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import { base } from '$app/paths'

	var playerh1, playerh2;
	var test = "someTest"
	onMount( async () => {
		if (typeof window !== 'undefined') {
			playerh1 = videojs('horizontal1', {
				autoplay: 'false',
				controls: true,
				responsive: true,
				fluid: true,
				poster: 'https://res.cloudinary.com/dvm02rtnk/image/upload/c_scale,w_1024,q_auto/v1628058523/blender/HERO_Blender_Grease_Pencil_Showcase_g86hfo.jpg'
			});
			playerh2 = videojs('horizontal2', {
				autoplay: 'false',
				controls: true,
				responsive: true,
				fluid: true
			});
		}
		
	});

	onDestroy( () => {
		if (typeof window !== 'undefined') {
			videojs.getPlayer('horizontal1').dispose()
			playerh2.dispose()
		}
		
		// player.dispose()
		//videojs.getPlayer('horizontal1').dispose()
	})
</script>

<style>
	.horizontal-video{

	}
</style>

<div class="section">
	<div class="container">
		<h1 class="is-size-1">Horizontal View</h1>


		<video-js id="horizontal1" class="mb-4">
			<!--<source src="//vjs.zencdn.net/v/oceans.mp4"  type="video/mp4">-->
			<source src={base + "/horizontal.mp4"} type="video/mp4" />
		</video-js>

		<p>
			Video by <a
				href="https://pixabay.com/users/padrinan-1694659/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=64759"
				>Miguel Á. Padriñán</a
			>
			from
			<a
				href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=64759"
				>Pixabay</a
			>
		</p>
	
		<video-js id="horizontal2" class="video-js vjs-theme-forest mt-4">
			<!--<source src="//vjs.zencdn.net/v/oceans.mp4"  type="video/mp4">-->
			<source src={base + "/horizontal.MOV"} type="video/mp4" />
		</video-js>

		
	</div>
</div>
