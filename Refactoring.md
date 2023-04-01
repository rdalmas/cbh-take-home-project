# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The refactoring consisted in breaking the function into parts. Creating a hash is an important part of the function, thus it was possible to separate into its own function. Then logical errors were fixed and the code was given more clarity compared to how it was before. Constants were separated from the function to be defined on top of the file and candidate was given a default parameter too. Finally, catching errors and throwing it properly was the final part of the refactoring, to properly catch on when something wrong happens. Tests reflected that, improving the code coverage overall but unfortunatelly missing the last test scenario of the error. 