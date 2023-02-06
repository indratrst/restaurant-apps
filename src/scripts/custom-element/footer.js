class CustomFooter extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadow.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
footer {
	padding-top: 20px;
}
.footer-container {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: flex-start;
	width: 100%;
	padding: 40px 150px;
	gap: 150px;
	background-color: #0f172a;
}

.group-article h2::before,
.link-section h2::before {
	content: " ";
	white-space: pre;
	border-left: 5px solid;
	border-color: var(--primary);
}

.person-info p {
	line-height: 1.6em;
	padding-left: 10px;
	text-align: justify;
	font-size: 14px;
}

.person-info h2 {
	font-weight: bold;
	white-space: nowrap;
	font-size: 1.7em;
	margin-bottom: 10px;
	color: var(--primary);
	padding-left: 10px;
}
.person-info h3:hover {
	color: var(--primary);
	transition: ease-in-out 300ms;
}
.group-article,
.link-section,
.person-info {
	display: grid;
	flex-wrap: wrap;
	color: var(--secondary);
}

.group-article h2,
.link-section h2,
.person-info h3 {
	font-weight: bold;
	font-size: 1.2em;
	margin-bottom: 10px;
	color: var(--light);
	padding-left: 10px;
	white-space: nowrap;
}
.group-article ul,
.group-article li,
.group-article span {
	text-decoration: none;
	list-style-type: none;
	color: var(--secondary);
	padding: 13px 7px;

	font-size: 15px;
}

.link-section ul,
.link-section li,
.link-section a {
	text-decoration: none;
	list-style-type: none;
	color: var(--secondary);
	padding: 13px 7px;
	font-size: 15px;
	white-space: nowrap;
}

.link-section ul li a:hover {
	color: var(--light);
	transition: ease-in-out 300ms;
}

.wrapper {
	width: 100%;
	background-color: var(--third);
}
.logo-footer {
	width: 80%;
	display: flex;
	border-top: 1px solid;
	border-color: var(--secondary);
	flex-direction: column;
	align-items: center;
	padding-bottom: 20px;
	margin: auto;
	gap: 10px;
}
.logo-footer img {
	width: 300px;
}
.logo-footer p {
	width: 100%;
	color: var(--light);
	text-align: center;
}
.logo-footer span {
	color: var(--primary);
	text-align: center;
}
@media screen and (max-width: 499px) {
	.footer-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		gap: 40px;
		padding: 80px 30px;
	}

	.group-article,
	.link-section,
	.person-info {
		padding: 0px;
	}
	.person-info h2::before {
		content: "";
		white-space: pre;
		border-left: 0px solid;
		border-color: transparent;
	}

}

@media screen and (min-width: 455px) {
	.footer-container {
		display: flex;
		flex-direction: column;
	}
}

@media screen and (min-width: 500px) {
	.footer-container {
		padding: 80px 63px;
		gap: 53px;
	}
	
}

@media screen and (min-width: 650px) {

	.footer-container {
		padding: 80px 63px;
		gap: 53px;
		flex-direction: row;
	}
}

@media screen and (min-width: 700px) {
	
	.footer-container {
		padding: 80px 63px;
		gap: 53px;
		flex-direction: row;
	}

}

@media screen and (min-width: 800px) {
	
	.footer-container {
		padding: 80px 100px;
		gap: 99px;
		flex-direction: row;
	}
}

@media screen and (min-width: 900px) {
	
	.footer-container {
		flex-direction: row;
		width: 100%;
		height: 100%;
		padding: 80px 150px;
		gap: 150px;
	}
}

    </style>
<footer>
			<section class="footer">
				<div class="wrapper">
					<div class="footer-container">
						<div class="person-info">
							<h2>Indra Tristia</h2>
							<h3>Hubungi Kami</h3>
							<p>tristia71@gmail.com</p>
							<p>Jalan Encep Kartawiria</p>
							<p>Cimahi</p>
						</div>
						<div class="group-article">
							<h2>Related Content</h2>
							<ul>
								<li>
									<span>Food</span>
								</li>
								<li>
									<span>Restaurant</span>
								</li>
								<li>
									<span>City</span>
								</li>
							</ul>
						</div>
						<div class="link-section">
							<h2>Tautan</h2>
							<ul>
								<li>
									<a href="#/home-page">Home</a>
								</li>
								<li>
									<a href="#/favorite">Favorite</a>
								</li>
								<li>
									<a href="https://instagram.com/indratrst">Contact us</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="logo-footer">
				<picture>
					<source srcset="images/icon/footer.webp" type="image/webp">
					<source srcset="images/icon/footer.png" type="image/png">
					<img src="images/icon/footer.png" alt="logo-footer">
				</picture>
						<p>Created By <span>Indra Tristia</span> 2022</p>
					</div>
				</div>
			</section>
		</footer>`;
	}
}

customElements.define('custom-footer', CustomFooter);
