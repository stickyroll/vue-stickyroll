## Installation

```bash
yarn add @stickyroll/vue
```

## Usage

```vue
<template>
	<vue-stickyroll :pages="4" :factor="1" class="dark">
		<template slot-scope="context">
			<div>{{context.page}} of {{context.pages}}</div>
			<div>{{context.progress}}</div>
		</template>
	</vue-stickyroll>
</template>

<script>
import Stickyroll from "@stickyroll/vue";
export default {
	name: "App",
	components: {
		vueStickyroll: Stickyroll
	}
};
</script>

<style scoped>
.dark {
	background: #333;
	color: #fff;
}
</style>
```
