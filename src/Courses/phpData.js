const phpData = {
  title: "PHP Courses",
  description: "Widely used general purpose scripting language",
  topics: [
    {
      name: "PHP Introduction",
      content: `PHP code is executed on the server.

What You Should Already Know
Before you continue you should have a basic understanding of the following:

HTML
CSS
JavaScript
If you want to study these subjects first, find the tutorials on our Home page.

What is PHP?
PHP is an acronym for "PHP: Hypertext Preprocessor"
PHP is a widely-used, open source scripting language
PHP scripts are executed on the server
PHP is free to download and use
PHP is an amazing and popular language!

It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)!
It is deep enough to run large social networks!
It is also easy enough to be a beginner's first server side language!

What is a PHP File?
PHP files can contain text, HTML, CSS, JavaScript, and PHP code
PHP code is executed on the server, and the result is returned to the browser as plain HTML
PHP files have extension ".php"
What Can PHP Do?
PHP can generate dynamic page content
PHP can create, open, read, write, delete, and close files on the server
PHP can collect form data
PHP can send and receive cookies
PHP can add, delete, modify data in your database
PHP can be used to control user-access
PHP can encrypt data
With PHP you are not limited to output HTML. You can output images or PDF files. You can also output any text, such as XHTML and XML.

ADVERTISEMENT

Why PHP?
PHP runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
PHP is compatible with almost all servers used today (Apache, IIS, etc.)
PHP supports a wide range of databases
PHP is free. Download it from the official PHP resource: www.php.net
PHP is easy to learn and runs efficiently on the server side
What's new in PHP 7
PHP 7 is much faster than the previous popular stable release (PHP 5.6)
PHP 7 has improved Error Handling
PHP 7 supports stricter Type Declarations for function arguments
PHP 7 supports new operators (like the spaceship operator: <=>)
Exercise
?
What does PHP stand for?


PHP: Hyperspeed Performance
PHP: Hyperformat Programming
PHP: Hypertext Preprocessor
PHP: Hyperlink Pages`,
    },
    {
      name: "Php Installation",
      content: `What Do I Need?
To start using PHP, you can:

Find a web host with PHP and MySQL support
Install a web server on your own PC, and then install PHP and MySQL
Use a Web Host With PHP Support
If your server has activated support for PHP you do not need to do anything.

Just create some .php files, place them in your web directory, and the server will automatically parse them for you.

You do not need to compile anything or install any extra tools.

Because PHP is free, most web hosts offer PHP support.

Set Up PHP on Your Own PC
However, if your server does not support PHP, you must:

install a web server
install PHP
install a database, such as MySQL
The official PHP website (PHP.net) has installation instructions for PHP: http://php.net/manual/en/install.php

PHP Online Compiler / Editor
With w3schools' online PHP compiler, you can edit PHP code, and view the result in your browser.

<?php
$txt = "PHP";
echo "I love $txt!";
?>
I love PHP!
Click on the "Try it Yourself" button to see how it works.

PHP Version
To check your php version you can use the phpversion() function:

ExampleGet your own PHP Server
Display the PHP version:

echo phpversion();
`,
    },
    {
      name: "PHP Syntax",
      content: `A PHP script is executed on the server, and the plain HTML result is sent back to the browser.

Basic PHP Syntax
A PHP script can be placed anywhere in the document.

A PHP script starts with <?php and ends with ?>:

<?php
// PHP code goes here
?>
The default file extension for PHP files is ".php".

A PHP file normally contains HTML tags, and some PHP scripting code.

Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output the text "Hello World!" on a web page:

ExampleGet your own PHP Server
A simple .php file with both HTML code and PHP code:

<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
Note: PHP statements end with a semicolon (;).


PHP Case Sensitivity
In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.

In the example below, all three echo statements below are equal and legal:

Example
ECHO is the same as echo:

<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>
Note: However; all variable names are case-sensitive!

Look at the example below; only the first statement will display the value of the $color variable! This is because $color, $COLOR, and $coLOR are treated as three different variables:

Example
$COLOR is not same as $color:

<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>
`,
    },
    {
      name: "PHP Comments",
      content: `Comments in PHP
A comment in PHP code is a line that is not executed as a part of the program. Its only purpose is to be read by someone who is looking at the code.

Comments can be used to:

Let others understand your code
Remind yourself of what you did - Most programmers have experienced coming back to their own work a year or two later and having to re-figure out what they did. Comments can remind you of what you were thinking when you wrote the code
Leave out some parts of your code
PHP supports several ways of commenting:

ExampleGet your own PHP Server
Syntax for comments in PHP code:

// This is a single-line comment

# This is also a single-line comment

/* This is a
multi-line comment */
Single Line Comments
Single line comments start with //.

Any text between // and the end of the line will be ignored (will not be executed).

You can also use # for single line comments, but in this tutorial we will use //.

The following examples uses a single-line comment as an explanation:

Example
A comment before the code:

// Outputs a welcome message:
echo "Welcome Home!";
Example
A comment at the end of a line:

echo "Welcome Home!"; // Outputs a welcome message
Comments to Ignore Code
We can use comments to prevent code lines from being executed:

Example
Do not display a welcome message:

// echo "Welcome Home!";
Multi-line Comments
Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored.

The following example uses a multi-line comment as an explanation:

ExampleGet your own PHP Server
Multi-line comment as an explanation:

/*
The next statement will
print a welcome message
*/
echo "Welcome Home!";
Multi-line Comments to Ignore Code
We can use multi-line comments to prevent blocks of code from being executed:

Example
Multi-line comment to ignore code:

/*
echo "Welcome to my home!";
echo "Mi casa su casa!";
*/
echo "Hello!";
Comments in the Middle of the Code
The multi-line comment syntax can also be used to prevent execution of parts inside a code-line:

Example
The  + 15 part will be ignored in the calculation:

$x = 5 /* + 15 */ + 5;
echo $x;

`,
    },
    {
      name: "PHP Variables",
      content: `Variables are "containers" for storing information.

Creating (Declaring) PHP Variables
In PHP, a variable starts with the $ sign, followed by the name of the variable:

ExampleGet your own PHP Server
$x = 5;
$y = "John";
In the example above, the variable $x will hold the value 5, and the variable $y will hold the value "John".

Note: When you assign a text value to a variable, put quotes around the value.

Note: Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it.

Think of variables as containers for storing data.

Recommended videosPowered by Snigel
JavaScript - Introduction
Play VideoBrand logo

PHP Variables
A variable can have a short name (like $x and $y) or a more descriptive name ($age, $carname, $total_volume).

Rules for PHP variables:

A variable starts with the $ sign, followed by the name of the variable
A variable name must start with a letter or the underscore character
A variable name cannot start with a number
A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
Variable names are case-sensitive ($age and $AGE are two different variables)
Remember that PHP variable names are case-sensitive!

Output Variables
The PHP echo statement is often used to output data to the screen.

The following example will show how to output text and a variable:

Example
$txt = "W3Schools.com";
echo "I love $txt!";
The following example will produce the same output as the example above:

Example
$txt = "W3Schools.com";
echo "I love " . $txt . "!";
The following example will output the sum of two variables:

Example
$x = 5;
$y = 4;
echo $x + $y;
Note: You will learn more about the echo statement and how to output data to the screen in the PHP Echo/Print chapter.

PHP is a Loosely Typed Language
In the example above, notice that we did not have to tell PHP which data type the variable is.

PHP automatically associates a data type to the variable, depending on its value. Since the data types are not set in a strict sense, you can do things like adding a string to an integer without causing an error.

In PHP 7, type declarations were added. This gives an option to specify the data type expected when declaring a function, and by enabling the strict requirement, it will throw a "Fatal Error" on a type mismatch.

You will learn more about strict and non-strict requirements, and data type declarations in the PHP Functions chapter.

Variable Types
PHP has no command for declaring a variable, and the data type depends on the value of the variable.

Example
$x = 5;      // $x is an integer
$y = "John"; // $y is a string
echo $x;
echo $y;
PHP supports the following data types:

String
Integer
Float (floating point numbers - also called double)
Boolean
Array
Object
NULL
Resource


Get the Type
To get the data type of a variable, use the var_dump() function.

Example
The var_dump() function returns the data type and the value:

$x = 5;
var_dump($x);
Example
See what var_dump() returns for other data types:

var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);
ADVERTISEMENT

Assign String to a Variable
Assigning a string to a variable is done with the variable name followed by an equal sign and the string:

Example
$x = "John";
echo $x;
String variables can be declared either by using double or single quotes, but you should be aware of the differences. Learn more about the differences in the PHP Strings chapter.

Assign Multiple Values
You can assign the same value to multiple variables in one line:

Example
All three variables get the value "Fruit":

$x = $y = $z = "Fruit";

`,
    },
    {
      name: "PHP echo/Print Statements",
      content: `With PHP, there are two basic ways to get output: echo and print.

In this tutorial we use echo or print in almost every example. So, this chapter contains a little more info about those two output statements.

PHP echo and print Statements
echo and print are more or less the same. They are both used to output data to the screen.

The differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.

The PHP echo Statement
The echo statement can be used with or without parentheses: echo or echo().

ExampleGet your own PHP Server
echo "Hello";
//same as:
echo("Hello");
Display Text
The following example shows how to output text with the echo command (notice that the text can contain HTML markup):

Example
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
Display Variables
The following example shows how to output text and variables with the echo statement:

Example
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo "<h2>$txt1</h2>";
echo "<p>Study PHP at $txt2</p>";
Using Single Quotes
Strings are surrounded by quotes, but there is a difference between single and double quotes in PHP.

When using double quotes, variables can be inserted to the string as in the example above.

When using single quotes, variables have to be inserted using the . operator, like this:

Example
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

echo '<h2>' . $txt1 . '</h2>';
echo '<p>Study PHP at ' . $txt2 . '</p>';
The PHP print Statement
The print statement can be used with or without parentheses: print or print().

Example
print "Hello";
//same as:
print("Hello");
Display Text
The following example shows how to output text with the print command (notice that the text can contain HTML markup):

Example
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
Display Variables
The following example shows how to output text and variables with the print statement:

Example
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print "<h2>$txt1</h2>";
print "<p>Study PHP at $txt2</p>";
Using Single Quotes
Strings are surrounded by quotes, but there is a difference between single and double quotes in PHP.

When using double quotes, variables can be inserted to the string as in the example above.

When using single quotes, variables have to be inserted using the . operator, like this:

Example
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";

print '<h2>' . $txt1 . '</h2>';
print '<p>Study PHP at ' . $txt2 . '</p>';

`,
    },
    {
      name: "PHP Data Types",
      content: `Variables can store data of different types, and different data types can do different things.

PHP supports the following data types:

String
Integer
Float (floating point numbers - also called double)
Boolean
Array
Object
NULL
Resource
Getting the Data Type
You can get the data type of any object by using the var_dump() function.

ExampleGet your own PHP Server
The var_dump() function returns the data type and the value:

$x = 5;
var_dump($x);
PHP String
A string is a sequence of characters, like "Hello world!".

A string can be any text inside quotes. You can use single or double quotes:

Example
$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
echo "<br>";
var_dump($y);
PHP Integer
An integer data type is a non-decimal number between -2,147,483,648 and 2,147,483,647.

Rules for integers:

An integer must have at least one digit
An integer must not have a decimal point
An integer can be either positive or negative
Integers can be specified in: decimal (base 10), hexadecimal (base 16), octal (base 8), or binary (base 2) notation
In the following example $x is an integer. The PHP var_dump() function returns the data type and value:

Example
$x = 5985;
var_dump($x);
ADVERTISEMENT

PHP Float
A float (floating point number) is a number with a decimal point or a number in exponential form.

In the following example $x is a float. The PHP var_dump() function returns the data type and value:

Example
$x = 10.365;
var_dump($x);
PHP Boolean
A Boolean represents two possible states: TRUE or FALSE.

Example
$x = true;
var_dump($x);
Booleans are often used in conditional testing.

You will learn more about conditional testing in the PHP If...Else chapter.

PHP Array
An array stores multiple values in one single variable.

In the following example $cars is an array. The PHP var_dump() function returns the data type and value:

Example
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);
You will learn a lot more about arrays in later chapters of this tutorial.

PHP Object
Classes and objects are the two main aspects of object-oriented programming.

A class is a template for objects, and an object is an instance of a class.

When the individual objects are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

Let's assume we have a class named Car that can have properties like model, color, etc. We can define variables like $model, $color, and so on, to hold the values of these properties.

When the individual objects (Volvo, BMW, Toyota, etc.) are created, they inherit all the properties and behaviors from the class, but each object will have different values for the properties.

If you create a __construct() function, PHP will automatically call this function when you create an object from a class.

Example
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);
Do not worry if you do not understand the PHP Object syntax, you will learn more about that in the PHP Classes/Objects chapter.

PHP NULL Value
Null is a special data type which can have only one value: NULL.

A variable of data type NULL is a variable that has no value assigned to it.

Tip: If a variable is created without a value, it is automatically assigned a value of NULL.

Variables can also be emptied by setting the value to NULL:

Example
$x = "Hello world!";
$x = null;
var_dump($x);
Change Data Type
If you assign an integer value to a variable, the type will automatically be an integer.

If you assign a string to the same variable, the type will change to a string:

Example
$x = 5;
var_dump($x);

$x = "Hello";
var_dump($x);
If you want to change the data type of an existing variable, but not by changing the value, you can use casting.

Casting allows you to change data type on variables:

Example
$x = 5;
$x = (string) $x;
var_dump($x);
You will learn more about casting in the PHP Casting Chapter.

PHP Resource
The special resource type is not an actual data type. It is the storing of a reference to functions and resources external to PHP.

A common example of using the resource data type is a database call.

We will not talk about the resource type here, since it is an advanced topic.

`,
    },
    {
      name: "PHP Strings",
      content: `A string is a sequence of characters, like "Hello world!".

Strings
Strings in PHP are surrounded by either double quotation marks, or single quotation marks.

ExampleGet your own PHP Server
echo "Hello";
echo 'Hello';
Note There is a big difference between double quotes and single quotes in PHP.

Double quotes process special characters, single quotes does not.

Double or Single Quotes?
You can use double or single quotes, but you should be aware of the differences between the two.

Double quoted strings perform action on special characters.

E.g. when there is a variable in the string, it returns the value of the variable:

Example
Double quoted string literals perform operations for special characters:

$x = "John";
echo "Hello $x";
Single quoted strings does not perform such actions, it returns the string like it was written, with the variable name:

Example
Single quoted string literals returns the string as it is:

$x = "John";
echo 'Hello $x';

String Length
The PHP strlen() function returns the length of a string.

Example
Return the length of the string "Hello world!":

echo strlen("Hello world!");
Word Count
The PHP str_word_count() function counts the number of words in a string.

Example
Count the number of word in the string "Hello world!":

echo str_word_count("Hello world!");
Search For Text Within a String
The PHP strpos() function searches for a specific text within a string.

If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.

Example
Search for the text "world" in the string "Hello world!":

echo strpos("Hello world!", "world");
Tip: The first character position in a string is 0 (not 1).

Complete PHP String Reference
For a complete reference of all string functions, go to our complete PHP String Reference.

The PHP string reference contains description and example of use, for each function!

`,
    },
    {
      name: "PHP-modify strings",
      content: `PHP has a set of built-in functions that you can use to modify strings.

Upper Case
ExampleGet your own PHP Server
The strtoupper() function returns the string in upper case:

$x = "Hello World!";
echo strtoupper($x);
Lower Case
Example
The strtolower() function returns the string in lower case:

$x = "Hello World!";
echo strtolower($x);
Replace String
The PHP str_replace() function replaces some characters with some other characters in a string.

Example
Replace the text "World" with "Dolly":

$x = "Hello World!";
echo str_replace("World", "Dolly", $x);


Reverse a String
The PHP strrev() function reverses a string.

Example
Reverse the string "Hello World!":

$x = "Hello World!";
echo strrev($x);
Remove Whitespace
Whitespace is the space before and/or after the actual text, and very often you want to remove this space.

Example
The trim() removes any whitespace from the beginning or the end:

$x = " Hello World! ";
echo trim($x);
Learn more in our trim() Function Reference.

Convert String into Array
The PHP explode() function splits a string into an array.

The first parameter of the explode() function represents the "separator". The "separator" specifies where to split the string.

Note: The separator is required.

Example
Split the string into an array. Use the space character as separator:

$x = "Hello World!";
$y = explode(" ", $x);

//Use the print_r() function to display the result:
print_r($y);

/*
Result:
Array ( [0] => Hello [1] => World! )
*/
Complete PHP String Reference
For a complete reference of all string functions, go to our complete PHP String Reference.

`,
    },
    {
      name: "PHP-Concatenate strings",
      content: `String Concatenation
To concatenate, or combine, two strings you can use the . operator:

ExampleGet your own PHP Server
$x = "Hello";
$y = "World";
$z = $x . $y;
echo $z;
The result of the example above is HelloWorld, without a space between the two words.

You can add a space character like this:

Example
$x = "Hello";
$y = "World";
$z = $x . " " . $y;
echo $z;
An easier and better way is by using the power of double quotes.

By surrounding the two variables in double quotes with a white space between them, the white space will also be present in the result:

Example
$x = "Hello";
$y = "World";
$z = "$x $y";
echo $z;
Complete PHP String Reference
For a complete reference of all string functions, go to our complete PHP String Reference.


`,
    },
    {
      name: "PHP- if statements",
      content: `Conditional statements are used to perform different actions based on different conditions.

PHP Conditional Statements
Very often when you write code, you want to perform different actions for different conditions. You can use conditional statements in your code to do this.

In PHP we have the following conditional statements:

if statement - executes some code if one condition is true
if...else statement - executes some code if a condition is true and another code if that condition is false
if...elseif...else statement - executes different codes for more than two conditions
switch statement - selects one of many blocks of code to be executed
PHP - The if Statement
The if statement executes some code if one condition is true.

Syntax
if (condition) {
  // code to be executed if condition is true;
}
ExampleGet your own PHP Server
Output "Have a good day!" if 5 is larger than 3:

if (5 > 3) {
  echo "Have a good day!";
}
We can also use variables in the if statement:

Example
Output "Have a good day!" if $t is less than 20:

$t = 14;

if ($t < 20) {
  echo "Have a good day!";
}


`,
    },
    {
      name: "PHP-if..else Statements",
      content: `PHP - The if...else Statement
The if...else statement executes some code if a condition is true and another code if that condition is false.

Syntax
if (condition) {
  // code to be executed if condition is true;
} else {
  // code to be executed if condition is false;
}
ExampleGet your own PHP Server
Output "Have a good day!" if the current time is less than 20, and "Have a good night!" otherwise:

$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
PHP - The if...elseif...else Statement
The if...elseif...else statement executes different codes for more than two conditions.

Syntax
if (condition) {
  code to be executed if this condition is true;
} elseif (condition) {
  // code to be executed if first condition is false and this condition is true;
} else {
  // code to be executed if all conditions are false;
}
Example
Output "Have a good morning!" if the current time is less than 10, and "Have a good day!" if the current time is less than 20. Otherwise it will output "Have a good night!":

$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
`,
    },
    {
      name: "PHP-nested..if statement",
      content: `Nested If
You can have if statements inside if statements, this is called nested if statements.

ExampleGet your own PHP Server
An if inside an if:

$a = 13;

if ($a > 10) {
  echo "Above 10";
  if ($a > 20) {
    echo " and also above 20";
  } else {
    echo " but not above 20";
  }
}

`,
    },
    {
      name: "PHP loops",
      content: `Often when you write code, you want the same block of code to run over and over again a certain number of times. So, instead of adding several almost equal code-lines in a script, we can use loops.

Loops are used to execute the same block of code again and again, as long as a certain condition is true.

In PHP, we have the following loop types:

while - loops through a block of code as long as the specified condition is true
do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true
for - loops through a block of code a specified number of times
foreach - loops through a block of code for each element in an array
The following chapters will explain and give examples of each loop type.

Exercise
?
Which loop evaluates three expressions, one before the loop starts, one before each iteration, and one after each iteration?


while
do...while
for
foreach
`,
    },
    {
      name: "PHP Operators",
      content: `Operators are used to perform operations on variables and values.

PHP divides the operators in the following groups:

Arithmetic operators
Assignment operators
Comparison operators
Increment/Decrement operators
Logical operators
String operators
Array operators
Conditional assignment operators
PHP Arithmetic Operators
The PHP arithmetic operators are used with numeric values to perform common arithmetical operations, such as addition, subtraction, multiplication etc.

Operator	Name	Example	Result	Try it
+	Addition	$x + $y	Sum of $x and $y	
-	Subtraction	$x - $y	Difference of $x and $y	
*	Multiplication	$x * $y	Product of $x and $y	
/	Division	$x / $y	Quotient of $x and $y	
%	Modulus	$x % $y	Remainder of $x divided by $y	
**	Exponentiation	$x ** $y	Result of raising $x to the $y'th power	
PHP Assignment Operators
The PHP assignment operators are used with numeric values to write a value to a variable.

The basic assignment operator in PHP is "=". It means that the left operand gets set to the value of the assignment expression on the right.

Assignment	Same as...	Description	Try it
x = y	x = y	The left operand gets set to the value of the expression on the right	
x += y	x = x + y	Addition	
x -= y	x = x - y	Subtraction	
x *= y	x = x * y	Multiplication	
x /= y	x = x / y	Division	
x %= y	x = x % y	Modulus	


PHP Comparison Operators
The PHP comparison operators are used to compare two values (number or string):

Operator	Name	Example	Result	Try it
==	Equal	$x == $y	Returns true if $x is equal to $y	
===	Identical	$x === $y	Returns true if $x is equal to $y, and they are of the same type	
!=	Not equal	$x != $y	Returns true if $x is not equal to $y	
<>	Not equal	$x <> $y	Returns true if $x is not equal to $y	
!==	Not identical	$x !== $y	Returns true if $x is not equal to $y, or they are not of the same type	
>	Greater than	$x > $y	Returns true if $x is greater than $y	
<	Less than	$x < $y	Returns true if $x is less than $y	
>=	Greater than or equal to	$x >= $y	Returns true if $x is greater than or equal to $y	
<=	Less than or equal to	$x <= $y	Returns true if $x is less than or equal to $y	
<=>	Spaceship	$x <=> $y	Returns an integer less than, equal to, or greater than zero, depending on if $x is less than, equal to, or greater than $y. Introduced in PHP 7.	
PHP Increment / Decrement Operators
The PHP increment operators are used to increment a variable's value.

The PHP decrement operators are used to decrement a variable's value.

Operator	Same as...	Description	Try it
++$x	Pre-increment	Increments $x by one, then returns $x	
$x++	Post-increment	Returns $x, then increments $x by one	
--$x	Pre-decrement	Decrements $x by one, then returns $x	
$x--	Post-decrement	Returns $x, then decrements $x by one	
PHP Logical Operators
The PHP logical operators are used to combine conditional statements.

Operator	Name	Example	Result	Try it
and	And	$x and $y	True if both $x and $y are true	
or	Or	$x or $y	True if either $x or $y is true	
xor	Xor	$x xor $y	True if either $x or $y is true, but not both	
&&	And	$x && $y	True if both $x and $y are true	
||	Or	$x || $y	True if either $x or $y is true	
!	Not	!$x	True if $x is not true	
PHP String Operators
PHP has two operators that are specially designed for strings.

Operator	Name	Example	Result	Try it
.	Concatenation	$txt1 . $txt2	Concatenation of $txt1 and $txt2	
.=	Concatenation assignment	$txt1 .= $txt2	Appends $txt2 to $txt1	
PHP Array Operators
The PHP array operators are used to compare arrays.

Operator	Name	Example	Result	Try it
+	Union	$x + $y	Union of $x and $y	
==	Equality	$x == $y	Returns true if $x and $y have the same key/value pairs	
===	Identity	$x === $y	Returns true if $x and $y have the same key/value pairs in the same order and of the same types	
!=	Inequality	$x != $y	Returns true if $x is not equal to $y	
<>	Inequality	$x <> $y	Returns true if $x is not equal to $y	
!==	Non-identity	$x !== $y	Returns true if $x is not identical to $y	
PHP Conditional Assignment Operators
The PHP conditional assignment operators are used to set a value depending on conditions:

Operator	Name	Example	Result	Try it
?:	Ternary	$x = expr1 ? expr2 : expr3	Returns the value of $x.
The value of $x is expr2 if expr1 = TRUE.
The value of $x is expr3 if expr1 = FALSE	
??	Null coalescing	$x = expr1 ?? expr2	Returns the value of $x.
The value of $x is expr1 if expr1 exists, and is not NULL.
If expr1 does not exist, or is NULL, the value of $x is expr2.
`,
    },
  ],
};
export default phpData;
