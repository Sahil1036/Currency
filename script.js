let currency =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let flag = "https://wise.com/public-resources/assets/flags/rectangle/";

// menu script
const menu = document.getElementById("menu_right");
const navbar = document.getElementById("navbar").classList;
const sign = document.getElementById("sign").classList;
menu.addEventListener("click", () => {
  navbar.toggle("hidden");
  sign.toggle("fa-xmark");
});

// Adding select option
const from = document.getElementById("from");
let from_value;
let to_value;
const to = document.getElementById("to");
fetch(currency + "usd.json")
  .then((e) => {
    return e.json();
  })
  .then((e) => {
    for (let value in e.usd) {
      const option = document.createElement("option");
      option.text = value;
      option.value = value;
      option.id = "from";
      if (value === "inr") option.selected = true;
      from.add(option);
    }
    for (let value in e.usd) {
      const option = document.createElement("option");
      option.text = value;
      option.value = value;
      option.id = "to";
      if (value === "usd") option.selected = true;
      to.add(option);
    }
    from_value = from.value;
    to_value = to.value;
  });

//   setting image
const from_image = document.getElementById("from_image");
const to_image = document.getElementById("to_image");
from.onchange = () => {
  from_value = from.value;
  from_image.src = flag + from_value + ".png";
  from_image.onerror = () => {
    from_image.src =
      "https://qph.cf2.quoracdn.net/main-qimg-d75cc959409a6af23ad2dbdbf30116f7-lq";
  };
};
to.onchange = () => {
  to_value = to.value;
  to_image.src = flag + to_value + ".png";
  to_image.onerror = () => {
    to_image.src =
      "https://qph.cf2.quoracdn.net/main-qimg-d75cc959409a6af23ad2dbdbf30116f7-lq";
  };
};

// amount caluculate from user
const calculate = document.getElementById("calculate");
const amount = document.getElementById("amount");
const convert_btn = document.getElementById("convert_btn");
const reset_btn = document.getElementById("reset_btn");
convert_btn.addEventListener("click", async function () {
  const promise1 = await fetch(currency + from_value + ".json");
  const promise2 = await fetch(currency + to_value + ".json");
  const e1 = await promise1.json();
  const e2 = await promise2.json();
  let child = calculate.children;
  child=child[0].children;
  child[0].innerHTML = `${amount.value} ${from_value} =`;
  child[1].innerHTML = `${amount.value * e1[from_value][to_value]} ${to_value}`;
  child[2].innerHTML = `${amount.value} ${to_value} = ${
    amount.value * e2[to_value][from_value]
  } ${to_value}`;
  calculate.classList.remove("hidden");
});

reset_btn.addEventListener("click",()=>{
  calculate.classList.add("hidden");
});

// add section data
const arr=[1,5,10,25,50,100,500,1000,5000,10000];
const convert_usd_to_inr=document.getElementById("convert_usd_to_inr");
const convert_inr_to_usd=document.getElementById("convert_inr_to_usd");
fetch(currency + "usd.json")
  .then((e) => {
    return e.json();
  }).then((e)=>{
    const value=e.usd.inr;
    arr.forEach((e)=>{
      const element=document.createElement("div");
      element.innerHTML=` <div class="flex justify-evenly font-light p-3 text-xl">
      <div class="flex justify-evenly text-blue-500">
        <p>${e}</p>
        usd
      </div>
      <div class="flex justify-evenly">
        <p>${(e*value).toFixed(2)}</p>
        Inr
      </div>
    </div>`;
    convert_usd_to_inr.append(element);
    });
  });

fetch(currency + "inr.json")
  .then((e) => {
    return e.json();
  }).then((e)=>{
    const value=e.inr.usd;
    arr.forEach((e)=>{
      const element=document.createElement("div");
      element.innerHTML=` <div class="flex justify-evenly font-light p-3 text-xl">
      <div class="flex justify-evenly text-blue-500">
        <p>${e}</p>
        inr
      </div>
      <div class="flex justify-evenly">
        <p>${(e*value).toFixed(7)}</p>
        usd
      </div>
    </div>`;
    convert_inr_to_usd.append(element);
    });
  });

  let list=document.getElementById("menu_list").children;
  list=Array.from(list);
  list.forEach((e)=>{
    e.addEventListener("click",(e)=>{
      if(screen.width<1024){
        navbar.toggle("hidden");
        sign.toggle("fa-xmark");
      }
    });
  });
