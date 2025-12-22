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

  /* Profile photo styling - delegated to custom.scss for consistency */
  /* Additional page-specific styling can be added here if needed */

  .latest-highlight {
    position: relative;
    margin: 24px 0;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid #b7e7d2;
    background: linear-gradient(135deg, #fff6f3ff 0%, #eaf6ffff 100%);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  }

  .latest-highlight::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.15), transparent 40%), radial-gradient(circle at 80% 10%, rgba(46, 125, 50, 0.12), transparent 35%);
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
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #1e8b65;
    color: #fff;
    font-size: 1.4em;
    box-shadow: 0 8px 20px rgba(30, 139, 101, 0.35);
  }

  .latest-highlight__eyebrow {
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 0.08em;
    color: #1e8b65;
    font-weight: 700;
  }

  .latest-highlight__title {
    margin: 2px 0 0;
    color: #0f5132;
    font-size: 1.3em;
    font-weight: 700;
  }

  .latest-highlight__copy {
    margin: 0;
    font-size: 1.05em;
    color: #1b2a32;
    text-align: justify;
  }

  .latest-highlight__date {
    color: #1e8b65;
    font-weight: 800;
  }

</style>



<div class="latest-highlight">
  <div class="latest-highlight__header">
    <span class="latest-highlight__icon">✨</span>
    <div>
      <div class="latest-highlight__eyebrow">Latest Highlight</div>
      <h3 class="latest-highlight__title">New role at the University of Arizona</h3>
    </div>
  </div>
  <p class="latest-highlight__copy">
    In <span class="latest-highlight__date">November 2025</span>, I started a new position at the Arizona Transportation Institute (AZTI) as well as the Center of Applied Transportation Sciences (CATS) 
    at the <b>University of Arizona</b> as a <b>Research Scientist III</b>.
  </p>
</div>


###### About Me

<p align="justify">
I hold a <b>Ph.D.</b> in Civil and Environmental Engineering from <b>Virginia Tech</b> (2025), advised by 
<a href="https://www.vtti.vt.edu/staffdir/bio.php?&pn=111011" target="_blank">Prof. Hesham Rakha</a> (check my <a href="https://vtechworks.lib.vt.edu/items/c6754865-f6b5-46e6-add6-c2dc6135343b" target="_blank">doctoral thesis</a>). Prior to that, I earned my <b>M.Sc. and B.Sc.</b> from <b>Cairo University</b> in my home country of Egypt.

I am currently working as a <b>Research Scientist</b> in the Center of Applied Transportation Sciences (CATS) as well as the Arizona Transportation Institute (AZTI) at the University of Arizona. My research interests span a wide range of topics including traffic operations and transportation planning.
</p>
---

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
