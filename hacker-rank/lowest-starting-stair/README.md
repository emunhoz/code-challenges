## Lowest Starting Stair

A monkey is jumping on a long staircase, on which each stair is numbered; the bottommost stair being 1, the next stair being 2, and so on. In one jump, it can go some steps up or down. Given an array jumps of integers representing each jump of the monkey as: If _jumps[i] > 0_, the monkey jumps _jumps[i]_ steps up from its current step. If jumps[i] = 1.

##### Example
_jumps = [1, -4, -2, 3]_. If _startingStair=6_, the following results are obtained:
Stair jumps[i] 6 7 i -4 -2 3 1 m 3 4 For startingStair = 6, the stair number remains >=1 throughout the jumps. This is the least possible value of startingStair for the condition to be true. Therefore, the answer is 6. Function Description Complete the function findLowestStartingStair in the editor below. findLowestStartingStair has the following parameter: int jumps[n]: an array of integers Returns int: the minimum integer value for startingStair.
