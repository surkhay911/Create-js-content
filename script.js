// var imag = document.getElementById('imag');
// var text = document.getElementById('text');
// var link = document.getElementById('links');
// var title = document.getElementById('title');

// img=[ 'картинка1','картинка2','картинка3','картинка4'];

// textt=['текст1','текст2','текст3','текст4'];

// links=['ссылка1','ссылка2','ссылка3','ссылка4'];

// title=['заголовок1','заголовок2','заголовок3','заголовок4'];


let obj = {
    promo: [
      {
        img: "img/1.png",
        textt: "скидка 300р",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=smm1&resource=link",
        title: "СберМегаМаркет",
      },
      {
        img: "img/2.png",
        textt: "Скидка 600р",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=sbermarket1&resource=link",
        title: "СберМаркет",
      },
      {
        img: "img/3.png",
        textt: "Скидка 150р",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=samokat3&resource=link",
        title: "Самокат",
      },
      {
        img: "img/4.png",
        textt: "Скидка 400р",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents_verified&externalId=apteka2000&resource=link",
        title: "ЕАптека",
      },
      {
        img: "img/5.png",
        textt: "Одна карта на все случаи жизни",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=sberkarta&resource=link",
        title: "СберКарта",
      },
      {
        img: "img/6.png",
        textt: "Новая Кредитная СберКарта",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=kk&resource=link",
        title: "СберКарта",
      },
      {
        img: "img/7.png",
        textt: "Защита квартиры и дома",
        links: "https://vitrinadp.sber.ru/?partnerNo=95a56931820b4599aa87c28682887322&appCode=agents&externalId=zashita_doma&resource=link",
        title: "СберСтрахование",
      },
      {
        img: "img/6.png",
        textt: "Новая Кредитная СберКарта",
        links: "",
        title: "СберКарта",
      },
    ]
}

let len = Object.keys(obj["promo"]).length;

for (let i = 0; i < len; ++i) {
    var test = obj["promo"];

    let div = document.createElement("div");  
    div.className = "elastic"
    // заголовок
    let h2 = document.createElement("h2");
    h2.innerHTML = test[i].title;


    //картинка
    let image = document.createElement("img");
    image.src = test[i].img;

    // текст
    let p = document.createElement("p");
    p.innerHTML = test[i].textt;

    // ссылка
    let a = document.createElement("a");
    a.innerHTML = "ссылка";
    a.href = test[i].links;


  
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(a);

    document.getElementById("main_form").appendChild(div);
}

