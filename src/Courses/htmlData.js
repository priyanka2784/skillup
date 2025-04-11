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
    {
      name: "HTML Comments",
      content: `
HTML comments are not displayed in the browser, but they can help document your HTML source code.

HTML Comment Tag
You can add comments to your HTML source by using the following syntax:

<!-- Write your comments here -->
Notice that there is an exclamation point (!) in the start tag, but not in the end tag.

Note: Comments are not displayed by the browser, but they can help document your HTML source code.

Add Comments
With comments you can place notifications and reminders in your HTML code:

Example
<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->
Hide Content
Comments can be used to hide content.

This can be helpful if you hide content temporarily:

Example
<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>
You can also hide more than one line. Everything between the <!-- and the --> will be hidden from the display.

Example
Hide a section of HTML code:

<p>This is a paragraph.</p>
<!--
<p>Look at this cool image:</p>
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
<p>This is a paragraph too.</p>
Comments are also great for debugging HTML, because you can comment out HTML lines of code, one at a time, to search for errors.

ADVERTISEMENT

Hide Inline Content
Comments can be used to hide parts in the middle of the HTML code.

Example
Hide a part of a paragraph:

<p>This <!-- great text --> is a paragraph.</p>
Exercise
?
What is the correct syntax for adding a comment in HTML?


<-- This is a comment -->
<## This is a comment ##>
<--> This is a comment </-->
<!-- This is a comment -->


`,
    },
    {
      name: "HTML Tables ",
      content: `HTML tables allow web developers to arrange data into rows and columns.

Example
Define an HTML Table
A table in HTML consists of table cells inside rows and columns.

Example
A simple HTML table:

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
Table Cells
Each table cell is defined by a <td> and a </td> tag.

td stands for table data.

Everything between <td> and </td> is the content of a table cell.

Example
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>
Note: A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.

ADVERTISEMENT

Table Rows
Each table row starts with a <tr> and ends with a </tr> tag.

tr stands for table row.

Example
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.

Note: There are times when a row can have less or more cells than another. You will learn about that in a later chapter.

Table Headers
Sometimes you want your cells to be table header cells. In those cases use the <th> tag instead of the <td> tag:

th stands for table header.

Example
Let the first row be table header cells:

<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
By default, the text in <th> elements are bold and centered, but you can change that with CSS.

Exercise
?
What is the correct tag name for a table-cell in HTML?


<tc>
<td>
<tr>


`,
    },
    {
      name: "HTML Lists",
      content: `HTML lists allow web developers to group a set of related items in lists.

Example
An unordered HTML list:

Item
Item
Item
Item
An ordered HTML list:

First item
Second item
Third item
Fourth item
Unordered HTML List
An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.

The list items will be marked with bullets (small black circles) by default:

Example
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

Ordered HTML List
An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.

The list items will be marked with numbers by default:

Example
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
ADVERTISEMENT

HTML Description Lists
HTML also supports description lists.

A description list is a list of terms, with a description of each term.

The <dl> tag defines the description list, the <dt> tag defines the term (name), and the <dd> tag describes each term:

Example
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
Exercise
?
What is the correct tag name for list items?


<item>
<list-item>
<li>
`,
    },
    {
      name: "HTML class Attributes",
      content: `
The HTML class attribute is used to specify a class for an HTML element.

Multiple HTML elements can share the same class.

The class Attribute
The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

In the following example we have three <div> elements with a class attribute with the value of "city". All of the three <div> elements will be styled equally according to the .city style definition in the head section:

Example
<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>
In the following example we have two <span> elements with a class attribute with the value of "note". Both <span> elements will be styled equally according to the .note style definition in the head section:

Example
<!DOCTYPE html>
<html>
<head>
<style>
.note {
  font-size: 120%;
  color: red;
}
</style>
</head>
<body>

<h1>My <span class="note">Important</span> Heading</h1>
<p>This is some <span class="note">important</span> text.</p>

</body>
</html>
Tip: The class attribute can be used on any HTML element.

Note: The class name is case sensitive!

Tip: You can learn much more about CSS in our CSS Tutorial.


The Syntax For Class
To create a class; write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {}:

Example
Create a class named "city":

<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

</body>
</html>
Multiple Classes
HTML elements can belong to more than one class.

To define multiple classes, separate the class names with a space, e.g. <div class="city main">. The element will be styled according to all the classes specified.

In the following example, the first <h2> element belongs to both the city class and also to the main class, and will get the CSS styles from both of the classes: 

Example
<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>
Different Elements Can Share Same Class
Different HTML elements can point to the same class name.

In the following example, both <h2> and <p> point to the "city" class and will share the same style:

Example
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>
Use of the class Attribute in JavaScript
The class name can also be used by JavaScript to perform certain tasks for specific elements.

JavaScript can access elements with a specific class name with the getElementsByClassName() method:

Example
Click on a button to hide all elements with the class name "city":

<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>
Don't worry if you don't understand the code in the example above.

You will learn more about JavaScript in our HTML JavaScript chapter, or you can study our JavaScript Tutorial.

Chapter Summary
The HTML class attribute specifies one or more class names for an element
Classes are used by CSS and JavaScript to select and access specific elements
The class attribute can be used on any HTML element
The class name is case sensitive
Different HTML elements can point to the same class name
JavaScript can access elements with a specific class name with the getElementsByClassName() method
Exercise
?
True or False. The class name is case sensitive


True
False

`,
    },
    {
      name: "HTML id Attribute",
      content: `The HTML id attribute is used to specify a unique id for an HTML element.

You cannot have more than one element with the same id in an HTML document.

The id Attribute
The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.

The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.

In the following example we have an <h1> element that points to the id name "myHeader". This <h1> element will be styled according to the #myHeader style definition in the head section:

Example
<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>
Note: The id name is case sensitive!

Note: The id name must contain at least one character, cannot start with a number, and must not contain whitespaces (spaces, tabs, etc.).

Difference Between Class and ID
A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:

Example
<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
Tip: You can learn much more about CSS in our CSS Tutorial.

ADVERTISEMENT

HTML Bookmarks with ID and Links
HTML bookmarks are used to allow readers to jump to specific parts of a webpage.

Bookmarks can be useful if your page is very long.

To use a bookmark, you must first create it, and then add a link to it.

Then, when the link is clicked, the page will scroll to the location with the bookmark.

Example
First, create a bookmark with the id attribute:

<h2 id="C4">Chapter 4</h2>
Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:

Example
<a href="#C4">Jump to Chapter 4</a>
Or, add a link to the bookmark ("Jump to Chapter 4"), from another page:

<a href="html_demo.html#C4">Jump to Chapter 4</a>
Using the id Attribute in JavaScript
The id attribute can also be used by JavaScript to perform some tasks for that specific element.

JavaScript can access an element with a specific id with the getElementById() method:

Example
Use the id attribute to manipulate text with JavaScript:

<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>
Tip: Study JavaScript in the HTML JavaScript chapter, or in our JavaScript Tutorial.

Chapter Summary
The id attribute is used to specify a unique id for an HTML element
The value of the id attribute must be unique within the HTML document
The id attribute is used by CSS and JavaScript to style/select a specific element
The value of the id attribute is case sensitive
The id attribute is also used to create HTML bookmarks
JavaScript can access an element with a specific id with the getElementById() method
Exercise
?
True or False. The id name is case sensitive


True
False


`,
    },
  ],
};

export default htmlData;
