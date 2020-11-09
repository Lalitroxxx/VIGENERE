function FRASES (Frase)
  {
   var Salida = [];
   for(var i = 0; i < Frase.length; i++)
   {
    var Numerito = Frase.charCodeAt(i);
    if(Numerito >= 97 && Numerito <= 122)
    {
      Numerito = Numerito - 32;
    }
    if(Numerito == 209 || Numerito == 241)
    {
     Salida.push(15);
    }
    if(Numerito == 32)
    {
     Salida.push(32);
    }
    else{
     if(Numerito-64 < 15)
     {
      Salida.push(Numerito-64);
     }
     else if(Numerito-64 >= 15 && Numerito-64 < 28){
      Salida.push(Numerito-64);
     }
    }
   }
   return Salida;
  }


  
  function Encriptar(ModeEnc)
  {
   var Obtenfrase = document.getElementById('Testo').value;
   var Obtencontra = document.getElementById('Contra').value;
   var Codigos = [];
   if(Obtenfrase.length < 1 || Obtencontra.length < 1)
   {
    alert('La frase/contraseña no puede estar en blanco')
    return;
   }
   var Contraseña = FRASES (Obtencontra);
   var Frache = FRASES (Obtenfrase);
   var Spacio = 0;
   if (ModeEnc == true)
   {
    for(var i = 0; i < Frache.length; i++)
    {
     if(Frache[i] == 32)
     {
      Codigos.push(32);
      Spacio += 1;
     }else{
      Codigos.push((Contraseña[(i - Spacio) % Contraseña.length] + Frache[i]) % 27);
     }
    }
   }else{
    for(var i = 0; i < Frache.length; i++)
    {
     if(Frache[i] == 32)
     {
      Codigos.push(32);
      Spacio += 1;
     }else{
      var Value = Frache[i] - Contraseña[(i - Spacio) % Contraseña.length];
      if (Value < 1)
      {
       Value += 27;
      }
      Codigos.push(Value % 27);
     }
    }
   }
   return Codigos;
  }





  function Reconstruir(Codigos)
  {
   var Salidas = ""
   for(var i = 0; i < Codigos.length; i++)
   {
    if (Codigos[i] == 15 )
    {
      Salidas += String.fromCharCode(209);
    }
    if (Codigos[i] == 32)
    {
      Salidas += String.fromCharCode(32);
    }
    if (Codigos[i] == 0)
    {
     Salidas += String.fromCharCode(90);
    }
    if(Codigos[i] < 15 && Codigos [i] > 0)
    Salidas += String.fromCharCode(Codigos[i]+64);
    else if(Codigos[i] > 15 && Codigos[i] < 28){
      Salidas += String.fromCharCode(Codigos[i]+63);
    }
   }
   document.getElementById('Resultado').value = Salidas;
  }