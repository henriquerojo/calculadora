function inserir(num)
{
    var numero = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = numero + num;
}

function limpar()
{
    document.getElementById('texto').innerHTML = "";
}

function apagar()
{
    var resultado = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('texto').innerHTML;
    if (/^\d+$/.test(resultado))
    {
        limpar();
    }
    else
    {
        document.getElementById('texto').innerHTML = eval(resultado);
    }
}