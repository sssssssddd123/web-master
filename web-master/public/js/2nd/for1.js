// for1.js
// 반복문

let sum = 3;

// for (let i = 1; i <= 10; i = i + 1) {
//     // console.log(sum + ", " + i);
//     console.log(`sum(${sum}) + i(${i}) = ${sum+i}`);
//     sum = sum + i;
// }

// <table>
//     <thead>
//         <tr>
//             <th></th>
//         </tr>
//     </thead>

//     <tbody>
//         <tr>
//             <td></td>
//         </tr>
//     </tbody>
// </table>

document.writeln(`<table class="table table-striped">`);
document.writeln(
    `<thead>
        <tr>
            <th>단수</th>
            <th>배수</th>
            <th>결과</th>
        </tr>
    </thead>
    
    <tbody>`);

for (let i = 1; i <= 9; i = i + 1) {
    // document.writeln(`<p>sum(${sum}) * i(${i}) = ${sum*i}</p>`);
    document.writeln(
        `<tr>
            <td>${sum} *</td>
            <td>${i}</td>
            <td> = ${sum * i}</td>
        </tr>`);
}

document.writeln(`</tbody></table>`);















