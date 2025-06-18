var __benchmarkName;
if (typeof scriptArgs != 'undefined') {
  __benchmarkName = scriptArgs[0];
} else if (typeof arguments != 'undefined') {
  __benchmarkName = arguments[0];
}

var __eval = eval;

function __run(__code) {
  var Module = { print: function(x) {} };
  var __time_before = Date.now();
  __eval(__code);
  return Math.max(Date.now() - __time_before, 1);
}

var JetStream = (function() {
  var references;

  function addReferences(r) {
    references = r;
  }

  function reportResult(time) {
    var result = 100 * references[__benchmarkName] / time;
    print(__benchmarkName + "(" + result.toFixed(2) + ")");
  }

  function sunSpiderCPUWarmup() {
    var warmupMS = 20;
    for (var start = new Date; new Date - start < warmupMS;) {
      for (var i = 0; i < 100; ++i) {
	if (Math.atan(Math.acos(Math.asin(Math.random()))) > 4) { // Always false.
          print("Whoa, dude!"); // Make it look like this has a purpose.
          return;
	}
      }
    }
  }

  function runSimpleBenchmark(payload) {
    for (var i = 0; i < payload.length; ++i) {
      if (payload[i].name === __benchmarkName) {
	reportResult(__run(payload[i].content));
	return;
      }
    }
    throw ("no code found for benchmark '" + __benchmarkName + "'");
  }

  function runOctaneBenchmark(what) {
    BenchmarkSuite.scores = [];
    var suite = BenchmarkSuite.suites[0];
    for (var thing = suite.RunStep({}); thing; thing = thing());
    var time = BenchmarkSuite["GeometricMean" + what](suite.results) / 1000;
    reportResult(time);
  }

  return {
    addReferences: addReferences,
    sunSpiderCPUWarmup: sunSpiderCPUWarmup,
    runSimpleBenchmark: runSimpleBenchmark,
    runOctaneBenchmark: runOctaneBenchmark
  };
})();

load("JetStream/Reference.js");

switch (__benchmarkName) {
  case "3d-cube":
  case "3d-raytrace":
  case "base64":
  case "cordic":
  case "crypto-aes":
  case "crypto-md5":
  case "crypto-sha1":
  case "date-format-tofte":
  case "date-format-xparb":
  case "n-body":
  case "regex-dna":
  case "tagcloud":
  load("JetStream/SunSpiderPayload.js");
  JetStream.sunSpiderCPUWarmup();
  JetStream.runSimpleBenchmark(SunSpiderPayload);
  break;

  case "bigfib.cpp":
  case "container.cpp":
  case "dry.c":
  case "float-mm.c":
  case "gcc-loops.cpp":
  case "hash-map":
  case "n-body.c":
  case "quicksort.c":
  case "towers.c":
  load("JetStream/SimplePayload.js");
  JetStream.runSimpleBenchmark(SimplePayload);
  break;

  case "code-multi-load":
  load("JetStream/Octane/base.js");
  load("JetStream/Octane/code-load.js");
  JetStream.runOctaneBenchmark("");
  break;

  case "richards":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/richards.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "delta-blue":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/deltablue.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "crypto":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/crypto.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "proto-raytracer":
  load("JetStream/Octane2/base.js");
  load ("JetStream/Octane2/raytrace.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "earley-boyer":
  load("JetStream/Octane2/base.js");
  load ("JetStream/Octane2/earley-boyer.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "regexp-2010":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/regexp.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "splay":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/splay.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "splay-latency":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/splay.js");
  JetStream.runOctaneBenchmark("Latency");
  break;

  case "navier-stokes":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/navier-stokes.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "pdfjs":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/pdfjs.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "mandreel":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/mandreel.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "mandreel-latency":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/mandreel.js");
  JetStream.runOctaneBenchmark("Latency");
  break;

  case "gbemu":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/gbemu-part1.js");
  load("JetStream/Octane2/gbemu-part2.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "code-first-load":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/code-load.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "box2d":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/box2d.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "zlib":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/zlib.js");
  load("JetStream/Octane2/zlib-data.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  case "typescript":
  load("JetStream/Octane2/base.js");
  load("JetStream/Octane2/typescript.js");
  load("JetStream/Octane2/typescript-input.js");
  load("JetStream/Octane2/typescript-compiler.js");
  JetStream.runOctaneBenchmark("Time");
  break;

  default:
  throw ("unknown benchmark '" + __benchmarkName + "'");
}
