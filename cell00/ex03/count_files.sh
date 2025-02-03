#!/bin/bash

# Count all files and directories (excluding hidden ones)
count=$(find . -maxdepth 1 -type f -o -type d | wc -l)

# Display the result
echo "$count"
