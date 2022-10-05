const listaUsuarios = [
    {
        id:1,
        nome:"Thiago Pereira",
        sexo:"Masculino",
        idade:20,
        email:"fulanodetal@termail.com",
    },
    {
        id:2,
        nome:"Thaís Lins",
        sexo:"Feminino",
        idade:19,
        email:"thaisdetal@gtemail.com",
    },
    {
        id:3,
        nome:"Mariana Ferreira",
        sexo:"Feminino",
        idade:25,
        email:"marianaferreira@tailme.com",
    },
    {
        id:4,
        nome:"Pedro Ivo Silva",
        sexo:"Feminino",
        idade:28,
        email:"manuelatrait@gteprmail.com",
    }
];
    listaUsuarios.forEach(function(item) {
    document.getElementById("resultado").innerHTML += `<tr>
            <th>${item.id}</th>
            <th>${item.nome}</th>
            <th>${item.sexo}</th>
            <th>${item.idade}</th>
            <th>${item.email}</th>
        </tr>`;
});
