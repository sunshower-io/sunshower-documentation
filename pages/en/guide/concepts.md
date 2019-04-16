---
order: 2
---
# Concepts

Sunshower.io aims to provide a common language across all supported clouds.  To that end, we've modified some of the terminology
that you may already be familiar with (sorry, we'll only do it once!), in addition to adding a few of our own ideas!

## Cost Optimization

You have options when you purchase a computer for your home.  How much memory (RAM) do you need?  How much processing power (CPUs)?  How fast of a network connection do you need?
The requirements for a video editing professional's workstation are different from the kid's homework PC.  For your home computers, 
it might not matter very much if you overpay by $50 for the same computer, or a similar one (even if that's never fun).

If you need to purchase PCs for an entire school district, overpaying by $50 per PC can break the budget.  But just like purchasing
for your home, it can be hard or impossible to sift through the dozens of vendors, dozens of manufacturers, 
and hundreds of configurations to find exactly the right computer at the lowest price.




## Workload

Say that two of your hobbies are video editing and reading e-books. Clearly, each of these activities will require different 
resources from your computer.  Home computers have highly-variable workloads, which is why 
people typically own computers that are substantially more powerful than what they need _on average_.  
In the cloud the reality can be quite different: workloads are frequently pretty predictable.  Say, on average, 
your database serves ~1000 requests/second, and 1 time-unit in 1000 it serves 10,000 requests/second.

You might measure the CPU, Disk, Memory, and Network utilization for the average case and the 1 in 1000 case and, 
if you do you can say a lot about that database workload just from that information.  We call whatever utilization of
each of those features, (CPU, Disk, Memory, Network), at each of the measured times, `components` of the `shape` of the workload.



## Instance

An instance is a virtual or physical server hosted on some public cloud.  Different clouds call instances different things, for example:
1. Heroku calls instances `Dynos`
1. AWS calls instances `EC2 Instances`
1. Azure calls instances `Virtual Machines`
1. Google Cloud calls instances `Virtual Machines`


In general, when Sunshower.io publishes a plugin for a given cloud, it translates their notion of an `instance`, whatever
that may be, to _our_ notion of an instance.  So, if you have the Heroku plugin installed, Sunshower.io will manage your Dynos 
as Sunshower instances.  The goal is that you can manage the notion of a server in the cloud exactly the same way, regardless of which
cloud it's actually on.




## Instance Class

Every cloud provider has a notion of `instance class`--that is, the physical capabilities of the `instance` that you're
purchasing from them.  AWS, for example, has 3 instance classes with 2 GB of memory (a1.medium, t3.small, t2.small), but each of these instance classes
has different combinations of CPU and networking.  Importantly, each also has a different price.

| Instance Class    | CPU           | Disk  | Memory | Network | Cost/Month (approx) |
| -------------     |:-------------:| -----:| ------:| -------:| -------------------:|
| A1.Medium         | 1 vCPU        | EBS   | 2 GB   | 10 GB   | ~19.12              |
| T3.Small          | 2             | EBS   | 2 GB   |  (low)  | ~15.60              |
| T2.Small          | 2             | EBS   | 2 GB   |  (low)  | ~17.25              |

Likewise, Azure has at least 4 instances with 2 GB of memory.  Moreover, each instance class offerings differ from region
to region within the same cloud.


## Instance Class/Workload Optimization or "Workload Alignment"

One of the most important things Sunshower.io does is align the _workloads_ on _instances_ with _instance classes_.  
In our workload example, we had a few `moments` (average, 99.9th percentile) 
for each of several `components` (CPU, Disk, Memory, Network) of the `shape` of a workload (database). 
Next, we have to consider which `instance` you're currently using to run that workload, and ask ourselves 

    Given each of the configured moments for each of the 
    configured components of the workload, what's the
    least-expensive instance that will contain each of 
    those components out of all the available instances?
    
    
Everyone performing Workload Alignment (probably) has a different mechanism for figuring this out. 
Anvil, Sunshower.io's Optimizer, has saved our users an average of ~65% and a maximum of 94% when performing workload alignment.



    
    
    








