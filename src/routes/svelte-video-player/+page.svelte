<script>
    import VideoPlayer from 'svelte-video-player';
    // import VideoPlayer from '../../src/VideoPlayer.svelte';
    const poster =
      'https://res.cloudinary.com/dvm02rtnk/image/upload/c_scale,w_1024,q_auto/v1628058523/blender/HERO_Blender_Grease_Pencil_Showcase_g86hfo.jpg';
    const source= [
      'https://res.cloudinary.com/dvm02rtnk/video/upload/v1628057414/blender/HERO_Blender_Grease_Pencil_Showcase_1080p_ctsjpy.mp4',
      'https://res.cloudinary.com/dvm02rtnk/video/upload/v1628057414/blender/HERO_Blender_Grease_Pencil_Showcase_1080p_ctsjpy.webm',
      'https://res.cloudinary.com/dvm02rtnk/video/upload/v1628057414/blender/HERO_Blender_Grease_Pencil_Showcase_1080p_ctsjpy.ogv',
    ];
    let controlsHeight = 60;
    let trackHeight = 6;
    let thumbSize = 15;
    let centerIconSize = 60;
    let color = '#FF3E00';
    let bufferedColor = '#FF9600';
    let playerBgColor = '#EEEEEE';
    let barsBgColor = '#FFFFFF';
    let focusColor = '#FFFFFF';
    let iconColor = '#FFFFFF';
    let chunkBars = false;
    let loop = false;
    let borderRadius = 8;
    let skipSeconds = 10;
    let controlsOnPause = true;
    let timeDisplay = true;
  </script>

<div class="section">
    <h1 class="is-size-1">Svelte Video Player</h1>
    <p>This Player is built with the Svelte Video Player.</p>
    <p><span>!NOTE:</span>This Player does not support fullscreen on iPhones.</p>

    <VideoPlayer
    width="2048"
    height="858"
    {poster}
    {source}
    controlsHeight="{controlsHeight}px"
    thumbSize="{thumbSize}px"
    trackHeight="{trackHeight}px"
    centerIconSize="{centerIconSize}px"
    borderRadius="{borderRadius}px"
    {color}
    {playerBgColor}
    {barsBgColor}
    {iconColor}
    {focusColor}
    {bufferedColor}
    {chunkBars}
    {loop}
    {skipSeconds}
    {controlsOnPause}
    {timeDisplay} />
  <div class="config-video-player-grid">
    <div class="config config-grid">
      <label
        ><span>Controls Height</span>
        <input type="range" min="40" max="150" bind:value={controlsHeight} />
      </label>
      <label
        ><span>Thumb Size</span>
        <input type="range" min="4" max="50" bind:value={thumbSize} />
      </label>
      <label
        ><span>Track Height</span>
        <input type="range" min="4" max="20" bind:value={trackHeight} />
      </label>
      <label
        ><span>Border Radius</span>
        <input type="range" min="0" max="25" bind:value={borderRadius} />
      </label>
      <label
        ><span>Skip Seconds</span>
        <input type="range" min="1" max="20" bind:value={skipSeconds} />
      </label>
      <label
        ><span>Center Icon Size</span>
        <input type="range" min="40" max="200" bind:value={centerIconSize} />
      </label>
      <label><span>Chunk Bars</span><input type="checkbox" bind:checked={chunkBars} /></label>
      <label><span>Loop</span><input type="checkbox" bind:checked={loop} /></label>
      <label><span>Controls On Pause</span><input type="checkbox" bind:checked={controlsOnPause} /></label>
      <label><span>Time Display</span><input type="checkbox" bind:checked={timeDisplay} /></label>
      <label><span>Color</span><input type="color" bind:value={color} /></label>
      <label><span>Player Bg Color</span><input type="color" bind:value={playerBgColor} /></label>
      <label><span>Bars Bg Color</span><input type="color" bind:value={barsBgColor} /></label>
      <label><span>Icon Color</span><input type="color" bind:value={iconColor} /></label>
      <label><span>Focus Color</span><input type="color" bind:value={focusColor} /></label>
      <label><span>Buffered Color</span><input type="color" bind:value={bufferedColor} /></label>
    </div>
  </div>
</div>