# Practice In The Terminal

## The Command Line[^1]

What is it?
- The command line is a a text based interface to the system.
- Inside the command line, is the shell. 
  -  The shell is the part of the system that defines how the terminal will behave and look. 
- The most common shell is called `bash`, **B**ourne **A**gain **S**hell

Tip: 
> You can use shortcuts!  Each command you enter is stored in memory.  You can navigate these commands by using the ⬆ and ⬇ keys.

## Basic Navigation[^2]

Some Useful Commands:
1. `pwd` - stands for **P**rint **W**orking **D**irectory, and it does just that
2. `ls` - stands for **list**, this shows you what you have in your current directory.  You can type it just like this, or it can take up to 2 optional parameters
3. `cd` - stands for **C**hange **D**irectory.  You just type `cd <location>` and voila.

There are also two types of paths we can use, `relative` and `absolute`.
- `absolute` paths specify a location in relation to the `root` directory
- `relative` paths specify a location in relation to where the user is at that time in the system.

Path Shortcuts:
- `~` - shorcut to your home directory
- `.` - reference to your current directory
- `..` - reference to the parent directory

## More About Files[^3]

EVERYTHING is a FILE!!

Everything really is, a file! 

Most files have extensions which systems can use to tell what type of file it is.  Linux however, is an extensionless system and actually looks inside the file to determine its type.

More about Linux:
- It is case sensitive
- Spaces in directory and file names are ok, but need to be either wrapped in quotes or be used with escape characters.
- `file` command is used to get information about what type of file a file or directory is.
- Hidden files are ok, and can be set by simply placing a `.` in front.
- `ls -a` command is used to list the contents of a directory, inlcuding the hidden ones. 

## Manual Pages[^4]

_What Are They?_

- They are a set of pages that are there to explain every command available in your system.  This includes:
   1. What they do 
   2. How you run them
   3. What arguments they accept
  
You can invoke the manual pages with this command:
> `man <command to look up>`

Or, if you want to look up a command using a keyword (if you don't remember the exact syntax of a command), then you can type this:
> `man -k <key word/search term>`

## File Manipulation[^5]

Here is where the fun starts!  
Now that we have learned about the command line and how to navigate it a bit, what else can we do?  Below are some commands that we can use to make, move and delete files.

- `mkdir` - this command is used to **create** a new directory
- `rmdir` - this command is used to **delete** a directory
- `touch` - this command is used to **create** a new file
- `cp` - this command is used to **copy** a file or directory
- `mv` - this command is used to **move** a file or directory (also to rename them)
- `rm` - this command is used to **delete** a file

Note:  There is no "undo" command, so be careful when you are deleting things!

## Cheat Sheet[^6]

This last page in [Ryans Tutorials](https://ryanstutorials.net/linuxtutorial/cheatsheet.php) is especially helpful.  I am happy with the notes I took, and even included some of the key terms/commands.  I am including this link as well, as it is an excellent "cheat sheet" that contains a useful list of all the most important terms and commands on one page.



Click [HERE](README.md) to go back to the home page.

[^1]: [The Command Line](https://ryanstutorials.net/linuxtutorial/commandline.php)

[^2]: [Basic Navigation](https://ryanstutorials.net/linuxtutorial/navigation.php)

[^3]: [More About Files](https://ryanstutorials.net/linuxtutorial/aboutfiles.php)

[^4]: [Manual Pages](https://ryanstutorials.net/linuxtutorial/manual.php)

[^5]: [File Manipulation](https://ryanstutorials.net/linuxtutorial/filemanipulation.php)

[^6]: [Cheat Sheet](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)