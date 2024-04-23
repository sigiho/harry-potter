const informations = [
    {
        dorms : "GRYFFINDOR",
        mottos : "&quot;While the bravest and the boldest Went to daring Gryffindor.&quot;",
        details :"Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, nerve and determination, to be sorted into his house. <br><br>The emblematic animal was a lion, and its colours were scarlet and gold and its house point hourglass was filled with rubies. Sir Nicholas de Mimsy-Porpington, also known as &quot;Nearly Headless Nick&quot;, was the House ghost. <br><br>Gryffindor corresponded roughly to the element of fire, and it was for this reason that the colours scarlet and gold were chosen to represent the house. The colour of fire corresponded to that of a lion as well, with scarlet representing the mane and tail and gold representing the coat. The Gryffindor motto was &quot;Forti Animo Estote&quot;, which was displayed on a stained glass window in the common room.",
        BGcolors : "#2F0000",
        color:"#FFFFFF"
    },
    {
        dorms : "SLYTHERIN",
        mottos : "&quot;While the bravest and the boldest Went to daring Gryffindor.&quot;" ,
        details : "Slytherin was one of the four Houses at Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. In establishing the house, Salazar instructed the Sorting Hat to pick students who had a few particular characteristics he most valued. Those characteristics included cunning, resourcefulness, leadership, and ambition. <br><br>The founder highly valued and favoured pure-blood students and the Sorting Hat admitted that it could be a factor when being sorted. Students of any blood status could be placed in the house. However, a Muggle-born student from that house was considered to be quite rare. <br><br>The emblematic animal of the house was a snake and the house's colours were green and silver. Slytherin corresponded roughly with the element of water due to serpents being commonly associated with the sea and lochs in western European mythology, as well as serpents being physically fluid and flexible animals. Similarly, in Celtic mythology, water is seen as a portal to another world, leading some to believe that the element was chosen to symbolise a Slytherin's dream for a world in which their goals and ambitions had finally been achieved. Others speculate that it was chosen to symbolise many Slytherins' hope for a pureblood-only wizarding society. ",
        BGcolors:"#031300",
        color:"#FFFFFF"
    },
    {
        dorms : "RAVENCLAW",
        mottos : "&quot;Wit beyond measure is man's greatest treasure.&quot;",
        details:"Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours. The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena. <br><br>Ravenclaw corresponded roughly to the element of air, and it was for that reason that the House colours were chosen; blue and bronze represented the sky and eagle feathers respectively, both having much to do with air. The Ravenclaw points hourglass contained blue sapphires.",
        BGcolors:"#291B00",
        color:"#FFFFFF"
    },
    {
        dorms : "HUFFLEPUFF",
        mottos:"&quot;Everyone says Hufflepuff are a lot o' duffers.&quot;",
        details : "Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members.<br><br>The emblematic animal was a badger, and yellow and black were its house colours. The Head of Hufflepuff was Pomona Sprout, and the Fat Friar was the House's patron ghost.<br><br>Hufflepuff corresponded roughly to the element of earth, and it was for that reason that the House colours were chosen: yellow represented wheat, while black was emblematic of soil. The Hufflepuff point hourglass contained yellow diamonds. Students sorted into Hufflepuff often demonstrated strong abilities in Herbology, owing to their correspondence to earth.",
        BGcolors:"#000C22",
        color:"#FFFFFF"
    }
]

const dormImg = document.querySelector(".dorm-img img")
const dormName = document.querySelector(".dorm-img figcaption")

const mottoTag = document.querySelector(".motto")
const detailTag = document.querySelector(".detail")

const leftButton = document.querySelector("#left")
const rightButton = document.querySelector("#right")

const figureTag = document.querySelector("figure")
const bgTag = document.querySelector(".bg")

const menus = document.querySelectorAll(".header a")

const dormaImg = document.querySelector('.dorm-img');

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 100);
}
fadeIn(dormaImg);


let num =1;


leftButton.addEventListener("click",function(){
    console.log(num);
    num = num -1 ;

    if(num <=0){
        num=4;
    }

    function changeColor(num) {

        for (var i = 0; i < menus.length; i++) {
            menus[i].style.color = "#A9A9A9";
        }
  
        menus[num - 1].style.color = "#FFFFFF";
    }
 
    changeColor(num)

    dormImg.src = "./img/dorm"+num+".png"
    dormName.innerHTML = informations[num-1].dorms

    mottoTag.innerHTML = informations[num-1].mottos
    detailTag.innerHTML = informations[num-1].details
    bgTag.style.backgroundColor = informations[num-1].BGcolors

    fadeIn(dormaImg);


})
rightButton.addEventListener("click",function(){

    console.log(num);
    num = num +1 ;

    if(num >=5){
        num=1;
    }

    function changeColor(num) {

        for (var i = 0; i < menus.length; i++) {
            menus[i].style.color = "#A9A9A9";
        }
  
        menus[num - 1].style.color = "#FFFFFF";
    }
 
    changeColor(num)

    dormImg.src = "./img/dorm"+num+".png"
    dormName.innerHTML = informations[num-1].dorms

    mottoTag.innerHTML = informations[num-1].mottos
    detailTag.innerHTML = informations[num-1].details
    bgTag.style.backgroundColor = informations[num-1].BGcolors

    fadeIn(dormaImg);

})







