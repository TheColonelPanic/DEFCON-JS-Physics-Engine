# Lets Build a Physics Engine in Javascript Because Fuck It

in order for this engine to feel complete I feel we will need the following capabilities:
- Impliment vectors for locomotion
- Impliment forces like drag / gravity
- Angular motion like oscillation / 
- Multi-Particle systems using `ArrayList`, Inheritance, and Polymorphism 
- Steering forces for Autonomous Agents

## Lets Start By Building Out a "Random Walker"

This will serve as a basic test of dealing with a single agent and changing their location over time as a form of locomotion. This will be done by storing the `(x,y)` position of an agent and changing these values based on some random variable.

## Probability in Nature

Random shouldnt always be random. Imposing some simple constraints on the random function can provide us with a system that more acturately mirrors the behavioral patterns and variance that we see in nature.

You can set custom weights to probability of `random()` like this:
- `if (random(1) < 0.01){}` would yield a probability of 1%
- `if (random(100) < 38){}` would yield a probability of 38%

If however we want to get a more Gaussian (normal) distrobution, as is so common in nature, we can actually use a Box–Muller transform to yield a set of gaussian distibuted numbers, given a source of uniformly distributed numbers like we would get from `random()`. Below is the method I will be using to generate Gausian Distobutions:

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


## Craig Reynolds: Steering Behaviors For Autonomous Agents
Reynolds thinks of his vehicles as acting with 3 steps

1. Action selection 
    look at the enviroment and choose an action
    based on that information

2. Steering
    Quite literally just a vector force to steer the agent

3. locomotion
    choose a movment scheme like euler integration:
    (location velocity acceletion)

seeking behavior is when a target has a velocity and a target has a velocity
and a target and it adjusts the velocity to bring its position to the target

the steering force is defined as the desired velocity minus its current
velocity

the desired velocity is a vector whos direction points towards the target
and who's magnitude is the maximum speed value


class vehicle{
    location;
    velocity;
    acceleration;
    maxspeed;
    macforce;
}