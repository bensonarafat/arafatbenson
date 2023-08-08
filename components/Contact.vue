<template>
    <section id="contact">
        <h2 class="numbered-heading overliner">What's Next?</h2>
        <h2 class="title">Get In Touch</h2>
        <p class="text-[16px]">I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a class="email-link" href="mailto:benpaul320@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
        <div class="flex justify-around mt-20 px-20">
            <a href="https://twitter.com/bensonarafat" target="_blank">
                <img src="/images/twitter.svg" alt="" srcset="">
            </a>
            <a href="https://github.com/bensonarafat" target="_blank">
                <img src="/images/github.svg" alt="" srcset="">
            </a>
            <a href="https://www.linkedin.com/in/bensonarafat/" target="_blank">
                <img src="/images/linkedin.svg" alt="" srcset="">
            </a>
        </div>
   </section>
</template>
<style scoped>
#contact {
    max-width: 600px;
    margin: 0px auto 100px;
    text-align: center;
}
#contact .overliner {
    display: block;
    margin-bottom: 20px;
    color: #ff5277;
    font-size: 16px;
    font-weight: 400;
}
.overliner {
    color: #ff5277;
    font-size: 16px;
    font-weight: 400;
}
.numbered-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,32px);
    white-space: nowrap;
}
#contact .title {
    font-size: clamp(40px, 5vw, 60px);
}
#contact .email-link {
    color: #ff5277;
    background-color: transparent;
    border: 1px solid #ff5277;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    margin-top: 50px;
}
#contact  .email-link:hover, #contact .email-link:focus, #contact .email-link:active {
    background-color: rgba(100,255,218,0.1);
    outline: none;
}
</style>