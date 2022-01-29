# MixedMessages_CodeAcademyPortfolio

Git README by L. Lyon

# Randomised Movie Quote Message Generator
A portfolio made for the CodeAcademy Full Stack Developer Path

## Prerequisites:
    * Javascript
    * Git (Git Bash)
    * NodeJS

## Initial Idea
The first idea was to create a series of strings that would be read with the String indexOf, LastIndexOf and Split Methods so it can be stored and randomised into an array, but I figured it would be too time consuming for such a small program so I stored the quotes in their own Arrays to make the randomisation process easier.

### Explanation:
The quotes would have its own function that would have worked as follows:

1. Read the quote until after you reach the comma. Store that in a defined array as 0.
2. Read the quote after comma until you reach either '.', '!' or '?' and remove the characters in reverse until you reach the last space (' ').Store that in the array as 1.
3. Like previously, read the string backwards until you reach the last space and store that in the array as 2.

Finally you would print the array using concatination. The second part I couldn't figure out and spent way too much time reading documentation on it, so I decided not to waste any more time on it.

## How it works
First an object is declared with 3 quotes individually stored as arrays of 3.
Rather than storing the quotes as lone strings in an object, I stored them as arrays that can be rearranged upon execution easier. This saves me from having to read and store the seperate strings into an array within a nested loop or potentially a second function.

In the function, three things happen;
* The randomisation of an integer varable that represents the quote in the object
* A while loop where the counter represents the position of that array within the selected property
* A switch statement that determines what quote is selected

Because the counter counts until 2, every iteration of the randomly selected quote is in conjunction with the sentence's formatting (so it makes sense!). So when we run the program, the quotes are in order to create a humorous response.

#### Quotes:
Star Wars: "No, I am your father!"
Predator: "RAAARGH, get to the Chopper!"
Iron Man 2: "Jarvis, check the heart!"

#### Example Output:
    "No, get to the heart!"