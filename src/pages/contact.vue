<template>
    <section id="contact" class="contact">
        <h2 class="numbered-heading overline">What's Next?</h2>
        <h2 class="title">Get In Touch</h2>
        <p> 
            I'm always looking for new opportunities to learn and grow. If you're interested in working together, please reach out to me!
            my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <a class="email-link" href="mailto:benpaul320@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
    </section>
</template>


<style>
.contact {
    max-width: 600px;
    text-align: center;
    font-family: 'Calibre';
}
.contact .overline {
    display: block;
    margin-bottom: 20px;
    color: #64ffda;
    font-family: 'SFMono';
    font-size: 16px;
    font-weight: 400;
    text-decoration-line: none;
}
.contact .title {
    font-size: clamp(40px, 5vw, 60px);
    font-family: 'Calibre';
    font-weight:600;
}
.contact p{
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 40px !important;
}
.contact .email-link {
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    font-family: SFMono;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
</style>
<script>
export default{
    name: "ContactPage",
}
</script>