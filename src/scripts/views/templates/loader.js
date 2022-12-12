const loader = {
  loaderSucceed() {
    return `
		<div class="loader">
			<h2 class="mb-5">Loading</h2>
			<div class="dot-spinner">
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
				<div class="dot-spinner__dot"></div>
			</div>
		</div>`;
  },

  loaderFail() {
    return `
		<div class="loader">
		<h2 class="mb-5">Bad Connection or refresh this page</h2>
		<div class="dot-spinner">
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
			<div class="dot-spinner__dot"></div>
		</div>
	</div>`;
  },
};

export default loader;
