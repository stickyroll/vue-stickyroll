<template>
	<div id="app">
		<header class="header"><h1 class="title">Vue Stickyroll</h1></header>
		<article class="card">
			<h3 class="headline">What is Stickyroll?</h3>
			<p class="copy">
				Stickyroll provides a fullscreen view with a progression
				listener. <br />
				While the view stays in place, scrolling is translated to pages,
				each with a progressing timeline while the user scrolls.
				Building amazing parallax landing pages has never been this
				easy.
			</p>
		</article>
		<Stickyroll :pages="6" anchors="!/vue">
			<template slot-scope="context">
				<div class="row">
					<div class="column">
						<svg viewBox="0 0 400 400">
							<path
								:fill="
									`hsla(152, 46%, 51%,${Math.min(
										1,
										Math.max(
											0,
											context.progress +
												context.pageIndex -
												1
										)
									)})`
								"
								:stroke-dashoffset="
									Math.min(
										1,
										context.progress + context.pageIndex
									) *
										845.7294311523438 +
										845.7294311523438
								"
								d="M237.417 86.655l-30.226 52.352-30.225-52.352H76.311l130.88 226.69 130.88-226.69z"
								stroke-width="1"
								stroke="#4dba87"
								stroke-dasharray="845.7294311523438"
							></path>
							<path
								:fill="
									`hsla(212, 21%, 33%,${Math.min(
										1,
										Math.max(
											0,
											context.progress +
												context.pageIndex -
												3
										)
									)})`
								"
								:stroke-dashoffset="
									Math.min(
										1,
										Math.max(
											0,
											context.progress +
												context.pageIndex -
												2
										)
									) *
										531.6195068359375 +
										531.6195068359375
								"
								d="M237.417 86.655l-30.226 52.352-30.225-52.352h-48.303l78.528 136.014L285.72 86.655z"
								stroke-width="1"
								stroke="#435466"
								stroke-dasharray="531.6195068359375"
							></path>
						</svg>
					</div>
					<span
						class="plus"
						:style="{
							opacity: Math.min(
								1,
								Math.max(
									0,
									context.progress + context.pageIndex - 4
								)
							)
						}"
						>+</span
					>
					<div class="column">
						<svg viewBox="0 0 100 100">
							<path
								class="stickyroll-logo-path"
								fill="none"
								stroke="currentColor"
								stroke-width="10"
								d="M55 15H15v20h70v20H55l30 30"
								:stroke-dashoffset="
									444.8528137207 -
										Math.min(
											1,
											Math.max(
												0,
												context.progress +
													context.pageIndex -
													5
											)
										) *
											444.8528137207
								"
							></path>
						</svg>
					</div>
				</div>
			</template>
		</Stickyroll>
		<footer class="footer">
			<div class="content">© 2019 | Coded with 💖 by Gregor Adams.</div>
		</footer>
	</div>
</template>

<script>
import Stickyroll from "@stickyroll/vue";
export default {
	name: "App",
	components: {
		Stickyroll
	}
};
</script>

<style src="@stickyroll/vue/index.css"></style>
<style>
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	background: #ddd;
}
* {
	box-sizing: border-box;
}
</style>
<style scoped>
.header {
	height: 3rem;
	display: flex;
	align-items: center;
	align-content: center;
}
.footer {
	height: 3rem;
	display: flex;
	align-items: center;
	align-content: center;
}
.title {
	max-width: 80rem;
	width: 100%;
	margin: auto;
	font-size: 2rem;
	font-weight: lighter;
}
.card {
	max-width: 60rem;
	margin: 2rem auto;
	padding: 1rem;
	background: white;
	border-radius: 2px;
	color: black;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.headline {
	font-size: 1.5rem;
	margin: 0 auto 0.5rem;
	font-weight: lighter;
}
.content {
	max-width: 80rem;
	width: 100%;
	margin: auto;
}
svg {
	margin: auto;
	display: block;
	flex: 1;
}
.stickyroll-logo-path {
	stroke-dasharray: 444.8528137207;
	color: #673ab7;
}
.plus {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 6rem;
}
.row {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-wrap: wrap;
}

.column {
	flex: 1 1 30rem;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
}
</style>
