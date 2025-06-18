var jetstream_path = "JetStream/";

var JetStream = (function() {
  var isRunning;
  var currentPlan;
  var currentIteration;
  var numberOfIterations;
  var accumulator;
  var selectBenchmark;

  var givenReferences = {};
  var givenPlans = [];
  var plans;
  var benchmarks;

  var nextPlan;

  var tDistribution = [NaN, NaN, 12.71, 4.30, 3.18, 2.78, 2.57, 2.45, 2.36, 2.31, 2.26, 2.23, 2.20, 2.18, 2.16, 2.14, 2.13, 2.12, 2.11, 2.10, 2.09, 2.09, 2.08, 2.07, 2.07, 2.06, 2.06, 2.06, 2.05, 2.05, 2.05, 2.04, 2.04, 2.04, 2.03, 2.03, 2.03, 2.03, 2.03, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.02, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.01, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 2.00, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.98, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.97, 1.96];
  var tMax = tDistribution.length;
  var tLimit = 1.96;

  function tDist(n) {
    if (n > tMax)
      return tLimit;
    return tDistribution[n];
  }

  function addReferences(references) {
    for (var s in references)
      givenReferences[s] = references[s]
  }

  function runCode(string) {
    var realm = Realm.create();
    Realm.eval(realm, string);
    Realm.dispose(realm);
  }

  function accumulate(data) {
    accumulator = data;
    if (!isRunning) return;
    nextPlan = plans[currentPlan].code;
  }

  function getAccumulator() {
    return accumulator;
  }

  function addPlan(plan) {
    givenPlans.push(plan);
  }

  function reset() {
    benchmarks = [];
    plans = [];
    for (var i = 0; i < givenPlans.length; ++i) {
      var plan = givenPlans[i];
      if (selectBenchmark && plan.name != selectBenchmark)
        continue;
      plans.push(plan);
      for (var j = 0; j < plan.benchmarks.length; ++j) {
        var benchmark = plan.benchmarks[j];
        benchmarks.push(benchmark);
        benchmark.plan = plan;
        benchmark.reference = givenReferences[benchmark.name] || 1;
      }
    }

    if (plans.length == 0) {
      throw "No such benchmark: " + selectBenchmark;
    }

    for (var i = benchmarks.length; i--;) {
      benchmarks[i].results = [];
      benchmarks[i].times = [];
    }

    currentIteration = 0;
    currentPlan = -1;
    isRunning = false;
  }

  function end() {
    isRunning = false;
    nextPlan = void 0;
  }

  function iterate() {
    ++currentPlan;
    if (currentPlan >= plans.length) {
      if (++currentIteration >= numberOfIterations) {
        end();
        return
      } else {
        currentPlan = 0;
      }
    }

    accumulate(void 0);
  }

  function start(iterations, benchmark) {
    numberOfIterations = iterations;
    selectBenchmark = benchmark;
    reset();
    isRunning = true;
    iterate();
    while (runNext()) {}
  }

  function computeStatistics(values) {
    if (!values.length)
      return {n: 0};

    var sum = 0;
    var n = 0;
    for (var i = 0; i < values.length; ++i) {
      if (!(i in values))
        continue;
      sum += values[i];
      n++;
    }

    if (n != values.length)
      return {n: values.length, failed: values.length - n};

    var mean = sum / n;

    if (n <= 2)
      return {n: n, mean: mean};

    var sumForStdDev = 0;
    for (var i = 0; i < values.length; ++i) {
      if (!(i in values))
        continue;
      sumForStdDev += Math.pow(values[i] - mean, 2);
    }
    var standardDeviation = Math.sqrt(sumForStdDev / (n - 1));
    var standardError = standardDeviation / Math.sqrt(n);
    var interval = tDist(n) * standardError;
    return {
      n: n,
      mean: mean,
      standardError: standardError,
      interval: interval
    };
  }

  function formatResult(values, options) {
    options = options || {};
    var extraPrecision = options.extraPrecision || 0;

    function prepare(value) {
      var precision = 4 + extraPrecision;
      var digitsAfter;
      if (value) {
        var log = Math.log(value) / Math.log(10);
        if (log >= precision)
          digitsAfter = 0;
        else if (log < 0)
          digitsAfter = precision;
        else
          digitsAfter = precision - 1 - (log | 0);
      } else
        digitsAfter = precision - 1;

      return value.toFixed(digitsAfter);
    }

    var statistics = computeStatistics(values);

    if (!statistics.n)
      return "";

    if ("failed" in statistics) {
      if (statistics.n == 1)
          return "ERROR";
      return "ERROR (failed " + statistics.failed + "/" + statistics.n + ")";
    }

    if ("standardError" in statistics)
      return prepare(statistics.mean) +
             " +- " +
             prepare(statistics.standardError);

    return prepare(statistics.mean);
  }

  function displayResultMessage(name, message, style) {
    print(name + ": " + message);
  }

  function reportResult() {
    var plan = plans[currentPlan];
    for (var i = plan.benchmarks.length; i--;) {
      var benchmark = plan.benchmarks[i];
      benchmark.times.push(arguments[i]);
      benchmark.results.push(100 * benchmark.reference / arguments[i]);
      displayResultMessage(
          benchmark.name,
          formatResult(benchmark.results, plan.benchmarks[i]),
          "result");
    }
    iterate();
  }

  function runNext() {
    if (nextPlan) {
      runCode(nextPlan);
      return true;
    }
    return false;
  }

  return {
    addPlan: addPlan,
    addReferences: addReferences,
    start: start,
    reportResult: reportResult,
    accumulate: accumulate,
    getAccumulator: getAccumulator,
    goodTime: Date.now
  };
})();

// Load reference data.
load(jetstream_path + "Reference.js");

function SunSpiderSetup() {
  load(jetstream_path + "SunSpiderPayload.js");

  for (var i = 0; i < SunSpiderPayload.length; ++i) {
    JetStream.addPlan({
      name: SunSpiderPayload[i].name,
      benchmarks: [{
        name: SunSpiderPayload[i].name,
        category: "Latency",
        unit: "ms/run",
      }],
      code:
        "var JetStream = Realm.shared;\n" +
        "var __data = JetStream.getAccumulator() || {sum: 0, n: 0};\n" +
        "var __time_before = JetStream.goodTime();\n" +
        SunSpiderPayload[i].content +
        "var __time_after = JetStream.goodTime();\n" +
        "__data.sum += Math.max(__time_after - __time_before, 1);\n" +
        "__data.n++;\n" +
        "if (__data.n == 20)\n" +
        "    JetStream.reportResult(__data.sum / __data.n);\n" +
        "else\n" +
        "    JetStream.accumulate(__data);\n"
    });
  }
}

function OctaneSetup() {
  var OctaneSuites = [
    {name: "code-multi-load", category: "Latency", files: ["code-load.js"]}
  ];

  for (var i = 0; i < OctaneSuites.length; ++i) {
    var suite = OctaneSuites[i];
    var myBenchmarks = [{
      name: suite.name,
      unit: "ms/run",
      category: suite.category,
    }];

    var code = "";
    code += "Realm.eval(Realm.current(), read(\"" + jetstream_path + "Octane/base.js\"));\n";
    for (var j = 0; j < suite.files.length; ++j)
      code += "Realm.eval(Realm.current(), read(\"" + jetstream_path + "Octane/" + suite.files[j] + "\"));\n";
    code += "var JetStream = Realm.shared;\n";
    code += "BenchmarkSuite.scores = [];\n";
    code += "var __suite = BenchmarkSuite.suites[0];\n";
    code += "for (var __thing = __suite.RunStep({}); __thing; __thing = __thing());\n";
    code += "JetStream.reportResult(\n";
    code += "    BenchmarkSuite.GeometricMean(__suite.results) / 1000);\n";

    JetStream.addPlan({
      name: suite.name,
      benchmarks: myBenchmarks,
      code: code
    });
  }
}

function Octane2Setup() {
  var Octane2Suites = [
    {name: "zlib", category: "Throughput", files: ["zlib.js", "zlib-data.js"]},
  ];

  for (var i = 0; i < Octane2Suites.length; ++i) {
    var suite = Octane2Suites[i];
    var myBenchmarks = [{
      name: suite.name,
      unit: suite.oneRun ? "ms" : "ms/run",
      category: suite.category,
    }];
    if (suite.latency) {
      myBenchmarks.push({
        name: suite.name + "-latency",
        prefix: "&sigma; = ",
        category: "Latency"
      });
    }

    var code = "";
    code += "Realm.eval(Realm.current(), read(\"" + jetstream_path + "Octane2/base.js\"));\n";
    for (var j = 0; j < suite.files.length; ++j)
      code += "Realm.eval(Realm.current(), read(\"" + jetstream_path + "Octane2/" + suite.files[j] + "\"));\n";
    code += "var JetStream = Realm.shared;\n";
    code += "BenchmarkSuite.scores = [];\n";
    code += "var __suite = BenchmarkSuite.suites[0];\n";
    code += "for (var __thing = __suite.RunStep({}); __thing; __thing = __thing());\n";
    code += "JetStream.reportResult(\n";
    code += "  BenchmarkSuite.GeometricMeanTime(__suite.results) / 1000,\n";
    code += "  BenchmarkSuite.GeometricMeanLatency(__suite.results) / 1000);\n";

    JetStream.addPlan({
      name: suite.name,
      benchmarks: myBenchmarks,
      code: code
    });
  }
}

// SimpleSetup.js
function SimpleSetup() {
  load(jetstream_path + "SimplePayload.js");
  for (var i = 0; i < SimplePayload.length; ++i) {
    var name = SimplePayload[i].name;
    // Skip non-asm benchmark.
    if (name === 'hash-map') {
      continue;
    }
    JetStream.addPlan({
      name: name,
      benchmarks: [{
        name: name,
        category: "Throughput",
      }],
      code:
        "var JetStream = Realm.shared;\n" +
        "var __time_before = JetStream.goodTime();\n" +
        SimplePayload[i].content +
        "var __time_after = JetStream.goodTime();\n" +
        "JetStream.reportResult(__time_after - __time_before);\n"
    });
  }
}

Realm.shared = JetStream;

var numberOfIterations = 3;
var suites = [];
var selectBenchmark;

for (var i = 0; i < arguments.length; i++) {
  var arg = arguments[i];
  var number = +arg;
  if (number == number) {
    numberOfIterations = arg;
  } else {
    switch (arg) {
      case "sunspider":
      case "octane":
      case "octane2":
      case "simple":
        suites.push(arg);
        break;
      default:
        selectBenchmark = arg;
    }
  }
}

suites = suites.length ? suites : ["octane2", "simple"];

for (var i = 0; i < suites.length; i++) {
  switch (suites[i]) {
    case "sunspider":
      SunSpiderSetup();
      break;
    case "octane":
      OctaneSetup();
      break;
    case "octane2":
      Octane2Setup();
      break;
    case "simple":
      SimpleSetup();
      break;
  }
}

JetStream.start(numberOfIterations, selectBenchmark);
