# JetStream Clone

This is a clone from the upstream (webkit repository)[https://github.com/WebKit/WebKit/tree/main/Websites/browserbench.org/JetStream2.2]

It contains additional changes to help with investigation:
- Added --help command line support
- Additional performance mark and measure calls
- Use performance.mark instead of Date.now
- Additional URL params to configure iterationCount and worstCaseCount
- Pass iterationCount Benchmark.validate, needed for UniPoker
- Print Score and time for metrics
- Customized file-prefetcher to support runner WorkerTests in d8