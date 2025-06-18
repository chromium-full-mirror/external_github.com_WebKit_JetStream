Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var ___dso_handle=env.___dso_handle|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var _pthread_key_create=env._pthread_key_create;
  var ___syscall6=env.___syscall6;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___assert_fail=env.___assert_fail;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var ___setErrNo=env.___setErrNo;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___resumeException=env.___resumeException;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var _pthread_getspecific=env._pthread_getspecific;
  var _pthread_once=env._pthread_once;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var _pthread_setspecific=env._pthread_setspecific;
  var ___cxa_atexit=env.___cxa_atexit;
  var ___cxa_throw=env.___cxa_throw;
  var ___lock=env.___lock;
  var _abort=env._abort;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _atexit=env._atexit;
  var ___syscall140=env.___syscall140;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __ZNSt3__213__vector_baseIdNS_9allocatorIdEEED2Ev($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__end_$i$i = 0, $cmp = 0, $cmp1$i$i = 0, $scevgep$i$i = 0, $scevgep5$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($this);
 $cmp = ($0|0)==(0|0);
 $1 = $0;
 if ($cmp) {
  return;
 }
 $__end_$i$i = ((($this)) + 4|0);
 $2 = load4($__end_$i$i);
 $cmp1$i$i = ($2|0)==($0|0);
 if (!($cmp1$i$i)) {
  $scevgep$i$i = ((($2)) + -8|0);
  $3 = $scevgep$i$i;
  $4 = (($3) - ($1))|0;
  $5 = $4 >>> 3;
  $6 = $5 ^ -1;
  $scevgep5$i$i = (($2) + ($6<<3)|0);
  store4($__end_$i$i,$scevgep5$i$i);
 }
 __ZdlPv($0);
 return;
}
function __Z19vector_pointer_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0, $__end_$i = 0, $__first$addr$0$i$i$i = 0, $__first$addr$0$ph$i$i = 0, $__i$0$i$i = 0, $__i$0$ph$i$i = 0, $agg$tmp1$i = 0, $cmp$i$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i12$i$i = 0, $cmp$i3 = 0, $cmp1$i$i$i12 = 0, $cmp2$i$i = 0, $container = 0, $incdec$ptr$i$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr1$i$i = 0, $incdec$ptr6$i$i = 0, $retval$1$i$i$i = 0, $scevgep$i$i$i7 = 0, $scevgep5$i$i$i8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp1$i = sp;
 $container = sp + 4|0;
 __ZNSt3__26vectorIdNS_9allocatorIdEEEC2IPdEET_NS_9enable_ifIXaasr21__is_forward_iteratorIS6_EE5valuesr16is_constructibleIdNS_15iterator_traitsIS6_E9referenceEEE5valueES6_E4typeE($container,$first,$last);
 $0 = load4($container);
 $__end_$i = ((($container)) + 4|0);
 $1 = load4($__end_$i);
 __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($0,$1,$agg$tmp1$i);
 $2 = load4($container);
 $3 = load4($__end_$i);
 $cmp$i$i$i = ($2|0)==($3|0);
 L1: do {
  if ($cmp$i$i$i) {
   $retval$1$i$i$i = $2;
   label = 4;
  } else {
   $__first$addr$0$i$i$i = $2;
   while(1) {
    $incdec$ptr$i$i$i = ((($__first$addr$0$i$i$i)) + 8|0);
    $cmp1$i$i$i12 = ($incdec$ptr$i$i$i|0)==($3|0);
    if ($cmp1$i$i$i12) {
     break L1;
    }
    $4 = loadd($__first$addr$0$i$i$i);
    $5 = loadd($incdec$ptr$i$i$i);
    $cmp$i$i$i$i = $4 == $5;
    if ($cmp$i$i$i$i) {
     $retval$1$i$i$i = $__first$addr$0$i$i$i;
     label = 4;
     break;
    } else {
     $__first$addr$0$i$i$i = $incdec$ptr$i$i$i;
    }
   }
  }
 } while(0);
 L5: do {
  if ((label|0) == 4) {
   $cmp$i$i = ($retval$1$i$i$i|0)==($3|0);
   if (!($cmp$i$i)) {
    $incdec$ptr$i$i = ((($retval$1$i$i$i)) + 8|0);
    $__first$addr$0$ph$i$i = $retval$1$i$i$i;$__i$0$ph$i$i = $incdec$ptr$i$i;
    while(1) {
     $__i$0$i$i = $__i$0$ph$i$i;
     while(1) {
      $incdec$ptr1$i$i = ((($__i$0$i$i)) + 8|0);
      $cmp2$i$i = ($incdec$ptr1$i$i|0)==($3|0);
      if ($cmp2$i$i) {
       break L5;
      }
      $6 = loadd($__first$addr$0$ph$i$i);
      $7 = loadd($incdec$ptr1$i$i);
      $cmp$i12$i$i = $6 == $7;
      if ($cmp$i12$i$i) {
       $__i$0$i$i = $incdec$ptr1$i$i;
      } else {
       break;
      }
     }
     $incdec$ptr6$i$i = ((($__first$addr$0$ph$i$i)) + 8|0);
     stored($incdec$ptr6$i$i,$7);
     $__first$addr$0$ph$i$i = $incdec$ptr6$i$i;$__i$0$ph$i$i = $incdec$ptr1$i$i;
    }
   }
  }
 } while(0);
 $cmp$i3 = ($2|0)==(0|0);
 $8 = $2;
 if ($cmp$i3) {
  STACKTOP = sp;return;
 }
 if (!($cmp$i$i$i)) {
  $scevgep$i$i$i7 = ((($3)) + -8|0);
  $9 = $scevgep$i$i$i7;
  $10 = (($9) - ($8))|0;
  $11 = $10 >>> 3;
  $12 = $11 ^ -1;
  $scevgep5$i$i$i8 = (($3) + ($12<<3)|0);
  store4($__end_$i,$scevgep5$i$i$i8);
 }
 __ZdlPv($2);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIdNS_9allocatorIdEEEC2IPdEET_NS_9enable_ifIXaasr21__is_forward_iteratorIS6_EE5valuesr16is_constructibleIdNS_15iterator_traitsIS6_E9referenceEEE5valueES6_E4typeE($this,$__first,$__last) {
 $this = $this|0;
 $__first = $__first|0;
 $__last = $__last|0;
 var $__end_$i = 0, $__end_cap_$i = 0, $__first_$i$i$i$i = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $call$i$i$i$i16 = 0, $cmp = 0, $cmp$i$i = 0, $cmp$i13 = 0, $sub$ptr$div$i$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$sub$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,0);
 $__end_$i = ((($this)) + 4|0);
 store4($__end_$i,0);
 $__end_cap_$i = ((($this)) + 8|0);
 store4($__end_cap_$i,0);
 $sub$ptr$lhs$cast$i$i = $__last;
 $sub$ptr$rhs$cast$i$i = $__first;
 $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 3;
 $cmp = ($sub$ptr$div$i$i|0)==(0);
 if ($cmp) {
  return;
 }
 $cmp$i13 = ($sub$ptr$div$i$i>>>0)>(536870911);
 if ($cmp$i13) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this);
  // unreachable;
 }
 $call$i$i$i$i16 = (__Znwj($sub$ptr$sub$i$i)|0);
 store4($__end_$i,$call$i$i$i$i16);
 store4($this,$call$i$i$i$i16);
 $add$ptr$i = (($call$i$i$i$i16) + ($sub$ptr$div$i$i<<3)|0);
 $__first_$i$i$i$i = ((($this)) + 8|0);
 store4($__first_$i$i$i$i,$add$ptr$i);
 $cmp$i$i = ($sub$ptr$sub$i$i|0)>(0);
 if (!($cmp$i$i)) {
  return;
 }
 _memcpy(($call$i$i$i$i16|0),($__first|0),($sub$ptr$sub$i$i|0))|0;
 $add$ptr$i$i = (($call$i$i$i$i16) + ($sub$ptr$div$i$i<<3)|0);
 store4($__end_$i,$add$ptr$i$i);
 return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __Z20vector_iterator_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $$in$i$i = 0, $$in$i$i$i = 0, $$pre$i$i = 0.0, $$pre29$i$i = 0.0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $15$phi = 0, $16 = 0.0, $17 = 0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0.0, $6 = 0;
 var $7 = 0.0, $8 = 0.0, $9 = 0, $__end_$i = 0, $agg$tmp1$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i3 = 0, $container = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i11$i$i = 0, $incdec$ptr$i11$i$i$i = 0, $incdec$ptr$i1124$i$i = 0, $incdec$ptr$i6$i$i = 0, $lnot$i$i$i = 0, $lnot$i$i$i$i = 0, $lnot$i16$i$i = 0, $lnot$i25$i$i = 0, $lnot$i6$i$i$i = 0, $lnot$i612$i$i$i = 0;
 var $scevgep$i$i$i7 = 0, $scevgep5$i$i$i8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp1$i$i = sp;
 $container = sp + 4|0;
 __ZNSt3__26vectorIdNS_9allocatorIdEEEC2IPdEET_NS_9enable_ifIXaasr21__is_forward_iteratorIS6_EE5valuesr16is_constructibleIdNS_15iterator_traitsIS6_E9referenceEEE5valueES6_E4typeE($container,$first,$last);
 $0 = load4($container);
 $__end_$i = ((($container)) + 4|0);
 $1 = load4($__end_$i);
 __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($0,$1,$agg$tmp1$i$i);
 $2 = load4($container);
 $3 = load4($__end_$i);
 $lnot$i$i$i$i = ($2|0)==($3|0);
 L1: do {
  if ($lnot$i$i$i$i) {
   $6 = $2;
   label = 6;
  } else {
   $incdec$ptr$i11$i$i$i = ((($2)) + 8|0);
   $lnot$i612$i$i$i = ($incdec$ptr$i11$i$i$i|0)==($3|0);
   if (!($lnot$i612$i$i$i)) {
    $$pre$i$i = loadd($2);
    $$in$i$i$i = $incdec$ptr$i11$i$i$i;$15 = $2;$5 = $$pre$i$i;
    while(1) {
     $4 = loadd($$in$i$i$i);
     $cmp$i$i$i$i = $5 == $4;
     if ($cmp$i$i$i$i) {
      $6 = $15;
      label = 6;
      break L1;
     }
     $incdec$ptr$i$i$i$i = ((($$in$i$i$i)) + 8|0);
     $lnot$i6$i$i$i = ($incdec$ptr$i$i$i$i|0)==($3|0);
     if ($lnot$i6$i$i$i) {
      break;
     } else {
      $15$phi = $$in$i$i$i;$$in$i$i$i = $incdec$ptr$i$i$i$i;$5 = $4;$15 = $15$phi;
     }
    }
   }
  }
 } while(0);
 if ((label|0) == 6) {
  $lnot$i16$i$i = ($6|0)==($3|0);
  if (!($lnot$i16$i$i)) {
   $incdec$ptr$i1124$i$i = ((($6)) + 16|0);
   $lnot$i25$i$i = ($incdec$ptr$i1124$i$i|0)==($3|0);
   if (!($lnot$i25$i$i)) {
    $$pre29$i$i = loadd($6);
    $$in$i$i = $incdec$ptr$i1124$i$i;$8 = $$pre29$i$i;$9 = $6;
    while(1) {
     $7 = loadd($$in$i$i);
     $cmp$i$i$i = $8 == $7;
     if ($cmp$i$i$i) {
      $16 = $8;$17 = $9;
     } else {
      $incdec$ptr$i6$i$i = ((($9)) + 8|0);
      stored($incdec$ptr$i6$i$i,$7);
      $16 = $7;$17 = $incdec$ptr$i6$i$i;
     }
     $incdec$ptr$i11$i$i = ((($$in$i$i)) + 8|0);
     $lnot$i$i$i = ($incdec$ptr$i11$i$i|0)==($3|0);
     if ($lnot$i$i$i) {
      break;
     } else {
      $$in$i$i = $incdec$ptr$i11$i$i;$8 = $16;$9 = $17;
     }
    }
   }
  }
 }
 $cmp$i3 = ($2|0)==(0|0);
 $10 = $2;
 if ($cmp$i3) {
  STACKTOP = sp;return;
 }
 if (!($lnot$i$i$i$i)) {
  $scevgep$i$i$i7 = ((($3)) + -8|0);
  $11 = $scevgep$i$i$i7;
  $12 = (($11) - ($10))|0;
  $13 = $12 >>> 3;
  $14 = $13 ^ -1;
  $scevgep5$i$i$i8 = (($3) + ($14<<3)|0);
  store4($__end_$i,$scevgep5$i$i$i8);
 }
 __ZdlPv($2);
 STACKTOP = sp;return;
}
function __Z10deque_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $$ph79$i$i = 0, $$ph80$i$i = 0, $$pre = 0, $$pre$i = 0, $$pre124 = 0, $$pre125 = 0, $$pre19$i = 0, $$pre20$i = 0, $$pre21$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0.0, $49 = 0, $5 = 0, $50 = 0.0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0.0, $67 = 0.0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $8 = 0, $9 = 0, $__begin_$i$i$i$i = 0, $__begin_$i$i$i$pre$phi131ZZZZ2D = 0, $__end_$i$i$i$i = 0, $__end_$i$i$i$pre$phi129ZZZZ2D = 0, $__f$addr$018$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i$i133 = 0, $__first_$i$i$i$i$i138 = 0, $__first_$i$i$i$i10$i = 0, $__i$sroa$0$017$i = 0, $__i$sroa$0$1$i = 0, $__i$sroa$0$1$i$i = 0, $__i$sroa$0$1$i$i$i = 0, $__i$sroa$0$1$ph82$i$i = 0, $__i$sroa$0$2$i$i = 0, $__i$sroa$5$016$i = 0, $__i$sroa$5$1$i = 0, $__i$sroa$7$1$i$i = 0;
 var $__i$sroa$7$1$i$i$i = 0, $__i$sroa$7$1$ph81$i$i = 0, $__i$sroa$7$2$i$i = 0, $__n$addr$018$i = 0, $__start_$i$i$pre$phi130ZZZ2D = 0, $__start_$i9$i = 0, $add$i$i = 0, $add$i$i16 = 0, $add$i$i34 = 0, $add$i$i34134 = 0, $add$i$i54 = 0, $add$i$i54140 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i18 = 0, $add$ptr$i$i23 = 0, $add$ptr$i$i36 = 0, $add$ptr$i$i36136 = 0, $add$ptr$i$i36139 = 0, $add$ptr$i$i57 = 0;
 var $add$ptr$i$i57142 = 0, $add$ptr$i$i57144 = 0, $add$ptr$i$i6 = 0, $add$ptr$i$i6132 = 0, $add$ptr$i$i70 = 0, $add$ptr10$i$i = 0, $add$ptr14$i$i = 0, $add$ptr5$i$i = 0, $add$ptr5$i$i27 = 0, $add$ptr5$i$i74 = 0, $add$ptr6$__l$i = 0, $add$ptr6$i = 0, $add$ptr6$i$i = 0, $add$ptr7$i$i = 0, $add$ptr7$i$i40 = 0, $add$ptr7$i$i61 = 0, $agg$tmp$i$i = 0, $agg$tmp$i$i$sroa_raw_idx = 0, $agg$tmp1$i$i = 0, $agg$tmp1$i$i$sroa_raw_idx = 0;
 var $agg$tmp10$sroa$0$0 = 0, $agg$tmp10$sroa$0$1 = 0, $agg$tmp10$sroa$8$0 = 0, $agg$tmp10$sroa$8$1 = 0, $agg$tmp24$i = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i12 = 0, $cmp$i$i$i25 = 0, $cmp$i$i$i7 = 0, $cmp$i$i$i72 = 0, $cmp$i$i13 = 0, $cmp$i14 = 0, $cmp$i14$i$i = 0, $cmp$i20$i$i = 0, $cmp$i28$i$i = 0, $cmp$i38$i$i = 0, $cmp$i6$i$i$i = 0;
 var $cmp17$i = 0, $cmp2$i$i = 0, $cmp5$i = 0, $cond$i$i = 0, $cond$i$i29137 = 0, $cond$i$i42 = 0, $cond$i$i63$off32 = 0, $cond$i$i76$off32143 = 0, $container = 0, $dec$i = 0, $div$i$i = 0, $div$i$i22 = 0, $div$i$i35 = 0, $div$i$i35135 = 0, $div$i$i5 = 0, $div$i$i56 = 0, $div$i$i56141 = 0, $div$i$i69 = 0, $div8$i$i = 0, $idx$neg$i$i = 0;
 var $incdec$ptr$i$i = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i10$i$i = 0, $incdec$ptr$i24$i$i = 0, $incdec$ptr$i34$i$i = 0, $incdec$ptr3$i$i = 0, $incdec$ptr3$i$i$i$i = 0, $incdec$ptr3$i15$i$i = 0, $incdec$ptr3$i29$i$i = 0, $incdec$ptr3$i39$i$i = 0, $lnot$i$i$i = 0, $lnot$i$i$i$i = 0, $lnot$i4$i$i$i = 0, $lnot$i45$i$i = 0, $phitmp = 0, $phitmp$i = 0, $phitmp112 = 0, $phitmp113 = 0, $phitmp116 = 0, $ref$tmp$sroa$0$0$i$i = 0;
 var $ref$tmp$sroa$5$0$i$i = 0, $rem$i$i = 0, $rem$i$i26 = 0, $rem$i$i39 = 0, $rem$i$i60 = 0, $rem$i$i73 = 0, $rem$i$i8 = 0, $rem12$i$i = 0, $rem9$i$i = 0, $sub$i$i19 = 0, $sub$ptr$div = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$sub$ptr$div4$i = 0, $sub$ptr$div4$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i$i = 0, $sub$ptr$lhs$cast$i12$i$i = 0, $sub$ptr$rhs$cast = 0;
 var $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast2$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i$i$i48 = 0, $sub$ptr$sub$i$i15 = 0, $sub$ptr$sub$i13$i$i = 0, $sub$ptr$sub$i27$i$i = 0, $sub$ptr$sub$i37$i$i = 0, $sub$ptr$sub3$i = 0, $sub13$i$i = 0, $tmpcast$i$i$byval_copy = 0, $tmpcast1$i$i$byval_copy = 0, $tmpcast4$sroa$0$0$i$i = 0, $tmpcast4$sroa$6$0$i$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $tmpcast1$i$i$byval_copy = sp + 56|0;
 $tmpcast$i$i$byval_copy = sp + 48|0;
 $agg$tmp$i$i = sp + 16|0;
 $agg$tmp1$i$i = sp + 8|0;
 $agg$tmp24$i = sp;
 $container = sp + 24|0;
 $sub$ptr$lhs$cast = $last;
 $sub$ptr$rhs$cast = $first;
 $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
 $sub$ptr$div = $sub$ptr$sub >> 3;
 ; store8($container,i64_const(0,0),4); store8($container+8|0,i64_const(0,0),4); store8($container+16|0,i64_const(0,0),4);
 $cmp$i = ($sub$ptr$div|0)==(0);
 if ($cmp$i) {
  $$pre = ((($container)) + 4|0);
  $$pre124 = ((($container)) + 16|0);
  $$pre125 = ((($container)) + 8|0);
  $__begin_$i$i$i$pre$phi131ZZZZ2D = $$pre;$__end_$i$i$i$pre$phi129ZZZZ2D = $$pre125;$__start_$i$i$pre$phi130ZZZ2D = $$pre124;$add$ptr$i$i6132 = 0;$cond$i$i = 0;
 } else {
  $__end_$i$i$i$i = ((($container)) + 8|0);
  $__begin_$i$i$i$i = ((($container)) + 4|0);
  $__start_$i9$i = ((($container)) + 16|0);
  $__first_$i$i$i$i10$i = ((($container)) + 20|0);
  __ZNSt3__25dequeIdNS_9allocatorIdEEE19__add_back_capacityEj($container,$sub$ptr$div);
  $$pre$i = load4($__first_$i$i$i$i10$i);
  $$pre19$i = load4($__start_$i9$i);
  $$pre20$i = load4($__begin_$i$i$i$i);
  $$pre21$i = load4($__end_$i$i$i$i);
  $add$i$i = (($$pre$i) + ($$pre19$i))|0;
  $div$i$i = $add$i$i >>> 9;
  $add$ptr$i$i = (($$pre20$i) + ($div$i$i<<2)|0);
  $cmp$i$i$i = ($$pre21$i|0)==($$pre20$i|0);
  if ($cmp$i$i$i) {
   $__i$sroa$0$017$i = $add$ptr$i$i;$__i$sroa$5$016$i = 0;$__n$addr$018$i = $sub$ptr$div;
  } else {
   $rem$i$i = $add$i$i & 511;
   $0 = load4($add$ptr$i$i);
   $add$ptr7$i$i = (($0) + ($rem$i$i<<3)|0);
   $phitmp$i = $add$ptr7$i$i;
   $__i$sroa$0$017$i = $add$ptr$i$i;$__i$sroa$5$016$i = $phitmp$i;$__n$addr$018$i = $sub$ptr$div;
  }
  while(1) {
   $1 = $__i$sroa$5$016$i;
   stored($1,0.0);
   $dec$i = (($__n$addr$018$i) + -1)|0;
   $incdec$ptr$i$i = ((($1)) + 8|0);
   $2 = $incdec$ptr$i$i;
   $3 = load4($__i$sroa$0$017$i);
   $sub$ptr$sub$i$i = (($2) - ($3))|0;
   $cmp$i$i = ($sub$ptr$sub$i$i|0)==(4096);
   if ($cmp$i$i) {
    $incdec$ptr3$i$i = ((($__i$sroa$0$017$i)) + 4|0);
    $4 = load4($incdec$ptr3$i$i);
    $__i$sroa$0$1$i = $incdec$ptr3$i$i;$__i$sroa$5$1$i = $4;
   } else {
    $__i$sroa$0$1$i = $__i$sroa$0$017$i;$__i$sroa$5$1$i = $2;
   }
   $tobool$i = ($dec$i|0)==(0);
   if ($tobool$i) {
    break;
   } else {
    $__i$sroa$0$017$i = $__i$sroa$0$1$i;$__i$sroa$5$016$i = $__i$sroa$5$1$i;$__n$addr$018$i = $dec$i;
   }
  }
  $5 = (($$pre$i) + ($sub$ptr$div))|0;
  store4($__first_$i$i$i$i10$i,$5);
  $div$i$i5 = $$pre19$i >>> 9;
  $add$ptr$i$i6 = (($$pre20$i) + ($div$i$i5<<2)|0);
  $cmp$i$i$i7 = ($$pre21$i|0)==($$pre20$i|0);
  if ($cmp$i$i$i7) {
   $__begin_$i$i$i$pre$phi131ZZZZ2D = $__begin_$i$i$i$i;$__end_$i$i$i$pre$phi129ZZZZ2D = $__end_$i$i$i$i;$__start_$i$i$pre$phi130ZZZ2D = $__start_$i9$i;$add$ptr$i$i6132 = $add$ptr$i$i6;$cond$i$i = 0;
  } else {
   $rem$i$i8 = $$pre19$i & 511;
   $6 = load4($add$ptr$i$i6);
   $add$ptr5$i$i = (($6) + ($rem$i$i8<<3)|0);
   $__begin_$i$i$i$pre$phi131ZZZZ2D = $__begin_$i$i$i$i;$__end_$i$i$i$pre$phi129ZZZZ2D = $__end_$i$i$i$i;$__start_$i$i$pre$phi130ZZZ2D = $__start_$i9$i;$add$ptr$i$i6132 = $add$ptr$i$i6;$cond$i$i = $add$ptr5$i$i;
  }
 }
 $cmp17$i = ($first|0)==($last|0);
 if (!($cmp17$i)) {
  $7 = $cond$i$i;
  $8 = $add$ptr$i$i6132;
  $11 = $cond$i$i;$__f$addr$018$i = $first;$agg$tmp10$sroa$0$0 = $8;$agg$tmp10$sroa$8$0 = $7;
  while(1) {
   $9 = $agg$tmp10$sroa$0$0;
   $10 = load4($9);
   $add$ptr$i = ((($10)) + 4096|0);
   $sub$ptr$lhs$cast$i = $add$ptr$i;
   $sub$ptr$rhs$cast$i = $11;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $sub$ptr$div$i = $sub$ptr$sub$i >> 3;
   $sub$ptr$rhs$cast2$i = $__f$addr$018$i;
   $sub$ptr$sub3$i = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast2$i))|0;
   $sub$ptr$div4$i = $sub$ptr$sub3$i >> 3;
   $cmp5$i = ($sub$ptr$div4$i|0)>($sub$ptr$div$i|0);
   $add$ptr6$i = (($__f$addr$018$i) + ($sub$ptr$div$i<<3)|0);
   $sub$ptr$div$sub$ptr$div4$i = $cmp5$i ? $sub$ptr$div$i : $sub$ptr$div4$i;
   $add$ptr6$__l$i = $cmp5$i ? $add$ptr6$i : $last;
   $sub$ptr$lhs$cast$i$i$i = $add$ptr6$__l$i;
   $sub$ptr$sub$i$i$i = (($sub$ptr$lhs$cast$i$i$i) - ($sub$ptr$rhs$cast2$i))|0;
   $cmp$i$i$i12 = ($sub$ptr$sub$i$i$i|0)==(0);
   if (!($cmp$i$i$i12)) {
    _memmove(($11|0),($__f$addr$018$i|0),($sub$ptr$sub$i$i$i|0))|0;
   }
   $cmp$i$i13 = ($sub$ptr$div$sub$ptr$div4$i|0)==(0);
   do {
    if ($cmp$i$i13) {
     $71 = $11;$agg$tmp10$sroa$0$1 = $agg$tmp10$sroa$0$0;$agg$tmp10$sroa$8$1 = $agg$tmp10$sroa$8$0;
    } else {
     $12 = $agg$tmp10$sroa$0$0;
     $13 = load4($12);
     $sub$ptr$sub$i$i15 = (($agg$tmp10$sroa$8$0) - ($13))|0;
     $sub$ptr$div$i$i = $sub$ptr$sub$i$i15 >> 3;
     $add$i$i16 = (($sub$ptr$div$i$i) + ($sub$ptr$div$sub$ptr$div4$i))|0;
     $cmp2$i$i = ($add$i$i16|0)>(0);
     if ($cmp2$i$i) {
      $div8$i$i = $add$i$i16 >>> 9;
      $add$ptr$i$i18 = (($9) + ($div8$i$i<<2)|0);
      $14 = $add$ptr$i$i18;
      $15 = load4($add$ptr$i$i18);
      $rem9$i$i = $add$i$i16 & 511;
      $add$ptr6$i$i = (($15) + ($rem9$i$i<<3)|0);
      $16 = $add$ptr6$i$i;
      $71 = $add$ptr6$i$i;$agg$tmp10$sroa$0$1 = $14;$agg$tmp10$sroa$8$1 = $16;
      break;
     } else {
      $sub$i$i19 = (511 - ($add$i$i16))|0;
      $idx$neg$i$i = (($sub$i$i19|0) / -512)&-1;
      $add$ptr10$i$i = (($9) + ($idx$neg$i$i<<2)|0);
      $17 = $add$ptr10$i$i;
      $18 = load4($add$ptr10$i$i);
      $rem12$i$i = (($sub$i$i19|0) % 512)&-1;
      $sub13$i$i = (511 - ($rem12$i$i))|0;
      $add$ptr14$i$i = (($18) + ($sub13$i$i<<3)|0);
      $19 = $add$ptr14$i$i;
      $71 = $add$ptr14$i$i;$agg$tmp10$sroa$0$1 = $17;$agg$tmp10$sroa$8$1 = $19;
      break;
     }
    }
   } while(0);
   $cmp$i14 = ($add$ptr6$__l$i|0)==($last|0);
   if ($cmp$i14) {
    break;
   } else {
    $11 = $71;$__f$addr$018$i = $add$ptr6$__l$i;$agg$tmp10$sroa$0$0 = $agg$tmp10$sroa$0$1;$agg$tmp10$sroa$8$0 = $agg$tmp10$sroa$8$1;
   }
  }
 }
 $20 = load4($__begin_$i$i$i$pre$phi131ZZZZ2D);
 $21 = load4($__start_$i$i$pre$phi130ZZZ2D);
 $div$i$i22 = $21 >>> 9;
 $add$ptr$i$i23 = (($20) + ($div$i$i22<<2)|0);
 $22 = load4($__end_$i$i$i$pre$phi129ZZZZ2D);
 $cmp$i$i$i25 = ($22|0)==($20|0);
 if ($cmp$i$i$i25) {
  $__first_$i$i$i$i$i133 = ((($container)) + 20|0);
  $23 = load4($__first_$i$i$i$i$i133);
  $add$i$i34134 = (($21) + ($23))|0;
  $div$i$i35135 = $add$i$i34134 >>> 9;
  $add$ptr$i$i36136 = (($20) + ($div$i$i35135<<2)|0);
  $__first_$i$i$i$i$i138 = $__first_$i$i$i$i$i133;$add$ptr$i$i36139 = $add$ptr$i$i36136;$cond$i$i29137 = 0;$cond$i$i42 = 0;
 } else {
  $rem$i$i26 = $21 & 511;
  $24 = load4($add$ptr$i$i23);
  $add$ptr5$i$i27 = (($24) + ($rem$i$i26<<3)|0);
  $phitmp112 = $add$ptr5$i$i27;
  $__first_$i$i$i$i$i = ((($container)) + 20|0);
  $25 = load4($__first_$i$i$i$i$i);
  $add$i$i34 = (($21) + ($25))|0;
  $div$i$i35 = $add$i$i34 >>> 9;
  $add$ptr$i$i36 = (($20) + ($div$i$i35<<2)|0);
  $rem$i$i39 = $add$i$i34 & 511;
  $26 = load4($add$ptr$i$i36);
  $add$ptr7$i$i40 = (($26) + ($rem$i$i39<<3)|0);
  $phitmp = $add$ptr7$i$i40;
  $__first_$i$i$i$i$i138 = $__first_$i$i$i$i$i;$add$ptr$i$i36139 = $add$ptr$i$i36;$cond$i$i29137 = $phitmp112;$cond$i$i42 = $phitmp;
 }
 $27 = $add$ptr$i$i36139;
 $28 = $add$ptr$i$i23;
 store4($agg$tmp$i$i,$28);
 $agg$tmp$i$i$sroa_raw_idx = ((($agg$tmp$i$i)) + 4|0);
 store4($agg$tmp$i$i$sroa_raw_idx,$cond$i$i29137);
 store4($agg$tmp1$i$i,$27);
 $agg$tmp1$i$i$sroa_raw_idx = ((($agg$tmp1$i$i)) + 4|0);
 store4($agg$tmp1$i$i$sroa_raw_idx,$cond$i$i42);
 ; store8($tmpcast$i$i$byval_copy,load8($agg$tmp$i$i,4),4);
 ; store8($tmpcast1$i$i$byval_copy,load8($agg$tmp1$i$i,4),4);
 __ZNSt3__26__sortIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($tmpcast$i$i$byval_copy,$tmpcast1$i$i$byval_copy,$agg$tmp24$i);
 $29 = load4($__begin_$i$i$i$pre$phi131ZZZZ2D);
 $30 = load4($__start_$i$i$pre$phi130ZZZ2D);
 $div$i$i69 = $30 >>> 9;
 $add$ptr$i$i70 = (($29) + ($div$i$i69<<2)|0);
 $31 = load4($__end_$i$i$i$pre$phi129ZZZZ2D);
 $cmp$i$i$i72 = ($31|0)==($29|0);
 if ($cmp$i$i$i72) {
  $32 = load4($__first_$i$i$i$i$i138);
  $add$i$i54140 = (($30) + ($32))|0;
  $div$i$i56141 = $add$i$i54140 >>> 9;
  $add$ptr$i$i57142 = (($29) + ($div$i$i56141<<2)|0);
  $add$ptr$i$i57144 = $add$ptr$i$i57142;$cond$i$i63$off32 = 0;$cond$i$i76$off32143 = 0;
 } else {
  $rem$i$i73 = $30 & 511;
  $33 = load4($add$ptr$i$i70);
  $add$ptr5$i$i74 = (($33) + ($rem$i$i73<<3)|0);
  $phitmp113 = $add$ptr5$i$i74;
  $34 = load4($__first_$i$i$i$i$i138);
  $add$i$i54 = (($30) + ($34))|0;
  $div$i$i56 = $add$i$i54 >>> 9;
  $add$ptr$i$i57 = (($29) + ($div$i$i56<<2)|0);
  $rem$i$i60 = $add$i$i54 & 511;
  $35 = load4($add$ptr$i$i57);
  $add$ptr7$i$i61 = (($35) + ($rem$i$i60<<3)|0);
  $phitmp116 = $add$ptr7$i$i61;
  $add$ptr$i$i57144 = $add$ptr$i$i57;$cond$i$i63$off32 = $phitmp116;$cond$i$i76$off32143 = $phitmp113;
 }
 $36 = $add$ptr$i$i57144;
 $37 = $cond$i$i76$off32143;
 $38 = $cond$i$i63$off32;
 $lnot$i$i$i$i = ($37|0)==($38|0);
 L36: do {
  if ($lnot$i$i$i$i) {
   $ref$tmp$sroa$0$0$i$i = $36;$ref$tmp$sroa$5$0$i$i = $cond$i$i63$off32;
  } else {
   $39 = $add$ptr$i$i70;
   $49 = $37;$tmpcast4$sroa$0$0$i$i = $39;$tmpcast4$sroa$6$0$i$i = $cond$i$i76$off32143;
   while(1) {
    $40 = $tmpcast4$sroa$6$0$i$i;
    $incdec$ptr$i$i$i$i = ((($40)) + 8|0);
    $41 = $incdec$ptr$i$i$i$i;
    $42 = $tmpcast4$sroa$0$0$i$i;
    $43 = load4($42);
    $sub$ptr$sub$i$i$i$i48 = (($41) - ($43))|0;
    $cmp$i6$i$i$i = ($sub$ptr$sub$i$i$i$i48|0)==(4096);
    if ($cmp$i6$i$i$i) {
     $44 = $tmpcast4$sroa$0$0$i$i;
     $incdec$ptr3$i$i$i$i = ((($44)) + 4|0);
     $45 = $incdec$ptr3$i$i$i$i;
     $46 = load4($incdec$ptr3$i$i$i$i);
     $__i$sroa$0$1$i$i$i = $45;$__i$sroa$7$1$i$i$i = $46;
    } else {
     $__i$sroa$0$1$i$i$i = $tmpcast4$sroa$0$0$i$i;$__i$sroa$7$1$i$i$i = $41;
    }
    $47 = $__i$sroa$7$1$i$i$i;
    $lnot$i4$i$i$i = ($47|0)==($38|0);
    if ($lnot$i4$i$i$i) {
     $ref$tmp$sroa$0$0$i$i = $36;$ref$tmp$sroa$5$0$i$i = $cond$i$i63$off32;
     break L36;
    }
    $48 = loadd($49);
    $50 = loadd($47);
    $cmp$i$i$i$i = $48 == $50;
    if ($cmp$i$i$i$i) {
     $ref$tmp$sroa$0$0$i$i = $tmpcast4$sroa$0$0$i$i;$ref$tmp$sroa$5$0$i$i = $tmpcast4$sroa$6$0$i$i;
     break;
    } else {
     $49 = $47;$tmpcast4$sroa$0$0$i$i = $__i$sroa$0$1$i$i$i;$tmpcast4$sroa$6$0$i$i = $__i$sroa$7$1$i$i$i;
    }
   }
  }
 } while(0);
 $51 = $ref$tmp$sroa$5$0$i$i;
 $lnot$i45$i$i = ($51|0)==($38|0);
 $52 = $ref$tmp$sroa$0$0$i$i;
 if ($lnot$i45$i$i) {
  __ZNSt3__212__deque_baseIdNS_9allocatorIdEEED2Ev($container);
  STACKTOP = sp;return;
 }
 $incdec$ptr$i34$i$i = ((($51)) + 8|0);
 $53 = $incdec$ptr$i34$i$i;
 $54 = $ref$tmp$sroa$0$0$i$i;
 $55 = load4($54);
 $sub$ptr$sub$i37$i$i = (($53) - ($55))|0;
 $cmp$i38$i$i = ($sub$ptr$sub$i37$i$i|0)==(4096);
 if ($cmp$i38$i$i) {
  $incdec$ptr3$i39$i$i = ((($52)) + 4|0);
  $56 = $incdec$ptr3$i39$i$i;
  $57 = load4($incdec$ptr3$i39$i$i);
  $$ph79$i$i = $52;$$ph80$i$i = $51;$__i$sroa$0$1$ph82$i$i = $56;$__i$sroa$7$1$ph81$i$i = $57;
 } else {
  $$ph79$i$i = $52;$$ph80$i$i = $51;$__i$sroa$0$1$ph82$i$i = $ref$tmp$sroa$0$0$i$i;$__i$sroa$7$1$ph81$i$i = $53;
 }
 L50: while(1) {
  $__i$sroa$0$1$i$i = $__i$sroa$0$1$ph82$i$i;$__i$sroa$7$1$i$i = $__i$sroa$7$1$ph81$i$i;
  while(1) {
   $58 = $__i$sroa$7$1$i$i;
   $incdec$ptr$i24$i$i = ((($58)) + 8|0);
   $59 = $incdec$ptr$i24$i$i;
   $60 = $__i$sroa$0$1$i$i;
   $61 = load4($60);
   $sub$ptr$sub$i27$i$i = (($59) - ($61))|0;
   $cmp$i28$i$i = ($sub$ptr$sub$i27$i$i|0)==(4096);
   if ($cmp$i28$i$i) {
    $62 = $__i$sroa$0$1$i$i;
    $incdec$ptr3$i29$i$i = ((($62)) + 4|0);
    $63 = $incdec$ptr3$i29$i$i;
    $64 = load4($incdec$ptr3$i29$i$i);
    $__i$sroa$0$2$i$i = $63;$__i$sroa$7$2$i$i = $64;
   } else {
    $__i$sroa$0$2$i$i = $__i$sroa$0$1$i$i;$__i$sroa$7$2$i$i = $59;
   }
   $65 = $__i$sroa$7$2$i$i;
   $lnot$i$i$i = ($65|0)==($38|0);
   if ($lnot$i$i$i) {
    break L50;
   }
   $66 = loadd($$ph80$i$i);
   $67 = loadd($65);
   $cmp$i20$i$i = $66 == $67;
   if ($cmp$i20$i$i) {
    $__i$sroa$0$1$i$i = $__i$sroa$0$2$i$i;$__i$sroa$7$1$i$i = $__i$sroa$7$2$i$i;
   } else {
    break;
   }
  }
  $incdec$ptr$i10$i$i = ((($$ph80$i$i)) + 8|0);
  $68 = load4($$ph79$i$i);
  $sub$ptr$lhs$cast$i12$i$i = $incdec$ptr$i10$i$i;
  $sub$ptr$sub$i13$i$i = (($sub$ptr$lhs$cast$i12$i$i) - ($68))|0;
  $cmp$i14$i$i = ($sub$ptr$sub$i13$i$i|0)==(4096);
  if ($cmp$i14$i$i) {
   $incdec$ptr3$i15$i$i = ((($$ph79$i$i)) + 4|0);
   $69 = load4($incdec$ptr3$i15$i$i);
   $70 = $69;$72 = $incdec$ptr3$i15$i$i;
  } else {
   $70 = $incdec$ptr$i10$i$i;$72 = $$ph79$i$i;
  }
  stored($70,$67);
  $$ph79$i$i = $72;$$ph80$i$i = $70;$__i$sroa$0$1$ph82$i$i = $__i$sroa$0$2$i$i;$__i$sroa$7$1$ph81$i$i = $__i$sroa$7$2$i$i;
 }
 __ZNSt3__212__deque_baseIdNS_9allocatorIdEEED2Ev($container);
 STACKTOP = sp;return;
}
function __ZNSt3__212__deque_baseIdNS_9allocatorIdEEED2Ev($this) {
 $this = $this|0;
 var $$cast$i = 0, $$in$i = 0, $$pre = 0, $$pre7 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__begin_$i$i$i = 0, $__end_$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__first_$i$i$i$i34$i = 0, $__first_$i$i$i$i37$i = 0, $__i$06 = 0, $__i$sroa$0$0$ph$i = 0, $__i$sroa$5$0$i = 0, $__i$sroa$5$0$ph$i = 0, $__new_last3$i$i$i$i = 0, $__start_$i$i = 0, $add$i$i = 0, $add$ptr$i$i = 0;
 var $add$ptr$i16$i = 0, $add$ptr$i5$i = 0, $add$ptr5$i$i = 0, $add$ptr7$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp1$i$i$i$i = 0, $cmp32$i = 0, $cmp5 = 0, $cond$i21$i = 0, $cond$i36$i = 0, $div$i$i = 0, $div$i15$i = 0, $incdec$ptr = 0, $incdec$ptr$i$i = 0, $incdec$ptr3$i$i = 0, $lnot$i$i = 0, $phitmp$i = 0;
 var $rem$i$i = 0, $rem$i19$i = 0, $scevgep$i$i$i$i = 0, $scevgep5$i$i$i$i = 0, $sub$ptr$div$i10$i = 0, $sub$ptr$div$i10$lcssa$i = 0, $sub$ptr$div$i1031$i = 0, $sub$ptr$sub$i11$i = 0, $sub$ptr$sub$i9$i = 0, $sub$ptr$sub$i930$i = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__begin_$i$i$i = ((($this)) + 4|0);
 $0 = load4($__begin_$i$i$i);
 $__start_$i$i = ((($this)) + 16|0);
 $1 = load4($__start_$i$i);
 $div$i$i = $1 >>> 9;
 $add$ptr$i5$i = (($0) + ($div$i$i<<2)|0);
 $__end_$i$i$i = ((($this)) + 8|0);
 $2 = load4($__end_$i$i$i);
 $cmp$i$i$i = ($2|0)==($0|0);
 $3 = $2;
 $4 = $0;
 if ($cmp$i$i$i) {
  $__first_$i$i$i$i34$i = ((($this)) + 20|0);
  $__first_$i$i$i$i37$i = $__first_$i$i$i$i34$i;$cond$i21$i = 0;$cond$i36$i = 0;
 } else {
  $rem$i$i = $1 & 511;
  $5 = load4($add$ptr$i5$i);
  $add$ptr5$i$i = (($5) + ($rem$i$i<<3)|0);
  $phitmp$i = $add$ptr5$i$i;
  $__first_$i$i$i$i$i = ((($this)) + 20|0);
  $6 = load4($__first_$i$i$i$i$i);
  $add$i$i = (($6) + ($1))|0;
  $rem$i19$i = $add$i$i & 511;
  $div$i15$i = $add$i$i >>> 9;
  $add$ptr$i16$i = (($0) + ($div$i15$i<<2)|0);
  $7 = load4($add$ptr$i16$i);
  $add$ptr7$i$i = (($7) + ($rem$i19$i<<3)|0);
  $__first_$i$i$i$i37$i = $__first_$i$i$i$i$i;$cond$i21$i = $add$ptr7$i$i;$cond$i36$i = $phitmp$i;
 }
 $__i$sroa$0$0$ph$i = $add$ptr$i5$i;$__i$sroa$5$0$ph$i = $cond$i36$i;
 L5: while(1) {
  $__i$sroa$5$0$i = $__i$sroa$5$0$ph$i;
  while(1) {
   $8 = $__i$sroa$5$0$i;
   $lnot$i$i = ($8|0)==($cond$i21$i|0);
   if ($lnot$i$i) {
    break L5;
   }
   $incdec$ptr$i$i = ((($8)) + 8|0);
   $9 = $incdec$ptr$i$i;
   $10 = load4($__i$sroa$0$0$ph$i);
   $sub$ptr$sub$i11$i = (($9) - ($10))|0;
   $cmp$i$i = ($sub$ptr$sub$i11$i|0)==(4096);
   if ($cmp$i$i) {
    break;
   } else {
    $__i$sroa$5$0$i = $9;
   }
  }
  $incdec$ptr3$i$i = ((($__i$sroa$0$0$ph$i)) + 4|0);
  $11 = load4($incdec$ptr3$i$i);
  $__i$sroa$0$0$ph$i = $incdec$ptr3$i$i;$__i$sroa$5$0$ph$i = $11;
 }
 store4($__first_$i$i$i$i37$i,0);
 $sub$ptr$sub$i930$i = (($3) - ($4))|0;
 $sub$ptr$div$i1031$i = $sub$ptr$sub$i930$i >> 2;
 $cmp32$i = ($sub$ptr$div$i1031$i>>>0)>(2);
 if ($cmp32$i) {
  $$in$i = $0;
  while(1) {
   $12 = load4($$in$i);
   __ZdlPv($12);
   $13 = load4($__begin_$i$i$i);
   $add$ptr$i$i = ((($13)) + 4|0);
   store4($__begin_$i$i$i,$add$ptr$i$i);
   $14 = load4($__end_$i$i$i);
   $$cast$i = $add$ptr$i$i;
   $sub$ptr$sub$i9$i = (($14) - ($$cast$i))|0;
   $sub$ptr$div$i10$i = $sub$ptr$sub$i9$i >> 2;
   $cmp$i = ($sub$ptr$div$i10$i>>>0)>(2);
   if ($cmp$i) {
    $$in$i = $add$ptr$i$i;
   } else {
    $sub$ptr$div$i10$lcssa$i = $sub$ptr$div$i10$i;
    break;
   }
  }
 } else {
  $sub$ptr$div$i10$lcssa$i = $sub$ptr$div$i1031$i;
 }
 switch ($sub$ptr$div$i10$lcssa$i|0) {
 case 1:  {
  store4($__start_$i$i,256);
  break;
 }
 case 2:  {
  store4($__start_$i$i,512);
  break;
 }
 default: {
 }
 }
 $15 = load4($__begin_$i$i$i);
 $16 = load4($__end_$i$i$i);
 $cmp5 = ($15|0)==($16|0);
 if (!($cmp5)) {
  $__i$06 = $15;
  while(1) {
   $17 = load4($__i$06);
   __ZdlPv($17);
   $incdec$ptr = ((($__i$06)) + 4|0);
   $cmp = ($incdec$ptr|0)==($16|0);
   if ($cmp) {
    break;
   } else {
    $__i$06 = $incdec$ptr;
   }
  }
  $$pre = load4($__begin_$i$i$i);
  $$pre7 = load4($__end_$i$i$i);
  $cmp1$i$i$i$i = ($$pre7|0)==($$pre|0);
  if (!($cmp1$i$i$i$i)) {
   $__new_last3$i$i$i$i = $$pre;
   $scevgep$i$i$i$i = ((($$pre7)) + -4|0);
   $18 = $scevgep$i$i$i$i;
   $19 = (($18) - ($__new_last3$i$i$i$i))|0;
   $20 = $19 >>> 2;
   $21 = $20 ^ -1;
   $scevgep5$i$i$i$i = (($$pre7) + ($21<<2)|0);
   store4($__end_$i$i$i,$scevgep5$i$i$i$i);
  }
 }
 $22 = load4($this);
 $tobool$i = ($22|0)==(0|0);
 if ($tobool$i) {
  return;
 }
 __ZdlPv($22);
 return;
}
function __Z9list_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $$lcssa29$i$i = 0, $$pre = 0, $$pre$phiZ2D = 0, $0 = 0, $1 = 0.0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__f$016$i$i = 0, $__f$addr$010$i = 0;
 var $__first_$i$i$i$i = 0, $__i$sroa$0$0$be$i$i = 0, $__i$sroa$0$036$i$i = 0, $__j$sroa$0$0$lcssa$i$i = 0, $__j$sroa$0$031$i$i = 0, $__next_$i$i$i = 0, $__next_$i$i$i$i$i$i = 0, $__next_$i$i$i10 = 0, $__next_$i$i4$i$i = 0, $__next_$i$i6$i = 0, $__next_$i10$i$i$i = 0, $__next_$i6$i$i = 0, $__next_1$i$i$i = 0, $__next_1$i$i$i$i7 = 0, $__next_4$i$i$i = 0, $__next_6$i$i = 0, $__value_$i$i = 0, $__value_$i$i$i = 0, $__value_$i7$i$i = 0, $agg$tmp$i$i = 0;
 var $agg$tmp$i$i$byval_copy = 0, $agg$tmp1$i = 0, $agg$tmp2$i$i = 0, $agg$tmp2$i$i$byval_copy = 0, $call$i$i$i$i8$i = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i4 = 0, $cmp$i$i$i9 = 0, $cmp15$i$i = 0, $cmp9$i = 0, $container = 0, $dec$i$i$i = 0, $inc$i$i = 0, $incdec$ptr$i = 0, $lnot$i$i$i = 0, $lnot$i10$i$i = 0, $lnot$i1030$i$i = 0, $lnot$i14$i$i = 0, $lnot$i1435$i$i = 0;
 var $lnot$i9$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp2$i$i$byval_copy = sp + 28|0;
 $agg$tmp$i$i$byval_copy = sp + 24|0;
 $agg$tmp$i$i = sp + 20|0;
 $agg$tmp2$i$i = sp + 16|0;
 $agg$tmp1$i = sp;
 $container = sp + 4|0;
 store4($container,$container);
 $__next_$i$i$i = ((($container)) + 4|0);
 store4($__next_$i$i$i,$container);
 $__first_$i$i$i$i = ((($container)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $cmp9$i = ($first|0)==($last|0);
 if ($cmp9$i) {
  $0 = $container;
  $$pre$phiZ2D = $__next_$i$i$i;$4 = $0;$5 = 0;
 } else {
  $2 = $container;$3 = 0;$__f$addr$010$i = $first;
  while(1) {
   $call$i$i$i$i8$i = (__Znwj(16)|0);
   $__value_$i$i = ((($call$i$i$i$i8$i)) + 8|0);
   $1 = loadd($__f$addr$010$i);
   stored($__value_$i$i,$1);
   $__next_$i$i6$i = ((($call$i$i$i$i8$i)) + 4|0);
   store4($__next_$i$i6$i,$container);
   store4($call$i$i$i$i8$i,$2);
   $__next_4$i$i$i = ((($2)) + 4|0);
   store4($__next_4$i$i$i,$call$i$i$i$i8$i);
   store4($container,$call$i$i$i$i8$i);
   $inc$i$i = (($3) + 1)|0;
   store4($__first_$i$i$i$i,$inc$i$i);
   $incdec$ptr$i = ((($__f$addr$010$i)) + 8|0);
   $cmp$i = ($incdec$ptr$i|0)==($last|0);
   if ($cmp$i) {
    break;
   } else {
    $2 = $call$i$i$i$i8$i;$3 = $inc$i$i;$__f$addr$010$i = $incdec$ptr$i;
   }
  }
  $$pre = load4($__next_$i$i$i);
  $$pre$phiZ2D = $__next_$i$i$i;$4 = $$pre;$5 = $inc$i$i;
 }
 store4($agg$tmp$i$i,$4);
 store4($agg$tmp2$i$i,$container);
 ; store4($agg$tmp$i$i$byval_copy,load4($agg$tmp$i$i,4),4);
 ; store4($agg$tmp2$i$i$byval_copy,load4($agg$tmp2$i$i,4),4);
 (__ZNSt3__24listIdNS_9allocatorIdEEE6__sortINS_6__lessIddEEEENS_15__list_iteratorIdPvEES9_S9_jRT_($agg$tmp$i$i$byval_copy,$agg$tmp2$i$i$byval_copy,$5,$agg$tmp1$i)|0);
 $6 = load4($$pre$phiZ2D);
 $7 = $6;
 $lnot$i1435$i$i = ($7|0)==($container|0);
 if (!($lnot$i1435$i$i)) {
  $8 = $7;$__i$sroa$0$036$i$i = $6;
  while(1) {
   $__next_$i$i$i$i$i$i = ((($8)) + 4|0);
   $9 = load4($__next_$i$i$i$i$i$i);
   $10 = $9;
   $lnot$i1030$i$i = ($9|0)==($container|0);
   L11: do {
    if ($lnot$i1030$i$i) {
     $$lcssa29$i$i = $container;$__j$sroa$0$0$lcssa$i$i = $10;
    } else {
     $11 = $__i$sroa$0$036$i$i;
     $__value_$i7$i$i = ((($11)) + 8|0);
     $12 = loadd($__value_$i7$i$i);
     $15 = $9;$__j$sroa$0$031$i$i = $10;
     while(1) {
      $13 = $__j$sroa$0$031$i$i;
      $__value_$i$i$i = ((($13)) + 8|0);
      $14 = loadd($__value_$i$i$i);
      $cmp$i$i$i4 = $12 == $14;
      if (!($cmp$i$i$i4)) {
       $$lcssa29$i$i = $15;$__j$sroa$0$0$lcssa$i$i = $__j$sroa$0$031$i$i;
       break L11;
      }
      $__next_$i6$i$i = ((($15)) + 4|0);
      $16 = load4($__next_$i6$i$i);
      $17 = $16;
      $lnot$i10$i$i = ($17|0)==($container|0);
      if ($lnot$i10$i$i) {
       $$lcssa29$i$i = $container;$__j$sroa$0$0$lcssa$i$i = $16;
       break;
      } else {
       $15 = $17;$__j$sroa$0$031$i$i = $16;
      }
     }
    }
   } while(0);
   $lnot$i$i$i = ($9|0)==($$lcssa29$i$i|0);
   if ($lnot$i$i$i) {
    $__i$sroa$0$0$be$i$i = $10;
   } else {
    $19 = load4($$lcssa29$i$i);
    $__next_$i10$i$i$i = ((($19)) + 4|0);
    $20 = load4($__next_$i10$i$i$i);
    $21 = load4($9);
    $__next_1$i$i$i$i7 = ((($21)) + 4|0);
    store4($__next_1$i$i$i$i7,$20);
    $22 = $21;
    $23 = load4($__next_$i10$i$i$i);
    store4($23,$22);
    $24 = $9;
    while(1) {
     $__next_$i$i4$i$i = ((($24)) + 4|0);
     $25 = load4($__next_$i$i4$i$i);
     $26 = load4($__first_$i$i$i$i);
     $dec$i$i$i = (($26) + -1)|0;
     store4($__first_$i$i$i$i,$dec$i$i$i);
     __ZdlPv($24);
     $lnot$i9$i$i$i = ($25|0)==($$lcssa29$i$i|0);
     if ($lnot$i9$i$i$i) {
      $__i$sroa$0$0$be$i$i = $__j$sroa$0$0$lcssa$i$i;
      break;
     } else {
      $24 = $25;
     }
    }
   }
   $18 = $__i$sroa$0$0$be$i$i;
   $lnot$i14$i$i = ($18|0)==($container|0);
   if ($lnot$i14$i$i) {
    break;
   } else {
    $8 = $18;$__i$sroa$0$036$i$i = $__i$sroa$0$0$be$i$i;
   }
  }
 }
 $27 = load4($__first_$i$i$i$i);
 $cmp$i$i$i9 = ($27|0)==(0);
 if ($cmp$i$i$i9) {
  STACKTOP = sp;return;
 }
 $28 = load4($__next_$i$i$i);
 $29 = load4($container);
 $__next_$i$i$i10 = ((($29)) + 4|0);
 $30 = load4($__next_$i$i$i10);
 $31 = load4($28);
 $__next_1$i$i$i = ((($31)) + 4|0);
 store4($__next_1$i$i$i,$30);
 $32 = $31;
 $33 = load4($__next_$i$i$i10);
 store4($33,$32);
 store4($__first_$i$i$i$i,0);
 $cmp15$i$i = ($28|0)==($container|0);
 if ($cmp15$i$i) {
  STACKTOP = sp;return;
 } else {
  $__f$016$i$i = $28;
 }
 while(1) {
  $__next_6$i$i = ((($__f$016$i$i)) + 4|0);
  $34 = load4($__next_6$i$i);
  __ZdlPv($__f$016$i$i);
  $cmp$i$i = ($34|0)==($container|0);
  if ($cmp$i$i) {
   break;
  } else {
   $__f$016$i$i = $34;
  }
 }
 STACKTOP = sp;return;
}
function __Z8set_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $$pre = 0, $$pre$i$i$i$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0.0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__f$addr$07$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__left_$i$i$i$i$i = 0, $__parent$i$i$i$i = 0, $__parent_$i$i$i$i$i = 0, $__right_$i$i$i$i$i = 0;
 var $__value_$i$i$i$i$i = 0, $agg$tmp$i$i$i$i = 0, $agg$tmp$i$i$i$i$byval_copy = 0, $call$i$i$i$i = 0, $call$i$i$i$i$i$i$i2$i = 0, $cmp$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp6$i$i = 0, $container = 0, $inc$i$i$i$i$i = 0, $incdec$ptr$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp$i$i$i$i$byval_copy = sp + 20|0;
 $__parent$i$i$i$i = sp + 16|0;
 $agg$tmp$i$i$i$i = sp + 12|0;
 $container = sp;
 $__left_$i$i$i$i$i = ((($container)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($container)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($container)) + 4|0);
 store4($container,$__first_$i$i$i$i$i);
 $cmp6$i$i = ($first|0)==($last|0);
 if ($cmp6$i$i) {
  $10 = 0;
  __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($container,$10);
  STACKTOP = sp;return;
 }
 $0 = $__first_$i$i$i$i$i;
 $__f$addr$07$i$i = $first;
 while(1) {
  store4($agg$tmp$i$i$i$i,$0);
  ; store4($agg$tmp$i$i$i$i$byval_copy,load4($agg$tmp$i$i$i$i,4),4);
  $call$i$i$i$i = (__ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE12__find_equalIdEERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIdPNS_11__tree_nodeIdS8_EEiEESB_RKT_($container,$agg$tmp$i$i$i$i$byval_copy,$__parent$i$i$i$i,$__f$addr$07$i$i)|0);
  $1 = load4($call$i$i$i$i);
  $cmp$i$i$i$i = ($1|0)==(0|0);
  if ($cmp$i$i$i$i) {
   $call$i$i$i$i$i$i$i2$i = (__Znwj(24)|0);
   $__value_$i$i$i$i$i = ((($call$i$i$i$i$i$i$i2$i)) + 16|0);
   $2 = loadd($__f$addr$07$i$i);
   stored($__value_$i$i$i$i$i,$2);
   $3 = load4($__parent$i$i$i$i);
   store4($call$i$i$i$i$i$i$i2$i,0);
   $__right_$i$i$i$i$i = ((($call$i$i$i$i$i$i$i2$i)) + 4|0);
   store4($__right_$i$i$i$i$i,0);
   $__parent_$i$i$i$i$i = ((($call$i$i$i$i$i$i$i2$i)) + 8|0);
   store4($__parent_$i$i$i$i$i,$3);
   store4($call$i$i$i$i,$call$i$i$i$i$i$i$i2$i);
   $4 = load4($container);
   $5 = load4($4);
   $cmp$i$i$i$i$i = ($5|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $8 = $call$i$i$i$i$i$i$i2$i;
   } else {
    $6 = $5;
    store4($container,$6);
    $$pre$i$i$i$i$i = load4($call$i$i$i$i);
    $8 = $$pre$i$i$i$i$i;
   }
   $7 = load4($__left_$i$i$i$i$i);
   __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($7,$8);
   $9 = load4($__first_$i$i$i$i);
   $inc$i$i$i$i$i = (($9) + 1)|0;
   store4($__first_$i$i$i$i,$inc$i$i$i$i$i);
  }
  $incdec$ptr$i$i = ((($__f$addr$07$i$i)) + 8|0);
  $cmp$i$i = ($incdec$ptr$i$i|0)==($last|0);
  if ($cmp$i$i) {
   break;
  } else {
   $__f$addr$07$i$i = $incdec$ptr$i$i;
  }
 }
 $$pre = load4($__first_$i$i$i$i$i);
 $10 = $$pre;
 __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($container,$10);
 STACKTOP = sp;return;
}
function __Z13multiset_testPdS_i($first,$last,$number_of_times) {
 $first = $first|0;
 $last = $last|0;
 $number_of_times = $number_of_times|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i$i = 0, $$pre$i$i$i$i = 0, $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0.0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0.0, $31 = 0.0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0, $__begin_node_$i$i$i$pre$phiZZZZ2D = 0, $__f$addr$010$i$i = 0, $__first_$i$i$i$i = 0, $__first_$i$i$i$i$i = 0, $__left_$i$i$i$i$i = 0, $__nd$0$i12$i$i$in$i$i = 0, $__parent$0$i$i$i = 0, $__parent_$i$i$i = 0, $__parent_$i$i$i$i = 0;
 var $__parent_$i$i$i$i$i = 0, $__parent_$i$i$i$i$i$i$i = 0, $__parent_$i$i$i13 = 0, $__prior$sroa$0$0$i$i$i$i = 0, $__right_$i$i = 0, $__right_$i$i$i$i = 0, $__right_$i$i$i$i$i$i$i = 0, $__right_$i6$i$i$i = 0, $__value_$i = 0, $__value_$i$i$i$i = 0, $__value_$i13$i$i$i$i = 0, $__value_$i27 = 0, $__value_$i30$i$i$i$i = 0, $__x$addr$0$i$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i$i = 0, $__x$addr$0$i$i$i8 = 0;
 var $__x$addr$0$i$i12 = 0, $call$i$i$i$i$i$i1$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i$i = 0, $cmp$i$i$i$i21 = 0, $cmp$i$i$i15 = 0, $cmp$i$i14$i$i$i$i = 0, $cmp$i$i24 = 0, $cmp$i$i3 = 0, $cmp$i$i31$i$i$i$i = 0, $cmp$i$i7 = 0, $cmp$i29$i$i$i$i = 0, $cmp$i33$i$i$i$i = 0, $cmp$i4$i$i$i$i$i$i = 0, $cmp$i5$i$i = 0;
 var $cmp$i5$i$i$i$i = 0, $cmp$i5$i$i10 = 0, $cmp$i7$i$i$i = 0, $cmp11$i17$i$i$i$i = 0, $cmp20$i20$i$i$i$i = 0, $cmp9$i$i = 0, $container = 0, $dec$i$i = 0, $first1$sroa$0$0$ph47 = 0, $inc$i$i$i$i = 0, $incdec$ptr$i$i = 0, $lnot$i = 0, $lnot$i46 = 0, $retval$0$i$i = 0, $retval$0$i$i$i$i = 0, $retval$0$i$i$i$i$i$i = 0, $retval$0$i$i18 = 0, $retval$1$i$i$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $container = sp;
 $__left_$i$i$i$i$i = ((($container)) + 4|0);
 store4($__left_$i$i$i$i$i,0);
 $__first_$i$i$i$i = ((($container)) + 8|0);
 store4($__first_$i$i$i$i,0);
 $__first_$i$i$i$i$i = ((($container)) + 4|0);
 store4($container,$__first_$i$i$i$i$i);
 $cmp9$i$i = ($first|0)==($last|0);
 $0 = $__first_$i$i$i$i$i;
 if ($cmp9$i$i) {
  $$pre$phiZ2D = $container;$22 = $0;$__begin_node_$i$i$i$pre$phiZZZZ2D = $container;
 } else {
  $1 = $__first_$i$i$i$i$i;$__f$addr$010$i$i = $first;
  while(1) {
   $cmp$i33$i$i$i$i = ($__first_$i$i$i$i$i|0)==($1|0);
   if ($cmp$i33$i$i$i$i) {
    $$pre$i$i$i = load4($__first_$i$i$i$i$i);
    $9 = $$pre$i$i$i;$__prior$sroa$0$0$i$i$i$i = $0;
    label = 10;
   } else {
    $2 = load4($__first_$i$i$i$i$i);
    $cmp$i$i31$i$i$i$i = ($2|0)==(0|0);
    if ($cmp$i$i31$i$i$i$i) {
     $__x$addr$0$i$i$i$i$i$i = $__first_$i$i$i$i$i;
     while(1) {
      $__parent_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i)) + 8|0);
      $4 = load4($__parent_$i$i$i$i$i$i$i);
      $5 = load4($4);
      $cmp$i$i$i$i$i$i$i = ($5|0)==($__x$addr$0$i$i$i$i$i$i|0);
      if ($cmp$i$i$i$i$i$i$i) {
       $__x$addr$0$i$i$i$i$i$i = $4;
      } else {
       $retval$0$i$i$i$i$i$i = $4;
       break;
      }
     }
    } else {
     $__x$addr$0$i$i$i$i$i$i$i = $2;
     while(1) {
      $__right_$i$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i$i$i)) + 4|0);
      $3 = load4($__right_$i$i$i$i$i$i$i);
      $cmp$i4$i$i$i$i$i$i = ($3|0)==(0|0);
      if ($cmp$i4$i$i$i$i$i$i) {
       $retval$0$i$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i$i;
       break;
      } else {
       $__x$addr$0$i$i$i$i$i$i$i = $3;
      }
     }
    }
    $6 = $retval$0$i$i$i$i$i$i;
    $__value_$i30$i$i$i$i = ((($retval$0$i$i$i$i$i$i)) + 16|0);
    $7 = loadd($__f$addr$010$i$i);
    $8 = loadd($__value_$i30$i$i$i$i);
    $cmp$i29$i$i$i$i = $7 < $8;
    if ($cmp$i29$i$i$i$i) {
     if ($cmp$i$i31$i$i$i$i) {
      $__parent$0$i$i$i = $__first_$i$i$i$i$i;$retval$1$i$i$i$i = $__first_$i$i$i$i$i;
     } else {
      $__nd$0$i12$i$i$in$i$i = $2;
      while(1) {
       $__value_$i13$i$i$i$i = ((($__nd$0$i12$i$i$in$i$i)) + 16|0);
       $11 = loadd($__value_$i13$i$i$i$i);
       $cmp$i$i14$i$i$i$i = $7 < $11;
       if ($cmp$i$i14$i$i$i$i) {
        $12 = load4($__nd$0$i12$i$i$in$i$i);
        $cmp11$i17$i$i$i$i = ($12|0)==(0|0);
        if ($cmp11$i17$i$i$i$i) {
         $__parent$0$i$i$i = $__nd$0$i12$i$i$in$i$i;$retval$1$i$i$i$i = $__nd$0$i12$i$i$in$i$i;
         break;
        } else {
         $__nd$0$i12$i$i$in$i$i = $12;
         continue;
        }
       } else {
        $13 = ((($__nd$0$i12$i$i$in$i$i)) + 4|0);
        $14 = load4($13);
        $cmp20$i20$i$i$i$i = ($14|0)==(0|0);
        if ($cmp20$i20$i$i$i$i) {
         $__parent$0$i$i$i = $__nd$0$i12$i$i$in$i$i;$retval$1$i$i$i$i = $13;
         break;
        } else {
         $__nd$0$i12$i$i$in$i$i = $14;
         continue;
        }
       }
      }
     }
    } else {
     $9 = $2;$__prior$sroa$0$0$i$i$i$i = $6;
     label = 10;
    }
   }
   if ((label|0) == 10) {
    label = 0;
    $cmp$i$i$i$i = ($9|0)==(0|0);
    if ($cmp$i$i$i$i) {
     $__parent$0$i$i$i = $__first_$i$i$i$i$i;$retval$1$i$i$i$i = $__first_$i$i$i$i$i;
    } else {
     $10 = $__prior$sroa$0$0$i$i$i$i;
     $__right_$i$i$i$i = ((($10)) + 4|0);
     $__parent$0$i$i$i = $10;$retval$1$i$i$i$i = $__right_$i$i$i$i;
    }
   }
   $call$i$i$i$i$i$i1$i = (__Znwj(24)|0);
   $__value_$i$i$i$i = ((($call$i$i$i$i$i$i1$i)) + 16|0);
   $15 = loadd($__f$addr$010$i$i);
   stored($__value_$i$i$i$i,$15);
   store4($call$i$i$i$i$i$i1$i,0);
   $__right_$i6$i$i$i = ((($call$i$i$i$i$i$i1$i)) + 4|0);
   store4($__right_$i6$i$i$i,0);
   $__parent_$i$i$i$i = ((($call$i$i$i$i$i$i1$i)) + 8|0);
   store4($__parent_$i$i$i$i,$__parent$0$i$i$i);
   store4($retval$1$i$i$i$i,$call$i$i$i$i$i$i1$i);
   $16 = load4($container);
   $17 = load4($16);
   $cmp$i7$i$i$i = ($17|0)==(0|0);
   if ($cmp$i7$i$i$i) {
    $20 = $call$i$i$i$i$i$i1$i;
   } else {
    $18 = $17;
    store4($container,$18);
    $$pre$i$i$i$i = load4($retval$1$i$i$i$i);
    $20 = $$pre$i$i$i$i;
   }
   $19 = load4($__left_$i$i$i$i$i);
   __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($19,$20);
   $21 = load4($__first_$i$i$i$i);
   $inc$i$i$i$i = (($21) + 1)|0;
   store4($__first_$i$i$i$i,$inc$i$i$i$i);
   $incdec$ptr$i$i = ((($__f$addr$010$i$i)) + 8|0);
   $cmp$i$i = ($incdec$ptr$i$i|0)==($last|0);
   if ($cmp$i$i) {
    break;
   }
   $$pre$i = load4($container);
   $1 = $$pre$i;$__f$addr$010$i$i = $incdec$ptr$i$i;
  }
  $$pre = load4($container);
  $$pre$phiZ2D = $container;$22 = $$pre;$__begin_node_$i$i$i$pre$phiZZZZ2D = $container;
 }
 $23 = $22;
 $lnot$i46 = ($23|0)==($__first_$i$i$i$i$i|0);
 if ($lnot$i46) {
  $45 = load4($__first_$i$i$i$i$i);
  __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($container,$45);
  STACKTOP = sp;return;
 }
 $25 = $23;$first1$sroa$0$0$ph47 = $22;
 L34: while(1) {
  $24 = $first1$sroa$0$0$ph47;
  $__right_$i$i = ((($24)) + 4|0);
  $__value_$i = ((($25)) + 16|0);
  while(1) {
   $26 = load4($__right_$i$i);
   $cmp$i$i3 = ($26|0)==(0|0);
   if ($cmp$i$i3) {
    $__x$addr$0$i$i = $24;
    while(1) {
     $__parent_$i$i$i = ((($__x$addr$0$i$i)) + 8|0);
     $28 = load4($__parent_$i$i$i);
     $29 = load4($28);
     $cmp$i$i$i = ($29|0)==($__x$addr$0$i$i|0);
     if ($cmp$i$i$i) {
      $retval$0$i$i = $28;
      break;
     } else {
      $__x$addr$0$i$i = $28;
     }
    }
   } else {
    $__x$addr$0$i$i$i = $26;
    while(1) {
     $27 = load4($__x$addr$0$i$i$i);
     $cmp$i5$i$i = ($27|0)==(0|0);
     if ($cmp$i5$i$i) {
      $retval$0$i$i = $__x$addr$0$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i = $27;
     }
    }
   }
   $cmp$i = ($retval$0$i$i|0)==($__first_$i$i$i$i$i|0);
   if ($cmp$i) {
    label = 39;
    break L34;
   }
   $30 = loadd($__value_$i);
   $__value_$i27 = ((($retval$0$i$i)) + 16|0);
   $31 = loadd($__value_$i27);
   $cmp = $30 == $31;
   if (!($cmp)) {
    break;
   }
   $32 = ((($retval$0$i$i)) + 4|0);
   $33 = load4($32);
   $cmp$i$i$i$i21 = ($33|0)==(0|0);
   if ($cmp$i$i$i$i21) {
    $__x$addr$0$i$i$i$i = $retval$0$i$i;
    while(1) {
     $__parent_$i$i$i$i$i = ((($__x$addr$0$i$i$i$i)) + 8|0);
     $35 = load4($__parent_$i$i$i$i$i);
     $36 = load4($35);
     $cmp$i$i$i$i$i = ($36|0)==($__x$addr$0$i$i$i$i|0);
     if ($cmp$i$i$i$i$i) {
      $retval$0$i$i$i$i = $35;
      break;
     } else {
      $__x$addr$0$i$i$i$i = $35;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i = $33;
    while(1) {
     $34 = load4($__x$addr$0$i$i$i$i$i);
     $cmp$i5$i$i$i$i = ($34|0)==(0|0);
     if ($cmp$i5$i$i$i$i) {
      $retval$0$i$i$i$i = $__x$addr$0$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $34;
     }
    }
   }
   $37 = load4($__begin_node_$i$i$i$pre$phiZZZZ2D);
   $cmp$i$i24 = ($37|0)==($retval$0$i$i|0);
   if ($cmp$i$i24) {
    $38 = $retval$0$i$i$i$i;
    store4($$pre$phiZ2D,$38);
   }
   $39 = load4($__first_$i$i$i$i);
   $dec$i$i = (($39) + -1)|0;
   store4($__first_$i$i$i$i,$dec$i$i);
   $40 = load4($__left_$i$i$i$i$i);
   __ZNSt3__213__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_($40,$retval$0$i$i);
   __ZdlPv($retval$0$i$i);
  }
  $cmp$i$i7 = ($26|0)==(0|0);
  if ($cmp$i$i7) {
   $__x$addr$0$i$i12 = $24;
   while(1) {
    $__parent_$i$i$i13 = ((($__x$addr$0$i$i12)) + 8|0);
    $42 = load4($__parent_$i$i$i13);
    $43 = load4($42);
    $cmp$i$i$i15 = ($43|0)==($__x$addr$0$i$i12|0);
    if ($cmp$i$i$i15) {
     $retval$0$i$i18 = $42;
     break;
    } else {
     $__x$addr$0$i$i12 = $42;
    }
   }
  } else {
   $__x$addr$0$i$i$i8 = $26;
   while(1) {
    $41 = load4($__x$addr$0$i$i$i8);
    $cmp$i5$i$i10 = ($41|0)==(0|0);
    if ($cmp$i5$i$i10) {
     $retval$0$i$i18 = $__x$addr$0$i$i$i8;
     break;
    } else {
     $__x$addr$0$i$i$i8 = $41;
    }
   }
  }
  $44 = $retval$0$i$i18;
  $lnot$i = ($retval$0$i$i18|0)==($__first_$i$i$i$i$i|0);
  if ($lnot$i) {
   label = 39;
   break;
  } else {
   $25 = $retval$0$i$i18;$first1$sroa$0$0$ph47 = $44;
  }
 }
 if ((label|0) == 39) {
  $45 = load4($__first_$i$i$i$i$i);
  __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($container,$45);
  STACKTOP = sp;return;
 }
}
function __Z9run_testsi($size) {
 $size = $size|0;
 var $$arith = 0, $$overflow = 0, $$pn = 0, $0 = 0, $1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0;
 var $9 = 0.0, $__end_$i$i = 0, $__end_cap_$i$i = 0, $__first$addr$0$i$i$i$i = 0, $__first$addr$0$ph$i$i$i = 0, $__first_$i$i$i$i = 0, $__i$0$i$i$i = 0, $__i$0$ph$i$i$i = 0, $__new_last3$i$i$i = 0, $add$i = 0.0, $add$i46 = 0.0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i54 = 0, $add$ptr145 = 0, $add$ptr147 = 0, $agg$tmp1$i$i = 0, $arrayidx$i$idx = 0, $arrayidx$i146 = 0, $buf = 0;
 var $call$i$i$i$i39 = 0, $call$i5$i = 0.0, $call$i56 = 0, $call$i56$us = 0, $call3$i = 0.0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i13$i = 0, $cmp$i101 = 0, $cmp$i12$i$i$i = 0, $cmp$i37 = 0, $cmp$i41 = 0, $cmp$i47 = 0, $cmp$i50 = 0, $cmp$i50$us = 0, $cmp$i61 = 0, $cmp$i68 = 0, $cmp$i75 = 0;
 var $cmp$i82 = 0, $cmp$i89 = 0, $cmp$i96 = 0, $cmp1$i$i$i = 0, $cmp1$i$i$i$i55 = 0, $cmp1$i$i$i102 = 0, $cmp2$i$i$i = 0, $cmp3$i = 0, $cmp4$i42 = 0, $conv$i = 0.0, $conv4$i = 0, $dec4$i = 0, $dec4$i$us = 0, $dec4$i60 = 0, $dec4$i67 = 0, $dec4$i74 = 0, $dec4$i81 = 0, $dec4$i88 = 0, $dec4$i95 = 0, $dec4$in$i = 0;
 var $dec4$in$i$us = 0, $dec4$in$i59 = 0, $dec4$in$i66 = 0, $dec4$in$i73 = 0, $dec4$in$i80 = 0, $dec4$in$i87 = 0, $dec4$in$i94 = 0, $div$i = 0.0, $div$i6$i = 0.0, $first$addr$05$i = 0, $first$addr$05$i44 = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i$i = 0, $incdec$ptr$i$i$i$i = 0, $incdec$ptr$i45 = 0, $incdec$ptr1$i$i$i = 0, $incdec$ptr6$i$i$i = 0, $mul = 0, $mul$i$i$i = 0, $mul2$i = 0.0;
 var $retval$1$i$i$i$i = 0, $scevgep$i$i$i = 0, $scevgep$i$i$i104 = 0, $scevgep5$i$i$i = 0, $scevgep5$i$i$i105 = 0, $sub$ptr$div$i = 0, $value$06$i = 0.0, $value$06$i43 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $agg$tmp1$i$i = sp;
 $buf = sp + 4|0;
 $conv$i = (+($size|0));
 $call$i5$i = (+_log($conv$i));
 $div$i6$i = $call$i5$i / 0.69314718055994529;
 $mul2$i = $conv$i * $div$i6$i;
 $div$i = 19931568.569324173 / $mul2$i;
 $call3$i = (+Math_floor((+$div$i)));
 $conv4$i = (~~(($call3$i)));
 $mul = $size << 1;
 $0 = load4(4608);
 $1 = load4((4612));
 $cmp1$i$i$i = ($1|0)==($0|0);
 if (!($cmp1$i$i$i)) {
  $__new_last3$i$i$i = $0;
  $scevgep$i$i$i = ((($1)) + -8|0);
  $2 = $scevgep$i$i$i;
  $3 = (($2) - ($__new_last3$i$i$i))|0;
  $4 = $3 >>> 3;
  $5 = $4 ^ -1;
  $scevgep5$i$i$i = (($1) + ($5<<3)|0);
  store4((4612),$scevgep5$i$i$i);
 }
 store4($buf,0);
 $__end_$i$i = ((($buf)) + 4|0);
 store4($__end_$i$i,0);
 $__end_cap_$i$i = ((($buf)) + 8|0);
 store4($__end_cap_$i$i,0);
 $cmp$i = ($size|0)==(0);
 if ($cmp$i) {
  $add$ptr145 = (0 + ($size<<3)|0);
  $$pn = 0;$add$ptr147 = $add$ptr145;
 } else {
  $cmp$i37 = ($mul>>>0)>(536870911);
  if ($cmp$i37) {
   __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($buf);
   // unreachable;
  }
  $mul$i$i$i = $size << 4;
  $call$i$i$i$i39 = (__Znwj($mul$i$i$i)|0);
  store4($buf,$call$i$i$i$i39);
  $add$ptr$i = (($call$i$i$i$i39) + ($mul<<3)|0);
  $__first_$i$i$i$i = ((($buf)) + 8|0);
  store4($__first_$i$i$i$i,$add$ptr$i);
  _memset(($call$i$i$i$i39|0),0,($mul$i$i$i|0))|0;
  store4($__end_$i$i,$add$ptr$i);
  $add$ptr = (($call$i$i$i$i39) + ($size<<3)|0);
  $first$addr$05$i = $call$i$i$i$i39;$value$06$i = 0.0;
  while(1) {
   $incdec$ptr$i = ((($first$addr$05$i)) + 8|0);
   stored($first$addr$05$i,$value$06$i);
   $add$i = $value$06$i + 1.0;
   $cmp$i41 = ($incdec$ptr$i|0)==($add$ptr|0);
   if ($cmp$i41) {
    $$pn = $call$i$i$i$i39;$add$ptr147 = $add$ptr;
    break;
   } else {
    $first$addr$05$i = $incdec$ptr$i;$value$06$i = $add$i;
   }
  }
 }
 $arrayidx$i146 = (($$pn) + ($mul<<3)|0);
 $cmp4$i42 = ($mul|0)==($size|0);
 if (!($cmp4$i42)) {
  $first$addr$05$i44 = $add$ptr147;$value$06$i43 = 0.0;
  while(1) {
   $incdec$ptr$i45 = ((($first$addr$05$i44)) + 8|0);
   stored($first$addr$05$i44,$value$06$i43);
   $add$i46 = $value$06$i43 + 1.0;
   $cmp$i47 = ($incdec$ptr$i45|0)==($arrayidx$i146|0);
   if ($cmp$i47) {
    break;
   } else {
    $first$addr$05$i44 = $incdec$ptr$i45;$value$06$i43 = $add$i46;
   }
  }
 }
 __ZNSt3__214random_shuffleIPdEEvT_S2_($$pn,$arrayidx$i146);
 $cmp3$i = ($conv4$i|0)>(0);
 if ($cmp3$i) {
  $arrayidx$i$idx = $size << 4;
  $sub$ptr$div$i = $arrayidx$i$idx >> 3;
  $$arith = $sub$ptr$div$i<<3;
  $$overflow = ($sub$ptr$div$i>>>0)>(536870911);
  $6 = $$overflow ? -1 : $$arith;
  $cmp$i$i$i = ($sub$ptr$div$i|0)==(0);
  if ($cmp$i$i$i) {
   $dec4$in$i$us = $conv4$i;
   while(1) {
    $dec4$i$us = (($dec4$in$i$us) + -1)|0;
    $call$i56$us = (__Znaj($6)|0);
    __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($call$i56$us,$call$i56$us,$agg$tmp1$i$i);
    __ZdaPv($call$i56$us);
    $cmp$i50$us = ($dec4$in$i$us|0)>(1);
    if ($cmp$i50$us) {
     $dec4$in$i$us = $dec4$i$us;
    } else {
     $dec4$in$i59 = $conv4$i;
     break;
    }
   }
  } else {
   $dec4$in$i = $conv4$i;
   while(1) {
    $dec4$i = (($dec4$in$i) + -1)|0;
    $call$i56 = (__Znaj($6)|0);
    _memcpy(($call$i56|0),($$pn|0),($arrayidx$i$idx|0))|0;
    $add$ptr$i54 = (($call$i56) + ($sub$ptr$div$i<<3)|0);
    __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($call$i56,$add$ptr$i54,$agg$tmp1$i$i);
    $cmp$i$i$i$i = ($call$i56|0)==($add$ptr$i54|0);
    L24: do {
     if ($cmp$i$i$i$i) {
      $retval$1$i$i$i$i = $call$i56;
      label = 17;
     } else {
      $__first$addr$0$i$i$i$i = $call$i56;
      while(1) {
       $incdec$ptr$i$i$i$i = ((($__first$addr$0$i$i$i$i)) + 8|0);
       $cmp1$i$i$i$i55 = ($incdec$ptr$i$i$i$i|0)==($add$ptr$i54|0);
       if ($cmp1$i$i$i$i55) {
        break L24;
       }
       $7 = loadd($__first$addr$0$i$i$i$i);
       $8 = loadd($incdec$ptr$i$i$i$i);
       $cmp$i$i$i$i$i = $7 == $8;
       if ($cmp$i$i$i$i$i) {
        $retval$1$i$i$i$i = $__first$addr$0$i$i$i$i;
        label = 17;
        break;
       } else {
        $__first$addr$0$i$i$i$i = $incdec$ptr$i$i$i$i;
       }
      }
     }
    } while(0);
    L28: do {
     if ((label|0) == 17) {
      label = 0;
      $cmp$i$i13$i = ($retval$1$i$i$i$i|0)==($add$ptr$i54|0);
      if (!($cmp$i$i13$i)) {
       $incdec$ptr$i$i$i = ((($retval$1$i$i$i$i)) + 8|0);
       $__first$addr$0$ph$i$i$i = $retval$1$i$i$i$i;$__i$0$ph$i$i$i = $incdec$ptr$i$i$i;
       while(1) {
        $__i$0$i$i$i = $__i$0$ph$i$i$i;
        while(1) {
         $incdec$ptr1$i$i$i = ((($__i$0$i$i$i)) + 8|0);
         $cmp2$i$i$i = ($incdec$ptr1$i$i$i|0)==($add$ptr$i54|0);
         if ($cmp2$i$i$i) {
          break L28;
         }
         $9 = loadd($__first$addr$0$ph$i$i$i);
         $10 = loadd($incdec$ptr1$i$i$i);
         $cmp$i12$i$i$i = $9 == $10;
         if ($cmp$i12$i$i$i) {
          $__i$0$i$i$i = $incdec$ptr1$i$i$i;
         } else {
          break;
         }
        }
        $incdec$ptr6$i$i$i = ((($__first$addr$0$ph$i$i$i)) + 8|0);
        stored($incdec$ptr6$i$i$i,$10);
        $__first$addr$0$ph$i$i$i = $incdec$ptr6$i$i$i;$__i$0$ph$i$i$i = $incdec$ptr1$i$i$i;
       }
      }
     }
    } while(0);
    __ZdaPv($call$i56);
    $cmp$i50 = ($dec4$in$i|0)>(1);
    if ($cmp$i50) {
     $dec4$in$i = $dec4$i;
    } else {
     $dec4$in$i59 = $conv4$i;
     break;
    }
   }
  }
  while(1) {
   $dec4$i60 = (($dec4$in$i59) + -1)|0;
   __Z19vector_pointer_testPdS_i($$pn,$arrayidx$i146,$dec4$i60);
   $cmp$i61 = ($dec4$in$i59|0)>(1);
   if ($cmp$i61) {
    $dec4$in$i59 = $dec4$i60;
   } else {
    $dec4$in$i66 = $conv4$i;
    break;
   }
  }
  while(1) {
   $dec4$i67 = (($dec4$in$i66) + -1)|0;
   __Z20vector_iterator_testPdS_i($$pn,$arrayidx$i146,$dec4$i67);
   $cmp$i68 = ($dec4$in$i66|0)>(1);
   if ($cmp$i68) {
    $dec4$in$i66 = $dec4$i67;
   } else {
    $dec4$in$i73 = $conv4$i;
    break;
   }
  }
  while(1) {
   $dec4$i74 = (($dec4$in$i73) + -1)|0;
   __Z10deque_testPdS_i($$pn,$arrayidx$i146,$dec4$i74);
   $cmp$i75 = ($dec4$in$i73|0)>(1);
   if ($cmp$i75) {
    $dec4$in$i73 = $dec4$i74;
   } else {
    $dec4$in$i80 = $conv4$i;
    break;
   }
  }
  while(1) {
   $dec4$i81 = (($dec4$in$i80) + -1)|0;
   __Z9list_testPdS_i($$pn,$arrayidx$i146,$dec4$i81);
   $cmp$i82 = ($dec4$in$i80|0)>(1);
   if ($cmp$i82) {
    $dec4$in$i80 = $dec4$i81;
   } else {
    $dec4$in$i87 = $conv4$i;
    break;
   }
  }
  while(1) {
   $dec4$i88 = (($dec4$in$i87) + -1)|0;
   __Z8set_testPdS_i($$pn,$arrayidx$i146,$dec4$i88);
   $cmp$i89 = ($dec4$in$i87|0)>(1);
   if ($cmp$i89) {
    $dec4$in$i87 = $dec4$i88;
   } else {
    $dec4$in$i94 = $conv4$i;
    break;
   }
  }
  while(1) {
   $dec4$i95 = (($dec4$in$i94) + -1)|0;
   __Z13multiset_testPdS_i($$pn,$arrayidx$i146,$dec4$i95);
   $cmp$i96 = ($dec4$in$i94|0)>(1);
   if ($cmp$i96) {
    $dec4$in$i94 = $dec4$i95;
   } else {
    break;
   }
  }
 }
 $11 = load4($buf);
 $cmp$i101 = ($11|0)==(0|0);
 $12 = $11;
 if ($cmp$i101) {
  STACKTOP = sp;return;
 }
 $13 = load4($__end_$i$i);
 $cmp1$i$i$i102 = ($13|0)==($11|0);
 if (!($cmp1$i$i$i102)) {
  $scevgep$i$i$i104 = ((($13)) + -8|0);
  $14 = $scevgep$i$i$i104;
  $15 = (($14) - ($12))|0;
  $16 = $15 >>> 3;
  $17 = $16 ^ -1;
  $scevgep5$i$i$i105 = (($13) + ($17<<3)|0);
  store4($__end_$i$i,$scevgep5$i$i$i105);
 }
 __ZdlPv($11);
 STACKTOP = sp;return;
}
function __ZNSt3__214random_shuffleIPdEEvT_S2_($__first,$__last) {
 $__first = $__first|0;
 $__last = $__last|0;
 var $0 = 0, $1 = 0.0, $2 = 0.0, $__d$035 = 0, $__d$035$in = 0, $__first$addr$033 = 0, $__g = 0, $add$i$i = 0, $add$ptr = 0, $and$i = 0, $and$i$i$i = 0, $call$i$i$i16 = 0, $call$i$i19$i15 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp1 = 0, $cmp131 = 0, $cmp14$i = 0, $cmp20$i = 0;
 var $cmp4 = 0, $cmp4$i = 0, $cmp43$i$i = 0, $cond$i$i = 0, $conv$i$i = 0, $div$i$i = 0, $div6$i$i = 0, $incdec$ptr = 0, $incdec$ptr8 = 0, $rem$i$i = 0, $retval$1$i = 0, $shr$i = 0, $shr46$i$i = 0, $sub$ptr$div = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub10$i = 0, $sub11$i = 0, $sub11$sub10$i = 0;
 var $sub13$i = 0, $sub45$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $__g = sp;
 $sub$ptr$lhs$cast = $__last;
 $sub$ptr$rhs$cast = $__first;
 $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
 $cmp = ($sub$ptr$sub|0)>(8);
 if (!($cmp)) {
  STACKTOP = sp;return;
 }
 __ZNSt3__28__rs_getEv($__g);
 $incdec$ptr = ((($__last)) + -8|0);
 $cmp131 = ($incdec$ptr>>>0)>($__first>>>0);
 if ($cmp131) {
  $sub$ptr$div = $sub$ptr$sub >> 3;
  $__d$035$in = $sub$ptr$div;$__first$addr$033 = $__first;
  while(1) {
   $__d$035 = (($__d$035$in) + -1)|0;
   $cmp$i = ($__d$035|0)==(0);
   if (!($cmp$i)) {
    $cmp4$i = ($__d$035$in|0)==(0);
    if ($cmp4$i) {
     $call$i$i19$i15 = (__ZNSt3__212__rs_defaultclEv($__g)|0);
     $retval$1$i = $call$i$i19$i15;
    } else {
     $0 = (Math_clz32(($__d$035$in|0))|0);
     $sub10$i = (32 - ($0))|0;
     $sub13$i = (33 - ($sub10$i))|0;
     $shr$i = -1 >>> $sub13$i;
     $and$i = $shr$i & $__d$035$in;
     $cmp14$i = ($and$i|0)==(0);
     $sub11$i = $cmp14$i << 31 >> 31;
     $sub11$sub10$i = (($sub11$i) + ($sub10$i))|0;
     $div$i$i = $sub11$sub10$i >>> 5;
     $rem$i$i = $sub11$sub10$i & 31;
     $cmp$i$i = ($rem$i$i|0)!=(0);
     $conv$i$i = $cmp$i$i&1;
     $add$i$i = (($conv$i$i) + ($div$i$i))|0;
     $div6$i$i = (($sub11$sub10$i>>>0) / ($add$i$i>>>0))&-1;
     $cmp43$i$i = ($add$i$i>>>0)>($sub11$sub10$i>>>0);
     $sub45$i$i = (32 - ($div6$i$i))|0;
     $shr46$i$i = -1 >>> $sub45$i$i;
     $cond$i$i = $cmp43$i$i ? 0 : $shr46$i$i;
     while(1) {
      $call$i$i$i16 = (__ZNSt3__212__rs_defaultclEv($__g)|0);
      $and$i$i$i = $call$i$i$i16 & $cond$i$i;
      $cmp20$i = ($and$i$i$i>>>0)<($__d$035$in>>>0);
      if ($cmp20$i) {
       $retval$1$i = $and$i$i$i;
       break;
      }
     }
    }
    $cmp4 = ($retval$1$i|0)==(0);
    $add$ptr = (($__first$addr$033) + ($retval$1$i<<3)|0);
    if (!($cmp4)) {
     $1 = loadd($__first$addr$033);
     $2 = loadd($add$ptr);
     stored($__first$addr$033,$2);
     stored($add$ptr,$1);
    }
   }
   $incdec$ptr8 = ((($__first$addr$033)) + 8|0);
   $cmp1 = ($incdec$ptr8>>>0)<($incdec$ptr>>>0);
   if ($cmp1) {
    $__d$035$in = $__d$035;$__first$addr$033 = $incdec$ptr8;
   } else {
    break;
   }
  }
 }
 __ZNSt3__212__rs_defaultD2Ev($__g);
 STACKTOP = sp;return;
}
function _main() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __Z9run_testsi(100000);
 return 0;
}
function __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($this,$__nd) {
 $this = $this|0;
 $__nd = $__nd|0;
 var $0 = 0, $1 = 0, $2 = 0, $cmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__nd|0)==(0|0);
 if ($cmp) {
  return;
 } else {
  $0 = load4($__nd);
  __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($this,$0);
  $1 = ((($__nd)) + 4|0);
  $2 = load4($1);
  __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE7destroyEPNS_11__tree_nodeIdPvEE($this,$2);
  __ZdlPv($__nd);
  return;
 }
}
function __ZNSt3__25dequeIdNS_9allocatorIdEEE19__add_back_capacityEj($this,$__n) {
 $this = $this|0;
 $__n = $__n|0;
 var $$in = 0, $$in$i = 0, $$in$i142 = 0, $$in$i203 = 0, $$in$i280 = 0, $$in$i79 = 0, $$pre = 0, $$pre$i147 = 0, $$pre$i208 = 0, $$pre$i84 = 0, $$pre381 = 0, $$pre383 = 0, $$pre384 = 0, $$pre40$i = 0, $$pre40$i121 = 0, $$pre40$i182 = 0, $$pre41$i153 = 0, $$pre41$i214 = 0, $$pre41$i90 = 0, $$sroa$speculated = 0;
 var $$sroa$speculated$i = 0, $$sroa$speculated$i129 = 0, $$sroa$speculated$i190 = 0, $$sroa$speculated$i267 = 0, $$sroa$speculated$i67 = 0, $$sroa$speculated323 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0;
 var $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $13 = 0;
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0;
 var $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0;
 var $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $__begin_$i = 0, $__begin_$i238 = 0, $__end_$i = 0, $__end_$i237 = 0, $__end_cap_$i = 0, $__end_cap_$i231 = 0;
 var $__first_$i$i$i$i239 = 0, $__first_$i$i$i$i44 = 0, $__first_$i$i$i$i93 = 0, $__front_capacity$0360 = 0, $__front_capacity$1$lcssa = 0, $__front_capacity$1370 = 0, $__front_capacity$2368 = 0, $__front_capacity$3362 = 0, $__i108$0 = 0, $__nb$0373$lcssa = 0, $__nb$0373414 = 0, $__nb$1371 = 0, $__nb$2366 = 0, $__new_last3$i$i$i$i18 = 0, $__second_$i$i$i = 0, $__start_$i = 0, $__t$sroa$11$0$i = 0, $__t$sroa$11$0$i141 = 0, $__t$sroa$11$0$i202 = 0, $__t$sroa$11$0$i279 = 0;
 var $__t$sroa$11$0$i78 = 0, $__t$sroa$11$1$i = 0, $__t$sroa$11$1$i149 = 0, $__t$sroa$11$1$i210 = 0, $__t$sroa$11$1$i287 = 0, $__t$sroa$11$1$i86 = 0, $add = 0, $add$i = 0, $add$i114 = 0, $add$i175 = 0, $add$i252 = 0, $add$i36 = 0, $add$i53 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i$i$i123 = 0, $add$ptr$i$i$i184 = 0, $add$ptr$i$i$i261 = 0, $add$ptr$i$i$i61 = 0;
 var $add$ptr$i$i137 = 0, $add$ptr$i$i198 = 0, $add$ptr$i$i275 = 0, $add$ptr$i$i74 = 0, $add$ptr$i116 = 0, $add$ptr$i164 = 0, $add$ptr$i177 = 0, $add$ptr$i236 = 0, $add$ptr$i254 = 0, $add$ptr$i37 = 0, $add$ptr$i42 = 0, $add$ptr$i55 = 0, $add$ptr11$i = 0, $add$ptr11$i$i = 0, $add$ptr11$i$i138 = 0, $add$ptr11$i$i199 = 0, $add$ptr11$i$i276 = 0, $add$ptr11$i$i75 = 0, $add$ptr13$i124 = 0, $add$ptr13$i185 = 0;
 var $add$ptr13$i62 = 0, $add45 = 0, $add70 = 0, $call$i$i$i = 0, $call$i$i$i$i = 0, $call$i$i$i$i$i = 0, $call$i$i$i$i$i136 = 0, $call$i$i$i$i$i197 = 0, $call$i$i$i$i$i274295 = 0, $call$i$i$i$i$i39 = 0, $call$i$i$i157 = 0, $call$i$i$i240241 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i = 0, $cmp$i$i$i$i130 = 0, $cmp$i$i$i$i191 = 0, $cmp$i$i$i$i268 = 0, $cmp$i$i$i$i68 = 0;
 var $cmp$i$i$i119 = 0, $cmp$i$i$i17$i = 0, $cmp$i$i$i17$i128 = 0, $cmp$i$i$i17$i189 = 0, $cmp$i$i$i17$i266 = 0, $cmp$i$i$i17$i66 = 0, $cmp$i$i$i180 = 0, $cmp$i$i$i225 = 0, $cmp$i$i$i233 = 0, $cmp$i$i$i257 = 0, $cmp$i$i$i38 = 0, $cmp$i$i$i58 = 0, $cmp$i$i12$i = 0, $cmp$i$i12$i145 = 0, $cmp$i$i12$i206 = 0, $cmp$i$i12$i283 = 0, $cmp$i$i12$i82 = 0, $cmp$i106 = 0, $cmp$i14 = 0, $cmp$i167 = 0;
 var $cmp$i232 = 0, $cmp$i244 = 0, $cmp$i3$i$i = 0, $cmp$i3$i$i139 = 0, $cmp$i3$i$i200 = 0, $cmp$i3$i$i277 = 0, $cmp$i3$i$i76 = 0, $cmp$i32 = 0, $cmp$i45 = 0, $cmp1$i$i$i$i17 = 0, $cmp114 = 0, $cmp17 = 0, $cmp2$i = 0, $cmp2$i109 = 0, $cmp2$i170 = 0, $cmp2$i247 = 0, $cmp2$i48 = 0, $cmp20 = 0, $cmp24 = 0, $cmp24412 = 0;
 var $cmp32 = 0, $cmp41 = 0, $cmp51 = 0, $cmp51367 = 0, $cmp7 = 0, $cmp7359 = 0, $cmp78 = 0, $cmp96 = 0, $cmp96361 = 0, $cond$i = 0, $conv = 0, $conv$i = 0, $conv42$neg = 0, $dec = 0, $dec106 = 0, $dec29 = 0, $dec38 = 0, $dec59 = 0, $dec84 = 0, $div = 0;
 var $div$i = 0, $div22$i = 0, $div22$i134 = 0, $div22$i195 = 0, $div22$i272 = 0, $div22$i72 = 0, $exception$i$i$i = 0, $exception$i$i$i$i = 0, $exception$i$i$i$i132 = 0, $exception$i$i$i$i193 = 0, $exception$i$i$i$i270 = 0, $exception$i$i$i$i70 = 0, $idx$neg$i = 0, $idx$neg$i115 = 0, $idx$neg$i176 = 0, $idx$neg$i253 = 0, $idx$neg$i54 = 0, $inc = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i = 0;
 var $incdec$ptr$i$i$i = 0, $incdec$ptr$i$i$i144 = 0, $incdec$ptr$i$i$i205 = 0, $incdec$ptr$i$i$i282 = 0, $incdec$ptr$i$i$i81 = 0, $incdec$ptr$i$i143 = 0, $incdec$ptr$i$i204 = 0, $incdec$ptr$i$i281 = 0, $incdec$ptr$i$i80 = 0, $incdec$ptr$i155 = 0, $incdec$ptr$i216 = 0, $incdec$ptr$i293 = 0, $incdec$ptr$i92 = 0, $incdec$ptr117 = 0, $mul = 0, $mul$i = 0, $mul$i$i$i = 0, $mul$i$i$i$i = 0, $mul$i$i$i$i135 = 0, $mul$i$i$i$i196 = 0;
 var $mul$i$i$i$i273 = 0, $mul$i$i$i$i73 = 0, $mul$i127 = 0, $mul$i188 = 0, $mul$i265 = 0, $mul$i65 = 0, $mul47 = 0, $mul62 = 0, $mul66 = 0, $ref$tmp35 = 0, $rem$i = 0, $scevgep$i$i$i$i19 = 0, $scevgep5$i$i$i$i20 = 0, $sub = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i$i = 0, $sub$ptr$div$i$i$i118 = 0, $sub$ptr$div$i$i$i179 = 0, $sub$ptr$div$i$i$i256 = 0, $sub$ptr$div$i$i$i57 = 0;
 var $sub$ptr$div$i113 = 0, $sub$ptr$div$i174 = 0, $sub$ptr$div$i251 = 0, $sub$ptr$div$i52 = 0, $sub$ptr$div$i95 = 0, $sub$ptr$div$i99 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i111 = 0, $sub$ptr$lhs$cast$i172 = 0, $sub$ptr$lhs$cast$i249 = 0, $sub$ptr$lhs$cast$i50 = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i$i = 0, $sub$ptr$sub$i$i$i117 = 0, $sub$ptr$sub$i$i$i178 = 0, $sub$ptr$sub$i$i$i255 = 0, $sub$ptr$sub$i$i$i56 = 0, $sub$ptr$sub$i112 = 0, $sub$ptr$sub$i160 = 0, $sub$ptr$sub$i173 = 0;
 var $sub$ptr$sub$i250 = 0, $sub$ptr$sub$i51 = 0, $sub$ptr$sub$i94 = 0, $sub$ptr$sub$i98 = 0, $sub$ptr$sub18$i = 0, $sub$ptr$sub18$i126 = 0, $sub$ptr$sub18$i187 = 0, $sub$ptr$sub18$i264 = 0, $sub$ptr$sub18$i64 = 0, $sub135 = 0, $sub16 = 0, $sub43 = 0, $sub49 = 0, $sub6 = 0, $sub74 = 0, $tobool$i$i = 0, $tobool$i$i150 = 0, $tobool$i$i211 = 0, $tobool$i$i288 = 0, $tobool$i$i87 = 0;
 var $tobool$i23 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $ref$tmp35 = sp;
 $__end_$i = ((($this)) + 8|0);
 $0 = load4($__end_$i);
 $__begin_$i = ((($this)) + 4|0);
 $1 = load4($__begin_$i);
 $cmp$i = ($0|0)==($1|0);
 $conv = $cmp$i&1;
 $add = (($conv) + ($__n))|0;
 $div$i = $add >>> 9;
 $rem$i = $add & 511;
 $cmp$i14 = ($rem$i|0)!=(0);
 $conv$i = $cmp$i14&1;
 $add$i = (($conv$i) + ($div$i))|0;
 $__start_$i = ((($this)) + 16|0);
 $2 = load4($__start_$i);
 $div = $2 >>> 9;
 $cmp$i$i$i = ($add$i>>>0)<($div>>>0);
 $$sroa$speculated323 = $cmp$i$i$i ? $add$i : $div;
 $sub = (($add$i) - ($$sroa$speculated323))|0;
 $cmp = ($sub|0)==(0);
 $3 = $0;
 if ($cmp) {
  $mul = $$sroa$speculated323 << 9;
  $sub6 = (($2) - ($mul))|0;
  store4($__start_$i,$sub6);
  $cmp7359 = ($$sroa$speculated323|0)==(0);
  if ($cmp7359) {
   STACKTOP = sp;return;
  }
  $__first_$i$i$i$i44 = ((($this)) + 12|0);
  $5 = $1;$7 = $0;$__front_capacity$0360 = $$sroa$speculated323;
  L6: while(1) {
   $4 = load4($5);
   $add$ptr$i42 = ((($5)) + 4|0);
   store4($__begin_$i,$add$ptr$i42);
   $6 = load4($__first_$i$i$i$i44);
   $cmp$i45 = ($7|0)==($6|0);
   $8 = $6;
   $9 = $7;
   do {
    if ($cmp$i45) {
     $10 = load4($this);
     $cmp2$i48 = ($add$ptr$i42>>>0)>($10>>>0);
     $11 = $10;
     if ($cmp2$i48) {
      $sub$ptr$lhs$cast$i50 = $add$ptr$i42;
      $sub$ptr$sub$i51 = (($sub$ptr$lhs$cast$i50) - ($11))|0;
      $sub$ptr$div$i52 = $sub$ptr$sub$i51 >> 2;
      $add$i53 = (($sub$ptr$div$i52) + 1)|0;
      $idx$neg$i54 = (($add$i53|0) / -2)&-1;
      $add$ptr$i55 = (($add$ptr$i42) + ($idx$neg$i54<<2)|0);
      $sub$ptr$sub$i$i$i56 = (($9) - ($sub$ptr$lhs$cast$i50))|0;
      $sub$ptr$div$i$i$i57 = $sub$ptr$sub$i$i$i56 >> 2;
      $cmp$i$i$i58 = ($sub$ptr$div$i$i$i57|0)==(0);
      if ($cmp$i$i$i58) {
       $12 = $add$ptr$i42;
      } else {
       _memmove(($add$ptr$i55|0),($add$ptr$i42|0),($sub$ptr$sub$i$i$i56|0))|0;
       $$pre40$i = load4($__begin_$i);
       $12 = $$pre40$i;
      }
      $add$ptr$i$i$i61 = (($add$ptr$i55) + ($sub$ptr$div$i$i$i57<<2)|0);
      store4($__end_$i,$add$ptr$i$i$i61);
      $add$ptr13$i62 = (($12) + ($idx$neg$i54<<2)|0);
      store4($__begin_$i,$add$ptr13$i62);
      $22 = $add$ptr$i$i$i61;
      break;
     }
     $sub$ptr$sub18$i64 = (($8) - ($11))|0;
     $mul$i65 = $sub$ptr$sub18$i64 >> 1;
     $cmp$i$i$i17$i66 = ($mul$i65|0)==(0);
     $$sroa$speculated$i67 = $cmp$i$i$i17$i66 ? 1 : $mul$i65;
     $cmp$i$i$i$i68 = ($$sroa$speculated$i67>>>0)>(1073741823);
     if ($cmp$i$i$i$i68) {
      label = 10;
      break L6;
     }
     $div22$i72 = $$sroa$speculated$i67 >>> 2;
     $mul$i$i$i$i73 = $$sroa$speculated$i67 << 2;
     $call$i$i$i$i$i = (__Znwj($mul$i$i$i$i73)|0);
     $13 = $call$i$i$i$i$i;
     $add$ptr$i$i74 = (($call$i$i$i$i$i) + ($div22$i72<<2)|0);
     $14 = $add$ptr$i$i74;
     $add$ptr11$i$i75 = (($call$i$i$i$i$i) + ($$sroa$speculated$i67<<2)|0);
     $15 = $add$ptr11$i$i75;
     $cmp$i3$i$i76 = ($add$ptr$i42|0)==($7|0);
     if ($cmp$i3$i$i76) {
      $20 = $10;$__t$sroa$11$1$i86 = $14;
     } else {
      $$in$i79 = $add$ptr$i$i74;$17 = $add$ptr$i42;$__t$sroa$11$0$i78 = $14;
      while(1) {
       $16 = load4($17);
       store4($$in$i79,$16);
       $18 = $__t$sroa$11$0$i78;
       $incdec$ptr$i$i80 = ((($18)) + 4|0);
       $19 = $incdec$ptr$i$i80;
       $incdec$ptr$i$i$i81 = ((($17)) + 4|0);
       $cmp$i$i12$i82 = ($incdec$ptr$i$i$i81|0)==($7|0);
       if ($cmp$i$i12$i82) {
        break;
       } else {
        $$in$i79 = $incdec$ptr$i$i80;$17 = $incdec$ptr$i$i$i81;$__t$sroa$11$0$i78 = $19;
       }
      }
      $$pre$i84 = load4($this);
      $20 = $$pre$i84;$__t$sroa$11$1$i86 = $19;
     }
     store4($this,$13);
     store4($__begin_$i,$14);
     store4($__end_$i,$__t$sroa$11$1$i86);
     store4($__first_$i$i$i$i44,$15);
     $tobool$i$i87 = ($20|0)==(0|0);
     $21 = $__t$sroa$11$1$i86;
     if ($tobool$i$i87) {
      $22 = $21;
     } else {
      __ZdlPv($20);
      $$pre41$i90 = load4($__end_$i);
      $22 = $$pre41$i90;
     }
    } else {
     $22 = $7;
    }
   } while(0);
   store4($22,$4);
   $23 = load4($__end_$i);
   $incdec$ptr$i92 = ((($23)) + 4|0);
   store4($__end_$i,$incdec$ptr$i92);
   $dec = (($__front_capacity$0360) + -1)|0;
   $cmp7 = ($dec|0)==(0);
   if ($cmp7) {
    label = 92;
    break;
   }
   $$pre384 = load4($__begin_$i);
   $5 = $$pre384;$7 = $incdec$ptr$i92;$__front_capacity$0360 = $dec;
  }
  if ((label|0) == 10) {
   $exception$i$i$i$i70 = (___cxa_allocate_exception(4)|0);
   __ZNSt9bad_allocC2Ev($exception$i$i$i$i70);
   ___cxa_throw(($exception$i$i$i$i70|0),(1088|0),(6|0));
   // unreachable;
  }
  else if ((label|0) == 92) {
   STACKTOP = sp;return;
  }
 }
 $24 = $1;
 $__first_$i$i$i$i93 = ((($this)) + 12|0);
 $25 = load4($__first_$i$i$i$i93);
 $26 = load4($this);
 $sub$ptr$sub$i94 = (($25) - ($26))|0;
 $sub$ptr$div$i95 = $sub$ptr$sub$i94 >> 2;
 $sub$ptr$sub$i98 = (($3) - ($24))|0;
 $sub$ptr$div$i99 = $sub$ptr$sub$i98 >> 2;
 $sub16 = (($sub$ptr$div$i95) - ($sub$ptr$div$i99))|0;
 $cmp17 = ($sub>>>0)>($sub16>>>0);
 if (!($cmp17)) {
  $cmp24412 = ($25|0)==($3|0);
  L31: do {
   if ($cmp24412) {
    $__nb$0373$lcssa = $sub;
    label = 21;
   } else {
    $$in = $25;$29 = $0;$__nb$0373414 = $sub;
    L32: while(1) {
     $27 = $$in;
     $call$i$i$i = (__Znwj(4096)|0);
     $28 = $call$i$i$i;
     $cmp$i106 = ($29|0)==($27|0);
     $30 = $29;
     do {
      if ($cmp$i106) {
       $31 = load4($__begin_$i);
       $32 = load4($this);
       $cmp2$i109 = ($31>>>0)>($32>>>0);
       $33 = $32;
       if ($cmp2$i109) {
        $sub$ptr$lhs$cast$i111 = $31;
        $sub$ptr$sub$i112 = (($sub$ptr$lhs$cast$i111) - ($33))|0;
        $sub$ptr$div$i113 = $sub$ptr$sub$i112 >> 2;
        $add$i114 = (($sub$ptr$div$i113) + 1)|0;
        $idx$neg$i115 = (($add$i114|0) / -2)&-1;
        $add$ptr$i116 = (($31) + ($idx$neg$i115<<2)|0);
        $sub$ptr$sub$i$i$i117 = (($30) - ($sub$ptr$lhs$cast$i111))|0;
        $sub$ptr$div$i$i$i118 = $sub$ptr$sub$i$i$i117 >> 2;
        $cmp$i$i$i119 = ($sub$ptr$div$i$i$i118|0)==(0);
        if ($cmp$i$i$i119) {
         $34 = $31;
        } else {
         _memmove(($add$ptr$i116|0),($31|0),($sub$ptr$sub$i$i$i117|0))|0;
         $$pre40$i121 = load4($__begin_$i);
         $34 = $$pre40$i121;
        }
        $add$ptr$i$i$i123 = (($add$ptr$i116) + ($sub$ptr$div$i$i$i118<<2)|0);
        store4($__end_$i,$add$ptr$i$i$i123);
        $add$ptr13$i124 = (($34) + ($idx$neg$i115<<2)|0);
        store4($__begin_$i,$add$ptr13$i124);
        $44 = $add$ptr$i$i$i123;
        break;
       }
       $sub$ptr$sub18$i126 = (($$in) - ($33))|0;
       $mul$i127 = $sub$ptr$sub18$i126 >> 1;
       $cmp$i$i$i17$i128 = ($mul$i127|0)==(0);
       $$sroa$speculated$i129 = $cmp$i$i$i17$i128 ? 1 : $mul$i127;
       $cmp$i$i$i$i130 = ($$sroa$speculated$i129>>>0)>(1073741823);
       if ($cmp$i$i$i$i130) {
        label = 28;
        break L32;
       }
       $div22$i134 = $$sroa$speculated$i129 >>> 2;
       $mul$i$i$i$i135 = $$sroa$speculated$i129 << 2;
       $call$i$i$i$i$i136 = (__Znwj($mul$i$i$i$i135)|0);
       $35 = $call$i$i$i$i$i136;
       $add$ptr$i$i137 = (($call$i$i$i$i$i136) + ($div22$i134<<2)|0);
       $36 = $add$ptr$i$i137;
       $add$ptr11$i$i138 = (($call$i$i$i$i$i136) + ($$sroa$speculated$i129<<2)|0);
       $37 = $add$ptr11$i$i138;
       $cmp$i3$i$i139 = ($31|0)==($27|0);
       if ($cmp$i3$i$i139) {
        $42 = $32;$__t$sroa$11$1$i149 = $36;
       } else {
        $$in$i142 = $add$ptr$i$i137;$39 = $31;$__t$sroa$11$0$i141 = $36;
        while(1) {
         $38 = load4($39);
         store4($$in$i142,$38);
         $40 = $__t$sroa$11$0$i141;
         $incdec$ptr$i$i143 = ((($40)) + 4|0);
         $41 = $incdec$ptr$i$i143;
         $incdec$ptr$i$i$i144 = ((($39)) + 4|0);
         $cmp$i$i12$i145 = ($incdec$ptr$i$i$i144|0)==($27|0);
         if ($cmp$i$i12$i145) {
          break;
         } else {
          $$in$i142 = $incdec$ptr$i$i143;$39 = $incdec$ptr$i$i$i144;$__t$sroa$11$0$i141 = $41;
         }
        }
        $$pre$i147 = load4($this);
        $42 = $$pre$i147;$__t$sroa$11$1$i149 = $41;
       }
       store4($this,$35);
       store4($__begin_$i,$36);
       store4($__end_$i,$__t$sroa$11$1$i149);
       store4($__first_$i$i$i$i93,$37);
       $tobool$i$i150 = ($42|0)==(0|0);
       $43 = $__t$sroa$11$1$i149;
       if ($tobool$i$i150) {
        $44 = $43;
       } else {
        __ZdlPv($42);
        $$pre41$i153 = load4($__end_$i);
        $44 = $$pre41$i153;
       }
      } else {
       $44 = $29;
      }
     } while(0);
     store4($44,$28);
     $45 = load4($__end_$i);
     $incdec$ptr$i155 = ((($45)) + 4|0);
     store4($__end_$i,$incdec$ptr$i155);
     $dec29 = (($__nb$0373414) + -1)|0;
     $cmp20 = ($dec29|0)==(0);
     if ($cmp20) {
      label = 20;
      break;
     }
     $46 = $incdec$ptr$i155;
     $$pre = load4($__first_$i$i$i$i93);
     $cmp24 = ($$pre|0)==($46|0);
     if ($cmp24) {
      $__nb$0373$lcssa = $dec29;
      label = 21;
      break L31;
     } else {
      $$in = $$pre;$29 = $incdec$ptr$i155;$__nb$0373414 = $dec29;
     }
    }
    if ((label|0) == 20) {
     $$pre381 = load4($__start_$i);
     $127 = $incdec$ptr$i155;$51 = $$pre381;$__front_capacity$1$lcssa = $$sroa$speculated323;
     break;
    }
    else if ((label|0) == 28) {
     $exception$i$i$i$i132 = (___cxa_allocate_exception(4)|0);
     __ZNSt9bad_allocC2Ev($exception$i$i$i$i132);
     ___cxa_throw(($exception$i$i$i$i132|0),(1088|0),(6|0));
     // unreachable;
    }
   }
  } while(0);
  if ((label|0) == 21) {
   $__front_capacity$1370 = $$sroa$speculated323;$__nb$1371 = $__nb$0373$lcssa;
   while(1) {
    $call$i$i$i157 = (__Znwj(4096)|0);
    store4($ref$tmp35,$call$i$i$i157);
    __ZNSt3__214__split_bufferIPdNS_9allocatorIS1_EEE10push_frontERKS1_($this,$ref$tmp35);
    $dec38 = (($__nb$1371) + -1)|0;
    $inc = (($__front_capacity$1370) + 1)|0;
    $47 = load4($__end_$i);
    $48 = load4($__begin_$i);
    $sub$ptr$sub$i160 = (($47) - ($48))|0;
    $cmp41 = ($sub$ptr$sub$i160|0)==(4);
    $conv42$neg = $cmp41 << 31 >> 31;
    $49 = load4($__start_$i);
    $sub43 = (($49) + 512)|0;
    $add45 = (($sub43) + ($conv42$neg))|0;
    store4($__start_$i,$add45);
    $cmp32 = ($dec38|0)==(0);
    if ($cmp32) {
     break;
    } else {
     $__front_capacity$1370 = $inc;$__nb$1371 = $dec38;
    }
   }
   $50 = $47;
   $127 = $50;$51 = $add45;$__front_capacity$1$lcssa = $inc;
  }
  $mul47 = $__front_capacity$1$lcssa << 9;
  $sub49 = (($51) - ($mul47))|0;
  store4($__start_$i,$sub49);
  $cmp51367 = ($__front_capacity$1$lcssa|0)==(0);
  if ($cmp51367) {
   STACKTOP = sp;return;
  }
  $55 = $127;$__front_capacity$2368 = $__front_capacity$1$lcssa;
  L63: while(1) {
   $52 = load4($__begin_$i);
   $53 = load4($52);
   $add$ptr$i164 = ((($52)) + 4|0);
   store4($__begin_$i,$add$ptr$i164);
   $54 = load4($__first_$i$i$i$i93);
   $cmp$i167 = ($55|0)==($54|0);
   $56 = $54;
   $57 = $55;
   do {
    if ($cmp$i167) {
     $58 = load4($this);
     $cmp2$i170 = ($add$ptr$i164>>>0)>($58>>>0);
     $59 = $58;
     if ($cmp2$i170) {
      $sub$ptr$lhs$cast$i172 = $add$ptr$i164;
      $sub$ptr$sub$i173 = (($sub$ptr$lhs$cast$i172) - ($59))|0;
      $sub$ptr$div$i174 = $sub$ptr$sub$i173 >> 2;
      $add$i175 = (($sub$ptr$div$i174) + 1)|0;
      $idx$neg$i176 = (($add$i175|0) / -2)&-1;
      $add$ptr$i177 = (($add$ptr$i164) + ($idx$neg$i176<<2)|0);
      $sub$ptr$sub$i$i$i178 = (($57) - ($sub$ptr$lhs$cast$i172))|0;
      $sub$ptr$div$i$i$i179 = $sub$ptr$sub$i$i$i178 >> 2;
      $cmp$i$i$i180 = ($sub$ptr$div$i$i$i179|0)==(0);
      if ($cmp$i$i$i180) {
       $60 = $add$ptr$i164;
      } else {
       _memmove(($add$ptr$i177|0),($add$ptr$i164|0),($sub$ptr$sub$i$i$i178|0))|0;
       $$pre40$i182 = load4($__begin_$i);
       $60 = $$pre40$i182;
      }
      $add$ptr$i$i$i184 = (($add$ptr$i177) + ($sub$ptr$div$i$i$i179<<2)|0);
      store4($__end_$i,$add$ptr$i$i$i184);
      $add$ptr13$i185 = (($60) + ($idx$neg$i176<<2)|0);
      store4($__begin_$i,$add$ptr13$i185);
      $70 = $add$ptr$i$i$i184;
      break;
     }
     $sub$ptr$sub18$i187 = (($56) - ($59))|0;
     $mul$i188 = $sub$ptr$sub18$i187 >> 1;
     $cmp$i$i$i17$i189 = ($mul$i188|0)==(0);
     $$sroa$speculated$i190 = $cmp$i$i$i17$i189 ? 1 : $mul$i188;
     $cmp$i$i$i$i191 = ($$sroa$speculated$i190>>>0)>(1073741823);
     if ($cmp$i$i$i$i191) {
      label = 46;
      break L63;
     }
     $div22$i195 = $$sroa$speculated$i190 >>> 2;
     $mul$i$i$i$i196 = $$sroa$speculated$i190 << 2;
     $call$i$i$i$i$i197 = (__Znwj($mul$i$i$i$i196)|0);
     $61 = $call$i$i$i$i$i197;
     $add$ptr$i$i198 = (($call$i$i$i$i$i197) + ($div22$i195<<2)|0);
     $62 = $add$ptr$i$i198;
     $add$ptr11$i$i199 = (($call$i$i$i$i$i197) + ($$sroa$speculated$i190<<2)|0);
     $63 = $add$ptr11$i$i199;
     $cmp$i3$i$i200 = ($add$ptr$i164|0)==($55|0);
     if ($cmp$i3$i$i200) {
      $68 = $58;$__t$sroa$11$1$i210 = $62;
     } else {
      $$in$i203 = $add$ptr$i$i198;$65 = $add$ptr$i164;$__t$sroa$11$0$i202 = $62;
      while(1) {
       $64 = load4($65);
       store4($$in$i203,$64);
       $66 = $__t$sroa$11$0$i202;
       $incdec$ptr$i$i204 = ((($66)) + 4|0);
       $67 = $incdec$ptr$i$i204;
       $incdec$ptr$i$i$i205 = ((($65)) + 4|0);
       $cmp$i$i12$i206 = ($incdec$ptr$i$i$i205|0)==($55|0);
       if ($cmp$i$i12$i206) {
        break;
       } else {
        $$in$i203 = $incdec$ptr$i$i204;$65 = $incdec$ptr$i$i$i205;$__t$sroa$11$0$i202 = $67;
       }
      }
      $$pre$i208 = load4($this);
      $68 = $$pre$i208;$__t$sroa$11$1$i210 = $67;
     }
     store4($this,$61);
     store4($__begin_$i,$62);
     store4($__end_$i,$__t$sroa$11$1$i210);
     store4($__first_$i$i$i$i93,$63);
     $tobool$i$i211 = ($68|0)==(0|0);
     $69 = $__t$sroa$11$1$i210;
     if ($tobool$i$i211) {
      $70 = $69;
     } else {
      __ZdlPv($68);
      $$pre41$i214 = load4($__end_$i);
      $70 = $$pre41$i214;
     }
    } else {
     $70 = $55;
    }
   } while(0);
   store4($70,$53);
   $71 = load4($__end_$i);
   $incdec$ptr$i216 = ((($71)) + 4|0);
   store4($__end_$i,$incdec$ptr$i216);
   $dec59 = (($__front_capacity$2368) + -1)|0;
   $cmp51 = ($dec59|0)==(0);
   if ($cmp51) {
    label = 92;
    break;
   } else {
    $55 = $incdec$ptr$i216;$__front_capacity$2368 = $dec59;
   }
  }
  if ((label|0) == 46) {
   $exception$i$i$i$i193 = (___cxa_allocate_exception(4)|0);
   __ZNSt9bad_allocC2Ev($exception$i$i$i$i193);
   ___cxa_throw(($exception$i$i$i$i193|0),(1088|0),(6|0));
   // unreachable;
  }
  else if ((label|0) == 92) {
   STACKTOP = sp;return;
  }
 }
 $mul62 = $$sroa$speculated323 << 9;
 $mul66 = $sub$ptr$sub$i94 >> 1;
 $add70 = (($sub$ptr$div$i99) + ($sub))|0;
 $cmp$i$i$i225 = ($mul66>>>0)<($add70>>>0);
 $$sroa$speculated = $cmp$i$i$i225 ? $add70 : $mul66;
 $sub74 = (($sub$ptr$div$i99) - ($$sroa$speculated323))|0;
 $__end_cap_$i = ((($this)) + 12|0);
 $__end_cap_$i231 = ((($ref$tmp35)) + 12|0);
 store4($__end_cap_$i231,0);
 $__second_$i$i$i = ((($ref$tmp35)) + 16|0);
 store4($__second_$i$i$i,$__end_cap_$i);
 $cmp$i232 = ($$sroa$speculated|0)==(0);
 do {
  if ($cmp$i232) {
   $cond$i = 0;
  } else {
   $cmp$i$i$i233 = ($$sroa$speculated>>>0)>(1073741823);
   if ($cmp$i$i$i233) {
    $exception$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i);
    ___cxa_throw(($exception$i$i$i|0),(1088|0),(6|0));
    // unreachable;
   } else {
    $mul$i$i$i = $$sroa$speculated << 2;
    $call$i$i$i$i = (__Znwj($mul$i$i$i)|0);
    $cond$i = $call$i$i$i$i;
    break;
   }
  }
 } while(0);
 store4($ref$tmp35,$cond$i);
 $add$ptr$i236 = (($cond$i) + ($sub74<<2)|0);
 $__end_$i237 = ((($ref$tmp35)) + 8|0);
 store4($__end_$i237,$add$ptr$i236);
 $__begin_$i238 = ((($ref$tmp35)) + 4|0);
 store4($__begin_$i238,$add$ptr$i236);
 $add$ptr11$i = (($cond$i) + ($$sroa$speculated<<2)|0);
 $__first_$i$i$i$i239 = ((($ref$tmp35)) + 12|0);
 store4($__first_$i$i$i$i239,$add$ptr11$i);
 $74 = $add$ptr$i236;$__nb$2366 = $sub;
 L91: while(1) {
  $call$i$i$i240241 = (__Znwj(4096)|0);
  $72 = $call$i$i$i240241;
  $73 = load4($__first_$i$i$i$i239);
  $cmp$i244 = ($74|0)==($73|0);
  $75 = $73;
  $76 = $74;
  do {
   if ($cmp$i244) {
    $77 = load4($__begin_$i238);
    $78 = load4($ref$tmp35);
    $cmp2$i247 = ($77>>>0)>($78>>>0);
    $79 = $78;
    if ($cmp2$i247) {
     $sub$ptr$lhs$cast$i249 = $77;
     $sub$ptr$sub$i250 = (($sub$ptr$lhs$cast$i249) - ($79))|0;
     $sub$ptr$div$i251 = $sub$ptr$sub$i250 >> 2;
     $add$i252 = (($sub$ptr$div$i251) + 1)|0;
     $idx$neg$i253 = (($add$i252|0) / -2)&-1;
     $add$ptr$i254 = (($77) + ($idx$neg$i253<<2)|0);
     $sub$ptr$sub$i$i$i255 = (($76) - ($sub$ptr$lhs$cast$i249))|0;
     $sub$ptr$div$i$i$i256 = $sub$ptr$sub$i$i$i255 >> 2;
     $cmp$i$i$i257 = ($sub$ptr$div$i$i$i256|0)==(0);
     if (!($cmp$i$i$i257)) {
      _memmove(($add$ptr$i254|0),($77|0),($sub$ptr$sub$i$i$i255|0))|0;
     }
     $add$ptr$i$i$i261 = (($add$ptr$i254) + ($sub$ptr$div$i$i$i256<<2)|0);
     store4($__end_$i237,$add$ptr$i$i$i261);
     store4($__begin_$i238,$add$ptr$i254);
     $88 = $add$ptr$i$i$i261;
     break;
    }
    $sub$ptr$sub18$i264 = (($75) - ($79))|0;
    $mul$i265 = $sub$ptr$sub18$i264 >> 1;
    $cmp$i$i$i17$i266 = ($mul$i265|0)==(0);
    $$sroa$speculated$i267 = $cmp$i$i$i17$i266 ? 1 : $mul$i265;
    $cmp$i$i$i$i268 = ($$sroa$speculated$i267>>>0)>(1073741823);
    if ($cmp$i$i$i$i268) {
     label = 66;
     break L91;
    }
    $mul$i$i$i$i273 = $$sroa$speculated$i267 << 2;
    $call$i$i$i$i$i274295 = (__Znwj($mul$i$i$i$i273)|0);
    $div22$i272 = $$sroa$speculated$i267 >>> 2;
    $80 = $call$i$i$i$i$i274295;
    $add$ptr$i$i275 = (($call$i$i$i$i$i274295) + ($div22$i272<<2)|0);
    $81 = $add$ptr$i$i275;
    $add$ptr11$i$i276 = (($call$i$i$i$i$i274295) + ($$sroa$speculated$i267<<2)|0);
    $82 = $add$ptr11$i$i276;
    $cmp$i3$i$i277 = ($77|0)==($74|0);
    if ($cmp$i3$i$i277) {
     $__t$sroa$11$1$i287 = $81;
    } else {
     $$in$i280 = $add$ptr$i$i275;$84 = $77;$__t$sroa$11$0$i279 = $81;
     while(1) {
      $83 = load4($84);
      store4($$in$i280,$83);
      $85 = $__t$sroa$11$0$i279;
      $incdec$ptr$i$i281 = ((($85)) + 4|0);
      $86 = $incdec$ptr$i$i281;
      $incdec$ptr$i$i$i282 = ((($84)) + 4|0);
      $cmp$i$i12$i283 = ($incdec$ptr$i$i$i282|0)==($74|0);
      if ($cmp$i$i12$i283) {
       $__t$sroa$11$1$i287 = $86;
       break;
      } else {
       $$in$i280 = $incdec$ptr$i$i281;$84 = $incdec$ptr$i$i$i282;$__t$sroa$11$0$i279 = $86;
      }
     }
    }
    store4($ref$tmp35,$80);
    store4($__begin_$i238,$81);
    store4($__end_$i237,$__t$sroa$11$1$i287);
    store4($__first_$i$i$i$i239,$82);
    $tobool$i$i288 = ($78|0)==(0|0);
    $87 = $__t$sroa$11$1$i287;
    if ($tobool$i$i288) {
     $88 = $87;
    } else {
     __ZdlPv($78);
     $88 = $87;
    }
   } else {
    $88 = $74;
   }
  } while(0);
  store4($88,$72);
  $89 = load4($__end_$i237);
  $incdec$ptr$i293 = ((($89)) + 4|0);
  store4($__end_$i237,$incdec$ptr$i293);
  $dec84 = (($__nb$2366) + -1)|0;
  $cmp78 = ($dec84|0)==(0);
  if ($cmp78) {
   break;
  } else {
   $74 = $incdec$ptr$i293;$__nb$2366 = $dec84;
  }
 }
 if ((label|0) == 66) {
  $exception$i$i$i$i270 = (___cxa_allocate_exception(4)|0);
  __ZNSt9bad_allocC2Ev($exception$i$i$i$i270);
  ___cxa_throw(($exception$i$i$i$i270|0),(1088|0),(6|0));
  // unreachable;
 }
 $cmp96361 = ($$sroa$speculated323|0)==(0);
 L111: do {
  if (!($cmp96361)) {
   $$pre383 = load4($__begin_$i);
   $106 = $$pre383;$91 = $incdec$ptr$i293;$__front_capacity$3362 = $$sroa$speculated323;
   L113: while(1) {
    $90 = load4($__first_$i$i$i$i239);
    $cmp$i32 = ($91|0)==($90|0);
    $92 = $90;
    $93 = $91;
    do {
     if ($cmp$i32) {
      $94 = load4($__begin_$i238);
      $95 = load4($ref$tmp35);
      $cmp2$i = ($94>>>0)>($95>>>0);
      $96 = $95;
      if ($cmp2$i) {
       $sub$ptr$lhs$cast$i = $94;
       $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($96))|0;
       $sub$ptr$div$i = $sub$ptr$sub$i >> 2;
       $add$i36 = (($sub$ptr$div$i) + 1)|0;
       $idx$neg$i = (($add$i36|0) / -2)&-1;
       $add$ptr$i37 = (($94) + ($idx$neg$i<<2)|0);
       $sub$ptr$sub$i$i$i = (($93) - ($sub$ptr$lhs$cast$i))|0;
       $sub$ptr$div$i$i$i = $sub$ptr$sub$i$i$i >> 2;
       $cmp$i$i$i38 = ($sub$ptr$div$i$i$i|0)==(0);
       if (!($cmp$i$i$i38)) {
        _memmove(($add$ptr$i37|0),($94|0),($sub$ptr$sub$i$i$i|0))|0;
       }
       $add$ptr$i$i$i = (($add$ptr$i37) + ($sub$ptr$div$i$i$i<<2)|0);
       store4($__end_$i237,$add$ptr$i$i$i);
       store4($__begin_$i238,$add$ptr$i37);
       $107 = $add$ptr$i$i$i;
       break;
      }
      $sub$ptr$sub18$i = (($92) - ($96))|0;
      $mul$i = $sub$ptr$sub18$i >> 1;
      $cmp$i$i$i17$i = ($mul$i|0)==(0);
      $$sroa$speculated$i = $cmp$i$i$i17$i ? 1 : $mul$i;
      $cmp$i$i$i$i = ($$sroa$speculated$i>>>0)>(1073741823);
      if ($cmp$i$i$i$i) {
       break L113;
      }
      $mul$i$i$i$i = $$sroa$speculated$i << 2;
      $call$i$i$i$i$i39 = (__Znwj($mul$i$i$i$i)|0);
      $div22$i = $$sroa$speculated$i >>> 2;
      $97 = $call$i$i$i$i$i39;
      $add$ptr$i$i = (($call$i$i$i$i$i39) + ($div22$i<<2)|0);
      $98 = $add$ptr$i$i;
      $add$ptr11$i$i = (($call$i$i$i$i$i39) + ($$sroa$speculated$i<<2)|0);
      $99 = $add$ptr11$i$i;
      $cmp$i3$i$i = ($94|0)==($91|0);
      if ($cmp$i3$i$i) {
       $__t$sroa$11$1$i = $98;
      } else {
       $$in$i = $add$ptr$i$i;$101 = $94;$__t$sroa$11$0$i = $98;
       while(1) {
        $100 = load4($101);
        store4($$in$i,$100);
        $102 = $__t$sroa$11$0$i;
        $incdec$ptr$i$i = ((($102)) + 4|0);
        $103 = $incdec$ptr$i$i;
        $incdec$ptr$i$i$i = ((($101)) + 4|0);
        $cmp$i$i12$i = ($incdec$ptr$i$i$i|0)==($91|0);
        if ($cmp$i$i12$i) {
         $__t$sroa$11$1$i = $103;
         break;
        } else {
         $$in$i = $incdec$ptr$i$i;$101 = $incdec$ptr$i$i$i;$__t$sroa$11$0$i = $103;
        }
       }
      }
      store4($ref$tmp35,$97);
      store4($__begin_$i238,$98);
      store4($__end_$i237,$__t$sroa$11$1$i);
      store4($__first_$i$i$i$i239,$99);
      $tobool$i$i = ($95|0)==(0|0);
      $104 = $__t$sroa$11$1$i;
      if ($tobool$i$i) {
       $107 = $104;
      } else {
       __ZdlPv($95);
       $107 = $104;
      }
     } else {
      $107 = $91;
     }
    } while(0);
    $105 = load4($106);
    store4($107,$105);
    $108 = load4($__end_$i237);
    $incdec$ptr$i = ((($108)) + 4|0);
    store4($__end_$i237,$incdec$ptr$i);
    $109 = load4($__begin_$i);
    $add$ptr$i = ((($109)) + 4|0);
    store4($__begin_$i,$add$ptr$i);
    $dec106 = (($__front_capacity$3362) + -1)|0;
    $cmp96 = ($dec106|0)==(0);
    if ($cmp96) {
     break L111;
    } else {
     $106 = $add$ptr$i;$91 = $incdec$ptr$i;$__front_capacity$3362 = $dec106;
    }
   }
   $exception$i$i$i$i = (___cxa_allocate_exception(4)|0);
   __ZNSt9bad_allocC2Ev($exception$i$i$i$i);
   ___cxa_throw(($exception$i$i$i$i|0),(1088|0),(6|0));
   // unreachable;
  }
 } while(0);
 $110 = load4($__end_$i);
 $__i108$0 = $110;
 while(1) {
  $111 = load4($__begin_$i);
  $cmp114 = ($__i108$0|0)==($111|0);
  if ($cmp114) {
   break;
  }
  $incdec$ptr117 = ((($__i108$0)) + -4|0);
  __ZNSt3__214__split_bufferIPdRNS_9allocatorIS1_EEE10push_frontERKS1_($ref$tmp35,$incdec$ptr117);
  $__i108$0 = $incdec$ptr117;
 }
 $112 = $111;
 $113 = load4($this);
 $114 = load4($ref$tmp35);
 store4($this,$114);
 store4($ref$tmp35,$113);
 $115 = load4($__begin_$i238);
 store4($__begin_$i,$115);
 store4($__begin_$i238,$112);
 $116 = load4($__end_$i);
 $117 = load4($__end_$i237);
 store4($__end_$i,$117);
 store4($__end_$i237,$116);
 $118 = load4($__first_$i$i$i$i93);
 $119 = load4($__first_$i$i$i$i239);
 store4($__first_$i$i$i$i93,$119);
 store4($__first_$i$i$i$i239,$118);
 $120 = load4($__start_$i);
 $sub135 = (($120) - ($mul62))|0;
 store4($__start_$i,$sub135);
 $121 = $116;
 $cmp1$i$i$i$i17 = ($121|0)==($111|0);
 if (!($cmp1$i$i$i$i17)) {
  $__new_last3$i$i$i$i18 = $111;
  $scevgep$i$i$i$i19 = ((($121)) + -4|0);
  $122 = $scevgep$i$i$i$i19;
  $123 = (($122) - ($__new_last3$i$i$i$i18))|0;
  $124 = $123 >>> 2;
  $125 = $124 ^ -1;
  $scevgep5$i$i$i$i20 = (($121) + ($125<<2)|0);
  store4($__end_$i237,$scevgep5$i$i$i$i20);
 }
 $tobool$i23 = ($113|0)==(0);
 if (!($tobool$i23)) {
  $126 = $113;
  __ZdlPv($126);
 }
 STACKTOP = sp;return;
}
function __ZNSt3__214__split_bufferIPdNS_9allocatorIS1_EEE10push_frontERKS1_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$cast = 0, $$in = 0, $$pre = 0, $$pre41 = 0, $$pre42 = 0, $$sroa$speculated = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__begin_ = 0, $__end_ = 0, $__first_$i$i$i = 0, $__result$addr$0$i$i = 0, $__t$sroa$11$0 = 0, $__t$sroa$11$1 = 0, $add = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr11$i = 0, $add$ptr12 = 0, $add$ptr45 = 0, $add21 = 0, $call$i$i$i$i = 0, $cmp = 0, $cmp$i$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i18 = 0, $cmp$i$i12 = 0, $cmp$i3$i = 0, $cmp2 = 0, $div = 0, $div22 = 0, $exception$i$i$i = 0, $idx$neg$i$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i = 0, $mul = 0, $mul$i$i$i = 0, $sub$ptr$div = 0, $sub$ptr$div$i$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i$i = 0;
 var $sub$ptr$sub17 = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__begin_ = ((($this)) + 4|0);
 $0 = load4($__begin_);
 $1 = load4($this);
 $cmp = ($0|0)==($1|0);
 $2 = $1;
 do {
  if ($cmp) {
   $__end_ = ((($this)) + 8|0);
   $3 = load4($__end_);
   $__first_$i$i$i = ((($this)) + 12|0);
   $4 = load4($__first_$i$i$i);
   $cmp2 = ($3>>>0)<($4>>>0);
   $$cast = $4;
   if ($cmp2) {
    $sub$ptr$rhs$cast = $3;
    $sub$ptr$sub = (($$cast) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$div = $sub$ptr$sub >> 2;
    $add = (($sub$ptr$div) + 1)|0;
    $div = (($add|0) / 2)&-1;
    $add$ptr = (($3) + ($div<<2)|0);
    $sub$ptr$rhs$cast$i$i = $0;
    $sub$ptr$sub$i$i = (($sub$ptr$rhs$cast) - ($sub$ptr$rhs$cast$i$i))|0;
    $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
    $cmp$i$i = ($sub$ptr$div$i$i|0)==(0);
    $idx$neg$i$i = (0 - ($sub$ptr$div$i$i))|0;
    $add$ptr$i$i = (($add$ptr) + ($idx$neg$i$i<<2)|0);
    if ($cmp$i$i) {
     $5 = $3;$__result$addr$0$i$i = $add$ptr;
    } else {
     _memmove(($add$ptr$i$i|0),($0|0),($sub$ptr$sub$i$i|0))|0;
     $$pre41 = load4($__end_);
     $5 = $$pre41;$__result$addr$0$i$i = $add$ptr$i$i;
    }
    store4($__begin_,$__result$addr$0$i$i);
    $add$ptr12 = (($5) + ($div<<2)|0);
    store4($__end_,$add$ptr12);
    $14 = $__result$addr$0$i$i;
    break;
   }
   $sub$ptr$sub17 = (($$cast) - ($2))|0;
   $mul = $sub$ptr$sub17 >> 1;
   $cmp$i$i$i18 = ($mul|0)==(0);
   $$sroa$speculated = $cmp$i$i$i18 ? 1 : $mul;
   $cmp$i$i$i = ($$sroa$speculated>>>0)>(1073741823);
   if ($cmp$i$i$i) {
    $exception$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i);
    ___cxa_throw(($exception$i$i$i|0),(1088|0),(6|0));
    // unreachable;
   }
   $add21 = (($$sroa$speculated) + 3)|0;
   $div22 = $add21 >>> 2;
   $mul$i$i$i = $$sroa$speculated << 2;
   $call$i$i$i$i = (__Znwj($mul$i$i$i)|0);
   $6 = $call$i$i$i$i;
   $add$ptr$i = (($call$i$i$i$i) + ($div22<<2)|0);
   $7 = $add$ptr$i;
   $add$ptr11$i = (($call$i$i$i$i) + ($$sroa$speculated<<2)|0);
   $8 = $add$ptr11$i;
   $cmp$i3$i = ($0|0)==($3|0);
   if ($cmp$i3$i) {
    $13 = $0;$__t$sroa$11$1 = $7;
   } else {
    $$in = $add$ptr$i;$10 = $0;$__t$sroa$11$0 = $7;
    while(1) {
     $9 = load4($10);
     store4($$in,$9);
     $11 = $__t$sroa$11$0;
     $incdec$ptr$i = ((($11)) + 4|0);
     $12 = $incdec$ptr$i;
     $incdec$ptr$i$i = ((($10)) + 4|0);
     $cmp$i$i12 = ($incdec$ptr$i$i|0)==($3|0);
     if ($cmp$i$i12) {
      break;
     } else {
      $$in = $incdec$ptr$i;$10 = $incdec$ptr$i$i;$__t$sroa$11$0 = $12;
     }
    }
    $$pre = load4($this);
    $13 = $$pre;$__t$sroa$11$1 = $12;
   }
   store4($this,$6);
   store4($__begin_,$7);
   store4($__end_,$__t$sroa$11$1);
   store4($__first_$i$i$i,$8);
   $tobool$i = ($13|0)==(0|0);
   if ($tobool$i) {
    $14 = $add$ptr$i;
   } else {
    __ZdlPv($13);
    $$pre42 = load4($__begin_);
    $14 = $$pre42;
   }
  } else {
   $14 = $0;
  }
 } while(0);
 $add$ptr45 = ((($14)) + -4|0);
 $15 = load4($__x);
 store4($add$ptr45,$15);
 $16 = load4($__begin_);
 $incdec$ptr = ((($16)) + -4|0);
 store4($__begin_,$incdec$ptr);
 return;
}
function __ZNSt3__214__split_bufferIPdRNS_9allocatorIS1_EEE10push_frontERKS1_($this,$__x) {
 $this = $this|0;
 $__x = $__x|0;
 var $$cast = 0, $$in = 0, $$pre = 0, $$pre42 = 0, $$pre43 = 0, $$sroa$speculated = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $__begin_ = 0, $__end_ = 0, $__first_$i$i$i = 0, $__result$addr$0$i$i = 0, $__t$sroa$11$0 = 0, $__t$sroa$11$1 = 0, $add = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr11$i = 0, $add$ptr12 = 0, $add$ptr45 = 0, $add21 = 0, $call$i$i$i$i = 0, $cmp = 0, $cmp$i$i = 0;
 var $cmp$i$i$i = 0, $cmp$i$i$i18 = 0, $cmp$i$i12 = 0, $cmp$i3$i = 0, $cmp2 = 0, $div = 0, $div22 = 0, $exception$i$i$i = 0, $idx$neg$i$i = 0, $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i$i = 0, $mul = 0, $mul$i$i$i = 0, $sub$ptr$div = 0, $sub$ptr$div$i$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i$i = 0;
 var $sub$ptr$sub17 = 0, $tobool$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__begin_ = ((($this)) + 4|0);
 $0 = load4($__begin_);
 $1 = load4($this);
 $cmp = ($0|0)==($1|0);
 $2 = $1;
 do {
  if ($cmp) {
   $__end_ = ((($this)) + 8|0);
   $3 = load4($__end_);
   $__first_$i$i$i = ((($this)) + 12|0);
   $4 = load4($__first_$i$i$i);
   $cmp2 = ($3>>>0)<($4>>>0);
   $$cast = $4;
   if ($cmp2) {
    $sub$ptr$rhs$cast = $3;
    $sub$ptr$sub = (($$cast) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$div = $sub$ptr$sub >> 2;
    $add = (($sub$ptr$div) + 1)|0;
    $div = (($add|0) / 2)&-1;
    $add$ptr = (($3) + ($div<<2)|0);
    $sub$ptr$rhs$cast$i$i = $0;
    $sub$ptr$sub$i$i = (($sub$ptr$rhs$cast) - ($sub$ptr$rhs$cast$i$i))|0;
    $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 2;
    $cmp$i$i = ($sub$ptr$div$i$i|0)==(0);
    $idx$neg$i$i = (0 - ($sub$ptr$div$i$i))|0;
    $add$ptr$i$i = (($add$ptr) + ($idx$neg$i$i<<2)|0);
    if ($cmp$i$i) {
     $5 = $3;$__result$addr$0$i$i = $add$ptr;
    } else {
     _memmove(($add$ptr$i$i|0),($0|0),($sub$ptr$sub$i$i|0))|0;
     $$pre42 = load4($__end_);
     $5 = $$pre42;$__result$addr$0$i$i = $add$ptr$i$i;
    }
    store4($__begin_,$__result$addr$0$i$i);
    $add$ptr12 = (($5) + ($div<<2)|0);
    store4($__end_,$add$ptr12);
    $14 = $__result$addr$0$i$i;
    break;
   }
   $sub$ptr$sub17 = (($$cast) - ($2))|0;
   $mul = $sub$ptr$sub17 >> 1;
   $cmp$i$i$i18 = ($mul|0)==(0);
   $$sroa$speculated = $cmp$i$i$i18 ? 1 : $mul;
   $cmp$i$i$i = ($$sroa$speculated>>>0)>(1073741823);
   if ($cmp$i$i$i) {
    $exception$i$i$i = (___cxa_allocate_exception(4)|0);
    __ZNSt9bad_allocC2Ev($exception$i$i$i);
    ___cxa_throw(($exception$i$i$i|0),(1088|0),(6|0));
    // unreachable;
   }
   $add21 = (($$sroa$speculated) + 3)|0;
   $div22 = $add21 >>> 2;
   $mul$i$i$i = $$sroa$speculated << 2;
   $call$i$i$i$i = (__Znwj($mul$i$i$i)|0);
   $6 = $call$i$i$i$i;
   $add$ptr$i = (($call$i$i$i$i) + ($div22<<2)|0);
   $7 = $add$ptr$i;
   $add$ptr11$i = (($call$i$i$i$i) + ($$sroa$speculated<<2)|0);
   $8 = $add$ptr11$i;
   $cmp$i3$i = ($0|0)==($3|0);
   if ($cmp$i3$i) {
    $13 = $0;$__t$sroa$11$1 = $7;
   } else {
    $$in = $add$ptr$i;$10 = $0;$__t$sroa$11$0 = $7;
    while(1) {
     $9 = load4($10);
     store4($$in,$9);
     $11 = $__t$sroa$11$0;
     $incdec$ptr$i = ((($11)) + 4|0);
     $12 = $incdec$ptr$i;
     $incdec$ptr$i$i = ((($10)) + 4|0);
     $cmp$i$i12 = ($incdec$ptr$i$i|0)==($3|0);
     if ($cmp$i$i12) {
      break;
     } else {
      $$in = $incdec$ptr$i;$10 = $incdec$ptr$i$i;$__t$sroa$11$0 = $12;
     }
    }
    $$pre = load4($this);
    $13 = $$pre;$__t$sroa$11$1 = $12;
   }
   store4($this,$6);
   store4($__begin_,$7);
   store4($__end_,$__t$sroa$11$1);
   store4($__first_$i$i$i,$8);
   $tobool$i = ($13|0)==(0|0);
   if ($tobool$i) {
    $14 = $add$ptr$i;
   } else {
    __ZdlPv($13);
    $$pre43 = load4($__begin_);
    $14 = $$pre43;
   }
  } else {
   $14 = $0;
  }
 } while(0);
 $add$ptr45 = ((($14)) + -4|0);
 $15 = load4($__x);
 store4($add$ptr45,$15);
 $16 = load4($__begin_);
 $incdec$ptr = ((($16)) + -4|0);
 store4($__begin_,$incdec$ptr);
 return;
}
function __ZNSt3__26__sortIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $$__m$sroa$10$1 = 0, $$in = 0, $$pre = 0, $$pre$phiZ2D = 0, $$pre$pre = 0, $$pre947 = 0, $$pre947$pre = 0, $$pre947955 = 0, $$pre947956 = 0, $$pre948 = 0.0, $$pre949 = 0, $$pre950 = 0, $$pre952 = 0, $$pre953 = 0, $$pre957 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = i64();
 var $102 = 0, $103 = 0, $104 = i64(), $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = i64(), $116 = 0, $117 = 0, $118 = 0.0, $119 = 0.0, $12 = 0;
 var $120 = 0.0, $121 = 0.0, $122 = 0.0, $123 = 0.0, $124 = 0, $125 = 0, $126 = 0.0, $127 = 0.0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0;
 var $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0.0, $15 = 0.0, $150 = 0, $151 = 0, $152 = 0.0, $153 = 0, $154 = 0, $155 = 0, $156 = 0;
 var $157 = 0, $158 = 0, $159 = 0, $16 = 0.0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0.0, $166 = 0, $167 = 0, $168 = 0.0, $169 = 0, $17 = i64(), $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0;
 var $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0.0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0.0, $19 = 0, $190 = 0, $191 = 0, $192 = 0;
 var $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0.0, $201 = 0, $202 = 0, $203 = 0.0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0;
 var $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0.0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0.0, $226 = 0.0, $227 = i64(), $228 = 0;
 var $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = i64(), $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0;
 var $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = i64(), $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0;
 var $265 = 0, $266 = 0, $267 = 0, $268 = i64(), $269 = 0, $27 = i64(), $270 = 0, $271 = 0, $28 = 0, $29 = 0.0, $3 = 0, $30 = 0.0, $31 = 0, $32 = 0.0, $33 = 0.0, $34 = 0.0, $35 = 0.0, $36 = i64(), $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = i64(), $48 = 0, $49 = 0.0, $5 = 0, $50 = 0.0, $51 = 0.0, $52 = 0.0, $53 = 0.0, $54 = 0.0, $55 = 0, $56 = 0.0;
 var $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0.0, $61 = 0.0, $62 = i64(), $63 = 0, $64 = 0, $65 = i64(), $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = i64(), $81 = i64(), $82 = i64(), $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $__i$sroa$0$0 = 0, $__i$sroa$0$0$insert$ext = i64(), $__i$sroa$0$0$insert$ext653 = i64(), $__i$sroa$0$0$insert$insert = i64(), $__i$sroa$0$0$insert$insert655 = i64(), $__i$sroa$0$1$ph = 0, $__i$sroa$0$10 = 0, $__i$sroa$0$11$ph = 0, $__i$sroa$0$14 = 0, $__i$sroa$0$15 = 0, $__i$sroa$0$18 = 0, $__i$sroa$0$4 = 0, $__i$sroa$0$5 = 0;
 var $__i$sroa$0$6$ph = 0, $__i$sroa$0$9 = 0, $__i$sroa$37$0 = 0, $__i$sroa$37$0$insert$ext = i64(), $__i$sroa$37$0$insert$ext658 = i64(), $__i$sroa$37$0$insert$shift = i64(), $__i$sroa$37$0$insert$shift659 = i64(), $__i$sroa$37$1 = 0, $__i$sroa$37$1$ph = 0, $__i$sroa$37$10 = 0, $__i$sroa$37$11 = 0, $__i$sroa$37$11$ph = 0, $__i$sroa$37$14 = 0, $__i$sroa$37$15 = 0, $__i$sroa$37$18 = 0, $__i$sroa$37$4 = 0, $__i$sroa$37$5 = 0, $__i$sroa$37$6 = 0, $__i$sroa$37$6$ph = 0, $__i$sroa$37$9 = 0;
 var $__j$sroa$0$0 = 0, $__j$sroa$0$1 = 0, $__j$sroa$0$2 = 0, $__j$sroa$0$3 = 0, $__j$sroa$0$4 = 0, $__j$sroa$0$5 = 0, $__j$sroa$0$6 = 0, $__j$sroa$0$7 = 0, $__j$sroa$0$8 = 0, $__j$sroa$0$9 = 0, $__j$sroa$16$0 = 0, $__j$sroa$16$1 = 0, $__j$sroa$16$2 = 0, $__j$sroa$16$3 = 0, $__j$sroa$16$4 = 0, $__j$sroa$16$5 = 0, $__lm1$sroa$0$0 = 0, $__m$sroa$0$0 = 0, $__m$sroa$0$0$insert$ext = i64(), $__m$sroa$0$0$insert$insert = i64();
 var $__m$sroa$10$0 = 0, $__m$sroa$10$0$insert$ext = i64(), $__m$sroa$10$0$insert$shift = i64(), $__m$sroa$10$1 = 0, $__m$sroa$10$3 = 0, $__n_swaps$0 = 0, $__n_swaps$3 = 0, $__n_swaps$4 = 0, $__n_swaps$5 = 0, $__n_swaps$6 = 0, $__ptr_$i$i = 0, $__ptr_$i$i$i = 0, $__ptr_$i$i115 = 0, $__ptr_$i$i311 = 0, $__ptr_$i$i331 = 0, $__ptr_$i$i379 = 0, $__ptr_$i$i399 = 0, $__ptr_$i$i419 = 0, $__ptr_1$i$i$i = 0, $add$i = 0;
 var $add$i$i = 0, $add$i$i119 = 0, $add$i$i315 = 0, $add$i$i335 = 0, $add$i$i383 = 0, $add$i$i403 = 0, $add$i$i423 = 0, $add$i$i461962 = 0, $add$i$i481 = 0, $add$i$i529 = 0, $add$i355 = 0, $add$i80 = 0, $add$i98 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i122 = 0, $add$ptr$i$i318 = 0, $add$ptr$i$i339 = 0, $add$ptr$i$i387 = 0, $add$ptr$i$i407 = 0;
 var $add$ptr$i$i427 = 0, $add$ptr$i$i465 = 0, $add$ptr$i$i485 = 0, $add$ptr$i$i533 = 0, $add$ptr$i163 = 0, $add$ptr$i222 = 0, $add$ptr$i274 = 0, $add$ptr$i295 = 0, $add$ptr$i357 = 0, $add$ptr$i364 = 0, $add$ptr$i374 = 0, $add$ptr$i452 = 0, $add$ptr$i520 = 0, $add$ptr10$i = 0, $add$ptr10$i$i = 0, $add$ptr10$i$i128 = 0, $add$ptr10$i$i324 = 0, $add$ptr10$i$i345 = 0, $add$ptr10$i$i393 = 0, $add$ptr10$i$i413 = 0;
 var $add$ptr10$i$i433 = 0, $add$ptr10$i$i471 = 0, $add$ptr10$i$i491 = 0, $add$ptr10$i$i539 = 0, $add$ptr14$i = 0, $add$ptr14$i$i = 0, $add$ptr14$i$i131 = 0, $add$ptr14$i$i327 = 0, $add$ptr14$i$i348 = 0, $add$ptr14$i$i396 = 0, $add$ptr14$i$i416 = 0, $add$ptr14$i$i436 = 0, $add$ptr14$i$i474 = 0, $add$ptr14$i$i494 = 0, $add$ptr14$i$i542 = 0, $add$ptr6$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i124 = 0, $add$ptr6$i$i320 = 0, $add$ptr6$i$i341 = 0;
 var $add$ptr6$i$i389 = 0, $add$ptr6$i$i409 = 0, $add$ptr6$i$i429 = 0, $add$ptr6$i$i467 = 0, $add$ptr6$i$i467$sink = 0, $add$ptr6$i$i487 = 0, $add$ptr6$i$i487$sink960 = 0, $add$ptr6$i$i487$sink961 = 0, $add$ptr6$i$i535 = 0, $add$ptr6$i$i535$sink = 0, $agg$tmp$sroa$2$0$extract$shift = i64(), $agg$tmp$sroa$2$0$extract$trunc = 0, $agg$tmp10$sroa$2$0$extract$shift = i64(), $agg$tmp10$sroa$2$0$extract$trunc = 0, $agg$tmp14$sroa$0$0$extract$trunc = 0, $agg$tmp14$sroa$2$0$extract$shift = i64(), $agg$tmp14$sroa$2$0$extract$trunc = 0, $agg$tmp161 = 0, $agg$tmp162 = 0, $agg$tmp162$sroa_raw_idx = 0;
 var $agg$tmp164 = 0, $agg$tmp165 = 0, $agg$tmp17$sroa$2$0$extract$shift = i64(), $agg$tmp17$sroa$2$0$extract$trunc = 0, $agg$tmp181 = 0, $agg$tmp182 = 0, $agg$tmp182$sroa_raw_idx = 0, $agg$tmp185 = 0, $agg$tmp186 = 0, $agg$tmp21 = 0, $agg$tmp22 = 0, $agg$tmp23 = 0, $agg$tmp24 = 0, $agg$tmp25 = 0, $agg$tmp29 = 0, $agg$tmp30 = 0, $agg$tmp37 = 0, $agg$tmp38 = 0, $agg$tmp39 = 0, $agg$tmp39$sroa_raw_idx = 0;
 var $agg$tmp40 = 0, $agg$tmp41 = 0, $agg$tmp41$sroa_raw_idx = 0, $agg$tmp45$sroa$2$0$extract$shift = i64(), $agg$tmp45$sroa$2$0$extract$trunc = 0, $call163 = 0, $call166 = 0, $call42 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i210 = 0, $cmp$i$i307 = 0, $cmp$i$i330 = 0, $cmp$i$i446 = 0, $cmp$i$i511 = 0, $cmp$i110 = 0, $cmp$i134 = 0, $cmp$i137 = 0;
 var $cmp$i146 = 0, $cmp$i151 = 0, $cmp$i156 = 0, $cmp$i161 = 0, $cmp$i17$i = 0, $cmp$i17$i$i = 0, $cmp$i17$i506 = 0, $cmp$i172 = 0, $cmp$i176 = 0, $cmp$i18$i = 0, $cmp$i181 = 0, $cmp$i188 = 0, $cmp$i194 = 0, $cmp$i202 = 0, $cmp$i216 = 0, $cmp$i22$i = 0, $cmp$i22$i$i = 0, $cmp$i22$i504 = 0, $cmp$i220 = 0, $cmp$i23$i = 0;
 var $cmp$i232 = 0, $cmp$i236 = 0, $cmp$i241 = 0, $cmp$i247 = 0, $cmp$i25$i = 0, $cmp$i25$i$i = 0, $cmp$i25$i502 = 0, $cmp$i256 = 0, $cmp$i262 = 0, $cmp$i267 = 0, $cmp$i268 = 0, $cmp$i272 = 0, $cmp$i284 = 0, $cmp$i290 = 0, $cmp$i293 = 0, $cmp$i299 = 0, $cmp$i351 = 0, $cmp$i362 = 0, $cmp$i372 = 0, $cmp$i450 = 0;
 var $cmp$i518 = 0, $cmp$i67 = 0, $cmp159 = 0, $cmp179 = 0, $cmp2$i = 0, $cmp2$i$i = 0, $cmp2$i$i120 = 0, $cmp2$i$i316 = 0, $cmp2$i$i336 = 0, $cmp2$i$i384 = 0, $cmp2$i$i404 = 0, $cmp2$i$i424 = 0, $cmp2$i$i462 = 0, $cmp2$i$i482 = 0, $cmp2$i$i530 = 0, $cmp33 = 0, $cmp4$i = 0, $cmp4$i$i = 0, $cmp4$i$i211 = 0, $cmp6$i = 0;
 var $cmp6$i$i = 0, $div36826 = 0, $div8$i = 0, $div8$i$i = 0, $div8$i$i121 = 0, $div8$i$i317 = 0, $div8$i$i338 = 0, $div8$i$i386 = 0, $div8$i$i406 = 0, $div8$i$i426 = 0, $div8$i$i464 = 0, $div8$i$i484 = 0, $div8$i$i532 = 0, $div825 = 0, $idx$neg$i = 0, $idx$neg$i$i = 0, $idx$neg$i$i127 = 0, $idx$neg$i$i323 = 0, $idx$neg$i$i344 = 0, $idx$neg$i$i392 = 0;
 var $idx$neg$i$i412 = 0, $idx$neg$i$i432 = 0, $idx$neg$i$i470 = 0, $idx$neg$i$i490 = 0, $idx$neg$i$i538 = 0, $inc114 = 0, $inc143 = 0, $inc157 = 0, $incdec$ptr$i = 0, $incdec$ptr$i106 = 0, $incdec$ptr$i142 = 0, $incdec$ptr$i162 = 0, $incdec$ptr$i168 = 0, $incdec$ptr$i184 = 0, $incdec$ptr$i198 = 0, $incdec$ptr$i221 = 0, $incdec$ptr$i228 = 0, $incdec$ptr$i243 = 0, $incdec$ptr$i252 = 0, $incdec$ptr$i273 = 0;
 var $incdec$ptr$i280 = 0, $incdec$ptr$i294 = 0, $incdec$ptr$i363 = 0, $incdec$ptr$i373 = 0, $incdec$ptr$i451 = 0, $incdec$ptr$i519 = 0, $incdec$ptr$i63 = 0, $incdec$ptr3$i = 0, $incdec$ptr3$i111 = 0, $incdec$ptr3$i147 = 0, $incdec$ptr3$i173 = 0, $incdec$ptr3$i189 = 0, $incdec$ptr3$i203 = 0, $incdec$ptr3$i233 = 0, $incdec$ptr3$i248 = 0, $incdec$ptr3$i257 = 0, $incdec$ptr3$i285 = 0, $incdec$ptr6$i = 0, $incdec$ptr6$i165 = 0, $incdec$ptr6$i224 = 0;
 var $incdec$ptr6$i276 = 0, $incdec$ptr6$i297 = 0, $incdec$ptr6$i366 = 0, $incdec$ptr6$i376 = 0, $incdec$ptr6$i454 = 0, $incdec$ptr6$i522 = 0, $lnot$i = 0, $lnot$i$i = 0, $lnot$i$i71 = 0, $lnot$i$i89 = 0, $lnot$i$i907 = 0, $lnot$i$i907910 = 0, $mul$i = 0, $mul$i77 = 0, $mul$i95 = 0, $or$cond = 0, $or$cond827 = 0, $phitmp$i = 0, $rem12$i = 0, $rem12$i$i = 0;
 var $rem12$i$i129 = 0, $rem12$i$i325 = 0, $rem12$i$i346 = 0, $rem12$i$i394 = 0, $rem12$i$i414 = 0, $rem12$i$i434 = 0, $rem12$i$i472 = 0, $rem12$i$i492 = 0, $rem12$i$i540 = 0, $rem9$i = 0, $rem9$i$i = 0, $rem9$i$i123 = 0, $rem9$i$i319 = 0, $rem9$i$i340 = 0, $rem9$i$i388 = 0, $rem9$i$i408 = 0, $rem9$i$i428 = 0, $rem9$i$i466 = 0, $rem9$i$i486 = 0, $rem9$i$i534 = 0;
 var $retval$0$i103 = 0, $retval$0$i85 = 0, $storemerge = 0, $storemerge830 = 0, $storemerge832 = 0, $storemerge834 = 0, $storemerge836 = 0, $sub$i = 0, $sub$i$i = 0, $sub$i$i126 = 0, $sub$i$i322 = 0, $sub$i$i343 = 0, $sub$i$i391 = 0, $sub$i$i411 = 0, $sub$i$i431 = 0, $sub$i$i469 = 0, $sub$i$i489 = 0, $sub$i$i537 = 0, $sub$i101 = 0, $sub$i358 = 0;
 var $sub$i83 = 0, $sub$ptr$div$i = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i118 = 0, $sub$ptr$div$i$i314 = 0, $sub$ptr$div$i$i334 = 0, $sub$ptr$div$i$i382 = 0, $sub$ptr$div$i$i402 = 0, $sub$ptr$div$i$i422 = 0, $sub$ptr$div$i$i480 = 0, $sub$ptr$div$i$i528 = 0, $sub$ptr$div12$i = 0, $sub$ptr$div12$i100 = 0, $sub$ptr$div12$i82 = 0, $sub$ptr$div6$i = 0, $sub$ptr$div6$i79 = 0, $sub$ptr$div6$i97 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i74 = 0, $sub$ptr$rhs$cast$i = 0;
 var $sub$ptr$rhs$cast$i93 = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i117 = 0, $sub$ptr$sub$i$i313 = 0, $sub$ptr$sub$i$i333 = 0, $sub$ptr$sub$i$i381 = 0, $sub$ptr$sub$i$i401 = 0, $sub$ptr$sub$i$i421 = 0, $sub$ptr$sub$i$i479 = 0, $sub$ptr$sub$i$i527 = 0, $sub$ptr$sub$i109 = 0, $sub$ptr$sub$i145 = 0, $sub$ptr$sub$i171 = 0, $sub$ptr$sub$i187 = 0, $sub$ptr$sub$i201 = 0, $sub$ptr$sub$i231 = 0, $sub$ptr$sub$i246 = 0, $sub$ptr$sub$i255 = 0, $sub$ptr$sub$i283 = 0;
 var $sub$ptr$sub$i354 = 0, $sub$ptr$sub$i66 = 0, $sub$ptr$sub$i76 = 0, $sub$ptr$sub$i94 = 0, $sub$ptr$sub11$i = 0, $sub$ptr$sub11$i81 = 0, $sub$ptr$sub11$i99 = 0, $sub$ptr$sub5$i = 0, $sub$ptr$sub5$i78 = 0, $sub$ptr$sub5$i96 = 0, $sub13$i = 0, $sub13$i$i = 0, $sub13$i$i130 = 0, $sub13$i$i326 = 0, $sub13$i$i347 = 0, $sub13$i$i395 = 0, $sub13$i$i415 = 0, $sub13$i$i435 = 0, $sub13$i$i473 = 0, $sub13$i$i493 = 0;
 var $sub13$i$i541 = 0, $tmpcast48$byval_copy = 0, $tmpcast54$byval_copy = 0, $tmpcast55$byval_copy = 0, $tmpcast833$byval_copy = 0, $tmpcast837$byval_copy = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 208|0;
 $tmpcast48$byval_copy = sp + 192|0;
 $tmpcast833$byval_copy = sp + 184|0;
 $tmpcast55$byval_copy = sp + 176|0;
 $tmpcast837$byval_copy = sp + 168|0;
 $tmpcast54$byval_copy = sp + 160|0;
 $agg$tmp21 = sp + 152|0;
 $agg$tmp22 = sp + 144|0;
 $agg$tmp23 = sp + 136|0;
 $agg$tmp24 = sp + 128|0;
 $agg$tmp25 = sp + 120|0;
 $agg$tmp29 = sp + 112|0;
 $agg$tmp30 = sp + 104|0;
 $agg$tmp37 = sp + 96|0;
 $agg$tmp38 = sp + 88|0;
 $agg$tmp39 = sp + 80|0;
 $agg$tmp40 = sp + 72|0;
 $agg$tmp41 = sp + 64|0;
 $agg$tmp161 = sp + 56|0;
 $agg$tmp162 = sp + 48|0;
 $agg$tmp164 = sp + 40|0;
 $agg$tmp165 = sp + 32|0;
 $agg$tmp181 = sp + 24|0;
 $agg$tmp182 = sp + 16|0;
 $agg$tmp185 = sp + 8|0;
 $agg$tmp186 = sp;
 $__ptr_$i$i$i = ((($__last)) + 4|0);
 $0 = load4($__ptr_$i$i$i);
 $__ptr_1$i$i$i = ((($__first)) + 4|0);
 $1 = load4($__ptr_1$i$i$i);
 $lnot$i$i907910 = ($0|0)==($1|0);
 if ($lnot$i$i907910) {
  STACKTOP = sp;return;
 }
 $agg$tmp39$sroa_raw_idx = ((($agg$tmp39)) + 4|0);
 $agg$tmp41$sroa_raw_idx = ((($agg$tmp41)) + 4|0);
 $__ptr_$i$i311 = ((($agg$tmp40)) + 4|0);
 $__ptr_$i$i331 = ((($agg$tmp38)) + 4|0);
 $agg$tmp162$sroa_raw_idx = ((($agg$tmp162)) + 4|0);
 $__ptr_$i$i115 = ((($agg$tmp164)) + 4|0);
 $agg$tmp182$sroa_raw_idx = ((($agg$tmp182)) + 4|0);
 $__ptr_$i$i = ((($agg$tmp185)) + 4|0);
 $$pre$pre = load4($__last);
 $$pre947$pre = load4($__first);
 $$in = $1;$$pre = $$pre$pre;$$pre947 = $$pre947$pre;$271 = $0;
 L4: while(1) {
  $2 = $$in;
  $3 = $$pre947;
  $4 = $$in;$6 = $271;$8 = $$pre;$9 = $$pre947;$90 = $3;$94 = $2;
  L6: while(1) {
   $5 = $4;
   $7 = $6;
   $sub$ptr$lhs$cast$i = $8;
   $sub$ptr$rhs$cast$i = $9;
   $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
   $mul$i = $sub$ptr$sub$i << 7;
   $10 = load4($8);
   $sub$ptr$sub5$i = (($7) - ($10))|0;
   $sub$ptr$div6$i = $sub$ptr$sub5$i >> 3;
   $add$i = (($sub$ptr$div6$i) + ($mul$i))|0;
   $11 = load4($9);
   $sub$ptr$sub11$i = (($5) - ($11))|0;
   $sub$ptr$div12$i = $sub$ptr$sub11$i >> 3;
   $sub$i = (($add$i) - ($sub$ptr$div12$i))|0;
   switch ($sub$i|0) {
   case 2:  {
    label = 5;
    break L4;
    break;
   }
   case 3:  {
    label = 9;
    break L4;
    break;
   }
   case 4:  {
    label = 22;
    break L4;
    break;
   }
   case 5:  {
    label = 41;
    break L4;
    break;
   }
   case 1: case 0:  {
    label = 156;
    break L4;
    break;
   }
   default: {
   }
   }
   $cmp = ($sub$i|0)<(31);
   if ($cmp) {
    label = 54;
    break L4;
   }
   $83 = load4($__last);
   $84 = $83;
   $85 = load4($84);
   $cmp$i362 = ($6|0)==($85|0);
   if ($cmp$i362) {
    $incdec$ptr$i363 = ((($84)) + -4|0);
    $86 = $incdec$ptr$i363;
    $87 = load4($incdec$ptr$i363);
    $add$ptr$i364 = ((($87)) + 4096|0);
    $88 = $add$ptr$i364;$__lm1$sroa$0$0 = $86;
   } else {
    $88 = $6;$__lm1$sroa$0$0 = $83;
   }
   $incdec$ptr6$i366 = ((($88)) + -8|0);
   $89 = $incdec$ptr6$i366;
   $cmp33 = ($sub$i|0)>(999);
   $div825 = $sub$i >>> 1;
   $cmp$i351 = ($div825|0)==(0);
   do {
    if ($cmp$i351) {
     $__m$sroa$0$0 = $90;$__m$sroa$10$0 = $94;
    } else {
     $91 = $90;
     $92 = $90;
     $93 = load4($92);
     $sub$ptr$sub$i354 = (($94) - ($93))|0;
     $sub$ptr$div$i = $sub$ptr$sub$i354 >> 3;
     $add$i355 = (($sub$ptr$div$i) + ($div825))|0;
     $cmp2$i = ($add$i355|0)>(0);
     if ($cmp2$i) {
      $div8$i = $add$i355 >>> 9;
      $add$ptr$i357 = (($91) + ($div8$i<<2)|0);
      $95 = $add$ptr$i357;
      $96 = load4($add$ptr$i357);
      $rem9$i = $add$i355 & 511;
      $add$ptr6$i = (($96) + ($rem9$i<<3)|0);
      $97 = $add$ptr6$i;
      $__m$sroa$0$0 = $95;$__m$sroa$10$0 = $97;
      break;
     } else {
      $sub$i358 = (511 - ($add$i355))|0;
      $idx$neg$i = (($sub$i358|0) / -512)&-1;
      $add$ptr10$i = (($91) + ($idx$neg$i<<2)|0);
      $98 = $add$ptr10$i;
      $99 = load4($add$ptr10$i);
      $rem12$i = (($sub$i358|0) % 512)&-1;
      $sub13$i = (511 - ($rem12$i))|0;
      $add$ptr14$i = (($99) + ($sub13$i<<3)|0);
      $100 = $add$ptr14$i;
      $__m$sroa$0$0 = $98;$__m$sroa$10$0 = $100;
      break;
     }
    }
   } while(0);
   do {
    if ($cmp33) {
     $div36826 = $sub$i >>> 2;
     $101 = load8($__first,4);
     store8($agg$tmp37,$101);
     store8($agg$tmp38,$101);
     $cmp$i$i330 = ($div36826|0)==(0);
     $102 = i64_trunc($101);
     $103 = $102;
     do {
      if (!($cmp$i$i330)) {
       $104 = i64_lshr($101,i64_const(32,0));
       $105 = i64_trunc($104);
       $106 = $102;
       $107 = load4($106);
       $sub$ptr$sub$i$i333 = (($105) - ($107))|0;
       $sub$ptr$div$i$i334 = $sub$ptr$sub$i$i333 >> 3;
       $add$i$i335 = (($sub$ptr$div$i$i334) + ($div36826))|0;
       $cmp2$i$i336 = ($add$i$i335|0)>(0);
       if ($cmp2$i$i336) {
        $div8$i$i338 = $add$i$i335 >>> 9;
        $add$ptr$i$i339 = (($103) + ($div8$i$i338<<2)|0);
        store4($agg$tmp38,$add$ptr$i$i339);
        $108 = load4($add$ptr$i$i339);
        $rem9$i$i340 = $add$i$i335 & 511;
        $add$ptr6$i$i341 = (($108) + ($rem9$i$i340<<3)|0);
        store4($__ptr_$i$i331,$add$ptr6$i$i341);
        break;
       } else {
        $sub$i$i343 = (511 - ($add$i$i335))|0;
        $idx$neg$i$i344 = (($sub$i$i343|0) / -512)&-1;
        $add$ptr10$i$i345 = (($103) + ($idx$neg$i$i344<<2)|0);
        store4($agg$tmp38,$add$ptr10$i$i345);
        $109 = load4($add$ptr10$i$i345);
        $rem12$i$i346 = (($sub$i$i343|0) % 512)&-1;
        $sub13$i$i347 = (511 - ($rem12$i$i346))|0;
        $add$ptr14$i$i348 = (($109) + ($sub13$i$i347<<3)|0);
        store4($__ptr_$i$i331,$add$ptr14$i$i348);
        break;
       }
      }
     } while(0);
     store4($agg$tmp39,$__m$sroa$0$0);
     store4($agg$tmp39$sroa_raw_idx,$__m$sroa$10$0);
     $__m$sroa$10$0$insert$ext = i64_zext($__m$sroa$10$0>>>0);
     $__m$sroa$10$0$insert$shift = i64_shl($__m$sroa$10$0$insert$ext,i64_const(32,0));
     $__m$sroa$0$0$insert$ext = i64_zext($__m$sroa$0$0>>>0);
     $__m$sroa$0$0$insert$insert = i64_or($__m$sroa$10$0$insert$shift,$__m$sroa$0$0$insert$ext);
     store8($agg$tmp40,$__m$sroa$0$0$insert$insert);
     $110 = $__m$sroa$0$0;
     do {
      if (!($cmp$i$i330)) {
       $111 = $__m$sroa$0$0;
       $112 = load4($111);
       $sub$ptr$sub$i$i313 = (($__m$sroa$10$0) - ($112))|0;
       $sub$ptr$div$i$i314 = $sub$ptr$sub$i$i313 >> 3;
       $add$i$i315 = (($sub$ptr$div$i$i314) + ($div36826))|0;
       $cmp2$i$i316 = ($add$i$i315|0)>(0);
       if ($cmp2$i$i316) {
        $div8$i$i317 = $add$i$i315 >>> 9;
        $add$ptr$i$i318 = (($110) + ($div8$i$i317<<2)|0);
        store4($agg$tmp40,$add$ptr$i$i318);
        $113 = load4($add$ptr$i$i318);
        $rem9$i$i319 = $add$i$i315 & 511;
        $add$ptr6$i$i320 = (($113) + ($rem9$i$i319<<3)|0);
        store4($__ptr_$i$i311,$add$ptr6$i$i320);
        break;
       } else {
        $sub$i$i322 = (511 - ($add$i$i315))|0;
        $idx$neg$i$i323 = (($sub$i$i322|0) / -512)&-1;
        $add$ptr10$i$i324 = (($110) + ($idx$neg$i$i323<<2)|0);
        store4($agg$tmp40,$add$ptr10$i$i324);
        $114 = load4($add$ptr10$i$i324);
        $rem12$i$i325 = (($sub$i$i322|0) % 512)&-1;
        $sub13$i$i326 = (511 - ($rem12$i$i325))|0;
        $add$ptr14$i$i327 = (($114) + ($sub13$i$i326<<3)|0);
        store4($__ptr_$i$i311,$add$ptr14$i$i327);
        break;
       }
      }
     } while(0);
     store4($agg$tmp41,$__lm1$sroa$0$0);
     store4($agg$tmp41$sroa_raw_idx,$89);
     ; store8($tmpcast54$byval_copy,load8($agg$tmp37,4),4);
     ; store8($tmpcast837$byval_copy,load8($agg$tmp38,4),4);
     ; store8($tmpcast55$byval_copy,load8($agg$tmp39,4),4);
     ; store8($tmpcast833$byval_copy,load8($agg$tmp40,4),4);
     ; store8($tmpcast48$byval_copy,load8($agg$tmp41,4),4);
     $call42 = (__ZNSt3__27__sort5IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEjT0_S9_S9_S9_S9_T_($tmpcast54$byval_copy,$tmpcast837$byval_copy,$tmpcast55$byval_copy,$tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp)|0);
     $$pre957 = $__m$sroa$10$0;
     $$pre$phiZ2D = $$pre957;$__n_swaps$0 = $call42;
    } else {
     $115 = load8($__first,4);
     $agg$tmp45$sroa$2$0$extract$shift = i64_lshr($115,i64_const(32,0));
     $agg$tmp45$sroa$2$0$extract$trunc = i64_trunc($agg$tmp45$sroa$2$0$extract$shift);
     $116 = $__m$sroa$10$0;
     $117 = $agg$tmp45$sroa$2$0$extract$trunc;
     $118 = loadd($116);
     $119 = loadd($117);
     $cmp$i25$i = $118 < $119;
     $120 = loadd($incdec$ptr6$i366);
     $cmp$i22$i = $120 < $118;
     if (!($cmp$i25$i)) {
      if (!($cmp$i22$i)) {
       $$pre$phiZ2D = $116;$__n_swaps$0 = 0;
       break;
      }
      stored($116,$120);
      stored($incdec$ptr6$i366,$118);
      $121 = loadd($116);
      $122 = loadd($117);
      $cmp$i17$i = $121 < $122;
      if (!($cmp$i17$i)) {
       $$pre$phiZ2D = $116;$__n_swaps$0 = 1;
       break;
      }
      stored($117,$121);
      stored($116,$122);
      $$pre$phiZ2D = $116;$__n_swaps$0 = 2;
      break;
     }
     if ($cmp$i22$i) {
      stored($117,$120);
      stored($incdec$ptr6$i366,$119);
      $$pre$phiZ2D = $116;$__n_swaps$0 = 1;
      break;
     }
     stored($117,$118);
     stored($116,$119);
     $123 = loadd($incdec$ptr6$i366);
     $cmp$i$i307 = $123 < $119;
     if ($cmp$i$i307) {
      stored($116,$123);
      stored($incdec$ptr6$i366,$119);
      $$pre$phiZ2D = $116;$__n_swaps$0 = 2;
     } else {
      $$pre$phiZ2D = $116;$__n_swaps$0 = 1;
     }
    }
   } while(0);
   $124 = load4($__first);
   $125 = load4($__ptr_1$i$i$i);
   $126 = loadd($125);
   $127 = loadd($$pre$phiZ2D);
   $cmp$i299 = $126 < $127;
   $128 = $124;
   if ($cmp$i299) {
    $__j$sroa$0$6 = $__lm1$sroa$0$0;$__j$sroa$16$3 = $89;$__n_swaps$3 = $__n_swaps$0;
    break;
   } else {
    $__j$sroa$0$0 = $__lm1$sroa$0$0;$__j$sroa$16$0 = $89;
   }
   while(1) {
    $129 = $__j$sroa$16$0;
    $130 = $__j$sroa$0$0;
    $131 = load4($130);
    $cmp$i293 = ($129|0)==($131|0);
    if ($cmp$i293) {
     $incdec$ptr$i294 = ((($130)) + -4|0);
     $132 = $incdec$ptr$i294;
     $133 = load4($incdec$ptr$i294);
     $add$ptr$i295 = ((($133)) + 4096|0);
     $134 = $add$ptr$i295;$__j$sroa$0$1 = $132;
    } else {
     $134 = $129;$__j$sroa$0$1 = $__j$sroa$0$0;
    }
    $incdec$ptr6$i297 = ((($134)) + -8|0);
    $135 = $incdec$ptr6$i297;
    $cmp$i290 = ($125|0)==($incdec$ptr6$i297|0);
    if ($cmp$i290) {
     break;
    }
    $189 = loadd($incdec$ptr6$i297);
    $cmp$i194 = $189 < $127;
    if ($cmp$i194) {
     label = 111;
     break L6;
    } else {
     $__j$sroa$0$0 = $__j$sroa$0$1;$__j$sroa$16$0 = $135;
    }
   }
   $incdec$ptr$i280 = ((($125)) + 8|0);
   $136 = $incdec$ptr$i280;
   $137 = $124;
   $138 = load4($137);
   $sub$ptr$sub$i283 = (($136) - ($138))|0;
   $cmp$i284 = ($sub$ptr$sub$i283|0)==(4096);
   if ($cmp$i284) {
    $incdec$ptr3$i285 = ((($128)) + 4|0);
    $139 = $incdec$ptr3$i285;
    $140 = load4($incdec$ptr3$i285);
    $__i$sroa$0$0 = $139;$__i$sroa$37$0 = $140;
   } else {
    $__i$sroa$0$0 = $124;$__i$sroa$37$0 = $136;
   }
   $141 = load4($__last);
   $142 = load4($__ptr_$i$i$i);
   $143 = $141;
   $144 = load4($143);
   $cmp$i272 = ($142|0)==($144|0);
   if ($cmp$i272) {
    $incdec$ptr$i273 = ((($143)) + -4|0);
    $145 = $incdec$ptr$i273;
    $146 = load4($incdec$ptr$i273);
    $add$ptr$i274 = ((($146)) + 4096|0);
    $147 = $add$ptr$i274;$__j$sroa$0$2 = $145;
   } else {
    $147 = $142;$__j$sroa$0$2 = $141;
   }
   $incdec$ptr6$i276 = ((($147)) + -8|0);
   $148 = $incdec$ptr6$i276;
   $149 = loadd($incdec$ptr6$i276);
   $cmp$i268 = $126 < $149;
   if ($cmp$i268) {
    $__i$sroa$0$4 = $__i$sroa$0$0;$__i$sroa$37$4 = $__i$sroa$37$0;
   } else {
    $__i$sroa$0$1$ph = $__i$sroa$0$0;$__i$sroa$37$1$ph = $__i$sroa$37$0;
    L58: while(1) {
     $150 = $__i$sroa$0$1$ph;
     $__i$sroa$37$1 = $__i$sroa$37$1$ph;
     while(1) {
      $151 = $__i$sroa$37$1;
      $cmp$i267 = ($151|0)==($incdec$ptr6$i276|0);
      if ($cmp$i267) {
       label = 156;
       break L4;
      }
      $152 = loadd($151);
      $cmp$i262 = $126 < $152;
      if ($cmp$i262) {
       break L58;
      }
      $incdec$ptr$i243 = ((($151)) + 8|0);
      $158 = $incdec$ptr$i243;
      $159 = load4($150);
      $sub$ptr$sub$i246 = (($158) - ($159))|0;
      $cmp$i247 = ($sub$ptr$sub$i246|0)==(4096);
      if ($cmp$i247) {
       break;
      } else {
       $__i$sroa$37$1 = $158;
      }
     }
     $160 = $__i$sroa$0$1$ph;
     $incdec$ptr3$i248 = ((($160)) + 4|0);
     $161 = $incdec$ptr3$i248;
     $162 = load4($incdec$ptr3$i248);
     $__i$sroa$0$1$ph = $161;$__i$sroa$37$1$ph = $162;
    }
    stored($151,$149);
    stored($incdec$ptr6$i276,$152);
    $incdec$ptr$i252 = ((($151)) + 8|0);
    $153 = $incdec$ptr$i252;
    $154 = load4($150);
    $sub$ptr$sub$i255 = (($153) - ($154))|0;
    $cmp$i256 = ($sub$ptr$sub$i255|0)==(4096);
    if ($cmp$i256) {
     $155 = $__i$sroa$0$1$ph;
     $incdec$ptr3$i257 = ((($155)) + 4|0);
     $156 = $incdec$ptr3$i257;
     $157 = load4($incdec$ptr3$i257);
     $__i$sroa$0$4 = $156;$__i$sroa$37$4 = $157;
    } else {
     $__i$sroa$0$4 = $__i$sroa$0$1$ph;$__i$sroa$37$4 = $153;
    }
   }
   $163 = $__i$sroa$37$4;
   $cmp$i241 = ($163|0)==($incdec$ptr6$i276|0);
   if ($cmp$i241) {
    label = 156;
    break L4;
   }
   $164 = load4($__ptr_1$i$i$i);
   $__i$sroa$0$5 = $__i$sroa$0$4;$__i$sroa$37$5 = $__i$sroa$37$4;$__j$sroa$0$3 = $__j$sroa$0$2;$__j$sroa$16$1 = $148;
   while(1) {
    $165 = loadd($164);
    $__i$sroa$0$6$ph = $__i$sroa$0$5;$__i$sroa$37$6$ph = $__i$sroa$37$5;
    L71: while(1) {
     $166 = $__i$sroa$0$6$ph;
     $__i$sroa$37$6 = $__i$sroa$37$6$ph;
     while(1) {
      $167 = $__i$sroa$37$6;
      $168 = loadd($167);
      $cmp$i236 = $165 < $168;
      if ($cmp$i236) {
       $__j$sroa$0$4 = $__j$sroa$0$3;$__j$sroa$16$2 = $__j$sroa$16$1;
       break L71;
      }
      $incdec$ptr$i228 = ((($167)) + 8|0);
      $169 = $incdec$ptr$i228;
      $170 = load4($166);
      $sub$ptr$sub$i231 = (($169) - ($170))|0;
      $cmp$i232 = ($sub$ptr$sub$i231|0)==(4096);
      if ($cmp$i232) {
       break;
      } else {
       $__i$sroa$37$6 = $169;
      }
     }
     $171 = $__i$sroa$0$6$ph;
     $incdec$ptr3$i233 = ((($171)) + 4|0);
     $172 = $incdec$ptr3$i233;
     $173 = load4($incdec$ptr3$i233);
     $__i$sroa$0$6$ph = $172;$__i$sroa$37$6$ph = $173;
    }
    while(1) {
     $174 = $__j$sroa$16$2;
     $175 = $__j$sroa$0$4;
     $176 = load4($175);
     $cmp$i220 = ($174|0)==($176|0);
     if ($cmp$i220) {
      $incdec$ptr$i221 = ((($175)) + -4|0);
      $177 = $incdec$ptr$i221;
      $178 = load4($incdec$ptr$i221);
      $add$ptr$i222 = ((($178)) + 4096|0);
      $179 = $add$ptr$i222;$__j$sroa$0$5 = $177;
     } else {
      $179 = $174;$__j$sroa$0$5 = $__j$sroa$0$4;
     }
     $incdec$ptr6$i224 = ((($179)) + -8|0);
     $180 = $incdec$ptr6$i224;
     $181 = loadd($incdec$ptr6$i224);
     $cmp$i216 = $165 < $181;
     if ($cmp$i216) {
      $__j$sroa$0$4 = $__j$sroa$0$5;$__j$sroa$16$2 = $180;
     } else {
      break;
     }
    }
    $182 = $__i$sroa$0$6$ph;
    $183 = $__j$sroa$0$5;
    $cmp$i$i210 = ($182>>>0)<($183>>>0);
    if (!($cmp$i$i210)) {
     $cmp4$i$i211 = ($182|0)!=($183|0);
     $phitmp$i = ($167>>>0)>=($incdec$ptr6$i224>>>0);
     $or$cond = $cmp4$i$i211 | $phitmp$i;
     if ($or$cond) {
      break;
     }
    }
    stored($167,$181);
    stored($incdec$ptr6$i224,$168);
    $incdec$ptr$i198 = ((($167)) + 8|0);
    $184 = $incdec$ptr$i198;
    $185 = load4($166);
    $sub$ptr$sub$i201 = (($184) - ($185))|0;
    $cmp$i202 = ($sub$ptr$sub$i201|0)==(4096);
    if (!($cmp$i202)) {
     $__i$sroa$0$5 = $__i$sroa$0$6$ph;$__i$sroa$37$5 = $184;$__j$sroa$0$3 = $__j$sroa$0$5;$__j$sroa$16$1 = $180;
     continue;
    }
    $incdec$ptr3$i203 = ((($182)) + 4|0);
    $186 = $incdec$ptr3$i203;
    $187 = load4($incdec$ptr3$i203);
    $__i$sroa$0$5 = $186;$__i$sroa$37$5 = $187;$__j$sroa$0$3 = $__j$sroa$0$5;$__j$sroa$16$1 = $180;
   }
   store4($__first,$__i$sroa$0$6$ph);
   store4($__ptr_1$i$i$i,$__i$sroa$37$6);
   $188 = load4($__ptr_$i$i$i);
   $lnot$i$i = ($188|0)==($167|0);
   if ($lnot$i$i) {
    label = 156;
    break L4;
   } else {
    $4 = $167;$6 = $188;$8 = $143;$9 = $182;$90 = $__i$sroa$0$6$ph;$94 = $__i$sroa$37$6;
   }
  }
  if ((label|0) == 111) {
   label = 0;
   stored($125,$189);
   stored($incdec$ptr6$i297,$126);
   $inc114 = (($__n_swaps$0) + 1)|0;
   $__j$sroa$0$6 = $__j$sroa$0$1;$__j$sroa$16$3 = $135;$__n_swaps$3 = $inc114;
  }
  $incdec$ptr$i184 = ((($125)) + 8|0);
  $190 = $incdec$ptr$i184;
  $191 = $124;
  $192 = load4($191);
  $sub$ptr$sub$i187 = (($190) - ($192))|0;
  $cmp$i188 = ($sub$ptr$sub$i187|0)==(4096);
  if ($cmp$i188) {
   $incdec$ptr3$i189 = ((($128)) + 4|0);
   $193 = $incdec$ptr3$i189;
   $194 = load4($incdec$ptr3$i189);
   $__i$sroa$0$9 = $193;$__i$sroa$37$9 = $194;
  } else {
   $__i$sroa$0$9 = $124;$__i$sroa$37$9 = $190;
  }
  $195 = $__i$sroa$0$9;
  $196 = $__j$sroa$0$6;
  $cmp$i181 = ($195>>>0)<($196>>>0);
  if ($cmp$i181) {
   $__i$sroa$0$10 = $__i$sroa$0$9;$__i$sroa$37$10 = $__i$sroa$37$9;$__j$sroa$0$7 = $__j$sroa$0$6;$__j$sroa$16$4 = $__j$sroa$16$3;$__m$sroa$10$1 = $__m$sroa$10$0;$__n_swaps$4 = $__n_swaps$3;
   label = 117;
  } else {
   $cmp4$i = ($195|0)==($196|0);
   if ($cmp4$i) {
    $197 = $__i$sroa$37$9;
    $198 = $__j$sroa$16$3;
    $cmp6$i = ($197>>>0)<($198>>>0);
    if ($cmp6$i) {
     $__i$sroa$0$10 = $__i$sroa$0$9;$__i$sroa$37$10 = $__i$sroa$37$9;$__j$sroa$0$7 = $__j$sroa$0$6;$__j$sroa$16$4 = $__j$sroa$16$3;$__m$sroa$10$1 = $__m$sroa$10$0;$__n_swaps$4 = $__n_swaps$3;
     label = 117;
    } else {
     $__i$sroa$0$14 = $__i$sroa$0$9;$__i$sroa$37$14 = $__i$sroa$37$9;$__m$sroa$10$3 = $__m$sroa$10$0;$__n_swaps$5 = $__n_swaps$3;
    }
   } else {
    $__i$sroa$0$14 = $__i$sroa$0$9;$__i$sroa$37$14 = $__i$sroa$37$9;$__m$sroa$10$3 = $__m$sroa$10$0;$__n_swaps$5 = $__n_swaps$3;
   }
  }
  L97: do {
   if ((label|0) == 117) {
    while(1) {
     label = 0;
     $199 = $__m$sroa$10$1;
     $200 = loadd($199);
     $__i$sroa$0$11$ph = $__i$sroa$0$10;$__i$sroa$37$11$ph = $__i$sroa$37$10;
     L100: while(1) {
      $201 = $__i$sroa$0$11$ph;
      $__i$sroa$37$11 = $__i$sroa$37$11$ph;
      while(1) {
       $202 = $__i$sroa$37$11;
       $203 = loadd($202);
       $cmp$i176 = $203 < $200;
       if (!($cmp$i176)) {
        $__j$sroa$0$8 = $__j$sroa$0$7;$__j$sroa$16$5 = $__j$sroa$16$4;
        break L100;
       }
       $incdec$ptr$i168 = ((($202)) + 8|0);
       $204 = $incdec$ptr$i168;
       $205 = load4($201);
       $sub$ptr$sub$i171 = (($204) - ($205))|0;
       $cmp$i172 = ($sub$ptr$sub$i171|0)==(4096);
       if ($cmp$i172) {
        break;
       } else {
        $__i$sroa$37$11 = $204;
       }
      }
      $206 = $__i$sroa$0$11$ph;
      $incdec$ptr3$i173 = ((($206)) + 4|0);
      $207 = $incdec$ptr3$i173;
      $208 = load4($incdec$ptr3$i173);
      $__i$sroa$0$11$ph = $207;$__i$sroa$37$11$ph = $208;
     }
     while(1) {
      $209 = $__j$sroa$16$5;
      $210 = $__j$sroa$0$8;
      $211 = load4($210);
      $cmp$i161 = ($209|0)==($211|0);
      if ($cmp$i161) {
       $incdec$ptr$i162 = ((($210)) + -4|0);
       $212 = $incdec$ptr$i162;
       $213 = load4($incdec$ptr$i162);
       $add$ptr$i163 = ((($213)) + 4096|0);
       $214 = $add$ptr$i163;$__j$sroa$0$9 = $212;
      } else {
       $214 = $209;$__j$sroa$0$9 = $__j$sroa$0$8;
      }
      $incdec$ptr6$i165 = ((($214)) + -8|0);
      $215 = $incdec$ptr6$i165;
      $216 = loadd($incdec$ptr6$i165);
      $cmp$i156 = $216 < $200;
      if ($cmp$i156) {
       break;
      } else {
       $__j$sroa$0$8 = $__j$sroa$0$9;$__j$sroa$16$5 = $215;
      }
     }
     $217 = $__j$sroa$0$9;
     $218 = $__i$sroa$0$11$ph;
     $cmp$i$i = ($217>>>0)<($218>>>0);
     if ($cmp$i$i) {
      $__i$sroa$0$14 = $__i$sroa$0$11$ph;$__i$sroa$37$14 = $__i$sroa$37$11;$__m$sroa$10$3 = $__m$sroa$10$1;$__n_swaps$5 = $__n_swaps$4;
      break L97;
     }
     $cmp4$i$i = ($217|0)==($218|0);
     $cmp6$i$i = ($incdec$ptr6$i165>>>0)<($202>>>0);
     $or$cond827 = $cmp4$i$i & $cmp6$i$i;
     if ($or$cond827) {
      $__i$sroa$0$14 = $__i$sroa$0$11$ph;$__i$sroa$37$14 = $__i$sroa$37$11;$__m$sroa$10$3 = $__m$sroa$10$1;$__n_swaps$5 = $__n_swaps$4;
      break L97;
     }
     stored($202,$216);
     stored($incdec$ptr6$i165,$203);
     $inc143 = (($__n_swaps$4) + 1)|0;
     $cmp$i151 = ($199|0)==($202|0);
     $$__m$sroa$10$1 = $cmp$i151 ? $215 : $__m$sroa$10$1;
     $incdec$ptr$i142 = ((($202)) + 8|0);
     $219 = $incdec$ptr$i142;
     $220 = load4($201);
     $sub$ptr$sub$i145 = (($219) - ($220))|0;
     $cmp$i146 = ($sub$ptr$sub$i145|0)==(4096);
     if (!($cmp$i146)) {
      $__i$sroa$0$10 = $__i$sroa$0$11$ph;$__i$sroa$37$10 = $219;$__j$sroa$0$7 = $__j$sroa$0$9;$__j$sroa$16$4 = $215;$__m$sroa$10$1 = $$__m$sroa$10$1;$__n_swaps$4 = $inc143;
      label = 117;
      continue;
     }
     $incdec$ptr3$i147 = ((($218)) + 4|0);
     $221 = $incdec$ptr3$i147;
     $222 = load4($incdec$ptr3$i147);
     $__i$sroa$0$10 = $221;$__i$sroa$37$10 = $222;$__j$sroa$0$7 = $__j$sroa$0$9;$__j$sroa$16$4 = $215;$__m$sroa$10$1 = $$__m$sroa$10$1;$__n_swaps$4 = $inc143;
     label = 117;
    }
   }
  } while(0);
  $223 = $__i$sroa$37$14;
  $224 = $__m$sroa$10$3;
  $lnot$i = ($223|0)==($224|0);
  if ($lnot$i) {
   $__n_swaps$6 = $__n_swaps$5;
  } else {
   $225 = loadd($224);
   $226 = loadd($223);
   $cmp$i137 = $225 < $226;
   if ($cmp$i137) {
    $inc157 = (($__n_swaps$5) + 1)|0;
    stored($223,$225);
    stored($224,$226);
    $__n_swaps$6 = $inc157;
   } else {
    $__n_swaps$6 = $__n_swaps$5;
   }
  }
  $cmp159 = ($__n_swaps$6|0)==(0);
  do {
   if ($cmp159) {
    $227 = load8($__first,4);
    store8($agg$tmp161,$227);
    store4($agg$tmp162,$__i$sroa$0$14);
    store4($agg$tmp162$sroa_raw_idx,$__i$sroa$37$14);
    ; store8($tmpcast833$byval_copy,load8($agg$tmp161,4),4);
    ; store8($tmpcast48$byval_copy,load8($agg$tmp162,4),4);
    $call163 = (__ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEbT0_S9_T_($tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp)|0);
    $__i$sroa$37$0$insert$ext658 = i64_zext($__i$sroa$37$14>>>0);
    $__i$sroa$37$0$insert$shift659 = i64_shl($__i$sroa$37$0$insert$ext658,i64_const(32,0));
    $__i$sroa$0$0$insert$ext653 = i64_zext($__i$sroa$0$14>>>0);
    $__i$sroa$0$0$insert$insert655 = i64_or($__i$sroa$37$0$insert$shift659,$__i$sroa$0$0$insert$ext653);
    store8($agg$tmp164,$__i$sroa$0$0$insert$insert655);
    $228 = $__i$sroa$0$14;
    $229 = $__i$sroa$0$14;
    $230 = load4($229);
    $sub$ptr$sub$i$i117 = (($__i$sroa$37$14) - ($230))|0;
    $sub$ptr$div$i$i118 = $sub$ptr$sub$i$i117 >> 3;
    $add$i$i119 = (($sub$ptr$div$i$i118) + 1)|0;
    $cmp2$i$i120 = ($sub$ptr$sub$i$i117|0)>(-8);
    $231 = i64_trunc($227);
    $232 = $231;
    if ($cmp2$i$i120) {
     $div8$i$i121 = $add$i$i119 >>> 9;
     $add$ptr$i$i122 = (($228) + ($div8$i$i121<<2)|0);
     store4($agg$tmp164,$add$ptr$i$i122);
     $233 = load4($add$ptr$i$i122);
     $rem9$i$i123 = $add$i$i119 & 511;
     $add$ptr6$i$i124 = (($233) + ($rem9$i$i123<<3)|0);
     $storemerge836 = $add$ptr6$i$i124;
    } else {
     $sub$i$i126 = (510 - ($sub$ptr$div$i$i118))|0;
     $idx$neg$i$i127 = (($sub$i$i126|0) / -512)&-1;
     $add$ptr10$i$i128 = (($228) + ($idx$neg$i$i127<<2)|0);
     store4($agg$tmp164,$add$ptr10$i$i128);
     $234 = load4($add$ptr10$i$i128);
     $rem12$i$i129 = (($sub$i$i126|0) % 512)&-1;
     $sub13$i$i130 = (511 - ($rem12$i$i129))|0;
     $add$ptr14$i$i131 = (($234) + ($sub13$i$i130<<3)|0);
     $storemerge836 = $add$ptr14$i$i131;
    }
    store4($__ptr_$i$i115,$storemerge836);
    $235 = load8($__last,4);
    store8($agg$tmp165,$235);
    ; store8($tmpcast833$byval_copy,load8($agg$tmp164,4),4);
    ; store8($tmpcast48$byval_copy,load8($agg$tmp165,4),4);
    $call166 = (__ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEbT0_S9_T_($tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp)|0);
    $236 = i64_trunc($235);
    $237 = $236;
    if ($call166) {
     if ($call163) {
      label = 156;
      break L4;
     }
     store4($__last,$__i$sroa$0$14);
     store4($__ptr_$i$i$i,$__i$sroa$37$14);
     $$pre950 = load4($__ptr_1$i$i$i);
     $$pre947955 = $232;$$pre952 = $228;$269 = $223;$270 = $$pre950;
     break;
    }
    if ($call163) {
     $incdec$ptr$i106 = ((($223)) + 8|0);
     $238 = $incdec$ptr$i106;
     $239 = load4($229);
     $sub$ptr$sub$i109 = (($238) - ($239))|0;
     $cmp$i110 = ($sub$ptr$sub$i109|0)==(4096);
     if ($cmp$i110) {
      $incdec$ptr3$i111 = ((($228)) + 4|0);
      $240 = $incdec$ptr3$i111;
      $241 = load4($incdec$ptr3$i111);
      $__i$sroa$0$15 = $240;$__i$sroa$37$15 = $241;
     } else {
      $__i$sroa$0$15 = $__i$sroa$0$14;$__i$sroa$37$15 = $238;
     }
     store4($__first,$__i$sroa$0$15);
     store4($__ptr_1$i$i$i,$__i$sroa$37$15);
     $242 = $__i$sroa$0$15;
     $$pre949 = load4($__ptr_$i$i$i);
     $243 = $__i$sroa$37$15;
     $$pre947955 = $242;$$pre952 = $237;$269 = $$pre949;$270 = $243;
    } else {
     $$pre947956 = $232;$$pre953 = $237;
     label = 143;
    }
   } else {
    $$pre947956 = $128;$$pre953 = $84;
    label = 143;
   }
  } while(0);
  do {
   if ((label|0) == 143) {
    label = 0;
    $244 = load4($__ptr_1$i$i$i);
    $lnot$i$i89 = ($223|0)==($244|0);
    if ($lnot$i$i89) {
     $retval$0$i103 = 0;
    } else {
     $245 = $244;
     $sub$ptr$rhs$cast$i93 = $$pre947956;
     $sub$ptr$sub$i94 = (($__i$sroa$0$14) - ($sub$ptr$rhs$cast$i93))|0;
     $mul$i95 = $sub$ptr$sub$i94 << 7;
     $246 = $__i$sroa$0$14;
     $247 = load4($246);
     $sub$ptr$sub5$i96 = (($__i$sroa$37$14) - ($247))|0;
     $sub$ptr$div6$i97 = $sub$ptr$sub5$i96 >> 3;
     $add$i98 = (($sub$ptr$div6$i97) + ($mul$i95))|0;
     $248 = load4($$pre947956);
     $sub$ptr$sub11$i99 = (($245) - ($248))|0;
     $sub$ptr$div12$i100 = $sub$ptr$sub11$i99 >> 3;
     $sub$i101 = (($add$i98) - ($sub$ptr$div12$i100))|0;
     $retval$0$i103 = $sub$i101;
    }
    $249 = load4($__ptr_$i$i$i);
    $lnot$i$i71 = ($249|0)==($223|0);
    if ($lnot$i$i71) {
     $retval$0$i85 = 0;
    } else {
     $250 = $249;
     $sub$ptr$lhs$cast$i74 = $$pre953;
     $sub$ptr$sub$i76 = (($sub$ptr$lhs$cast$i74) - ($__i$sroa$0$14))|0;
     $mul$i77 = $sub$ptr$sub$i76 << 7;
     $251 = load4($$pre953);
     $sub$ptr$sub5$i78 = (($250) - ($251))|0;
     $sub$ptr$div6$i79 = $sub$ptr$sub5$i78 >> 3;
     $add$i80 = (($sub$ptr$div6$i79) + ($mul$i77))|0;
     $252 = $__i$sroa$0$14;
     $253 = load4($252);
     $sub$ptr$sub11$i81 = (($__i$sroa$37$14) - ($253))|0;
     $sub$ptr$div12$i82 = $sub$ptr$sub11$i81 >> 3;
     $sub$i83 = (($add$i80) - ($sub$ptr$div12$i82))|0;
     $retval$0$i85 = $sub$i83;
    }
    $cmp179 = ($retval$0$i103|0)<($retval$0$i85|0);
    if ($cmp179) {
     $254 = load8($__first,4);
     store8($agg$tmp181,$254);
     store4($agg$tmp182,$__i$sroa$0$14);
     store4($agg$tmp182$sroa_raw_idx,$__i$sroa$37$14);
     ; store8($tmpcast833$byval_copy,load8($agg$tmp181,4),4);
     ; store8($tmpcast48$byval_copy,load8($agg$tmp182,4),4);
     __ZNSt3__26__sortIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp);
     $incdec$ptr$i63 = ((($223)) + 8|0);
     $255 = $incdec$ptr$i63;
     $256 = $__i$sroa$0$14;
     $257 = load4($256);
     $sub$ptr$sub$i66 = (($255) - ($257))|0;
     $cmp$i67 = ($sub$ptr$sub$i66|0)==(4096);
     if ($cmp$i67) {
      $258 = $__i$sroa$0$14;
      $incdec$ptr3$i = ((($258)) + 4|0);
      $259 = $incdec$ptr3$i;
      $260 = load4($incdec$ptr3$i);
      $__i$sroa$0$18 = $259;$__i$sroa$37$18 = $260;
     } else {
      $__i$sroa$0$18 = $__i$sroa$0$14;$__i$sroa$37$18 = $255;
     }
     store4($__first,$__i$sroa$0$18);
     store4($__ptr_1$i$i$i,$__i$sroa$37$18);
     $261 = $__i$sroa$0$18;
     $262 = $__i$sroa$37$18;
     $$pre947955 = $261;$$pre952 = $$pre953;$269 = $249;$270 = $262;
     break;
    }
    $__i$sroa$37$0$insert$ext = i64_zext($__i$sroa$37$14>>>0);
    $__i$sroa$37$0$insert$shift = i64_shl($__i$sroa$37$0$insert$ext,i64_const(32,0));
    $__i$sroa$0$0$insert$ext = i64_zext($__i$sroa$0$14>>>0);
    $__i$sroa$0$0$insert$insert = i64_or($__i$sroa$37$0$insert$shift,$__i$sroa$0$0$insert$ext);
    store8($agg$tmp185,$__i$sroa$0$0$insert$insert);
    $263 = $__i$sroa$0$14;
    $264 = $__i$sroa$0$14;
    $265 = load4($264);
    $sub$ptr$sub$i$i = (($__i$sroa$37$14) - ($265))|0;
    $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 3;
    $add$i$i = (($sub$ptr$div$i$i) + 1)|0;
    $cmp2$i$i = ($sub$ptr$sub$i$i|0)>(-8);
    if ($cmp2$i$i) {
     $div8$i$i = $add$i$i >>> 9;
     $add$ptr$i$i = (($263) + ($div8$i$i<<2)|0);
     store4($agg$tmp185,$add$ptr$i$i);
     $266 = load4($add$ptr$i$i);
     $rem9$i$i = $add$i$i & 511;
     $add$ptr6$i$i = (($266) + ($rem9$i$i<<3)|0);
     $storemerge834 = $add$ptr6$i$i;
    } else {
     $sub$i$i = (510 - ($sub$ptr$div$i$i))|0;
     $idx$neg$i$i = (($sub$i$i|0) / -512)&-1;
     $add$ptr10$i$i = (($263) + ($idx$neg$i$i<<2)|0);
     store4($agg$tmp185,$add$ptr10$i$i);
     $267 = load4($add$ptr10$i$i);
     $rem12$i$i = (($sub$i$i|0) % 512)&-1;
     $sub13$i$i = (511 - ($rem12$i$i))|0;
     $add$ptr14$i$i = (($267) + ($sub13$i$i<<3)|0);
     $storemerge834 = $add$ptr14$i$i;
    }
    store4($__ptr_$i$i,$storemerge834);
    $268 = load8($__last,4);
    store8($agg$tmp186,$268);
    ; store8($tmpcast833$byval_copy,load8($agg$tmp185,4),4);
    ; store8($tmpcast48$byval_copy,load8($agg$tmp186,4),4);
    __ZNSt3__26__sortIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp);
    store4($__last,$__i$sroa$0$14);
    store4($__ptr_$i$i$i,$__i$sroa$37$14);
    $$pre947955 = $$pre947956;$$pre952 = $263;$269 = $223;$270 = $244;
   }
  } while(0);
  $lnot$i$i907 = ($269|0)==($270|0);
  if ($lnot$i$i907) {
   label = 156;
   break;
  } else {
   $$in = $270;$$pre = $$pre952;$$pre947 = $$pre947955;$271 = $269;
  }
 }
 if ((label|0) == 5) {
  $12 = load4($8);
  $cmp$i = ($6|0)==($12|0);
  if ($cmp$i) {
   $incdec$ptr$i = ((($8)) + -4|0);
   store4($__last,$incdec$ptr$i);
   $13 = load4($incdec$ptr$i);
   $add$ptr$i = ((($13)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i);
   $14 = $add$ptr$i;
  } else {
   $14 = $6;
  }
  $incdec$ptr6$i = ((($14)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i);
  $15 = loadd($incdec$ptr6$i);
  $16 = loadd($4);
  $cmp$i134 = $15 < $16;
  if (!($cmp$i134)) {
   STACKTOP = sp;return;
  }
  stored($4,$15);
  stored($incdec$ptr6$i,$16);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 9) {
  $17 = load8($__first,4);
  $agg$tmp$sroa$2$0$extract$shift = i64_lshr($17,i64_const(32,0));
  $agg$tmp$sroa$2$0$extract$trunc = i64_trunc($agg$tmp$sroa$2$0$extract$shift);
  $18 = i64_trunc($17);
  $19 = $18;
  $20 = $18;
  $21 = load4($20);
  $sub$ptr$sub$i$i527 = (($agg$tmp$sroa$2$0$extract$trunc) - ($21))|0;
  $sub$ptr$div$i$i528 = $sub$ptr$sub$i$i527 >> 3;
  $add$i$i529 = (($sub$ptr$div$i$i528) + 1)|0;
  $cmp2$i$i530 = ($sub$ptr$sub$i$i527|0)>(-8);
  if ($cmp2$i$i530) {
   $div8$i$i532 = $add$i$i529 >>> 9;
   $add$ptr$i$i533 = (($19) + ($div8$i$i532<<2)|0);
   $22 = load4($add$ptr$i$i533);
   $rem9$i$i534 = $add$i$i529 & 511;
   $add$ptr6$i$i535 = (($22) + ($rem9$i$i534<<3)|0);
   $add$ptr6$i$i535$sink = $add$ptr6$i$i535;
  } else {
   $sub$i$i537 = (510 - ($sub$ptr$div$i$i528))|0;
   $idx$neg$i$i538 = (($sub$i$i537|0) / -512)&-1;
   $add$ptr10$i$i539 = (($19) + ($idx$neg$i$i538<<2)|0);
   $23 = load4($add$ptr10$i$i539);
   $rem12$i$i540 = (($sub$i$i537|0) % 512)&-1;
   $sub13$i$i541 = (511 - ($rem12$i$i540))|0;
   $add$ptr14$i$i542 = (($23) + ($sub13$i$i541<<3)|0);
   $add$ptr6$i$i535$sink = $add$ptr14$i$i542;
  }
  $24 = load4($8);
  $cmp$i518 = ($6|0)==($24|0);
  if ($cmp$i518) {
   $incdec$ptr$i519 = ((($8)) + -4|0);
   store4($__last,$incdec$ptr$i519);
   $25 = load4($incdec$ptr$i519);
   $add$ptr$i520 = ((($25)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i520);
   $26 = $add$ptr$i520;
  } else {
   $26 = $6;
  }
  $incdec$ptr6$i522 = ((($26)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i522);
  $27 = load8($__last,4);
  $agg$tmp10$sroa$2$0$extract$shift = i64_lshr($27,i64_const(32,0));
  $agg$tmp10$sroa$2$0$extract$trunc = i64_trunc($agg$tmp10$sroa$2$0$extract$shift);
  $28 = $agg$tmp$sroa$2$0$extract$trunc;
  $29 = loadd($add$ptr6$i$i535$sink);
  $30 = loadd($28);
  $cmp$i25$i502 = $29 < $30;
  $31 = $agg$tmp10$sroa$2$0$extract$trunc;
  $32 = loadd($31);
  $cmp$i22$i504 = $32 < $29;
  if (!($cmp$i25$i502)) {
   if (!($cmp$i22$i504)) {
    STACKTOP = sp;return;
   }
   stored($add$ptr6$i$i535$sink,$32);
   stored($31,$29);
   $33 = loadd($add$ptr6$i$i535$sink);
   $34 = loadd($28);
   $cmp$i17$i506 = $33 < $34;
   if (!($cmp$i17$i506)) {
    STACKTOP = sp;return;
   }
   stored($28,$33);
   stored($add$ptr6$i$i535$sink,$34);
   STACKTOP = sp;return;
  }
  if ($cmp$i22$i504) {
   stored($28,$32);
   stored($31,$30);
   STACKTOP = sp;return;
  }
  stored($28,$29);
  stored($add$ptr6$i$i535$sink,$30);
  $35 = loadd($31);
  $cmp$i$i511 = $35 < $30;
  if (!($cmp$i$i511)) {
   STACKTOP = sp;return;
  }
  stored($add$ptr6$i$i535$sink,$35);
  stored($31,$30);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 22) {
  $36 = load8($__first,4);
  $agg$tmp14$sroa$0$0$extract$trunc = i64_trunc($36);
  $agg$tmp14$sroa$2$0$extract$shift = i64_lshr($36,i64_const(32,0));
  $agg$tmp14$sroa$2$0$extract$trunc = i64_trunc($agg$tmp14$sroa$2$0$extract$shift);
  $37 = $agg$tmp14$sroa$0$0$extract$trunc;
  $38 = $agg$tmp14$sroa$0$0$extract$trunc;
  $39 = load4($38);
  $sub$ptr$sub$i$i479 = (($agg$tmp14$sroa$2$0$extract$trunc) - ($39))|0;
  $sub$ptr$div$i$i480 = $sub$ptr$sub$i$i479 >> 3;
  $add$i$i481 = (($sub$ptr$div$i$i480) + 1)|0;
  $cmp2$i$i482 = ($sub$ptr$sub$i$i479|0)>(-8);
  if ($cmp2$i$i482) {
   $div8$i$i484 = $add$i$i481 >>> 9;
   $add$ptr$i$i485 = (($37) + ($div8$i$i484<<2)|0);
   $40 = load4($add$ptr$i$i485);
   $rem9$i$i486 = $add$i$i481 & 511;
   $add$ptr6$i$i487 = (($40) + ($rem9$i$i486<<3)|0);
   $add$ptr6$i$i487$sink961 = $add$ptr6$i$i487;
   label = 25;
  } else {
   $sub$i$i489 = (510 - ($sub$ptr$div$i$i480))|0;
   $idx$neg$i$i490 = (($sub$i$i489|0) / -512)&-1;
   $add$ptr10$i$i491 = (($37) + ($idx$neg$i$i490<<2)|0);
   $41 = load4($add$ptr10$i$i491);
   $rem12$i$i492 = (($sub$i$i489|0) % 512)&-1;
   $sub13$i$i493 = (511 - ($rem12$i$i492))|0;
   $add$ptr14$i$i494 = (($41) + ($sub13$i$i493<<3)|0);
   $cmp2$i$i462 = ($sub$ptr$sub$i$i479|0)>(-16);
   if ($cmp2$i$i462) {
    $add$ptr6$i$i487$sink961 = $add$ptr14$i$i494;
    label = 25;
   } else {
    $sub$i$i469 = (509 - ($sub$ptr$div$i$i480))|0;
    $idx$neg$i$i470 = (($sub$i$i469|0) / -512)&-1;
    $add$ptr10$i$i471 = (($37) + ($idx$neg$i$i470<<2)|0);
    $43 = load4($add$ptr10$i$i471);
    $rem12$i$i472 = (($sub$i$i469|0) % 512)&-1;
    $sub13$i$i473 = (511 - ($rem12$i$i472))|0;
    $add$ptr14$i$i474 = (($43) + ($sub13$i$i473<<3)|0);
    $add$ptr6$i$i467$sink = $add$ptr14$i$i474;$add$ptr6$i$i487$sink960 = $add$ptr14$i$i494;
   }
  }
  if ((label|0) == 25) {
   $add$i$i461962 = (($sub$ptr$div$i$i480) + 2)|0;
   $div8$i$i464 = $add$i$i461962 >>> 9;
   $add$ptr$i$i465 = (($37) + ($div8$i$i464<<2)|0);
   $42 = load4($add$ptr$i$i465);
   $rem9$i$i466 = $add$i$i461962 & 511;
   $add$ptr6$i$i467 = (($42) + ($rem9$i$i466<<3)|0);
   $add$ptr6$i$i467$sink = $add$ptr6$i$i467;$add$ptr6$i$i487$sink960 = $add$ptr6$i$i487$sink961;
  }
  $44 = load4($8);
  $cmp$i450 = ($6|0)==($44|0);
  if ($cmp$i450) {
   $incdec$ptr$i451 = ((($8)) + -4|0);
   store4($__last,$incdec$ptr$i451);
   $45 = load4($incdec$ptr$i451);
   $add$ptr$i452 = ((($45)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i452);
   $46 = $add$ptr$i452;
  } else {
   $46 = $6;
  }
  $incdec$ptr6$i454 = ((($46)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i454);
  $47 = load8($__last,4);
  $agg$tmp17$sroa$2$0$extract$shift = i64_lshr($47,i64_const(32,0));
  $agg$tmp17$sroa$2$0$extract$trunc = i64_trunc($agg$tmp17$sroa$2$0$extract$shift);
  $48 = $agg$tmp14$sroa$2$0$extract$trunc;
  $49 = loadd($add$ptr6$i$i487$sink960);
  $50 = loadd($48);
  $cmp$i25$i$i = $49 < $50;
  $51 = loadd($add$ptr6$i$i467$sink);
  $cmp$i22$i$i = $51 < $49;
  do {
   if ($cmp$i25$i$i) {
    if ($cmp$i22$i$i) {
     stored($48,$51);
     stored($add$ptr6$i$i467$sink,$50);
     $57 = $50;
     break;
    }
    stored($48,$49);
    stored($add$ptr6$i$i487$sink960,$50);
    $54 = loadd($add$ptr6$i$i467$sink);
    $cmp$i$i$i = $54 < $50;
    if ($cmp$i$i$i) {
     stored($add$ptr6$i$i487$sink960,$54);
     stored($add$ptr6$i$i467$sink,$50);
     $57 = $50;
    } else {
     $57 = $54;
    }
   } else {
    if ($cmp$i22$i$i) {
     stored($add$ptr6$i$i487$sink960,$51);
     stored($add$ptr6$i$i467$sink,$49);
     $52 = loadd($add$ptr6$i$i487$sink960);
     $53 = loadd($48);
     $cmp$i17$i$i = $52 < $53;
     if ($cmp$i17$i$i) {
      stored($48,$52);
      stored($add$ptr6$i$i487$sink960,$53);
      $$pre948 = loadd($add$ptr6$i$i467$sink);
      $57 = $$pre948;
     } else {
      $57 = $49;
     }
    } else {
     $57 = $51;
    }
   }
  } while(0);
  $55 = $agg$tmp17$sroa$2$0$extract$trunc;
  $56 = loadd($55);
  $cmp$i23$i = $56 < $57;
  if (!($cmp$i23$i)) {
   STACKTOP = sp;return;
  }
  stored($add$ptr6$i$i467$sink,$56);
  stored($55,$57);
  $58 = loadd($add$ptr6$i$i467$sink);
  $59 = loadd($add$ptr6$i$i487$sink960);
  $cmp$i18$i = $58 < $59;
  if (!($cmp$i18$i)) {
   STACKTOP = sp;return;
  }
  stored($add$ptr6$i$i487$sink960,$58);
  stored($add$ptr6$i$i467$sink,$59);
  $60 = loadd($add$ptr6$i$i487$sink960);
  $61 = loadd($48);
  $cmp$i$i446 = $60 < $61;
  if (!($cmp$i$i446)) {
   STACKTOP = sp;return;
  }
  stored($48,$60);
  stored($add$ptr6$i$i487$sink960,$61);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 41) {
  $62 = load8($__first,4);
  store8($agg$tmp21,$62);
  store8($agg$tmp22,$62);
  $63 = i64_trunc($62);
  $64 = $63;
  $65 = i64_lshr($62,i64_const(32,0));
  $66 = i64_trunc($65);
  $__ptr_$i$i419 = ((($agg$tmp22)) + 4|0);
  $67 = $63;
  $68 = load4($67);
  $sub$ptr$sub$i$i421 = (($66) - ($68))|0;
  $sub$ptr$div$i$i422 = $sub$ptr$sub$i$i421 >> 3;
  $add$i$i423 = (($sub$ptr$div$i$i422) + 1)|0;
  $cmp2$i$i424 = ($sub$ptr$sub$i$i421|0)>(-8);
  if ($cmp2$i$i424) {
   $div8$i$i426 = $add$i$i423 >>> 9;
   $add$ptr$i$i427 = (($64) + ($div8$i$i426<<2)|0);
   store4($agg$tmp22,$add$ptr$i$i427);
   $69 = load4($add$ptr$i$i427);
   $rem9$i$i428 = $add$i$i423 & 511;
   $add$ptr6$i$i429 = (($69) + ($rem9$i$i428<<3)|0);
   $storemerge = $add$ptr6$i$i429;
  } else {
   $sub$i$i431 = (510 - ($sub$ptr$div$i$i422))|0;
   $idx$neg$i$i432 = (($sub$i$i431|0) / -512)&-1;
   $add$ptr10$i$i433 = (($64) + ($idx$neg$i$i432<<2)|0);
   store4($agg$tmp22,$add$ptr10$i$i433);
   $70 = load4($add$ptr10$i$i433);
   $rem12$i$i434 = (($sub$i$i431|0) % 512)&-1;
   $sub13$i$i435 = (511 - ($rem12$i$i434))|0;
   $add$ptr14$i$i436 = (($70) + ($sub13$i$i435<<3)|0);
   $storemerge = $add$ptr14$i$i436;
  }
  store4($__ptr_$i$i419,$storemerge);
  store8($agg$tmp23,$62);
  $__ptr_$i$i399 = ((($agg$tmp23)) + 4|0);
  $71 = load4($67);
  $sub$ptr$sub$i$i401 = (($66) - ($71))|0;
  $sub$ptr$div$i$i402 = $sub$ptr$sub$i$i401 >> 3;
  $add$i$i403 = (($sub$ptr$div$i$i402) + 2)|0;
  $cmp2$i$i404 = ($sub$ptr$sub$i$i401|0)>(-16);
  if ($cmp2$i$i404) {
   $div8$i$i406 = $add$i$i403 >>> 9;
   $add$ptr$i$i407 = (($64) + ($div8$i$i406<<2)|0);
   store4($agg$tmp23,$add$ptr$i$i407);
   $72 = load4($add$ptr$i$i407);
   $rem9$i$i408 = $add$i$i403 & 511;
   $add$ptr6$i$i409 = (($72) + ($rem9$i$i408<<3)|0);
   $storemerge830 = $add$ptr6$i$i409;
  } else {
   $sub$i$i411 = (509 - ($sub$ptr$div$i$i402))|0;
   $idx$neg$i$i412 = (($sub$i$i411|0) / -512)&-1;
   $add$ptr10$i$i413 = (($64) + ($idx$neg$i$i412<<2)|0);
   store4($agg$tmp23,$add$ptr10$i$i413);
   $73 = load4($add$ptr10$i$i413);
   $rem12$i$i414 = (($sub$i$i411|0) % 512)&-1;
   $sub13$i$i415 = (511 - ($rem12$i$i414))|0;
   $add$ptr14$i$i416 = (($73) + ($sub13$i$i415<<3)|0);
   $storemerge830 = $add$ptr14$i$i416;
  }
  store4($__ptr_$i$i399,$storemerge830);
  store8($agg$tmp24,$62);
  $__ptr_$i$i379 = ((($agg$tmp24)) + 4|0);
  $74 = load4($67);
  $sub$ptr$sub$i$i381 = (($66) - ($74))|0;
  $sub$ptr$div$i$i382 = $sub$ptr$sub$i$i381 >> 3;
  $add$i$i383 = (($sub$ptr$div$i$i382) + 3)|0;
  $cmp2$i$i384 = ($sub$ptr$sub$i$i381|0)>(-24);
  if ($cmp2$i$i384) {
   $div8$i$i386 = $add$i$i383 >>> 9;
   $add$ptr$i$i387 = (($64) + ($div8$i$i386<<2)|0);
   store4($agg$tmp24,$add$ptr$i$i387);
   $75 = load4($add$ptr$i$i387);
   $rem9$i$i388 = $add$i$i383 & 511;
   $add$ptr6$i$i389 = (($75) + ($rem9$i$i388<<3)|0);
   $storemerge832 = $add$ptr6$i$i389;
  } else {
   $sub$i$i391 = (508 - ($sub$ptr$div$i$i382))|0;
   $idx$neg$i$i392 = (($sub$i$i391|0) / -512)&-1;
   $add$ptr10$i$i393 = (($64) + ($idx$neg$i$i392<<2)|0);
   store4($agg$tmp24,$add$ptr10$i$i393);
   $76 = load4($add$ptr10$i$i393);
   $rem12$i$i394 = (($sub$i$i391|0) % 512)&-1;
   $sub13$i$i395 = (511 - ($rem12$i$i394))|0;
   $add$ptr14$i$i396 = (($76) + ($sub13$i$i395<<3)|0);
   $storemerge832 = $add$ptr14$i$i396;
  }
  store4($__ptr_$i$i379,$storemerge832);
  $77 = load4($8);
  $cmp$i372 = ($6|0)==($77|0);
  if ($cmp$i372) {
   $incdec$ptr$i373 = ((($8)) + -4|0);
   store4($__last,$incdec$ptr$i373);
   $78 = load4($incdec$ptr$i373);
   $add$ptr$i374 = ((($78)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i374);
   $79 = $add$ptr$i374;
  } else {
   $79 = $6;
  }
  $incdec$ptr6$i376 = ((($79)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i376);
  $80 = load8($__last,4);
  store8($agg$tmp25,$80);
  ; store8($tmpcast54$byval_copy,load8($agg$tmp21,4),4);
  ; store8($tmpcast837$byval_copy,load8($agg$tmp22,4),4);
  ; store8($tmpcast55$byval_copy,load8($agg$tmp23,4),4);
  ; store8($tmpcast833$byval_copy,load8($agg$tmp24,4),4);
  ; store8($tmpcast48$byval_copy,load8($agg$tmp25,4),4);
  (__ZNSt3__27__sort5IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEjT0_S9_S9_S9_S9_T_($tmpcast54$byval_copy,$tmpcast837$byval_copy,$tmpcast55$byval_copy,$tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp)|0);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 54) {
  $81 = load8($__first,4);
  store8($agg$tmp29,$81);
  $82 = load8($__last,4);
  store8($agg$tmp30,$82);
  ; store8($tmpcast833$byval_copy,load8($agg$tmp29,4),4);
  ; store8($tmpcast48$byval_copy,load8($agg$tmp30,4),4);
  __ZNSt3__218__insertion_sort_3IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($tmpcast833$byval_copy,$tmpcast48$byval_copy,$__comp);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 156) {
  STACKTOP = sp;return;
 }
}
function __ZNSt3__27__sort5IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEjT0_S9_S9_S9_S9_T_($__x1,$__x2,$__x3,$__x4,$__x5,$__c) {
 $__x1 = $__x1|0;
 $__x2 = $__x2|0;
 $__x3 = $__x3|0;
 $__x4 = $__x4|0;
 $__x5 = $__x5|0;
 $__c = $__c|0;
 var $$pre = 0.0, $0 = i64(), $1 = i64(), $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = i64(), $20 = 0, $21 = 0, $22 = 0.0, $23 = 0.0, $24 = 0, $25 = 0.0;
 var $26 = 0.0, $27 = 0, $28 = 0.0, $29 = 0.0, $3 = i64(), $30 = 0, $31 = 0.0, $32 = 0.0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0, $9 = 0.0, $__ptr_$i18 = 0, $__ptr_$i23 = 0, $__ptr_$i28 = 0, $__ptr_$i33 = 0, $__ptr_$i34 = 0, $__r$0 = 0;
 var $__r$0$i = 0, $agg$tmp$sroa$2$0$extract$shift = i64(), $agg$tmp$sroa$2$0$extract$trunc = 0, $agg$tmp1$sroa$2$0$extract$shift = i64(), $agg$tmp1$sroa$2$0$extract$trunc = 0, $agg$tmp2$sroa$2$0$extract$shift = i64(), $agg$tmp2$sroa$2$0$extract$trunc = 0, $agg$tmp3$sroa$2$0$extract$shift = i64(), $agg$tmp3$sroa$2$0$extract$trunc = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i17$i$i = 0, $cmp$i18$i = 0, $cmp$i22 = 0, $cmp$i22$i$i = 0, $cmp$i23$i = 0, $cmp$i25$i$i = 0, $cmp$i27 = 0, $cmp$i32 = 0;
 var $inc = 0, $inc$i = 0, $inc14$i = 0, $inc15 = 0, $inc21$i = 0, $inc22 = 0, $inc29 = 0, $retval$0$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load8($__x1,4);
 $agg$tmp$sroa$2$0$extract$shift = i64_lshr($0,i64_const(32,0));
 $agg$tmp$sroa$2$0$extract$trunc = i64_trunc($agg$tmp$sroa$2$0$extract$shift);
 $1 = load8($__x2,4);
 $agg$tmp1$sroa$2$0$extract$shift = i64_lshr($1,i64_const(32,0));
 $agg$tmp1$sroa$2$0$extract$trunc = i64_trunc($agg$tmp1$sroa$2$0$extract$shift);
 $2 = load8($__x3,4);
 $agg$tmp2$sroa$2$0$extract$shift = i64_lshr($2,i64_const(32,0));
 $agg$tmp2$sroa$2$0$extract$trunc = i64_trunc($agg$tmp2$sroa$2$0$extract$shift);
 $3 = load8($__x4,4);
 $agg$tmp3$sroa$2$0$extract$shift = i64_lshr($3,i64_const(32,0));
 $agg$tmp3$sroa$2$0$extract$trunc = i64_trunc($agg$tmp3$sroa$2$0$extract$shift);
 $4 = $agg$tmp1$sroa$2$0$extract$trunc;
 $5 = $agg$tmp$sroa$2$0$extract$trunc;
 $6 = loadd($4);
 $7 = loadd($5);
 $cmp$i25$i$i = $6 < $7;
 $8 = $agg$tmp2$sroa$2$0$extract$trunc;
 $9 = loadd($8);
 $cmp$i22$i$i = $9 < $6;
 do {
  if ($cmp$i25$i$i) {
   if ($cmp$i22$i$i) {
    stored($5,$9);
    stored($8,$7);
    $15 = $7;$retval$0$i$i = 1;
    break;
   }
   stored($5,$6);
   stored($4,$7);
   $12 = loadd($8);
   $cmp$i$i$i = $12 < $7;
   if ($cmp$i$i$i) {
    stored($4,$12);
    stored($8,$7);
    $15 = $7;$retval$0$i$i = 2;
   } else {
    $15 = $12;$retval$0$i$i = 1;
   }
  } else {
   if ($cmp$i22$i$i) {
    stored($4,$9);
    stored($8,$6);
    $10 = loadd($4);
    $11 = loadd($5);
    $cmp$i17$i$i = $10 < $11;
    if ($cmp$i17$i$i) {
     stored($5,$10);
     stored($4,$11);
     $$pre = loadd($8);
     $15 = $$pre;$retval$0$i$i = 2;
    } else {
     $15 = $6;$retval$0$i$i = 1;
    }
   } else {
    $15 = $9;$retval$0$i$i = 0;
   }
  }
 } while(0);
 $13 = $agg$tmp3$sroa$2$0$extract$trunc;
 $14 = loadd($13);
 $cmp$i23$i = $14 < $15;
 if ($cmp$i23$i) {
  stored($8,$14);
  stored($13,$15);
  $inc$i = (($retval$0$i$i) + 1)|0;
  $16 = loadd($8);
  $17 = loadd($4);
  $cmp$i18$i = $16 < $17;
  if ($cmp$i18$i) {
   stored($4,$16);
   stored($8,$17);
   $inc14$i = (($retval$0$i$i) + 2)|0;
   $18 = loadd($4);
   $19 = loadd($5);
   $cmp$i$i = $18 < $19;
   if ($cmp$i$i) {
    $inc21$i = (($retval$0$i$i) + 3)|0;
    stored($5,$18);
    stored($4,$19);
    $__r$0$i = $inc21$i;
   } else {
    $__r$0$i = $inc14$i;
   }
  } else {
   $__r$0$i = $inc$i;
  }
 } else {
  $__r$0$i = $retval$0$i$i;
 }
 $__ptr_$i34 = ((($__x5)) + 4|0);
 $20 = load4($__ptr_$i34);
 $__ptr_$i33 = ((($__x4)) + 4|0);
 $21 = load4($__ptr_$i33);
 $22 = loadd($20);
 $23 = loadd($21);
 $cmp$i32 = $22 < $23;
 if (!($cmp$i32)) {
  $__r$0 = $__r$0$i;
  return ($__r$0|0);
 }
 stored($21,$22);
 stored($20,$23);
 $inc = (($__r$0$i) + 1)|0;
 $__ptr_$i28 = ((($__x3)) + 4|0);
 $24 = load4($__ptr_$i28);
 $25 = loadd($21);
 $26 = loadd($24);
 $cmp$i27 = $25 < $26;
 if (!($cmp$i27)) {
  $__r$0 = $inc;
  return ($__r$0|0);
 }
 stored($24,$25);
 stored($21,$26);
 $inc15 = (($__r$0$i) + 2)|0;
 $__ptr_$i23 = ((($__x2)) + 4|0);
 $27 = load4($__ptr_$i23);
 $28 = loadd($24);
 $29 = loadd($27);
 $cmp$i22 = $28 < $29;
 if (!($cmp$i22)) {
  $__r$0 = $inc15;
  return ($__r$0|0);
 }
 stored($27,$28);
 stored($24,$29);
 $inc22 = (($__r$0$i) + 3)|0;
 $__ptr_$i18 = ((($__x1)) + 4|0);
 $30 = load4($__ptr_$i18);
 $31 = loadd($27);
 $32 = loadd($30);
 $cmp$i = $31 < $32;
 if (!($cmp$i)) {
  $__r$0 = $inc22;
  return ($__r$0|0);
 }
 $inc29 = (($__r$0$i) + 4)|0;
 stored($30,$31);
 stored($27,$32);
 $__r$0 = $inc29;
 return ($__r$0|0);
}
function __ZNSt3__218__insertion_sort_3IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEvT0_S9_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $$lcssa = 0, $$pre = 0.0, $$sroa_idx124 = 0, $0 = i64(), $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0.0, $29 = 0.0, $3 = i64(), $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__i$sroa$0$1$ph$in = 0, $__i$sroa$0$1$ph150 = 0, $__i$sroa$0$1$ph150$in = 0, $__i$sroa$9$1 = 0, $__i$sroa$9$1$ph149 = 0, $__j$sroa$0$0 = 0, $__j$sroa$0$0$in158 = 0, $__j$sroa$0$0$in159 = 0, $__j$sroa$0$0153 = 0, $__j$sroa$0$0160 = 0, $__j$sroa$0$0161 = 0;
 var $__j$sroa$0$1 = 0, $__j$sroa$0$1$ph = 0, $__j$sroa$12$1 = 0, $__j$sroa$12$1$ph = 0, $__j$sroa$12$1$phi = 0, $__k$sroa$0$0166 = 0, $__k$sroa$0$1 = 0, $__k$sroa$6$0165 = 0, $__ptr_1$i$i23 = 0, $add$i$i = 0, $add$i$i29 = 0, $add$i$i53 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i32 = 0, $add$ptr$i$i56 = 0, $add$ptr10$i$i = 0, $add$ptr10$i$i38 = 0, $add$ptr10$i$i62 = 0, $add$ptr14$i$i = 0;
 var $add$ptr14$i$i41 = 0, $add$ptr14$i$i65 = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$sink156 = 0, $add$ptr6$i$i$sink157 = 0, $add$ptr6$i$i34 = 0, $add$ptr6$i$i34$sink = 0, $add$ptr6$i$i58 = 0, $add$ptr6$i$i58$sink = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i12 = 0, $cmp$i17$i = 0, $cmp$i19 = 0, $cmp$i22$i = 0, $cmp$i25$i = 0, $cmp$i8 = 0, $cmp2$i$i = 0, $cmp2$i$i30 = 0, $cmp2$i$i54 = 0;
 var $div8$i$i = 0, $div8$i$i31 = 0, $div8$i$i55 = 0, $idx$neg$i$i = 0, $idx$neg$i$i37 = 0, $idx$neg$i$i61 = 0, $incdec$ptr$i = 0, $incdec$ptr$i13 = 0, $incdec$ptr3$i = 0, $incdec$ptr6$i = 0, $lnot$i = 0, $lnot$i164 = 0, $lnot$i24 = 0, $rem12$i$i = 0, $rem12$i$i39 = 0, $rem12$i$i63 = 0, $rem9$i$i = 0, $rem9$i$i33 = 0, $rem9$i$i57 = 0, $sub$i$i = 0;
 var $sub$i$i36 = 0, $sub$i$i60 = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i28 = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i27 = 0, $sub13$i$i = 0, $sub13$i$i40 = 0, $sub13$i$i64 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$sroa_idx124 = ((($__first)) + 4|0);
 $0 = load8($__first,4);
 $1 = i64_trunc($0);
 $2 = $1;
 $3 = i64_lshr($0,i64_const(32,0));
 $4 = i64_trunc($3);
 $5 = $1;
 $6 = load4($5);
 $sub$ptr$sub$i$i = (($4) - ($6))|0;
 $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 3;
 $add$i$i = (($sub$ptr$div$i$i) + 2)|0;
 $cmp2$i$i = ($sub$ptr$sub$i$i|0)>(-16);
 if ($cmp2$i$i) {
  $div8$i$i = $add$i$i >>> 9;
  $add$ptr$i$i = (($2) + ($div8$i$i<<2)|0);
  $9 = load4($add$ptr$i$i);
  $rem9$i$i = $add$i$i & 511;
  $add$ptr6$i$i = (($9) + ($rem9$i$i<<3)|0);
  $__j$sroa$0$0 = $add$ptr$i$i;
  $10 = $add$ptr6$i$i;
  $add$i$i53 = (($sub$ptr$div$i$i) + 1)|0;
  $cmp2$i$i54 = ($sub$ptr$sub$i$i|0)>(-8);
  if ($cmp2$i$i54) {
   $div8$i$i55 = $add$i$i53 >>> 9;
   $add$ptr$i$i56 = (($2) + ($div8$i$i55<<2)|0);
   $11 = load4($add$ptr$i$i56);
   $rem9$i$i57 = $add$i$i53 & 511;
   $add$ptr6$i$i58 = (($11) + ($rem9$i$i57<<3)|0);
   $21 = $10;$__j$sroa$0$0$in158 = $add$ptr$i$i;$__j$sroa$0$0160 = $__j$sroa$0$0;$add$ptr6$i$i$sink156 = $add$ptr6$i$i;$add$ptr6$i$i58$sink = $add$ptr6$i$i58;
  } else {
   $45 = $10;$__j$sroa$0$0$in159 = $add$ptr$i$i;$__j$sroa$0$0161 = $__j$sroa$0$0;$add$ptr6$i$i$sink157 = $add$ptr6$i$i;
   label = 5;
  }
 } else {
  $sub$i$i = (509 - ($sub$ptr$div$i$i))|0;
  $idx$neg$i$i = (($sub$i$i|0) / -512)&-1;
  $add$ptr10$i$i = (($2) + ($idx$neg$i$i<<2)|0);
  $7 = load4($add$ptr10$i$i);
  $rem12$i$i = (($sub$i$i|0) % 512)&-1;
  $sub13$i$i = (511 - ($rem12$i$i))|0;
  $add$ptr14$i$i = (($7) + ($sub13$i$i<<3)|0);
  $__j$sroa$0$0153 = $add$ptr10$i$i;
  $8 = $add$ptr14$i$i;
  $45 = $8;$__j$sroa$0$0$in159 = $add$ptr10$i$i;$__j$sroa$0$0161 = $__j$sroa$0$0153;$add$ptr6$i$i$sink157 = $add$ptr14$i$i;
  label = 5;
 }
 if ((label|0) == 5) {
  $sub$i$i60 = (510 - ($sub$ptr$div$i$i))|0;
  $idx$neg$i$i61 = (($sub$i$i60|0) / -512)&-1;
  $add$ptr10$i$i62 = (($2) + ($idx$neg$i$i61<<2)|0);
  $12 = load4($add$ptr10$i$i62);
  $rem12$i$i63 = (($sub$i$i60|0) % 512)&-1;
  $sub13$i$i64 = (511 - ($rem12$i$i63))|0;
  $add$ptr14$i$i65 = (($12) + ($sub13$i$i64<<3)|0);
  $21 = $45;$__j$sroa$0$0$in158 = $__j$sroa$0$0$in159;$__j$sroa$0$0160 = $__j$sroa$0$0161;$add$ptr6$i$i$sink156 = $add$ptr6$i$i$sink157;$add$ptr6$i$i58$sink = $add$ptr14$i$i65;
 }
 $13 = $4;
 $14 = loadd($add$ptr6$i$i58$sink);
 $15 = loadd($13);
 $cmp$i25$i = $14 < $15;
 $16 = loadd($add$ptr6$i$i$sink156);
 $cmp$i22$i = $16 < $14;
 do {
  if ($cmp$i25$i) {
   if ($cmp$i22$i) {
    stored($13,$16);
    stored($add$ptr6$i$i$sink156,$15);
    break;
   }
   stored($13,$14);
   stored($add$ptr6$i$i58$sink,$15);
   $19 = loadd($add$ptr6$i$i$sink156);
   $cmp$i$i = $19 < $15;
   if ($cmp$i$i) {
    stored($add$ptr6$i$i58$sink,$19);
    stored($add$ptr6$i$i$sink156,$15);
   }
  } else {
   if ($cmp$i22$i) {
    stored($add$ptr6$i$i58$sink,$16);
    stored($add$ptr6$i$i$sink156,$14);
    $17 = loadd($add$ptr6$i$i58$sink);
    $18 = loadd($13);
    $cmp$i17$i = $17 < $18;
    if ($cmp$i17$i) {
     stored($13,$17);
     stored($add$ptr6$i$i58$sink,$18);
    }
   }
  }
 } while(0);
 $20 = load4($__j$sroa$0$0$in158);
 $sub$ptr$sub$i$i27 = (($21) - ($20))|0;
 $sub$ptr$div$i$i28 = $sub$ptr$sub$i$i27 >> 3;
 $add$i$i29 = (($sub$ptr$div$i$i28) + 1)|0;
 $cmp2$i$i30 = ($sub$ptr$sub$i$i27|0)>(-8);
 if ($cmp2$i$i30) {
  $div8$i$i31 = $add$i$i29 >>> 9;
  $add$ptr$i$i32 = (($__j$sroa$0$0$in158) + ($div8$i$i31<<2)|0);
  $22 = load4($add$ptr$i$i32);
  $rem9$i$i33 = $add$i$i29 & 511;
  $add$ptr6$i$i34 = (($22) + ($rem9$i$i33<<3)|0);
  $__i$sroa$0$1$ph$in = $add$ptr$i$i32;$add$ptr6$i$i34$sink = $add$ptr6$i$i34;
 } else {
  $sub$i$i36 = (510 - ($sub$ptr$div$i$i28))|0;
  $idx$neg$i$i37 = (($sub$i$i36|0) / -512)&-1;
  $add$ptr10$i$i38 = (($__j$sroa$0$0$in158) + ($idx$neg$i$i37<<2)|0);
  $23 = load4($add$ptr10$i$i38);
  $rem12$i$i39 = (($sub$i$i36|0) % 512)&-1;
  $sub13$i$i40 = (511 - ($rem12$i$i39))|0;
  $add$ptr14$i$i41 = (($23) + ($sub13$i$i40<<3)|0);
  $__i$sroa$0$1$ph$in = $add$ptr10$i$i38;$add$ptr6$i$i34$sink = $add$ptr14$i$i41;
 }
 $24 = $add$ptr6$i$i34$sink;
 $__ptr_1$i$i23 = ((($__last)) + 4|0);
 $25 = load4($__ptr_1$i$i23);
 $__i$sroa$0$1$ph150$in = $__i$sroa$0$1$ph$in;$__i$sroa$9$1$ph149 = $24;$__j$sroa$0$1$ph = $__j$sroa$0$0160;$__j$sroa$12$1$ph = $21;
 L22: while(1) {
  $__i$sroa$0$1$ph150 = $__i$sroa$0$1$ph150$in;
  $__i$sroa$9$1 = $__i$sroa$9$1$ph149;$__j$sroa$0$1 = $__j$sroa$0$1$ph;$__j$sroa$12$1 = $__j$sroa$12$1$ph;
  while(1) {
   $26 = $__i$sroa$9$1;
   $lnot$i24 = ($26|0)==($25|0);
   if ($lnot$i24) {
    break L22;
   }
   $27 = $__j$sroa$12$1;
   $28 = loadd($26);
   $29 = loadd($27);
   $cmp$i19 = $28 < $29;
   if ($cmp$i19) {
    $30 = load4($$sroa_idx124);
    $31 = $__j$sroa$12$1;
    $32 = $__i$sroa$9$1;
    stored($32,$29);
    $lnot$i164 = ($31|0)==($30|0);
    L29: do {
     if ($lnot$i164) {
      $$lcssa = $30;
     } else {
      $35 = $31;$__k$sroa$0$0166 = $__j$sroa$0$1;$__k$sroa$6$0165 = $__j$sroa$12$1;
      while(1) {
       $33 = $__k$sroa$0$0166;
       $34 = load4($33);
       $cmp$i12 = ($35|0)==($34|0);
       if ($cmp$i12) {
        $incdec$ptr$i13 = ((($33)) + -4|0);
        $36 = $incdec$ptr$i13;
        $37 = load4($incdec$ptr$i13);
        $add$ptr$i = ((($37)) + 4096|0);
        $38 = $add$ptr$i;$__k$sroa$0$1 = $36;
       } else {
        $38 = $35;$__k$sroa$0$1 = $__k$sroa$0$0166;
       }
       $incdec$ptr6$i = ((($38)) + -8|0);
       $39 = loadd($incdec$ptr6$i);
       $cmp$i8 = $28 < $39;
       if (!($cmp$i8)) {
        $$lcssa = $35;
        break L29;
       }
       $40 = $incdec$ptr6$i;
       $$pre = loadd($incdec$ptr6$i);
       $41 = $__k$sroa$6$0165;
       stored($41,$$pre);
       $lnot$i = ($incdec$ptr6$i|0)==($30|0);
       if ($lnot$i) {
        $$lcssa = $30;
        break;
       } else {
        $35 = $incdec$ptr6$i;$__k$sroa$0$0166 = $__k$sroa$0$1;$__k$sroa$6$0165 = $40;
       }
      }
     }
    } while(0);
    stored($$lcssa,$28);
   }
   $incdec$ptr$i = ((($26)) + 8|0);
   $42 = $incdec$ptr$i;
   $43 = load4($__i$sroa$0$1$ph150$in);
   $sub$ptr$sub$i = (($42) - ($43))|0;
   $cmp$i = ($sub$ptr$sub$i|0)==(4096);
   if ($cmp$i) {
    break;
   } else {
    $__j$sroa$12$1$phi = $__i$sroa$9$1;$__i$sroa$9$1 = $42;$__j$sroa$0$1 = $__i$sroa$0$1$ph150;$__j$sroa$12$1 = $__j$sroa$12$1$phi;
   }
  }
  $incdec$ptr3$i = ((($__i$sroa$0$1$ph150$in)) + 4|0);
  $44 = load4($incdec$ptr3$i);
  $__i$sroa$0$1$ph150$in = $incdec$ptr3$i;$__i$sroa$9$1$ph149 = $44;$__j$sroa$0$1$ph = $__i$sroa$0$1$ph150;$__j$sroa$12$1$ph = $__i$sroa$9$1;
 }
 return;
}
function __ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEbT0_S9_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $$lcssa = 0, $$pre = 0.0, $$pre436 = 0.0, $$retval$3 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0.0, $103 = 0.0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0.0, $110 = 0, $111 = 0;
 var $112 = 0.0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0.0, $120 = 0, $121 = 0, $122 = 0, $13 = i64(), $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = i64(), $23 = 0, $24 = 0.0, $25 = 0.0, $26 = 0, $27 = 0.0, $28 = 0.0, $29 = 0.0, $3 = 0, $30 = 0.0, $31 = i64(), $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = i64(), $42 = 0, $43 = 0.0, $44 = 0.0, $45 = 0.0, $46 = 0.0, $47 = 0.0, $48 = 0.0, $49 = 0, $5 = 0, $50 = 0.0, $51 = 0.0, $52 = 0.0, $53 = 0.0, $54 = 0.0, $55 = 0.0, $56 = i64();
 var $57 = 0, $58 = 0, $59 = i64(), $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = i64();
 var $75 = i64(), $76 = 0, $77 = 0, $78 = i64(), $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0.0, $9 = 0, $90 = 0.0, $91 = 0.0, $92 = 0.0;
 var $93 = 0.0, $94 = 0.0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $__count$0 = 0, $__count$0$ph = 0, $__count$1 = 0, $__i$sroa$0$1$ph$in = 0, $__i$sroa$0$1$ph423 = 0, $__i$sroa$0$1$ph423$in = 0, $__i$sroa$11$1 = 0, $__i$sroa$11$1$ph422 = 0, $__i$sroa$11$2 = 0, $__j$sroa$0$0 = 0, $__j$sroa$0$0$in447 = 0, $__j$sroa$0$0$in448 = 0, $__j$sroa$0$0442 = 0;
 var $__j$sroa$0$0449 = 0, $__j$sroa$0$0450 = 0, $__j$sroa$0$1 = 0, $__j$sroa$0$1$ph = 0, $__j$sroa$12$1 = 0, $__j$sroa$12$1$ph = 0, $__j$sroa$12$1$phi = 0, $__k$sroa$0$0469 = 0, $__k$sroa$0$1 = 0, $__k$sroa$6$0468 = 0, $__ptr_$i$i$i = 0, $__ptr_$i$i116 = 0, $__ptr_$i$i135 = 0, $__ptr_$i$i154 = 0, $__ptr_1$i$i$i = 0, $add$i = 0, $add$i$i = 0, $add$i$i120 = 0, $add$i$i139 = 0, $add$i$i158 = 0;
 var $add$i$i194441 = 0, $add$i$i214 = 0, $add$i$i262 = 0, $add$i$i64 = 0, $add$i$i83 = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i123 = 0, $add$ptr$i$i142 = 0, $add$ptr$i$i161 = 0, $add$ptr$i$i198 = 0, $add$ptr$i$i218 = 0, $add$ptr$i$i266 = 0, $add$ptr$i$i67 = 0, $add$ptr$i$i86 = 0, $add$ptr$i102 = 0, $add$ptr$i111 = 0, $add$ptr$i185 = 0, $add$ptr$i253 = 0, $add$ptr10$i$i = 0;
 var $add$ptr10$i$i129 = 0, $add$ptr10$i$i148 = 0, $add$ptr10$i$i167 = 0, $add$ptr10$i$i204 = 0, $add$ptr10$i$i224 = 0, $add$ptr10$i$i272 = 0, $add$ptr10$i$i73 = 0, $add$ptr10$i$i92 = 0, $add$ptr14$i$i = 0, $add$ptr14$i$i132 = 0, $add$ptr14$i$i151 = 0, $add$ptr14$i$i170 = 0, $add$ptr14$i$i207 = 0, $add$ptr14$i$i227 = 0, $add$ptr14$i$i275 = 0, $add$ptr14$i$i76 = 0, $add$ptr14$i$i95 = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$sink = 0, $add$ptr6$i$i125 = 0;
 var $add$ptr6$i$i144 = 0, $add$ptr6$i$i163 = 0, $add$ptr6$i$i200 = 0, $add$ptr6$i$i200$sink = 0, $add$ptr6$i$i220 = 0, $add$ptr6$i$i220$sink439 = 0, $add$ptr6$i$i220$sink440 = 0, $add$ptr6$i$i268 = 0, $add$ptr6$i$i268$sink = 0, $add$ptr6$i$i69 = 0, $add$ptr6$i$i69$sink = 0, $add$ptr6$i$i88 = 0, $add$ptr6$i$i88$sink445 = 0, $add$ptr6$i$i88$sink446 = 0, $agg$tmp$sroa$2$0$extract$shift = i64(), $agg$tmp$sroa$2$0$extract$trunc = 0, $agg$tmp10$sroa$2$0$extract$shift = i64(), $agg$tmp10$sroa$2$0$extract$trunc = 0, $agg$tmp14$sroa$0$0$extract$trunc = 0, $agg$tmp14$sroa$2$0$extract$shift = i64();
 var $agg$tmp14$sroa$2$0$extract$trunc = 0, $agg$tmp17$sroa$2$0$extract$shift = i64(), $agg$tmp17$sroa$2$0$extract$trunc = 0, $agg$tmp21 = 0, $agg$tmp22 = 0, $agg$tmp23 = 0, $agg$tmp24 = 0, $agg$tmp25 = 0, $cleanup$dest$slot$1 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i179 = 0, $cmp$i$i244 = 0, $cmp$i100 = 0, $cmp$i109 = 0, $cmp$i17$i = 0, $cmp$i17$i$i = 0, $cmp$i17$i239 = 0;
 var $cmp$i18$i = 0, $cmp$i183 = 0, $cmp$i22$i = 0, $cmp$i22$i$i = 0, $cmp$i22$i237 = 0, $cmp$i23$i = 0, $cmp$i25$i = 0, $cmp$i25$i$i = 0, $cmp$i25$i235 = 0, $cmp$i251 = 0, $cmp$i26 = 0, $cmp$i280 = 0, $cmp$i32 = 0, $cmp$i37 = 0, $cmp$i41 = 0, $cmp$i47 = 0, $cmp2$i$i = 0, $cmp2$i$i121 = 0, $cmp2$i$i140 = 0, $cmp2$i$i159 = 0;
 var $cmp2$i$i195 = 0, $cmp2$i$i215 = 0, $cmp2$i$i263 = 0, $cmp2$i$i65 = 0, $cmp2$i$i84 = 0, $div8$i$i = 0, $div8$i$i122 = 0, $div8$i$i141 = 0, $div8$i$i160 = 0, $div8$i$i197 = 0, $div8$i$i217 = 0, $div8$i$i265 = 0, $div8$i$i66 = 0, $div8$i$i85 = 0, $idx$neg$i$i = 0, $idx$neg$i$i128 = 0, $idx$neg$i$i147 = 0, $idx$neg$i$i166 = 0, $idx$neg$i$i203 = 0, $idx$neg$i$i223 = 0;
 var $idx$neg$i$i271 = 0, $idx$neg$i$i72 = 0, $idx$neg$i$i91 = 0, $inc = 0, $incdec$ptr$i = 0, $incdec$ptr$i101 = 0, $incdec$ptr$i110 = 0, $incdec$ptr$i184 = 0, $incdec$ptr$i252 = 0, $incdec$ptr$i28 = 0, $incdec$ptr$i42 = 0, $incdec$ptr3$i = 0, $incdec$ptr3$i33 = 0, $incdec$ptr6$i = 0, $incdec$ptr6$i104 = 0, $incdec$ptr6$i113 = 0, $incdec$ptr6$i187 = 0, $incdec$ptr6$i255 = 0, $lnot$i = 0, $lnot$i$i = 0;
 var $lnot$i467 = 0, $lnot$i52 = 0, $mul$i = 0, $rem12$i$i = 0, $rem12$i$i130 = 0, $rem12$i$i149 = 0, $rem12$i$i168 = 0, $rem12$i$i205 = 0, $rem12$i$i225 = 0, $rem12$i$i273 = 0, $rem12$i$i74 = 0, $rem12$i$i93 = 0, $rem9$i$i = 0, $rem9$i$i124 = 0, $rem9$i$i143 = 0, $rem9$i$i162 = 0, $rem9$i$i199 = 0, $rem9$i$i219 = 0, $rem9$i$i267 = 0, $rem9$i$i68 = 0;
 var $rem9$i$i87 = 0, $retval$3 = 0, $retval$5 = 0, $storemerge = 0, $storemerge419 = 0, $storemerge421 = 0, $sub$i = 0, $sub$i$i = 0, $sub$i$i127 = 0, $sub$i$i146 = 0, $sub$i$i165 = 0, $sub$i$i202 = 0, $sub$i$i222 = 0, $sub$i$i270 = 0, $sub$i$i71 = 0, $sub$i$i90 = 0, $sub$ptr$div$i$i = 0, $sub$ptr$div$i$i119 = 0, $sub$ptr$div$i$i138 = 0, $sub$ptr$div$i$i157 = 0;
 var $sub$ptr$div$i$i213 = 0, $sub$ptr$div$i$i261 = 0, $sub$ptr$div$i$i82 = 0, $sub$ptr$div12$i = 0, $sub$ptr$div6$i = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i$i118 = 0, $sub$ptr$sub$i$i137 = 0, $sub$ptr$sub$i$i156 = 0, $sub$ptr$sub$i$i212 = 0, $sub$ptr$sub$i$i260 = 0, $sub$ptr$sub$i$i81 = 0, $sub$ptr$sub$i23 = 0, $sub$ptr$sub$i31 = 0, $sub$ptr$sub11$i = 0, $sub$ptr$sub5$i = 0, $sub13$i$i = 0;
 var $sub13$i$i131 = 0, $sub13$i$i150 = 0, $sub13$i$i169 = 0, $sub13$i$i206 = 0, $sub13$i$i226 = 0, $sub13$i$i274 = 0, $sub13$i$i75 = 0, $sub13$i$i94 = 0, $tmpcast$byval_copy = 0, $tmpcast11$byval_copy = 0, $tmpcast417$byval_copy = 0, $tmpcast418$byval_copy = 0, $tmpcast420$byval_copy = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $tmpcast11$byval_copy = sp + 72|0;
 $tmpcast420$byval_copy = sp + 64|0;
 $tmpcast418$byval_copy = sp + 56|0;
 $tmpcast417$byval_copy = sp + 48|0;
 $tmpcast$byval_copy = sp + 40|0;
 $agg$tmp21 = sp + 32|0;
 $agg$tmp22 = sp + 24|0;
 $agg$tmp23 = sp + 16|0;
 $agg$tmp24 = sp + 8|0;
 $agg$tmp25 = sp;
 $__ptr_$i$i$i = ((($__last)) + 4|0);
 $0 = load4($__ptr_$i$i$i);
 $__ptr_1$i$i$i = ((($__first)) + 4|0);
 $1 = load4($__ptr_1$i$i$i);
 $lnot$i$i = ($0|0)==($1|0);
 if ($lnot$i$i) {
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
 }
 $2 = $1;
 $3 = $0;
 $4 = load4($__last);
 $5 = load4($__first);
 $sub$ptr$lhs$cast$i = $4;
 $sub$ptr$rhs$cast$i = $5;
 $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
 $mul$i = $sub$ptr$sub$i << 7;
 $6 = load4($4);
 $sub$ptr$sub5$i = (($3) - ($6))|0;
 $sub$ptr$div6$i = $sub$ptr$sub5$i >> 3;
 $add$i = (($sub$ptr$div6$i) + ($mul$i))|0;
 $7 = load4($5);
 $sub$ptr$sub11$i = (($2) - ($7))|0;
 $sub$ptr$div12$i = $sub$ptr$sub11$i >> 3;
 $sub$i = (($add$i) - ($sub$ptr$div12$i))|0;
 $8 = $6;
 switch ($sub$i|0) {
 case 2:  {
  $cmp$i100 = ($0|0)==($8|0);
  if ($cmp$i100) {
   $incdec$ptr$i101 = ((($4)) + -4|0);
   store4($__last,$incdec$ptr$i101);
   $9 = load4($incdec$ptr$i101);
   $add$ptr$i102 = ((($9)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i102);
   $10 = $add$ptr$i102;
  } else {
   $10 = $0;
  }
  $incdec$ptr6$i104 = ((($10)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i104);
  $11 = loadd($incdec$ptr6$i104);
  $12 = loadd($1);
  $cmp$i280 = $11 < $12;
  if (!($cmp$i280)) {
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($1,$11);
  stored($incdec$ptr6$i104,$12);
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
  break;
 }
 case 3:  {
  $13 = load8($__first,4);
  $agg$tmp$sroa$2$0$extract$shift = i64_lshr($13,i64_const(32,0));
  $agg$tmp$sroa$2$0$extract$trunc = i64_trunc($agg$tmp$sroa$2$0$extract$shift);
  $14 = i64_trunc($13);
  $15 = $14;
  $16 = $14;
  $17 = load4($16);
  $sub$ptr$sub$i$i260 = (($agg$tmp$sroa$2$0$extract$trunc) - ($17))|0;
  $sub$ptr$div$i$i261 = $sub$ptr$sub$i$i260 >> 3;
  $add$i$i262 = (($sub$ptr$div$i$i261) + 1)|0;
  $cmp2$i$i263 = ($sub$ptr$sub$i$i260|0)>(-8);
  if ($cmp2$i$i263) {
   $div8$i$i265 = $add$i$i262 >>> 9;
   $add$ptr$i$i266 = (($15) + ($div8$i$i265<<2)|0);
   $18 = load4($add$ptr$i$i266);
   $rem9$i$i267 = $add$i$i262 & 511;
   $add$ptr6$i$i268 = (($18) + ($rem9$i$i267<<3)|0);
   $add$ptr6$i$i268$sink = $add$ptr6$i$i268;
  } else {
   $sub$i$i270 = (510 - ($sub$ptr$div$i$i261))|0;
   $idx$neg$i$i271 = (($sub$i$i270|0) / -512)&-1;
   $add$ptr10$i$i272 = (($15) + ($idx$neg$i$i271<<2)|0);
   $19 = load4($add$ptr10$i$i272);
   $rem12$i$i273 = (($sub$i$i270|0) % 512)&-1;
   $sub13$i$i274 = (511 - ($rem12$i$i273))|0;
   $add$ptr14$i$i275 = (($19) + ($sub13$i$i274<<3)|0);
   $add$ptr6$i$i268$sink = $add$ptr14$i$i275;
  }
  $cmp$i251 = ($0|0)==($8|0);
  if ($cmp$i251) {
   $incdec$ptr$i252 = ((($4)) + -4|0);
   store4($__last,$incdec$ptr$i252);
   $20 = load4($incdec$ptr$i252);
   $add$ptr$i253 = ((($20)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i253);
   $21 = $add$ptr$i253;
  } else {
   $21 = $0;
  }
  $incdec$ptr6$i255 = ((($21)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i255);
  $22 = load8($__last,4);
  $agg$tmp10$sroa$2$0$extract$shift = i64_lshr($22,i64_const(32,0));
  $agg$tmp10$sroa$2$0$extract$trunc = i64_trunc($agg$tmp10$sroa$2$0$extract$shift);
  $23 = $agg$tmp$sroa$2$0$extract$trunc;
  $24 = loadd($add$ptr6$i$i268$sink);
  $25 = loadd($23);
  $cmp$i25$i235 = $24 < $25;
  $26 = $agg$tmp10$sroa$2$0$extract$trunc;
  $27 = loadd($26);
  $cmp$i22$i237 = $27 < $24;
  if (!($cmp$i25$i235)) {
   if (!($cmp$i22$i237)) {
    $retval$5 = 1;
    STACKTOP = sp;return ($retval$5|0);
   }
   stored($add$ptr6$i$i268$sink,$27);
   stored($26,$24);
   $28 = loadd($add$ptr6$i$i268$sink);
   $29 = loadd($23);
   $cmp$i17$i239 = $28 < $29;
   if (!($cmp$i17$i239)) {
    $retval$5 = 1;
    STACKTOP = sp;return ($retval$5|0);
   }
   stored($23,$28);
   stored($add$ptr6$i$i268$sink,$29);
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  if ($cmp$i22$i237) {
   stored($23,$27);
   stored($26,$25);
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($23,$24);
  stored($add$ptr6$i$i268$sink,$25);
  $30 = loadd($26);
  $cmp$i$i244 = $30 < $25;
  if (!($cmp$i$i244)) {
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($add$ptr6$i$i268$sink,$30);
  stored($26,$25);
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
  break;
 }
 case 4:  {
  $31 = load8($__first,4);
  $agg$tmp14$sroa$0$0$extract$trunc = i64_trunc($31);
  $agg$tmp14$sroa$2$0$extract$shift = i64_lshr($31,i64_const(32,0));
  $agg$tmp14$sroa$2$0$extract$trunc = i64_trunc($agg$tmp14$sroa$2$0$extract$shift);
  $32 = $agg$tmp14$sroa$0$0$extract$trunc;
  $33 = $agg$tmp14$sroa$0$0$extract$trunc;
  $34 = load4($33);
  $sub$ptr$sub$i$i212 = (($agg$tmp14$sroa$2$0$extract$trunc) - ($34))|0;
  $sub$ptr$div$i$i213 = $sub$ptr$sub$i$i212 >> 3;
  $add$i$i214 = (($sub$ptr$div$i$i213) + 1)|0;
  $cmp2$i$i215 = ($sub$ptr$sub$i$i212|0)>(-8);
  if ($cmp2$i$i215) {
   $div8$i$i217 = $add$i$i214 >>> 9;
   $add$ptr$i$i218 = (($32) + ($div8$i$i217<<2)|0);
   $35 = load4($add$ptr$i$i218);
   $rem9$i$i219 = $add$i$i214 & 511;
   $add$ptr6$i$i220 = (($35) + ($rem9$i$i219<<3)|0);
   $add$ptr6$i$i220$sink440 = $add$ptr6$i$i220;
   label = 23;
  } else {
   $sub$i$i222 = (510 - ($sub$ptr$div$i$i213))|0;
   $idx$neg$i$i223 = (($sub$i$i222|0) / -512)&-1;
   $add$ptr10$i$i224 = (($32) + ($idx$neg$i$i223<<2)|0);
   $36 = load4($add$ptr10$i$i224);
   $rem12$i$i225 = (($sub$i$i222|0) % 512)&-1;
   $sub13$i$i226 = (511 - ($rem12$i$i225))|0;
   $add$ptr14$i$i227 = (($36) + ($sub13$i$i226<<3)|0);
   $cmp2$i$i195 = ($sub$ptr$sub$i$i212|0)>(-16);
   if ($cmp2$i$i195) {
    $add$ptr6$i$i220$sink440 = $add$ptr14$i$i227;
    label = 23;
   } else {
    $sub$i$i202 = (509 - ($sub$ptr$div$i$i213))|0;
    $idx$neg$i$i203 = (($sub$i$i202|0) / -512)&-1;
    $add$ptr10$i$i204 = (($32) + ($idx$neg$i$i203<<2)|0);
    $38 = load4($add$ptr10$i$i204);
    $rem12$i$i205 = (($sub$i$i202|0) % 512)&-1;
    $sub13$i$i206 = (511 - ($rem12$i$i205))|0;
    $add$ptr14$i$i207 = (($38) + ($sub13$i$i206<<3)|0);
    $add$ptr6$i$i200$sink = $add$ptr14$i$i207;$add$ptr6$i$i220$sink439 = $add$ptr14$i$i227;
   }
  }
  if ((label|0) == 23) {
   $add$i$i194441 = (($sub$ptr$div$i$i213) + 2)|0;
   $div8$i$i197 = $add$i$i194441 >>> 9;
   $add$ptr$i$i198 = (($32) + ($div8$i$i197<<2)|0);
   $37 = load4($add$ptr$i$i198);
   $rem9$i$i199 = $add$i$i194441 & 511;
   $add$ptr6$i$i200 = (($37) + ($rem9$i$i199<<3)|0);
   $add$ptr6$i$i200$sink = $add$ptr6$i$i200;$add$ptr6$i$i220$sink439 = $add$ptr6$i$i220$sink440;
  }
  $cmp$i183 = ($0|0)==($8|0);
  if ($cmp$i183) {
   $incdec$ptr$i184 = ((($4)) + -4|0);
   store4($__last,$incdec$ptr$i184);
   $39 = load4($incdec$ptr$i184);
   $add$ptr$i185 = ((($39)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i185);
   $40 = $add$ptr$i185;
  } else {
   $40 = $0;
  }
  $incdec$ptr6$i187 = ((($40)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i187);
  $41 = load8($__last,4);
  $agg$tmp17$sroa$2$0$extract$shift = i64_lshr($41,i64_const(32,0));
  $agg$tmp17$sroa$2$0$extract$trunc = i64_trunc($agg$tmp17$sroa$2$0$extract$shift);
  $42 = $agg$tmp14$sroa$2$0$extract$trunc;
  $43 = loadd($add$ptr6$i$i220$sink439);
  $44 = loadd($42);
  $cmp$i25$i$i = $43 < $44;
  $45 = loadd($add$ptr6$i$i200$sink);
  $cmp$i22$i$i = $45 < $43;
  do {
   if ($cmp$i25$i$i) {
    if ($cmp$i22$i$i) {
     stored($42,$45);
     stored($add$ptr6$i$i200$sink,$44);
     $51 = $44;
     break;
    }
    stored($42,$43);
    stored($add$ptr6$i$i220$sink439,$44);
    $48 = loadd($add$ptr6$i$i200$sink);
    $cmp$i$i$i = $48 < $44;
    if ($cmp$i$i$i) {
     stored($add$ptr6$i$i220$sink439,$48);
     stored($add$ptr6$i$i200$sink,$44);
     $51 = $44;
    } else {
     $51 = $48;
    }
   } else {
    if ($cmp$i22$i$i) {
     stored($add$ptr6$i$i220$sink439,$45);
     stored($add$ptr6$i$i200$sink,$43);
     $46 = loadd($add$ptr6$i$i220$sink439);
     $47 = loadd($42);
     $cmp$i17$i$i = $46 < $47;
     if ($cmp$i17$i$i) {
      stored($42,$46);
      stored($add$ptr6$i$i220$sink439,$47);
      $$pre = loadd($add$ptr6$i$i200$sink);
      $51 = $$pre;
     } else {
      $51 = $43;
     }
    } else {
     $51 = $45;
    }
   }
  } while(0);
  $49 = $agg$tmp17$sroa$2$0$extract$trunc;
  $50 = loadd($49);
  $cmp$i23$i = $50 < $51;
  if (!($cmp$i23$i)) {
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($add$ptr6$i$i200$sink,$50);
  stored($49,$51);
  $52 = loadd($add$ptr6$i$i200$sink);
  $53 = loadd($add$ptr6$i$i220$sink439);
  $cmp$i18$i = $52 < $53;
  if (!($cmp$i18$i)) {
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($add$ptr6$i$i220$sink439,$52);
  stored($add$ptr6$i$i200$sink,$53);
  $54 = loadd($add$ptr6$i$i220$sink439);
  $55 = loadd($42);
  $cmp$i$i179 = $54 < $55;
  if (!($cmp$i$i179)) {
   $retval$5 = 1;
   STACKTOP = sp;return ($retval$5|0);
  }
  stored($42,$54);
  stored($add$ptr6$i$i220$sink439,$55);
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
  break;
 }
 case 5:  {
  $56 = load8($__first,4);
  store8($agg$tmp21,$56);
  store8($agg$tmp22,$56);
  $57 = i64_trunc($56);
  $58 = $57;
  $59 = i64_lshr($56,i64_const(32,0));
  $60 = i64_trunc($59);
  $__ptr_$i$i154 = ((($agg$tmp22)) + 4|0);
  $61 = $57;
  $62 = load4($61);
  $sub$ptr$sub$i$i156 = (($60) - ($62))|0;
  $sub$ptr$div$i$i157 = $sub$ptr$sub$i$i156 >> 3;
  $add$i$i158 = (($sub$ptr$div$i$i157) + 1)|0;
  $cmp2$i$i159 = ($sub$ptr$sub$i$i156|0)>(-8);
  if ($cmp2$i$i159) {
   $div8$i$i160 = $add$i$i158 >>> 9;
   $add$ptr$i$i161 = (($58) + ($div8$i$i160<<2)|0);
   store4($agg$tmp22,$add$ptr$i$i161);
   $63 = load4($add$ptr$i$i161);
   $rem9$i$i162 = $add$i$i158 & 511;
   $add$ptr6$i$i163 = (($63) + ($rem9$i$i162<<3)|0);
   $storemerge = $add$ptr6$i$i163;
  } else {
   $sub$i$i165 = (510 - ($sub$ptr$div$i$i157))|0;
   $idx$neg$i$i166 = (($sub$i$i165|0) / -512)&-1;
   $add$ptr10$i$i167 = (($58) + ($idx$neg$i$i166<<2)|0);
   store4($agg$tmp22,$add$ptr10$i$i167);
   $64 = load4($add$ptr10$i$i167);
   $rem12$i$i168 = (($sub$i$i165|0) % 512)&-1;
   $sub13$i$i169 = (511 - ($rem12$i$i168))|0;
   $add$ptr14$i$i170 = (($64) + ($sub13$i$i169<<3)|0);
   $storemerge = $add$ptr14$i$i170;
  }
  store4($__ptr_$i$i154,$storemerge);
  store8($agg$tmp23,$56);
  $__ptr_$i$i135 = ((($agg$tmp23)) + 4|0);
  $65 = load4($61);
  $sub$ptr$sub$i$i137 = (($60) - ($65))|0;
  $sub$ptr$div$i$i138 = $sub$ptr$sub$i$i137 >> 3;
  $add$i$i139 = (($sub$ptr$div$i$i138) + 2)|0;
  $cmp2$i$i140 = ($sub$ptr$sub$i$i137|0)>(-16);
  if ($cmp2$i$i140) {
   $div8$i$i141 = $add$i$i139 >>> 9;
   $add$ptr$i$i142 = (($58) + ($div8$i$i141<<2)|0);
   store4($agg$tmp23,$add$ptr$i$i142);
   $66 = load4($add$ptr$i$i142);
   $rem9$i$i143 = $add$i$i139 & 511;
   $add$ptr6$i$i144 = (($66) + ($rem9$i$i143<<3)|0);
   $storemerge419 = $add$ptr6$i$i144;
  } else {
   $sub$i$i146 = (509 - ($sub$ptr$div$i$i138))|0;
   $idx$neg$i$i147 = (($sub$i$i146|0) / -512)&-1;
   $add$ptr10$i$i148 = (($58) + ($idx$neg$i$i147<<2)|0);
   store4($agg$tmp23,$add$ptr10$i$i148);
   $67 = load4($add$ptr10$i$i148);
   $rem12$i$i149 = (($sub$i$i146|0) % 512)&-1;
   $sub13$i$i150 = (511 - ($rem12$i$i149))|0;
   $add$ptr14$i$i151 = (($67) + ($sub13$i$i150<<3)|0);
   $storemerge419 = $add$ptr14$i$i151;
  }
  store4($__ptr_$i$i135,$storemerge419);
  store8($agg$tmp24,$56);
  $__ptr_$i$i116 = ((($agg$tmp24)) + 4|0);
  $68 = load4($61);
  $sub$ptr$sub$i$i118 = (($60) - ($68))|0;
  $sub$ptr$div$i$i119 = $sub$ptr$sub$i$i118 >> 3;
  $add$i$i120 = (($sub$ptr$div$i$i119) + 3)|0;
  $cmp2$i$i121 = ($sub$ptr$sub$i$i118|0)>(-24);
  if ($cmp2$i$i121) {
   $div8$i$i122 = $add$i$i120 >>> 9;
   $add$ptr$i$i123 = (($58) + ($div8$i$i122<<2)|0);
   store4($agg$tmp24,$add$ptr$i$i123);
   $69 = load4($add$ptr$i$i123);
   $rem9$i$i124 = $add$i$i120 & 511;
   $add$ptr6$i$i125 = (($69) + ($rem9$i$i124<<3)|0);
   $storemerge421 = $add$ptr6$i$i125;
  } else {
   $sub$i$i127 = (508 - ($sub$ptr$div$i$i119))|0;
   $idx$neg$i$i128 = (($sub$i$i127|0) / -512)&-1;
   $add$ptr10$i$i129 = (($58) + ($idx$neg$i$i128<<2)|0);
   store4($agg$tmp24,$add$ptr10$i$i129);
   $70 = load4($add$ptr10$i$i129);
   $rem12$i$i130 = (($sub$i$i127|0) % 512)&-1;
   $sub13$i$i131 = (511 - ($rem12$i$i130))|0;
   $add$ptr14$i$i132 = (($70) + ($sub13$i$i131<<3)|0);
   $storemerge421 = $add$ptr14$i$i132;
  }
  store4($__ptr_$i$i116,$storemerge421);
  $71 = load4($4);
  $cmp$i109 = ($0|0)==($71|0);
  if ($cmp$i109) {
   $incdec$ptr$i110 = ((($4)) + -4|0);
   store4($__last,$incdec$ptr$i110);
   $72 = load4($incdec$ptr$i110);
   $add$ptr$i111 = ((($72)) + 4096|0);
   store4($__ptr_$i$i$i,$add$ptr$i111);
   $73 = $add$ptr$i111;
  } else {
   $73 = $0;
  }
  $incdec$ptr6$i113 = ((($73)) + -8|0);
  store4($__ptr_$i$i$i,$incdec$ptr6$i113);
  $74 = load8($__last,4);
  store8($agg$tmp25,$74);
  ; store8($tmpcast$byval_copy,load8($agg$tmp21,4),4);
  ; store8($tmpcast417$byval_copy,load8($agg$tmp22,4),4);
  ; store8($tmpcast418$byval_copy,load8($agg$tmp23,4),4);
  ; store8($tmpcast420$byval_copy,load8($agg$tmp24,4),4);
  ; store8($tmpcast11$byval_copy,load8($agg$tmp25,4),4);
  (__ZNSt3__27__sort5IRNS_6__lessIddEENS_16__deque_iteratorIdPdRdPS5_iLi0EEEEEjT0_S9_S9_S9_S9_T_($tmpcast$byval_copy,$tmpcast417$byval_copy,$tmpcast418$byval_copy,$tmpcast420$byval_copy,$tmpcast11$byval_copy,$__comp)|0);
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
  break;
 }
 case 1: case 0:  {
  $retval$5 = 1;
  STACKTOP = sp;return ($retval$5|0);
  break;
 }
 default: {
  $75 = load8($__first,4);
  $76 = i64_trunc($75);
  $77 = $76;
  $78 = i64_lshr($75,i64_const(32,0));
  $79 = i64_trunc($78);
  $80 = $76;
  $81 = load4($80);
  $sub$ptr$sub$i$i81 = (($79) - ($81))|0;
  $sub$ptr$div$i$i82 = $sub$ptr$sub$i$i81 >> 3;
  $add$i$i83 = (($sub$ptr$div$i$i82) + 2)|0;
  $cmp2$i$i84 = ($sub$ptr$sub$i$i81|0)>(-16);
  if ($cmp2$i$i84) {
   $div8$i$i85 = $add$i$i83 >>> 9;
   $add$ptr$i$i86 = (($77) + ($div8$i$i85<<2)|0);
   $84 = load4($add$ptr$i$i86);
   $rem9$i$i87 = $add$i$i83 & 511;
   $add$ptr6$i$i88 = (($84) + ($rem9$i$i87<<3)|0);
   $__j$sroa$0$0 = $add$ptr$i$i86;
   $85 = $add$ptr6$i$i88;
   $add$i$i64 = (($sub$ptr$div$i$i82) + 1)|0;
   $cmp2$i$i65 = ($sub$ptr$sub$i$i81|0)>(-8);
   if ($cmp2$i$i65) {
    $div8$i$i66 = $add$i$i64 >>> 9;
    $add$ptr$i$i67 = (($77) + ($div8$i$i66<<2)|0);
    $86 = load4($add$ptr$i$i67);
    $rem9$i$i68 = $add$i$i64 & 511;
    $add$ptr6$i$i69 = (($86) + ($rem9$i$i68<<3)|0);
    $96 = $85;$__j$sroa$0$0$in447 = $add$ptr$i$i86;$__j$sroa$0$0449 = $__j$sroa$0$0;$add$ptr6$i$i69$sink = $add$ptr6$i$i69;$add$ptr6$i$i88$sink445 = $add$ptr6$i$i88;
   } else {
    $122 = $85;$__j$sroa$0$0$in448 = $add$ptr$i$i86;$__j$sroa$0$0450 = $__j$sroa$0$0;$add$ptr6$i$i88$sink446 = $add$ptr6$i$i88;
    label = 55;
   }
  } else {
   $sub$i$i90 = (509 - ($sub$ptr$div$i$i82))|0;
   $idx$neg$i$i91 = (($sub$i$i90|0) / -512)&-1;
   $add$ptr10$i$i92 = (($77) + ($idx$neg$i$i91<<2)|0);
   $82 = load4($add$ptr10$i$i92);
   $rem12$i$i93 = (($sub$i$i90|0) % 512)&-1;
   $sub13$i$i94 = (511 - ($rem12$i$i93))|0;
   $add$ptr14$i$i95 = (($82) + ($sub13$i$i94<<3)|0);
   $__j$sroa$0$0442 = $add$ptr10$i$i92;
   $83 = $add$ptr14$i$i95;
   $122 = $83;$__j$sroa$0$0$in448 = $add$ptr10$i$i92;$__j$sroa$0$0450 = $__j$sroa$0$0442;$add$ptr6$i$i88$sink446 = $add$ptr14$i$i95;
   label = 55;
  }
  if ((label|0) == 55) {
   $sub$i$i71 = (510 - ($sub$ptr$div$i$i82))|0;
   $idx$neg$i$i72 = (($sub$i$i71|0) / -512)&-1;
   $add$ptr10$i$i73 = (($77) + ($idx$neg$i$i72<<2)|0);
   $87 = load4($add$ptr10$i$i73);
   $rem12$i$i74 = (($sub$i$i71|0) % 512)&-1;
   $sub13$i$i75 = (511 - ($rem12$i$i74))|0;
   $add$ptr14$i$i76 = (($87) + ($sub13$i$i75<<3)|0);
   $96 = $122;$__j$sroa$0$0$in447 = $__j$sroa$0$0$in448;$__j$sroa$0$0449 = $__j$sroa$0$0450;$add$ptr6$i$i69$sink = $add$ptr14$i$i76;$add$ptr6$i$i88$sink445 = $add$ptr6$i$i88$sink446;
  }
  $88 = $79;
  $89 = loadd($add$ptr6$i$i69$sink);
  $90 = loadd($88);
  $cmp$i25$i = $89 < $90;
  $91 = loadd($add$ptr6$i$i88$sink445);
  $cmp$i22$i = $91 < $89;
  do {
   if ($cmp$i25$i) {
    if ($cmp$i22$i) {
     stored($88,$91);
     stored($add$ptr6$i$i88$sink445,$90);
     break;
    }
    stored($88,$89);
    stored($add$ptr6$i$i69$sink,$90);
    $94 = loadd($add$ptr6$i$i88$sink445);
    $cmp$i$i = $94 < $90;
    if ($cmp$i$i) {
     stored($add$ptr6$i$i69$sink,$94);
     stored($add$ptr6$i$i88$sink445,$90);
    }
   } else {
    if ($cmp$i22$i) {
     stored($add$ptr6$i$i69$sink,$91);
     stored($add$ptr6$i$i88$sink445,$89);
     $92 = loadd($add$ptr6$i$i69$sink);
     $93 = loadd($88);
     $cmp$i17$i = $92 < $93;
     if ($cmp$i17$i) {
      stored($88,$92);
      stored($add$ptr6$i$i69$sink,$93);
     }
    }
   }
  } while(0);
  $95 = load4($__j$sroa$0$0$in447);
  $sub$ptr$sub$i$i = (($96) - ($95))|0;
  $sub$ptr$div$i$i = $sub$ptr$sub$i$i >> 3;
  $add$i$i = (($sub$ptr$div$i$i) + 1)|0;
  $cmp2$i$i = ($sub$ptr$sub$i$i|0)>(-8);
  if ($cmp2$i$i) {
   $div8$i$i = $add$i$i >>> 9;
   $add$ptr$i$i = (($__j$sroa$0$0$in447) + ($div8$i$i<<2)|0);
   $97 = load4($add$ptr$i$i);
   $rem9$i$i = $add$i$i & 511;
   $add$ptr6$i$i = (($97) + ($rem9$i$i<<3)|0);
   $__i$sroa$0$1$ph$in = $add$ptr$i$i;$add$ptr6$i$i$sink = $add$ptr6$i$i;
  } else {
   $sub$i$i = (510 - ($sub$ptr$div$i$i))|0;
   $idx$neg$i$i = (($sub$i$i|0) / -512)&-1;
   $add$ptr10$i$i = (($__j$sroa$0$0$in447) + ($idx$neg$i$i<<2)|0);
   $98 = load4($add$ptr10$i$i);
   $rem12$i$i = (($sub$i$i|0) % 512)&-1;
   $sub13$i$i = (511 - ($rem12$i$i))|0;
   $add$ptr14$i$i = (($98) + ($sub13$i$i<<3)|0);
   $__i$sroa$0$1$ph$in = $add$ptr10$i$i;$add$ptr6$i$i$sink = $add$ptr14$i$i;
  }
  $99 = $add$ptr6$i$i$sink;
  $__count$0$ph = 0;$__i$sroa$0$1$ph423$in = $__i$sroa$0$1$ph$in;$__i$sroa$11$1$ph422 = $99;$__j$sroa$0$1$ph = $__j$sroa$0$0449;$__j$sroa$12$1$ph = $96;
  L27: while(1) {
   $__i$sroa$0$1$ph423 = $__i$sroa$0$1$ph423$in;
   $__count$0 = $__count$0$ph;$__i$sroa$11$1 = $__i$sroa$11$1$ph422;$__j$sroa$0$1 = $__j$sroa$0$1$ph;$__j$sroa$12$1 = $__j$sroa$12$1$ph;
   while(1) {
    $100 = $__i$sroa$11$1;
    $lnot$i52 = ($100|0)==($0|0);
    if ($lnot$i52) {
     $cleanup$dest$slot$1 = 1;$retval$3 = 0;
     break L27;
    }
    $101 = $__j$sroa$12$1;
    $102 = loadd($100);
    $103 = loadd($101);
    $cmp$i47 = $102 < $103;
    if ($cmp$i47) {
     $104 = $__j$sroa$12$1;
     $105 = $__i$sroa$11$1;
     stored($105,$103);
     $lnot$i467 = ($104|0)==($1|0);
     L34: do {
      if ($lnot$i467) {
       $$lcssa = $104;
      } else {
       $108 = $104;$__k$sroa$0$0469 = $__j$sroa$0$1;$__k$sroa$6$0468 = $__j$sroa$12$1;
       while(1) {
        $106 = $__k$sroa$0$0469;
        $107 = load4($106);
        $cmp$i41 = ($108|0)==($107|0);
        if ($cmp$i41) {
         $incdec$ptr$i42 = ((($106)) + -4|0);
         $109 = $incdec$ptr$i42;
         $110 = load4($incdec$ptr$i42);
         $add$ptr$i = ((($110)) + 4096|0);
         $111 = $add$ptr$i;$__k$sroa$0$1 = $109;
        } else {
         $111 = $108;$__k$sroa$0$1 = $__k$sroa$0$0469;
        }
        $incdec$ptr6$i = ((($111)) + -8|0);
        $112 = loadd($incdec$ptr6$i);
        $cmp$i37 = $102 < $112;
        if (!($cmp$i37)) {
         $$lcssa = $108;
         break L34;
        }
        $113 = $incdec$ptr6$i;
        $$pre436 = loadd($incdec$ptr6$i);
        $114 = $__k$sroa$6$0468;
        stored($114,$$pre436);
        $lnot$i = ($incdec$ptr6$i|0)==($1|0);
        if ($lnot$i) {
         $$lcssa = $incdec$ptr6$i;
         break;
        } else {
         $108 = $incdec$ptr6$i;$__k$sroa$0$0469 = $__k$sroa$0$1;$__k$sroa$6$0468 = $113;
        }
       }
      }
     } while(0);
     stored($$lcssa,$102);
     $inc = (($__count$0) + 1)|0;
     $cmp = ($inc|0)==(8);
     if ($cmp) {
      label = 77;
      break L27;
     } else {
      $__count$1 = $inc;
     }
    } else {
     $__count$1 = $__count$0;
    }
    $incdec$ptr$i = ((($100)) + 8|0);
    $119 = $incdec$ptr$i;
    $120 = load4($__i$sroa$0$1$ph423$in);
    $sub$ptr$sub$i23 = (($119) - ($120))|0;
    $cmp$i = ($sub$ptr$sub$i23|0)==(4096);
    if ($cmp$i) {
     break;
    } else {
     $__j$sroa$12$1$phi = $__i$sroa$11$1;$__count$0 = $__count$1;$__i$sroa$11$1 = $119;$__j$sroa$0$1 = $__i$sroa$0$1$ph423;$__j$sroa$12$1 = $__j$sroa$12$1$phi;
    }
   }
   $incdec$ptr3$i = ((($__i$sroa$0$1$ph423$in)) + 4|0);
   $121 = load4($incdec$ptr3$i);
   $__count$0$ph = $__count$1;$__i$sroa$0$1$ph423$in = $incdec$ptr3$i;$__i$sroa$11$1$ph422 = $121;$__j$sroa$0$1$ph = $__i$sroa$0$1$ph423;$__j$sroa$12$1$ph = $__i$sroa$11$1;
  }
  if ((label|0) == 77) {
   $incdec$ptr$i28 = ((($100)) + 8|0);
   $115 = $incdec$ptr$i28;
   $116 = load4($__i$sroa$0$1$ph423$in);
   $sub$ptr$sub$i31 = (($115) - ($116))|0;
   $cmp$i32 = ($sub$ptr$sub$i31|0)==(4096);
   if ($cmp$i32) {
    $incdec$ptr3$i33 = ((($__i$sroa$0$1$ph423$in)) + 4|0);
    $117 = load4($incdec$ptr3$i33);
    $__i$sroa$11$2 = $117;
   } else {
    $__i$sroa$11$2 = $115;
   }
   $118 = $__i$sroa$11$2;
   $cmp$i26 = ($118|0)==($0|0);
   $cleanup$dest$slot$1 = 0;$retval$3 = $cmp$i26;
  }
  $$retval$3 = $retval$3 | $cleanup$dest$slot$1;
  $retval$5 = $$retval$3;
  STACKTOP = sp;return ($retval$5|0);
 }
 }
 return (0)|0;
}
function __ZNSt3__24listIdNS_9allocatorIdEEE6__sortINS_6__lessIddEEEENS_15__list_iteratorIdPvEES9_S9_jRT_($__f1,$__e2,$__n,$__comp) {
 $__f1 = $__f1|0;
 $__e2 = $__e2|0;
 $__n = $__n|0;
 $__comp = $__comp|0;
 var $$cast = 0, $$cast172 = 0, $$cast173 = 0, $$lcssa151 = 0, $$lcssa154 = 0, $$pre = 0.0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0.0, $2 = 0, $20 = 0.0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0.0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0.0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0.0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0, $45 = 0, $46 = 0, $47 = 0.0, $48 = 0, $49 = 0.0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $8 = 0, $9 = 0, $__e1$sroa$0$0$ph = 0, $__e1$sroa$0$0$ph145164 = 0, $__f2$sroa$0$0$ph146165 = 0, $__m2$sroa$0$0$lcssa = 0;
 var $__m2$sroa$0$0167 = 0, $__m246$sroa$0$0$__e1$sroa$0$0 = 0, $__m246$sroa$0$0$lcssa = 0, $__m246$sroa$0$0159 = 0, $__n$addr$08$i$i$i108 = 0, $__next_$i = 0, $__next_$i$i$i$i = 0, $__next_$i$i$i$i109 = 0, $__next_$i$i$i$i50 = 0, $__next_$i$i$i$i72 = 0, $__next_$i$i$i$i92 = 0, $__next_$i101 = 0, $__next_$i104 = 0, $__next_$i115 = 0, $__next_$i117 = 0, $__next_$i42 = 0, $__next_$i65 = 0, $__next_$i67 = 0, $__next_$i77 = 0, $__next_$i81 = 0;
 var $__next_1$i = 0, $__next_1$i119 = 0, $__next_1$i79 = 0, $__r$sroa$0$0$ph = 0, $__value_$i = 0, $__value_$i39 = 0, $__value_$i44 = 0, $__value_$i45 = 0, $__value_$i56 = 0, $__value_$i57 = 0, $__value_$i84 = 0, $__value_$i98 = 0, $__value_$i99 = 0, $agg$tmp12 = 0, $agg$tmp12$byval_copy = 0, $agg$tmp13 = 0, $agg$tmp13$byval_copy = 0, $agg$tmp7 = 0, $agg$tmp8 = 0, $call14 = 0;
 var $call9 = 0, $cmp$i = 0, $cmp$i120 = 0, $cmp$i43 = 0, $cmp$i55 = 0, $cmp$i82 = 0, $cmp$i97 = 0, $cmp1$i$i$i111 = 0, $cmp17$i$i$i = 0, $dec$i$i$i110 = 0, $div = 0, $lnot$i = 0, $lnot$i158 = 0, $lnot$i60 = 0, $lnot$i63 = 0, $lnot$i63157 = 0, $lnot$i63157163 = 0, $lnot$i87 = 0, $lnot$i87166 = 0, $retval$sroa$0$0 = 0;
 var $retval$sroa$0$0$copyload = 0, $retval$sroa$0$0$copyload$i = 0, $retval$sroa$0$0$copyload34 = 0, $storemerge = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $agg$tmp13$byval_copy = sp + 20|0;
 $agg$tmp12$byval_copy = sp + 16|0;
 $agg$tmp7 = sp + 12|0;
 $agg$tmp8 = sp + 8|0;
 $agg$tmp12 = sp + 4|0;
 $agg$tmp13 = sp;
 switch ($__n|0) {
 case 1: case 0:  {
  $retval$sroa$0$0$copyload = load4($__f1);
  $retval$sroa$0$0 = $retval$sroa$0$0$copyload;
  STACKTOP = sp;return ($retval$sroa$0$0|0);
  break;
 }
 case 2:  {
  $0 = load4($__e2);
  $1 = load4($0);
  store4($__e2,$1);
  $$cast = $1;
  $__value_$i = ((($$cast)) + 8|0);
  $2 = load4($__f1);
  $__value_$i39 = ((($2)) + 8|0);
  $3 = loadd($__value_$i);
  $4 = loadd($__value_$i39);
  $cmp$i120 = $3 < $4;
  $5 = $1;
  if (!($cmp$i120)) {
   $retval$sroa$0$0 = $2;
   STACKTOP = sp;return ($retval$sroa$0$0|0);
  }
  $__next_$i117 = ((($5)) + 4|0);
  $6 = load4($__next_$i117);
  $7 = load4($5);
  $__next_1$i119 = ((($7)) + 4|0);
  store4($__next_1$i119,$6);
  $8 = $7;
  $9 = load4($__next_$i117);
  store4($9,$8);
  $10 = load4($2);
  $__next_$i115 = ((($10)) + 4|0);
  store4($__next_$i115,$5);
  $11 = $10;
  $12 = $1;
  store4($12,$11);
  store4($2,$5);
  store4($__next_$i117,$2);
  $retval$sroa$0$0$copyload34 = load4($__e2);
  $retval$sroa$0$0 = $retval$sroa$0$0$copyload34;
  STACKTOP = sp;return ($retval$sroa$0$0|0);
  break;
 }
 default: {
  $div = $__n >>> 1;
  $13 = load4($__f1);
  $cmp17$i$i$i = ($div|0)==(0);
  $14 = $13;
  if ($cmp17$i$i$i) {
   $retval$sroa$0$0$copyload$i = $13;
  } else {
   $15 = $13;$__n$addr$08$i$i$i108 = $div;
   while(1) {
    $__next_$i$i$i$i109 = ((($15)) + 4|0);
    $16 = load4($__next_$i$i$i$i109);
    $dec$i$i$i110 = (($__n$addr$08$i$i$i108) + -1)|0;
    $cmp1$i$i$i111 = ($__n$addr$08$i$i$i108|0)>(1);
    if ($cmp1$i$i$i111) {
     $15 = $16;$__n$addr$08$i$i$i108 = $dec$i$i$i110;
    } else {
     $retval$sroa$0$0$copyload$i = $16;
     break;
    }
   }
  }
  $17 = $retval$sroa$0$0$copyload$i;
  store4($agg$tmp7,$14);
  store4($agg$tmp8,$17);
  ; store4($agg$tmp12$byval_copy,load4($agg$tmp7,4),4);
  ; store4($agg$tmp13$byval_copy,load4($agg$tmp8,4),4);
  $call9 = (__ZNSt3__24listIdNS_9allocatorIdEEE6__sortINS_6__lessIddEEEENS_15__list_iteratorIdPvEES9_S9_jRT_($agg$tmp12$byval_copy,$agg$tmp13$byval_copy,$div,$__comp)|0);
  store4($__f1,$call9);
  store4($agg$tmp12,$17);
  $18 = load4($__e2);
  store4($agg$tmp13,$18);
  $sub = (($__n) - ($div))|0;
  ; store4($agg$tmp12$byval_copy,load4($agg$tmp12,4),4);
  ; store4($agg$tmp13$byval_copy,load4($agg$tmp13,4),4);
  $call14 = (__ZNSt3__24listIdNS_9allocatorIdEEE6__sortINS_6__lessIddEEEENS_15__list_iteratorIdPvEES9_S9_jRT_($agg$tmp12$byval_copy,$agg$tmp13$byval_copy,$sub,$__comp)|0);
  $__value_$i99 = ((($call14)) + 8|0);
  $__value_$i98 = ((($call9)) + 8|0);
  $19 = loadd($__value_$i99);
  $20 = loadd($__value_$i98);
  $cmp$i97 = $19 < $20;
  $21 = $18;
  if ($cmp$i97) {
   $__next_$i$i$i$i92 = ((($call14)) + 4|0);
   $22 = load4($__next_$i$i$i$i92);
   $23 = $22;
   $lnot$i87166 = ($22|0)==($21|0);
   L9: do {
    if ($lnot$i87166) {
     $$lcssa154 = $21;$__m2$sroa$0$0$lcssa = $23;
    } else {
     $26 = $22;$__m2$sroa$0$0167 = $23;
     while(1) {
      $24 = $__m2$sroa$0$0167;
      $__value_$i84 = ((($24)) + 8|0);
      $25 = loadd($__value_$i84);
      $cmp$i82 = $25 < $20;
      if (!($cmp$i82)) {
       $$lcssa154 = $26;$__m2$sroa$0$0$lcssa = $__m2$sroa$0$0167;
       break L9;
      }
      $__next_$i81 = ((($26)) + 4|0);
      $27 = load4($__next_$i81);
      $28 = $27;
      $lnot$i87 = ($28|0)==($21|0);
      if ($lnot$i87) {
       $$lcssa154 = $21;$__m2$sroa$0$0$lcssa = $27;
       break;
      } else {
       $26 = $28;$__m2$sroa$0$0167 = $27;
      }
     }
    }
   } while(0);
   $29 = load4($$lcssa154);
   $__next_$i77 = ((($29)) + 4|0);
   $30 = load4($__next_$i77);
   $31 = load4($call14);
   $__next_1$i79 = ((($31)) + 4|0);
   store4($__next_1$i79,$30);
   $32 = $31;
   $33 = load4($__next_$i77);
   store4($33,$32);
   $__next_$i$i$i$i72 = ((($call9)) + 4|0);
   $34 = load4($__next_$i$i$i$i72);
   $35 = load4($call9);
   $__next_$i67 = ((($35)) + 4|0);
   store4($__next_$i67,$call14);
   $36 = $35;
   store4($call14,$36);
   store4($call9,$29);
   store4($__next_$i77,$call9);
   $__e1$sroa$0$0$ph = $__m2$sroa$0$0$lcssa;$__r$sroa$0$0$ph = $call14;$storemerge = $34;
  } else {
   $37 = $call14;
   $__next_$i65 = ((($call9)) + 4|0);
   $38 = load4($__next_$i65);
   $__e1$sroa$0$0$ph = $37;$__r$sroa$0$0$ph = $call9;$storemerge = $38;
  }
  store4($__f1,$storemerge);
  $$cast172 = $storemerge;
  $39 = $__e1$sroa$0$0$ph;
  $lnot$i63157163 = ($$cast172|0)==($39|0);
  if ($lnot$i63157163) {
   $retval$sroa$0$0 = $__r$sroa$0$0$ph;
   STACKTOP = sp;return ($retval$sroa$0$0|0);
  }
  $40 = $storemerge;
  $54 = $39;$68 = $$cast172;$69 = $40;$__e1$sroa$0$0$ph145164 = $__e1$sroa$0$0$ph;$__f2$sroa$0$0$ph146165 = $__e1$sroa$0$0$ph;
  L19: while(1) {
   $41 = $__f2$sroa$0$0$ph146165;
   $lnot$i60 = ($41|0)==($21|0);
   if ($lnot$i60) {
    $retval$sroa$0$0 = $__r$sroa$0$0$ph;
    label = 24;
    break;
   }
   $42 = $__f2$sroa$0$0$ph146165;
   $__value_$i57 = ((($42)) + 8|0);
   $$pre = loadd($__value_$i57);
   $43 = $69;$59 = $68;
   while(1) {
    $__value_$i56 = ((($43)) + 8|0);
    $44 = loadd($__value_$i56);
    $cmp$i55 = $$pre < $44;
    if ($cmp$i55) {
     break;
    }
    $__next_$i104 = ((($59)) + 4|0);
    $66 = load4($__next_$i104);
    store4($__f1,$66);
    $$cast173 = $66;
    $lnot$i63 = ($$cast173|0)==($54|0);
    $67 = $66;
    if ($lnot$i63) {
     $retval$sroa$0$0 = $__r$sroa$0$0$ph;
     label = 24;
     break L19;
    } else {
     $43 = $67;$59 = $$cast173;
    }
   }
   $__next_$i$i$i$i50 = ((($41)) + 4|0);
   $45 = load4($__next_$i$i$i$i50);
   $46 = $45;
   $lnot$i158 = ($45|0)==($21|0);
   L26: do {
    if ($lnot$i158) {
     $$lcssa151 = $21;$__m246$sroa$0$0$lcssa = $46;
    } else {
     $__value_$i44 = ((($43)) + 8|0);
     $47 = loadd($__value_$i44);
     $50 = $45;$__m246$sroa$0$0159 = $46;
     while(1) {
      $48 = $__m246$sroa$0$0159;
      $__value_$i45 = ((($48)) + 8|0);
      $49 = loadd($__value_$i45);
      $cmp$i43 = $49 < $47;
      if (!($cmp$i43)) {
       $$lcssa151 = $50;$__m246$sroa$0$0$lcssa = $__m246$sroa$0$0159;
       break L26;
      }
      $__next_$i42 = ((($50)) + 4|0);
      $51 = load4($__next_$i42);
      $52 = $51;
      $lnot$i = ($52|0)==($21|0);
      if ($lnot$i) {
       $$lcssa151 = $21;$__m246$sroa$0$0$lcssa = $51;
       break;
      } else {
       $50 = $52;$__m246$sroa$0$0159 = $51;
      }
     }
    }
   } while(0);
   $53 = load4($$lcssa151);
   $cmp$i = ($54|0)==($41|0);
   $__next_$i = ((($53)) + 4|0);
   $55 = load4($__next_$i);
   $56 = load4($41);
   $__next_1$i = ((($56)) + 4|0);
   store4($__next_1$i,$55);
   $57 = $56;
   $58 = load4($__next_$i);
   store4($58,$57);
   $__next_$i$i$i$i = ((($59)) + 4|0);
   $60 = load4($__next_$i$i$i$i);
   $__m246$sroa$0$0$__e1$sroa$0$0 = $cmp$i ? $__m246$sroa$0$0$lcssa : $__e1$sroa$0$0$ph145164;
   $61 = $60;
   $62 = load4($59);
   $__next_$i101 = ((($62)) + 4|0);
   store4($__next_$i101,$41);
   $63 = $62;
   $64 = $__f2$sroa$0$0$ph146165;
   store4($64,$63);
   store4($59,$53);
   store4($__next_$i,$59);
   store4($__f1,$61);
   $65 = $__m246$sroa$0$0$__e1$sroa$0$0;
   $lnot$i63157 = ($60|0)==($65|0);
   if ($lnot$i63157) {
    $retval$sroa$0$0 = $__r$sroa$0$0$ph;
    label = 24;
    break;
   } else {
    $54 = $65;$68 = $60;$69 = $60;$__e1$sroa$0$0$ph145164 = $__m246$sroa$0$0$__e1$sroa$0$0;$__f2$sroa$0$0$ph146165 = $__m246$sroa$0$0$lcssa;
   }
  }
  if ((label|0) == 24) {
   STACKTOP = sp;return ($retval$sroa$0$0|0);
  }
 }
 }
 return (0)|0;
}
function __ZNSt3__26__treeIdNS_4lessIdEENS_9allocatorIdEEE12__find_equalIdEERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIdPNS_11__tree_nodeIdS8_EEiEESB_RKT_($this,$__hint,$__parent,$__v) {
 $this = $this|0;
 $__hint = $__hint|0;
 $__parent = $__parent|0;
 $__v = $__v|0;
 var $0 = 0, $1 = 0, $10 = 0.0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0.0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0.0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0.0, $25 = 0, $26 = 0.0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__first_$i$i$i$i = 0, $__nd$0$be$in$i = 0, $__nd$0$be$in$i43 = 0, $__nd$0$i = 0, $__nd$0$i31 = 0, $__parent_$i$i$i = 0, $__parent_$i$i$i$i$i$i = 0, $__prior$sroa$0$0 = 0, $__right_ = 0, $__right_$i$i$i = 0;
 var $__value_$i = 0, $__value_$i18 = 0, $__value_$i32 = 0, $__value_$i54 = 0, $__value_$i63 = 0, $__x$addr$0$i$i = 0, $__x$addr$0$i$i$i = 0, $__x$addr$0$i$i$i$i$i = 0, $__x$addr$0$i$i$i$i$i$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i$i = 0, $cmp$i$i$i$i$i = 0, $cmp$i$i$i$i$i$i = 0, $cmp$i$i39 = 0, $cmp$i$i55 = 0, $cmp$i16$i = 0, $cmp$i16$i33 = 0, $cmp$i17 = 0;
 var $cmp$i20 = 0, $cmp$i24 = 0, $cmp$i29 = 0, $cmp$i4$i$i = 0, $cmp$i5$i$i$i$i$i = 0, $cmp$i52 = 0, $cmp$i59 = 0, $cmp$i61 = 0, $cmp$i67 = 0, $cmp11$i = 0, $cmp11$i36 = 0, $cmp24$i = 0, $cmp24$i41 = 0, $retval$0$i$i = 0, $retval$0$i$i$i$i$i = 0, $retval$2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__first_$i$i$i$i = ((($this)) + 4|0);
 $0 = load4($__hint);
 $cmp$i67 = ($0|0)==($__first_$i$i$i$i|0);
 $1 = $0;
 if (!($cmp$i67)) {
  $__value_$i63 = ((($0)) + 16|0);
  $2 = loadd($__v);
  $3 = loadd($__value_$i63);
  $cmp$i61 = $2 < $3;
  if (!($cmp$i61)) {
   $cmp$i24 = $3 < $2;
   if (!($cmp$i24)) {
    store4($__parent,$1);
    $retval$2 = $__parent;
    return ($retval$2|0);
   }
   $19 = ((($0)) + 4|0);
   $20 = load4($19);
   $cmp$i$i$i$i$i = ($20|0)==(0|0);
   if ($cmp$i$i$i$i$i) {
    $__x$addr$0$i$i$i$i$i = $0;
    while(1) {
     $__parent_$i$i$i$i$i$i = ((($__x$addr$0$i$i$i$i$i)) + 8|0);
     $22 = load4($__parent_$i$i$i$i$i$i);
     $23 = load4($22);
     $cmp$i$i$i$i$i$i = ($23|0)==($__x$addr$0$i$i$i$i$i|0);
     if ($cmp$i$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $22;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i = $22;
     }
    }
   } else {
    $__x$addr$0$i$i$i$i$i$i = $20;
    while(1) {
     $21 = load4($__x$addr$0$i$i$i$i$i$i);
     $cmp$i5$i$i$i$i$i = ($21|0)==(0|0);
     if ($cmp$i5$i$i$i$i$i) {
      $retval$0$i$i$i$i$i = $__x$addr$0$i$i$i$i$i$i;
      break;
     } else {
      $__x$addr$0$i$i$i$i$i$i = $21;
     }
    }
   }
   $cmp$i20 = ($retval$0$i$i$i$i$i|0)==($__first_$i$i$i$i|0);
   if (!($cmp$i20)) {
    $__value_$i18 = ((($retval$0$i$i$i$i$i)) + 16|0);
    $24 = loadd($__value_$i18);
    $cmp$i17 = $2 < $24;
    if (!($cmp$i17)) {
     $25 = load4($__first_$i$i$i$i);
     $cmp$i = ($25|0)==(0|0);
     if ($cmp$i) {
      store4($__parent,$__first_$i$i$i$i);
      $retval$2 = $__first_$i$i$i$i;
      return ($retval$2|0);
     } else {
      $__nd$0$i = $25;
     }
     while(1) {
      $__value_$i = ((($__nd$0$i)) + 16|0);
      $26 = loadd($__value_$i);
      $cmp$i16$i = $2 < $26;
      if ($cmp$i16$i) {
       $27 = load4($__nd$0$i);
       $cmp11$i = ($27|0)==(0|0);
       if ($cmp11$i) {
        label = 33;
        break;
       } else {
        $__nd$0$be$in$i = $27;
       }
      } else {
       $cmp$i$i = $26 < $2;
       if (!($cmp$i$i)) {
        label = 38;
        break;
       }
       $28 = ((($__nd$0$i)) + 4|0);
       $29 = load4($28);
       $cmp24$i = ($29|0)==(0|0);
       if ($cmp24$i) {
        label = 37;
        break;
       } else {
        $__nd$0$be$in$i = $29;
       }
      }
      $__nd$0$i = $__nd$0$be$in$i;
     }
     if ((label|0) == 33) {
      store4($__parent,$__nd$0$i);
      $retval$2 = $__nd$0$i;
      return ($retval$2|0);
     }
     else if ((label|0) == 37) {
      store4($__parent,$__nd$0$i);
      $retval$2 = $28;
      return ($retval$2|0);
     }
     else if ((label|0) == 38) {
      store4($__parent,$__nd$0$i);
      $retval$2 = $__parent;
      return ($retval$2|0);
     }
    }
   }
   if ($cmp$i$i$i$i$i) {
    store4($__parent,$0);
    $retval$2 = $19;
    return ($retval$2|0);
   } else {
    store4($__parent,$retval$0$i$i$i$i$i);
    $retval$2 = $retval$0$i$i$i$i$i;
    return ($retval$2|0);
   }
  }
 }
 $4 = load4($this);
 $cmp$i59 = ($0|0)==($4|0);
 if ($cmp$i59) {
  $__prior$sroa$0$0 = $1;
 } else {
  $5 = load4($0);
  $cmp$i$i55 = ($5|0)==(0|0);
  if ($cmp$i$i55) {
   $__x$addr$0$i$i = $0;
   while(1) {
    $__parent_$i$i$i = ((($__x$addr$0$i$i)) + 8|0);
    $7 = load4($__parent_$i$i$i);
    $8 = load4($7);
    $cmp$i$i$i = ($8|0)==($__x$addr$0$i$i|0);
    if ($cmp$i$i$i) {
     $__x$addr$0$i$i = $7;
    } else {
     $retval$0$i$i = $7;
     break;
    }
   }
  } else {
   $__x$addr$0$i$i$i = $5;
   while(1) {
    $__right_$i$i$i = ((($__x$addr$0$i$i$i)) + 4|0);
    $6 = load4($__right_$i$i$i);
    $cmp$i4$i$i = ($6|0)==(0|0);
    if ($cmp$i4$i$i) {
     $retval$0$i$i = $__x$addr$0$i$i$i;
     break;
    } else {
     $__x$addr$0$i$i$i = $6;
    }
   }
  }
  $9 = $retval$0$i$i;
  $__value_$i54 = ((($retval$0$i$i)) + 16|0);
  $10 = loadd($__value_$i54);
  $11 = loadd($__v);
  $cmp$i52 = $10 < $11;
  if ($cmp$i52) {
   $__prior$sroa$0$0 = $9;
  } else {
   $14 = load4($__first_$i$i$i$i);
   $cmp$i29 = ($14|0)==(0|0);
   if ($cmp$i29) {
    store4($__parent,$__first_$i$i$i$i);
    $retval$2 = $__first_$i$i$i$i;
    return ($retval$2|0);
   } else {
    $__nd$0$i31 = $14;
   }
   while(1) {
    $__value_$i32 = ((($__nd$0$i31)) + 16|0);
    $15 = loadd($__value_$i32);
    $cmp$i16$i33 = $11 < $15;
    if ($cmp$i16$i33) {
     $16 = load4($__nd$0$i31);
     $cmp11$i36 = ($16|0)==(0|0);
     if ($cmp11$i36) {
      label = 14;
      break;
     } else {
      $__nd$0$be$in$i43 = $16;
     }
    } else {
     $cmp$i$i39 = $15 < $11;
     if (!($cmp$i$i39)) {
      label = 19;
      break;
     }
     $17 = ((($__nd$0$i31)) + 4|0);
     $18 = load4($17);
     $cmp24$i41 = ($18|0)==(0|0);
     if ($cmp24$i41) {
      label = 18;
      break;
     } else {
      $__nd$0$be$in$i43 = $18;
     }
    }
    $__nd$0$i31 = $__nd$0$be$in$i43;
   }
   if ((label|0) == 14) {
    store4($__parent,$__nd$0$i31);
    $retval$2 = $__nd$0$i31;
    return ($retval$2|0);
   }
   else if ((label|0) == 18) {
    store4($__parent,$__nd$0$i31);
    $retval$2 = $17;
    return ($retval$2|0);
   }
   else if ((label|0) == 19) {
    store4($__parent,$__nd$0$i31);
    $retval$2 = $__parent;
    return ($retval$2|0);
   }
  }
 }
 $12 = load4($0);
 $cmp = ($12|0)==(0|0);
 if ($cmp) {
  store4($__parent,$0);
  $retval$2 = $0;
  return ($retval$2|0);
 } else {
  $13 = $__prior$sroa$0$0;
  store4($__parent,$13);
  $__right_ = ((($13)) + 4|0);
  $retval$2 = $__right_;
  return ($retval$2|0);
 }
 return (0)|0;
}
function __ZNSt3__227__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5_($__root,$__x) {
 $__root = $__root|0;
 $__x = $__x|0;
 var $$pre = 0, $$pre102 = 0, $$pre104 = 0, $$pre105 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__is_black_ = 0, $__is_black_10 = 0, $__is_black_17 = 0, $__is_black_2 = 0, $__is_black_24 = 0, $__is_black_26 = 0, $__is_black_41 = 0, $__is_black_48 = 0, $__is_black_57 = 0, $__is_black_59 = 0, $__parent_ = 0, $__parent_$i = 0, $__parent_$i48 = 0, $__parent_$i52 = 0, $__parent_$i67 = 0, $__parent_$i80 = 0;
 var $__parent_6$i = 0, $__parent_6$i69 = 0, $__parent_7$i = 0, $__parent_7$i55 = 0, $__parent_7$i70 = 0, $__parent_7$i83 = 0, $__right_$i = 0, $__right_$i50 = 0, $__right_$i65 = 0, $__right_$i77 = 0, $__x$addr$097 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i57 = 0, $cmp$i$i72 = 0, $cmp$i$i85 = 0, $cmp$i47 = 0, $cmp$i51 = 0, $cmp$i63 = 0;
 var $cmp$i66 = 0, $cmp$i79 = 0, $cmp$i92 = 0, $cmp1 = 0, $cmp16 = 0, $cmp39 = 0, $cmp47 = 0, $cmp9 = 0, $frombool = 0, $frombool18 = 0, $frombool49 = 0, $lnot = 0, $tobool11 = 0, $tobool42 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($__x|0)==($__root|0);
 $__is_black_ = ((($__x)) + 12|0);
 $frombool = $cmp&1;
 store1($__is_black_,$frombool);
 if ($cmp) {
  return;
 } else {
  $__x$addr$097 = $__x;
 }
 while(1) {
  $__parent_ = ((($__x$addr$097)) + 8|0);
  $0 = load4($__parent_);
  $__is_black_2 = ((($0)) + 12|0);
  $1 = load1($__is_black_2);
  $lnot = ($1<<24>>24)==(0);
  if (!($lnot)) {
   label = 37;
   break;
  }
  $__parent_$i = ((($0)) + 8|0);
  $2 = load4($__parent_$i);
  $3 = load4($2);
  $cmp$i = ($3|0)==($0|0);
  if ($cmp$i) {
   $4 = ((($2)) + 4|0);
   $5 = load4($4);
   $cmp9 = ($5|0)==(0|0);
   if ($cmp9) {
    label = 8;
    break;
   }
   $__is_black_10 = ((($5)) + 12|0);
   $6 = load1($__is_black_10);
   $tobool11 = ($6<<24>>24)==(0);
   if (!($tobool11)) {
    label = 8;
    break;
   }
   store1($__is_black_2,1);
   $cmp16 = ($2|0)==($__root|0);
   $__is_black_17 = ((($2)) + 12|0);
   $frombool18 = $cmp16&1;
   store1($__is_black_17,$frombool18);
   store1($__is_black_10,1);
  } else {
   $cmp39 = ($3|0)==(0|0);
   if ($cmp39) {
    label = 24;
    break;
   }
   $__is_black_41 = ((($3)) + 12|0);
   $23 = load1($__is_black_41);
   $tobool42 = ($23<<24>>24)==(0);
   if (!($tobool42)) {
    label = 24;
    break;
   }
   store1($__is_black_2,1);
   $cmp47 = ($2|0)==($__root|0);
   $__is_black_48 = ((($2)) + 12|0);
   $frombool49 = $cmp47&1;
   store1($__is_black_48,$frombool49);
   store1($__is_black_41,1);
  }
  $cmp1 = ($2|0)==($__root|0);
  if ($cmp1) {
   label = 37;
   break;
  } else {
   $__x$addr$097 = $2;
  }
 }
 if ((label|0) == 8) {
  $7 = load4($0);
  $cmp$i92 = ($7|0)==($__x$addr$097|0);
  if ($cmp$i92) {
   $15 = $0;$16 = $2;
  } else {
   $8 = $2;
   $__right_$i77 = ((($0)) + 4|0);
   $9 = load4($__right_$i77);
   $10 = load4($9);
   store4($__right_$i77,$10);
   $cmp$i79 = ($10|0)==(0|0);
   if ($cmp$i79) {
    $11 = $8;
   } else {
    $__parent_$i80 = ((($10)) + 8|0);
    store4($__parent_$i80,$0);
    $$pre104 = load4($__parent_$i);
    $11 = $$pre104;
   }
   $__parent_7$i83 = ((($9)) + 8|0);
   store4($__parent_7$i83,$11);
   $12 = load4($__parent_$i);
   $13 = load4($12);
   $cmp$i$i85 = ($13|0)==($0|0);
   if ($cmp$i$i85) {
    store4($12,$9);
   } else {
    $14 = ((($12)) + 4|0);
    store4($14,$9);
   }
   store4($9,$0);
   store4($__parent_$i,$9);
   $$pre105 = load4($__parent_7$i83);
   $15 = $9;$16 = $$pre105;
  }
  $__is_black_24 = ((($15)) + 12|0);
  store1($__is_black_24,1);
  $__is_black_26 = ((($16)) + 12|0);
  store1($__is_black_26,0);
  $17 = load4($16);
  $__right_$i65 = ((($17)) + 4|0);
  $18 = load4($__right_$i65);
  store4($16,$18);
  $cmp$i66 = ($18|0)==(0|0);
  if (!($cmp$i66)) {
   $__parent_$i67 = ((($18)) + 8|0);
   store4($__parent_$i67,$16);
  }
  $__parent_6$i69 = ((($16)) + 8|0);
  $19 = load4($__parent_6$i69);
  $__parent_7$i70 = ((($17)) + 8|0);
  store4($__parent_7$i70,$19);
  $20 = load4($__parent_6$i69);
  $21 = load4($20);
  $cmp$i$i72 = ($21|0)==($16|0);
  if ($cmp$i$i72) {
   store4($20,$17);
  } else {
   $22 = ((($20)) + 4|0);
   store4($22,$17);
  }
  store4($__right_$i65,$16);
  store4($__parent_6$i69,$17);
  return;
 }
 else if ((label|0) == 24) {
  $24 = load4($0);
  $cmp$i63 = ($24|0)==($__x$addr$097|0);
  if ($cmp$i63) {
   $25 = $2;
   $26 = load4($0);
   $__right_$i50 = ((($26)) + 4|0);
   $27 = load4($__right_$i50);
   store4($0,$27);
   $cmp$i51 = ($27|0)==(0|0);
   if ($cmp$i51) {
    $28 = $25;
   } else {
    $__parent_$i52 = ((($27)) + 8|0);
    store4($__parent_$i52,$0);
    $$pre = load4($__parent_$i);
    $28 = $$pre;
   }
   $__parent_7$i55 = ((($26)) + 8|0);
   store4($__parent_7$i55,$28);
   $29 = load4($__parent_$i);
   $30 = load4($29);
   $cmp$i$i57 = ($30|0)==($0|0);
   if ($cmp$i$i57) {
    store4($29,$26);
   } else {
    $31 = ((($29)) + 4|0);
    store4($31,$26);
   }
   store4($__right_$i50,$0);
   store4($__parent_$i,$26);
   $$pre102 = load4($__parent_7$i55);
   $32 = $26;$33 = $$pre102;
  } else {
   $32 = $0;$33 = $2;
  }
  $__is_black_57 = ((($32)) + 12|0);
  store1($__is_black_57,1);
  $__is_black_59 = ((($33)) + 12|0);
  store1($__is_black_59,0);
  $__right_$i = ((($33)) + 4|0);
  $34 = load4($__right_$i);
  $35 = load4($34);
  store4($__right_$i,$35);
  $cmp$i47 = ($35|0)==(0|0);
  if (!($cmp$i47)) {
   $__parent_$i48 = ((($35)) + 8|0);
   store4($__parent_$i48,$33);
  }
  $__parent_6$i = ((($33)) + 8|0);
  $36 = load4($__parent_6$i);
  $__parent_7$i = ((($34)) + 8|0);
  store4($__parent_7$i,$36);
  $37 = load4($__parent_6$i);
  $38 = load4($37);
  $cmp$i$i = ($38|0)==($33|0);
  if ($cmp$i$i) {
   store4($37,$34);
  } else {
   $39 = ((($37)) + 4|0);
   store4($39,$34);
  }
  store4($34,$33);
  store4($__parent_6$i,$34);
  return;
 }
 else if ((label|0) == 37) {
  return;
 }
}
function __ZNSt3__213__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5_($__root,$__z) {
 $__root = $__root|0;
 $__z = $__z|0;
 var $$cast191 = 0, $$lcssa = 0, $$pre = 0, $$pre203 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $9 = 0, $__is_black_ = 0, $__is_black_113 = 0, $__is_black_122 = 0, $__is_black_141 = 0, $__is_black_154 = 0, $__is_black_157 = 0, $__is_black_161 = 0;
 var $__is_black_164 = 0, $__is_black_186 = 0, $__is_black_190 = 0, $__is_black_191 = 0, $__is_black_195 = 0, $__is_black_197 = 0, $__is_black_202 = 0, $__is_black_206 = 0, $__is_black_211 = 0, $__is_black_230 = 0, $__is_black_243 = 0, $__is_black_246 = 0, $__is_black_248 = 0, $__is_black_275 = 0, $__is_black_279 = 0, $__is_black_280 = 0, $__is_black_284 = 0, $__is_black_286 = 0, $__is_black_291 = 0, $__is_black_88 = 0;
 var $__parent_$i = 0, $__parent_$i110 = 0, $__parent_$i119 = 0, $__parent_$i125 = 0, $__parent_$i138 = 0, $__parent_$i151 = 0, $__parent_$i161 = 0, $__parent_$i167 = 0, $__parent_$i177 = 0, $__parent_158 = 0, $__parent_194 = 0, $__parent_247 = 0, $__parent_283 = 0, $__parent_41 = 0, $__parent_59 = 0, $__parent_6$i = 0, $__parent_6$i112 = 0, $__parent_6$i140 = 0, $__parent_6$i153 = 0, $__parent_7$i = 0;
 var $__parent_7$i113 = 0, $__parent_7$i128 = 0, $__parent_7$i141 = 0, $__parent_7$i154 = 0, $__parent_7$i170 = 0, $__parent_72 = 0, $__parent_86 = 0, $__right_ = 0, $__right_$i = 0, $__right_$i123 = 0, $__right_$i135 = 0, $__right_$i149 = 0, $__right_129 = 0, $__right_144 = 0, $__right_176$phi$trans$insert = 0, $__right_213 = 0, $__right_23 = 0, $__right_233 = 0, $__right_278 = 0, $__right_67 = 0;
 var $__right_73 = 0, $__root$addr$0 = 0, $__root$addr$1 = 0, $__root$addr$2 = 0, $__root$addr$2$be = 0, $__root$addr$4 = 0, $__root$addr$6 = 0, $__w$0 = 0, $__w$1 = 0, $__w$1$__root$addr$2 = 0, $__w$1$__root$addr$2106 = 0, $__w$1$be = 0, $__w$1$be$in = 0, $__w$2 = 0, $__w$3 = 0, $__w$4 = 0, $__w$5 = 0, $__x$addr$0$i$i = 0, $cmp = 0, $cmp$i = 0;
 var $cmp$i$i = 0, $cmp$i$i115 = 0, $cmp$i$i130 = 0, $cmp$i$i143 = 0, $cmp$i$i156 = 0, $cmp$i$i172 = 0, $cmp$i109 = 0, $cmp$i121 = 0, $cmp$i124 = 0, $cmp$i137 = 0, $cmp$i150 = 0, $cmp$i163 = 0, $cmp$i166 = 0, $cmp$i179 = 0, $cmp$i182 = 0, $cmp$i185 = 0, $cmp$i5$i = 0, $cmp103 = 0, $cmp125 = 0, $cmp138 = 0;
 var $cmp151 = 0, $cmp159 = 0, $cmp183 = 0, $cmp19 = 0, $cmp214 = 0, $cmp227 = 0, $cmp240 = 0, $cmp251 = 0, $cmp40 = 0, $cmp46 = 0, $cmp57 = 0, $cmp83 = 0, $cmp9 = 0, $cmp92 = 0, $cond = 0, $cond$__root$addr$0 = 0, $cond174$in = 0, $cond25 = 0, $cond25$in = 0, $cond263$in = 0;
 var $or$cond = 0, $or$cond190 = 0, $tobool = 0, $tobool142 = 0, $tobool155 = 0, $tobool162 = 0, $tobool187 = 0, $tobool207 = 0, $tobool231 = 0, $tobool244 = 0, $tobool249 = 0, $tobool276 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4($__z);
 $cmp = ($0|0)==(0|0);
 if ($cmp) {
  $3 = 0;$cond = $__z;
 } else {
  $__right_ = ((($__z)) + 4|0);
  $1 = load4($__right_);
  $cmp9 = ($1|0)==(0|0);
  if ($cmp9) {
   $3 = $0;$cond = $__z;
  } else {
   $__x$addr$0$i$i = $1;
   while(1) {
    $2 = load4($__x$addr$0$i$i);
    $cmp$i5$i = ($2|0)==(0|0);
    if ($cmp$i5$i) {
     $3 = 0;$cond = $__x$addr$0$i$i;
     break;
    } else {
     $__x$addr$0$i$i = $2;
    }
   }
  }
 }
 $cmp19 = ($3|0)==(0|0);
 $__right_23 = ((($cond)) + 4|0);
 $cond25$in = $cmp19 ? $__right_23 : $cond;
 $cond25 = load4($cond25$in);
 $cmp40 = ($cond25|0)==(0|0);
 $$pre203 = ((($cond)) + 8|0);
 if (!($cmp40)) {
  $4 = load4($$pre203);
  $__parent_41 = ((($cond25)) + 8|0);
  store4($__parent_41,$4);
 }
 $5 = load4($$pre203);
 $6 = load4($5);
 $cmp$i185 = ($6|0)==($cond|0);
 if ($cmp$i185) {
  store4($5,$cond25);
  $cmp46 = ($cond|0)==($__root|0);
  if ($cmp46) {
   $__root$addr$0 = $cond25;$__w$0 = 0;
  } else {
   $7 = ((($5)) + 4|0);
   $8 = load4($7);
   $__root$addr$0 = $__root;$__w$0 = $8;
  }
 } else {
  $9 = ((($5)) + 4|0);
  store4($9,$cond25);
  $__root$addr$0 = $__root;$__w$0 = $6;
 }
 $__is_black_ = ((($cond)) + 12|0);
 $10 = load1($__is_black_);
 $tobool = ($10<<24>>24)==(0);
 $cmp57 = ($cond|0)==($__z|0);
 if ($cmp57) {
  $__root$addr$1 = $__root$addr$0;
 } else {
  $__parent_59 = ((($__z)) + 8|0);
  $11 = load4($__parent_59);
  store4($$pre203,$11);
  $12 = load4($__parent_59);
  $13 = load4($12);
  $cmp$i182 = ($13|0)==($__z|0);
  $$cast191 = $11;
  if ($cmp$i182) {
   store4($$cast191,$cond);
  } else {
   $__right_67 = ((($$cast191)) + 4|0);
   store4($__right_67,$cond);
  }
  $14 = load4($__z);
  store4($cond,$14);
  $__parent_72 = ((($14)) + 8|0);
  store4($__parent_72,$cond);
  $__right_73 = ((($__z)) + 4|0);
  $15 = load4($__right_73);
  store4($__right_23,$15);
  $cmp83 = ($15|0)==(0|0);
  if (!($cmp83)) {
   $__parent_86 = ((($15)) + 8|0);
   store4($__parent_86,$cond);
  }
  $__is_black_88 = ((($__z)) + 12|0);
  $16 = load1($__is_black_88);
  store1($__is_black_,$16);
  $cmp92 = ($__root$addr$0|0)==($__z|0);
  $cond$__root$addr$0 = $cmp92 ? $cond : $__root$addr$0;
  $__root$addr$1 = $cond$__root$addr$0;
 }
 $cmp103 = ($__root$addr$1|0)==(0|0);
 $or$cond190 = $tobool | $cmp103;
 if ($or$cond190) {
  return;
 }
 if ($cmp40) {
  $__root$addr$2 = $__root$addr$1;$__w$1 = $__w$0;
 } else {
  $__is_black_113 = ((($cond25)) + 12|0);
  store1($__is_black_113,1);
  return;
 }
 while(1) {
  $__parent_$i177 = ((($__w$1)) + 8|0);
  $17 = load4($__parent_$i177);
  $18 = load4($17);
  $cmp$i179 = ($18|0)==($__w$1|0);
  $__is_black_206 = ((($__w$1)) + 12|0);
  $19 = load1($__is_black_206);
  $tobool207 = ($19<<24>>24)!=(0);
  if ($cmp$i179) {
   if ($tobool207) {
    $__root$addr$6 = $__root$addr$2;$__w$4 = $__w$1;
   } else {
    store1($__is_black_206,1);
    $__is_black_211 = ((($17)) + 12|0);
    store1($__is_black_211,0);
    $55 = load4($17);
    $__right_$i123 = ((($55)) + 4|0);
    $56 = load4($__right_$i123);
    store4($17,$56);
    $cmp$i124 = ($56|0)==(0|0);
    if (!($cmp$i124)) {
     $__parent_$i125 = ((($56)) + 8|0);
     store4($__parent_$i125,$17);
    }
    $57 = ((($17)) + 8|0);
    $58 = load4($57);
    $__parent_7$i128 = ((($55)) + 8|0);
    store4($__parent_7$i128,$58);
    $59 = load4($57);
    $60 = load4($59);
    $cmp$i$i130 = ($60|0)==($17|0);
    if ($cmp$i$i130) {
     store4($59,$55);
    } else {
     $61 = ((($59)) + 4|0);
     store4($61,$55);
    }
    store4($__right_$i123,$17);
    store4($57,$55);
    $__right_213 = ((($__w$1)) + 4|0);
    $62 = load4($__right_213);
    $cmp214 = ($__root$addr$2|0)==($62|0);
    $__w$1$__root$addr$2106 = $cmp214 ? $__w$1 : $__root$addr$2;
    $63 = load4($62);
    $__root$addr$6 = $__w$1$__root$addr$2106;$__w$4 = $63;
   }
   $64 = load4($__w$4);
   $cmp227 = ($64|0)==(0|0);
   if (!($cmp227)) {
    $__is_black_230 = ((($64)) + 12|0);
    $65 = load1($__is_black_230);
    $tobool231 = ($65<<24>>24)==(0);
    if ($tobool231) {
     label = 66;
     break;
    }
   }
   $__right_233 = ((($__w$4)) + 4|0);
   $66 = load4($__right_233);
   $cmp240 = ($66|0)==(0|0);
   if (!($cmp240)) {
    $__is_black_243 = ((($66)) + 12|0);
    $67 = load1($__is_black_243);
    $tobool244 = ($67<<24>>24)==(0);
    if ($tobool244) {
     label = 65;
     break;
    }
   }
   $__is_black_246 = ((($__w$4)) + 12|0);
   store1($__is_black_246,0);
   $__parent_247 = ((($__w$4)) + 8|0);
   $68 = load4($__parent_247);
   $__is_black_248 = ((($68)) + 12|0);
   $69 = load1($__is_black_248);
   $tobool249 = ($69<<24>>24)==(0);
   $cmp251 = ($68|0)==($__root$addr$6|0);
   $or$cond = $cmp251 | $tobool249;
   if ($or$cond) {
    label = 62;
    break;
   }
   $__parent_$i119 = ((($68)) + 8|0);
   $70 = load4($__parent_$i119);
   $71 = load4($70);
   $cmp$i121 = ($71|0)==($68|0);
   $72 = ((($70)) + 4|0);
   $cond263$in = $cmp$i121 ? $72 : $70;
   $__root$addr$2$be = $__root$addr$6;$__w$1$be$in = $cond263$in;
  } else {
   if ($tobool207) {
    $__root$addr$4 = $__root$addr$2;$__w$2 = $__w$1;
   } else {
    store1($__is_black_206,1);
    $__is_black_122 = ((($17)) + 12|0);
    store1($__is_black_122,0);
    $20 = ((($17)) + 4|0);
    $21 = load4($20);
    $22 = load4($21);
    store4($20,$22);
    $cmp$i166 = ($22|0)==(0|0);
    if (!($cmp$i166)) {
     $__parent_$i167 = ((($22)) + 8|0);
     store4($__parent_$i167,$17);
    }
    $23 = ((($17)) + 8|0);
    $24 = load4($23);
    $__parent_7$i170 = ((($21)) + 8|0);
    store4($__parent_7$i170,$24);
    $25 = load4($23);
    $26 = load4($25);
    $cmp$i$i172 = ($26|0)==($17|0);
    if ($cmp$i$i172) {
     store4($25,$21);
    } else {
     $27 = ((($25)) + 4|0);
     store4($27,$21);
    }
    store4($21,$17);
    store4($23,$21);
    $28 = load4($__w$1);
    $cmp125 = ($__root$addr$2|0)==($28|0);
    $__w$1$__root$addr$2 = $cmp125 ? $__w$1 : $__root$addr$2;
    $__right_129 = ((($28)) + 4|0);
    $29 = load4($__right_129);
    $__root$addr$4 = $__w$1$__root$addr$2;$__w$2 = $29;
   }
   $30 = load4($__w$2);
   $cmp138 = ($30|0)==(0|0);
   if (!($cmp138)) {
    $__is_black_141 = ((($30)) + 12|0);
    $31 = load1($__is_black_141);
    $tobool142 = ($31<<24>>24)==(0);
    if ($tobool142) {
     label = 36;
     break;
    }
   }
   $__right_144 = ((($__w$2)) + 4|0);
   $32 = load4($__right_144);
   $cmp151 = ($32|0)==(0|0);
   if (!($cmp151)) {
    $__is_black_154 = ((($32)) + 12|0);
    $33 = load1($__is_black_154);
    $tobool155 = ($33<<24>>24)==(0);
    if ($tobool155) {
     $39 = $32;
     label = 37;
     break;
    }
   }
   $__is_black_157 = ((($__w$2)) + 12|0);
   store1($__is_black_157,0);
   $__parent_158 = ((($__w$2)) + 8|0);
   $34 = load4($__parent_158);
   $cmp159 = ($34|0)==($__root$addr$4|0);
   if ($cmp159) {
    $$lcssa = $__root$addr$4;
    label = 34;
    break;
   }
   $__is_black_161 = ((($34)) + 12|0);
   $35 = load1($__is_black_161);
   $tobool162 = ($35<<24>>24)==(0);
   if ($tobool162) {
    $$lcssa = $34;
    label = 34;
    break;
   }
   $__parent_$i161 = ((($34)) + 8|0);
   $36 = load4($__parent_$i161);
   $37 = load4($36);
   $cmp$i163 = ($37|0)==($34|0);
   $38 = ((($36)) + 4|0);
   $cond174$in = $cmp$i163 ? $38 : $36;
   $__root$addr$2$be = $__root$addr$4;$__w$1$be$in = $cond174$in;
  }
  $__w$1$be = load4($__w$1$be$in);
  $__root$addr$2 = $__root$addr$2$be;$__w$1 = $__w$1$be;
 }
 if ((label|0) == 34) {
  $__is_black_164 = ((($$lcssa)) + 12|0);
  store1($__is_black_164,1);
  return;
 }
 else if ((label|0) == 36) {
  $__right_176$phi$trans$insert = ((($__w$2)) + 4|0);
  $$pre = load4($__right_176$phi$trans$insert);
  $cmp183 = ($$pre|0)==(0|0);
  if ($cmp183) {
   label = 38;
  } else {
   $39 = $$pre;
   label = 37;
  }
 }
 else if ((label|0) == 62) {
  store1($__is_black_248,1);
  return;
 }
 else if ((label|0) == 65) {
  if ($cmp227) {
   label = 67;
  } else {
   label = 66;
  }
 }
 if ((label|0) == 37) {
  $__is_black_186 = ((($39)) + 12|0);
  $40 = load1($__is_black_186);
  $tobool187 = ($40<<24>>24)==(0);
  if ($tobool187) {
   $48 = $39;$__w$3 = $__w$2;
   label = 44;
  } else {
   label = 38;
  }
 }
 else if ((label|0) == 66) {
  $__is_black_275 = ((($64)) + 12|0);
  $73 = load1($__is_black_275);
  $tobool276 = ($73<<24>>24)==(0);
  if ($tobool276) {
   $82 = $64;$__w$5 = $__w$4;
   label = 73;
  } else {
   label = 67;
  }
 }
 if ((label|0) == 38) {
  $__is_black_190 = ((($30)) + 12|0);
  store1($__is_black_190,1);
  $__is_black_191 = ((($__w$2)) + 12|0);
  store1($__is_black_191,0);
  $__right_$i149 = ((($30)) + 4|0);
  $41 = load4($__right_$i149);
  store4($__w$2,$41);
  $cmp$i150 = ($41|0)==(0|0);
  if (!($cmp$i150)) {
   $__parent_$i151 = ((($41)) + 8|0);
   store4($__parent_$i151,$__w$2);
  }
  $__parent_6$i153 = ((($__w$2)) + 8|0);
  $42 = load4($__parent_6$i153);
  $__parent_7$i154 = ((($30)) + 8|0);
  store4($__parent_7$i154,$42);
  $43 = load4($__parent_6$i153);
  $44 = load4($43);
  $cmp$i$i156 = ($44|0)==($__w$2|0);
  if ($cmp$i$i156) {
   store4($43,$30);
  } else {
   $45 = ((($43)) + 4|0);
   store4($45,$30);
  }
  store4($__right_$i149,$__w$2);
  store4($__parent_6$i153,$30);
  $48 = $__w$2;$__w$3 = $30;
  label = 44;
 }
 else if ((label|0) == 67) {
  $__right_278 = ((($__w$4)) + 4|0);
  $74 = load4($__right_278);
  $__is_black_279 = ((($74)) + 12|0);
  store1($__is_black_279,1);
  $__is_black_280 = ((($__w$4)) + 12|0);
  store1($__is_black_280,0);
  $75 = load4($74);
  store4($__right_278,$75);
  $cmp$i109 = ($75|0)==(0|0);
  if (!($cmp$i109)) {
   $__parent_$i110 = ((($75)) + 8|0);
   store4($__parent_$i110,$__w$4);
  }
  $__parent_6$i112 = ((($__w$4)) + 8|0);
  $76 = load4($__parent_6$i112);
  $__parent_7$i113 = ((($74)) + 8|0);
  store4($__parent_7$i113,$76);
  $77 = load4($__parent_6$i112);
  $78 = load4($77);
  $cmp$i$i115 = ($78|0)==($__w$4|0);
  if ($cmp$i$i115) {
   store4($77,$74);
  } else {
   $79 = ((($77)) + 4|0);
   store4($79,$74);
  }
  store4($74,$__w$4);
  store4($__parent_6$i112,$74);
  $82 = $__w$4;$__w$5 = $74;
  label = 73;
 }
 if ((label|0) == 44) {
  $__parent_194 = ((($__w$3)) + 8|0);
  $46 = load4($__parent_194);
  $__is_black_195 = ((($46)) + 12|0);
  $47 = load1($__is_black_195);
  $__is_black_197 = ((($__w$3)) + 12|0);
  store1($__is_black_197,$47);
  store1($__is_black_195,1);
  $__is_black_202 = ((($48)) + 12|0);
  store1($__is_black_202,1);
  $__right_$i135 = ((($46)) + 4|0);
  $49 = load4($__right_$i135);
  $50 = load4($49);
  store4($__right_$i135,$50);
  $cmp$i137 = ($50|0)==(0|0);
  if (!($cmp$i137)) {
   $__parent_$i138 = ((($50)) + 8|0);
   store4($__parent_$i138,$46);
  }
  $__parent_6$i140 = ((($46)) + 8|0);
  $51 = load4($__parent_6$i140);
  $__parent_7$i141 = ((($49)) + 8|0);
  store4($__parent_7$i141,$51);
  $52 = load4($__parent_6$i140);
  $53 = load4($52);
  $cmp$i$i143 = ($53|0)==($46|0);
  if ($cmp$i$i143) {
   store4($52,$49);
  } else {
   $54 = ((($52)) + 4|0);
   store4($54,$49);
  }
  store4($49,$46);
  store4($__parent_6$i140,$49);
  return;
 }
 else if ((label|0) == 73) {
  $__parent_283 = ((($__w$5)) + 8|0);
  $80 = load4($__parent_283);
  $__is_black_284 = ((($80)) + 12|0);
  $81 = load1($__is_black_284);
  $__is_black_286 = ((($__w$5)) + 12|0);
  store1($__is_black_286,$81);
  store1($__is_black_284,1);
  $__is_black_291 = ((($82)) + 12|0);
  store1($__is_black_291,1);
  $83 = load4($80);
  $__right_$i = ((($83)) + 4|0);
  $84 = load4($__right_$i);
  store4($80,$84);
  $cmp$i = ($84|0)==(0|0);
  if (!($cmp$i)) {
   $__parent_$i = ((($84)) + 8|0);
   store4($__parent_$i,$80);
  }
  $__parent_6$i = ((($80)) + 8|0);
  $85 = load4($__parent_6$i);
  $__parent_7$i = ((($83)) + 8|0);
  store4($__parent_7$i,$85);
  $86 = load4($__parent_6$i);
  $87 = load4($86);
  $cmp$i$i = ($87|0)==($80|0);
  if ($cmp$i$i) {
   store4($86,$83);
  } else {
   $88 = ((($86)) + 4|0);
   store4($88,$83);
  }
  store4($__right_$i,$80);
  store4($__parent_6$i,$83);
  return;
 }
}
function __GLOBAL__sub_I_container_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4(4608,0);
 store4((4612),0);
 store4((4616),0);
 (___cxa_atexit((8|0),(4608|0),(___dso_handle|0))|0);
 return;
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $call = (___syscall6(6,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 STACKTOP = sp;return ($call1|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr41 = 0, $add$ptr46 = 0;
 var $buf31 = 0, $buf_size = 0, $call = 0, $call10 = 0, $call7 = 0, $call9 = 0, $cmp = 0, $cmp17 = 0, $cmp22 = 0, $cmp29 = 0, $cmp38 = 0, $cnt$0 = 0, $cnt$1 = 0, $dec = 0, $fd8 = 0, $incdec$ptr = 0, $iov$0 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0;
 var $iov_len24 = 0, $iov_len28 = 0, $iov_len3 = 0, $iov_len50 = 0, $iov_len50$phi$trans$insert = 0, $iovcnt$0 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$0 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub26 = 0, $sub36 = 0, $sub51 = 0, $tobool = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0;
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend19 = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd8 = ((($f)) + 60|0);
 $buf31 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $add;
 while(1) {
  $2 = load4(4620);
  $tobool = ($2|0)==(0|0);
  if ($tobool) {
   $4 = load4($fd8);
   store4($vararg_buffer3,$4);
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   store4($vararg_ptr6,$iov$0);
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   store4($vararg_ptr7,$iovcnt$0);
   $call9 = (___syscall146(146,($vararg_buffer3|0))|0);
   $call10 = (___syscall_ret($call9)|0);
   $cnt$0 = $call10;
  } else {
   _pthread_cleanup_push((9|0),($f|0));
   $3 = load4($fd8);
   store4($vararg_buffer,$3);
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   store4($vararg_ptr1,$iov$0);
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   store4($vararg_ptr2,$iovcnt$0);
   $call = (___syscall146(146,($vararg_buffer|0))|0);
   $call7 = (___syscall_ret($call)|0);
   _pthread_cleanup_pop(0);
   $cnt$0 = $call7;
  }
  $cmp = ($rem$0|0)==($cnt$0|0);
  if ($cmp) {
   label = 6;
   break;
  }
  $cmp17 = ($cnt$0|0)<(0);
  if ($cmp17) {
   label = 8;
   break;
  }
  $sub26 = (($rem$0) - ($cnt$0))|0;
  $iov_len28 = ((($iov$0)) + 4|0);
  $10 = load4($iov_len28);
  $cmp29 = ($cnt$0>>>0)>($10>>>0);
  if ($cmp29) {
   $11 = load4($buf31);
   store4($wbase,$11);
   store4($wpos,$11);
   $sub36 = (($cnt$0) - ($10))|0;
   $incdec$ptr = ((($iov$0)) + 8|0);
   $dec = (($iovcnt$0) + -1)|0;
   $iov_len50$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = load4($iov_len50$phi$trans$insert);
   $14 = $$pre;$cnt$1 = $sub36;$iov$1 = $incdec$ptr;$iovcnt$1 = $dec;
  } else {
   $cmp38 = ($iovcnt$0|0)==(2);
   if ($cmp38) {
    $12 = load4($wbase);
    $add$ptr41 = (($12) + ($cnt$0)|0);
    store4($wbase,$add$ptr41);
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $13 = load4($iov$1);
  $add$ptr46 = (($13) + ($cnt$1)|0);
  store4($iov$1,$add$ptr46);
  $iov_len50 = ((($iov$1)) + 4|0);
  $sub51 = (($14) - ($cnt$1))|0;
  store4($iov_len50,$sub51);
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $sub26;
 }
 if ((label|0) == 6) {
  $5 = load4($buf31);
  $buf_size = ((($f)) + 48|0);
  $6 = load4($buf_size);
  $add$ptr = (($5) + ($6)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $7 = $5;
  store4($wbase,$7);
  store4($wpos,$7);
  $retval$0 = $len;
 }
 else if ((label|0) == 8) {
  $wend19 = ((($f)) + 16|0);
  store4($wend19,0);
  store4($wbase,0);
  store4($wpos,0);
  $8 = load4($f);
  $or = $8 | 32;
  store4($f,$or);
  $cmp22 = ($iovcnt$0|0)==(2);
  if ($cmp22) {
   $retval$0 = 0;
  } else {
   $iov_len24 = ((($iov$0)) + 4|0);
   $9 = load4($iov_len24);
   $sub = (($len) - ($9))|0;
   $retval$0 = $sub;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$ret);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $1 = -1;
 } else {
  $$pre = load4($ret);
  $1 = $$pre;
 }
 STACKTOP = sp;return ($1|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  $call = (___errno_location()|0);
  store4($call,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function ___errno_location() {
 var $0 = 0, $1 = 0, $call$i = 0, $errno_ptr = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(4620);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $retval$0 = 4664;
 } else {
  $call$i = (_pthread_self()|0);
  $errno_ptr = ((($call$i)) + 64|0);
  $1 = load4($errno_ptr);
  $retval$0 = $1;
 }
 return ($retval$0|0);
}
function _cleanup_335($p) {
 $p = $p|0;
 var $0 = 0, $lockcount = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lockcount = ((($p)) + 68|0);
 $0 = load4($lockcount);
 $tobool = ($0|0)==(0);
 if ($tobool) {
  ___unlockfile($p);
 }
 return;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tio = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $vararg_buffer = sp;
 $tio = sp + 12|0;
 $write = ((($f)) + 36|0);
 store4($write,1);
 $0 = load4($f);
 $and = $0 & 64;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $fd = ((($f)) + 60|0);
  $1 = load4($fd);
  store4($vararg_buffer,$1);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21505);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$tio);
  $call = (___syscall54(54,($vararg_buffer|0))|0);
  $tobool2 = ($call|0)==(0);
  if (!($tobool2)) {
   $lbf = ((($f)) + 75|0);
   store1($lbf,-1);
  }
 }
 $call3 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($call3|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _fflush($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call118 = 0, $call16 = 0, $call22 = 0, $call7 = 0, $cmp = 0, $cmp14 = 0, $cmp20 = 0, $cond10 = 0, $cond19 = 0, $f$addr$0 = 0, $f$addr$019 = 0, $f$addr$022 = 0;
 var $lock = 0, $lock13 = 0, $next = 0, $or = 0, $phitmp = 0, $r$0$lcssa = 0, $r$021 = 0, $r$1 = 0, $retval$0 = 0, $tobool = 0, $tobool11 = 0, $tobool1120 = 0, $tobool24 = 0, $tobool5 = 0, $wbase = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($f|0)==(0|0);
 do {
  if ($tobool) {
   $1 = load4(1364);
   $tobool5 = ($1|0)==(0|0);
   if ($tobool5) {
    $cond10 = 0;
   } else {
    $2 = load4(1364);
    $call7 = (_fflush($2)|0);
    $cond10 = $call7;
   }
   ___lock(((4648)|0));
   $f$addr$019 = load4((4644));
   $tobool1120 = ($f$addr$019|0)==(0|0);
   if ($tobool1120) {
    $r$0$lcssa = $cond10;
   } else {
    $f$addr$022 = $f$addr$019;$r$021 = $cond10;
    while(1) {
     $lock13 = ((($f$addr$022)) + 76|0);
     $3 = load4($lock13);
     $cmp14 = ($3|0)>(-1);
     if ($cmp14) {
      $call16 = (___lockfile($f$addr$022)|0);
      $cond19 = $call16;
     } else {
      $cond19 = 0;
     }
     $wpos = ((($f$addr$022)) + 20|0);
     $4 = load4($wpos);
     $wbase = ((($f$addr$022)) + 28|0);
     $5 = load4($wbase);
     $cmp20 = ($4>>>0)>($5>>>0);
     if ($cmp20) {
      $call22 = (___fflush_unlocked($f$addr$022)|0);
      $or = $call22 | $r$021;
      $r$1 = $or;
     } else {
      $r$1 = $r$021;
     }
     $tobool24 = ($cond19|0)==(0);
     if (!($tobool24)) {
      ___unlockfile($f$addr$022);
     }
     $next = ((($f$addr$022)) + 56|0);
     $f$addr$0 = load4($next);
     $tobool11 = ($f$addr$0|0)==(0|0);
     if ($tobool11) {
      $r$0$lcssa = $r$1;
      break;
     } else {
      $f$addr$022 = $f$addr$0;$r$021 = $r$1;
     }
    }
   }
   ___unlock(((4648)|0));
   $retval$0 = $r$0$lcssa;
  } else {
   $lock = ((($f)) + 76|0);
   $0 = load4($lock);
   $cmp = ($0|0)>(-1);
   if (!($cmp)) {
    $call118 = (___fflush_unlocked($f)|0);
    $retval$0 = $call118;
    break;
   }
   $call = (___lockfile($f)|0);
   $phitmp = ($call|0)==(0);
   $call1 = (___fflush_unlocked($f)|0);
   if ($phitmp) {
    $retval$0 = $call1;
   } else {
    ___unlockfile($f);
    $retval$0 = $call1;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___fflush_unlocked($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp4 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $seek = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $tobool = 0, $wbase = 0, $wend = 0, $wpos = 0;
 var $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wpos = ((($f)) + 20|0);
 $0 = load4($wpos);
 $wbase = ((($f)) + 28|0);
 $1 = load4($wbase);
 $cmp = ($0>>>0)>($1>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $2 = load4($write);
  (FUNCTION_TABLE_iiii[$2 & 7]($f,0,0)|0);
  $3 = load4($wpos);
  $tobool = ($3|0)==(0|0);
  if ($tobool) {
   $retval$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $rpos = ((($f)) + 4|0);
  $4 = load4($rpos);
  $rend = ((($f)) + 8|0);
  $5 = load4($rend);
  $cmp4 = ($4>>>0)<($5>>>0);
  if ($cmp4) {
   $seek = ((($f)) + 40|0);
   $6 = load4($seek);
   $sub$ptr$lhs$cast = $4;
   $sub$ptr$rhs$cast = $5;
   $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
   (FUNCTION_TABLE_iiii[$6 & 7]($f,$sub$ptr$sub,1)|0);
  }
  $wend = ((($f)) + 16|0);
  store4($wend,0);
  store4($wbase,0);
  store4($wpos,0);
  store4($rend,0);
  store4($rpos,0);
  $retval$0 = 0;
 }
 return ($retval$0|0);
}
function _memchr($src,$c,$n) {
 $src = $src|0;
 $c = $c|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $conv1 = 0, $dec = 0;
 var $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr33 = 0, $lnot = 0, $mul = 0, $n$addr$0$lcssa = 0, $n$addr$0$lcssa52 = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$0$lcssa53 = 0, $s$044 = 0, $s$128 = 0;
 var $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0, $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv1 = $c & 255;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $1 = $c&255;
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $2 = load1($s$044);
    $cmp = ($2<<24>>24)==($1<<24>>24);
    if ($cmp) {
     $n$addr$0$lcssa52 = $n$addr$043;$s$0$lcssa53 = $s$044;
     label = 6;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $3 = $incdec$ptr;
    $and = $3 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 5;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($tobool2$lcssa) {
   $n$addr$0$lcssa52 = $n$addr$0$lcssa;$s$0$lcssa53 = $s$0$lcssa;
   label = 6;
  } else {
   $n$addr$3 = 0;$s$2 = $s$0$lcssa;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $4 = load1($s$0$lcssa53);
   $5 = $c&255;
   $cmp8 = ($4<<24>>24)==($5<<24>>24);
   if ($cmp8) {
    $n$addr$3 = $n$addr$0$lcssa52;$s$2 = $s$0$lcssa53;
   } else {
    $mul = Math_imul($conv1, 16843009)|0;
    $cmp1132 = ($n$addr$0$lcssa52>>>0)>(3);
    L11: do {
     if ($cmp1132) {
      $n$addr$133 = $n$addr$0$lcssa52;$w$034 = $s$0$lcssa53;
      while(1) {
       $6 = load4($w$034);
       $xor = $6 ^ $mul;
       $sub = (($xor) + -16843009)|0;
       $neg = $xor & -2139062144;
       $and15 = $neg ^ -2139062144;
       $and16 = $and15 & $sub;
       $lnot = ($and16|0)==(0);
       if (!($lnot)) {
        break;
       }
       $incdec$ptr21 = ((($w$034)) + 4|0);
       $sub22 = (($n$addr$133) + -4)|0;
       $cmp11 = ($sub22>>>0)>(3);
       if ($cmp11) {
        $n$addr$133 = $sub22;$w$034 = $incdec$ptr21;
       } else {
        $n$addr$1$lcssa = $sub22;$w$0$lcssa = $incdec$ptr21;
        label = 11;
        break L11;
       }
      }
      $n$addr$227 = $n$addr$133;$s$128 = $w$034;
     } else {
      $n$addr$1$lcssa = $n$addr$0$lcssa52;$w$0$lcssa = $s$0$lcssa53;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $tobool2526 = ($n$addr$1$lcssa|0)==(0);
     if ($tobool2526) {
      $n$addr$3 = 0;$s$2 = $w$0$lcssa;
      break;
     } else {
      $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
     }
    }
    while(1) {
     $7 = load1($s$128);
     $cmp28 = ($7<<24>>24)==($5<<24>>24);
     if ($cmp28) {
      $n$addr$3 = $n$addr$227;$s$2 = $s$128;
      break L8;
     }
     $incdec$ptr33 = ((($s$128)) + 1|0);
     $dec34 = (($n$addr$227) + -1)|0;
     $tobool25 = ($dec34|0)==(0);
     if ($tobool25) {
      $n$addr$3 = 0;$s$2 = $incdec$ptr33;
      break;
     } else {
      $n$addr$227 = $dec34;$s$128 = $incdec$ptr33;
     }
    }
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _vfprintf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$call21 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $and36 = 0, $ap2 = 0, $buf = 0, $buf_size = 0, $call = 0, $call21 = 0, $call2130 = 0, $call6 = 0;
 var $cmp = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $internal_buf = 0, $lock = 0, $mode = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $ret$1 = 0, $ret$1$ = 0, $retval$0 = 0, $tobool = 0, $tobool22 = 0, $tobool26 = 0, $tobool37 = 0, $tobool41 = 0, $vacopy_currentptr = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 ; store8($nl_type,i64_const(0,0),4); store8($nl_type+8|0,i64_const(0,0),4); store8($nl_type+16|0,i64_const(0,0),4); store8($nl_type+24|0,i64_const(0,0),4); store8($nl_type+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
  $retval$0 = -1;
 } else {
  $lock = ((($f)) + 76|0);
  $0 = load4($lock);
  $cmp5 = ($0|0)>(-1);
  if ($cmp5) {
   $call6 = (___lockfile($f)|0);
   $cond = $call6;
  } else {
   $cond = 0;
  }
  $1 = load4($f);
  $and = $1 & 32;
  $mode = ((($f)) + 74|0);
  $2 = load1($mode);
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   store4($f,$and11);
  }
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $buf = ((($f)) + 44|0);
   $4 = load4($buf);
   store4($buf,$internal_buf);
   $wbase = ((($f)) + 28|0);
   store4($wbase,$internal_buf);
   $wpos = ((($f)) + 20|0);
   store4($wpos,$internal_buf);
   store4($buf_size,80);
   $add$ptr = ((($internal_buf)) + 80|0);
   $wend = ((($f)) + 16|0);
   store4($wend,$add$ptr);
   $call21 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if ($tobool22) {
    $ret$1 = $call21;
   } else {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    (FUNCTION_TABLE_iiii[$5 & 7]($f,0,0)|0);
    $6 = load4($wpos);
    $tobool26 = ($6|0)==(0|0);
    $$call21 = $tobool26 ? -1 : $call21;
    store4($buf,$4);
    store4($buf_size,0);
    store4($wend,0);
    store4($wbase,0);
    store4($wpos,0);
    $ret$1 = $$call21;
   }
  } else {
   $call2130 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $ret$1 = $call2130;
  }
  $7 = load4($f);
  $and36 = $7 & 32;
  $tobool37 = ($and36|0)==(0);
  $ret$1$ = $tobool37 ? $ret$1 : -1;
  $or = $7 | $and;
  store4($f,$or);
  $tobool41 = ($cond|0)==(0);
  if (!($tobool41)) {
   ___unlockfile($f);
  }
  $retval$0 = $ret$1$;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$i = 0, $$272 = 0, $$396$i = 0.0, $$404$i = 0.0, $$add$ptr258 = 0, $$l10n$0 = 0, $$p$i = 0, $$p$inc468$i = 0, $$pr = 0, $$pr$i = 0, $$pr477$i = 0, $$pre = 0, $$pre$i = 0, $$pre334 = 0, $$pre335 = 0, $$pre336 = 0, $$pre337 = i64(), $$pre338 = i64(), $$pre558$i = 0;
 var $$pre560$i = 0, $$pre562$i = 0, $$sub514$i = 0, $$sub562$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $13 = 0, $14 = 0, $15 = i64();
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = i64(), $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = i64(), $48 = 0, $49 = i64(), $5 = 0, $50 = i64(), $51 = i64();
 var $52 = i64(), $53 = i64(), $54 = 0, $55 = i64(), $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0.0, $63 = i64(), $64 = i64(), $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1549$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0, $a$3539$i = 0;
 var $a$5$lcssa$i = 0, $a$5521$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $add = 0, $add$i = 0, $add$i203 = 0, $add$i223 = i64(), $add$i240 = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr213$i = 0, $add$ptr258 = 0, $add$ptr311$i = 0, $add$ptr311$z$4$i = 0, $add$ptr341 = 0, $add$ptr354$i = 0, $add$ptr358$i = 0;
 var $add$ptr360 = 0, $add$ptr373$i = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr442$i = 0, $add$ptr442$z$3$i = 0, $add$ptr474 = 0, $add$ptr65$i = 0, $add$ptr671$i = 0, $add$ptr742$i = 0, $add$ptr88 = 0, $add113$i = 0, $add150$i = 0, $add154$i = 0, $add163$i = 0, $add165$i = 0, $add240$i = i64(), $add270 = 0, $add273$i = 0, $add275$i = 0;
 var $add284$i = 0, $add313$i = 0, $add323 = 0, $add355$i = 0, $add396 = 0, $add410$i = 0.0, $add413 = 0, $add414$i = 0, $add442 = 0, $add477$neg$i = 0, $add561$i = 0, $add608$i = 0, $add612$i = 0, $add620$i = 0, $add653$i = 0, $add67$i = 0, $add737$i = 0, $add810$i = 0, $add87$i = 0.0, $add90$i = 0.0;
 var $and = 0, $and$i = 0, $and$i$i = 0, $and$i216 = 0, $and$i222 = i64(), $and$i231 = 0, $and$i239 = 0, $and$i245 = 0, $and$i406$i = 0, $and$i412$i = 0, $and$i418$i = 0, $and$i424$i = 0, $and$i430$i = 0, $and$i436$i = 0, $and$i442$i = 0, $and$i448$i = 0, $and$i454$i = 0, $and$i460$i = 0, $and$i466$i = 0, $and$i472$i = 0;
 var $and12$i = 0, $and134$i = 0, $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and27$i = i64(), $and282$i = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $and36$i = 0, $and379$i = 0, $and483$i = 0, $and610$pre$phi$iZ2D = 0, $and62$i = 0;
 var $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arraydecay208$add$ptr213$i = 0, $arrayidx$i = 0, $arrayidx$i236 = 0, $arrayidx114 = 0, $arrayidx117$i = 0, $arrayidx119 = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx251$i = 0, $arrayidx31 = 0, $arrayidx35 = 0;
 var $arrayidx371 = 0, $arrayidx453$i = 0, $arrayidx470 = 0, $arrayidx482 = 0, $arrayidx489$i = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $call = 0, $call102$i = 0, $call305 = 0, $call345 = 0, $call346 = 0, $call357 = 0, $call385 = 0, $call412 = 0, $call55$i = 0.0;
 var $call631$i = 0, $call672$i = 0, $call719$i = 0, $call757$i = 0, $carry$0544$i = 0, $carry262$0535$i = 0, $cmp = 0, $cmp1 = 0, $cmp103$i = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp127$i = 0, $cmp13 = 0, $cmp147$i = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0;
 var $cmp185 = 0, $cmp188$i = 0, $cmp196$i = 0, $cmp205$i = 0, $cmp212 = 0, $cmp225$i = 0, $cmp225547$i = 0, $cmp228$i = 0, $cmp235$i = 0, $cmp235543$i = 0, $cmp241 = 0, $cmp249$i = 0, $cmp259$i = 0, $cmp259537$i = 0, $cmp265$i = 0, $cmp271 = 0, $cmp277$i = 0, $cmp277533$i = 0, $cmp28$i = 0, $cmp283 = 0;
 var $cmp299$i = 0, $cmp307 = 0, $cmp308$i = 0, $cmp315$i = 0, $cmp324 = 0, $cmp324$i = 0, $cmp324529$i = 0, $cmp333$i = 0, $cmp338$i = 0, $cmp350$i = 0, $cmp363525$i = 0, $cmp37 = 0, $cmp374$i = 0, $cmp378 = 0, $cmp378308 = 0, $cmp38$i = 0, $cmp385$i = 0, $cmp386 = 0, $cmp390$i = 0, $cmp391 = 0;
 var $cmp398 = 0, $cmp403$i = 0, $cmp405 = 0, $cmp405318 = 0, $cmp411$i = 0, $cmp414 = 0, $cmp416$i = 0, $cmp416519$i = 0, $cmp420$i = 0, $cmp422 = 0, $cmp433$i = 0, $cmp433515$i = 0, $cmp435 = 0, $cmp443 = 0, $cmp443$i = 0, $cmp450$i = 0, $cmp450$lcssa$i = 0, $cmp467 = 0, $cmp470$i = 0, $cmp473$i = 0;
 var $cmp479 = 0, $cmp48$i = 0, $cmp495$i = 0, $cmp495511$i = 0, $cmp50 = 0, $cmp50302 = 0, $cmp505$i = 0, $cmp515$i = 0, $cmp528$i = 0, $cmp563$i = 0, $cmp577$i = 0, $cmp59$i = 0, $cmp614$i = 0, $cmp617$i = 0, $cmp623$i = 0, $cmp636$i = 0, $cmp636506$i = 0, $cmp65 = 0, $cmp660$i = 0, $cmp665$i = 0;
 var $cmp673$i = 0, $cmp678$i = 0, $cmp678491$i = 0, $cmp686$i = 0, $cmp707$i = 0, $cmp707486$i = 0, $cmp710$i = 0, $cmp710487$i = 0, $cmp722$i = 0, $cmp722483$i = 0, $cmp727$i = 0, $cmp745$i = 0, $cmp748$i = 0, $cmp748499$i = 0, $cmp75 = 0, $cmp760$i = 0, $cmp765$i = 0, $cmp770$i = 0, $cmp770495$i = 0, $cmp777$i = 0;
 var $cmp790$i = 0, $cmp818$i = 0, $cmp82$i = 0, $cmp94$i = 0, $cmp97 = 0, $cnt$0 = 0, $cnt$1 = 0, $cond$i = 0, $cond100$i = 0, $cond233$i = 0, $cond246 = 0, $cond271$i = 0, $cond304$i = 0, $cond355 = 0, $cond427 = 0, $cond43$i = 0, $cond53$i = 0, $cond629$i = 0, $cond732$i = 0, $cond800$i = 0;
 var $conv$i = 0, $conv$i205 = 0, $conv$i224 = 0, $conv1$i = 0, $conv101$i = i64(), $conv111$i = 0, $conv114$i = 0, $conv116$i = 0, $conv118393$i = 0, $conv120 = 0, $conv121$i = 0, $conv123$i = 0.0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv175 = 0, $conv208 = 0, $conv216$i = 0, $conv218$i = 0.0, $conv227 = i64();
 var $conv230 = 0, $conv233 = 0, $conv238 = i64(), $conv238$i = i64(), $conv239$i = i64(), $conv241$i = 0, $conv242$i = 0, $conv32 = 0, $conv340 = 0, $conv369 = 0, $conv4$i = 0, $conv4$i197 = 0, $conv4$i211 = 0, $conv48 = 0, $conv48300 = 0, $conv58 = 0, $conv630$i = i64(), $conv644$i = 0, $conv646$i = 0, $conv669$i = i64();
 var $conv69 = 0, $conv716$i = i64(), $conv754$i = i64(), $conv83 = 0, $conv87 = 0, $d$0$i = 0, $d$0542$i = 0, $d$0545$i = 0, $d$1534$i = 0, $d$2$lcssa$i = 0, $d$2520$i = 0, $d$4$i = 0, $d$5494$i = 0, $d$6488$i = 0, $d$7500$i = 0, $dec$i = 0, $dec476$i = 0, $dec481$i = 0, $dec78$i = 0, $div$i = i64();
 var $div274$i = 0, $div356$i = 0, $div378$i = 0, $div384$i = 0, $e$0531$i = 0, $e$1$i = 0, $e$2517$i = 0, $e$4$i = 0, $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$1507$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0;
 var $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $fl$0275 = 0, $fl$0304 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa343 = 0, $i$0310 = 0;
 var $i$0530$i = 0, $i$07$i = 0, $i$07$i201 = 0, $i$1$lcssa$i = 0, $i$1319 = 0, $i$1526$i = 0, $i$2292 = 0, $i$2516$i = 0, $i$3289 = 0, $i$3512$i = 0, $i137 = 0, $i86 = 0, $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc425$i = 0, $inc438$i = 0, $inc468$i = 0, $inc489 = 0, $inc500$i = 0;
 var $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i204 = 0, $incdec$ptr$i212 = 0, $incdec$ptr$i225 = 0, $incdec$ptr106$i = 0, $incdec$ptr112$i = 0, $incdec$ptr115$i = 0, $incdec$ptr122$i = 0, $incdec$ptr137$i = 0, $incdec$ptr170 = 0, $incdec$ptr217$i = 0, $incdec$ptr23 = 0, $incdec$ptr246$i = 0, $incdec$ptr288$i = 0, $incdec$ptr292$a$3$i = 0, $incdec$ptr292$a$3567$i = 0, $incdec$ptr292$a$3569$i = 0, $incdec$ptr292$i = 0, $incdec$ptr292566$i = 0;
 var $incdec$ptr296$i = 0, $incdec$ptr384 = 0, $incdec$ptr411 = 0, $incdec$ptr419$i = 0, $incdec$ptr423$i = 0, $incdec$ptr62 = 0, $incdec$ptr639$i = 0, $incdec$ptr645$i = 0, $incdec$ptr647$i = 0, $incdec$ptr681$i = 0, $incdec$ptr689$i = 0, $incdec$ptr698$i = 0, $incdec$ptr725$i = 0, $incdec$ptr734$i = 0, $incdec$ptr773$i = 0, $incdec$ptr776$i = 0, $incdec$ptr808$i = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i207 = 0;
 var $isdigit188 = 0, $isdigit190 = 0, $isdigit6$i = 0, $isdigit6$i199 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i206 = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $isdigittmp5$i = 0, $isdigittmp5$i198 = 0, $isdigittmp8$i = 0, $isdigittmp8$i200 = 0, $j$0$i = 0, $j$0524$i = 0, $j$0527$i = 0, $j$1513$i = 0, $j$2$i = 0, $l$0 = 0;
 var $l$0$i = 0, $l$1$i = 0, $l$1309 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $land$ext$neg$i = 0, $lnot$ext = 0, $lnot$i = 0, $lnot455$i = 0, $lnot484 = 0, $lor$ext$i = 0, $mb = 0, $mul$i = 0, $mul$i202 = 0, $mul$i241 = 0.0, $mul125$i = 0.0;
 var $mul202$i = 0.0, $mul220$i = 0.0, $mul286$i = 0, $mul322$i = 0, $mul328$i = 0, $mul335$i = 0, $mul349$i = 0, $mul367$i = 0, $mul406$i = 0.0, $mul407$i = 0.0, $mul431$i = 0, $mul437$i = 0, $mul499$i = 0, $mul513$i = 0, $mul80$i = 0.0, $notlhs$i = 0, $notrhs$i = 0, $or = 0, $or$cond = 0, $or$cond$i = 0;
 var $or$cond1$not$i = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or$cond2$i = 0, $or$cond321 = 0, $or$cond395$i = 0, $or$cond397$i = 0, $or$cond401$i = 0, $or$i = 0, $or$i242 = 0, $or100 = 0, $or100$fl$0 = 0, $or120$i = 0, $or247 = 0, $or504$i = 0, $or613$i = 0, $p$0 = 0, $p$0$add270 = 0, $p$1 = 0;
 var $p$2 = 0, $p$2$add323 = 0, $p$3 = 0, $p$4340 = 0, $p$5 = 0, $p$addr$2$$sub514398$i = 0, $p$addr$2$$sub562399$i = 0, $p$addr$2$i = 0, $p$addr$3$i = 0, $p$addr$4$lcssa$i = 0, $p$addr$4489$i = 0, $p$addr$5$lcssa$i = 0, $p$addr$5501$i = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0, $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$add$ptr65$i = 0;
 var $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0, $r$0$a$9$i = 0, $re$1482$i = 0, $rem$i = i64(), $rem360$i = 0, $rem370$i = 0, $rem494$i = 0, $rem494510$i = 0, $retval$0 = 0, $retval$0$i = 0, $round$0481$i = 0.0, $round377$1$i = 0.0, $s$0 = 0, $s$0$i = 0, $s$1 = 0, $s$1$i = 0, $s$2$lcssa = 0, $s$2294 = 0;
 var $s$4 = 0, $s$6 = 0, $s$7 = 0, $s$addr$0$lcssa$i = 0, $s$addr$0$lcssa$i229 = 0, $s$addr$06$i = 0, $s$addr$06$i221 = 0, $s35$0$i = 0, $s668$0492$i = 0, $s668$1$i = 0, $s715$0$lcssa$i = 0, $s715$0484$i = 0, $s753$0$i = 0, $s753$1496$i = 0, $s753$2$i = 0, $scevgep556$i = 0, $scevgep556557$i = 0, $sh_prom$i = i64(), $shl = 0, $shl$i = i64();
 var $shl280$i = 0, $shl60 = 0, $shr = 0, $shr$i = i64(), $shr$i226 = i64(), $shr283$i = 0, $shr285$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $storemerge = 0, $storemerge186278 = 0, $storemerge186303 = 0, $storemerge191 = 0, $sub = 0, $sub$i = 0.0, $sub$ptr$div$i = 0, $sub$ptr$div321$i = 0, $sub$ptr$div347$i = 0, $sub$ptr$div430$i = 0;
 var $sub$ptr$div511$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast160$i = 0, $sub$ptr$lhs$cast305$i = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast318$i = 0, $sub$ptr$lhs$cast344$i = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$lhs$cast508$i = 0, $sub$ptr$lhs$cast694$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast152$i = 0, $sub$ptr$rhs$cast268 = 0, $sub$ptr$rhs$cast306$i = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast319$i = 0, $sub$ptr$rhs$cast363 = 0;
 var $sub$ptr$rhs$cast428$i = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$rhs$cast634$i = 0, $sub$ptr$rhs$cast634504$i = 0, $sub$ptr$rhs$cast649$i = 0, $sub$ptr$rhs$cast695$i = 0, $sub$ptr$rhs$cast788$i = 0, $sub$ptr$rhs$cast812$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub145$i = 0, $sub$ptr$sub153$i = 0, $sub$ptr$sub159$i = 0, $sub$ptr$sub162$i = 0, $sub$ptr$sub172$i = 0, $sub$ptr$sub175$i = 0, $sub$ptr$sub269 = 0, $sub$ptr$sub307$i = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub320$i = 0;
 var $sub$ptr$sub346$i = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub429$i = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub$ptr$sub510$i = 0, $sub$ptr$sub635$i = 0, $sub$ptr$sub635505$i = 0, $sub$ptr$sub650$i = 0, $sub$ptr$sub650$pn$i = 0, $sub$ptr$sub696$i = 0, $sub$ptr$sub789$i = 0, $sub$ptr$sub813$i = 0, $sub101 = 0, $sub101$w$0 = 0, $sub124$i = 0.0, $sub135 = 0, $sub146$i = 0, $sub165 = 0, $sub176 = 0;
 var $sub181$i = 0, $sub203$i = 0, $sub219$i = 0.0, $sub256$i = 0, $sub264$i = 0, $sub281$i = 0, $sub287 = i64(), $sub336$i = 0, $sub343$i = 0, $sub357$i = 0, $sub390 = 0, $sub409$i = 0, $sub478$i = 0, $sub480$i = 0, $sub49 = 0, $sub49301 = 0, $sub49305 = 0, $sub514$i = 0, $sub562$i = 0, $sub59 = 0;
 var $sub626$le$i = 0, $sub735$i = 0, $sub74$i = 0, $sub806$i = 0, $sub84 = 0, $sub85$i = 0.0, $sub86$i = 0.0, $sub88$i = 0.0, $sub91$i = 0.0, $sub97$i = 0, $sum = 0, $t$0 = 0, $t$1 = 0, $t$addr$0$i = 0, $t$addr$1$i = 0, $tobool = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i213 = 0, $tobool$i217 = 0;
 var $tobool$i227 = 0, $tobool$i232 = 0, $tobool$i246 = 0, $tobool$i407$i = 0, $tobool$i413$i = 0, $tobool$i419$i = 0, $tobool$i425$i = 0, $tobool$i431$i = 0, $tobool$i437$i = 0, $tobool$i443$i = 0, $tobool$i449$i = 0, $tobool$i455$i = 0, $tobool$i461$i = 0, $tobool$i467$i = 0, $tobool$i473$i = 0, $tobool13$i = 0, $tobool135$i = 0, $tobool139$i = 0, $tobool140$i = 0, $tobool141 = 0;
 var $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool222$i = 0, $tobool244$i = 0, $tobool25 = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool290$i = 0, $tobool290565$i = 0, $tobool291 = 0, $tobool294$i = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0, $tobool341$i = 0, $tobool350 = 0, $tobool358 = 0;
 var $tobool37$i = 0, $tobool371$i = 0, $tobool380$i = 0, $tobool381 = 0, $tobool4$i = 0, $tobool400$i = 0, $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool484$i = 0, $tobool490$i = 0, $tobool5$i = 0, $tobool5$i237 = 0, $tobool55 = 0, $tobool56$i = 0, $tobool63$i = 0, $tobool76$i = 0, $tobool76563$i = 0, $tobool781$i = 0;
 var $tobool79$i = 0, $tobool9$i = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $w$add165$i = 0, $w$add653$i = 0, $wc = 0, $ws$0311 = 0, $ws$1320 = 0, $x$addr$0$tr$i = 0, $x$addr$05$i = i64(), $x$addr$07$i = i64(), $xor = 0, $xor$i = 0, $xor167$i = 0, $xor186$i = 0, $xor450 = 0;
 var $xor458 = 0, $xor655$i = 0, $xor816$i = 0, $y$addr$0$i = 0.0, $y$addr$1$i = 0.0, $y$addr$2$i = 0.0, $y$addr$3$i = 0.0, $y$addr$4$i = 0.0, $z$0$i = 0, $z$0$lcssa = 0, $z$0295 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1548$i = 0, $z$2 = 0, $z$2$i = 0, $z$3$lcssa$i = 0, $z$3538$i = 0, $z$4$i = 0, $z$7$add$ptr742$i = 0;
 var $z$7$i = 0, $z$7$ph$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
 $big$i = sp + 24|0;
 $e2$i = sp + 16|0;
 $buf$i = sp + 588|0;
 $ebuf0$i = sp + 576|0;
 $arg = sp;
 $buf = sp + 536|0;
 $wc = sp + 8|0;
 $mb = sp + 528|0;
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $sub$ptr$rhs$cast$i = $buf$i;
 $0 = (0 - ($sub$ptr$rhs$cast$i))|0;
 $arrayidx$i236 = ((($ebuf0$i)) + 12|0);
 $incdec$ptr106$i = ((($ebuf0$i)) + 11|0);
 $sub$ptr$lhs$cast160$i = $arrayidx$i236;
 $sub$ptr$sub159$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub145$i = (-2 - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub153$i = (($sub$ptr$lhs$cast160$i) + 2)|0;
 $add$ptr213$i = ((($big$i)) + 288|0);
 $add$ptr671$i = ((($buf$i)) + 9|0);
 $sub$ptr$lhs$cast694$i = $add$ptr671$i;
 $incdec$ptr689$i = ((($buf$i)) + 8|0);
 $cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;$s$0 = $fmt;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     $call = (___errno_location()|0);
     store4($call,75);
     $cnt$1 = -1;
     break;
    } else {
     $add = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $add;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $1 = load1($s$0);
  $tobool = ($1<<24>>24)==(0);
  if ($tobool) {
   label = 243;
   break;
  } else {
   $2 = $1;$s$1 = $s$0;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $s$2294 = $s$1;$z$0295 = $s$1;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $s$2$lcssa = $s$1;$z$0$lcssa = $s$1;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($s$1)) + 1|0);
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$s$1 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($s$2294)) + 1|0);
     $3 = load1($arrayidx16);
     $cmp18 = ($3<<24>>24)==(37);
     if (!($cmp18)) {
      $s$2$lcssa = $s$2294;$z$0$lcssa = $z$0295;
      break L12;
     }
     $incdec$ptr23 = ((($z$0295)) + 1|0);
     $add$ptr = ((($s$2294)) + 2|0);
     $4 = load1($add$ptr);
     $cmp13 = ($4<<24>>24)==(37);
     if ($cmp13) {
      $s$2294 = $add$ptr;$z$0295 = $incdec$ptr23;
      label = 9;
     } else {
      $s$2$lcssa = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $s$0;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   $5 = load4($f);
   $and$i = $5 & 32;
   $tobool$i = ($and$i|0)==(0);
   if ($tobool$i) {
    (___fwritex($s$0,$sub$ptr$sub,$f)|0);
   }
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$s$0 = $s$2$lcssa;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($s$2$lcssa)) + 1|0);
  $6 = load1($arrayidx31);
  $conv32 = $6 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($s$2$lcssa)) + 2|0);
   $7 = load1($arrayidx35);
   $cmp37 = ($7<<24>>24)==(36);
   $add$ptr43 = ((($s$2$lcssa)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $$pre334 = load1($add$ptr43$arrayidx31);
   $8 = $$pre334;$argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $8 = $6;$argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  $conv48300 = $8 << 24 >> 24;
  $sub49301 = (($conv48300) + -32)|0;
  $cmp50302 = ($sub49301>>>0)<(32);
  L25: do {
   if ($cmp50302) {
    $9 = $8;$fl$0304 = 0;$storemerge186303 = $storemerge;$sub49305 = $sub49301;
    while(1) {
     $shl = 1 << $sub49305;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $11 = $9;$fl$0275 = $fl$0304;$storemerge186278 = $storemerge186303;
      break L25;
     }
     $conv58 = $9 << 24 >> 24;
     $sub59 = (($conv58) + -32)|0;
     $shl60 = 1 << $sub59;
     $or = $shl60 | $fl$0304;
     $incdec$ptr62 = ((($storemerge186303)) + 1|0);
     $10 = load1($incdec$ptr62);
     $conv48 = $10 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $9 = $10;$fl$0304 = $or;$storemerge186303 = $incdec$ptr62;$sub49305 = $sub49;
     } else {
      $11 = $10;$fl$0275 = $or;$storemerge186278 = $incdec$ptr62;
      break;
     }
    }
   } else {
    $11 = $8;$fl$0275 = 0;$storemerge186278 = $storemerge;
   }
  } while(0);
  $cmp65 = ($11<<24>>24)==(42);
  do {
   if ($cmp65) {
    $arrayidx68 = ((($storemerge186278)) + 1|0);
    $12 = load1($arrayidx68);
    $conv69 = $12 << 24 >> 24;
    $isdigittmp189 = (($conv69) + -48)|0;
    $isdigit190 = ($isdigittmp189>>>0)<(10);
    if ($isdigit190) {
     $arrayidx73 = ((($storemerge186278)) + 2|0);
     $13 = load1($arrayidx73);
     $cmp75 = ($13<<24>>24)==(36);
     if ($cmp75) {
      $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
      store4($arrayidx81,10);
      $14 = load1($arrayidx68);
      $conv83 = $14 << 24 >> 24;
      $sub84 = (($conv83) + -48)|0;
      $i86 = (($nl_arg) + ($sub84<<3)|0);
      $15 = load8($i86);
      $conv87 = i64_trunc($15);
      $add$ptr88 = ((($storemerge186278)) + 3|0);
      $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $tobool90 = ($l10n$1|0)==(0);
     if (!($tobool90)) {
      $retval$0 = -1;
      break L1;
     }
     if (!($tobool25)) {
      $$pr = $12;$fl$1 = $fl$0275;$l10n$3 = 0;$s$4 = $arrayidx68;$w$1 = 0;
      break;
     }
     $arglist_current = load4($ap);
     $16 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $17 = (($16) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $18 = $17 & $expanded6;
     $19 = $18;
     $20 = load4($19);
     $arglist_next = ((($19)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $20;
    }
    $cmp97 = ($w$0|0)<(0);
    $or100 = $fl$0275 | 8192;
    $sub101 = (0 - ($w$0))|0;
    $or100$fl$0 = $cmp97 ? $or100 : $fl$0275;
    $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
    $$pre335 = load1($storemerge191);
    $$pr = $$pre335;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$s$4 = $storemerge191;$w$1 = $sub101$w$0;
   } else {
    $conv4$i = $11 << 24 >> 24;
    $isdigittmp5$i = (($conv4$i) + -48)|0;
    $isdigit6$i = ($isdigittmp5$i>>>0)<(10);
    if ($isdigit6$i) {
     $21 = $storemerge186278;$i$07$i = 0;$isdigittmp8$i = $isdigittmp5$i;
     while(1) {
      $mul$i = ($i$07$i*10)|0;
      $add$i = (($mul$i) + ($isdigittmp8$i))|0;
      $incdec$ptr$i = ((($21)) + 1|0);
      $22 = load1($incdec$ptr$i);
      $conv$i = $22 << 24 >> 24;
      $isdigittmp$i = (($conv$i) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $21 = $incdec$ptr$i;$i$07$i = $add$i;$isdigittmp8$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $cmp105 = ($add$i|0)<(0);
     if ($cmp105) {
      $retval$0 = -1;
      break L1;
     } else {
      $$pr = $22;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $incdec$ptr$i;$w$1 = $add$i;
     }
    } else {
     $$pr = $11;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $storemerge186278;$w$1 = 0;
    }
   }
  } while(0);
  $cmp111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($cmp111) {
    $arrayidx114 = ((($s$4)) + 1|0);
    $23 = load1($arrayidx114);
    $cmp116 = ($23<<24>>24)==(42);
    if (!($cmp116)) {
     $conv4$i197 = $23 << 24 >> 24;
     $isdigittmp5$i198 = (($conv4$i197) + -48)|0;
     $isdigit6$i199 = ($isdigittmp5$i198>>>0)<(10);
     if ($isdigit6$i199) {
      $33 = $arrayidx114;$i$07$i201 = 0;$isdigittmp8$i200 = $isdigittmp5$i198;
     } else {
      $p$0 = 0;$s$6 = $arrayidx114;
      break;
     }
     while(1) {
      $mul$i202 = ($i$07$i201*10)|0;
      $add$i203 = (($mul$i202) + ($isdigittmp8$i200))|0;
      $incdec$ptr$i204 = ((($33)) + 1|0);
      $34 = load1($incdec$ptr$i204);
      $conv$i205 = $34 << 24 >> 24;
      $isdigittmp$i206 = (($conv$i205) + -48)|0;
      $isdigit$i207 = ($isdigittmp$i206>>>0)<(10);
      if ($isdigit$i207) {
       $33 = $incdec$ptr$i204;$i$07$i201 = $add$i203;$isdigittmp8$i200 = $isdigittmp$i206;
      } else {
       $p$0 = $add$i203;$s$6 = $incdec$ptr$i204;
       break L45;
      }
     }
    }
    $arrayidx119 = ((($s$4)) + 2|0);
    $24 = load1($arrayidx119);
    $conv120 = $24 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($s$4)) + 3|0);
     $25 = load1($arrayidx124);
     $cmp126 = ($25<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $26 = load1($arrayidx119);
      $conv134 = $26 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $27 = load8($i137);
      $conv138 = i64_trunc($27);
      $add$ptr139 = ((($s$4)) + 4|0);
      $p$0 = $conv138;$s$6 = $add$ptr139;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = load4($ap);
     $28 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $29 = (($28) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $30 = $29 & $expanded13;
     $31 = $30;
     $32 = load4($31);
     $arglist_next3 = ((($31)) + 4|0);
     store4($ap,$arglist_next3);
     $p$0 = $32;$s$6 = $arrayidx119;
    } else {
     $p$0 = 0;$s$6 = $arrayidx119;
    }
   } else {
    $p$0 = -1;$s$6 = $s$4;
   }
  } while(0);
  $s$7 = $s$6;$st$0 = 0;
  while(1) {
   $35 = load1($s$7);
   $conv164 = $35 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr170 = ((($s$7)) + 1|0);
   $arrayidx174 = ((1476 + (($st$0*58)|0)|0) + ($sub165)|0);
   $36 = load1($arrayidx174);
   $conv175 = $36&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $s$7 = $incdec$ptr170;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($36<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($36<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     store4($arrayidx193,$conv175);
     $37 = (($nl_arg) + ($argpos$0<<3)|0);
     $38 = load8($37);
     store8($arg,$38);
     label = 51;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($tobool25)) {
    $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue;
   }
  }
  $39 = load1($s$7);
  $conv208 = $39 << 24 >> 24;
  $tobool209 = ($st$0|0)!=(0);
  $and211 = $conv208 & 15;
  $cmp212 = ($and211|0)==(3);
  $or$cond192 = $tobool209 & $cmp212;
  $and215 = $conv208 & -33;
  $t$0 = $or$cond192 ? $and215 : $conv208;
  $and217 = $fl$1 & 8192;
  $tobool218 = ($and217|0)==(0);
  $and220 = $fl$1 & -65537;
  $fl$1$and220 = $tobool218 ? $fl$1 : $and220;
  L74: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $40 = load4($arg);
     store4($40,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 1:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $42 = load4($arg);
     store8($42,$conv227);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $43 = load4($arg);
     store2($43,$conv230);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $44 = load4($arg);
     store1($44,$conv233);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 6:  {
     $45 = load4($arg);
     store4($45,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $46 = load4($arg);
     store8($46,$conv238);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    default: {
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $cmp241 = ($p$0>>>0)>(8);
    $cond246 = $cmp241 ? $p$0 : 8;
    $or247 = $fl$1$and220 | 8;
    $fl$3 = $or247;$p$1 = $cond246;$t$1 = 120;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 63;
    break;
   }
   case 111:  {
    $50 = load8($arg);
    $tobool4$i = i64_eq($50,i64_const(0,0));
    if ($tobool4$i) {
     $s$addr$0$lcssa$i229 = $add$ptr206;
    } else {
     $s$addr$06$i221 = $add$ptr206;$x$addr$05$i = $50;
     while(1) {
      $and$i222 = i64_and($x$addr$05$i,i64_const(7,0));
      $add$i223 = i64_or($and$i222,i64_const(48,0));
      $conv$i224 = i64_trunc($add$i223)&255;
      $incdec$ptr$i225 = ((($s$addr$06$i221)) + -1|0);
      store1($incdec$ptr$i225,$conv$i224);
      $shr$i226 = i64_lshr($x$addr$05$i,i64_const(3,0));
      $tobool$i227 = i64_eq($shr$i226,i64_const(0,0));
      if ($tobool$i227) {
       $s$addr$0$lcssa$i229 = $incdec$ptr$i225;
       break;
      } else {
       $s$addr$06$i221 = $incdec$ptr$i225;$x$addr$05$i = $shr$i226;
      }
     }
    }
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    if ($tobool265) {
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 1956;
     label = 76;
    } else {
     $sub$ptr$rhs$cast268 = $s$addr$0$lcssa$i229;
     $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
     $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
     $add270 = (($sub$ptr$sub269) + 1)|0;
     $p$0$add270 = $cmp271 ? $p$0 : $add270;
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0$add270;$pl$1 = 0;$prefix$1 = 1956;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $52 = $sub287;$pl$0 = 1;$prefix$0 = 1956;
     label = 75;
     break L74;
    }
    $and290 = $fl$1$and220 & 2048;
    $tobool291 = ($and290|0)==(0);
    if ($tobool291) {
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 1956 : (1958);
     $52 = $51;$pl$0 = $and295;$prefix$0 = $$;
     label = 75;
    } else {
     $52 = $51;$pl$0 = 1;$prefix$0 = (1957);
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre337 = load8($arg);
    $52 = $$pre337;$pl$0 = 0;$prefix$0 = 1956;
    label = 75;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 1956;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $call345 = (___errno_location()|0);
    $56 = load4($call345);
    $call346 = (_strerror($56)|0);
    $a$1 = $call346;
    label = 81;
    break;
   }
   case 115:  {
    $57 = load4($arg);
    $tobool350 = ($57|0)!=(0|0);
    $cond355 = $tobool350 ? $57 : 1966;
    $a$1 = $cond355;
    label = 81;
    break;
   }
   case 67:  {
    $58 = load8($arg);
    $conv369 = i64_trunc($58);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $127 = $wc;$p$4340 = -1;
    label = 85;
    break;
   }
   case 83:  {
    $$pre336 = load4($arg);
    $cmp378308 = ($p$0|0)==(0);
    if ($cmp378308) {
     _pad($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $127 = $$pre336;$p$4340 = $p$0;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $62 = loadd($arg);
    store4($e2$i,0);
    $63 = i64_bc2i($62);
    $tobool5$i237 = i64_slt($63,i64_const(0,0));
    if ($tobool5$i237) {
     $sub$i = -$62;
     $pl$0$i = 1;$prefix$0$i = 1973;$y$addr$0$i = $sub$i;
    } else {
     $and$i239 = $fl$1$and220 & 2048;
     $tobool9$i = ($and$i239|0)==(0);
     $and12$i = $fl$1$and220 & 1;
     if ($tobool9$i) {
      $tobool13$i = ($and12$i|0)==(0);
      $$$i = $tobool13$i ? (1974) : (1979);
      $pl$0$i = $and12$i;$prefix$0$i = $$$i;$y$addr$0$i = $62;
     } else {
      $pl$0$i = 1;$prefix$0$i = (1976);$y$addr$0$i = $62;
     }
    }
    $64 = i64_bc2i($y$addr$0$i);
    $and27$i = i64_and($64,i64_const(0,2146435072));
    $cmp28$i = i64_ult($and27$i,i64_const(0,2146435072));
    do {
     if ($cmp28$i) {
      $call55$i = (+_frexpl($y$addr$0$i,$e2$i));
      $mul$i241 = $call55$i * 2.0;
      $tobool56$i = $mul$i241 != 0.0;
      if ($tobool56$i) {
       $67 = load4($e2$i);
       $dec$i = (($67) + -1)|0;
       store4($e2$i,$dec$i);
      }
      $or$i242 = $t$0 | 32;
      $cmp59$i = ($or$i242|0)==(97);
      if ($cmp59$i) {
       $and62$i = $t$0 & 32;
       $tobool63$i = ($and62$i|0)==(0);
       $add$ptr65$i = ((($prefix$0$i)) + 9|0);
       $prefix$0$add$ptr65$i = $tobool63$i ? $prefix$0$i : $add$ptr65$i;
       $add67$i = $pl$0$i | 2;
       $68 = ($p$0>>>0)>(11);
       $sub74$i = (12 - ($p$0))|0;
       $tobool76563$i = ($sub74$i|0)==(0);
       $tobool76$i = $68 | $tobool76563$i;
       do {
        if ($tobool76$i) {
         $y$addr$1$i = $mul$i241;
        } else {
         $re$1482$i = $sub74$i;$round$0481$i = 8.0;
         while(1) {
          $dec78$i = (($re$1482$i) + -1)|0;
          $mul80$i = $round$0481$i * 16.0;
          $tobool79$i = ($dec78$i|0)==(0);
          if ($tobool79$i) {
           break;
          } else {
           $re$1482$i = $dec78$i;$round$0481$i = $mul80$i;
          }
         }
         $69 = load1($prefix$0$add$ptr65$i);
         $cmp82$i = ($69<<24>>24)==(45);
         if ($cmp82$i) {
          $sub85$i = -$mul$i241;
          $sub86$i = $sub85$i - $mul80$i;
          $add87$i = $mul80$i + $sub86$i;
          $sub88$i = -$add87$i;
          $y$addr$1$i = $sub88$i;
          break;
         } else {
          $add90$i = $mul$i241 + $mul80$i;
          $sub91$i = $add90$i - $mul80$i;
          $y$addr$1$i = $sub91$i;
          break;
         }
        }
       } while(0);
       $70 = load4($e2$i);
       $cmp94$i = ($70|0)<(0);
       $sub97$i = (0 - ($70))|0;
       $cond100$i = $cmp94$i ? $sub97$i : $70;
       $conv101$i = i64_sext($cond100$i);
       $call102$i = (_fmt_u($conv101$i,$arrayidx$i236)|0);
       $cmp103$i = ($call102$i|0)==($arrayidx$i236|0);
       if ($cmp103$i) {
        store1($incdec$ptr106$i,48);
        $estr$0$i = $incdec$ptr106$i;
       } else {
        $estr$0$i = $call102$i;
       }
       $71 = $70 >> 31;
       $72 = $71 & 2;
       $73 = (($72) + 43)|0;
       $conv111$i = $73&255;
       $incdec$ptr112$i = ((($estr$0$i)) + -1|0);
       store1($incdec$ptr112$i,$conv111$i);
       $add113$i = (($t$0) + 15)|0;
       $conv114$i = $add113$i&255;
       $incdec$ptr115$i = ((($estr$0$i)) + -2|0);
       store1($incdec$ptr115$i,$conv114$i);
       $notrhs$i = ($p$0|0)<(1);
       $and134$i = $fl$1$and220 & 8;
       $tobool135$i = ($and134$i|0)==(0);
       $s$0$i = $buf$i;$y$addr$2$i = $y$addr$1$i;
       while(1) {
        $conv116$i = (~~(($y$addr$2$i)));
        $arrayidx117$i = (1940 + ($conv116$i)|0);
        $74 = load1($arrayidx117$i);
        $conv118393$i = $74&255;
        $or120$i = $conv118393$i | $and62$i;
        $conv121$i = $or120$i&255;
        $incdec$ptr122$i = ((($s$0$i)) + 1|0);
        store1($s$0$i,$conv121$i);
        $conv123$i = (+($conv116$i|0));
        $sub124$i = $y$addr$2$i - $conv123$i;
        $mul125$i = $sub124$i * 16.0;
        $sub$ptr$lhs$cast$i = $incdec$ptr122$i;
        $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
        $cmp127$i = ($sub$ptr$sub$i|0)==(1);
        do {
         if ($cmp127$i) {
          $notlhs$i = $mul125$i == 0.0;
          $or$cond1$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $tobool135$i & $or$cond1$not$i;
          if ($or$cond$i) {
           $s$1$i = $incdec$ptr122$i;
           break;
          }
          $incdec$ptr137$i = ((($s$0$i)) + 2|0);
          store1($incdec$ptr122$i,46);
          $s$1$i = $incdec$ptr137$i;
         } else {
          $s$1$i = $incdec$ptr122$i;
         }
        } while(0);
        $tobool139$i = $mul125$i != 0.0;
        if ($tobool139$i) {
         $s$0$i = $s$1$i;$y$addr$2$i = $mul125$i;
        } else {
         break;
        }
       }
       $tobool140$i = ($p$0|0)!=(0);
       $$pre560$i = $s$1$i;
       $sub146$i = (($sub$ptr$sub145$i) + ($$pre560$i))|0;
       $cmp147$i = ($sub146$i|0)<($p$0|0);
       $or$cond321 = $tobool140$i & $cmp147$i;
       $sub$ptr$rhs$cast152$i = $incdec$ptr115$i;
       $add150$i = (($sub$ptr$sub153$i) + ($p$0))|0;
       $add154$i = (($add150$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sub$ptr$sub162$i = (($sub$ptr$sub159$i) - ($sub$ptr$rhs$cast152$i))|0;
       $add163$i = (($sub$ptr$sub162$i) + ($$pre560$i))|0;
       $l$0$i = $or$cond321 ? $add154$i : $add163$i;
       $add165$i = (($l$0$i) + ($add67$i))|0;
       _pad($f,32,$w$1,$add165$i,$fl$1$and220);
       $75 = load4($f);
       $and$i418$i = $75 & 32;
       $tobool$i419$i = ($and$i418$i|0)==(0);
       if ($tobool$i419$i) {
        (___fwritex($prefix$0$add$ptr65$i,$add67$i,$f)|0);
       }
       $xor167$i = $fl$1$and220 ^ 65536;
       _pad($f,48,$w$1,$add165$i,$xor167$i);
       $sub$ptr$sub172$i = (($$pre560$i) - ($sub$ptr$rhs$cast$i))|0;
       $76 = load4($f);
       $and$i424$i = $76 & 32;
       $tobool$i425$i = ($and$i424$i|0)==(0);
       if ($tobool$i425$i) {
        (___fwritex($buf$i,$sub$ptr$sub172$i,$f)|0);
       }
       $sub$ptr$sub175$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sum = (($sub$ptr$sub172$i) + ($sub$ptr$sub175$i))|0;
       $sub181$i = (($l$0$i) - ($sum))|0;
       _pad($f,48,$sub181$i,0,0);
       $77 = load4($f);
       $and$i430$i = $77 & 32;
       $tobool$i431$i = ($and$i430$i|0)==(0);
       if ($tobool$i431$i) {
        (___fwritex($incdec$ptr115$i,$sub$ptr$sub175$i,$f)|0);
       }
       $xor186$i = $fl$1$and220 ^ 8192;
       _pad($f,32,$w$1,$add165$i,$xor186$i);
       $cmp188$i = ($add165$i|0)<($w$1|0);
       $w$add165$i = $cmp188$i ? $w$1 : $add165$i;
       $retval$0$i = $w$add165$i;
       break;
      }
      $cmp196$i = ($p$0|0)<(0);
      $$p$i = $cmp196$i ? 6 : $p$0;
      if ($tobool56$i) {
       $mul202$i = $mul$i241 * 268435456.0;
       $78 = load4($e2$i);
       $sub203$i = (($78) + -28)|0;
       store4($e2$i,$sub203$i);
       $$pr$i = $sub203$i;$y$addr$3$i = $mul202$i;
      } else {
       $$pre558$i = load4($e2$i);
       $$pr$i = $$pre558$i;$y$addr$3$i = $mul$i241;
      }
      $cmp205$i = ($$pr$i|0)<(0);
      $arraydecay208$add$ptr213$i = $cmp205$i ? $big$i : $add$ptr213$i;
      $y$addr$4$i = $y$addr$3$i;$z$0$i = $arraydecay208$add$ptr213$i;
      while(1) {
       $conv216$i = (~~(($y$addr$4$i))>>>0);
       store4($z$0$i,$conv216$i);
       $incdec$ptr217$i = ((($z$0$i)) + 4|0);
       $conv218$i = (+($conv216$i>>>0));
       $sub219$i = $y$addr$4$i - $conv218$i;
       $mul220$i = $sub219$i * 1.0E+9;
       $tobool222$i = $mul220$i != 0.0;
       if ($tobool222$i) {
        $y$addr$4$i = $mul220$i;$z$0$i = $incdec$ptr217$i;
       } else {
        break;
       }
      }
      $cmp225547$i = ($$pr$i|0)>(0);
      if ($cmp225547$i) {
       $79 = $$pr$i;$a$1549$i = $arraydecay208$add$ptr213$i;$z$1548$i = $incdec$ptr217$i;
       while(1) {
        $cmp228$i = ($79|0)>(29);
        $cond233$i = $cmp228$i ? 29 : $79;
        $d$0542$i = ((($z$1548$i)) + -4|0);
        $cmp235543$i = ($d$0542$i>>>0)<($a$1549$i>>>0);
        do {
         if ($cmp235543$i) {
          $a$2$ph$i = $a$1549$i;
         } else {
          $sh_prom$i = i64_zext($cond233$i>>>0);
          $carry$0544$i = 0;$d$0545$i = $d$0542$i;
          while(1) {
           $80 = load4($d$0545$i);
           $conv238$i = i64_zext($80>>>0);
           $shl$i = i64_shl($conv238$i,$sh_prom$i);
           $conv239$i = i64_zext($carry$0544$i>>>0);
           $add240$i = i64_add($shl$i,$conv239$i);
           $rem$i = i64_urem($add240$i,i64_const(1000000000,0));
           $conv241$i = i64_trunc($rem$i);
           store4($d$0545$i,$conv241$i);
           $div$i = i64_udiv($add240$i,i64_const(1000000000,0));
           $conv242$i = i64_trunc($div$i);
           $d$0$i = ((($d$0545$i)) + -4|0);
           $cmp235$i = ($d$0$i>>>0)<($a$1549$i>>>0);
           if ($cmp235$i) {
            break;
           } else {
            $carry$0544$i = $conv242$i;$d$0545$i = $d$0$i;
           }
          }
          $tobool244$i = ($conv242$i|0)==(0);
          if ($tobool244$i) {
           $a$2$ph$i = $a$1549$i;
           break;
          }
          $incdec$ptr246$i = ((($a$1549$i)) + -4|0);
          store4($incdec$ptr246$i,$conv242$i);
          $a$2$ph$i = $incdec$ptr246$i;
         }
        } while(0);
        $z$2$i = $z$1548$i;
        while(1) {
         $cmp249$i = ($z$2$i>>>0)>($a$2$ph$i>>>0);
         if (!($cmp249$i)) {
          break;
         }
         $arrayidx251$i = ((($z$2$i)) + -4|0);
         $81 = load4($arrayidx251$i);
         $lnot$i = ($81|0)==(0);
         if ($lnot$i) {
          $z$2$i = $arrayidx251$i;
         } else {
          break;
         }
        }
        $82 = load4($e2$i);
        $sub256$i = (($82) - ($cond233$i))|0;
        store4($e2$i,$sub256$i);
        $cmp225$i = ($sub256$i|0)>(0);
        if ($cmp225$i) {
         $79 = $sub256$i;$a$1549$i = $a$2$ph$i;$z$1548$i = $z$2$i;
        } else {
         $$pr477$i = $sub256$i;$a$1$lcssa$i = $a$2$ph$i;$z$1$lcssa$i = $z$2$i;
         break;
        }
       }
      } else {
       $$pr477$i = $$pr$i;$a$1$lcssa$i = $arraydecay208$add$ptr213$i;$z$1$lcssa$i = $incdec$ptr217$i;
      }
      $cmp259537$i = ($$pr477$i|0)<(0);
      if ($cmp259537$i) {
       $add273$i = (($$p$i) + 25)|0;
       $div274$i = (($add273$i|0) / 9)&-1;
       $add275$i = (($div274$i) + 1)|0;
       $cmp299$i = ($or$i242|0)==(102);
       $83 = $$pr477$i;$a$3539$i = $a$1$lcssa$i;$z$3538$i = $z$1$lcssa$i;
       while(1) {
        $sub264$i = (0 - ($83))|0;
        $cmp265$i = ($sub264$i|0)>(9);
        $cond271$i = $cmp265$i ? 9 : $sub264$i;
        $cmp277533$i = ($a$3539$i>>>0)<($z$3538$i>>>0);
        do {
         if ($cmp277533$i) {
          $shl280$i = 1 << $cond271$i;
          $sub281$i = (($shl280$i) + -1)|0;
          $shr285$i = 1000000000 >>> $cond271$i;
          $carry262$0535$i = 0;$d$1534$i = $a$3539$i;
          while(1) {
           $85 = load4($d$1534$i);
           $and282$i = $85 & $sub281$i;
           $shr283$i = $85 >>> $cond271$i;
           $add284$i = (($shr283$i) + ($carry262$0535$i))|0;
           store4($d$1534$i,$add284$i);
           $mul286$i = Math_imul($and282$i, $shr285$i)|0;
           $incdec$ptr288$i = ((($d$1534$i)) + 4|0);
           $cmp277$i = ($incdec$ptr288$i>>>0)<($z$3538$i>>>0);
           if ($cmp277$i) {
            $carry262$0535$i = $mul286$i;$d$1534$i = $incdec$ptr288$i;
           } else {
            break;
           }
          }
          $86 = load4($a$3539$i);
          $tobool290$i = ($86|0)==(0);
          $incdec$ptr292$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3$i = $tobool290$i ? $incdec$ptr292$i : $a$3539$i;
          $tobool294$i = ($mul286$i|0)==(0);
          if ($tobool294$i) {
           $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $z$3538$i;
           break;
          }
          $incdec$ptr296$i = ((($z$3538$i)) + 4|0);
          store4($z$3538$i,$mul286$i);
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $incdec$ptr296$i;
         } else {
          $84 = load4($a$3539$i);
          $tobool290565$i = ($84|0)==(0);
          $incdec$ptr292566$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3567$i = $tobool290565$i ? $incdec$ptr292566$i : $a$3539$i;
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3567$i;$z$4$i = $z$3538$i;
         }
        } while(0);
        $cond304$i = $cmp299$i ? $arraydecay208$add$ptr213$i : $incdec$ptr292$a$3569$i;
        $sub$ptr$lhs$cast305$i = $z$4$i;
        $sub$ptr$rhs$cast306$i = $cond304$i;
        $sub$ptr$sub307$i = (($sub$ptr$lhs$cast305$i) - ($sub$ptr$rhs$cast306$i))|0;
        $sub$ptr$div$i = $sub$ptr$sub307$i >> 2;
        $cmp308$i = ($sub$ptr$div$i|0)>($add275$i|0);
        $add$ptr311$i = (($cond304$i) + ($add275$i<<2)|0);
        $add$ptr311$z$4$i = $cmp308$i ? $add$ptr311$i : $z$4$i;
        $87 = load4($e2$i);
        $add313$i = (($87) + ($cond271$i))|0;
        store4($e2$i,$add313$i);
        $cmp259$i = ($add313$i|0)<(0);
        if ($cmp259$i) {
         $83 = $add313$i;$a$3539$i = $incdec$ptr292$a$3569$i;$z$3538$i = $add$ptr311$z$4$i;
        } else {
         $a$3$lcssa$i = $incdec$ptr292$a$3569$i;$z$3$lcssa$i = $add$ptr311$z$4$i;
         break;
        }
       }
      } else {
       $a$3$lcssa$i = $a$1$lcssa$i;$z$3$lcssa$i = $z$1$lcssa$i;
      }
      $cmp315$i = ($a$3$lcssa$i>>>0)<($z$3$lcssa$i>>>0);
      $sub$ptr$lhs$cast318$i = $arraydecay208$add$ptr213$i;
      do {
       if ($cmp315$i) {
        $sub$ptr$rhs$cast319$i = $a$3$lcssa$i;
        $sub$ptr$sub320$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast319$i))|0;
        $sub$ptr$div321$i = $sub$ptr$sub320$i >> 2;
        $mul322$i = ($sub$ptr$div321$i*9)|0;
        $88 = load4($a$3$lcssa$i);
        $cmp324529$i = ($88>>>0)<(10);
        if ($cmp324529$i) {
         $e$1$i = $mul322$i;
         break;
        } else {
         $e$0531$i = $mul322$i;$i$0530$i = 10;
        }
        while(1) {
         $mul328$i = ($i$0530$i*10)|0;
         $inc$i = (($e$0531$i) + 1)|0;
         $cmp324$i = ($88>>>0)<($mul328$i>>>0);
         if ($cmp324$i) {
          $e$1$i = $inc$i;
          break;
         } else {
          $e$0531$i = $inc$i;$i$0530$i = $mul328$i;
         }
        }
       } else {
        $e$1$i = 0;
       }
      } while(0);
      $cmp333$i = ($or$i242|0)!=(102);
      $mul335$i = $cmp333$i ? $e$1$i : 0;
      $sub336$i = (($$p$i) - ($mul335$i))|0;
      $cmp338$i = ($or$i242|0)==(103);
      $tobool341$i = ($$p$i|0)!=(0);
      $89 = $tobool341$i & $cmp338$i;
      $land$ext$neg$i = $89 << 31 >> 31;
      $sub343$i = (($sub336$i) + ($land$ext$neg$i))|0;
      $sub$ptr$lhs$cast344$i = $z$3$lcssa$i;
      $sub$ptr$sub346$i = (($sub$ptr$lhs$cast344$i) - ($sub$ptr$lhs$cast318$i))|0;
      $sub$ptr$div347$i = $sub$ptr$sub346$i >> 2;
      $90 = ($sub$ptr$div347$i*9)|0;
      $mul349$i = (($90) + -9)|0;
      $cmp350$i = ($sub343$i|0)<($mul349$i|0);
      if ($cmp350$i) {
       $add$ptr354$i = ((($arraydecay208$add$ptr213$i)) + 4|0);
       $add355$i = (($sub343$i) + 9216)|0;
       $div356$i = (($add355$i|0) / 9)&-1;
       $sub357$i = (($div356$i) + -1024)|0;
       $add$ptr358$i = (($add$ptr354$i) + ($sub357$i<<2)|0);
       $rem360$i = (($add355$i|0) % 9)&-1;
       $j$0524$i = (($rem360$i) + 1)|0;
       $cmp363525$i = ($j$0524$i|0)<(9);
       if ($cmp363525$i) {
        $i$1526$i = 10;$j$0527$i = $j$0524$i;
        while(1) {
         $mul367$i = ($i$1526$i*10)|0;
         $j$0$i = (($j$0527$i) + 1)|0;
         $exitcond$i = ($j$0$i|0)==(9);
         if ($exitcond$i) {
          $i$1$lcssa$i = $mul367$i;
          break;
         } else {
          $i$1526$i = $mul367$i;$j$0527$i = $j$0$i;
         }
        }
       } else {
        $i$1$lcssa$i = 10;
       }
       $91 = load4($add$ptr358$i);
       $rem370$i = (($91>>>0) % ($i$1$lcssa$i>>>0))&-1;
       $tobool371$i = ($rem370$i|0)==(0);
       $add$ptr373$i = ((($add$ptr358$i)) + 4|0);
       $cmp374$i = ($add$ptr373$i|0)==($z$3$lcssa$i|0);
       $or$cond395$i = $cmp374$i & $tobool371$i;
       do {
        if ($or$cond395$i) {
         $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
        } else {
         $div378$i = (($91>>>0) / ($i$1$lcssa$i>>>0))&-1;
         $and379$i = $div378$i & 1;
         $tobool380$i = ($and379$i|0)==(0);
         $$396$i = $tobool380$i ? 9007199254740992.0 : 9007199254740994.0;
         $div384$i = (($i$1$lcssa$i|0) / 2)&-1;
         $cmp385$i = ($rem370$i>>>0)<($div384$i>>>0);
         if ($cmp385$i) {
          $small$0$i = 0.5;
         } else {
          $cmp390$i = ($rem370$i|0)==($div384$i|0);
          $or$cond397$i = $cmp374$i & $cmp390$i;
          $$404$i = $or$cond397$i ? 1.0 : 1.5;
          $small$0$i = $$404$i;
         }
         $tobool400$i = ($pl$0$i|0)==(0);
         do {
          if ($tobool400$i) {
           $round377$1$i = $$396$i;$small$1$i = $small$0$i;
          } else {
           $92 = load1($prefix$0$i);
           $cmp403$i = ($92<<24>>24)==(45);
           if (!($cmp403$i)) {
            $round377$1$i = $$396$i;$small$1$i = $small$0$i;
            break;
           }
           $mul406$i = -$$396$i;
           $mul407$i = -$small$0$i;
           $round377$1$i = $mul406$i;$small$1$i = $mul407$i;
          }
         } while(0);
         $sub409$i = (($91) - ($rem370$i))|0;
         store4($add$ptr358$i,$sub409$i);
         $add410$i = $round377$1$i + $small$1$i;
         $cmp411$i = $add410$i != $round377$1$i;
         if (!($cmp411$i)) {
          $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
          break;
         }
         $add414$i = (($sub409$i) + ($i$1$lcssa$i))|0;
         store4($add$ptr358$i,$add414$i);
         $cmp416519$i = ($add414$i>>>0)>(999999999);
         if ($cmp416519$i) {
          $a$5521$i = $a$3$lcssa$i;$d$2520$i = $add$ptr358$i;
          while(1) {
           $incdec$ptr419$i = ((($d$2520$i)) + -4|0);
           store4($d$2520$i,0);
           $cmp420$i = ($incdec$ptr419$i>>>0)<($a$5521$i>>>0);
           if ($cmp420$i) {
            $incdec$ptr423$i = ((($a$5521$i)) + -4|0);
            store4($incdec$ptr423$i,0);
            $a$6$i = $incdec$ptr423$i;
           } else {
            $a$6$i = $a$5521$i;
           }
           $93 = load4($incdec$ptr419$i);
           $inc425$i = (($93) + 1)|0;
           store4($incdec$ptr419$i,$inc425$i);
           $cmp416$i = ($inc425$i>>>0)>(999999999);
           if ($cmp416$i) {
            $a$5521$i = $a$6$i;$d$2520$i = $incdec$ptr419$i;
           } else {
            $a$5$lcssa$i = $a$6$i;$d$2$lcssa$i = $incdec$ptr419$i;
            break;
           }
          }
         } else {
          $a$5$lcssa$i = $a$3$lcssa$i;$d$2$lcssa$i = $add$ptr358$i;
         }
         $sub$ptr$rhs$cast428$i = $a$5$lcssa$i;
         $sub$ptr$sub429$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast428$i))|0;
         $sub$ptr$div430$i = $sub$ptr$sub429$i >> 2;
         $mul431$i = ($sub$ptr$div430$i*9)|0;
         $94 = load4($a$5$lcssa$i);
         $cmp433515$i = ($94>>>0)<(10);
         if ($cmp433515$i) {
          $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $mul431$i;
          break;
         } else {
          $e$2517$i = $mul431$i;$i$2516$i = 10;
         }
         while(1) {
          $mul437$i = ($i$2516$i*10)|0;
          $inc438$i = (($e$2517$i) + 1)|0;
          $cmp433$i = ($94>>>0)<($mul437$i>>>0);
          if ($cmp433$i) {
           $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $inc438$i;
           break;
          } else {
           $e$2517$i = $inc438$i;$i$2516$i = $mul437$i;
          }
         }
        }
       } while(0);
       $add$ptr442$i = ((($d$4$i)) + 4|0);
       $cmp443$i = ($z$3$lcssa$i>>>0)>($add$ptr442$i>>>0);
       $add$ptr442$z$3$i = $cmp443$i ? $add$ptr442$i : $z$3$lcssa$i;
       $a$9$ph$i = $a$8$i;$e$5$ph$i = $e$4$i;$z$7$ph$i = $add$ptr442$z$3$i;
      } else {
       $a$9$ph$i = $a$3$lcssa$i;$e$5$ph$i = $e$1$i;$z$7$ph$i = $z$3$lcssa$i;
      }
      $sub626$le$i = (0 - ($e$5$ph$i))|0;
      $z$7$i = $z$7$ph$i;
      while(1) {
       $cmp450$i = ($z$7$i>>>0)>($a$9$ph$i>>>0);
       if (!($cmp450$i)) {
        $cmp450$lcssa$i = 0;
        break;
       }
       $arrayidx453$i = ((($z$7$i)) + -4|0);
       $95 = load4($arrayidx453$i);
       $lnot455$i = ($95|0)==(0);
       if ($lnot455$i) {
        $z$7$i = $arrayidx453$i;
       } else {
        $cmp450$lcssa$i = 1;
        break;
       }
      }
      do {
       if ($cmp338$i) {
        $96 = $tobool341$i&1;
        $inc468$i = $96 ^ 1;
        $$p$inc468$i = (($inc468$i) + ($$p$i))|0;
        $cmp470$i = ($$p$inc468$i|0)>($e$5$ph$i|0);
        $cmp473$i = ($e$5$ph$i|0)>(-5);
        $or$cond2$i = $cmp470$i & $cmp473$i;
        if ($or$cond2$i) {
         $dec476$i = (($t$0) + -1)|0;
         $add477$neg$i = (($$p$inc468$i) + -1)|0;
         $sub478$i = (($add477$neg$i) - ($e$5$ph$i))|0;
         $p$addr$2$i = $sub478$i;$t$addr$0$i = $dec476$i;
        } else {
         $sub480$i = (($t$0) + -2)|0;
         $dec481$i = (($$p$inc468$i) + -1)|0;
         $p$addr$2$i = $dec481$i;$t$addr$0$i = $sub480$i;
        }
        $and483$i = $fl$1$and220 & 8;
        $tobool484$i = ($and483$i|0)==(0);
        if (!($tobool484$i)) {
         $and610$pre$phi$iZ2D = $and483$i;$p$addr$3$i = $p$addr$2$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
        do {
         if ($cmp450$lcssa$i) {
          $arrayidx489$i = ((($z$7$i)) + -4|0);
          $97 = load4($arrayidx489$i);
          $tobool490$i = ($97|0)==(0);
          if ($tobool490$i) {
           $j$2$i = 9;
           break;
          }
          $rem494510$i = (($97>>>0) % 10)&-1;
          $cmp495511$i = ($rem494510$i|0)==(0);
          if ($cmp495511$i) {
           $i$3512$i = 10;$j$1513$i = 0;
          } else {
           $j$2$i = 0;
           break;
          }
          while(1) {
           $mul499$i = ($i$3512$i*10)|0;
           $inc500$i = (($j$1513$i) + 1)|0;
           $rem494$i = (($97>>>0) % ($mul499$i>>>0))&-1;
           $cmp495$i = ($rem494$i|0)==(0);
           if ($cmp495$i) {
            $i$3512$i = $mul499$i;$j$1513$i = $inc500$i;
           } else {
            $j$2$i = $inc500$i;
            break;
           }
          }
         } else {
          $j$2$i = 9;
         }
        } while(0);
        $or504$i = $t$addr$0$i | 32;
        $cmp505$i = ($or504$i|0)==(102);
        $sub$ptr$lhs$cast508$i = $z$7$i;
        $sub$ptr$sub510$i = (($sub$ptr$lhs$cast508$i) - ($sub$ptr$lhs$cast318$i))|0;
        $sub$ptr$div511$i = $sub$ptr$sub510$i >> 2;
        $98 = ($sub$ptr$div511$i*9)|0;
        $mul513$i = (($98) + -9)|0;
        if ($cmp505$i) {
         $sub514$i = (($mul513$i) - ($j$2$i))|0;
         $cmp515$i = ($sub514$i|0)<(0);
         $$sub514$i = $cmp515$i ? 0 : $sub514$i;
         $cmp528$i = ($p$addr$2$i|0)<($$sub514$i|0);
         $p$addr$2$$sub514398$i = $cmp528$i ? $p$addr$2$i : $$sub514$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub514398$i;$t$addr$1$i = $t$addr$0$i;
         break;
        } else {
         $add561$i = (($mul513$i) + ($e$5$ph$i))|0;
         $sub562$i = (($add561$i) - ($j$2$i))|0;
         $cmp563$i = ($sub562$i|0)<(0);
         $$sub562$i = $cmp563$i ? 0 : $sub562$i;
         $cmp577$i = ($p$addr$2$i|0)<($$sub562$i|0);
         $p$addr$2$$sub562399$i = $cmp577$i ? $p$addr$2$i : $$sub562$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub562399$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
       } else {
        $$pre562$i = $fl$1$and220 & 8;
        $and610$pre$phi$iZ2D = $$pre562$i;$p$addr$3$i = $$p$i;$t$addr$1$i = $t$0;
       }
      } while(0);
      $99 = $p$addr$3$i | $and610$pre$phi$iZ2D;
      $100 = ($99|0)!=(0);
      $lor$ext$i = $100&1;
      $or613$i = $t$addr$1$i | 32;
      $cmp614$i = ($or613$i|0)==(102);
      if ($cmp614$i) {
       $cmp617$i = ($e$5$ph$i|0)>(0);
       $add620$i = $cmp617$i ? $e$5$ph$i : 0;
       $estr$2$i = 0;$sub$ptr$sub650$pn$i = $add620$i;
      } else {
       $cmp623$i = ($e$5$ph$i|0)<(0);
       $cond629$i = $cmp623$i ? $sub626$le$i : $e$5$ph$i;
       $conv630$i = i64_sext($cond629$i);
       $call631$i = (_fmt_u($conv630$i,$arrayidx$i236)|0);
       $sub$ptr$rhs$cast634504$i = $call631$i;
       $sub$ptr$sub635505$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634504$i))|0;
       $cmp636506$i = ($sub$ptr$sub635505$i|0)<(2);
       if ($cmp636506$i) {
        $estr$1507$i = $call631$i;
        while(1) {
         $incdec$ptr639$i = ((($estr$1507$i)) + -1|0);
         store1($incdec$ptr639$i,48);
         $sub$ptr$rhs$cast634$i = $incdec$ptr639$i;
         $sub$ptr$sub635$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634$i))|0;
         $cmp636$i = ($sub$ptr$sub635$i|0)<(2);
         if ($cmp636$i) {
          $estr$1507$i = $incdec$ptr639$i;
         } else {
          $estr$1$lcssa$i = $incdec$ptr639$i;
          break;
         }
        }
       } else {
        $estr$1$lcssa$i = $call631$i;
       }
       $101 = $e$5$ph$i >> 31;
       $102 = $101 & 2;
       $103 = (($102) + 43)|0;
       $conv644$i = $103&255;
       $incdec$ptr645$i = ((($estr$1$lcssa$i)) + -1|0);
       store1($incdec$ptr645$i,$conv644$i);
       $conv646$i = $t$addr$1$i&255;
       $incdec$ptr647$i = ((($estr$1$lcssa$i)) + -2|0);
       store1($incdec$ptr647$i,$conv646$i);
       $sub$ptr$rhs$cast649$i = $incdec$ptr647$i;
       $sub$ptr$sub650$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast649$i))|0;
       $estr$2$i = $incdec$ptr647$i;$sub$ptr$sub650$pn$i = $sub$ptr$sub650$i;
      }
      $add608$i = (($pl$0$i) + 1)|0;
      $add612$i = (($add608$i) + ($p$addr$3$i))|0;
      $l$1$i = (($add612$i) + ($lor$ext$i))|0;
      $add653$i = (($l$1$i) + ($sub$ptr$sub650$pn$i))|0;
      _pad($f,32,$w$1,$add653$i,$fl$1$and220);
      $104 = load4($f);
      $and$i436$i = $104 & 32;
      $tobool$i437$i = ($and$i436$i|0)==(0);
      if ($tobool$i437$i) {
       (___fwritex($prefix$0$i,$pl$0$i,$f)|0);
      }
      $xor655$i = $fl$1$and220 ^ 65536;
      _pad($f,48,$w$1,$add653$i,$xor655$i);
      do {
       if ($cmp614$i) {
        $cmp660$i = ($a$9$ph$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
        $r$0$a$9$i = $cmp660$i ? $arraydecay208$add$ptr213$i : $a$9$ph$i;
        $d$5494$i = $r$0$a$9$i;
        while(1) {
         $105 = load4($d$5494$i);
         $conv669$i = i64_zext($105>>>0);
         $call672$i = (_fmt_u($conv669$i,$add$ptr671$i)|0);
         $cmp673$i = ($d$5494$i|0)==($r$0$a$9$i|0);
         do {
          if ($cmp673$i) {
           $cmp686$i = ($call672$i|0)==($add$ptr671$i|0);
           if (!($cmp686$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           store1($incdec$ptr689$i,48);
           $s668$1$i = $incdec$ptr689$i;
          } else {
           $cmp678491$i = ($call672$i>>>0)>($buf$i>>>0);
           if (!($cmp678491$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           $106 = $call672$i;
           $107 = (($106) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($107|0))|0;
           $s668$0492$i = $call672$i;
           while(1) {
            $incdec$ptr681$i = ((($s668$0492$i)) + -1|0);
            $cmp678$i = ($incdec$ptr681$i>>>0)>($buf$i>>>0);
            if ($cmp678$i) {
             $s668$0492$i = $incdec$ptr681$i;
            } else {
             $s668$1$i = $incdec$ptr681$i;
             break;
            }
           }
          }
         } while(0);
         $108 = load4($f);
         $and$i442$i = $108 & 32;
         $tobool$i443$i = ($and$i442$i|0)==(0);
         if ($tobool$i443$i) {
          $sub$ptr$rhs$cast695$i = $s668$1$i;
          $sub$ptr$sub696$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast695$i))|0;
          (___fwritex($s668$1$i,$sub$ptr$sub696$i,$f)|0);
         }
         $incdec$ptr698$i = ((($d$5494$i)) + 4|0);
         $cmp665$i = ($incdec$ptr698$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
         if ($cmp665$i) {
          break;
         } else {
          $d$5494$i = $incdec$ptr698$i;
         }
        }
        $109 = ($99|0)==(0);
        do {
         if (!($109)) {
          $110 = load4($f);
          $and$i448$i = $110 & 32;
          $tobool$i449$i = ($and$i448$i|0)==(0);
          if (!($tobool$i449$i)) {
           break;
          }
          (___fwritex(2008,1,$f)|0);
         }
        } while(0);
        $cmp707486$i = ($incdec$ptr698$i>>>0)<($z$7$i>>>0);
        $cmp710487$i = ($p$addr$3$i|0)>(0);
        $111 = $cmp710487$i & $cmp707486$i;
        if ($111) {
         $d$6488$i = $incdec$ptr698$i;$p$addr$4489$i = $p$addr$3$i;
         while(1) {
          $112 = load4($d$6488$i);
          $conv716$i = i64_zext($112>>>0);
          $call719$i = (_fmt_u($conv716$i,$add$ptr671$i)|0);
          $cmp722483$i = ($call719$i>>>0)>($buf$i>>>0);
          if ($cmp722483$i) {
           $113 = $call719$i;
           $114 = (($113) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($114|0))|0;
           $s715$0484$i = $call719$i;
           while(1) {
            $incdec$ptr725$i = ((($s715$0484$i)) + -1|0);
            $cmp722$i = ($incdec$ptr725$i>>>0)>($buf$i>>>0);
            if ($cmp722$i) {
             $s715$0484$i = $incdec$ptr725$i;
            } else {
             $s715$0$lcssa$i = $incdec$ptr725$i;
             break;
            }
           }
          } else {
           $s715$0$lcssa$i = $call719$i;
          }
          $115 = load4($f);
          $and$i454$i = $115 & 32;
          $tobool$i455$i = ($and$i454$i|0)==(0);
          if ($tobool$i455$i) {
           $cmp727$i = ($p$addr$4489$i|0)>(9);
           $cond732$i = $cmp727$i ? 9 : $p$addr$4489$i;
           (___fwritex($s715$0$lcssa$i,$cond732$i,$f)|0);
          }
          $incdec$ptr734$i = ((($d$6488$i)) + 4|0);
          $sub735$i = (($p$addr$4489$i) + -9)|0;
          $cmp707$i = ($incdec$ptr734$i>>>0)<($z$7$i>>>0);
          $cmp710$i = ($p$addr$4489$i|0)>(9);
          $116 = $cmp710$i & $cmp707$i;
          if ($116) {
           $d$6488$i = $incdec$ptr734$i;$p$addr$4489$i = $sub735$i;
          } else {
           $p$addr$4$lcssa$i = $sub735$i;
           break;
          }
         }
        } else {
         $p$addr$4$lcssa$i = $p$addr$3$i;
        }
        $add737$i = (($p$addr$4$lcssa$i) + 9)|0;
        _pad($f,48,$add737$i,9,0);
       } else {
        $add$ptr742$i = ((($a$9$ph$i)) + 4|0);
        $z$7$add$ptr742$i = $cmp450$lcssa$i ? $z$7$i : $add$ptr742$i;
        $cmp748499$i = ($p$addr$3$i|0)>(-1);
        if ($cmp748499$i) {
         $tobool781$i = ($and610$pre$phi$iZ2D|0)==(0);
         $d$7500$i = $a$9$ph$i;$p$addr$5501$i = $p$addr$3$i;
         while(1) {
          $117 = load4($d$7500$i);
          $conv754$i = i64_zext($117>>>0);
          $call757$i = (_fmt_u($conv754$i,$add$ptr671$i)|0);
          $cmp760$i = ($call757$i|0)==($add$ptr671$i|0);
          if ($cmp760$i) {
           store1($incdec$ptr689$i,48);
           $s753$0$i = $incdec$ptr689$i;
          } else {
           $s753$0$i = $call757$i;
          }
          $cmp765$i = ($d$7500$i|0)==($a$9$ph$i|0);
          do {
           if ($cmp765$i) {
            $incdec$ptr776$i = ((($s753$0$i)) + 1|0);
            $118 = load4($f);
            $and$i460$i = $118 & 32;
            $tobool$i461$i = ($and$i460$i|0)==(0);
            if ($tobool$i461$i) {
             (___fwritex($s753$0$i,1,$f)|0);
            }
            $cmp777$i = ($p$addr$5501$i|0)<(1);
            $or$cond401$i = $tobool781$i & $cmp777$i;
            if ($or$cond401$i) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            $119 = load4($f);
            $and$i466$i = $119 & 32;
            $tobool$i467$i = ($and$i466$i|0)==(0);
            if (!($tobool$i467$i)) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            (___fwritex(2008,1,$f)|0);
            $s753$2$i = $incdec$ptr776$i;
           } else {
            $cmp770495$i = ($s753$0$i>>>0)>($buf$i>>>0);
            if (!($cmp770495$i)) {
             $s753$2$i = $s753$0$i;
             break;
            }
            $scevgep556$i = (($s753$0$i) + ($0)|0);
            $scevgep556557$i = $scevgep556$i;
            _memset(($buf$i|0),48,($scevgep556557$i|0))|0;
            $s753$1496$i = $s753$0$i;
            while(1) {
             $incdec$ptr773$i = ((($s753$1496$i)) + -1|0);
             $cmp770$i = ($incdec$ptr773$i>>>0)>($buf$i>>>0);
             if ($cmp770$i) {
              $s753$1496$i = $incdec$ptr773$i;
             } else {
              $s753$2$i = $incdec$ptr773$i;
              break;
             }
            }
           }
          } while(0);
          $sub$ptr$rhs$cast788$i = $s753$2$i;
          $sub$ptr$sub789$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast788$i))|0;
          $120 = load4($f);
          $and$i472$i = $120 & 32;
          $tobool$i473$i = ($and$i472$i|0)==(0);
          if ($tobool$i473$i) {
           $cmp790$i = ($p$addr$5501$i|0)>($sub$ptr$sub789$i|0);
           $cond800$i = $cmp790$i ? $sub$ptr$sub789$i : $p$addr$5501$i;
           (___fwritex($s753$2$i,$cond800$i,$f)|0);
          }
          $sub806$i = (($p$addr$5501$i) - ($sub$ptr$sub789$i))|0;
          $incdec$ptr808$i = ((($d$7500$i)) + 4|0);
          $cmp745$i = ($incdec$ptr808$i>>>0)<($z$7$add$ptr742$i>>>0);
          $cmp748$i = ($sub806$i|0)>(-1);
          $121 = $cmp745$i & $cmp748$i;
          if ($121) {
           $d$7500$i = $incdec$ptr808$i;$p$addr$5501$i = $sub806$i;
          } else {
           $p$addr$5$lcssa$i = $sub806$i;
           break;
          }
         }
        } else {
         $p$addr$5$lcssa$i = $p$addr$3$i;
        }
        $add810$i = (($p$addr$5$lcssa$i) + 18)|0;
        _pad($f,48,$add810$i,18,0);
        $122 = load4($f);
        $and$i$i = $122 & 32;
        $tobool$i$i = ($and$i$i|0)==(0);
        if (!($tobool$i$i)) {
         break;
        }
        $sub$ptr$rhs$cast812$i = $estr$2$i;
        $sub$ptr$sub813$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast812$i))|0;
        (___fwritex($estr$2$i,$sub$ptr$sub813$i,$f)|0);
       }
      } while(0);
      $xor816$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add653$i,$xor816$i);
      $cmp818$i = ($add653$i|0)<($w$1|0);
      $w$add653$i = $cmp818$i ? $w$1 : $add653$i;
      $retval$0$i = $w$add653$i;
     } else {
      $and36$i = $t$0 & 32;
      $tobool37$i = ($and36$i|0)!=(0);
      $cond$i = $tobool37$i ? 1992 : 1996;
      $cmp38$i = ($y$addr$0$i != $y$addr$0$i) | (0.0 != 0.0);
      $cond43$i = $tobool37$i ? 2000 : 2004;
      $pl$1$i = $cmp38$i ? 0 : $pl$0$i;
      $s35$0$i = $cmp38$i ? $cond43$i : $cond$i;
      $add$i240 = (($pl$1$i) + 3)|0;
      _pad($f,32,$w$1,$add$i240,$and220);
      $65 = load4($f);
      $and$i406$i = $65 & 32;
      $tobool$i407$i = ($and$i406$i|0)==(0);
      if ($tobool$i407$i) {
       (___fwritex($prefix$0$i,$pl$1$i,$f)|0);
       $$pre$i = load4($f);
       $66 = $$pre$i;
      } else {
       $66 = $65;
      }
      $and$i412$i = $66 & 32;
      $tobool$i413$i = ($and$i412$i|0)==(0);
      if ($tobool$i413$i) {
       (___fwritex($s35$0$i,3,$f)|0);
      }
      $xor$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add$i240,$xor$i);
      $cmp48$i = ($add$i240|0)<($w$1|0);
      $cond53$i = $cmp48$i ? $w$1 : $add$i240;
      $retval$0$i = $cond53$i;
     }
    } while(0);
    $cnt$0 = $cnt$1;$l$0 = $retval$0$i;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue L1;
    break;
   }
   default: {
    $a$2 = $s$0;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 1956;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $47 = load8($arg);
    $and250 = $t$1 & 32;
    $tobool5$i = i64_eq($47,i64_const(0,0));
    if ($tobool5$i) {
     $49 = i64_const(0,0);$s$addr$0$lcssa$i = $add$ptr206;
    } else {
     $s$addr$06$i = $add$ptr206;$x$addr$07$i = $47;
     while(1) {
      $x$addr$0$tr$i = i64_trunc($x$addr$07$i);
      $idxprom$i = $x$addr$0$tr$i & 15;
      $arrayidx$i = (1940 + ($idxprom$i)|0);
      $48 = load1($arrayidx$i);
      $conv4$i211 = $48&255;
      $or$i = $conv4$i211 | $and250;
      $conv1$i = $or$i&255;
      $incdec$ptr$i212 = ((($s$addr$06$i)) + -1|0);
      store1($incdec$ptr$i212,$conv1$i);
      $shr$i = i64_lshr($x$addr$07$i,i64_const(4,0));
      $tobool$i213 = i64_eq($shr$i,i64_const(0,0));
      if ($tobool$i213) {
       break;
      } else {
       $s$addr$06$i = $incdec$ptr$i212;$x$addr$07$i = $shr$i;
      }
     }
     $$pre338 = load8($arg);
     $49 = $$pre338;$s$addr$0$lcssa$i = $incdec$ptr$i212;
    }
    $tobool253 = i64_eq($49,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (1956 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 1956 : $add$ptr258;
    $$272 = $or$cond193 ? 0 : 2;
    $a$0 = $s$addr$0$lcssa$i;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$272;$prefix$1 = $$add$ptr258;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $call305 = (_fmt_u($52,$add$ptr206)|0);
    $a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $call357 = (_memchr($a$1,0,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 1956;$z$2 = $z$1;
   }
   else if ((label|0) == 85) {
    label = 0;
    $i$0310 = 0;$l$1309 = 0;$ws$0311 = $127;
    while(1) {
     $59 = load4($ws$0311);
     $tobool381 = ($59|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0310;$l$2 = $l$1309;
      break;
     }
     $call385 = (_wctomb($mb,$59)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4340) - ($i$0310))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0310;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0311)) + 4|0);
     $add396 = (($call385) + ($i$0310))|0;
     $cmp378 = ($p$4340>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0310 = $add396;$l$1309 = $call385;$ws$0311 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call385;
      break;
     }
    }
    $cmp398 = ($l$2|0)<(0);
    if ($cmp398) {
     $retval$0 = -1;
     break L1;
    }
    _pad($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405318 = ($i$0$lcssa|0)==(0);
    if ($cmp405318) {
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $i$1319 = 0;$ws$1320 = $127;
     while(1) {
      $60 = load4($ws$1320);
      $tobool408 = ($60|0)==(0);
      if ($tobool408) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $incdec$ptr411 = ((($ws$1320)) + 4|0);
      $call412 = (_wctomb($mb,$60)|0);
      $add413 = (($call412) + ($i$1319))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $61 = load4($f);
      $and$i231 = $61 & 32;
      $tobool$i232 = ($and$i231|0)==(0);
      if ($tobool$i232) {
       (___fwritex($mb,$call412,$f)|0);
      }
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1319 = $add413;$ws$1320 = $incdec$ptr411;
      } else {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad($f,32,$w$1,$i$0$lcssa343,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa343|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa343;
   $cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $53 = load8($arg);
   $tobool313 = i64_ne($53,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool315 | $tobool313;
   if ($or$cond) {
    $sub$ptr$rhs$cast319 = $a$0;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $54 = $tobool313&1;
    $lnot$ext = $54 ^ 1;
    $add323 = (($lnot$ext) + ($sub$ptr$sub320))|0;
    $cmp324 = ($p$2|0)>($add323|0);
    $p$2$add323 = $cmp324 ? $p$2 : $add323;
    $a$2 = $a$0;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   } else {
    $a$2 = $add$ptr206;$fl$6 = $and310$fl$4;$p$5 = 0;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   }
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad($f,32,$w$2,$add442,$fl$6);
  $123 = load4($f);
  $and$i245 = $123 & 32;
  $tobool$i246 = ($and$i245|0)==(0);
  if ($tobool$i246) {
   (___fwritex($prefix$2,$pl$2,$f)|0);
  }
  $xor450 = $fl$6 ^ 65536;
  _pad($f,48,$w$2,$add442,$xor450);
  _pad($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  $124 = load4($f);
  $and$i216 = $124 & 32;
  $tobool$i217 = ($and$i216|0)==(0);
  if ($tobool$i217) {
   (___fwritex($a$2,$sub$ptr$sub434,$f)|0);
  }
  $xor458 = $fl$6 ^ 8192;
  _pad($f,32,$w$2,$add442,$xor458);
  $cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
 }
 L345: do {
  if ((label|0) == 243) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2292 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2292<<2)|0);
      $125 = load4($arrayidx470);
      $tobool471 = ($125|0)==(0);
      if ($tobool471) {
       $i$3289 = $i$2292;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2292<<3)|0);
      _pop_arg($add$ptr474,$125,$ap);
      $inc = (($i$2292) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2292 = $inc;
      } else {
       $retval$0 = 1;
       break L345;
      }
     }
     while(1) {
      $arrayidx482 = (($nl_type) + ($i$3289<<2)|0);
      $126 = load4($arrayidx482);
      $lnot484 = ($126|0)==(0);
      $inc489 = (($i$3289) + 1)|0;
      if (!($lnot484)) {
       $retval$0 = -1;
       break L345;
      }
      $cmp479 = ($inc489|0)<(10);
      if ($cmp479) {
       $i$3289 = $inc489;
      } else {
       $retval$0 = 1;
       break;
      }
     }
    }
   } else {
    $retval$0 = $cnt$1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $call4 = 0;
 var $cmp = 0, $cmp11 = 0, $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $i$1 = 0, $l$addr$0 = 0, $lbf = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $3 = $$pre;
   label = 5;
  } else {
   $retval$0 = 0;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = load4($wpos);
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    $call4 = (FUNCTION_TABLE_iiii[$5 & 7]($f,$s,$l)|0);
    $retval$0 = $call4;
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = load1($lbf);
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = load1($arrayidx);
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = load4($write15);
     $call16 = (FUNCTION_TABLE_iiii[$8 & 7]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      $retval$0 = $i$0;
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $sub21 = (($l) - ($i$0))|0;
     $$pre31 = load4($wpos);
     $9 = $$pre31;$i$1 = $i$0;$l$addr$0 = $sub21;$s$addr$0 = $add$ptr;
    } else {
     $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$0|0),($l$addr$0|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$0)|0);
   store4($wpos,$add$ptr26);
   $add = (($i$1) + ($l$addr$0))|0;
   $retval$0 = $add;
  }
 } while(0);
 return ($retval$0|0);
}
function _pop_arg($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = i64(), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0;
 var $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv = i64(), $conv16 = 0, $conv17 = i64(), $conv22$mask = 0, $conv23 = i64(), $conv28 = 0, $conv29 = i64(), $conv34$mask = 0, $conv35 = i64();
 var $conv7 = i64(), $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = load4($ap);
     $0 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $1 = (($0) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $2 = $1 & $expanded30;
     $3 = $2;
     $4 = load4($3);
     $arglist_next = ((($3)) + 4|0);
     store4($ap,$arglist_next);
     store4($arg,$4);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($ap);
     $5 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $6 = (($5) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $7 = $6 & $expanded37;
     $8 = $7;
     $9 = load4($8);
     $arglist_next3 = ((($8)) + 4|0);
     store4($ap,$arglist_next3);
     $conv = i64_sext($9);
     store8($arg,$conv);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($ap);
     $10 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $11 = (($10) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $12 = $11 & $expanded44;
     $13 = $12;
     $14 = load4($13);
     $arglist_next6 = ((($13)) + 4|0);
     store4($ap,$arglist_next6);
     $conv7 = i64_zext($14>>>0);
     store8($arg,$conv7);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($ap);
     $15 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $16 = (($15) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $17 = $16 & $expanded51;
     $18 = $17;
     $19 = load8($18);
     $arglist_next9 = ((($18)) + 8|0);
     store4($ap,$arglist_next9);
     store8($arg,$19);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($ap);
     $20 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $21 = (($20) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $22 = $21 & $expanded58;
     $23 = $22;
     $24 = load4($23);
     $arglist_next12 = ((($23)) + 4|0);
     store4($ap,$arglist_next12);
     $conv16 = $24&65535;
     $conv17 = i64_sext($conv16 << 16 >> 16);
     store8($arg,$conv17);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($ap);
     $25 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $26 = (($25) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $27 = $26 & $expanded65;
     $28 = $27;
     $29 = load4($28);
     $arglist_next15 = ((($28)) + 4|0);
     store4($ap,$arglist_next15);
     $conv22$mask = $29 & 65535;
     $conv23 = i64_zext($conv22$mask>>>0);
     store8($arg,$conv23);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($ap);
     $30 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $31 = (($30) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $32 = $31 & $expanded72;
     $33 = $32;
     $34 = load4($33);
     $arglist_next18 = ((($33)) + 4|0);
     store4($ap,$arglist_next18);
     $conv28 = $34&255;
     $conv29 = i64_sext($conv28 << 24 >> 24);
     store8($arg,$conv29);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($ap);
     $35 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $36 = (($35) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $37 = $36 & $expanded79;
     $38 = $37;
     $39 = load4($38);
     $arglist_next21 = ((($38)) + 4|0);
     store4($ap,$arglist_next21);
     $conv34$mask = $39 & 255;
     $conv35 = i64_zext($conv34$mask>>>0);
     store8($arg,$conv35);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($ap);
     $40 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $41 = (($40) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $42 = $41 & $expanded86;
     $43 = $42;
     $44 = loadd($43);
     $arglist_next24 = ((($43)) + 8|0);
     store4($ap,$arglist_next24);
     stored($arg,$44);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($ap);
     $45 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $46 = (($45) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $47 = $46 & $expanded93;
     $48 = $47;
     $49 = loadd($48);
     $arglist_next27 = ((($48)) + 8|0);
     store4($ap,$arglist_next27);
     stored($arg,$49);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $add = i64(), $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $add = i64_or($rem,i64_const(48,0));
   $conv = i64_trunc($add)&255;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   store1($incdec$ptr,$conv);
   $div = i64_udiv($x$addr$012,i64_const(10,0));
   $cmp = i64_ugt($x$addr$012,i64_const(4294967295,9));
   if ($cmp) {
    $s$addr$013 = $incdec$ptr;$x$addr$012 = $div;
   } else {
    break;
   }
  }
  $extract$t16 = i64_trunc($div);
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $extract$t16;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $extract$t;
 }
 $tobool8 = ($x$addr$0$lcssa$off0|0)==(0);
 if ($tobool8) {
  $s$addr$1$lcssa = $s$addr$0$lcssa;
 } else {
  $s$addr$19 = $s$addr$0$lcssa;$y$010 = $x$addr$0$lcssa$off0;
  while(1) {
   $rem4 = (($y$010>>>0) % 10)&-1;
   $add5 = $rem4 | 48;
   $conv6 = $add5&255;
   $incdec$ptr7 = ((($s$addr$19)) + -1|0);
   store1($incdec$ptr7,$conv6);
   $div9 = (($y$010>>>0) / 10)&-1;
   $0 = ($y$010>>>0)<(10);
   if ($0) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (2010 + ($i$012)|0);
  $0 = load1($arrayidx);
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 2098;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 2098;
  } else {
   $i$111 = $i$012;$s$010 = 2098;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = load1($s$1);
    $tobool8 = ($1<<24>>24)==(0);
    $incdec$ptr = ((($s$1)) + 1|0);
    if ($tobool8) {
     break;
    } else {
     $s$1 = $incdec$ptr;
    }
   }
   $dec = (($i$111) + -1)|0;
   $tobool5 = ($dec|0)==(0);
   if ($tobool5) {
    $s$0$lcssa = $incdec$ptr;
    break;
   } else {
    $i$111 = $dec;$s$010 = $incdec$ptr;
    label = 5;
   }
  }
 }
 return ($s$0$lcssa|0);
}
function _pad($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and$i = 0, $and$i15 = 0, $cmp = 0, $cmp1 = 0, $cmp3 = 0, $cmp314 = 0, $cond = 0, $l$addr$0$lcssa21 = 0, $l$addr$017 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0;
 var $tobool = 0, $tobool$i = 0, $tobool$i16 = 0, $tobool$i18 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 do {
  if ($or$cond) {
   $sub = (($w) - ($l))|0;
   $cmp1 = ($sub>>>0)>(256);
   $cond = $cmp1 ? 256 : $sub;
   _memset(($pad|0),($c|0),($cond|0))|0;
   $cmp314 = ($sub>>>0)>(255);
   $0 = load4($f);
   $and$i15 = $0 & 32;
   $tobool$i16 = ($and$i15|0)==(0);
   if ($cmp314) {
    $1 = (($w) - ($l))|0;
    $4 = $0;$l$addr$017 = $sub;$tobool$i18 = $tobool$i16;
    while(1) {
     if ($tobool$i18) {
      (___fwritex($pad,256,$f)|0);
      $$pre = load4($f);
      $2 = $$pre;
     } else {
      $2 = $4;
     }
     $sub6 = (($l$addr$017) + -256)|0;
     $cmp3 = ($sub6>>>0)>(255);
     $and$i = $2 & 32;
     $tobool$i = ($and$i|0)==(0);
     if ($cmp3) {
      $4 = $2;$l$addr$017 = $sub6;$tobool$i18 = $tobool$i;
     } else {
      break;
     }
    }
    $3 = $1 & 255;
    if ($tobool$i) {
     $l$addr$0$lcssa21 = $3;
    } else {
     break;
    }
   } else {
    if ($tobool$i16) {
     $l$addr$0$lcssa21 = $sub;
    } else {
     break;
    }
   }
   (___fwritex($pad,$l$addr$0$lcssa21,$f)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  $call = (_wcrtomb($s,$wc,0)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_frexp($x,$e));
 return (+$call);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = i64(), $1 = 0, $2 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $shr$tr = 0, $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(52,0));
 $trunc = i64_trunc($shr)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $1 = load4($e);
   $sub = (($1) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  store4($e,$storemerge);
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $shr$tr = i64_trunc($shr);
  $conv = $shr$tr & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $2 = i64_bc2d($or);
  $retval$0 = $2;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc,$st) {
 $s = $s|0;
 $wc = $wc|0;
 $st = $st|0;
 var $0 = 0, $and = 0, $and19 = 0, $and23 = 0, $and36 = 0, $and41 = 0, $and45 = 0, $call = 0, $cmp = 0, $cmp11 = 0, $cmp2 = 0, $cmp28 = 0, $cmp9 = 0, $conv = 0, $conv16 = 0, $conv21 = 0, $conv25 = 0, $conv33 = 0, $conv38 = 0, $conv43 = 0;
 var $conv47 = 0, $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $incdec$ptr22 = 0, $incdec$ptr34 = 0, $incdec$ptr39 = 0, $incdec$ptr44 = 0, $or = 0, $or$cond = 0, $or15 = 0, $or20 = 0, $or24 = 0, $or32 = 0, $or37 = 0, $or42 = 0, $or46 = 0, $or6 = 0, $retval$0 = 0;
 var $shr1426 = 0, $shr1827 = 0, $shr28 = 0, $shr3123 = 0, $shr3524 = 0, $shr4025 = 0, $sub27 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    store1($s,$conv);
    $retval$0 = 1;
    break;
   }
   $cmp2 = ($wc>>>0)<(2048);
   if ($cmp2) {
    $shr28 = $wc >>> 6;
    $or = $shr28 | 192;
    $conv5 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv5);
    $and = $wc & 63;
    $or6 = $and | 128;
    $conv7 = $or6&255;
    store1($incdec$ptr,$conv7);
    $retval$0 = 2;
    break;
   }
   $cmp9 = ($wc>>>0)<(55296);
   $0 = $wc & -8192;
   $cmp11 = ($0|0)==(57344);
   $or$cond = $cmp9 | $cmp11;
   if ($or$cond) {
    $shr1426 = $wc >>> 12;
    $or15 = $shr1426 | 224;
    $conv16 = $or15&255;
    $incdec$ptr17 = ((($s)) + 1|0);
    store1($s,$conv16);
    $shr1827 = $wc >>> 6;
    $and19 = $shr1827 & 63;
    $or20 = $and19 | 128;
    $conv21 = $or20&255;
    $incdec$ptr22 = ((($s)) + 2|0);
    store1($incdec$ptr17,$conv21);
    $and23 = $wc & 63;
    $or24 = $and23 | 128;
    $conv25 = $or24&255;
    store1($incdec$ptr22,$conv25);
    $retval$0 = 3;
    break;
   }
   $sub27 = (($wc) + -65536)|0;
   $cmp28 = ($sub27>>>0)<(1048576);
   if ($cmp28) {
    $shr3123 = $wc >>> 18;
    $or32 = $shr3123 | 240;
    $conv33 = $or32&255;
    $incdec$ptr34 = ((($s)) + 1|0);
    store1($s,$conv33);
    $shr3524 = $wc >>> 12;
    $and36 = $shr3524 & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    $incdec$ptr39 = ((($s)) + 2|0);
    store1($incdec$ptr34,$conv38);
    $shr4025 = $wc >>> 6;
    $and41 = $shr4025 & 63;
    $or42 = $and41 | 128;
    $conv43 = $or42&255;
    $incdec$ptr44 = ((($s)) + 3|0);
    store1($incdec$ptr39,$conv43);
    $and45 = $wc & 63;
    $or46 = $and45 | 128;
    $conv47 = $or46&255;
    store1($incdec$ptr44,$conv47);
    $retval$0 = 4;
    break;
   } else {
    $call = (___errno_location()|0);
    store4($call,84);
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $1 = load4($f);
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  store4($rend,0);
  $rpos = ((($f)) + 4|0);
  store4($rpos,0);
  $buf = ((($f)) + 44|0);
  $2 = load4($buf);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$2);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$2);
  $3 = $2;
  $buf_size = ((($f)) + 48|0);
  $4 = load4($buf_size);
  $add$ptr = (($3) + ($4)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  store4($f,$or5);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv = 0, $conv18 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $lbf = 0, $retval$0 = 0;
 var $tobool = 0, $tobool1 = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 $conv = $_c&255;
 store1($c,$conv);
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $2 = $$pre;
   label = 4;
  } else {
   $retval$0 = -1;
  }
 } else {
  $2 = $0;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $wpos = ((($f)) + 20|0);
   $1 = load4($wpos);
   $cmp = ($1>>>0)<($2>>>0);
   if ($cmp) {
    $conv5 = $_c & 255;
    $lbf = ((($f)) + 75|0);
    $3 = load1($lbf);
    $conv6 = $3 << 24 >> 24;
    $cmp7 = ($conv5|0)==($conv6|0);
    if (!($cmp7)) {
     $incdec$ptr = ((($1)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($1,$conv);
     $retval$0 = $conv5;
     break;
    }
   }
   $write = ((($f)) + 36|0);
   $4 = load4($write);
   $call13 = (FUNCTION_TABLE_iiii[$4 & 7]($f,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = load1($c);
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $call24 = 0, $call8 = 0, $cmp = 0, $cmp1 = 0, $cmp11 = 0, $cmp16 = 0, $cmp3 = 0, $cond26 = 0, $conv = 0, $conv10 = 0, $conv19 = 0, $conv22 = 0;
 var $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $lbf = 0, $lbf9 = 0, $lock = 0, $retval$0 = 0, $tobool = 0, $wend = 0, $wend15 = 0, $wpos = 0, $wpos14 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)<(0);
 if ($cmp) {
  label = 3;
 } else {
  $call = (___lockfile($f)|0);
  $tobool = ($call|0)==(0);
  if ($tobool) {
   label = 3;
  } else {
   $lbf9 = ((($f)) + 75|0);
   $4 = load1($lbf9);
   $conv10 = $4 << 24 >> 24;
   $cmp11 = ($conv10|0)==($c|0);
   if ($cmp11) {
    label = 10;
   } else {
    $wpos14 = ((($f)) + 20|0);
    $5 = load4($wpos14);
    $wend15 = ((($f)) + 16|0);
    $6 = load4($wend15);
    $cmp16 = ($5>>>0)<($6>>>0);
    if ($cmp16) {
     $conv19 = $c&255;
     $incdec$ptr21 = ((($5)) + 1|0);
     store4($wpos14,$incdec$ptr21);
     store1($5,$conv19);
     $conv22 = $c & 255;
     $cond26 = $conv22;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $call24 = (___overflow($f,$c)|0);
    $cond26 = $call24;
   }
   ___unlockfile($f);
   $retval$0 = $cond26;
  }
 }
 do {
  if ((label|0) == 3) {
   $lbf = ((($f)) + 75|0);
   $1 = load1($lbf);
   $conv = $1 << 24 >> 24;
   $cmp1 = ($conv|0)==($c|0);
   if (!($cmp1)) {
    $wpos = ((($f)) + 20|0);
    $2 = load4($wpos);
    $wend = ((($f)) + 16|0);
    $3 = load4($wend);
    $cmp3 = ($2>>>0)<($3>>>0);
    if ($cmp3) {
     $conv5 = $c&255;
     $incdec$ptr = ((($2)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($2,$conv5);
     $conv7 = $c & 255;
     $retval$0 = $conv7;
     break;
    }
   }
   $call8 = (___overflow($f,$c)|0);
   $retval$0 = $call8;
  }
 } while(0);
 return ($retval$0|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i177 = 0, $$pre$i180 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i178Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
 var $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0;
 var $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0;
 var $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0;
 var $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0;
 var $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0;
 var $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i168 = 0, $R$3$i = 0, $R$3$i$i = 0, $R$3$i171 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i167 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0;
 var $add$i$i = 0, $add$i146 = 0, $add$i181 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i1$i$i = 0, $add$ptr$i16$i = 0, $add$ptr$i161 = 0, $add$ptr$i194 = 0, $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0;
 var $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0, $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0;
 var $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr8$i118$i = 0, $add$ptr95 = 0, $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0;
 var $add17$i = 0, $add17$i184 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0, $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0;
 var $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0, $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0;
 var $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i143 = 0, $and$i17$i = 0, $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0;
 var $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i205 = 0, $and199$i = 0, $and209$i$i = 0, $and21$i = 0, $and21$i149 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0;
 var $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0, $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0;
 var $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0, $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0;
 var $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0, $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i150 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0;
 var $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i159 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0, $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i169 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0;
 var $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0, $arrayidx27$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0;
 var $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i156 = 0, $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i163 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0;
 var $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0, $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0;
 var $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0, $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i140 = 0;
 var $cmp$i179 = 0, $cmp$i18$i = 0, $cmp$i2$i$i = 0, $cmp$i23$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp107$i157 = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0;
 var $cmp114$i = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i197 = 0, $cmp135$i = 0;
 var $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i198 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$not$i = 0, $cmp142$i = 0, $cmp144$i$i = 0, $cmp146 = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0;
 var $cmp159$i = 0, $cmp159$i200 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i201 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0;
 var $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp205$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0;
 var $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0;
 var $cmp32$i186 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0;
 var $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i155 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i187 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i188 = 0, $cmp59$i$i = 0, $cmp60$i = 0;
 var $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i191 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i192 = 0, $cmp83$i$i = 0, $cmp85$i = 0;
 var $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond$v$0$i = 0;
 var $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $cond4$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i164 = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0;
 var $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0;
 var $head$i$i = 0, $head$i$i$i = 0, $head$i154 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0;
 var $head25 = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0;
 var $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i172 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i173 = 0, $neg$i183 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0;
 var $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp150$i$i = 0, $not$cmp346$i$i = 0, $not$cmp418$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i189 = 0, $or$cond1$i = 0, $or$cond1$i185 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond95$i = 0, $or$i = 0;
 var $or$i$i = 0, $or$i$i$i = 0, $or$i196 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0;
 var $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $p$0$i$i = 0, $parent$i = 0;
 var $parent$i$i = 0, $parent$i162 = 0, $parent$i40$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0;
 var $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$i152 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i144 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0;
 var $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl221$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0;
 var $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0;
 var $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i147 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr123$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i148 = 0, $shr19$i = 0, $shr194$i = 0;
 var $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr322$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0;
 var $shr391$i = 0, $shr4$i = 0, $shr41$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i142 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i145 = 0, $shr72$i = 0;
 var $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0;
 var $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0104$i = 0, $sp$1103$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i182 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub10$i = 0;
 var $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0;
 var $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0;
 var $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$0$i151 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$793$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0;
 var $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$792$i = 0, $v$0$i = 0, $v$0$i153 = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(4668);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (4708 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      store4(4668,$and14);
     } else {
      $4 = load4((4684));
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = load4($bk);
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       store4($bk,$arrayidx);
       store4($1,$3);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = load4($head25);
    $or26 = $6 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = load4((4676));
   $cmp29 = ($cond>>>0)>($7>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (4708 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = load4($8);
     $fd69 = ((($9)) + 8|0);
     $10 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       store4(4668,$and74);
       $14 = $and74;
      } else {
       $11 = load4((4684));
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = load4($bk78);
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        store4($bk78,$arrayidx66);
        store4($8,$10);
        $14 = $0;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($9)) + 4|0);
     store4($head94,$or93);
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = load4((4688));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (4708 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(4668,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((4684));
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      store4($$pre$phiZ2D,$13);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$13);
      $fd123 = ((($13)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($13)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((4676),$sub91);
     store4((4688),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((4672));
    $cmp128 = ($18|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($18))|0;
     $and$i = $18 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (4972 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $rsize$0$i = $sub22$i;$t$0$i = $19;$v$0$i = $19;
     while(1) {
      $arrayidx23$i = ((($t$0$i)) + 16|0);
      $21 = load4($arrayidx23$i);
      $cmp$i = ($21|0)==(0|0);
      if ($cmp$i) {
       $arrayidx27$i = ((($t$0$i)) + 20|0);
       $22 = load4($arrayidx27$i);
       $cmp28$i = ($22|0)==(0|0);
       if ($cmp28$i) {
        break;
       } else {
        $cond4$i = $22;
       }
      } else {
       $cond4$i = $21;
      }
      $head29$i = ((($cond4$i)) + 4|0);
      $23 = load4($head29$i);
      $and30$i = $23 & -8;
      $sub31$i = (($and30$i) - ($cond))|0;
      $cmp32$i = ($sub31$i>>>0)<($rsize$0$i>>>0);
      $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$0$i;
      $cond$v$0$i = $cmp32$i ? $cond4$i : $v$0$i;
      $rsize$0$i = $sub31$rsize$0$i;$t$0$i = $cond4$i;$v$0$i = $cond$v$0$i;
     }
     $24 = load4((4684));
     $cmp33$i = ($v$0$i>>>0)<($24>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$i) + ($cond)|0);
     $cmp35$i = ($v$0$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$i)) + 24|0);
     $25 = load4($parent$i);
     $bk$i = ((($v$0$i)) + 12|0);
     $26 = load4($bk$i);
     $cmp40$i = ($26|0)==($v$0$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$i)) + 20|0);
       $30 = load4($arrayidx61$i);
       $cmp62$i = ($30|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$i)) + 16|0);
        $31 = load4($arrayidx65$i);
        $cmp66$i = ($31|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $31;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $30;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $32 = load4($arrayidx71$i);
        $cmp72$i = ($32|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $32;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $33 = load4($arrayidx75$i);
        $cmp76$i = ($33|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $33;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($24>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$i)) + 8|0);
       $27 = load4($fd$i);
       $cmp45$i = ($27>>>0)<($24>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($27)) + 12|0);
       $28 = load4($bk47$i);
       $cmp48$i = ($28|0)==($v$0$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($26)) + 8|0);
       $29 = load4($fd50$i);
       $cmp51$i = ($29|0)==($v$0$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$26);
        store4($fd50$i,$27);
        $R$3$i = $26;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($25|0)==(0|0);
     do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$i)) + 28|0);
       $34 = load4($index$i);
       $arrayidx94$i = (4972 + ($34<<2)|0);
       $35 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$i|0)==($35|0);
       if ($cmp95$i) {
        store4($arrayidx94$i,$R$3$i);
        $cond2$i = ($R$3$i|0)==(0|0);
        if ($cond2$i) {
         $shl$i = 1 << $34;
         $neg$i = $shl$i ^ -1;
         $and103$i = $18 & $neg$i;
         store4((4672),$and103$i);
         break;
        }
       } else {
        $36 = load4((4684));
        $cmp107$i = ($25>>>0)<($36>>>0);
        if ($cmp107$i) {
         _abort();
         // unreachable;
        }
        $arrayidx113$i = ((($25)) + 16|0);
        $37 = load4($arrayidx113$i);
        $cmp114$i = ($37|0)==($v$0$i|0);
        if ($cmp114$i) {
         store4($arrayidx113$i,$R$3$i);
        } else {
         $arrayidx121$i = ((($25)) + 20|0);
         store4($arrayidx121$i,$R$3$i);
        }
        $cmp126$i = ($R$3$i|0)==(0|0);
        if ($cmp126$i) {
         break;
        }
       }
       $38 = load4((4684));
       $cmp130$i = ($R$3$i>>>0)<($38>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$25);
       $arrayidx137$i = ((($v$0$i)) + 16|0);
       $39 = load4($arrayidx137$i);
       $cmp138$i = ($39|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($39>>>0)<($38>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$39);
          $parent149$i = ((($39)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$i)) + 20|0);
       $40 = load4($arrayidx154$i);
       $cmp155$i = ($40|0)==(0|0);
       if (!($cmp155$i)) {
        $41 = load4((4684));
        $cmp159$i = ($40>>>0)<($41>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$40);
         $parent166$i = ((($40)) + 24|0);
         store4($parent166$i,$R$3$i);
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$i)) + 4|0);
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $42 = load4($head182$i);
      $or183$i = $42 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$i)|0);
      store4($add$ptr190$i,$rsize$0$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $43 = load4((4688));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (4708 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        store4(4668,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $44 = ((($arrayidx196$i)) + 8|0);
        $45 = load4($44);
        $46 = load4((4684));
        $cmp208$i = ($45>>>0)<($46>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $44;$F197$0$i = $45;
        }
       }
       store4($$pre$phi$iZ2D,$43);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$43);
       $fd219$i = ((($43)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($43)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((4676),$rsize$0$i);
      store4((4688),$add$ptr$i);
     }
     $add$ptr225$i = ((($v$0$i)) + 8|0);
     $retval$0 = $add$ptr225$i;
     STACKTOP = sp;return ($retval$0|0);
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $47 = load4((4672));
    $cmp146 = ($47|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i140 = ($shr$i139|0)==(0);
     if ($cmp$i140) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i142 = $sub4$i >>> 16;
       $and$i143 = $shr5$i142 & 8;
       $shl$i144 = $shr$i139 << $and$i143;
       $sub6$i = (($shl$i144) + 520192)|0;
       $shr7$i145 = $sub6$i >>> 16;
       $and8$i = $shr7$i145 & 4;
       $add$i146 = $and8$i | $and$i143;
       $shl9$i = $shl$i144 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i147 = $sub10$i >>> 16;
       $and12$i = $shr11$i147 & 2;
       $add13$i = $add$i146 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i148 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i148))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i149 = $shr20$i & 1;
       $add22$i = $and21$i149 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i150 = (4972 + ($idx$0$i<<2)|0);
     $48 = load4($arrayidx$i150);
     $cmp24$i = ($48|0)==(0|0);
     L123: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 86;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i;
       $rsize$0$i152 = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i151 = $48;$v$0$i153 = 0;
       while(1) {
        $head$i154 = ((($t$0$i151)) + 4|0);
        $49 = load4($head$i154);
        $and32$i = $49 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i152>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i151;$v$410$i = $t$0$i151;
          label = 90;
          break L123;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i151;
         }
        } else {
         $rsize$1$i = $rsize$0$i152;$v$1$i = $v$0$i153;
        }
        $arrayidx40$i = ((($t$0$i151)) + 20|0);
        $50 = load4($arrayidx40$i);
        $shr41$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i151)) + 16|0) + ($shr41$i<<2)|0);
        $51 = load4($arrayidx44$i);
        $cmp45$i155 = ($50|0)==(0|0);
        $cmp46$i = ($50|0)==($51|0);
        $or$cond1$i = $cmp45$i155 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $50;
        $cmp49$i = ($51|0)==(0|0);
        $52 = $cmp49$i&1;
        $shl52$i = $52 ^ 1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 86;
         break;
        } else {
         $rsize$0$i152 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i151 = $51;$v$0$i153 = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $47 & $or$i;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i156 = (4972 + ($add92$i<<2)|0);
       $53 = load4($arrayidx94$i156);
       $t$4$ph$i = $53;
      } else {
       $t$4$ph$i = $t$2$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$3$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$3$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $54 = load4($head99$i);
       $and100$i = $54 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $55 = load4($arrayidx106$i);
       $cmp107$i157 = ($55|0)==(0|0);
       if (!($cmp107$i157)) {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $55;$v$410$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $arrayidx113$i159 = ((($t$48$i)) + 20|0);
       $56 = load4($arrayidx113$i159);
       $cmp97$i = ($56|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $56;$v$410$i = $t$4$v$4$i;
        label = 90;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $57 = load4((4676));
      $sub118$i = (($57) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $58 = load4((4684));
       $cmp121$i = ($v$4$lcssa$i>>>0)<($58>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i161 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i161>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i162 = ((($v$4$lcssa$i)) + 24|0);
       $59 = load4($parent$i162);
       $bk$i163 = ((($v$4$lcssa$i)) + 12|0);
       $60 = load4($bk$i163);
       $cmp128$i = ($60|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $64 = load4($arrayidx151$i);
         $cmp152$i = ($64|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $65 = load4($arrayidx155$i);
          $cmp156$i = ($65|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i171 = 0;
           break;
          } else {
           $R$1$i168 = $65;$RP$1$i167 = $arrayidx155$i;
          }
         } else {
          $R$1$i168 = $64;$RP$1$i167 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i168)) + 20|0);
          $66 = load4($arrayidx161$i);
          $cmp162$i = ($66|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i168 = $66;$RP$1$i167 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i169 = ((($R$1$i168)) + 16|0);
          $67 = load4($arrayidx165$i169);
          $cmp166$i = ($67|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i168 = $67;$RP$1$i167 = $arrayidx165$i169;
          }
         }
         $cmp171$i = ($RP$1$i167>>>0)<($58>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          store4($RP$1$i167,0);
          $R$3$i171 = $R$1$i168;
          break;
         }
        } else {
         $fd$i164 = ((($v$4$lcssa$i)) + 8|0);
         $61 = load4($fd$i164);
         $cmp133$i = ($61>>>0)<($58>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($61)) + 12|0);
         $62 = load4($bk136$i);
         $cmp137$i = ($62|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($60)) + 8|0);
         $63 = load4($fd139$i);
         $cmp140$i = ($63|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$60);
          store4($fd139$i,$61);
          $R$3$i171 = $60;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($59|0)==(0|0);
       do {
        if ($cmp180$i) {
         $81 = $47;
        } else {
         $index$i172 = ((($v$4$lcssa$i)) + 28|0);
         $68 = load4($index$i172);
         $arrayidx184$i = (4972 + ($68<<2)|0);
         $69 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($69|0);
         if ($cmp185$i) {
          store4($arrayidx184$i,$R$3$i171);
          $cond3$i = ($R$3$i171|0)==(0|0);
          if ($cond3$i) {
           $shl192$i = 1 << $68;
           $neg$i173 = $shl192$i ^ -1;
           $and194$i = $47 & $neg$i173;
           store4((4672),$and194$i);
           $81 = $and194$i;
           break;
          }
         } else {
          $70 = load4((4684));
          $cmp198$i = ($59>>>0)<($70>>>0);
          if ($cmp198$i) {
           _abort();
           // unreachable;
          }
          $arrayidx204$i = ((($59)) + 16|0);
          $71 = load4($arrayidx204$i);
          $cmp205$i = ($71|0)==($v$4$lcssa$i|0);
          if ($cmp205$i) {
           store4($arrayidx204$i,$R$3$i171);
          } else {
           $arrayidx212$i = ((($59)) + 20|0);
           store4($arrayidx212$i,$R$3$i171);
          }
          $cmp217$i = ($R$3$i171|0)==(0|0);
          if ($cmp217$i) {
           $81 = $47;
           break;
          }
         }
         $72 = load4((4684));
         $cmp221$i = ($R$3$i171>>>0)<($72>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i171)) + 24|0);
         store4($parent226$i,$59);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $73 = load4($arrayidx228$i);
         $cmp229$i = ($73|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($73>>>0)<($72>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i171)) + 16|0);
            store4($arrayidx239$i,$73);
            $parent240$i = ((($73)) + 24|0);
            store4($parent240$i,$R$3$i171);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $74 = load4($arrayidx245$i);
         $cmp246$i = ($74|0)==(0|0);
         if ($cmp246$i) {
          $81 = $47;
         } else {
          $75 = load4((4684));
          $cmp250$i = ($74>>>0)<($75>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i171)) + 20|0);
           store4($arrayidx256$i,$74);
           $parent257$i = ((($74)) + 24|0);
           store4($parent257$i,$R$3$i171);
           $81 = $47;
           break;
          }
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $76 = load4($head274$i);
         $or275$i = $76 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i161)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i161) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (4708 + ($shl288$i<<2)|0);
          $77 = load4(4668);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $77 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $77 | $shl291$i;
           store4(4668,$or297$i);
           $$pre$i177 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i178Z2D = $$pre$i177;$F290$0$i = $arrayidx289$i;
          } else {
           $78 = ((($arrayidx289$i)) + 8|0);
           $79 = load4($78);
           $80 = load4((4684));
           $cmp301$i = ($79>>>0)<($80>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i178Z2D = $78;$F290$0$i = $79;
           }
          }
          store4($$pre$phi$i178Z2D,$add$ptr$i161);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i161);
          $fd312$i = ((($add$ptr$i161)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i161)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (4972 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i161)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i161)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $81 & $shl362$i;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $81 | $shl362$i;
          store4((4672),$or368$i);
          store4($arrayidx355$i,$add$ptr$i161);
          $parent369$i = ((($add$ptr$i161)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i161)) + 12|0);
          store4($bk370$i,$add$ptr$i161);
          $fd371$i = ((($add$ptr$i161)) + 8|0);
          store4($fd371$i,$add$ptr$i161);
          break;
         }
         $82 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $82;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $83 = load4($head386$i);
          $and387$i = $83 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 148;
           break;
          }
          $shr391$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr391$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $84 = load4($arrayidx394$i);
          $cmp396$i = ($84|0)==(0|0);
          if ($cmp396$i) {
           label = 145;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $84;
          }
         }
         if ((label|0) == 145) {
          $85 = load4((4684));
          $cmp401$i = ($arrayidx394$i>>>0)<($85>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i161);
           $parent406$i = ((($add$ptr$i161)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i161)) + 12|0);
           store4($bk407$i,$add$ptr$i161);
           $fd408$i = ((($add$ptr$i161)) + 8|0);
           store4($fd408$i,$add$ptr$i161);
           break;
          }
         }
         else if ((label|0) == 148) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $86 = load4($fd416$i);
          $87 = load4((4684));
          $cmp422$i = ($86>>>0)>=($87>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($87>>>0);
          $88 = $cmp422$i & $not$cmp418$i;
          if ($88) {
           $bk429$i = ((($86)) + 12|0);
           store4($bk429$i,$add$ptr$i161);
           store4($fd416$i,$add$ptr$i161);
           $fd431$i = ((($add$ptr$i161)) + 8|0);
           store4($fd431$i,$86);
           $bk432$i = ((($add$ptr$i161)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i161)) + 24|0);
           store4($parent433$i,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $89 = load4((4676));
 $cmp156 = ($89>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($89) - ($nb$0))|0;
  $90 = load4((4688));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($90) + ($nb$0)|0);
   store4((4688),$add$ptr166);
   store4((4676),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($90)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((4676),0);
   store4((4688),0);
   $or176 = $89 | 3;
   $head177 = ((($90)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($90) + ($89)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $91 = load4($head179);
   $or180 = $91 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($90)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $92 = load4((4680));
 $cmp186 = ($92>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($92) - ($nb$0))|0;
  store4((4680),$sub190);
  $93 = load4((4692));
  $add$ptr193 = (($93) + ($nb$0)|0);
  store4((4692),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($93)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($93)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4(5140);
 $cmp$i179 = ($94|0)==(0);
 if ($cmp$i179) {
  store4((5148),4096);
  store4((5144),4096);
  store4((5152),-1);
  store4((5156),-1);
  store4((5160),0);
  store4((5112),0);
  $95 = $magic$i$i;
  $xor$i$i = $95 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(5140,$and6$i$i);
  $96 = 4096;
 } else {
  $$pre$i180 = load4((5148));
  $96 = $$pre$i180;
 }
 $add$i181 = (($nb$0) + 48)|0;
 $sub$i182 = (($nb$0) + 47)|0;
 $add9$i = (($96) + ($sub$i182))|0;
 $neg$i183 = (0 - ($96))|0;
 $and11$i = $add9$i & $neg$i183;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $97 = load4((5108));
 $cmp15$i = ($97|0)==(0);
 if (!($cmp15$i)) {
  $98 = load4((5100));
  $add17$i184 = (($98) + ($and11$i))|0;
  $cmp19$i = ($add17$i184>>>0)<=($98>>>0);
  $cmp21$i = ($add17$i184>>>0)>($97>>>0);
  $or$cond1$i185 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i185) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $99 = load4((5112));
 $and29$i = $99 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L255: do {
  if ($tobool30$i) {
   $100 = load4((4692));
   $cmp32$i186 = ($100|0)==(0|0);
   L257: do {
    if ($cmp32$i186) {
     label = 172;
    } else {
     $sp$0$i$i = (5116);
     while(1) {
      $101 = load4($sp$0$i$i);
      $cmp$i11$i = ($101>>>0)>($100>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $102 = load4($size$i$i);
       $add$ptr$i$i = (($101) + ($102)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($100>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $103 = load4($next$i$i);
      $cmp3$i$i = ($103|0)==(0|0);
      if ($cmp3$i$i) {
       label = 172;
       break L257;
      } else {
       $sp$0$i$i = $103;
      }
     }
     $add77$i = (($add9$i) - ($92))|0;
     $and80$i = $add77$i & $neg$i183;
     $cmp81$i192 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i192) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $108 = load4($sp$0$i$i);
      $109 = load4($size$i$i);
      $add$ptr$i194 = (($108) + ($109)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i194|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if (!($cmp89$i)) {
        $tbase$793$i = $call83$i;$tsize$792$i = $and80$i;
        label = 190;
        break L255;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if (!($cmp38$i)) {
      $104 = $call37$i;
      $105 = load4((5144));
      $sub41$i = (($105) + -1)|0;
      $and42$i = $sub41$i & $104;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($104))|0;
      $neg48$i = (0 - ($105))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($104))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $106 = load4((5100));
      $add54$i = (($and11$add51$i) + ($106))|0;
      $cmp55$i187 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i188 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i189 = $cmp55$i187 & $cmp57$i188;
      if ($or$cond$i189) {
       $107 = load4((5108));
       $cmp60$i = ($107|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($106>>>0);
        $cmp66$i191 = ($add54$i>>>0)>($107>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i191;
        if ($or$cond2$i) {
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$793$i = $call37$i;$tsize$792$i = $and11$add51$i;
        label = 190;
        break L255;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i181>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     do {
      if ($or$cond3$i) {
       $110 = load4((5148));
       $sub99$i = (($sub$i182) - ($ssize$2$ph$i))|0;
       $add101$i = (($sub99$i) + ($110))|0;
       $neg103$i = (0 - ($110))|0;
       $and104$i = $add101$i & $neg103$i;
       $cmp105$i = ($and104$i>>>0)<(2147483647);
       if ($cmp105$i) {
        $call107$i = (_sbrk(($and104$i|0))|0);
        $cmp108$i = ($call107$i|0)==((-1)|0);
        if ($cmp108$i) {
         (_sbrk(($sub112$i|0))|0);
         break L274;
        } else {
         $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
         $ssize$5$i = $add110$i;
         break;
        }
       } else {
        $ssize$5$i = $ssize$2$ph$i;
       }
      } else {
       $ssize$5$i = $ssize$2$ph$i;
      }
     } while(0);
     $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
     if (!($cmp118$i)) {
      $tbase$793$i = $br$2$ph$i;$tsize$792$i = $ssize$5$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $111 = load4((5112));
   $or$i196 = $111 | 4;
   store4((5112),$or$i196);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i197 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i197 & $cmp135$i;
   $cmp137$i198 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i198 & $or$cond4$i;
   if ($or$cond7$i) {
    $sub$ptr$lhs$cast$i = $call132$i;
    $sub$ptr$rhs$cast$i = $call131$i;
    $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
    $add140$i = (($nb$0) + 40)|0;
    $cmp141$not$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
    if ($cmp141$not$i) {
     $tbase$793$i = $call131$i;$tsize$792$i = $sub$ptr$sub$i;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $112 = load4((5100));
  $add150$i = (($112) + ($tsize$792$i))|0;
  store4((5100),$add150$i);
  $113 = load4((5104));
  $cmp151$i = ($add150$i>>>0)>($113>>>0);
  if ($cmp151$i) {
   store4((5104),$add150$i);
  }
  $114 = load4((4692));
  $cmp157$i = ($114|0)==(0|0);
  do {
   if ($cmp157$i) {
    $115 = load4((4684));
    $cmp159$i200 = ($115|0)==(0|0);
    $cmp162$i201 = ($tbase$793$i>>>0)<($115>>>0);
    $or$cond8$i = $cmp159$i200 | $cmp162$i201;
    if ($or$cond8$i) {
     store4((4684),$tbase$793$i);
    }
    store4((5116),$tbase$793$i);
    store4((5120),$tsize$792$i);
    store4((5128),0);
    $116 = load4(5140);
    store4((4704),$116);
    store4((4700),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (4708 + ($shl$i13$i<<2)|0);
     $117 = ((($arrayidx$i14$i)) + 12|0);
     store4($117,$arrayidx$i14$i);
     $118 = ((($arrayidx$i14$i)) + 8|0);
     store4($118,$arrayidx$i14$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$793$i)) + 8|0);
    $119 = $add$ptr$i16$i;
    $and$i17$i = $119 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $120 = (0 - ($119))|0;
    $and3$i$i = $120 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$793$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    store4((4692),$add$ptr4$i$i);
    store4((4680),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $121 = load4((5156));
    store4((4696),$121);
   } else {
    $sp$0104$i = (5116);
    while(1) {
     $122 = load4($sp$0104$i);
     $size188$i = ((($sp$0104$i)) + 4|0);
     $123 = load4($size188$i);
     $add$ptr189$i = (($122) + ($123)|0);
     $cmp190$i = ($tbase$793$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 200;
      break;
     }
     $next$i = ((($sp$0104$i)) + 8|0);
     $124 = load4($next$i);
     $cmp186$i = ($124|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0104$i = $124;
     }
    }
    if ((label|0) == 200) {
     $sflags193$i = ((($sp$0104$i)) + 12|0);
     $125 = load4($sflags193$i);
     $and194$i205 = $125 & 8;
     $tobool195$i = ($and194$i205|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($114>>>0)>=($122>>>0);
      $cmp209$i = ($114>>>0)<($tbase$793$i>>>0);
      $or$cond95$i = $cmp209$i & $cmp203$i;
      if ($or$cond95$i) {
       $add212$i = (($123) + ($tsize$792$i))|0;
       store4($size188$i,$add212$i);
       $126 = load4((4680));
       $add$ptr$i49$i = ((($114)) + 8|0);
       $127 = $add$ptr$i49$i;
       $and$i50$i = $127 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $128 = (0 - ($127))|0;
       $and3$i52$i = $128 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($114) + ($cond$i53$i)|0);
       $add215$i = (($tsize$792$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($add215$i) + ($126))|0;
       store4((4692),$add$ptr4$i54$i);
       store4((4680),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $129 = load4((5156));
       store4((4696),$129);
       break;
      }
     }
    }
    $130 = load4((4684));
    $cmp218$i = ($tbase$793$i>>>0)<($130>>>0);
    if ($cmp218$i) {
     store4((4684),$tbase$793$i);
     $145 = $tbase$793$i;
    } else {
     $145 = $130;
    }
    $add$ptr227$i = (($tbase$793$i) + ($tsize$792$i)|0);
    $sp$1103$i = (5116);
    while(1) {
     $131 = load4($sp$1103$i);
     $cmp228$i = ($131|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 208;
      break;
     }
     $next231$i = ((($sp$1103$i)) + 8|0);
     $132 = load4($next231$i);
     $cmp224$i = ($132|0)==(0|0);
     if ($cmp224$i) {
      $sp$0$i$i$i = (5116);
      break;
     } else {
      $sp$1103$i = $132;
     }
    }
    if ((label|0) == 208) {
     $sflags235$i = ((($sp$1103$i)) + 12|0);
     $133 = load4($sflags235$i);
     $and236$i = $133 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1103$i,$tbase$793$i);
      $size245$i = ((($sp$1103$i)) + 4|0);
      $134 = load4($size245$i);
      $add246$i = (($134) + ($tsize$792$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i21$i = ((($tbase$793$i)) + 8|0);
      $135 = $add$ptr$i21$i;
      $and$i22$i = $135 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $136 = (0 - ($135))|0;
      $and3$i24$i = $136 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$793$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $137 = $add$ptr5$i$i;
      $and6$i27$i = $137 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and13$i$i = $138 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($114|0);
      do {
       if ($cmp20$i$i) {
        $139 = load4((4680));
        $add$i$i = (($139) + ($sub18$i$i))|0;
        store4((4680),$add$i$i);
        store4((4692),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $140 = load4((4688));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($140|0);
        if ($cmp24$i$i) {
         $141 = load4((4676));
         $add26$i$i = (($141) + ($sub18$i$i))|0;
         store4((4676),$add26$i$i);
         store4((4688),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $142 = load4($head32$i$i);
        $and33$i$i = $142 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $142 & -8;
         $shr$i34$i = $142 >>> 3;
         $cmp38$i$i = ($142>>>0)<(256);
         L326: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $143 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $144 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (4708 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($143|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($143>>>0)<($145>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($143)) + 12|0);
             $146 = load4($bk43$i$i);
             $cmp44$i$i = ($146|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($144|0)==($143|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $147 = load4(4668);
            $and49$i$i = $147 & $neg$i$i;
            store4(4668,$and49$i$i);
            break;
           }
           $cmp54$i$i = ($144|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($144)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($144>>>0)<($145>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($144)) + 8|0);
             $148 = load4($fd59$i$i);
             $cmp60$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($143)) + 12|0);
           store4($bk67$i$i,$144);
           store4($fd68$pre$phi$i$iZ2D,$143);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $149 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $150 = load4($bk74$i$i);
           $cmp75$i$i = ($150|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $154 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($154|0)==(0|0);
             if ($cmp97$i$i) {
              $155 = load4($child$i$i);
              $cmp100$i$i = ($155|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $155;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $154;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $156 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($156|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $156;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $157 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($157|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($145>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $151 = load4($fd78$i$i);
             $cmp81$i$i = ($151>>>0)<($145>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($151)) + 12|0);
             $152 = load4($bk82$i$i);
             $cmp83$i$i = ($152|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($150)) + 8|0);
             $153 = load4($fd85$i$i);
             $cmp86$i$i = ($153|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$150);
              store4($fd85$i$i,$151);
              $R$3$i$i = $150;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($149|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $158 = load4($index$i43$i);
           $arrayidx123$i$i = (4972 + ($158<<2)|0);
           $159 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($159|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $158;
             $neg132$i$i = $shl131$i$i ^ -1;
             $160 = load4((4672));
             $and133$i$i = $160 & $neg132$i$i;
             store4((4672),$and133$i$i);
             break L326;
            } else {
             $161 = load4((4684));
             $cmp137$i$i = ($149>>>0)<($161>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             }
             $arrayidx143$i$i = ((($149)) + 16|0);
             $162 = load4($arrayidx143$i$i);
             $cmp144$i$i = ($162|0)==($add$ptr16$i$i|0);
             if ($cmp144$i$i) {
              store4($arrayidx143$i$i,$R$3$i$i);
             } else {
              $arrayidx151$i$i = ((($149)) + 20|0);
              store4($arrayidx151$i$i,$R$3$i$i);
             }
             $cmp156$i$i = ($R$3$i$i|0)==(0|0);
             if ($cmp156$i$i) {
              break L326;
             }
            }
           } while(0);
           $163 = load4((4684));
           $cmp160$i$i = ($R$3$i$i>>>0)<($163>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$149);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $164 = load4($child166$i$i);
           $cmp168$i$i = ($164|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($164>>>0)<($163>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$164);
              $parent179$i$i = ((($164)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $165 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($165|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $166 = load4((4684));
           $cmp189$i$i = ($165>>>0)<($166>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$165);
            $parent196$i$i = ((($165)) + 24|0);
            store4($parent196$i$i,$R$3$i$i);
            break;
           }
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $167 = load4($head208$i$i);
        $and209$i$i = $167 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl221$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (4708 + ($shl221$i$i<<2)|0);
         $168 = load4(4668);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $168 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $168 | $shl226$i$i;
           store4(4668,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $169 = ((($arrayidx223$i$i)) + 8|0);
           $170 = load4($169);
           $171 = load4((4684));
           $cmp236$i$i = ($170>>>0)<($171>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $169;$F224$0$i$i = $170;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i46$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (4972 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $172 = load4((4672));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $172 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $172 | $shl294$i$i;
         store4((4672),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $173 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $173;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $174 = load4($head317$i$i);
         $and318$i$i = $174 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 278;
          break;
         }
         $shr322$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr322$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $175 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($175|0)==(0|0);
         if ($cmp327$i$i) {
          label = 275;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $175;
         }
        }
        if ((label|0) == 275) {
         $176 = load4((4684));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($176>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          store4($arrayidx325$i$i,$add$ptr17$i$i);
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent337$i$i,$T$0$i47$i);
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk338$i$i,$add$ptr17$i$i);
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd339$i$i,$add$ptr17$i$i);
          break;
         }
        }
        else if ((label|0) == 278) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $177 = load4($fd344$i$i);
         $178 = load4((4684));
         $cmp350$i$i = ($177>>>0)>=($178>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($178>>>0);
         $179 = $cmp350$i$i & $not$cmp346$i$i;
         if ($179) {
          $bk357$i$i = ((($177)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$177);
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk360$i$i,$T$0$i47$i);
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent361$i$i,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i26$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     } else {
      $sp$0$i$i$i = (5116);
     }
    }
    while(1) {
     $180 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($180>>>0)>($114>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $181 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($180) + ($181)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($114>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $182 = load4($next$i$i$i);
     $sp$0$i$i$i = $182;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $183 = $add$ptr3$i$i;
    $and$i$i = $183 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $184 = (0 - ($183))|0;
    $and6$i10$i = $184 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr8$i118$i = ((($114)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr8$i118$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $114 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i1$i$i = ((($tbase$793$i)) + 8|0);
    $185 = $add$ptr$i1$i$i;
    $and$i$i$i = $185 & 7;
    $cmp$i2$i$i = ($and$i$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and3$i$i$i = $186 & 7;
    $cond$i$i$i = $cmp$i2$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$793$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((4692),$add$ptr4$i$i$i);
    store4((4680),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $187 = load4((5156));
    store4((4696),$187);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((5116),4),4); store8($add$ptr14$i$i+8 | 0,load8((5116)+8 | 0,4),4);
    store4((5116),$tbase$793$i);
    store4((5120),$tsize$792$i);
    store4((5128),0);
    store4((5124),$add$ptr14$i$i);
    $p$0$i$i = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($p$0$i$i)) + 4|0);
     store4($add$ptr24$i$i,7);
     $188 = ((($add$ptr24$i$i)) + 4|0);
     $cmp27$i$i = ($188>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $p$0$i$i = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($114|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $114;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $189 = load4($head$i$i);
     $and32$i$i = $189 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($114)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (4708 + ($shl$i$i<<2)|0);
      $190 = load4(4668);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $190 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $190 | $shl39$i$i;
       store4(4668,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $191 = ((($arrayidx$i$i)) + 8|0);
       $192 = load4($191);
       $193 = load4((4684));
       $cmp46$i$i = ($192>>>0)<($193>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $191;$F$0$i$i = $192;
       }
      }
      store4($$pre$phi$i$iZ2D,$114);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$114);
      $fd54$i$i = ((($114)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($114)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (4972 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($114)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($114)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr8$i118$i,0);
     $194 = load4((4672));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $194 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $194 | $shl95$i$i;
      store4((4672),$or101$i$i);
      store4($arrayidx91$i$i,$114);
      $parent$i$i = ((($114)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($114)) + 12|0);
      store4($bk102$i$i,$114);
      $fd103$i$i = ((($114)) + 8|0);
      store4($fd103$i$i,$114);
      break;
     }
     $195 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $195;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $196 = load4($head118$i$i);
      $and119$i$i = $196 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 304;
       break;
      }
      $shr123$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr123$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $197 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($197|0)==(0|0);
      if ($cmp128$i$i) {
       label = 301;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $197;
      }
     }
     if ((label|0) == 301) {
      $198 = load4((4684));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($198>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$114);
       $parent138$i$i = ((($114)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($114)) + 12|0);
       store4($bk139$i$i,$114);
       $fd140$i$i = ((($114)) + 8|0);
       store4($fd140$i$i,$114);
       break;
      }
     }
     else if ((label|0) == 304) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $199 = load4($fd148$i$i);
      $200 = load4((4684));
      $cmp153$i$i = ($199>>>0)>=($200>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($200>>>0);
      $201 = $cmp153$i$i & $not$cmp150$i$i;
      if ($201) {
       $bk158$i$i = ((($199)) + 12|0);
       store4($bk158$i$i,$114);
       store4($fd148$i$i,$114);
       $fd160$i$i = ((($114)) + 8|0);
       store4($fd160$i$i,$199);
       $bk161$i$i = ((($114)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($114)) + 24|0);
       store4($parent162$i$i,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $202 = load4((4680));
  $cmp257$i = ($202>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($202) - ($nb$0))|0;
   store4((4680),$sub260$i);
   $203 = load4((4692));
   $add$ptr262$i = (($203) + ($nb$0)|0);
   store4((4692),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($203)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($203)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $call275$i = (___errno_location()|0);
 store4($call275$i,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre307 = 0, $$pre308 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, $F510$0 = 0;
 var $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0, $add258 = 0, $add267 = 0;
 var $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0, $and545 = 0, $and549 = 0;
 var $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0, $arrayidx400 = 0, $arrayidx419 = 0;
 var $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0, $bk580 = 0, $bk611 = 0;
 var $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0, $cmp127 = 0, $cmp13 = 0;
 var $cmp131 = 0, $cmp143 = 0, $cmp150 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp280 = 0;
 var $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0, $cmp401 = 0;
 var $cmp413 = 0, $cmp42 = 0, $cmp420 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0;
 var $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond291 = 0, $cond292 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0;
 var $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0;
 var $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0;
 var $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0;
 var $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr596 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0;
 var $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((4684));
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = load4($head);
 $and = $1 & 3;
 $cmp2 = ($and|0)==(1);
 if ($cmp2) {
  _abort();
  // unreachable;
 }
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 do {
  if ($tobool9) {
   $2 = load4($add$ptr);
   $cmp13 = ($and|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    _abort();
    // unreachable;
   }
   $3 = load4((4688));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    store4((4676),$add17);
    $and215 = $27 & -2;
    store4($head209,$and215);
    $or = $add17 | 1;
    $head216 = ((($add$ptr16)) + 4|0);
    store4($head216,$or);
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (4708 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = load4($bk34);
     $cmp35 = ($6|0)==($add$ptr16|0);
     if (!($cmp35)) {
      _abort();
      // unreachable;
     }
    }
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $7 = load4(4668);
     $and46 = $7 & $neg;
     store4(4668,$and46);
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre308 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre308;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = load4($fd56);
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    store4($bk66,$5);
    store4($fd67$pre$phiZ2D,$4);
    $p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = load4($bk73);
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = load4($arrayidx99);
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = load4($child);
      $cmp104 = ($15|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $16 = load4($arrayidx108);
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx113);
      $cmp114 = ($17|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx113;
      }
     }
     $cmp118 = ($RP$1>>>0)<($0>>>0);
     if ($cmp118) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = load4($fd78);
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = load4($bk82);
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = load4($fd86);
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      store4($bk82,$10);
      store4($fd86,$11);
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp127 = ($9|0)==(0|0);
   if ($cmp127) {
    $p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (4972 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    if ($cmp131) {
     store4($arrayidx130,$R$3);
     $cond291 = ($R$3|0)==(0|0);
     if ($cond291) {
      $shl138 = 1 << $18;
      $neg139 = $shl138 ^ -1;
      $20 = load4((4672));
      $and140 = $20 & $neg139;
      store4((4672),$and140);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $21 = load4((4684));
     $cmp143 = ($9>>>0)<($21>>>0);
     if ($cmp143) {
      _abort();
      // unreachable;
     }
     $arrayidx149 = ((($9)) + 16|0);
     $22 = load4($arrayidx149);
     $cmp150 = ($22|0)==($add$ptr16|0);
     if ($cmp150) {
      store4($arrayidx149,$R$3);
     } else {
      $arrayidx157 = ((($9)) + 20|0);
      store4($arrayidx157,$R$3);
     }
     $cmp162 = ($R$3|0)==(0|0);
     if ($cmp162) {
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
    $23 = load4((4684));
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$9);
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = load4($child171);
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       store4($arrayidx182,$24);
       $parent183 = ((($24)) + 24|0);
       store4($parent183,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = load4($arrayidx188);
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((4684));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($p$1>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $28 = load4($head231);
 $and232 = $28 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $28 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $29 = load4((4692));
  $cmp243 = ($add$ptr6|0)==($29|0);
  if ($cmp243) {
   $30 = load4((4680));
   $add246 = (($30) + ($psize$1))|0;
   store4((4680),$add246);
   store4((4692),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $31 = load4((4688));
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((4688),0);
   store4((4676),0);
   return;
  }
  $32 = load4((4688));
  $cmp255 = ($add$ptr6|0)==($32|0);
  if ($cmp255) {
   $33 = load4((4676));
   $add258 = (($33) + ($psize$1))|0;
   store4((4676),$add258);
   store4((4688),$p$1);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($p$1) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $28 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $28 >>> 3;
  $cmp269 = ($28>>>0)<(256);
  do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (4708 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((4684));
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = load4($bk286);
     $cmp287 = ($37|0)==($add$ptr6|0);
     if (!($cmp287)) {
      _abort();
      // unreachable;
     }
    }
    $cmp296 = ($35|0)==($34|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $38 = load4(4668);
     $and301 = $38 & $neg300;
     store4(4668,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre307 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre307;
    } else {
     $39 = load4((4684));
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = load4($fd311);
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    store4($bk321,$35);
    store4($fd322$pre$phiZ2D,$34);
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = load4($bk333);
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = load4($arrayidx362);
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = load4($child361);
       $cmp368 = ($48|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $48;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $47;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $49 = load4($arrayidx374);
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = load4($arrayidx379);
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = load4((4684));
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       store4($RP360$1,0);
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = load4($fd338);
      $44 = load4((4684));
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = load4($bk343);
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = load4($fd347);
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       store4($bk343,$42);
       store4($fd347,$43);
       $R332$3 = $42;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp395 = ($41|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $52 = load4($index399);
     $arrayidx400 = (4972 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     if ($cmp401) {
      store4($arrayidx400,$R332$3);
      $cond292 = ($R332$3|0)==(0|0);
      if ($cond292) {
       $shl408 = 1 << $52;
       $neg409 = $shl408 ^ -1;
       $54 = load4((4672));
       $and410 = $54 & $neg409;
       store4((4672),$and410);
       break;
      }
     } else {
      $55 = load4((4684));
      $cmp413 = ($41>>>0)<($55>>>0);
      if ($cmp413) {
       _abort();
       // unreachable;
      }
      $arrayidx419 = ((($41)) + 16|0);
      $56 = load4($arrayidx419);
      $cmp420 = ($56|0)==($add$ptr6|0);
      if ($cmp420) {
       store4($arrayidx419,$R332$3);
      } else {
       $arrayidx427 = ((($41)) + 20|0);
       store4($arrayidx427,$R332$3);
      }
      $cmp432 = ($R332$3|0)==(0|0);
      if ($cmp432) {
       break;
      }
     }
     $57 = load4((4684));
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$41);
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = load4($child443);
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        store4($arrayidx454,$58);
        $parent455 = ((($58)) + 24|0);
        store4($parent455,$R332$3);
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = load4($arrayidx460);
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = load4((4684));
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       store4($arrayidx470,$59);
       $parent471 = ((($59)) + 24|0);
       store4($parent471,$R332$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($p$1) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((4688));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((4676),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $28 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($p$1) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (4708 + ($shl508<<2)|0);
  $62 = load4(4668);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(4668,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((4684));
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (4972 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((4672));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((4672),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $67 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = load4($head591);
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 130;
     break;
    }
    $shr596 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr596<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 127;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 127) {
    $70 = load4((4684));
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     store4($arrayidx599,$p$1);
     $parent610 = ((($p$1)) + 24|0);
     store4($parent610,$T$0);
     $bk611 = ((($p$1)) + 12|0);
     store4($bk611,$p$1);
     $fd612 = ((($p$1)) + 8|0);
     store4($fd612,$p$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((4684));
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     store4($bk631,$p$1);
     store4($fd620,$p$1);
     $fd633 = ((($p$1)) + 8|0);
     store4($fd633,$71);
     $bk634 = ((($p$1)) + 12|0);
     store4($bk634,$T$0);
     $parent635 = ((($p$1)) + 24|0);
     store4($parent635,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = load4((4700));
 $dec = (($74) + -1)|0;
 store4((4700),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (5124);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((4700),-1);
 return;
}
function _log($x) {
 $x = +$x;
 var $0 = i64(), $1 = i64(), $2 = 0.0, $add = 0, $add35 = 0, $add36 = 0, $add46 = 0.0, $add51 = 0.0, $add53 = 0.0, $add56 = 0.0, $add58 = 0.0, $add60 = 0.0, $add62 = 0.0, $add64 = 0.0, $add67 = 0.0, $add69 = 0.0, $add71 = 0.0, $and = 0, $and40 = i64(), $cmp = 0;
 var $cmp19 = 0, $cmp23 = 0, $cmp27 = 0, $cmp5 = 0, $conv = 0, $conv18 = 0, $conv37 = i64(), $conv63 = 0.0, $div = 0.0, $div11 = 0.0, $div47 = 0.0, $hx$0 = 0, $k$0 = 0, $mul = 0.0, $mul14 = 0.0, $mul44 = 0.0, $mul45 = 0.0, $mul48 = 0.0, $mul49 = 0.0, $mul50 = 0.0;
 var $mul52 = 0.0, $mul54 = 0.0, $mul55 = 0.0, $mul57 = 0.0, $mul59 = 0.0, $mul61 = 0.0, $mul65 = 0.0, $mul66 = 0.0, $mul70 = 0.0, $or = i64(), $or$cond = 0, $or$cond54 = 0, $retval$0 = 0.0, $shl$mask = i64(), $shl26$mask = i64(), $shl38 = i64(), $shr = i64(), $shr17 = i64(), $shr33 = 0, $sub = 0.0;
 var $sub43 = 0.0, $sub68 = 0.0, $tobool = 0, $u$sroa$0$0 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(32,0));
 $conv = i64_trunc($shr);
 $cmp = ($conv>>>0)<(1048576);
 $tobool = i64_slt($0,i64_const(0,0));
 $or$cond = $tobool | $cmp;
 do {
  if ($or$cond) {
   $shl$mask = i64_and($0,i64_const(4294967295,2147483647));
   $cmp5 = i64_eq($shl$mask,i64_const(0,0));
   if ($cmp5) {
    $mul = $x * $x;
    $div = -1.0 / $mul;
    $retval$0 = $div;
    return (+$retval$0);
   }
   if (!($tobool)) {
    $mul14 = $x * 18014398509481984.0;
    $1 = i64_bc2i($mul14);
    $shr17 = i64_lshr($1,i64_const(32,0));
    $conv18 = i64_trunc($shr17);
    $hx$0 = $conv18;$k$0 = -1077;$u$sroa$0$0 = $1;
    break;
   }
   $sub = $x - $x;
   $div11 = $sub / 0.0;
   $retval$0 = $div11;
   return (+$retval$0);
  } else {
   $cmp19 = ($conv>>>0)>(2146435071);
   if ($cmp19) {
    $retval$0 = $x;
    return (+$retval$0);
   }
   $cmp23 = ($conv|0)==(1072693248);
   $shl26$mask = i64_and($0,i64_const(4294967295,0));
   $cmp27 = i64_eq($shl26$mask,i64_const(0,0));
   $or$cond54 = $cmp27 & $cmp23;
   if ($or$cond54) {
    $retval$0 = 0.0;
    return (+$retval$0);
   } else {
    $hx$0 = $conv;$k$0 = -1023;$u$sroa$0$0 = $0;
   }
  }
 } while(0);
 $add = (($hx$0) + 614242)|0;
 $shr33 = $add >>> 20;
 $add35 = (($k$0) + ($shr33))|0;
 $and = $add & 1048575;
 $add36 = (($and) + 1072079006)|0;
 $conv37 = i64_zext($add36>>>0);
 $shl38 = i64_shl($conv37,i64_const(32,0));
 $and40 = i64_and($u$sroa$0$0,i64_const(4294967295,0));
 $or = i64_or($shl38,$and40);
 $2 = i64_bc2d($or);
 $sub43 = $2 + -1.0;
 $mul44 = $sub43 * 0.5;
 $mul45 = $sub43 * $mul44;
 $add46 = $sub43 + 2.0;
 $div47 = $sub43 / $add46;
 $mul48 = $div47 * $div47;
 $mul49 = $mul48 * $mul48;
 $mul50 = $mul49 * 0.15313837699209373;
 $add51 = $mul50 + 0.22222198432149784;
 $mul52 = $mul49 * $add51;
 $add53 = $mul52 + 0.39999999999409419;
 $mul54 = $mul49 * $add53;
 $mul55 = $mul49 * 0.14798198605116586;
 $add56 = $mul55 + 0.1818357216161805;
 $mul57 = $mul49 * $add56;
 $add58 = $mul57 + 0.28571428743662391;
 $mul59 = $mul49 * $add58;
 $add60 = $mul59 + 0.66666666666667351;
 $mul61 = $mul48 * $add60;
 $add62 = $mul54 + $mul61;
 $conv63 = (+($add35|0));
 $add64 = $mul45 + $add62;
 $mul65 = $div47 * $add64;
 $mul66 = $conv63 * 1.9082149292705877E-10;
 $add67 = $mul66 + $mul65;
 $sub68 = $add67 - $mul45;
 $add69 = $sub43 + $sub68;
 $mul70 = $conv63 * 0.69314718036912382;
 $add71 = $mul70 + $add69;
 $retval$0 = $add71;
 return (+$retval$0);
}
function __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $0 = 0.0, $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, $__first$addr$0 = 0, $__first$addr$0$ph = 0, $__first$addr$1 = 0, $__i$0 = 0, $__i$1 = 0;
 var $__i$2 = 0, $__i$3 = 0, $__i$4 = 0, $__i$5 = 0, $__i$6 = 0, $__j$0 = 0, $__j$1 = 0, $__j$2 = 0, $__j$3 = 0, $__j$4 = 0, $__j$5 = 0, $__last$addr$0$ph = 0, $__m$0 = 0, $__m$2 = 0, $__n_swaps$0 = 0, $__n_swaps$3 = 0, $__n_swaps$4 = 0, $__n_swaps$5 = 0, $__n_swaps$6 = 0, $add$ptr = 0;
 var $add$ptr11 = 0, $add$ptr114 = 0, $add$ptr12 = 0, $add$ptr13 = 0, $add$ptr138 = 0, $add$ptr21 = 0, $add$ptr23 = 0, $add$ptr24 = 0, $add$ptr6 = 0, $add$ptr7 = 0, $call113 = 0, $call115 = 0, $call25 = 0, $call28 = 0, $cmp = 0, $cmp$i = 0, $cmp$i138 = 0, $cmp$i139 = 0, $cmp$i140 = 0, $cmp$i141 = 0;
 var $cmp$i142 = 0, $cmp$i143 = 0, $cmp$i144 = 0, $cmp$i145 = 0, $cmp$i146 = 0, $cmp100 = 0, $cmp106 = 0, $cmp111 = 0, $cmp134 = 0, $cmp19 = 0, $cmp35 = 0, $cmp43 = 0, $cmp52 = 0, $cmp67 = 0, $cmp81 = 0, $cmp96 = 0, $div = 0, $div22 = 0, $inc109 = 0, $inc76 = 0;
 var $inc99 = 0, $incdec$ptr136 = 0, $incdec$ptr18 = 0, $incdec$ptr34 = 0, $incdec$ptr37 = 0, $incdec$ptr48 = 0, $incdec$ptr50 = 0, $incdec$ptr60 = 0, $incdec$ptr63 = 0, $incdec$ptr80 = 0, $incdec$ptr88 = 0, $incdec$ptr91 = 0, $incdec$ptr91$__m$0 = 0, $sub$ptr$div = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast126 = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub$ptr$sub128 = 0, $sub$ptr$sub132 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $__first$addr$0$ph = $__first;$__last$addr$0$ph = $__last;
 L1: while(1) {
  $sub$ptr$lhs$cast = $__last$addr$0$ph;
  $incdec$ptr18 = ((($__last$addr$0$ph)) + -8|0);
  $__first$addr$0 = $__first$addr$0$ph;
  while(1) {
   $__first$addr$1 = $__first$addr$0;
   L5: while(1) {
    $sub$ptr$rhs$cast = $__first$addr$1;
    $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
    $sub$ptr$div = $sub$ptr$sub >> 3;
    switch ($sub$ptr$div|0) {
    case 1: case 0:  {
     break L1;
     break;
    }
    case 2:  {
     label = 5;
     break L1;
     break;
    }
    case 3:  {
     label = 7;
     break L1;
     break;
    }
    case 4:  {
     label = 8;
     break L1;
     break;
    }
    case 5:  {
     label = 9;
     break L1;
     break;
    }
    default: {
    }
    }
    $cmp = ($sub$ptr$sub|0)<(248);
    if ($cmp) {
     label = 11;
     break L1;
    }
    $cmp19 = ($sub$ptr$sub|0)>(7992);
    $div = (($sub$ptr$div|0) / 2)&-1;
    $add$ptr21 = (($__first$addr$1) + ($div<<3)|0);
    if ($cmp19) {
     $div22 = (($sub$ptr$div|0) / 4)&-1;
     $add$ptr23 = (($__first$addr$1) + ($div22<<3)|0);
     $add$ptr24 = (($add$ptr21) + ($div22<<3)|0);
     $call25 = (__ZNSt3__27__sort5IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_S5_T_($__first$addr$1,$add$ptr23,$add$ptr21,$add$ptr24,$incdec$ptr18,$__comp)|0);
     $__n_swaps$0 = $call25;
    } else {
     $call28 = (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__first$addr$1,$add$ptr21,$incdec$ptr18,$__comp)|0);
     $__n_swaps$0 = $call28;
    }
    $2 = loadd($__first$addr$1);
    $3 = loadd($add$ptr21);
    $cmp$i138 = $2 < $3;
    if ($cmp$i138) {
     $__j$3 = $incdec$ptr18;$__n_swaps$3 = $__n_swaps$0;
     break;
    } else {
     $__j$0 = $incdec$ptr18;
    }
    while(1) {
     $incdec$ptr34 = ((($__j$0)) + -8|0);
     $cmp35 = ($__first$addr$1|0)==($incdec$ptr34|0);
     if ($cmp35) {
      break;
     }
     $9 = loadd($incdec$ptr34);
     $cmp$i144 = $9 < $3;
     if ($cmp$i144) {
      label = 29;
      break L5;
     } else {
      $__j$0 = $incdec$ptr34;
     }
    }
    $incdec$ptr37 = ((($__first$addr$1)) + 8|0);
    $4 = loadd($incdec$ptr18);
    $cmp$i139 = $2 < $4;
    if ($cmp$i139) {
     $__i$1 = $incdec$ptr37;
    } else {
     $__i$0 = $incdec$ptr37;
     while(1) {
      $cmp43 = ($__i$0|0)==($incdec$ptr18|0);
      if ($cmp43) {
       break L1;
      }
      $5 = loadd($__i$0);
      $cmp$i140 = $2 < $5;
      if ($cmp$i140) {
       break;
      }
      $incdec$ptr50 = ((($__i$0)) + 8|0);
      $__i$0 = $incdec$ptr50;
     }
     stored($__i$0,$4);
     stored($incdec$ptr18,$5);
     $incdec$ptr48 = ((($__i$0)) + 8|0);
     $__i$1 = $incdec$ptr48;
    }
    $cmp52 = ($__i$1|0)==($incdec$ptr18|0);
    if ($cmp52) {
     break L1;
    } else {
     $__i$2 = $__i$1;$__j$1 = $incdec$ptr18;
    }
    while(1) {
     $6 = loadd($__first$addr$1);
     $__i$3 = $__i$2;
     while(1) {
      $7 = loadd($__i$3);
      $cmp$i146 = $6 < $7;
      $incdec$ptr60 = ((($__i$3)) + 8|0);
      if ($cmp$i146) {
       $__j$2 = $__j$1;
       break;
      } else {
       $__i$3 = $incdec$ptr60;
      }
     }
     while(1) {
      $incdec$ptr63 = ((($__j$2)) + -8|0);
      $8 = loadd($incdec$ptr63);
      $cmp$i145 = $6 < $8;
      if ($cmp$i145) {
       $__j$2 = $incdec$ptr63;
      } else {
       break;
      }
     }
     $cmp67 = ($__i$3>>>0)<($incdec$ptr63>>>0);
     if (!($cmp67)) {
      $__first$addr$1 = $__i$3;
      continue L5;
     }
     stored($__i$3,$8);
     stored($incdec$ptr63,$7);
     $__i$2 = $incdec$ptr60;$__j$1 = $incdec$ptr63;
    }
   }
   if ((label|0) == 29) {
    label = 0;
    stored($__first$addr$1,$9);
    stored($incdec$ptr34,$2);
    $inc76 = (($__n_swaps$0) + 1)|0;
    $__j$3 = $incdec$ptr34;$__n_swaps$3 = $inc76;
   }
   $incdec$ptr80 = ((($__first$addr$1)) + 8|0);
   $cmp81 = ($incdec$ptr80>>>0)<($__j$3>>>0);
   L35: do {
    if ($cmp81) {
     $__i$4 = $incdec$ptr80;$__j$4 = $__j$3;$__m$0 = $add$ptr21;$__n_swaps$4 = $__n_swaps$3;
     while(1) {
      $10 = loadd($__m$0);
      $__i$5 = $__i$4;
      while(1) {
       $11 = loadd($__i$5);
       $cmp$i143 = $11 < $10;
       $incdec$ptr88 = ((($__i$5)) + 8|0);
       if ($cmp$i143) {
        $__i$5 = $incdec$ptr88;
       } else {
        $__j$5 = $__j$4;
        break;
       }
      }
      while(1) {
       $incdec$ptr91 = ((($__j$5)) + -8|0);
       $12 = loadd($incdec$ptr91);
       $cmp$i142 = $12 < $10;
       if ($cmp$i142) {
        break;
       } else {
        $__j$5 = $incdec$ptr91;
       }
      }
      $cmp96 = ($__i$5>>>0)>($incdec$ptr91>>>0);
      if ($cmp96) {
       $__i$6 = $__i$5;$__m$2 = $__m$0;$__n_swaps$5 = $__n_swaps$4;
       break L35;
      }
      stored($__i$5,$12);
      stored($incdec$ptr91,$11);
      $inc99 = (($__n_swaps$4) + 1)|0;
      $cmp100 = ($__m$0|0)==($__i$5|0);
      $incdec$ptr91$__m$0 = $cmp100 ? $incdec$ptr91 : $__m$0;
      $__i$4 = $incdec$ptr88;$__j$4 = $incdec$ptr91;$__m$0 = $incdec$ptr91$__m$0;$__n_swaps$4 = $inc99;
     }
    } else {
     $__i$6 = $incdec$ptr80;$__m$2 = $add$ptr21;$__n_swaps$5 = $__n_swaps$3;
    }
   } while(0);
   $cmp106 = ($__i$6|0)==($__m$2|0);
   if ($cmp106) {
    $__n_swaps$6 = $__n_swaps$5;
   } else {
    $13 = loadd($__m$2);
    $14 = loadd($__i$6);
    $cmp$i141 = $13 < $14;
    if ($cmp$i141) {
     $inc109 = (($__n_swaps$5) + 1)|0;
     stored($__i$6,$13);
     stored($__m$2,$14);
     $__n_swaps$6 = $inc109;
    } else {
     $__n_swaps$6 = $__n_swaps$5;
    }
   }
   $cmp111 = ($__n_swaps$6|0)==(0);
   if ($cmp111) {
    $call113 = (__ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEEPdEEbT0_S5_T_($__first$addr$1,$__i$6,$__comp)|0);
    $add$ptr114 = ((($__i$6)) + 8|0);
    $call115 = (__ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEEPdEEbT0_S5_T_($add$ptr114,$__last$addr$0$ph,$__comp)|0);
    if ($call115) {
     label = 45;
     break;
    }
    if ($call113) {
     $__first$addr$0 = $add$ptr114;
     continue;
    }
   }
   $sub$ptr$lhs$cast126 = $__i$6;
   $sub$ptr$sub128 = (($sub$ptr$lhs$cast126) - ($sub$ptr$rhs$cast))|0;
   $sub$ptr$sub132 = (($sub$ptr$lhs$cast) - ($sub$ptr$lhs$cast126))|0;
   $cmp134 = ($sub$ptr$sub128|0)<($sub$ptr$sub132|0);
   if (!($cmp134)) {
    label = 44;
    break;
   }
   __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($__first$addr$1,$__i$6,$__comp);
   $incdec$ptr136 = ((($__i$6)) + 8|0);
   $__first$addr$0 = $incdec$ptr136;
  }
  if ((label|0) == 44) {
   label = 0;
   $add$ptr138 = ((($__i$6)) + 8|0);
   __ZNSt3__26__sortIRNS_6__lessIddEEPdEEvT0_S5_T_($add$ptr138,$__last$addr$0$ph,$__comp);
   $__first$addr$0$ph = $__first$addr$1;$__last$addr$0$ph = $__i$6;
   continue;
  }
  else if ((label|0) == 45) {
   label = 0;
   if ($call113) {
    break;
   } else {
    $__first$addr$0$ph = $__first$addr$1;$__last$addr$0$ph = $__i$6;
    continue;
   }
  }
 }
 if ((label|0) == 5) {
  $0 = loadd($incdec$ptr18);
  $1 = loadd($__first$addr$1);
  $cmp$i = $0 < $1;
  if ($cmp$i) {
   stored($__first$addr$1,$0);
   stored($incdec$ptr18,$1);
  }
 }
 else if ((label|0) == 7) {
  $add$ptr = ((($__first$addr$1)) + 8|0);
  (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__first$addr$1,$add$ptr,$incdec$ptr18,$__comp)|0);
 }
 else if ((label|0) == 8) {
  $add$ptr6 = ((($__first$addr$1)) + 8|0);
  $add$ptr7 = ((($__first$addr$1)) + 16|0);
  (__ZNSt3__27__sort4IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_T_($__first$addr$1,$add$ptr6,$add$ptr7,$incdec$ptr18,$__comp)|0);
 }
 else if ((label|0) == 9) {
  $add$ptr11 = ((($__first$addr$1)) + 8|0);
  $add$ptr12 = ((($__first$addr$1)) + 16|0);
  $add$ptr13 = ((($__first$addr$1)) + 24|0);
  (__ZNSt3__27__sort5IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_S5_T_($__first$addr$1,$add$ptr11,$add$ptr12,$add$ptr13,$incdec$ptr18,$__comp)|0);
 }
 else if ((label|0) == 11) {
  __ZNSt3__218__insertion_sort_3IRNS_6__lessIddEEPdEEvT0_S5_T_($__first$addr$1,$__last$addr$0$ph,$__comp);
 }
 return;
}
function __ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__x,$__y,$__z,$__c) {
 $__x = $__x|0;
 $__y = $__y|0;
 $__z = $__z|0;
 $__c = $__c|0;
 var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $cmp$i = 0, $cmp$i22 = 0, $cmp$i23 = 0, $cmp$i24 = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = loadd($__y);
 $1 = loadd($__x);
 $cmp$i = $0 < $1;
 $2 = loadd($__z);
 $cmp$i24 = $2 < $0;
 do {
  if ($cmp$i) {
   if ($cmp$i24) {
    stored($__x,$2);
    stored($__z,$1);
    $retval$0 = 1;
    break;
   }
   stored($__x,$0);
   stored($__y,$1);
   $5 = loadd($__z);
   $cmp$i22 = $5 < $1;
   if ($cmp$i22) {
    stored($__y,$5);
    stored($__z,$1);
    $retval$0 = 2;
   } else {
    $retval$0 = 1;
   }
  } else {
   if ($cmp$i24) {
    stored($__y,$2);
    stored($__z,$0);
    $3 = loadd($__y);
    $4 = loadd($__x);
    $cmp$i23 = $3 < $4;
    if ($cmp$i23) {
     stored($__x,$3);
     stored($__y,$4);
     $retval$0 = 2;
    } else {
     $retval$0 = 1;
    }
   } else {
    $retval$0 = 0;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function __ZNSt3__27__sort4IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_T_($__x1,$__x2,$__x3,$__x4,$__c) {
 $__x1 = $__x1|0;
 $__x2 = $__x2|0;
 $__x3 = $__x3|0;
 $__x4 = $__x4|0;
 $__c = $__c|0;
 var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $__r$0 = 0, $call = 0, $cmp$i = 0, $cmp$i19 = 0, $cmp$i20 = 0, $inc = 0, $inc4 = 0, $inc7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__x1,$__x2,$__x3,$__c)|0);
 $0 = loadd($__x4);
 $1 = loadd($__x3);
 $cmp$i = $0 < $1;
 if ($cmp$i) {
  stored($__x3,$0);
  stored($__x4,$1);
  $inc = (($call) + 1)|0;
  $2 = loadd($__x3);
  $3 = loadd($__x2);
  $cmp$i20 = $2 < $3;
  if ($cmp$i20) {
   stored($__x2,$2);
   stored($__x3,$3);
   $inc4 = (($call) + 2)|0;
   $4 = loadd($__x2);
   $5 = loadd($__x1);
   $cmp$i19 = $4 < $5;
   if ($cmp$i19) {
    $inc7 = (($call) + 3)|0;
    stored($__x1,$4);
    stored($__x2,$5);
    $__r$0 = $inc7;
   } else {
    $__r$0 = $inc4;
   }
  } else {
   $__r$0 = $inc;
  }
 } else {
  $__r$0 = $call;
 }
 return ($__r$0|0);
}
function __ZNSt3__27__sort5IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_S5_T_($__x1,$__x2,$__x3,$__x4,$__x5,$__c) {
 $__x1 = $__x1|0;
 $__x2 = $__x2|0;
 $__x3 = $__x3|0;
 $__x4 = $__x4|0;
 $__x5 = $__x5|0;
 $__c = $__c|0;
 var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $__r$0 = 0, $call = 0, $cmp$i = 0, $cmp$i25 = 0, $cmp$i26 = 0, $cmp$i27 = 0, $inc = 0, $inc10 = 0, $inc4 = 0, $inc7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__ZNSt3__27__sort4IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_T_($__x1,$__x2,$__x3,$__x4,$__c)|0);
 $0 = loadd($__x5);
 $1 = loadd($__x4);
 $cmp$i = $0 < $1;
 if ($cmp$i) {
  stored($__x4,$0);
  stored($__x5,$1);
  $inc = (($call) + 1)|0;
  $2 = loadd($__x4);
  $3 = loadd($__x3);
  $cmp$i27 = $2 < $3;
  if ($cmp$i27) {
   stored($__x3,$2);
   stored($__x4,$3);
   $inc4 = (($call) + 2)|0;
   $4 = loadd($__x3);
   $5 = loadd($__x2);
   $cmp$i26 = $4 < $5;
   if ($cmp$i26) {
    stored($__x2,$4);
    stored($__x3,$5);
    $inc7 = (($call) + 3)|0;
    $6 = loadd($__x2);
    $7 = loadd($__x1);
    $cmp$i25 = $6 < $7;
    if ($cmp$i25) {
     $inc10 = (($call) + 4)|0;
     stored($__x1,$6);
     stored($__x2,$7);
     $__r$0 = $inc10;
    } else {
     $__r$0 = $inc7;
    }
   } else {
    $__r$0 = $inc4;
   }
  } else {
   $__r$0 = $inc;
  }
 } else {
  $__r$0 = $call;
 }
 return ($__r$0|0);
}
function __ZNSt3__218__insertion_sort_3IRNS_6__lessIddEEPdEEvT0_S5_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $__i$0 = 0, $__j$0 = 0, $__j$0$phi = 0, $__j$1 = 0, $__j$1$phi = 0, $__k$0 = 0, $__k$0$lcssa = 0, $add$ptr = 0, $add$ptr1 = 0, $add$ptr2 = 0, $cmp = 0, $cmp$i = 0, $cmp$i22 = 0, $cmp6 = 0, $incdec$ptr = 0, $incdec$ptr9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $add$ptr = ((($__first)) + 16|0);
 $add$ptr1 = ((($__first)) + 8|0);
 (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__first,$add$ptr1,$add$ptr,$__comp)|0);
 $add$ptr2 = ((($__first)) + 24|0);
 $__i$0 = $add$ptr2;$__j$0 = $add$ptr;
 while(1) {
  $cmp = ($__i$0|0)==($__last|0);
  if ($cmp) {
   break;
  }
  $0 = loadd($__i$0);
  $1 = loadd($__j$0);
  $cmp$i = $0 < $1;
  if ($cmp$i) {
   $2 = $1;$__j$1 = $__i$0;$__k$0 = $__j$0;
   while(1) {
    stored($__j$1,$2);
    $cmp6 = ($__k$0|0)==($__first|0);
    if ($cmp6) {
     $__k$0$lcssa = $__first;
     break;
    }
    $incdec$ptr = ((($__k$0)) + -8|0);
    $3 = loadd($incdec$ptr);
    $cmp$i22 = $0 < $3;
    if ($cmp$i22) {
     $__j$1$phi = $__k$0;$2 = $3;$__k$0 = $incdec$ptr;$__j$1 = $__j$1$phi;
    } else {
     $__k$0$lcssa = $__k$0;
     break;
    }
   }
   stored($__k$0$lcssa,$0);
  }
  $incdec$ptr9 = ((($__i$0)) + 8|0);
  $__j$0$phi = $__i$0;$__i$0 = $incdec$ptr9;$__j$0 = $__j$0$phi;
 }
 return;
}
function __ZNSt3__227__insertion_sort_incompleteIRNS_6__lessIddEEPdEEbT0_S5_T_($__first,$__last,$__comp) {
 $__first = $__first|0;
 $__last = $__last|0;
 $__comp = $__comp|0;
 var $$retval$3 = 0, $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $__count$0 = 0, $__count$1 = 0, $__i$0 = 0, $__j$0 = 0, $__j$0$phi = 0, $__j$1 = 0, $__j$1$phi = 0, $__k$0 = 0, $__k$0$lcssa = 0, $add$ptr = 0, $add$ptr11 = 0, $add$ptr12 = 0, $add$ptr13 = 0;
 var $add$ptr16 = 0, $add$ptr17 = 0, $add$ptr19 = 0, $add$ptr6 = 0, $add$ptr7 = 0, $cleanup$dest$slot$1 = 0, $cmp = 0, $cmp$i = 0, $cmp$i50 = 0, $cmp$i51 = 0, $cmp24 = 0, $cmp28 = 0, $cmp31 = 0, $inc = 0, $incdec$ptr = 0, $incdec$ptr14 = 0, $incdec$ptr25 = 0, $incdec$ptr3 = 0, $incdec$ptr30 = 0, $incdec$ptr35 = 0;
 var $incdec$ptr8 = 0, $retval$3 = 0, $retval$5 = 0, $sub$ptr$div = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub$ptr$lhs$cast = $__last;
 $sub$ptr$rhs$cast = $__first;
 $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
 $sub$ptr$div = $sub$ptr$sub >> 3;
 switch ($sub$ptr$div|0) {
 case 1: case 0:  {
  $retval$5 = 1;
  break;
 }
 case 2:  {
  $incdec$ptr = ((($__last)) + -8|0);
  $0 = loadd($incdec$ptr);
  $1 = loadd($__first);
  $cmp$i = $0 < $1;
  if ($cmp$i) {
   stored($__first,$0);
   stored($incdec$ptr,$1);
   $retval$5 = 1;
  } else {
   $retval$5 = 1;
  }
  break;
 }
 case 3:  {
  $add$ptr = ((($__first)) + 8|0);
  $incdec$ptr3 = ((($__last)) + -8|0);
  (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__first,$add$ptr,$incdec$ptr3,$__comp)|0);
  $retval$5 = 1;
  break;
 }
 case 4:  {
  $add$ptr6 = ((($__first)) + 8|0);
  $add$ptr7 = ((($__first)) + 16|0);
  $incdec$ptr8 = ((($__last)) + -8|0);
  (__ZNSt3__27__sort4IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_T_($__first,$add$ptr6,$add$ptr7,$incdec$ptr8,$__comp)|0);
  $retval$5 = 1;
  break;
 }
 case 5:  {
  $add$ptr11 = ((($__first)) + 8|0);
  $add$ptr12 = ((($__first)) + 16|0);
  $add$ptr13 = ((($__first)) + 24|0);
  $incdec$ptr14 = ((($__last)) + -8|0);
  (__ZNSt3__27__sort5IRNS_6__lessIddEEPdEEjT0_S5_S5_S5_S5_T_($__first,$add$ptr11,$add$ptr12,$add$ptr13,$incdec$ptr14,$__comp)|0);
  $retval$5 = 1;
  break;
 }
 default: {
  $add$ptr16 = ((($__first)) + 16|0);
  $add$ptr17 = ((($__first)) + 8|0);
  (__ZNSt3__27__sort3IRNS_6__lessIddEEPdEEjT0_S5_S5_T_($__first,$add$ptr17,$add$ptr16,$__comp)|0);
  $add$ptr19 = ((($__first)) + 24|0);
  $__count$0 = 0;$__i$0 = $add$ptr19;$__j$0 = $add$ptr16;
  while(1) {
   $cmp = ($__i$0|0)==($__last|0);
   if ($cmp) {
    $cleanup$dest$slot$1 = 1;$retval$3 = 0;
    break;
   }
   $2 = loadd($__i$0);
   $3 = loadd($__j$0);
   $cmp$i51 = $2 < $3;
   if ($cmp$i51) {
    $4 = $3;$__j$1 = $__i$0;$__k$0 = $__j$0;
    while(1) {
     stored($__j$1,$4);
     $cmp24 = ($__k$0|0)==($__first|0);
     if ($cmp24) {
      $__k$0$lcssa = $__first;
      break;
     }
     $incdec$ptr25 = ((($__k$0)) + -8|0);
     $5 = loadd($incdec$ptr25);
     $cmp$i50 = $2 < $5;
     if ($cmp$i50) {
      $__j$1$phi = $__k$0;$4 = $5;$__k$0 = $incdec$ptr25;$__j$1 = $__j$1$phi;
     } else {
      $__k$0$lcssa = $__k$0;
      break;
     }
    }
    stored($__k$0$lcssa,$2);
    $inc = (($__count$0) + 1)|0;
    $cmp28 = ($inc|0)==(8);
    $incdec$ptr30 = ((($__i$0)) + 8|0);
    $cmp31 = ($incdec$ptr30|0)==($__last|0);
    if ($cmp28) {
     $cleanup$dest$slot$1 = 0;$retval$3 = $cmp31;
     break;
    } else {
     $__count$1 = $inc;
    }
   } else {
    $__count$1 = $__count$0;
   }
   $incdec$ptr35 = ((($__i$0)) + 8|0);
   $__j$0$phi = $__i$0;$__count$0 = $__count$1;$__i$0 = $incdec$ptr35;$__j$0 = $__j$0$phi;
  }
  $$retval$3 = $retval$3 | $cleanup$dest$slot$1;
  $retval$5 = $$retval$3;
 }
 }
 return ($retval$5|0);
}
function __ZNSt3__212__rs_defaultD2Ev($this) {
 $this = $this|0;
 var $0 = 0, $cmp = 0, $dec = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(5164);
 $dec = (($0) + -1)|0;
 store4(5164,$dec);
 $cmp = ($dec|0)==(0);
 if ($cmp) {
  (_pthread_mutex_unlock((5168|0))|0);
 }
 return;
}
function __ZNSt3__212__rs_defaultclEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $call = 0, $guard$uninitialized = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load1(4600);
 $guard$uninitialized = ($0<<24>>24)==(0);
 if ($guard$uninitialized) {
  $1 = (___cxa_guard_acquire(4600)|0);
  $tobool = ($1|0)==(0);
  if (!($tobool)) {
   __ZNSt3__223mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EE4seedEj(5196,5489);
  }
 }
 $call = (__ZNSt3__223mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEclEv(5196)|0);
 return ($call|0);
}
function __ZNSt3__223mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EE4seedEj($this,$__sd) {
 $this = $this|0;
 $__sd = $__sd|0;
 var $0 = 0, $__i$0 = 0, $__i_ = 0, $add = 0, $arrayidx8 = 0, $exitcond = 0, $inc = 0, $mul = 0, $shr$i = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,$__sd);
 $0 = $__sd;$__i$0 = 1;
 while(1) {
  $exitcond = ($__i$0|0)==(624);
  if ($exitcond) {
   break;
  }
  $shr$i = $0 >>> 30;
  $xor = $shr$i ^ $0;
  $mul = Math_imul($xor, 1812433253)|0;
  $add = (($mul) + ($__i$0))|0;
  $arrayidx8 = (($this) + ($__i$0<<2)|0);
  store4($arrayidx8,$add);
  $inc = (($__i$0) + 1)|0;
  $0 = $add;$__i$0 = $inc;
 }
 $__i_ = ((($this)) + 2496|0);
 store4($__i_,0);
 return;
}
function __ZNSt3__223mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEclEv($this) {
 $this = $this|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $__i_ = 0, $add = 0, $add7 = 0, $and = 0, $and11 = 0, $and26 = 0, $and29 = 0, $and5 = 0, $arrayidx = 0, $arrayidx10 = 0, $arrayidx18 = 0, $arrayidx4 = 0, $mul = 0;
 var $or = 0, $rem = 0, $rem8 = 0, $shl$i = 0, $shl$i14 = 0, $shr$i = 0, $shr$i13 = 0, $shr$i15 = 0, $xor = 0, $xor12 = 0, $xor23 = 0, $xor27 = 0, $xor30 = 0, $xor32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $__i_ = ((($this)) + 2496|0);
 $0 = load4($__i_);
 $add = (($0) + 1)|0;
 $rem = (($add>>>0) % 624)&-1;
 $arrayidx = (($this) + ($0<<2)|0);
 $1 = load4($arrayidx);
 $and = $1 & -2147483648;
 $arrayidx4 = (($this) + ($rem<<2)|0);
 $2 = load4($arrayidx4);
 $and5 = $2 & 2147483646;
 $or = $and5 | $and;
 $add7 = (($0) + 397)|0;
 $rem8 = (($add7>>>0) % 624)&-1;
 $arrayidx10 = (($this) + ($rem8<<2)|0);
 $3 = load4($arrayidx10);
 $shr$i = $or >>> 1;
 $and11 = $2 & 1;
 $4 = (0 - ($and11))|0;
 $mul = $4 & -1727483681;
 $xor = $mul ^ $3;
 $xor12 = $xor ^ $shr$i;
 store4($arrayidx,$xor12);
 $5 = load4($__i_);
 $arrayidx18 = (($this) + ($5<<2)|0);
 $6 = load4($arrayidx18);
 $shr$i15 = $6 >>> 11;
 $xor23 = $shr$i15 ^ $6;
 store4($__i_,$rem);
 $shl$i14 = $xor23 << 7;
 $and26 = $shl$i14 & -1658038656;
 $xor27 = $and26 ^ $xor23;
 $shl$i = $xor27 << 15;
 $and29 = $shl$i & -272236544;
 $xor30 = $and29 ^ $xor27;
 $shr$i13 = $xor30 >>> 18;
 $xor32 = $shr$i13 ^ $xor30;
 return ($xor32|0);
}
function __ZNSt3__28__rs_getEv($agg$result) {
 $agg$result = $agg$result|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (_pthread_mutex_lock((5168|0))|0);
 store4(5164,1);
 return;
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___assert_fail((3902|0),(3925|0),304,(4013|0));
 // unreachable;
}
function __Znwj($size) {
 $size = $size|0;
 var $$size = 0, $call = 0, $call$lcssa = 0, $call2 = 0, $cmp = 0, $cmp1 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($size|0)==(0);
 $$size = $cmp ? 1 : $size;
 while(1) {
  $call = (_malloc($$size)|0);
  $cmp1 = ($call|0)==(0|0);
  if (!($cmp1)) {
   $call$lcssa = $call;
   break;
  }
  $call2 = (__ZSt15get_new_handlerv()|0);
  $tobool = ($call2|0)==(0|0);
  if ($tobool) {
   $call$lcssa = 0;
   break;
  }
  FUNCTION_TABLE_v[$call2 & 3]();
 }
 return ($call$lcssa|0);
}
function __Znaj($size) {
 $size = $size|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (__Znwj($size)|0);
 return ($call|0);
}
function __ZdlPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function __ZdaPv($ptr) {
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($ptr);
 return;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = i64(), $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__type_name$i = 0, $add$ptr = 0, $and = i64(), $call = 0, $call10 = 0, $call14 = 0, $cmp = 0, $cmp7 = 0, $cond = 0;
 var $exception_class = 0, $primaryException = 0, $thrown_object = 0, $tobool = 0, $tobool1 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vfn = 0, $vfn13 = 0, $vtable = 0, $vtable12 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $thrown_object = sp + 36|0;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $add$ptr = ((($0)) + 80|0);
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if (!($cmp)) {
    $10 = load4(1372);
    store4($vararg_buffer7,$10);
    _abort_message(4120,$vararg_buffer7);
    // unreachable;
   }
   $cmp7 = i64_eq($1,i64_const(1126902529,1129074247));
   if ($cmp7) {
    $primaryException = ((($0)) + 44|0);
    $2 = load4($primaryException);
    $cond = $2;
   } else {
    $cond = $add$ptr;
   }
   store4($thrown_object,$cond);
   $3 = load4($0);
   $__type_name$i = ((($3)) + 4|0);
   $4 = load4($__type_name$i);
   $vtable = load4(1024);
   $vfn = ((($vtable)) + 16|0);
   $5 = load4($vfn);
   $call10 = (FUNCTION_TABLE_iiii[$5 & 7](1024,$3,$thrown_object)|0);
   if ($call10) {
    $6 = load4($thrown_object);
    $7 = load4(1372);
    $vtable12 = load4($6);
    $vfn13 = ((($vtable12)) + 8|0);
    $8 = load4($vfn13);
    $call14 = (FUNCTION_TABLE_ii[$8 & 3]($6)|0);
    store4($vararg_buffer,$7);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$4);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$call14);
    _abort_message(4034,$vararg_buffer);
    // unreachable;
   } else {
    $9 = load4(1372);
    store4($vararg_buffer3,$9);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$4);
    _abort_message(4079,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(4158,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $call = 0, $call1 = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_once((7696|0),(2|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  $0 = load4(7700);
  $call1 = (_pthread_getspecific(($0|0))|0);
  STACKTOP = sp;return ($call1|0);
 } else {
  _abort_message(4309,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($format,$varargs) {
 $format = $format|0;
 $varargs = $varargs|0;
 var $0 = 0, $list = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $list = sp;
 store4($list,$varargs);
 $0 = load4(1136);
 (_vfprintf($0,$format,$list)|0);
 (_fputc(10,$0)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($this,$thrown_type,$adjustedPtr) {
 $this = $this|0;
 $thrown_type = $thrown_type|0;
 $adjustedPtr = $adjustedPtr|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp$i = 0, $cmp4 = 0, $dst_ptr_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $path_dst_ptr_to_static_ptr = 0, $retval$0 = 0, $retval$2 = 0, $src2dst_offset = 0, $static_type = 0, $vfn = 0, $vtable = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $cmp$i = ($this|0)==($thrown_type|0);
 if ($cmp$i) {
  $retval$2 = 1;
 } else {
  $0 = ($thrown_type|0)==(0|0);
  if ($0) {
   $retval$2 = 0;
  } else {
   $1 = (___dynamic_cast($thrown_type,1048,1032,0)|0);
   $cmp = ($1|0)==(0|0);
   if ($cmp) {
    $retval$2 = 0;
   } else {
    $2 = ((($info)) + 4|0);
    ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4); store8($2+16|0,i64_const(0,0),4); store8($2+24|0,i64_const(0,0),4); store8($2+32|0,i64_const(0,0),4); store8($2+40|0,i64_const(0,0),4); store4($2+48|0,0,4);
    store4($info,$1);
    $static_type = ((($info)) + 8|0);
    store4($static_type,$this);
    $src2dst_offset = ((($info)) + 12|0);
    store4($src2dst_offset,-1);
    $number_of_dst_type = ((($info)) + 48|0);
    store4($number_of_dst_type,1);
    $vtable = load4($1);
    $vfn = ((($vtable)) + 28|0);
    $3 = load4($vfn);
    $4 = load4($adjustedPtr);
    FUNCTION_TABLE_viiii[$3 & 3]($1,$info,$4,1);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    $5 = load4($path_dst_ptr_to_static_ptr);
    $cmp4 = ($5|0)==(1);
    if ($cmp4) {
     $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
     $6 = load4($dst_ptr_leading_to_static_ptr);
     store4($adjustedPtr,$6);
     $retval$0 = 1;
    } else {
     $retval$0 = 0;
    }
    $retval$2 = $retval$0;
   }
  }
 }
 STACKTOP = sp;return ($retval$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $add = 0, $cmp = 0, $cmp$i = 0, $cmp$i19 = 0, $cmp$i20 = 0, $cmp12 = 0, $cmp13 = 0, $cmp2$i = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0;
 var $dst_ptr_not_leading_to_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = load4($static_ptr$i);
   $cmp$i20 = ($1|0)==($current_ptr|0);
   if ($cmp$i20) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = load4($path_dynamic_ptr_to_static_ptr$i);
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     store4($path_dynamic_ptr_to_static_ptr$i,$path_below);
    }
   }
  } else {
   $3 = load4($info);
   $cmp$i19 = ($this|0)==($3|0);
   if ($cmp$i19) {
    $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
    $4 = load4($dst_ptr_leading_to_static_ptr);
    $cmp = ($4|0)==($current_ptr|0);
    if (!($cmp)) {
     $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
     $5 = load4($dst_ptr_not_leading_to_static_ptr);
     $cmp5 = ($5|0)==($current_ptr|0);
     if (!($cmp5)) {
      $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
      store4($path_dynamic_ptr_to_dst_ptr10,$path_below);
      store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
      $number_to_dst_ptr = ((($info)) + 40|0);
      $6 = load4($number_to_dst_ptr);
      $add = (($6) + 1)|0;
      store4($number_to_dst_ptr,$add);
      $number_to_static_ptr = ((($info)) + 36|0);
      $7 = load4($number_to_static_ptr);
      $cmp12 = ($7|0)==(1);
      if ($cmp12) {
       $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
       $8 = load4($path_dst_ptr_to_static_ptr);
       $cmp13 = ($8|0)==(2);
       if ($cmp13) {
        $search_done = ((($info)) + 54|0);
        store1($search_done,1);
       }
      }
      $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
      store4($is_dst_type_derived_from_static_type,4);
      break;
     }
    }
    $cmp7 = ($path_below|0)==(1);
    if ($cmp7) {
     $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
     store4($path_dynamic_ptr_to_dst_ptr,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $cmp$i = 0, $static_type = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $add = 0, $cmp = 0, $cmp4 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $number_to_static_ptr = 0, $number_to_static_ptr11 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $path_dst_ptr_to_static_ptr6 = 0, $search_done = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $0 = load4($dst_ptr_leading_to_static_ptr);
 $cmp = ($0|0)==(0|0);
 do {
  if ($cmp) {
   store4($dst_ptr_leading_to_static_ptr,$adjustedPtr);
   $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
   store4($path_dst_ptr_to_static_ptr,$path_below);
   $number_to_static_ptr = ((($info)) + 36|0);
   store4($number_to_static_ptr,1);
  } else {
   $cmp4 = ($0|0)==($adjustedPtr|0);
   if (!($cmp4)) {
    $number_to_static_ptr11 = ((($info)) + 36|0);
    $2 = load4($number_to_static_ptr11);
    $add = (($2) + 1)|0;
    store4($number_to_static_ptr11,$add);
    $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
    store4($path_dst_ptr_to_static_ptr12,2);
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $path_dst_ptr_to_static_ptr6 = ((($info)) + 24|0);
   $1 = load4($path_dst_ptr_to_static_ptr6);
   $cmp7 = ($1|0)==(2);
   if ($cmp7) {
    store4($path_dst_ptr_to_static_ptr6,$path_below);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($this,$info,$dst_ptr,$current_ptr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $add = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp18 = 0, $cmp2 = 0, $cmp21 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $number_of_dst_type = 0;
 var $number_of_dst_type17 = 0, $number_to_static_ptr = 0, $number_to_static_ptr26 = 0, $or$cond = 0, $or$cond19 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dst_ptr_to_static_ptr12 = 0, $search_done = 0, $search_done23 = 0, $search_done27 = 0, $static_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $found_any_static_type = ((($info)) + 53|0);
 store1($found_any_static_type,1);
 $static_ptr = ((($info)) + 4|0);
 $0 = load4($static_ptr);
 $cmp = ($0|0)==($current_ptr|0);
 do {
  if ($cmp) {
   $found_our_static_ptr = ((($info)) + 52|0);
   store1($found_our_static_ptr,1);
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $1 = load4($dst_ptr_leading_to_static_ptr);
   $cmp2 = ($1|0)==(0|0);
   if ($cmp2) {
    store4($dst_ptr_leading_to_static_ptr,$dst_ptr);
    $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
    store4($path_dst_ptr_to_static_ptr,$path_below);
    $number_to_static_ptr = ((($info)) + 36|0);
    store4($number_to_static_ptr,1);
    $number_of_dst_type = ((($info)) + 48|0);
    $2 = load4($number_of_dst_type);
    $cmp5 = ($2|0)==(1);
    $cmp7 = ($path_below|0)==(1);
    $or$cond = $cmp5 & $cmp7;
    if (!($or$cond)) {
     break;
    }
    $search_done = ((($info)) + 54|0);
    store1($search_done,1);
    break;
   }
   $cmp10 = ($1|0)==($dst_ptr|0);
   if (!($cmp10)) {
    $number_to_static_ptr26 = ((($info)) + 36|0);
    $6 = load4($number_to_static_ptr26);
    $add = (($6) + 1)|0;
    store4($number_to_static_ptr26,$add);
    $search_done27 = ((($info)) + 54|0);
    store1($search_done27,1);
    break;
   }
   $path_dst_ptr_to_static_ptr12 = ((($info)) + 24|0);
   $3 = load4($path_dst_ptr_to_static_ptr12);
   $cmp13 = ($3|0)==(2);
   if ($cmp13) {
    store4($path_dst_ptr_to_static_ptr12,$path_below);
    $5 = $path_below;
   } else {
    $5 = $3;
   }
   $number_of_dst_type17 = ((($info)) + 48|0);
   $4 = load4($number_of_dst_type17);
   $cmp18 = ($4|0)==(1);
   $cmp21 = ($5|0)==(1);
   $or$cond19 = $cmp18 & $cmp21;
   if ($or$cond19) {
    $search_done23 = ((($info)) + 54|0);
    store1($search_done23,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($static_ptr,$static_type,$dst_type,$src2dst_offset) {
 $static_ptr = $static_ptr|0;
 $static_type = $static_type|0;
 $dst_type = $dst_type|0;
 $src2dst_offset = $src2dst_offset|0;
 var $$ = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$ptr = 0, $add$ptr$ = 0, $arrayidx = 0;
 var $arrayidx1 = 0, $cmp = 0, $cmp$i = 0, $cmp14 = 0, $cmp16 = 0, $cmp19 = 0, $cmp25 = 0, $cmp27 = 0, $cmp30 = 0, $cmp33 = 0, $dst_ptr$0 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $info = 0, $number_of_dst_type = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $or$cond = 0, $or$cond15 = 0, $or$cond16 = 0;
 var $or$cond17 = 0, $path_dst_ptr_to_static_ptr = 0, $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_static_ptr = 0, $src2dst_offset5 = 0, $static_ptr3 = 0, $static_type4 = 0, $vfn = 0, $vfn11 = 0, $vtable10 = 0, $vtable7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $info = sp;
 $0 = load4($static_ptr);
 $arrayidx = ((($0)) + -8|0);
 $1 = load4($arrayidx);
 $add$ptr = (($static_ptr) + ($1)|0);
 $arrayidx1 = ((($0)) + -4|0);
 $2 = load4($arrayidx1);
 store4($info,$dst_type);
 $static_ptr3 = ((($info)) + 4|0);
 store4($static_ptr3,$static_ptr);
 $static_type4 = ((($info)) + 8|0);
 store4($static_type4,$static_type);
 $src2dst_offset5 = ((($info)) + 12|0);
 store4($src2dst_offset5,$src2dst_offset);
 $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
 $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
 $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
 $path_dynamic_ptr_to_static_ptr = ((($info)) + 28|0);
 $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
 $number_to_dst_ptr = ((($info)) + 40|0);
 $cmp$i = ($2|0)==($dst_type|0);
 ; store8($dst_ptr_leading_to_static_ptr,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+8|0,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+16|0,i64_const(0,0),4); store8($dst_ptr_leading_to_static_ptr+24|0,i64_const(0,0),4); store4($dst_ptr_leading_to_static_ptr+32|0,0,4); store2($dst_ptr_leading_to_static_ptr+36|0,0,2); store1($dst_ptr_leading_to_static_ptr+38|0,0,1);
 L1: do {
  if ($cmp$i) {
   $number_of_dst_type = ((($info)) + 48|0);
   store4($number_of_dst_type,1);
   $vtable7 = load4($dst_type);
   $vfn = ((($vtable7)) + 20|0);
   $3 = load4($vfn);
   FUNCTION_TABLE_viiiiii[$3 & 3]($dst_type,$info,$add$ptr,$add$ptr,1,0);
   $4 = load4($path_dst_ptr_to_static_ptr);
   $cmp = ($4|0)==(1);
   $add$ptr$ = $cmp ? $add$ptr : 0;
   $dst_ptr$0 = $add$ptr$;
  } else {
   $number_to_static_ptr = ((($info)) + 36|0);
   $vtable10 = load4($2);
   $vfn11 = ((($vtable10)) + 24|0);
   $5 = load4($vfn11);
   FUNCTION_TABLE_viiiii[$5 & 3]($2,$info,$add$ptr,1,0);
   $6 = load4($number_to_static_ptr);
   switch ($6|0) {
   case 0:  {
    $7 = load4($number_to_dst_ptr);
    $cmp14 = ($7|0)==(1);
    $8 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp16 = ($8|0)==(1);
    $or$cond = $cmp14 & $cmp16;
    $9 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp19 = ($9|0)==(1);
    $or$cond15 = $or$cond & $cmp19;
    $10 = load4($dst_ptr_not_leading_to_static_ptr);
    $$ = $or$cond15 ? $10 : 0;
    $dst_ptr$0 = $$;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $dst_ptr$0 = 0;
    break L1;
   }
   }
   $11 = load4($path_dst_ptr_to_static_ptr);
   $cmp25 = ($11|0)==(1);
   if (!($cmp25)) {
    $12 = load4($number_to_dst_ptr);
    $cmp27 = ($12|0)==(0);
    $13 = load4($path_dynamic_ptr_to_static_ptr);
    $cmp30 = ($13|0)==(1);
    $or$cond16 = $cmp27 & $cmp30;
    $14 = load4($path_dynamic_ptr_to_dst_ptr);
    $cmp33 = ($14|0)==(1);
    $or$cond17 = $or$cond16 & $cmp33;
    if (!($or$cond17)) {
     $dst_ptr$0 = 0;
     break;
    }
   }
   $15 = load4($dst_ptr_leading_to_static_ptr);
   $dst_ptr$0 = $15;
  }
 } while(0);
 STACKTOP = sp;return ($dst_ptr$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($this,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $dst_ptr = $dst_ptr|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $cmp$i = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$info,$dst_ptr,$current_ptr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 20|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiiiii[$2 & 3]($1,$info,$dst_ptr,$current_ptr,$path_below,$use_strcmp);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($this,$info,$current_ptr,$path_below,$use_strcmp) {
 $this = $this|0;
 $info = $info|0;
 $current_ptr = $current_ptr|0;
 $path_below = $path_below|0;
 $use_strcmp = $use_strcmp|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $__base_type = 0, $__base_type40 = 0, $add = 0;
 var $cmp = 0, $cmp$i = 0, $cmp$i33 = 0, $cmp$i34 = 0, $cmp11 = 0, $cmp2$i = 0, $cmp26 = 0, $cmp27 = 0, $cmp5 = 0, $cmp7 = 0, $dst_ptr_leading_to_static_ptr = 0, $dst_ptr_not_leading_to_static_ptr = 0, $found_any_static_type = 0, $found_our_static_ptr = 0, $is_dst_type_derived_from_static_type = 0, $is_dst_type_derived_from_static_type13$0$off035 = 0, $not$tobool19 = 0, $number_to_dst_ptr = 0, $number_to_static_ptr = 0, $path_dst_ptr_to_static_ptr = 0;
 var $path_dynamic_ptr_to_dst_ptr = 0, $path_dynamic_ptr_to_dst_ptr10 = 0, $path_dynamic_ptr_to_static_ptr$i = 0, $search_done = 0, $static_ptr$i = 0, $static_type = 0, $tobool16 = 0, $vfn = 0, $vfn42 = 0, $vtable = 0, $vtable41 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 do {
  if ($cmp$i) {
   $static_ptr$i = ((($info)) + 4|0);
   $1 = load4($static_ptr$i);
   $cmp$i33 = ($1|0)==($current_ptr|0);
   if ($cmp$i33) {
    $path_dynamic_ptr_to_static_ptr$i = ((($info)) + 28|0);
    $2 = load4($path_dynamic_ptr_to_static_ptr$i);
    $cmp2$i = ($2|0)==(1);
    if (!($cmp2$i)) {
     store4($path_dynamic_ptr_to_static_ptr$i,$path_below);
    }
   }
  } else {
   $3 = load4($info);
   $cmp$i34 = ($this|0)==($3|0);
   if (!($cmp$i34)) {
    $__base_type40 = ((($this)) + 8|0);
    $15 = load4($__base_type40);
    $vtable41 = load4($15);
    $vfn42 = ((($vtable41)) + 24|0);
    $16 = load4($vfn42);
    FUNCTION_TABLE_viiiii[$16 & 3]($15,$info,$current_ptr,$path_below,$use_strcmp);
    break;
   }
   $dst_ptr_leading_to_static_ptr = ((($info)) + 16|0);
   $4 = load4($dst_ptr_leading_to_static_ptr);
   $cmp = ($4|0)==($current_ptr|0);
   if (!($cmp)) {
    $dst_ptr_not_leading_to_static_ptr = ((($info)) + 20|0);
    $5 = load4($dst_ptr_not_leading_to_static_ptr);
    $cmp5 = ($5|0)==($current_ptr|0);
    if (!($cmp5)) {
     $path_dynamic_ptr_to_dst_ptr10 = ((($info)) + 32|0);
     store4($path_dynamic_ptr_to_dst_ptr10,$path_below);
     $is_dst_type_derived_from_static_type = ((($info)) + 44|0);
     $6 = load4($is_dst_type_derived_from_static_type);
     $cmp11 = ($6|0)==(4);
     if ($cmp11) {
      break;
     }
     $found_our_static_ptr = ((($info)) + 52|0);
     store1($found_our_static_ptr,0);
     $found_any_static_type = ((($info)) + 53|0);
     store1($found_any_static_type,0);
     $__base_type = ((($this)) + 8|0);
     $7 = load4($__base_type);
     $vtable = load4($7);
     $vfn = ((($vtable)) + 20|0);
     $8 = load4($vfn);
     FUNCTION_TABLE_viiiiii[$8 & 3]($7,$info,$current_ptr,$current_ptr,1,$use_strcmp);
     $9 = load1($found_any_static_type);
     $tobool16 = ($9<<24>>24)==(0);
     if ($tobool16) {
      $is_dst_type_derived_from_static_type13$0$off035 = 0;
      label = 13;
     } else {
      $10 = load1($found_our_static_ptr);
      $not$tobool19 = ($10<<24>>24)==(0);
      if ($not$tobool19) {
       $is_dst_type_derived_from_static_type13$0$off035 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       store4($dst_ptr_not_leading_to_static_ptr,$current_ptr);
       $number_to_dst_ptr = ((($info)) + 40|0);
       $11 = load4($number_to_dst_ptr);
       $add = (($11) + 1)|0;
       store4($number_to_dst_ptr,$add);
       $number_to_static_ptr = ((($info)) + 36|0);
       $12 = load4($number_to_static_ptr);
       $cmp26 = ($12|0)==(1);
       if ($cmp26) {
        $path_dst_ptr_to_static_ptr = ((($info)) + 24|0);
        $13 = load4($path_dst_ptr_to_static_ptr);
        $cmp27 = ($13|0)==(2);
        if ($cmp27) {
         $search_done = ((($info)) + 54|0);
         store1($search_done,1);
         if ($is_dst_type_derived_from_static_type13$0$off035) {
          label = 17;
          break;
         } else {
          $14 = 4;
          break;
         }
        }
       }
       if ($is_dst_type_derived_from_static_type13$0$off035) {
        label = 17;
       } else {
        $14 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $14 = 3;
     }
     store4($is_dst_type_derived_from_static_type,$14);
     break;
    }
   }
   $cmp7 = ($path_below|0)==(1);
   if ($cmp7) {
    $path_dynamic_ptr_to_dst_ptr = ((($info)) + 32|0);
    store4($path_dynamic_ptr_to_dst_ptr,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($this,$info,$adjustedPtr,$path_below) {
 $this = $this|0;
 $info = $info|0;
 $adjustedPtr = $adjustedPtr|0;
 $path_below = $path_below|0;
 var $0 = 0, $1 = 0, $2 = 0, $__base_type = 0, $cmp$i = 0, $static_type = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $static_type = ((($info)) + 8|0);
 $0 = load4($static_type);
 $cmp$i = ($this|0)==($0|0);
 if ($cmp$i) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$info,$adjustedPtr,$path_below);
 } else {
  $__base_type = ((($this)) + 8|0);
  $1 = load4($__base_type);
  $vtable = load4($1);
  $vfn = ((($vtable)) + 28|0);
  $2 = load4($vfn);
  FUNCTION_TABLE_viiii[$2 & 3]($1,$info,$adjustedPtr,$path_below);
 }
 return;
}
function __ZNSt9type_infoD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $call = (_pthread_key_create((7700|0),(10|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(4358,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($p) {
 $p = $p|0;
 var $0 = 0, $call = 0, $cmp = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($p);
 $0 = load4(7700);
 $call = (_pthread_setspecific(($0|0),(0|0))|0);
 $cmp = ($call|0)==(0);
 if ($cmp) {
  STACKTOP = sp;return;
 } else {
  _abort_message(4408,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = i64(), $2 = 0, $and = i64(), $call = 0, $call8 = 0, $cmp = 0, $exception_class = 0, $terminateHandler = 0, $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (___cxa_get_globals_fast()|0);
 $tobool = ($call|0)==(0|0);
 if (!($tobool)) {
  $0 = load4($call);
  $tobool1 = ($0|0)==(0|0);
  if (!($tobool1)) {
   $exception_class = ((($0)) + 48|0);
   $1 = load8($exception_class);
   $and = i64_and($1,i64_const(4294967040,4294967295));
   $cmp = i64_eq($and,i64_const(1126902528,1129074247));
   if ($cmp) {
    $terminateHandler = ((($0)) + 12|0);
    $2 = load4($terminateHandler);
    __ZSt11__terminatePFvvE($2);
    // unreachable;
   }
  }
 }
 $call8 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($call8);
 // unreachable;
}
function __ZSt11__terminatePFvvE($func) {
 $func = $func|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$func & 3]();
 _abort_message(4461,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(1368);
 $1 = (($0) + 0)|0;
 store4(1368,$1);
 $2 = $0;
 return ($2|0);
}
function __ZNSt9bad_allocD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($this);
 return;
}
function __ZNKSt9bad_alloc4whatEv($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (4501|0);
}
function __ZNSt9exceptionD2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___cxa_guard_acquire($p) {
 $p = $p|0;
 var $0 = 0, $cmp = 0, $retval$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load1($p);
 $cmp = ($0<<24>>24)==(1);
 if ($cmp) {
  $retval$0 = 0;
 } else {
  store1($p,1);
  $retval$0 = 1;
 }
 return ($retval$0|0);
}
function ___cxa_guard_release($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocC2Ev($this) {
 $this = $this|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($this,(1464));
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(7704);
 $1 = (($0) + 0)|0;
 store4(7704,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($catchType,$excpType,$thrown) {
 $catchType = $catchType|0;
 $excpType = $excpType|0;
 $thrown = $thrown|0;
 var $0 = 0, $1 = 0, $2 = 0, $call = 0, $conv = 0, $temp = 0, $vfn = 0, $vtable = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $temp = sp;
 $0 = load4($thrown);
 store4($temp,$0);
 $vtable = load4($catchType);
 $vfn = ((($vtable)) + 16|0);
 $1 = load4($vfn);
 $call = (FUNCTION_TABLE_iiii[$1 & 7]($catchType,$excpType,$temp)|0);
 $conv = $call&1;
 if ($call) {
  $2 = load4($temp);
  store4($thrown,$2);
 }
 STACKTOP = sp;return ($conv|0);
}
function ___cxa_is_pointer_type($type) {
 $type = $type|0;
 var $0 = 0, $1 = 0, $2 = 0, $conv = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($type|0)==(0|0);
 if ($0) {
  $2 = 0;
 } else {
  $1 = (___dynamic_cast($type,1048,1120,0)|0);
  $phitmp = ($1|0)!=(0|0);
  $2 = $phitmp;
 }
 $conv = $2&1;
 return ($conv|0);
}
function runPostSets() {
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
    end = (ptr + num)|0;

    value = value & 0xff;
    if ((num|0) >= 67 /* 64 bytes for an unrolled loop + 3 bytes for unaligned head*/) {
      while ((ptr&3) != 0) {
        HEAP8[((ptr)>>0)]=value;
        ptr = (ptr+1)|0;
      }

      aligned_end = (end & -4)|0;
      block_aligned_end = (aligned_end - 64)|0;
      value4 = value | (value << 8) | (value << 16) | (value << 24);

      while((ptr|0) <= (block_aligned_end|0)) {
        HEAP32[((ptr)>>2)]=value4;
        HEAP32[(((ptr)+(4))>>2)]=value4;
        HEAP32[(((ptr)+(8))>>2)]=value4;
        HEAP32[(((ptr)+(12))>>2)]=value4;
        HEAP32[(((ptr)+(16))>>2)]=value4;
        HEAP32[(((ptr)+(20))>>2)]=value4;
        HEAP32[(((ptr)+(24))>>2)]=value4;
        HEAP32[(((ptr)+(28))>>2)]=value4;
        HEAP32[(((ptr)+(32))>>2)]=value4;
        HEAP32[(((ptr)+(36))>>2)]=value4;
        HEAP32[(((ptr)+(40))>>2)]=value4;
        HEAP32[(((ptr)+(44))>>2)]=value4;
        HEAP32[(((ptr)+(48))>>2)]=value4;
        HEAP32[(((ptr)+(52))>>2)]=value4;
        HEAP32[(((ptr)+(56))>>2)]=value4;
        HEAP32[(((ptr)+(60))>>2)]=value4;
        ptr = (ptr + 64)|0;
      }

      while ((ptr|0) < (aligned_end|0) ) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    // The remaining bytes.
    while ((ptr|0) < (end|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (end-num)|0;
}
function _pthread_mutex_lock(x) {
    x = x | 0;
    return 0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    var aligned_dest_end = 0;
    var block_aligned_dest_end = 0;
    var dest_end = 0;
    // Test against a benchmarked cutoff limit for when HEAPU8.set() becomes faster to use.
    if ((num|0) >=
      8192
    ) {
      return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    }

    ret = dest|0;
    dest_end = (dest + num)|0;
    if ((dest&3) == (src&3)) {
      // The initial unaligned < 4-byte front.
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      aligned_dest_end = (dest_end & -4)|0;
      block_aligned_dest_end = (aligned_dest_end - 64)|0;
      while ((dest|0) <= (block_aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        HEAP32[(((dest)+(4))>>2)]=((HEAP32[(((src)+(4))>>2)])|0);
        HEAP32[(((dest)+(8))>>2)]=((HEAP32[(((src)+(8))>>2)])|0);
        HEAP32[(((dest)+(12))>>2)]=((HEAP32[(((src)+(12))>>2)])|0);
        HEAP32[(((dest)+(16))>>2)]=((HEAP32[(((src)+(16))>>2)])|0);
        HEAP32[(((dest)+(20))>>2)]=((HEAP32[(((src)+(20))>>2)])|0);
        HEAP32[(((dest)+(24))>>2)]=((HEAP32[(((src)+(24))>>2)])|0);
        HEAP32[(((dest)+(28))>>2)]=((HEAP32[(((src)+(28))>>2)])|0);
        HEAP32[(((dest)+(32))>>2)]=((HEAP32[(((src)+(32))>>2)])|0);
        HEAP32[(((dest)+(36))>>2)]=((HEAP32[(((src)+(36))>>2)])|0);
        HEAP32[(((dest)+(40))>>2)]=((HEAP32[(((src)+(40))>>2)])|0);
        HEAP32[(((dest)+(44))>>2)]=((HEAP32[(((src)+(44))>>2)])|0);
        HEAP32[(((dest)+(48))>>2)]=((HEAP32[(((src)+(48))>>2)])|0);
        HEAP32[(((dest)+(52))>>2)]=((HEAP32[(((src)+(52))>>2)])|0);
        HEAP32[(((dest)+(56))>>2)]=((HEAP32[(((src)+(56))>>2)])|0);
        HEAP32[(((dest)+(60))>>2)]=((HEAP32[(((src)+(60))>>2)])|0);
        dest = (dest+64)|0;
        src = (src+64)|0;
      }
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    } else {
      // In the unaligned copy case, unroll a bit as well.
      aligned_dest_end = (dest_end - 4)|0;
      while ((dest|0) < (aligned_dest_end|0) ) {
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        HEAP8[(((dest)+(1))>>0)]=((HEAP8[(((src)+(1))>>0)])|0);
        HEAP8[(((dest)+(2))>>0)]=((HEAP8[(((src)+(2))>>0)])|0);
        HEAP8[(((dest)+(3))>>0)]=((HEAP8[(((src)+(3))>>0)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
      }
    }
    // The remaining unaligned < 4 byte tail.
    while ((dest|0) < (dest_end|0)) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
    }
    return ret|0;
}
function _memmove(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if (((src|0) < (dest|0)) & ((dest|0) < ((src + num)|0))) {
      // Unlikely case: Copy backwards in a safe manner
      ret = dest;
      src = (src + num)|0;
      dest = (dest + num)|0;
      while ((num|0) > 0) {
        dest = (dest - 1)|0;
        src = (src - 1)|0;
        num = (num - 1)|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      }
      dest = ret;
    } else {
      _memcpy(dest, src, num) | 0;
    }
    return dest | 0;
}
function _pthread_mutex_unlock(x) {
    x = x | 0;
    return 0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&15](a1|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&3](a1|0)|0;
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&3]();
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&3](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(1);
}
function b2(p0) {
 p0 = p0|0; abort(2);
}
function b3(p0) {
 p0 = p0|0; abort(3);return 0;
}
function b4() {
 ; abort(4);
}
function b5(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(5);
}
function b6(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(6);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,___stdio_write,___stdio_seek,___stdout_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1];
var FUNCTION_TABLE_vi = [b2,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,__ZNSt3__213__vector_baseIdNS_9allocatorIdEEED2Ev,_cleanup_335,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_ii = [b3,___stdio_close,__ZNKSt9bad_alloc4whatEv,b3];
var FUNCTION_TABLE_v = [b4,__ZL25default_terminate_handlerv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b4];
var FUNCTION_TABLE_viiiiii = [b5,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b5];
var FUNCTION_TABLE_viiii = [b6,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b6];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, _main: _main, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _memmove: _memmove, _pthread_self: _pthread_self, _memset: _memset, _pthread_mutex_unlock: _pthread_mutex_unlock, _malloc: _malloc, _pthread_mutex_lock: _pthread_mutex_lock, _memcpy: _memcpy, _fflush: _fflush, ___errno_location: ___errno_location, __GLOBAL__sub_I_container_cpp: __GLOBAL__sub_I_container_cpp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiii: dynCall_viiii };
})
;