// --> String Length
// const str = "Apple, Banana, Kiwi";
// const length = String(str).length;
// console.log({ length });

// --> slice()
// const str = "Apple, Banana, Kiwi";
// const apple = String(str).slice(0, 5);
// const banana = String(str).slice(7, 13);
// const kiwi = String(str).slice(15, String(str).length);
// const banana_minus = String(str).slice(-12, -6);
// console.log({ banana_minus });

// --> substr()
// const str = "Apple, Banana, Kiwi";
// const part = String(str).substr(7, 6);
// console.log({ part });

// --> replace()
// const str = "Please join Microsoft and Microsoft!";
// // const new_str = String(str).replace("Microsoft", "IST");
// const new_str = String(str).replace(/Microsoft/g, "IST");
// console.log({ str, new_str });

// --> toUpperCase() & toLowerCase()
// const str = "Hello IST!";
// const besar_semua = String(str).toUpperCase();
// const kecil_semua = String(str).toLowerCase();
// console.log({ kecil_semua });

// --> trim() "  whitespace  "
// const str = "        Hello IST!        ";
// const str_clear = String(str).trim();
// console.log({ str_clear });

// --> split()
// const str = "Apple, Banana, Kiwi";
// const result = String(str).split(", ");
// console.log({ result });

// --> includes()
// const str = "Hello IST, welcome to NodeJS Labs";
// const valid = String(str).includes("welcome");
// console.log({ valid });

// --> startsWith() & endsWith()
// const str = "Hello IST, welcome to NodeJS Labs";
// const is_first_hello = String(str).startsWith("Hello");
// const is_last_labs = String(str).endsWith("Labs");
// console.log({ is_last_labs });

// --> charAt()
// const str = "HELLO WORLD";
// const char = String(str).charAt(8);
// console.log({ char });
