<script>
    let activePage = "horizontal"
</script>

<nav class="navbar is-dark" aria-label="main navigation">
	<div class="navbar-brand">

		<button
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
        </button>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" class:is-active="{activePage === 'horizontal'}" 
                on:click="{() => activePage = 'horizontal'}"
                href="/"> Horizontal View </a>

			<a class="navbar-item" class:is-active="{activePage === 'vertical'}"
                on:click="{() => activePage = 'vertical'}"
                href="/vertical"> Vertical View </a>

		</div>

	</div>
</nav>

<slot></slot>