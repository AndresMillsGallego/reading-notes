# Getting Started with Git

Before we get too far we have to ask...what is Git?
To answer that question we need to talk about about another term which is **Version Control System**
    In essense, a Version Control System is a system that lets you revisit parts of a file in its various stages.  
    This makes revision, editing and trouble shooting much easier.  

* At first there were **Local Version Control (VCS)** systems that develpers made, but these were limited to the sole local hard disc.  
* Then the **Centralized Version Control (CVCS)** systems came to be due to the need for collaboration between programmers.  
* The CVCS while better than the VCS, still had one major problem and that was having it all on one server.  
    That meant that if the single server became compromized or corrupted all the work could be lost.  

**Distributed Version Control (DVCS)**

The DVCS is like the CVCS except it allows the creation of mirrored repositories which act as data backups.  
With this option along with the allowance of multiple mirrored repositories teams of programmers can work together much easier on a given project.

## So....What is Git?

Git is a DCVS that stores your data and files.  Think of it like snapshots of your file at different stages of its creation.  
Each time you save a file Git stores a reference to that change.  If no change is made, then no reference is saved!

Git uses mostly local operations since most of what you will need can be found on your system.  
This is also the most efficient method since there is no need to draw from an outside source.  You don't even need to have an internet connection!

Git tracks every single change made to a file or directory.  
It always knows if a change is made, even if you forget!

The command **git status** is exremely useful to check the status of the file you are working on.

### The Git Basics

Files in Git are kept in 3 stages.
* Committed
    * The data is stored locally
* Modified
    * The file has been changed but not committed to the database
* Staged
    * Flags a changed file to be committed



After checking the status of a file that we are working on, we use the following commands to sync or *push* our changes to the remote repository.

* Add
    * __git add filename.md__  
    (Replace "filename.md" with the file you are adding)

* Commit
    * __git commit -m "misc comment"__  
    (You can add any comment or note about the change you made)

* Push
    * __git push origin main__
    (This final command pushes the changed file to the remote repo)

At any time in this process you can utilize the *__git status__* command to check where you are at.  





Click [HERE](README.md) to go back to the home page.