## Installation

```bash
yarn add @stickyroll/vue
```

## Usage

```vue
<template>
	<Stickyroll :pages="4" anchors="my/sticky/vue">
		<template slot-scope="context">
			<div>{{context.page}} of {{context.pages}}</div>
			<div>{{context.progress}}</div>
		</template>
	</Stickyroll>
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

<style scoped>
body {
	margin: 0;
}
</style>
```
