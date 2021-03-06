class UserController{

    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => {
            event.preventDefault(); //__________________________________________________cancela o comportamento padrão do formulário          
            this.addLine(this.getValues()); //__________________________________________adiciona uma linha com os dados na página
        });

    }

    getValues(){

        let user ={};

        [...this.formEl.elements].forEach((field, index)=>{ //_______________________percorre o formulário e cria um objeto com campos e valores
    
            console.log([...this.formEl.elements]);

            if (field.name == "gender"){      
                if(field.checked){
                    user[field.name] = field.value;
                }      
            } else {
                user[field.name] = field.value;
            }
    
        });
    
        return new User( //_________________________________________________________instancia um objeto User aplicado aos campos de 'user'
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        );
    }

    addLine(dataUser) { //_________________________________________________________função para criar uma linha de dados na tabela
 
        this.tableEl.innerHTML = `
            <tr>
                <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                <td>${dataUser.name}</td>
                <td>${dataUser.email}</td>
                <td>${dataUser.admin}</td>
                <td>${dataUser.birth}</td>
                <td>
                    <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                    <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>
        `;
    }
}