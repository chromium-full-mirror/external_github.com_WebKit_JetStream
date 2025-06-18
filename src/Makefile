EMCC ?= ~/v8/emsdk_portable/emscripten/incoming/emcc
CPP = g++
W=out/wasm
N=out/native
A=out/asmjs

all: out_native out_asmjs out_wasm

out_native: $(N)/touch $(W)/touch $(A)/touch $(N)/bigfib $(N)/container $(N)/dry $(N)/float-mm $(N)/gcc-loops $(N)/n-body $(N)/quicksort $(N)/towers 
out_wasm: $(W)/bigfib.js $(W)/container.js $(W)/dry.js $(W)/float-mm.js $(W)/gcc-loops.js $(W)/n-body.js $(W)/quicksort.js $(W)/towers.js 
out_asmjs: $(A)/bigfib.js $(A)/container.js $(A)/dry.js $(A)/float-mm.js $(A)/gcc-loops.js $(A)/n-body.js $(A)/quicksort.js $(A)/towers.js 

clean:
	rm -f $(N)/* $(W)/* $(A)/*

$(N)/touch:
	mkdir -p $(N)
	touch $@

$(W)/touch:
	mkdir -p $(W)
	touch $@

$(A)/touch:
	mkdir -p $(A)
	touch $@

$(N)/%: %.c
	$(CPP) -lm -O3 -o $@ $^ $(LIB)

$(N)/%: %.cpp
	$(CPP) -lm -O3 -o $@ $^ $(LIB)

$(W)/%.js: %.c
	$(EMCC) -O3 -s BINARYEN=1 -o $@ $^ $(LIB)

$(W)/%.js: %.cpp
	$(EMCC) -O3 -s BINARYEN=1 -o $@ $^ $(LIB)

$(A)/%.js: %.c
	$(EMCC) -O3 -o $@ $^ $(LIB)

$(A)/%.js: %.cpp
	$(EMCC) -O3 -o $@ $^ $(LIB)

