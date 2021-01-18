# 03_PasswordGenerator
The third homework assignment for the University of Denver coding bootcamp. The objective is to adjust the code to create a working password generator.

DESCRIPTION
The goal of this project was to create a random password generator. 

I started by designing the process to request user input for the password length and then verifying that it meets the requirements (a length of 8 or more, and no more than 128). I decided to include a specific error message for password lengths that were too short, too long, or invalid entries. 

Then I created the confirm windows for user entry to decide whether the password will include lowercase letters, uppercase letters, special characters, or numbers. When a user selected one of the options I then pushed that string of characters into an array I will use to randomly generate the password.

Then using the array of selected characters I used a for loop to randomly select a character repeatedly until the password length is equal to the length requested by the user.

Finally, I displayed the random password using the writePassword function.

To view the random password generator visit https://gquak.github.io/03_PasswordGenerator/


INSTALLATION
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

USAGE
When you open the index.html file, a small webpage should look similar to this screenshot:




CREDITS
This project was developed for use in the University of Denver's Coding Bootcamp by Gabe Quakkelaar.


MIT LICENSE

Copyright (c) 2021 Gabe Quakkelaar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.