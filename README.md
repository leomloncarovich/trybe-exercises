# Meus Exercicios Da Trybe

Lista doque fazer quando iniciar um projeto desse tipo:

1. Instalar o NPM (npm init -y);
2. Instalar as bibliotecas e outras coisas que forem necessarias (npm install *habemus*);
3. No HTML temos que referenciar o script com type module;
4. Colocarmos na package.json um "type module";
5. Importar no js da maneira que a aplicacao pede
6. Caso esteja usando vite entre no package.json e defina seu vite --open 
7. Instale o lint (npm init @eslint/config) e depois (npm install @trybe/eslint-config-frontend), altera o arquivo que essas instalacoes vai criar (.eslintrc.json), vá no 'extends' e coloque (@trybe/eslint-config-frontend);
8. Podemos importar o CSS para o Js com (import "./style.css")