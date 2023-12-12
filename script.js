var z = 0;
		function Question3(){
        var x = document.getElementById("Id_Reponse").value;
        if (z==1){
          return alert("Vous avez déjà répondu!");
        } else {
          if (x=='1997'){
          score +=1 ;
          document.getElementById("score").innerHTML=score;
          z=1;
          return alert("Bonne réponse ! Il s'agissait bien de 1997 !");
          } else {
          z=1
          return alert("Mauvaise réponse ! Il s'agissait de 1997 !");
          }  
        }
    }

var u = 0;
    function Question2a(){
      if (u==1){
        return alert("Vous avez déjà répondu!");
      } else {
      u = 1;
      score += 1;
      document.getElementById("score").innerHTML=score;
      return alert("Bonne réponse ! C'était bien vrai !");
      }
    }
    function Question2b(){
      if (u==1){
        return alert("Vous avez déjà répondu!");
      } else {
      u = 1;
      return alert("Mauvaise réponse ! C'était vrai !");
      }
    }

var y = 0;
    function Question1(){
      const selecteur = document.getElementById("choix");
      const monChoix=selecteur[selecteur.selectedIndex];
        if (y==1){
          return alert("Vous avez déjà répondu!");
        } else {
          if (monChoix.value=="Oda"){
          score += 1;
          document.getElementById("score").innerHTML=score;
          y = 1;
          return alert("Bonne réponse ! Il s'agissait bien de Eiichiro Oda !");
          } else if (monChoix.value=="Yoda" || monChoix.value=="Odin"){
          y = 1;
          return alert("Mauvaise réponse ! Il s'agissait de Eiichiro Oda !");
          } else {
          return alert("Vous n'avez pas répondu !");
          }
        }
    }

var q = 0;
    function Question4a(){
      if (q==1){
        return alert("Vous avez déjà répondu!");
      } else {
      q = 1;
      document.getElementById("score").innerHTML=score;
      return alert("Mauvaise réponse ! Il s'agissait de Jinbei !");
      }
    }
    function Question4b(){
      if (q==1){
        return alert("Vous avez déjà répondu!");
      } else {
      q = 1;
      return alert("Mauvaise réponse ! Il s'agissait de Jinbei !");
      }
    }
    function Question4c(){
      if (q==1){
        return alert("Vous avez déjà répondu!");
      } else {
      q = 1;
      score += 1;
      document.getElementById("score").innerHTML=score;
      return alert("Bonne réponse ! Il s'agissait bien de Jinbei !");
      }
    }
    function Question4d(){
      if (q==1){
        return alert("Vous avez déjà répondu!");
      } else {
      q = 1;
      return alert("Mauvaise réponse ! Il s'agissait de Jinbei !");
      }
    }


var n = 0;
    function Question5(){
      if (n==1){
        return alert("Vous avez déjà répondu!");
      } else {
        if (document.getElementById("Case2").checked || document.getElementById("Case4").checked){
          n = 1;
          return alert("Mauvaise réponse ! Il s'agissait de Shanks et Crocus !");
        } else if (document.getElementById("Case1").checked && document.getElementById("Case3").checked){
          n = 1;
          score += 1;
          document.getElementById("score").innerHTML=score;
          return alert("Bonne réponse ! Il s'agissait bien de Shanks et Crocus !");
        } else {
          return alert("Vous n'avez pas répondu !");
        }
      }
    }

var p = 0;
    function Question6(){
      if (p==1){
        return alert("Vous avez déjà répondu!");
      } else {
        if (document.getElementById("Rubber").checked || document.getElementById("Robot").checked){
        p = 1;
        return alert("Mauvaise réponse ! Il s'agissait de la Rumble Ball !");
        } else if(document.getElementById("Rumble").checked){
          p = 1;
          score += 1;
          document.getElementById("score").innerHTML=score;
          return alert("Bonne réponse ! Il s'agissait bien de la Rumble Ball !");
        } else {
          return alert("Vous n'avez pas répondu !");
        }
      }
    }