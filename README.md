# [2nd-Minima](https://deep0thinking.github.io/2nd-Minima/)

### Table of Contents

- [0 About](#0)

  - [0.1 About the 2nd-Minima repository](#0.1)

  - [0.2 About the "/README.md"](#0.2)

  - [0.3 About the usage](#0.3)

  - [0.4 About the acknowledgement](#0.4)

- [1 Basic set up](#1)

  - [1.1 Use this template](#1.1)

  - [1.2 Webpage edit and deployment](#1.2)


- [2 Usage](#2)

  - [2.1 "/_config.yml"](#2.1)

  - [2.2 Posts](#2.2)

  - [2.3 giscus.app](#2.3)

  - [2.4 "/about.md"](#2.4)

  - [2.5 "/archive.md"](#2.5)

  - [2.6 favicon](#2.6)

  - [2.7 favicon](#2.7)

<hr>

<h3 id="0">0 About</h3>

<h4 id="0.1">0.1 About the 2nd-Minima repository</h4>

The **2nd-Minima** Github repository is designed for individuals seeking to handily create a blog. It's a user-friendly, advanced **template** based on the popular [Jekyll-theme-Minima](https://github.com/jekyll/minima), perfect for those unfamiliar with front-end programming.

Experience a live demo of a [2nd-Minima](https://github.com/Deep0Thinking/2nd-Minima) based website here: [Deep0Thinking.github.io](https://deep0thinking.github.io)

![Deep0Thinking.github.io](https://repository-images.githubusercontent.com/481486169/e28e51cb-d7c1-49c7-b8e5-c81a3e27fb46)

<h4 id="0.2">0.2 About the "/README.md"</h4>

This "[**/README.md**](https://github.com/Deep0Thinking/2nd-Minima/blob/master/README.md)" file serves as a comprehensive manual for the [**2nd-Minima**](https://github.com/Deep0Thinking/2nd-Minima) repository. It aims to provide clear explanations and guidance for customization and use. If you're new to this repository, I recommend reading this "**/README.md**" file in its entirety. It will help you get started quickly and easily.

<h4 id="0.3">0.3 About the usage</h4>

With the [MIT License](https://github.com/Deep0Thinking/2nd-Minima/blob/main/LICENSE), you have extensive freedom to modify and adapt the [**2nd-Minima**](https://github.com/Deep0Thinking/2nd-Minima) template to suit your personal needs. You may also use it for commercial purposes.

<h4 id="0.4">0.4 About the acknowledgement</h4>

I would like to thank all the developers and contributors of the [Jekyll-theme-Minima](https://github.com/jekyll/minima), because the [**2nd-Minima**](https://github.com/Deep0Thinking/2nd-Minima) is an advanced personal-website-template repository that developed mainly based on the [Jekyll-theme-Minima](https://github.com/jekyll/minima).

And specifically, great thanks to [Long Qian](http://longqian.me/aboutme/), [MathJax](https://www.mathjax.org) and [giscus.app](https://giscus.app) for providing supportive tool and code for the community!

Thanks should also go to Github, because this platform provide many people (including me) a chance to learn, cooperate and improve in coding.

Lastly, heartfelt appreciation to my family and friends for their unwavering support. 

Oh, and a big thank you to you, the user, for trusting and using this template :)

---

<h3 id="1">1 Basic set up</h3>

<h4 id="1.1">1.1 Use this template</h4>

Please direct to the [**2nd-Minima**](https://github.com/Deep0Thinking/2nd-Minima) repository (repo) page first and click on `Use this template` (the green button) -> `Create a new repository` , then please enter the "Repository name", if you're a first-timer, I suggest using the format "your-Github-username.github.io", like "louis.github.io". This naming convention is important for GitHub Pages, and you can learn more about it at https://pages.github.com. However, feel free to choose a different name, such as "Cookie-0111", if you prefer. This won't impact the future functionality of your site.

As for the other repo settings, you can stick with the default options or adjust them according to your preferences. Keep in mind, even if you initially set your repository to private, others can still access your personal website once it's deployed and they have the link. (Note: even if you initially set your repository to `private`, others can still access your personal website once it's deployed and they have the link) 

<h4 id="1.2">1.2 Webpage edit and deployment</h4>

Please direct to the page of the repo which you've just created using the [**2nd-Minima**](https://github.com/Deep0Thinking/2nd-Minima) template, click on `< > Code` (the green button right under the "Fork" button) -> `HTTPS` -> "Copy url to clipboard", and then open your terminal (or command line) and type in `git clone ` and paste the url you've just copied from the repo page (your code should look like `git clone https://github.com/????.git`), then press `Enter` to clone the repo to your local computer. (Note: you need to have "git" installed on your computer first, if you don't have git installed, please check here: https://git-scm.com/downloads)

Next, locate to the cloned repo folder on your local computer, and open this repo with a text editor or IDE (like VS Code or Visual Studio). Then open your terminal (or command line) and navigate to the repo folder using `cd` command, like `cd /absolute_path/to/your/repo/folder`.

Then type in `bundle install` in the terminal to install the necessary gems for the Jekyll theme. (Note: If you receive an error message, you may need to install all the prerequisites like Ruby and RubyGems first. You can find more information on how to do this at [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/))

After the installation is complete, type in `bundle exec jekyll serve` to start the Jekyll server. You should see a message like `Server address: http://?????`, which indicates the server is running successfully. Open your browser and navigate to the url address shown in the terminal to view your website (Note: this is url just a local preview of your website on your computer, others will not be able to see it unless you deploy it to GitHub Pages publicly). (Note: if you see an error message, please check the terminal output for more information on how to resolve the issue. If you don't know how to fix it, please email me ([Deep_Thinking@outlook.com](mailto:Deep_Thinking@outlook.com)) directly or open an issue in the **2nd-Minima** repo "[**Issues**](https://github.com/Deep0Thinking/2nd-Minima/issues)" section, and I'll try my best to help you resolve the it.)

Once you're satisfied with your website's appearance, you can press `Ctrl + C` in the terminal under the repo folder directory to stop the Jekyll server. If you don't know what to edit or how to edit, please read the following [**Usage**](#2) section for more detailed guidance.

Now it's time to deploy it to GitHub Pages. I've already set up the necessary configurations in the repo for you, which is the "**.github/workflows/jekyll.yml**" file. So to complete the deployment, all you have to do it, open your terminal again (or command line) and type in `git add .` under the same repo folder directory, then `git commit -m "Initial commit"`, and finally `git push origin main` to push your changes to your remote repo.

(If you want to learn more about git and GitHub, I recommend checking out this [tutorial](https://deep0thinking.com/?p=4886) on [my blog](https://deep0thinking.com) or other resources online.)

Then navigate to `Settings` (located just beneath the search bar) -> `Pages` (on the left column list). You should be able to see `Your site is live at ...`, which implies your blog's url. After about 1 minute (for the webpage deployment), your blog's webpage should be generated successfully. To monitor its deployment status, revisit your repository's main page, keep an eye on the small yellow dot (next to the green button `< > Code`). Upon successful deployment, this dot will change to a green check mark ✅ (Remember to refresh the page to update the status indicator). (Note: if you see a red cross ❌ instead of the check mark ✅, that indicates the deployment failed. In this case, please email me ([Deep_Thinking@outlook.com](mailto:Deep_Thinking@outlook.com)) directly or open an issue in the **2nd-Minima** repo "[**Issues**](https://github.com/Deep0Thinking/2nd-Minima/issues)" section, and I'll try my best to help you resolve the it.)

To visit your site, navigate to `Settings` -> `Pages` -> `Visit site` , it's a good idea to bookmark your site's url for easy access. Alternatively, you can add your site's url into your repo's `About` section, which is located next to the green button `< > Code` on your repo Github main page. Click on the option button (the gear icon) in that `About` block to add your link. You can also create a direct link combines with the heading style in your "**/README.md**" file under the repo root folder, like `# [please-paste-your-repo-title-here](https://please-paste-your-webpage-link-here)`. This creates a clickable heading on your repository's main page, as GitHub automatically displays the "README.md" file there for every repo.

---

<h3 id="2">2 Usage</h3>

<h4 id="2.1">2.1 "/_config.yml"</h4>

Start by opening the "**/_config.yml**" file. In the title section, replace `Please-type-your-Github-name-here` with your actual Github username.

Moving on to the line labeled `show_description`, I recommend setting its value to `true`. Don't worry about the details for now; we'll guide you through this part later.

Lastly, let's focus on `header_pages`. This section determines the order of pages like `archive`, `about`, and `all-tags` on your website's navigation bar. To rearrange their display order on the webpage, simply change their sequence in `header_pages`. The order from top to bottom in this section directly corresponds to the left-to-right order on your website's navigation bar.

<h4 id="2.2">2.2 Posts</h4>

Are you ready to craft a captivating post featuring a mix of elements like text, images, YouTube videos, external links, LaTeX-formatted math equations, downloadable documents, interactive animations, and more?

If so, your next step is simple. Dive into our comprehensive guide post titled [How-to-post-posts](https://deep0thinking.github.io/2nd-Minima/2022/11/28/How-to-post-posts.html). You'll find this valuable resource in the "**/_posts/**" folder. This guide is your key to effortlessly integrating these diverse content types into your posts. Let's get started!

<h4 id="2.3">2.3 giscus.app</h4>

You might have noticed the **fake comments section** at the bottom of the "**How to post posts**" post and "**Archive**" page and "**About**" page. This is where you'll set up your **real comments section**.

The actual comments functionality is powered by [giscus.app](https://giscus.app), a robust platform for enabling comments on your site. To get started, visit [giscus.app](https://giscus.app) and follow the detailed instructions provided there to enable the giscus comment section.

Once you've read through the giscus instructions and obtained the necessary embed code, it's time to integrate it into your site. Replace the **fake comments section** code at the bottom of your "**/_layouts/post.html**" file with the new giscus embed code. The placeholder code you'll be replacing looks like this: `<h1><a href="https://github.com/Deep0Thinking/2nd-Minima#2.4">fake comments section</a></h1>`. Remember to repeat this step for your "**/about.md**" and "**/archive.md**" files, as they also contain placeholders for the **fake comments section**.

You might wonder why not simply insert the giscus embed code into the "**/_layouts/page.html**" file, as both the [**about**](https://deep0thinking.github.io/2nd-Minima/about.html) and [**archive**](https://deep0thinking.github.io/2nd-Minima/archive.html) pages use `layout: page` in their predeclarations. The reason is that doing so would also add a comments section to the [**all-tags**](https://deep0thinking.github.io/2nd-Minima/all-tags.html) page and every single **tag** page, which isn't ideal. In my view, this could clutter these pages and detract from the site's aesthetic appeal. But you can surely do that based on you preference.

After you've completed these steps, the giscus comments sections should now be visible at the bottom of the relevant pages.

<h4 id="2.4">2.4 "/about.md"</h4>

You'll find detailed guidance on customizing the [**about**](https://deep0thinking.github.io/2nd-Minima/about.html) page within the "**/about.md**" file itself. So, take a moment to visit your "**/about.md**" file, where you can apply your own personal touches and modifications to make it truly yours.

<h4 id="2.5">2.5 "/archive.md"</h4>

Tailoring the [**archive**](https://deep0thinking.github.io/2nd-Minima/archive.html) page to your preferences is straightforward. You'll find all the necessary instructions within the "**/archive.md** file. Go ahead and open your "**/archive.md** file to start making personalized modifications that reflect your style and needs.

<h4 id="2.6">2.6 favicon</h4>

The favicon is a small, iconic image that represents your webpage. Have you noticed the black icon next to your webpage title? That's the default favicon I've set for this repository. But you can personalize it by creating your own. For this, I recommend using [favicon.io](https://favicon.io). It's a user-friendly website that lets you design and generate your own favicon for free.

Once you've crafted your favicon, the next step is simple. Just place your newly created "**favicon.ico**" file into the "**/favicon/**" folder, replacing the existing one (the old "**favicon.ico**" file I placed there). ***(Attention: the new file you replaced with under the "/favicon/" must be named exactly "favicon.ico" for it to function correctly )*** With this change, your webpage will display the favicon you've designed, adding a unique touch to your site.

<h4 id="2.7">2.7 Link, List</h4>

