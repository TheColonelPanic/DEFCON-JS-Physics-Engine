# Lets Build a Physics Engine in Javascript Because Fuck It

in order for this engine to feel complete I feel we will need the following capabilities:
- Impliment vectors for locomotion
- Impliment forces like drag / gravity
- Angular motion like oscillation / 
- Multi-Particle systems using `ArrayList`, Inheritance, and Polymorphism 
- Steering forces for Autonomous Agents

## Lets Start By Building Out a "Random Walker"

This will serve as a basic test of dealing with a single agent and changing their location over time as a form of locomotion. This will be done by storing the `(x,y)` position of an agent and changing these values based on some random variable.

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