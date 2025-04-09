const pythonData = {
  title: "Python Courses",
  topic: [
    {
      name: "Python Introduction",
      content: `What is Python?
Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.

It is used for:

web development (server-side),
software development,
mathematics,
system scripting.
What can Python do?
Python can be used on a server to create web applications.
Python can be used alongside software to create workflows.
Python can connect to database systems. It can also read and modify files.
Python can be used to handle big data and perform complex mathematics.
Python can be used for rapid prototyping, or for production-ready software development.
Why Python?
Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
Python has a simple syntax similar to the English language.
Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
Python can be treated in a procedural way, an object-oriented way or a functional way.
Good to know
The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, Python 2, although not being updated with anything other than security updates, is still quite popular.
In this tutorial Python will be written in a text editor. It is possible to write Python in an Integrated Development Environment, such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.
Python Syntax compared to other programming languages
Python was designed for readability, and has some similarities to the English language with influence from mathematics.
Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.
ExampleGet your own Python Server
print("Hello, World!")`,
    },
    {
      name: "Python Syntax",
      content: `Execute Python Syntax
As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:

>>> print("Hello, World!")
Hello, World!
On this page
Execute Python Syntax
Python Indentation
Python Variables
Python Comments
Exercises
Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:

C:\Users\Your Name>python myfile.py
Python Indentation
Indentation refers to the spaces at the beginning of a code line.

Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.

Python uses indentation to indicate a block of code.

ExampleGet your own Python Server
if 5 > 2:
  print("Five is greater than two!")
Python will give you an error if you skip the indentation:

Example
Syntax Error:

if 5 > 2:
print("Five is greater than two!")
The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.

Example
if 5 > 2:
 print("Five is greater than two!") 
if 5 > 2:
        print("Five is greater than two!") 
You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:

Example
Syntax Error:

if 5 > 2:
 print("Five is greater than two!")
        print("Five is greater than two!")`,
    },
    {
      name: "Python Variables",
      content: `Variables
Variables are containers for storing data values.

Creating Variables
Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.

ExampleGet your own Python Server
x = 5
y = "John"
print(x)
print(y)
Variables do not need to be declared with any particular type, and can even change type after they have been set.

Example
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
Casting
If you want to specify the data type of a variable, this can be done with casting.

Example
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
ADVERTISEMENT

Get the Type
You can get the data type of a variable with the type() function.

Example
x = 5
y = "John"
print(type(x))
print(type(y))
You will learn more about data types and casting later in this tutorial.
Single or Double Quotes?
String variables can be declared either by using single or double quotes:

Example
x = "John"
# is the same as
x = 'John'
Case-Sensitive
Variable names are case-sensitive.

Example
This will create two variables:

a = 4
A = "Sally"
#A will not overwrite a`,
    },
    {
      name: "Python Comments",
      content: `Comments can be used to explain Python code.

Comments can be used to make the code more readable.

Comments can be used to prevent execution when testing code.

Creating a Comment
Comments starts with a #, and Python will ignore them:

ExampleGet your own Python Server
#This is a comment
print("Hello, World!")
Comments can be placed at the end of a line, and Python will ignore the rest of the line:

Example
print("Hello, World!") #This is a comment
A comment does not have to be text that explains the code, it can also be used to prevent Python from executing code:

Example
#print("Hello, World!")
print("Cheers, Mate!")
ADVERTISEMENT

Multiline Comments
Python does not really have a syntax for multiline comments.

To add a multiline comment you could insert a # for each line:

Example
#This is a comment
#written in
#more than just one line
print("Hello, World!")
Or, not quite as intended, you can use a multiline string.

Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:

Example
"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")`,
    },
    {
      name: "Variables",
      content: `Python Variables

Variables are containers for storing data values.

Creating Variables
Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.

ExampleGet your own Python Server
x = 5
y = "John"
print(x)
print(y)
Variables do not need to be declared with any particular type, and can even change type after they have been set.

Example
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
Casting
If you want to specify the data type of a variable, this can be done with casting.

Example
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
ADVERTISEMENT

Get the Type
You can get the data type of a variable with the type() function.

Example
x = 5
y = "John"
print(type(x))
print(type(y))
You will learn more about data types and casting later in this tutorial.
Single or Double Quotes?
String variables can be declared either by using single or double quotes:

Example
x = "John"
# is the same as
x = 'John'
Case-Sensitive
Variable names are case-sensitive.

Example
This will create two variables:

a = 4
A = "Sally"
#A will not overwrite a`,
    },
    {
      name: "Python Inheritance",
      content: `Python Inheritance

Inheritance allows us to define a class that inherits all the methods and properties from another class.

Parent class is the class being inherited from, also called base class.

Child class is the class that inherits from another class, also called derived class.

Create a Parent Class
Any class can be a parent class, so the syntax is the same as creating any other class:

ExampleGet your own Python Server
Create a class named Person, with firstname and lastname properties, and a printname method:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname()
Create a Child Class
To create a class that inherits the functionality from another class, send the parent class as a parameter when creating the child class:

Example
Create a class named Student, which will inherit the properties and methods from the Person class:

class Student(Person):
  pass
Note: Use the pass keyword when you do not want to add any other properties or methods to the class.

Now the Student class has the same properties and methods as the Person class.

Example
Use the Student class to create an object, and then execute the printname method:

x = Student("Mike", "Olsen")
x.printname()

Add the __init__() Function
So far we have created a child class that inherits the properties and methods from its parent.

We want to add the __init__() function to the child class (instead of the pass keyword).

Note: The __init__() function is called automatically every time the class is being used to create a new object.

Example
Add the __init__() function to the Student class:

class Student(Person):
  def __init__(self, fname, lname):
    #add properties etc.
When you add the __init__() function, the child class will no longer inherit the parent's __init__() function.

Note: The child's __init__() function overrides the inheritance of the parent's __init__() function.

To keep the inheritance of the parent's __init__() function, add a call to the parent's __init__() function:

Example
class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname)
Now we have successfully added the __init__() function, and kept the inheritance of the parent class, and we are ready to add functionality in the __init__() function.

Use the super() Function
Python also has a super() function that will make the child class inherit all the methods and properties from its parent:

Example
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
By using the super() function, you do not have to use the name of the parent element, it will automatically inherit the methods and properties from its parent.

Add Properties
Example
Add a property called graduationyear to the Student class:

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
    self.graduationyear = 2019
In the example below, the year 2019 should be a variable, and passed into the Student class when creating student objects. To do so, add another parameter in the __init__() function:

Example
Add a year parameter, and pass the correct year when creating objects:

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

x = Student("Mike", "Olsen", 2019)
Add Methods
Example
Add a method called welcome to the Student class:

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.`,
    },
    {
      name: "Python Modules",
      content: `What is a Module?
Consider a module to be the same as a code library.

A file containing a set of functions you want to include in your application.

Create a Module
To create a module just save the code you want in a file with the file extension .py:

ExampleGet your own Python Server
Save this code in a file named mymodule.py

def greeting(name):
  print("Hello, " + name)
Use a Module
Now we can use the module we just created, by using the import statement:

Example
Import the module named mymodule, and call the greeting function:

import mymodule

mymodule.greeting("Jonathan")
Note: When using a function from a module, use the syntax: module_name.function_name.

Variables in Module
The module can contain functions, as already described, but also variables of all types (arrays, dictionaries, objects etc):

Example
Save this code in the file mymodule.py

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}
Example
Import the module named mymodule, and access the person1 dictionary:

import mymodule

a = mymodule.person1["age"]
print(a)
ADVERTISEMENT

Naming a Module
You can name the module file whatever you like, but it must have the file extension .py

Re-naming a Module
You can create an alias when you import a module, by using the as keyword:

Example
Create an alias for mymodule called mx:

import mymodule as mx

a = mx.person1["age"]
print(a)
Built-in Modules
There are several built-in modules in Python, which you can import whenever you like.

Example
Import and use the platform module:

import platform

x = platform.system()
print(x)
Using the dir() Function
There is a built-in function to list all the function names (or variable names) in a module. The dir() function:

Example
List all the defined names belonging to the platform module:

import platform

x = dir(platform)
print(x)
Note: The dir() function can be used on all modules, also the ones you create yourself.

Import From Module
You can choose to import only parts from a module, by using the from keyword.

Example
The module named mymodule has one function and one dictionary:

def greeting(name):
  print("Hello, " + name)

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}
Example
Import only the person1 dictionary from the module:

from mymodule import person1

print (person1["age"])`,
    },
  ],
};
export default pythonData;
