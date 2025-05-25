const count=document.querySelector("#count");
const sub=document.querySelector("#sub");
const reset=document.querySelector("#reset");
const add=document.querySelector("#add");

let counter=0;

sub.addEventListener('click', () => {
    counter--;
    count.innerHTML=counter;
});
add.addEventListener('click', () => {
    counter++;
    count.innerHTML=counter;
});
reset.addEventListener('click', () => {
    counter=0;
    count.innerHTML=counter;
});
