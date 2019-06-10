(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("p",[e._v("Sunshower.io aims to provide a common language across all supported clouds.  To that end, we've modified some of the terminology\nthat you may already be familiar with (sorry, we'll only do it once!), in addition to adding a few of our own ideas!")]),e._v(" "),a("h2",{attrs:{id:"cost-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cost-optimization","aria-hidden":"true"}},[e._v("#")]),e._v(" Cost Optimization")]),e._v(" "),a("p",[e._v("You have options when you purchase a computer for your home.  How much memory (RAM) do you need?  How much processing power (CPUs)?  How fast of a network connection do you need?\nThe requirements for a video editing professional's workstation are different from the kid's homework PC.  For your home computers,\nit might not matter very much if you overpay by $50 for the same computer, or a similar one (even if that's never fun).")]),e._v(" "),a("p",[e._v("If you need to purchase PCs for an entire school district, overpaying by $50 per PC can break the budget.  But just like purchasing\nfor your home, it can be hard or impossible to sift through the dozens of vendors, dozens of manufacturers,\nand hundreds of configurations to find exactly the right computer at the lowest price.")]),e._v(" "),a("h2",{attrs:{id:"workload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workload","aria-hidden":"true"}},[e._v("#")]),e._v(" Workload")]),e._v(" "),a("p",[e._v("Say that two of your hobbies video editing and reading e-books. Clearly, each of these activities will require different\nresources from your computer.  Home computers have highly-variable workloads, which is why\npeople typically own computers that are substantially more powerful than what they need "),a("em",[e._v("on average")]),e._v("."),a("br"),e._v("\nIn the cloud the reality can be quite different: workloads are frequently pretty predictable.  Say, on average,\nyour database serves ~1000 requests/second, and 1 time-unit in 1000 it serves 10,000 requests/second.")]),e._v(" "),a("p",[e._v("You might measure the CPU, Disk, Memory, and Network utilization for the average case and the 1 in 1000 case and,\nif you do ou can say a lot about that database workload just from that information.  We call whatever utilization of\neach of those features, (CPU, Disk, Memory, Network), at each of the measured times, "),a("code",[e._v("components")]),e._v(" of the "),a("code",[e._v("shape")]),e._v(" of the workload.")]),e._v(" "),a("h2",{attrs:{id:"instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance","aria-hidden":"true"}},[e._v("#")]),e._v(" Instance")]),e._v(" "),a("p",[e._v("An instance is a virtual or physical server hosted on some public cloud.  Different clouds call instances different things, for example:")]),e._v(" "),a("ol",[a("li",[e._v("Heroku calls instances "),a("code",[e._v("Dynos")])]),e._v(" "),a("li",[e._v("AWS calls instances "),a("code",[e._v("EC2 Instances")])]),e._v(" "),a("li",[e._v("Azure calls instances "),a("code",[e._v("Virtual Machines")])]),e._v(" "),a("li",[e._v("Google Cloud calls instances "),a("code",[e._v("Virtual Machines")])])]),e._v(" "),a("p",[e._v("In general, when Sunshower.io publish2es a plugin for a given cloud, it translates their notion of an "),a("code",[e._v("instance")]),e._v(", whatever\nthat may be, to "),a("em",[e._v("our")]),e._v(" notion of an instance.  So, if you have the Heroku plugin installed, Sunshower.io will manage your Dynos\nas Sunshower instances.  The goal is that you can manage the notion of a server in the cloud exactly the same way, regardless of which\ncloud it's actually on.")]),e._v(" "),a("h2",{attrs:{id:"instance-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instance-class","aria-hidden":"true"}},[e._v("#")]),e._v(" Instance Class")]),e._v(" "),a("p",[e._v("Every cloud provider has a notion of "),a("code",[e._v("instance class")]),e._v("--that is, the physical capabilities of the "),a("code",[e._v("instance")]),e._v(" that you're\npurchasing from them.  AWS, for example, has 3 instance classes with 2 GB of memory (a1.medium, t3.small, t2.small), but each of these instance classes\nhas different combinations of CPU and networking.  Importantly, each also has a different price.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Instance Class")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("CPU")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Disk")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Memory")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Network")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Cost/Month (approx)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("A1.Medium")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1 vCPU")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("EBS")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("2 GB")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("10 GB")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("~19.12")])]),e._v(" "),a("tr",[a("td",[e._v("T3.Small")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("EBS")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("2 GB")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("(low)")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("~15.60")])]),e._v(" "),a("tr",[a("td",[e._v("T2.Small")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("EBS")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("2 GB")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("(low)")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("~17.25")])])])]),e._v(" "),a("p",[e._v("Likewise, Azure has at least 4 instances with 2 GB of memory.  Moreover, each instance class offerings differ from region\nto region within the same cloud.")]),e._v(" "),a("h2",{attrs:{id:"workload-alignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workload-alignment","aria-hidden":"true"}},[e._v("#")]),e._v(" Workload Alignment")]),e._v(" "),a("p",[e._v("One of the most important things Sunshower.io does is align the "),a("em",[e._v("workloads")]),e._v(" on "),a("em",[e._v("instances")]),e._v(" with "),a("em",[e._v("instance classes")]),e._v("."),a("br"),e._v("\nIn our workload example, we had a few "),a("code",[e._v("moments")]),e._v(" (average, 99.9th percentile)\nfor each of several "),a("code",[e._v("components")]),e._v(" (CPU, Disk, Memory, Network) of the "),a("code",[e._v("shape")]),e._v(" of a workload (database).\nNext, we have to consider which "),a("code",[e._v("instance")]),e._v(" you're currently using to run that workload, and ask ourselves")]),e._v(" "),a("pre",[a("code",[e._v("Given each of the configured moments for each of the \nconfigured components of the workload, what's the\nleast-expensive instance that will contain each of \nthose components out of all the available instances?\n")])]),e._v(" "),a("p",[e._v("Everyone performing Workload Alignment (probably) has a different mechanism for figuring this out.\nAnvil, Sunshower.io's Optimizer, has saved our users an average of ~65% and a maximum of 94% when performing workload alignment.")]),e._v(" "),a("h2",{attrs:{id:"cloud-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud-infrastructure","aria-hidden":"true"}},[e._v("#")]),e._v(" Cloud Infrastructure")]),e._v(" "),a("p",[e._v('Infrastructure is any hardware or software that a cloud service provider, or "CSP" provides.  Examples can be\nLoad Balancers, Instances, Virtual Private Clouds, IP Addresses, etc.')]),e._v(" "),a("h2",{attrs:{id:"role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#role","aria-hidden":"true"}},[e._v("#")]),e._v(" Role")]),e._v(" "),a("p",[e._v('A "role" is a notion of identity within Cloud Service Providers.  Examples are:')]),e._v(" "),a("ol",[a("li",[e._v("AWS IAM roles")]),e._v(" "),a("li",[e._v("Azure Active Directory roles")])]),e._v(" "),a("h2",{attrs:{id:"systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#systems","aria-hidden":"true"}},[e._v("#")]),e._v(" Systems")]),e._v(" "),a("p",[e._v('Sunshower allows for several modes of grouping infrastructure together, the highest level mode we call a "System"\n(think Cloud System or Weather System). Systems are comprised of a collection of Roles (IAM, AD, etc.) and can span\nmultiple cloud providers, meaning that you can mix and match credentials from any CSP.  Upon creating a system, Sunshower.io\nwill go out and discover whatever infrastructure is associated with the System credentials.')]),e._v(" "),a("p",[e._v("Sunshower.io will automatically convert cloud-provider-specific attributes and operations into a unified model.  One of the\ngreat things about Sunshower.io is that you can manage infrastructure in different clouds using the exact same workflows, and\neven with the same system.")])])}],!1,null,null,null);t.default=i.exports}}]);