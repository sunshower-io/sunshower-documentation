---
order: 2
---
# Concepts

Sunshower.io aims to provide a common language across all supported clouds.  To that end, we've modified some of the terminology
that you may already be familiar with (sorry, we'll only do it once!), in addition to adding a few of our own ideas!

## Price Optimization

You have options when you purchase a computer for your home.  How much memory (RAM) do you need?  How much processing power (CPUs)?  How fast of a network connection do you need?
The requirements for a video editing professional's workstation are different from the kid's homework PC.  For your home computers, 
it might not matter very much if you overpay by $50 for the same computer, or a similar one (even if that's never fun).

If you need to purchase PCs for an entire school district, overpaying by $50 per PC can break the budget.  But just like purchasing
for your home, it can be hard or impossible to sift through the dozens of vendors, dozens of manufacturers, 
and hundreds of configurations to find exactly the right computer at the lowest price.





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


