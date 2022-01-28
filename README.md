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
The function would have worked as follows:

1. Read the quote until after you reach the comma. Store that in a defined array as 0.
2. Read the quote after comma until you reach either '.', '!' or '?' and remove the characters in reverse until you reach the last space (' ').Store that in the array as 1.
3. Like previously, read the string backwards until you reach the last space and store that in the array as 2.

Finally you would print the array using concatination. The second part I couldn't figure out and spent way too much time reading documentation on it, so I decided not to waste any more time on it.