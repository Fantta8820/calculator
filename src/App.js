let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operations = ["+", "-", "*", "/"];
let actions = ["DEL", "RESETAR", "="];

let list = [];

const Button = ({ input, className }) => {
  function handleClick() {
    // Verify if the list is empty
    if (list.length === 0) {
      // Verify if the first element is a number
      if (number.includes(Number(input))) {
        list.push(Number(input));
      } else {
        console.log("Inválido");
      }
    } else {
      if (input === "DEL") {
        list.pop();
      } else if(input === "RESETAR"){
        list.splice(0, list.length)
      } else {
        // See if the actual element is a number and the past element is a zero
        if (number.includes(Number(input)) && list[list.length - 1] === 0) {
          list.pop();
          list.push(Number(input));
        } else {
          // See if the actual element and the past element is a number
          if (number.includes(Number(input)) && Number(list[list.length - 1])) {
            list[list.length - 1] = Number(
              String(list[list.length - 1]) + String(input)
            );
          } else {
            // Verify if the first element is a number
            if (number.includes(Number(input))) {
              list.push(Number(input));
            } else {
              list.push(input);
            }
          }
        }
      }
    }
    console.log(list);
  }

  return (
    <button className={`${className}`} onClick={handleClick}>
      {input}
    </button>
  );
};

export default function App() {
  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <section className="w-1/3">
          <p className="text-2xl font-bold">Calc</p>
          <div className="w-full h-40 bg-gray-900 mt-8 rounded-xl shadow-md flex justify-end items-center">
            <p className="text-4xl font-bold pr-8">399,981</p>
          </div>
          <div className="w-full h-[32rem] bg-slate-800 mt-8 rounded-xl shadow-md grid place-items-center grid-cols-4">
            <Button
              input="7"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="8"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="9"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="DEL"
              className={
                "btn bg-primary w-32 h-16 text-3xl font-bold text-white shadow-xl hover:bg-blue-950"
              }
            />
            <Button
              input="4"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="5"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="6"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="+"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="1"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="2"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="3"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="-"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="."
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="0"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="/"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="X"
              className={
                "btn bg-white w-32 h-16 text-3xl font-bold text-black shadow-xl hover:bg-slate-300"
              }
            />
            <Button
              input="RESETAR"
              className={
                "btn btn-primary w-72 h-16 text-2xl font-bold text-white col-span-2 shadow-xl hover:bg-blue-950"
              }
            />
            <Button
              input="="
              className={
                "btn bg-red-400 w-72 h-16 text-3xl font-bold text-white col-span-2 text-white shadow-xl hover:btn-accent"
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
