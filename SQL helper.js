function editartexto()
{
	var formattedString = document.getElementById('textopraeditar').value.split(/\n/);
	var aspas = document.getElementById('inseriraspas');
	var parenteses = document.getElementById('parenteses');
	var duplicadas = document.getElementById('duplicadas');
	var botoes = document.getElementsByName("tipoletra");
	var numorlet = document.getElementsByName("numerosouletras");
	var vazionull = document.getElementById("vaziopornull");
	var removerEspacos = document.getElementById("removerEspacos");
	var textocomeco = document.getElementById('textocomeco').value;
	var textofim = document.getElementById('textofim').value;

	for (k=0; k<3; k++)
	{
		if (botoes[0].checked)
	 	{
			formattedString = formattedString.map(toUpper);
 		}
 		if (botoes[1].checked)
 		{
			formattedString = formattedString.map(toLower);
 		}
		if (botoes[2].checked)
 		{
			formattedString = formattedString.map(toFirstLetterUpper);
 		}
		if (numorlet[0].checked)
		{
			formattedString = formattedString.map(removeNumbers);
		}
		if (numorlet[1].checked)
		{
			formattedString = formattedString.map(toLower);
			formattedString = formattedString.map(removeLetters);
		}
		if (removerEspacos.checked)
		{
			formattedString = formattedString.map(removeSpaces);
		}
	}
	if (duplicadas.checked)
	{
		formattedString = formattedString.unique();
	}

	var newArray = [];
	formattedString.forEach
	( function(element)
	{
		if (aspas.checked)
		{
			newArray.push("\'"+element+"\'");
		}
		else
		{
			newArray.push(element);
		}
	})
	if (vazionull.checked)
	{
		newArray = newArray.map(removetwoSingleQuotes);
	}
	if (parenteses.checked)
	{
		var tamanho = newArray.length-1;
		newArray[0] = ("\("+newArray[0]);
		newArray[tamanho] = (newArray[tamanho]+"\)");
	}
	if (textocomeco != '')
	{
		newArray[0]=textocomeco+newArray[0];
	}
	if (textofim != '')
	{
		var tamanho = newArray.length-1;
		newArray[tamanho]=newArray[tamanho]+textofim;
	}
	document.getElementById('textopraeditar').value = newArray;
	newArray = [];
	alert("Função executada!");
};

function scriptselect()
{
	var textocomeco = document.getElementById('textocomeco').value;
	var scriptche = "select coluna from tabela where coluna in ";
	document.getElementById('textocomeco').value = scriptche;
};

function scriptupdate()
{
	var textocomeco = document.getElementById('textocomeco').value;
	var scriptche = "update tabela set coluna = valor where coluna in ";
	document.getElementById('textocomeco').value = scriptche;
};

function scriptdelete()
{
	var textocomeco = document.getElementById('textocomeco').value;
	var scriptche = "delete from tabela where coluna in ";
	document.getElementById('textocomeco').value = scriptche;
};

function scriptorderby()
{
	var textocomeco = document.getElementById('textofim').value;
	var scriptche = " order by coluna asc";
	document.getElementById('textofim').value = scriptche;
};

function limpartexto()
{
	document.getElementById('textopraeditar').value = '';
	alert("Função executada!");
}

function virgulasementer()
{
	var texto = document.getElementById('textopraeditar').value;
	texto = texto.split(",").join("\n");
	document.getElementById('textopraeditar').value = texto;
	alert("Função executada!");
}

function removerCaracteresEspeciais()
{
	var texto = document.getElementById('textopraeditar').value;
	texto = texto.replace(/[^\w\s]/gi, '');
	document.getElementById('textopraeditar').value = texto;
	alert("Função executada!");
}

Array.prototype.unique = function() 
{
    return Array.from(new Set(this));
}

toUpper = function(x)
{ 
	return x.toUpperCase();
};

toLower = function(x)
{ 
	return x.toLowerCase();
};

toFirstLetterUpper = function(x)
{
	return x[0].toUpperCase()+x.slice(1);
};

removeNumbers = function(x)
{
	return x.replace(/[0-9]/g, '');
}

removeLetters = function(x)
{
	return x.replace(/[a-z]/gi, '');
}

removetwoSingleQuotes = function(x)
{
	return x.replace("''", "null");
}

removeSpaces = function(x)
{
	return x.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}