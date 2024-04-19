---
layout: page
title: Archive
---

Welcome to the "Archive" page! Here, you can showcase your publications, including papers and books, in a visually appealing manner. Below are templates for two display styles: Full-Display and Scrolling-Display.

### Books (Full-Display Style) :

<!-- The whole display part for Full-Display Style -->
<div class="Group-Container-Full-Display">

	<!-- The least unit of a display item -->
	<div class="Single-Container">

		<!-- I separate the part of (Class) ImgBorder and ImgOpacity because that would not affect the opacity of the border part when hover over the (Class) Single-Container -->
		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<!-- The least unit of an option, and you can add more options as you want up to 4 -->
			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Click-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Click-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

		</div>

	</div>

</div>

### Books (Scrolling-Display Style) (you can scroll this part horizontally):

<!-- The whole display part for Scrolling-Display Style -->
<div class="Group-Container-Scrolling-Display">

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Click-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

		</div>

	</div>

	<div class="Single-Container">

		<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Click-on-me.jpg" alt="Title"></div>

		<div class="Text">Title</div>

		<div class="Selection">

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 2</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 3</div></a>

			<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 4</div></a>

		</div>

	</div>

</div>

<hr>





<h3 style="color: red">Instruction part begins</h3>

If you want to decorate it in your way, you may have to learn Jekyll and some front-end programming languages.

If you find this page unnecessary, you can easily remove it from you blog through deleting the "**/new-page.md**" file and the `- new-page.md` line under the "**/_config.yml**" file.

The following contents show 2 display block style:

1. Full-Display Style

2. Scrolling-Display Style

To add more items to either display style, replicate the `<div class="Single-Container">...</div>` (which is **the least unit of a display item** within a display container) block within the corresponding group container `<div class="Group-Container-Full-Display">...</div>` or `<div class="Group-Container-Scrolling-Display">...</div>`.

<br>

```html
<div class="Single-Container">

	<div class="ImgBorder"><img class="ImgOpacity" src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg" alt="Title"></div>

	<div class="Text">Title</div>

	<div class="Selection">

		<!-- The least unit of an option, and you can add more options as you want up to 4 -->
		<a class="Option-width" href="https://Please-paste-the-link-here" target="_blank"><div class="Option">Link 1</div></a>

	</div>

</div>
```

The link in `src` in the display item `src="https://deep0thinking.com/wp-content/uploads/2024/01/Hover-on-me.jpg"` is your chosen image that determines the cover of the corresponding item, it can be an URL like this: `https://deep0thinking.com/wp-content/uploads/2024/01/my-first-post.jpg` or a local file path like this: `/assets/img/my-first-post.jpg`. ***(Attention: Please make sure to use the correct link format, or the thumbnail would not be able to display.)***

Feel free to remove these instructions once you're familiar with the setup.

<h3 style="color: red">Instruction part ends</h3>

<hr>

<h1><a href="https://github.com/Deep0Thinking/2nd-Minima#2.3">fake comments section</a></h1>
