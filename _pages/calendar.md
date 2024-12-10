---
layout: archive
title: "Calendar"
permalink: /calendar/
author_profile: true
---

<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=YW1ya2g0MDRAZ21haWwuY29t&src=Y2xhc3Nyb29tMTA4OTMyMTY2MDQ2NDk5OTk3MTg2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA1ODczODQ1ODE5OTY4NTQyNzk4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%23cc003c&color=%23137333" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<!-- New style rendering if publication categories are defined -->
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}



