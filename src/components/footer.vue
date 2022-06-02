<template>
    <footer class="footer">
        <div class="mobile">
        <ul class="flex justify-between">
            <li>
            <a href="https://github.com/realArafatBen" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                <img src="../assets/icons/github.svg" alt="" width="20">
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/realarafatben/" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
                <img src="../assets/icons/instagram.svg" alt="" width="20">
            </a>
            </li>
            <li>
            <a href="https://twitter.com/realArafatBen" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
                <img src="../assets/icons/twitter.svg" alt="" width="20">
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/arafat-benson-6a6058ab/" aria-label="Linkedin" rel="noopener noreferrer" target="_blank">
                <img src="../assets/icons/linkedin.svg" alt="" width="20">
            </a>
            </li>
            <li>
            <a href="https://web.facebook.com/realArafatBen/" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <img src="../assets/icons/facebook.svg" alt="" width="20">
            </a>
            </li>
        </ul>
        </div>
        <div class=" copyright">
        <a href="https://github.com/bchiang7/v4" rel="noopener noreferrer" target="_blank">
            <div>Designed &amp; Built by Benson Arafat</div>
            <div class="github-stats">
            <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                <title>Star</title>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>4,847</span>
            </span>
            <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch">
                <title>Git Fork</title>
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
                <span>2,213</span>
            </span>
            </div>
        </a>
        </div>
    </footer>
</template>

<style>
.footer {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
}
.mobile ul {
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
}
.mobile ul li{
    padding: 10px;
}

.copyright {
    color: #a8b2d1;
    font-family: 'SFMono';
    font-size: 12px;
    line-height: 1;
}

.copyright a {
    padding: 10px;
}

.copyright .github-stats {
    margin-top: 10px;
}

.copyright .github-stats > span {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 7px;
}
</style>
<script>
export default{
    name: "AppFooter",
}
</script>