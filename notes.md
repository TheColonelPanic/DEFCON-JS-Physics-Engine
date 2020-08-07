# Lets Build a Physics Engine in JavaScript Because Fuck It

in order for this engine to feel complete I feel we will need the following capabilities:
- Implement vectors for locomotion
- Implement forces like drag / gravity
- Angular motion like oscillation / 
- Multi-Particle systems using `ArrayList`, Inheritance, and Polymorphism 
- Steering forces for Autonomous Agents

## Lets Start By Building Out a "Random Walker"

This will serve as a basic test of dealing with a single agent and changing their location over time as a form of locomotion. This will be done by storing the `(x,y)` position of an agent and changing these values based on some random variable. The end result is a single agent that moves around the screen at random with each direction (U,D,L,R) having a 25% chance of being selected. But this isn't very natural, rarely is nature truly random. So lets spice it up a bit

## Probability in Nature
----------------------

### Constraining Math.Random()
Random shouldn't always be random. Imposing some simple constraints on the random function can provide us with a system that more accurately mirrors the behavioral patterns and variance that we see in nature.

You can set custom weights to probability of `random()` like this:
- `if (random(1) < 0.01){}` would yield a probability of 1%
- `if (random(100) < 38){}` would yield a probability of 38%

### Gaussian Distributions
If however we want to get a more Gaussian (normal) distribution, as is so common in nature, we can actually use a Box–Muller transform to yield a set of Gaussian distributed numbers, given a source of uniformly distributed numbers like we would get from `random()`. Below is the method I will be using to generate Gaussian Distributions:

```js
// Standard Normal variate using Box-Muller transform.
function rand_gaus() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}
```

more info can be found here: https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform

### Custom Distributions

If you want even more control you can set custom distibutions. There are two primary methods for achieving this. The first is by crafting an array with a distrobution of elements that mirrors the probabily distribution you want and then picking an element at random. For example...

If you wanted:
- `30% chance` of a `1`
- `10% chance` of a `2`
- `50% chance` of a `3`
- `10% chance` of a `4`

Then you would build an array like this: `[1,1,1,2,3,3,3,3,3,4]`

Pulling any element out of the array at random would match the probabilities desired. This method though simple, is inelegant and not scalable or presise. A much better method would be to generate two randoms numbers and compare their values in a way that incentivises the outcome we desire. For example...

If we desire a distribution that favors higher numbers then we generate two random numbers `(r1,r2)` and only except the value of `r1` if `r1 > r2`. So long as the range was the same for both numbers this method of generation would favor high numbers. Changing the ranges of `r1` and `r2` can shift this bias. You can also adjust the comparison to change the distribution.

### Perlin Noise

our last option for random inputs is perlin noise. Perlin noise is nice becuase though it is still random, the values change smootly as a function of time and therefore you can move an agent around the screen smoothly while avoiding the random jumps that would occur if you were to change their position truly randomly.


## Craig Reynolds: Steering Behaviors For Autonomous Agents
Reynolds thinks of his vehicles as acting with 3 steps

1. Action selection 
    look at the environment and choose an action
    based on that information

2. Steering
    Quite literally just a vector force to steer the agent

3. locomotion
    choose a movement scheme like Euler integration:
    (location velocity acceleration)

seeking behavior is when a target has a velocity and a target has a velocity
and a target and it adjusts the velocity to bring its position to the target

the steering force is defined as the desired velocity minus its current
velocity

the desired velocity is a vector who's direction points towards the target
and who's magnitude is the maximum speed value


class vehicle{
    location;
    velocity;
    acceleration;
    maxspeed;
    macforce;
}