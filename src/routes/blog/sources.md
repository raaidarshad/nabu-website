---
title: Current Sources
author: Raaid Arshad
date: '2022-02-11'
layout: blog
---

<script>
	import Sources from '../../components/sources.svelte';
</script>

<Sources />
<div id="form-container">
	<iframe id="source-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfI-0zS2ElNGvkkJbCdfHDRon7L35I1LP9rqKYhSrfi3a4pAA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>

<style>
	#form-container {
		margin-top: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#source-form {
		width: 640px;
		height: 700px;
	}

	@media screen and (max-width: 790px) {
		#source-form {
			width: 400px;
			height: 1000px;
		}
	}
</style>