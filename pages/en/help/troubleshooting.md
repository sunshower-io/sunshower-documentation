# Troubleshooting Sunshower.io

## Unmonitored Metrics

Sunshower.io performs its optimizations on the basis of metrics collected from some monitoring solution (e.g. CloudWatch).
If the typical metrics aren't available, the quality of Anvil's fit may be poor.  In particular, Anvil interprets the
absence of a metric as having a value of 0, which means that it doesn't see that you're using any of a particular metric
and conclude that you don't need it.


## UI Unresponsive/Has Errors

Sunshower.io is a single-page application that bundles all of its resources.  When we release an update, sometimes that 
update isn't downloaded by your browser due to brower's aggressive caching.  In that case, simple perform a hard-reload 
of the page and it should work.
