
/*TASK ZI
Shundan function yozing, bu function 3 soniydan so'ng
"Hello World!" so'zini qaytarsin.

MASALAN: delayHelloWorld("Hello World"); return "Hello World";
 */


function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 3000); // 3 soniya
  });
}

// Funksiyani chaqirish:
delayHelloWorld("Hello World!").then((result) => {
  console.log(result); // 3 soniyadan keyin: Hello World!
});
