---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GBET9CMKJT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GBET9CMKJT');
</script>

<style>
  body {
    font-size: 16px; /* Set base font size */
    font-family: Arial, sans-serif; /* Set a consistent font family */
    line-height: 1.5; /* Improve readability */
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1.2em; /* Adjust header sizes */
    margin: 0.5em 0;
  }

  p, li, td {
    font-size: 1em; /* Make paragraph, list, and table text consistent */
  }

  th {
    font-size: 1em;
    font-weight: bold; /* Optional: Emphasize table headers */
  }

  table {
    font-size: 1em;
  }

  hr {
    border: none; /* Removes default styling */
    border-top: 2px solid #000; /* Adjust thickness and color */
    margin: 14px 0; /* Adds spacing around the line */
  }

  html {
    scroll-behavior: smooth;
  }

  .section-block {
    scroll-margin-top: 96px;
    margin-top: 32px;
  }

  /* Profile photo styling - delegated to custom.scss for consistency */
  /* Additional page-specific styling can be added here if needed */

  .latest-highlight {
    position: relative;
    margin: 24px 0;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid #c8d8f0;
    background: linear-gradient(135deg, #f4f8ff 0%, #e8f0ff 100%);
    box-shadow: 0 10px 28px rgba(9, 34, 68, 0.12);
    font-family: "Helvetica Neue", Arial, sans-serif;
  }

  .latest-highlight::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: radial-gradient(circle at 20% 20%, rgba(31, 90, 168, 0.12), transparent 40%), radial-gradient(circle at 80% 10%, rgba(15, 47, 99, 0.08), transparent 35%);
    pointer-events: none;
  }

  .latest-highlight__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  .latest-highlight__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: #ffffff00;
    border: 0px solid #ffffff00;
    box-shadow: 0 8px 20px rgba(12, 35, 75, 0.3);
    overflow: hidden;
  }

  .latest-highlight__icon img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    display: block;
  }

  .latest-highlight__eyebrow {
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 0.08em;
    color: #1f5aa8;
    font-weight: 700;
  }

  .latest-highlight__title {
    margin: 2px 0 0;
    color: #0f2f63;
    font-size: 1.3em;
    font-weight: 700;
  }

  .latest-highlight__copy {
    margin: 0;
    font-size: 1.05em;
    color: #10253b;
    text-align: justify;
  }

  .latest-highlight__date {
    color: #1f5aa8;
    font-weight: 800;
  }

</style>


<section id="home" class="section-block">
  <div class="latest-highlight">
    <div class="latest-highlight__header">
      <div>
        <div class="latest-highlight__eyebrow">Latest Highlight</div>
        <h3 class="latest-highlight__title">Joined Iteris, Inc.</h3>
      </div>
    </div>
    <p class="latest-highlight__copy">
      I am excited to announce that I have joined <b>Iteris, Inc.</b> as a <b>Sr. Signal Optimization Engineer</b>, supporting traffic signal operations and optimization.
    </p>
  </div>

  <div class="latest-highlight">
    <div class="latest-highlight__header">
      <div>
        <div class="latest-highlight__eyebrow">Latest Highlight</div>
        <h3 class="latest-highlight__title">Passed the P.E. Exam</h3>
      </div>
    </div>
    <p class="latest-highlight__copy">
      I have passed the <b>Principles and Practice of Engineering (P.E.) exam</b>, marking an important professional milestone in my civil engineering and transportation career.
    </p>
  </div>
</section>

<section id="about" class="section-block" markdown="1">
###### About Me

<p align="justify">
I hold a <b>Ph.D.</b> in Civil and Environmental Engineering from <b>Virginia Tech</b> (2025), advised by 
<a href="https://www.vtti.vt.edu/staffdir/bio.php?&pn=111011" target="_blank">Prof. Hesham Rakha</a> (check my <a href="https://vtechworks.lib.vt.edu/items/c6754865-f6b5-46e6-add6-c2dc6135343b" target="_blank">doctoral thesis</a>). I have also passed the <b>Principles and Practice of Engineering (P.E.) exam</b>. Prior to that, I earned my <b>M.Sc. and B.Sc.</b> from <b>Cairo University</b> in my home country of Egypt.

I am currently working as a <b>Sr. Signal Optimization Engineer</b> at <b>Iteris, Inc.</b> My research interests span a wide range of topics including traffic operations and transportation planning.
</p>
</section>

<section id="research" class="section-block" markdown="1">
### Research Interests

- **Traffic Flow Theory**  
- **Traffic Control and Optimization.**  
- **Traffic Modeling and Simulation.**
- **Intelligent Transportation Systems (ITS)**
- **Transportation Planning**  
- **Traffic Signal Optimization**  
- **Stochastic Optimization**  
- **Connected and Automated Vehicles**  
- **Vehicle Trajectory Optimization**

---
<!-- Downloadable CV Button -->
{% include cv-download-button.html %}
</section>

