<template>
    <div class="container mx-auto px-4 w-10/12">
        <section>
            <header class="mt-20">
                <h1 class="big-heading">Archive</h1>
                <p class="subtitle">A big list of things I’ve worked on</p>
            </header>
            <div class="archive__content">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Title</th>
                            <th class="hide-on-mobile">Made at</th>
                            <th class="hide-on-mobile">Built with</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="overline year">2022</td>
                            <td class="title">Harvard Business School Design System</td>
                            <td class="company hide-on-mobile"><span>Upstatement</span></td>
                            <td class="tech hide-on-mobile"><span>Storybook<span class="separator">·</span></span><span>React<span class="separator">·</span></span><span>TypeScript</span></td>
                            <td class="links">
                                <div>
                                    <a href="https://www.threadablebooks.com/" aria-label="External Link" rel="noopener noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>
<script>
</script>
<style>
.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
}
.subtitle {
    color: #ff5277;
    margin: 0px 0px 20px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
}
.archive__content {
    margin: 100px -20px;
}
.archive__content table {
    width: 100%;
    border-collapse: collapse;
}
.archive__content table tr {
    cursor: default;
}
.archive__content table th:first-child, .archive__content table td:first-child {
    padding-left: 20px;
}
.archive__content table th, .archive__content table td {
    padding: 10px;
    text-align: left;
}
.archive__content table tr td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.archive__content table td.year {
    padding-right: 20px;
}
.overline {
    text-decoration-line: none;
    color: #ff5277;
    font-size: 16px;
    font-weight: 400;
}
.archive__content table td.title {
    padding-top: 15px;
    padding-right: 20px;
    color: #ccd6f6;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.25;
}
.archive__content table td.company {
    font-size: 18px;
    white-space: nowrap;
}
.archive__content table td.tech {
    font-size: 12px;
    line-height: 1.5;
}
.archive__content table td.tech span {
    display: inline-block;
}
.archive__content table td.tech {
    font-size: 12px;
    line-height: 1.5;
}
.archive__content table td.tech .separator {
    margin: 0px 5px;
}
.archive__content table td.tech span {
    display: inline-block;
}
.archive__content table tr td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.archive__content table td.links {
    min-width: 100px;
}
.archive__content table td.links div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.archive__content table td.links div a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-shrink: 0;
}
.archive__content table th svg, .archive__content table td svg {
    width: 20px;
    height: 20px;
}
</style>