<template>
	<div
		class="Stickyroll vue-Stickyroll"
		:style="{height: pageCount * factor * 100 + 100 + 'vh'}"
	>
		<div
			v-if="typeof anchors === 'string'"
			class="Stickyroll-anchors vue-Stickyroll"
		>
			<span
				class="Stickyroll-anchor vue-Stickyroll"
				v-for="page in new Array(pageCount + 1)
					.fill(Boolean)
					.map((x, i) => i + 1)"
				:id="anchors.length ? anchors + '/' + page : page"
				:style="{height: factor * 100 + 'vh'}"
			></span>
			<span
				class="Stickyroll-skip vue-Stickyroll"
				:id="anchors.length ? anchors + '/' + 'skip' : 'skip'"
			></span>
		</div>
		<div class="Stickyroll-wrapper vue-Stickyroll">
			<slot
				:page="page"
				:pageIndex="pageIndex"
				:pages="pageCount"
				:progress="progress"
				:anchors="anchors"
			>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Stickyroll",
	methods: {
		handleScroll(e) {
			let pageIndex = 0;
			let progress = 0;

			const {top, bottom} = this.$el.getBoundingClientRect();
			const {innerHeight = 0} = window;
			const touchedTop = top <= 0;
			const touchedEnd = bottom <= innerHeight;
			if (touchedTop && !touchedEnd) {
				pageIndex = Math.max(
					0,
					Math.min(
						this.lastPage,
						Math.floor((top * (-1 / this.factor)) / innerHeight)
					)
				);
				progress = Math.max(
					0,
					Math.min(
						1,
						((top * -1) % (innerHeight * this.factor)) /
							innerHeight /
							this.factor
					)
				);
			} else if (touchedEnd) {
				pageIndex = this.lastPage;
				progress = 1;
			}
			this.pageIndex = pageIndex;
			this.page = pageIndex + 1;
			this.progress = progress;
		}
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	computed: {
		pageCount() {
			return isNaN(this.pages) ? this.pages.length : this.pages;
		},
		lastPage() {
			return this.pageCount - 1;
		}
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	props: {
		pages: {
			type: Number | Array,
			required: true
		},
		factor: {
			type: Number,
			default: 1
		},
		anchors: String
	},
	data() {
		return {
			pageIndex: 0,
			page: 1,
			progress: 0
		};
	}
};
</script>

<style scoped>
.Stickyroll {
	position: relative;
}
.Stickyroll-wrapper {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	height: 100vh;
}
.Stickyroll-anchors {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.Stickyroll-anchor {
	display: block;
	height: 100vh;
}
.Stickyroll-skip {
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;
}
</style>
