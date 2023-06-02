# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- I checked and if there's no event, by default is assigning the `TRIVIAL_PARTITION_KEY` value, so I validated this from the start and returned the value right there.
- I removed unnecessary nested if statements and used a newest JS features (optional chaining and or logical OR operator) also removed the declaration of data since is only being used here and passed directly.
- I also renamed to `partitionKey` the `candidate` variable because I think this way is more readable.

Since I didn't have real examples of inputs for the testing, I just entered some random/1hash values but I checked different inputs with the previous version and the were doing the same, also I don't really know which other cases can be validated because of the `TRIVIAL_PARTITION_KEY`.
