const cppData = {
  title: "C++ Course",
  topics: [
    {
      name: "C++ Introduction",
      content: `What is C++?
      C++ is a cross-platform language that can be used to create high-performance applications.

C++ was developed by Bjarne Stroustrup, as an extension to the C language.

C++ gives programmers a high level of control over system resources and memory.

The language was updated 5 major times in 2011, 2014, 2017, 2020, and 2023 to C++11, C++14, C++17, C++20, and C++23.

Why Use C++
C++ is one of the world's most popular programming languages.

C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.

C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.

C++ is portable and can be used to develop applications that can be adapted to multiple platforms.

C++ is fun and easy to learn!

As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.

Difference between C and C++
C++ was developed as an extension of C, and both languages have almost the same syntax.

The main difference between C and C++ is that C++ supports classes and objects, while C does not.

Get Started
This tutorial will teach you the basics of C++.

When you are finished with this tutorial, you will be able to write C++ programs and create real-life examples.

It is not necessary to have any prior programming experience.`,
    },
    {
      name: "C++ Getting Started",
      content: `C++ Get Started
To start using C++, you need two things:

A text editor, like Notepad, to write C++ code
A compiler, like GCC, to translate the C++ code into a language that the computer will understand
There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).

C++ Install IDE
An IDE (Integrated Development Environment) is used to edit AND compile the code.

Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.

Note: Web-based IDE's can work as well, but functionality is limited.

We will use Code::Blocks in our tutorial, which we believe is a good place to start.

You can find the latest version of Codeblocks at http://www.codeblocks.org/. Download the mingw-setup.exe file, which will install the text editor with a compiler.

C++ Quickstart
Let's create our first C++ file.

Open Codeblocks and go to File > New > Empty File.

Write the following C++ code and save the file as myfirstprogram.cpp (File > Save File as):

myfirstprogram.cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.

Then, go to Build > Build and Run to run (execute) the program. The result will look something to this:

Hello World!
Process returned 0 (0x0) execution time : 0.011 s
Press any key to continue.
Congratulations! You have now written and executed your first C++ program.

Learning C++ At W3Schools
When learning C++ at W3Schools.com, you can use our "Try it Yourself" tool, which shows both the code and the result. This will make it easier for you to understand every part as we move forward:

myfirstprogram.cpp
Code:

#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
Result:

Hello World!`,
    },
    {
      name: "C++ Syntax",
      content: `C++ Syntax

Let's break up the following code to understand it better:

Example
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
Example explained
Line 1: #include <iostream> is a header file library that lets us work with input and output objects, such as cout (used in line 5). Header files add functionality to C++ programs.

Line 2: using namespace std means that we can use names for objects and variables from the standard library.

Don't worry if you don't understand how #include <iostream> and using namespace std works. Just think of it as something that (almost) always appears in your program.

Line 3: A blank line. C++ ignores white space. But we use it to make the code more readable.

Line 4: Another thing that always appear in a C++ program is int main(). This is called a function. Any code inside its curly brackets {} will be executed.

Line 5: cout (pronounced "see-out") is an object used together with the insertion operator (<<) to output/print text. In our example, it will output "Hello World!".

Note: C++ is case-sensitive: "cout" and "Cout" has different meaning.

Note: Every C++ statement ends with a semicolon ;.

Note: The body of int main() could also been written as:
int main () { cout << "Hello World! "; return 0; }

Remember: The compiler ignores white spaces. However, multiple lines makes the code more readable.

Line 6: return 0; ends the main function.

Line 7: Do not forget to add the closing curly bracket } to actually end the main function.

Omitting Namespace
You might see some C++ programs that runs without the standard namespace library. The using namespace std line can be omitted and replaced with the std keyword, followed by the :: operator for some objects:

Example
#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}`,
    },
    {
      name: "C++ Statements",
      content: `C++ Statements
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

The following statement "instructs" the compiler to print the text "Hello World" to the screen:

Example
cout << "Hello World!";
It is important that you end the statement with a semicolon ;

If you forget the semicolon (;), an error will occur and the program will not run:

Example
cout << "Hello World!"
error: expected ';' before 'return'

Many Statements
Most C++ programs contain many statements.

The statements are executed, one by one, in the same order as they are written:

Example
cout << "Hello World!";
cout << "Have a good day!";
return 0;
Example explained
From the example above, we have three statements:

cout << "Hello World!";
cout << "Have a good day!";
return 0;`,
    },
    {
      name: "C++ Data Types",
      content: `C++ Data Types

As explained in the Variables chapter, a variable in C++ must be a specified data type:

Example
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99;     // Floating point number
double myDoubleNum = 9.98;   // Floating point number
char myLetter = 'D';         // Character
bool myBoolean = true;       // Boolean
string myText = "Hello";     // String
// C++ Numeric Data Types
Numeric Types
Use int when you need to store a whole number without decimals, like 35 or 1000, and float or double when you need a floating point number (with decimals), like 9.99 or 3.14515.

int
int myNum = 1000;
cout << myNum;
float
float myNum = 5.75;
cout << myNum;
double
double myNum = 19.99;
cout << myNum;
float vs. double

The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of float is only six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore it is safer to use double for most calculations.

Scientific Numbers
A floating point number can also be a scientific number with an "e" to indicate the power of 10:

Example
float f1 = 35e3;
double d1 = 12E4;
cout << f1;
cout << d1;
C++ Boolean Data Types
Boolean Types
A boolean data type is declared with the bool keyword and can only take the values true or false.

When the value is returned, true = 1 and false = 0.

Example
bool isCodingFun = true;
bool isFishTasty = false;
cout << isCodingFun;  // Outputs 1 (true)
cout << isFishTasty;  // Outputs 0 (false)
// 
// C++ Character Data Types
Character Types
The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':

Example
char myGrade = 'B';
cout << myGrade;
Alternatively, if you are familiar with ASCII, you can use ASCII values to display certain characters:

Example
char a = 65, b = 66, c = 67;
cout << a;
cout << b;
cout << c;
C++ String Data Types
String Types
The string type is used to store a sequence of characters (text). This is not a built-in type, but it behaves like one in its most basic usage. String values must be surrounded by double quotes:

Example
string greeting = "Hello";
cout << greeting;
To use strings, you must include an additional header file in the source code, the <string> library:

Example
// Include the string library
#include <string>

// Create a string variable
string greeting = "Hello";

// Output string value
cout << greeting;`,
    },
    {
      name: "C++ Operators",
      content: `C++ Operators

Operators are used to perform operations on variables and values.

In the example below, we use the + operator to add together two values:

Example
int x = 100 + 50;
Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:

Example
int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)
C++ divides the operators into the following groups:

Arithmetic operators
Assignment operators
Comparison operators
Logical operators
Bitwise operators
Arithmetic Operators
Arithmetic operators are used to perform common mathematical operations.
+	    Addition	Adds together two values	                x + y	
-	    Subtraction	Subtracts one value from another	      x - y	
*	    Multiplication	Multiplies two values	              x * y	
/    	Division	Divides one value by another	            x / y	
%    	Modulus	Returns the division remainder	            x % y	
++	  Increment	Increases the value of a variable by 1	  ++x	
--	  Decrement	Decreases the value of a variable by 1	  --x
Assignment Operators
Assignment operators are used to assign values to variables.

In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:

Example
int x = 10;
Comparison Operators
Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.

The return value of a comparison is either 1 or 0, which means true (1) or false (0). These values are known as Boolean values, and you will learn more about them in the Booleans and If..Else chapter.

In the following example, we use the greater than operator (>) to find out if 5 is greater than 3:

Example
int x = 5;
int y = 3;
cout << (x > y); // returns 1 (true) because 5 is greater than 3
Logical Operators
As with comparison operators, you can also test for true (1) or false (0) values with logical operators.

Logical operators are used to determine the logic between variables or values:

Operator	Name	Description	                                                       Example	
   && 	        Logical and	Returns true if both statements are true	             x < 5 &&  x < 10	
  || 	          Logical or	Returns true if one of the statements is true	         x < 5 || x < 4	
   !	          Logical not	Reverse the result, returns false if the result is true	!(x < 5 && x < 10)   

`,
    },
    {
      name: "C++ Switch",
      topic: `C++ Switch Statements
Use the switch statement to select one of many code blocks to be executed.

Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
This is how it works:

The switch expression is evaluated once
The value of the expression is compared with the values of each case
If there is a match, the associated block of code is executed
The break and default keywords are optional, and will be described later in this chapter
The example below uses the weekday number to calculate the weekday name:

Example
int day = 4;
switch (day) {
  case 1:
    cout << "Monday";
    break;
  case 2:
    cout << "Tuesday";
    break;
  case 3:
    cout << "Wednesday";
    break;
  case 4:
    cout << "Thursday";
    break;
  case 5:
    cout << "Friday";
    break;
  case 6:
    cout << "Saturday";
    break;
  case 7:
    cout << "Sunday";
    break;
}
// Outputs "Thursday" (day 4)
The break Keyword
When C++ reaches a break keyword, it breaks out of the switch block.

This will stop the execution of more code and case testing inside the block.

When a match is found, and the job is done, it's time for a break. There is no need for more testing.

A break can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.


The default Keyword
The default keyword specifies some code to run if there is no case match:

Example
int day = 4;
switch (day) {
  case 6:
    cout << "Today is Saturday";
    break;
  case 7:
    cout << "Today is Sunday";
    break;
  default:
    cout << "Looking forward to the Weekend";
}
// Outputs "Looking forward to the Weekend"`,
    },
    {
      name: "C++ OOP",
      content: `C++ What is OOP?
OOP stands for Object-Oriented Programming.

Procedural programming is about writing procedures or functions that perform operations on the data, while object-oriented programming is about creating objects that contain both data and functions.

Object-oriented programming has several advantages over procedural programming:

OOP is faster and easier to execute
OOP provides a clear structure for the programs
OOP helps to keep the C++ code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
OOP makes it possible to create full reusable applications with less code and shorter development time
Tip: The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.

`,
    },
    {
      name: "C++ Classes and Objects",
      content: `C++ Classes/Objects
C++ is an object-oriented programming language.

Everything in C++ is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has attributes, such as weight and color, and methods, such as drive and brake.

Attributes and methods are basically variables and functions that belongs to the class. These are often referred to as "class members".

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

Create a Class
To create a class, use the class keyword:

Example
Create a class called "MyClass":

class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};
Example explained
The class keyword is used to create a class called MyClass.
The public keyword is an access specifier, which specifies that members (attributes and methods) of the class are accessible from outside the class. You will learn more about access specifiers later.
Inside the class, there is an integer variable myNum and a string variable myString. When variables are declared within a class, they are called attributes.
At last, end the class definition with a semicolon ;.
Create an Object
In C++, an object is created from a class. We have already created the class named MyClass, so now we can use this to create objects.

To create an object of MyClass, specify the class name, followed by the object name.

To access the class attributes (myNum and myString), use the dot syntax (.) on the object:

Example
Create an object called "myObj" and access the attributes:

class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;  // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15; 
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\n";
  cout << myObj.myString;
  return 0;
}
ADVERTISEMENT

Multiple Objects
You can create multiple objects of one class:

Example
// Create a Car class with some attributes
class Car {
  public:
    string brand;   
    string model;
    int year;
};

int main() {
  // Create an object of Car
  Car carObj1;
  carObj1.brand = "BMW";
  carObj1.model = "X5";
  carObj1.year = 1999;

  // Create another object of Car
  Car carObj2;
  carObj2.brand = "Ford";
  carObj2.model = "Mustang";
  carObj2.year = 1969;

  // Print attribute values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}`,
    },
    {
      name: "C++ Constructors",
      content: `Constructors
A constructor in C++ is a special method that is automatically called when an object of a class is created.

To create a constructor, use the same name as the class, followed by parentheses ():

Example
class MyClass {     // The class
  public:           // Access specifier
    MyClass() {     // Constructor
      cout << "Hello World!";
    }
};

int main() {
  MyClass myObj;    // Create an object of MyClass (this will call the constructor)
  return 0;
}
Note: The constructor has the same name as the class, it is always public, and it does not have any return value.

Constructor Parameters
Constructors can also take parameters (just like regular functions), which can be useful for setting initial values for attributes.

The following class have brand, model and year attributes, and a constructor with different parameters. Inside the constructor we set the attributes equal to the constructor parameters (brand=x, etc). When we call the constructor (by creating an object of the class), we pass parameters to the constructor, which will set the value of the corresponding attributes to the same:

Example
class Car {        // The class
  public:          // Access specifier
    string brand;  // Attribute
    string model;  // Attribute
    int year;      // Attribute
    Car(string x, string y, int z) { // Constructor with parameters
      brand = x;
      model = y;
      year = z;
    }
};

int main() {
  // Create Car objects and call the constructor with different values
  Car carObj1("BMW", "X5", 1999);
  Car carObj2("Ford", "Mustang", 1969);

  // Print values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}
Just like functions, constructors can also be defined outside the class. First, declare the constructor inside the class, and then define it outside of the class by specifying the name of the class, followed by the scope resolution :: operator, followed by the name of the constructor (which is the same as the class):

Example
class Car {        // The class
  public:          // Access specifier
    string brand;  // Attribute
    string model;  // Attribute
    int year;      // Attribute
    Car(string x, string y, int z); // Constructor declaration
};

// Constructor definition outside the class
Car::Car(string x, string y, int z) {
  brand = x;
  model = y;
  year = z;
}

int main() {
  // Create Car objects and call the constructor with different values
  Car carObj1("BMW", "X5", 1999);
  Car carObj2("Ford", "Mustang", 1969);

  // Print values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}`,
    },
    {
      name: "C++ Encapsulation",
      content: `Encapsulation
The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must declare class variables/attributes as private (cannot be accessed from outside the class). If you want others to read or modify the value of a private member, you can provide public get and set methods.

Access Private Members
To access a private attribute, use public "get" and "set" methods:

Example
#include <iostream>
using namespace std;

class Employee {
  private:
    // Private attribute
    int salary;

  public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
    // Getter
    int getSalary() {
      return salary;
    }
};

int main() {
  Employee myObj;
  myObj.setSalary(50000);
  cout << myObj.getSalary();
  return 0;
}
Example explained
The salary attribute is private, which have restricted access.

The public setSalary() method takes a parameter (s) and assigns it to the salary attribute (salary = s).

The public getSalary() method returns the value of the private salary attribute.

Inside main(), we create an object of the Employee class. Now we can use the setSalary() method to set the value of the private attribute to 50000. Then we call the getSalary() method on the object to return the value.

Why Encapsulation?
It is considered good practice to declare your class attributes as private (as often as you can). Encapsulation ensures better control of your data, because you (or others) can change one part of the code without affecting other parts
Increased security of data`,
    },
    {
      name: "C++ Polymorphism",
      content: `Polymorphism
Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

Like we specified in the previous chapter; Inheritance lets us inherit attributes and methods from another class. Polymorphism uses those methods to perform different tasks. This allows us to perform a single action in different ways.

For example, think of a base class called Animal that has a method called animalSound(). Derived classes of Animals could be Pigs, Cats, Dogs, Birds - And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):

Example
// Base class
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

// Derived class
class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};

// Derived class
class Dog : public Animal {
  public:
    void animalSound() {
      cout << "The dog says: bow wow \n";
    }
};
Remember from the Inheritance chapter that we use the : symbol to inherit from a class.

Now we can create Pig and Dog objects and override the animalSound() method:

Example
// Base class
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

// Derived class
class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};

// Derived class
class Dog : public Animal {
  public:
    void animalSound() {
      cout << "The dog says: bow wow \n";
    }
};

int main() {
  Animal myAnimal;
  Pig myPig;
  Dog myDog;

  myAnimal.animalSound();
  myPig.animalSound();
  myDog.animalSound();
  return 0;
}`,
    },
    {
      name: "C++ Exceptions",
      content: `C++ Exceptions

When executing C++ code, different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.

When an error occurs, C++ will normally stop and generate an error message. The technical term for this is: C++ will throw an exception (throw an error).

C++ try and catch
Exception handling in C++ consist of three keywords: try, throw and catch:

The try statement allows you to define a block of code to be tested for errors while it is being executed.

The throw keyword throws an exception when a problem is detected, which lets us create a custom error.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The try and catch keywords come in pairs:

Example
try {
  // Block of code to try
  throw exception; // Throw an exception when a problem arise
}
catch () {
  // Block of code to handle errors
}
Consider the following example:

Example
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw (age);
  }
}
catch (int myNum) {
  cout << "Access denied - You must be at least 18 years old.\n";
  cout << "Age is: " << myNum;
}
Example explained
We use the try block to test some code: If the age variable is less than 18, we will throw an exception, and handle it in our catch block.

In the catch block, we catch the error and do something about it. The catch statement takes a parameter: in our example we use an int variable (myNum) (because we are throwing an exception of int type in the try block (age)), to output the value of age.

If no error occurs (e.g. if age is 20 instead of 15, meaning it will be be greater than 18), the catch block is skipped:

Example
int age = 20;
You can also use the throw keyword to output a reference number, like a custom error number/code for organizing purposes (505 in our example):

Example
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw 505;
  }
}
catch (int myNum) {
  cout << "Access denied - You must be at least 18 years old.\n";
  cout << "Error number: " << myNum;
}
Handle Any Type of Exceptions (...)
If you do not know the throw type used in the try block, you can use the "three dots" syntax (...) inside the catch block, which will handle any type of exception:

Example
try {
  int age = 15;
  if (age >= 18) {
    cout << "Access granted - you are old enough.";
  } else {
    throw 505;
  }
}
catch (...) {
  cout << "Access denied - You must be at least 18 years old.\n";
}`,
    },
  ],
};
export default cppData;
