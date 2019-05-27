#!/bin/bash
#1. Research how to create a hidden file and how to display it using ls command.

echo "To create a hidden file or folder"
mkdir .hiddenfolder
touch .hiddenfile

echo "To display hidden files or folders"
ls -a

# 2. Research how to create multiple nested directories with one mkdir command.
# E.g. How would you create 'fun' directory along with all directories in the path below:
# /c/Users/unmesh/these/folders/are/just/for/fun

echo "Make nested directories at once"
mkdir -p these/folders/are/just/for/fun


# # 3. Execute following commands terminal:
# # echo "test" > fun
# # echo "another test" >> fun
# # wc -c fun
# Verify number of characters in the file.

echo "test" > fun
echo "another test" >> fun
wc -c fun   # 18 fun

# 4. Research how to append something in the file *WITHOUT* a newline character.
# E.g.
# echo "test" > fun
# echo "another test" >> fun
# cat fun
# Output of "cat fun" is
# test
# another test

# How would you use echo command, so that output would be:
# testanother test

echo "Printing a text WITHOUT a newline with -n option"

echo -n "test" > foo
echo -n "another test" >>foo