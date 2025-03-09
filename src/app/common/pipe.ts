// `pipe()` is a helper function to mimic the behavior of the Unix pipe operator
// It takes a series of functions and iterates over them, passing the result of each function to the next, returning the final result

// 

// --- SOME HELPER FUNCTIONS ---
type Fn = (...args: any[]) => any;  //note: this is a very generic using 'any' so we don't have to worry about types


// --- to get the first parameter TYPE of a function ---
type Params<T extends Fn> = Parameters<T>;
type FirstParam<T extends Fn[]> = T extends [infer F, ...any[]]
  ? F extends Fn
    ? Parameters<F>[0]
    : never
  : never;

// --- but the parameters are functions and we want the RETURN TYPE of the last function --- 
type LastFnReturnType<F extends Fn[]> = F extends [...infer I, infer L]
  ? L extends Fn
    ? ReturnType<L>
    : never
  : never;


export function pipe<T extends Fn[]>(initialArg: FirstParam<T>, ...fns: T): LastFnReturnType<T> {
  // note: we have to cast the initialArg to any because we can't guarantee the type of the first argument
  //       will be the same as the return type of the last function
  return fns.reduce((acc, fn) => fn(acc), initialArg as any);
}
