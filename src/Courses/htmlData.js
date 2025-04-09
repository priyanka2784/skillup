const htmlData = {
  title: "HTML Courses",
  topics: [
    {
      name: "HTML Introduction",
      content: `HTML is the standard markup language for creating Web pages.
    
    What is HTML?
    HTML stands for Hyper Text Markup Language
    HTML is the standard markup language for creating Web pages
    HTML describes the structure of a Web page
    HTML consists of a series of elements
    HTML elements tell the browser how to display the content
    HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
    A Simple HTML Document
    Example
    <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    
    </body>
    </html>
    Example Explained
    The <!DOCTYPE html> declaration defines that this document is an HTML5 document
    The <html> element is the root element of an HTML page
    The <head> element contains meta information about the HTML page
    The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
    The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
    The <h1> element defines a large heading
    The <p> element defines a paragraph
    What is an HTML Element?
    An HTML element is defined by a start tag, some content, and an end tag:
    
    <tagname> Content goes here... </tagname>
    The HTML element is everything from the start tag to the end tag:
    
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    Start tag	Element content	End tag
    <h1>	My First Heading	</h1>
    <p>	My first paragraph.	</p>
    <br>	none	none
    Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!
    
    
    Web Browsers
    The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.
    
    A browser does not display the HTML tags, but uses them to determine how to display the document:
    
    View in Browser
    
    HTML Page Structure
    Below is a visualization of an HTML page structure:
    
    <html>
    <head>
    <title>Page title</title>
    </head>
    <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    </body>
    </html>
    Note: The content inside the <body> section will be displayed in a browser. The content inside the <title> element will be shown in the browser's title bar or in the page's tab.
    
    HTML History
    Since the early days of the World Wide Web, there have been many versions of HTML:
    
    Exercise
    ?
    What does HTML stand for?
    
    
    Hot Typing Markup Language
    Home Typing Modern Language
    `,
    },
    {
      name: "HTML Elements",
      content: `An HTML element is defined by a start tag, some content, and an end tag.

HTML Elements
The HTML element is everything from the start tag to the end tag:

<tagname>Content goes here...</tagname>
Examples of some HTML elements:

<h1>My First Heading</h1>
<p>My first paragraph.</p>
Start tag	Element content	End tag
<h1>	My First Heading	</h1>
<p>	My first paragraph.	</p>
<br>	none	none
Note: Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!

Nested HTML Elements
HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

The following example contains four HTML elements (<html>, <body>, <h1> and <p>):

Example
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
Example Explained
The <html> element is the root element and it defines the whole HTML document.

It has a start tag <html> and an end tag </html>.

Then, inside the <html> element there is a <body> element:

<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
The <body> element defines the document's body.

It has a start tag <body> and an end tag </body>.

Then, inside the <body> element there are two other elements: <h1> and <p>:

<h1>My First Heading</h1>
<p>My first paragraph.</p>
The <h1> element defines a heading.

It has a start tag <h1> and an end tag </h1>:

<h1>My First Heading</h1>
The <p> element defines a paragraph.

It has a start tag <p> and an end tag </p>:

<p>My first paragraph.</p>
ADVERTISEMENT

Never Skip the End Tag
Some HTML elements will display correctly, even if you forget the end tag:

Example
<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>
However, never rely on this! Unexpected results and errors may occur if you forget the end tag!

Empty HTML Elements
HTML elements with no content are called empty elements.

The <br> tag defines a line break, and is an empty element without a closing tag:

Example
<p>This is a <br> paragraph with a line break.</p>
HTML is Not Case Sensitive
HTML tags are not case sensitive: <P> means the same as <p>.

The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

At W3Schools we always use lowercase tag names.

Exercise
?
True or False. Empty elements must have a close tag.


True
False


    `,
    },
    {
      name: "HTML Attributes",
      content: `HTML attributes provide additional information about HTML elements.

HTML Attributes
All HTML elements can have attributes
Attributes provide additional information about elements
Attributes are always specified in the start tag
Attributes usually come in name/value pairs like: name="value"
The href Attribute
The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

Example
<a href="https://www.w3schools.com">Visit W3Schools</a>
You will learn more about links in our HTML Links chapter.

The src Attribute
The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

Example
<img src="img_girl.jpg">
There are two ways to specify the URL in the src attribute:

1. Absolute URL - Links to an external image that is hosted on another website. Example: src="https://www.w3schools.com/images/img_girl.jpg".

Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.

2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="img_girl.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/img_girl.jpg".

Tip: It is almost always best to use relative URLs. They will not break if you change domain.

The width and height Attributes
The <img> tag should also contain the width and height attributes, which specify the width and height of the image (in pixels):

Example
<img src="img_girl.jpg" width="500" height="600">
The alt Attribute
The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.
`,
    },
    {
      name: "HTML Headings",
      content: `HTML headings are titles or subtitles that you want to display on a webpage.

Example
Heading 1
Heading 2
Heading 3
Heading 4
Heading 5
Heading 6
HTML Headings
HTML headings are defined with the <h1> to <h6> tags.

<h1> defines the most important heading. <h6> defines the least important heading.

Example
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
Note: Browsers automatically add some white space (a margin) before and after a heading.

Headings Are Important
Search engines use the headings to index the structure and content of your web pages.

Users often skim a page by its headings. It is important to use headings to show the document structure.

<h1> headings should be used for main headings, followed by <h2> headings, then the less important <h3>, and so on.

Note: Use HTML headings for headings only. Don't use headings to make text BIG or bold.

Bigger Headings
Each HTML heading has a default size. However, you can specify the size for any heading with the style attribute, using the CSS font-size property:

Example
<h1 style="font-size:60px;">Heading 1</h1>
ADVERTISEMENT

Exercise
?
Which of the following headers is the largest and most important header?


<h1>
<h2>
<h3>
<h4>
<h5>
<h6>


`,
    },
    {
      name: "HTML Text formatting",
      content: `HTML contains several elements for defining text with a special meaning.

Example
This text is bold

This text is italic

This is subscript and superscript

HTML Formatting Elements
Formatting elements were designed to display special types of text:

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
HTML <b> and <strong> Elements
The HTML <b> element defines bold text, without any extra importance.

Example
<b>This text is bold</b>
The HTML <strong> element defines text with strong importance. The content inside is typically displayed in bold.

Example
<strong>This text is important!</strong>
ADVERTISEMENT

HTML <i> and <em> Elements
The HTML <i> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

Tip: The <i> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.

Example
<i>This text is italic</i>
The HTML <em> element defines emphasized text. The content inside is typically displayed in italic.

Tip: A screen reader will pronounce the words in <em> with an emphasis, using verbal stress.

Example
<em>This text is emphasized</em>
HTML <small> Element
The HTML <small> element defines smaller text:

Example
<small>This is some smaller text.</small>
HTML <mark> Element
The HTML <mark> element defines text that should be marked or highlighted:

Example
<p>Do not forget to buy <mark>milk</mark> today.</p>
HTML <del> Element
The HTML <del> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:

Example
<p>My favorite color is <del>blue</del> red.</p>
HTML <ins> Element
The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:

Example
<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
HTML <sub> Element
The HTML <sub> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:

Example
<p>This is <sub>subscripted</sub> text.</p>
HTML <sup> Element
The HTML <sup> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:

Example
<p>This is <sup>superscripted</sup> text.</p>
Exercise
?
Two of the following HTML elements makes the text bold, which two?


<em> and <b>
<strong> and <b>
<big> and <b>
<mark> and <b>

`,
    },
  ],
};

export default htmlData;
